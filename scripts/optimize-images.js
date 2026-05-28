const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'assets', 'img');

const IMAGES = [
    {
        src: 'hero_dashboard.png',
        variants: [
            { name: 'hero_dashboard-og', width: 1024, webp: true, jpeg: true },
            { name: 'hero_dashboard-800w', width: 800, webp: true },
            { name: 'hero_dashboard-400w', width: 400, webp: true },
        ],
    },
];

async function optimize() {
    for (const image of IMAGES) {
        const srcPath = path.join(IMG_DIR, image.src);
        if (!fs.existsSync(srcPath)) {
            console.warn(`  ⚠ Imagem não encontrada: ${image.src}`);
            continue;
        }

        console.log(`\n  Otimizando: ${image.src}`);

        for (const variant of image.variants) {
            const outputBase = path.join(IMG_DIR, variant.name);

            if (variant.webp) {
                const webpPath = outputBase + '.webp';
                if (fs.existsSync(webpPath)) {
                    fs.unlinkSync(webpPath);
                }
                await sharp(srcPath)
                    .resize(variant.width, variant.width, { fit: 'inside', withoutEnlargement: true })
                    .webp({ quality: 70 })
                    .toFile(webpPath);
                const size = fs.statSync(webpPath).size;
                console.log(`    ✓ ${variant.name}.webp  (${(size / 1024).toFixed(1)} KB)`);
            }

            if (variant.jpeg) {
                const jpegPath = outputBase + '.jpg';
                if (fs.existsSync(jpegPath)) {
                    fs.unlinkSync(jpegPath);
                }
                await sharp(srcPath)
                    .resize(variant.width, variant.width, { fit: 'inside', withoutEnlargement: true })
                    .jpeg({ quality: 70 })
                    .toFile(jpegPath);
                const size = fs.statSync(jpegPath).size;
                console.log(`    ✓ ${variant.name}.jpg  (${(size / 1024).toFixed(1)} KB)`);
            }
        }
    }

    console.log('\n  ✅ Imagens otimizadas!');
}

optimize().catch(err => {
    console.error('  ✗ Erro na otimização de imagens:', err);
    process.exit(1);
});
