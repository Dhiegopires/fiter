const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const csso = require('csso');
const { minify } = require('terser');

const ROOT = path.join(__dirname, '..');

const CSS_SRC = path.join(ROOT, 'assets', 'css', 'style.css');
const CSS_DST = path.join(ROOT, 'assets', 'css', 'style.min.css');

const JS_SRC = path.join(ROOT, 'assets', 'js', 'main.js');
const JS_DST = path.join(ROOT, 'assets', 'js', 'main.min.js');

function walkHtml(dir, files = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name !== 'node_modules' && entry.name !== 'posts') walkHtml(full, files);
        } else if (entry.name.endsWith('.html')) {
            files.push(full);
        }
    }
    return files;
}

const md5 = buf => crypto.createHash('md5').update(buf).digest('hex').slice(0, 8);

// Acrescenta ?v=<hash do conteúdo> nas referências ao asset em todo HTML.
// O Cloudflare guarda assets estáticos por 7 dias: sem o hash, um deploy pode
// servir CSS novo com JS velho (foi o que duplicou o texto dos botões).
function injectHash(urlPath, hash) {
    const esc = urlPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(href|src)="${esc}(?:\\?v=[^"]*)?"`, 'g');
    let count = 0;
    for (const file of walkHtml(ROOT)) {
        const content = fs.readFileSync(file, 'utf-8');
        const next = content.replace(re, `$1="${urlPath}?v=${hash}"`);
        if (next !== content) { fs.writeFileSync(file, next, 'utf-8'); count++; }
    }
    return count;
}

async function build() {
    console.log('🎯 Build de assets\n');

    // ── CSS ──────────────────────────────────────────────
    console.log('  CSS:');
    if (fs.existsSync(CSS_SRC)) {
        const css = fs.readFileSync(CSS_SRC, 'utf-8');
        const minified = csso.minify(css).css;
        fs.writeFileSync(CSS_DST, minified, 'utf-8');
        const origSize = (Buffer.byteLength(css) / 1024).toFixed(1);
        const newSize = (Buffer.byteLength(minified) / 1024).toFixed(1);
        console.log(`    ✓ style.css → style.min.css  (${origSize} KB → ${newSize} KB)`);

        const hash = md5(minified);
        const n = injectHash('/assets/css/style.min.css', hash);
        console.log(`    ✓ Cache-busting: ?v=${hash} em ${n} HTML`);
    } else {
        console.warn('    ⚠ style.css não encontrado');
    }

    // ── JS ───────────────────────────────────────────────
    console.log('\n  JS:');
    if (fs.existsSync(JS_SRC)) {
        const js = fs.readFileSync(JS_SRC, 'utf-8');
        const result = await minify(js, { sourceMap: false });
        fs.writeFileSync(JS_DST, result.code, 'utf-8');
        const origSize = (Buffer.byteLength(js) / 1024).toFixed(1);
        const newSize = (Buffer.byteLength(result.code) / 1024).toFixed(1);
        console.log(`    ✓ main.js → main.min.js  (${origSize} KB → ${newSize} KB)`);

        const n = injectHash('/assets/js/main.min.js', md5(result.code));
        console.log(`    ✓ Cache-busting: ?v=${md5(result.code)} em ${n} HTML`);
    } else {
        console.warn('    ⚠ main.js não encontrado');
    }

    // ── Favicons ─────────────────────────────────────────
    for (const icon of ['/assets/img/fiter_logo_fi.svg', '/favicon.ico', '/apple-touch-icon.png']) {
        const file = path.join(ROOT, icon);
        if (fs.existsSync(file)) injectHash(icon, md5(fs.readFileSync(file)));
    }

    // ── Imagens ──────────────────────────────────────────
    console.log('\n  Imagens:');
    const { execSync } = require('child_process');
    try {
        execSync('node scripts/optimize-images.js', { cwd: ROOT, stdio: 'inherit' });
    } catch (err) {
        console.error('    ✗ Erro na otimização de imagens');
        process.exit(1);
    }

    console.log('\n✅ Build concluído!');
}

build().catch(err => {
    console.error('✗ Erro no build:', err);
    process.exit(1);
});
