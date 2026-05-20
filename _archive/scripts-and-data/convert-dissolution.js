const sharp = require('sharp');

async function main() {
  // Preview for E
  await sharp('tmp-cellarium.jpg')
    .resize(800, 600, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile('tmp-cellarium-preview.webp');
  
  console.log('preview:', (await sharp('tmp-cellarium.jpg').metadata()).width + 'x' + (await sharp('tmp-cellarium.jpg').metadata()).height);
  console.log('done');
}

main();
