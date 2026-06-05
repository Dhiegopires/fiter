const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const files = [
  'index.html','sobre/index.html','contato/index.html',
  'solucoes/rh/index.html','solucoes/educacao/index.html',
  'produtos/index.html','produtos/pulse/index.html','produtos/nr01/index.html',
  'produtos/pesquisa-de-clima/index.html','produtos/ouvidoria/index.html',
  'produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/index.html',
  'produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/agradecimento/index.html',
  'blog/index.html','blog/_layout-post.html',
  'blog/NR1-e-saude-mental/index.html','blog/burnout-seguranca-psicologica-trabalho/index.html',
  'blog/guia-do-gro-e-pgr/index.html','blog/papel-estrategico-rh-gro-pgr/index.html',
  'lgpd/index.html','politica-de-privacidade/index.html','termos-de-uso/index.html',
  'scripts/gen-legal.js',
];

const OLD = "fetch('/components/footer.html?v=5')";
const NEW = "fetch('/components/footer.html?v=6')";

let count = 0;
for (const rel of files) {
  const fp = path.join(ROOT, rel);
  if (!fs.existsSync(fp)) continue;
  let c = fs.readFileSync(fp, 'utf8');
  if (c.includes(OLD)) {
    c = c.split(OLD).join(NEW);
    fs.writeFileSync(fp, c, 'utf8');
    console.log('  OK:', rel);
    count++;
  } else {
    console.log('  SKIP:', rel);
  }
}
console.log(`\n${count} files updated.`);
