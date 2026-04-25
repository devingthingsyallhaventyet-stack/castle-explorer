const sharp = require('sharp');
const fs = require('fs');

async function main() {
  // Source is 2400x3380 - face is in the top ~30%
  // Extract a landscape crop focused on the face area
  await sharp('tmp-william.jpg')
    .extract({ left: 0, top: 200, width: 2400, height: 1600 })
    .resize(800, 600, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile('img/en/william-the-conqueror.webp');
  console.log('desktop:', fs.statSync('img/en/william-the-conqueror.webp').size);

  await sharp('tmp-william.jpg')
    .extract({ left: 0, top: 200, width: 2400, height: 1600 })
    .resize(400, 300, { fit: 'cover' })
    .webp({ quality: 70 })
    .toFile('img/en/william-the-conqueror-mobile.webp');
  console.log('mobile:', fs.statSync('img/en/william-the-conqueror-mobile.webp').size);
}

main();
