const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const files = [
    'index.html',
    'solucoes/rh/index.html',
    'solucoes/educacao/index.html',
    'produtos/index.html',
    'produtos/portal-de-transparencia/index.html',
    'produtos/nr01/index.html',
    'produtos/pulse/index.html',
    'blog/index.html',
    'sobre/index.html',
    'contato/index.html',
    'clientes/index.html',
    'produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/index.html',
];

const regex = /<h2[^>]*class="[^"]*ds-section-title[^"]*"[^>]*>[\s\S]*?<\/h2>\n?/g;

let total = 0;
for (const rel of files) {
    const fp = path.join(ROOT, rel);
    if (!fs.existsSync(fp)) continue;
    let html = fs.readFileSync(fp, 'utf8');
    const matches = html.match(regex) || [];
    if (matches.length === 0) continue;
    html = html.replace(regex, '');
    fs.writeFileSync(fp, html, 'utf8');
    total += matches.length;
    console.log('  removed ' + matches.length + ': ' + rel);
}
console.log('Total: ' + total);
