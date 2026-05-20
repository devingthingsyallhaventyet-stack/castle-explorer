const sharp = require('sharp');
const fs = require('fs');

async function main() {
  const meta = await sharp('tmp-dissolution.jpg').metadata();
  // Last time: top 55%. Now shift down slightly - start at 10%, take 55%
  const top = Math.floor(meta.height * 0.10);
  const cropHeight = Math.floor(meta.height * 0.55);
  
  await sharp('tmp-dissolution.jpg')
    .extract({ left: 0, top, width: meta.width, height: cropHeight })
    .resize(800, 600, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile('img/en/henry-viii-dissolution.webp');
  console.log('desktop:', fs.statSync('img/en/henry-viii-dissolution.webp').size);

  await sharp('tmp-dissolution.jpg')
    .extract({ left: 0, top, width: meta.width, height: cropHeight })
    .resize(400, 300, { fit: 'cover' })
    .webp({ quality: 70 })
    .toFile('img/en/henry-viii-dissolution-mobile.webp');
  console.log('mobile:', fs.statSync('img/en/henry-viii-dissolution-mobile.webp').size);
}

main();
