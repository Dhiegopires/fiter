const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const PLACEHOLDER = `<div id="footer-placeholder"></div>
<script>
  fetch('/components/footer.html')
    .then(r => r.text())
    .then(html => { document.getElementById('footer-placeholder').innerHTML = html; if (window.lucide) lucide.createIcons(); });
</script>`;

const files = [
  'index.html',
  'sobre/index.html',
  'solucoes/rh/index.html',
  'solucoes/educacao/index.html',
  'produtos/index.html',
  'produtos/pulse/index.html',
  'produtos/nr01/index.html',
  'produtos/pesquisa-de-clima/index.html',
  'produtos/ouvidoria/index.html',
  'produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/index.html',
  'produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/agradecimento/index.html',
  'blog/index.html',
  'blog/_layout-post.html',
  'blog/NR1-e-saude-mental/index.html',
  'blog/burnout-seguranca-psicologica-trabalho/index.html',
  'blog/guia-do-gro-e-pgr/index.html',
  'blog/papel-estrategico-rh-gro-pgr/index.html',
  'lgpd/index.html',
  'politica-de-privacidade/index.html',
  'termos-de-uso/index.html',
];

const FOOTER_RE = /<footer class="ds-footer">[\s\S]*?<\/footer>/;

let count = 0;
for (const rel of files) {
  const fp = path.join(ROOT, rel);
  if (!fs.existsSync(fp)) {
    console.log('  SKIP (not found):', rel);
    continue;
  }
  let html = fs.readFileSync(fp, 'utf8');
  const before = html;
  html = html.replace(FOOTER_RE, PLACEHOLDER);
  if (html !== before) {
    fs.writeFileSync(fp, html, 'utf8');
    console.log('  OK:', rel);
    count++;
  } else {
    console.log('  NO MATCH:', rel);
  }
}
console.log(`\nDone: ${count} files updated.`);
