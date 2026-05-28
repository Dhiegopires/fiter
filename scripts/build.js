const fs = require('fs');
const path = require('path');
const csso = require('csso');
const { minify } = require('terser');

const ROOT = path.join(__dirname, '..');

const CSS_SRC = path.join(ROOT, 'assets', 'css', 'style.css');
const CSS_DST = path.join(ROOT, 'assets', 'css', 'style.min.css');

const JS_SRC = path.join(ROOT, 'assets', 'js', 'main.js');
const JS_DST = path.join(ROOT, 'assets', 'js', 'main.min.js');

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
    } else {
        console.warn('    ⚠ main.js não encontrado');
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
