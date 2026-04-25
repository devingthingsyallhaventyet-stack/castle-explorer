const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

function fetch(url, out) {
  return new Promise((resolve) => {
    const u = new URL(url);
    https.get({ hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        fetch(r.headers.location, out).then(resolve);
      } else if (r.statusCode === 200) {
        const chunks = [];
        r.on('data', c => chunks.push(c));
        r.on('end', () => { fs.writeFileSync(out, Buffer.concat(chunks)); console.log(out + ': ' + fs.statSync(out).size); resolve(); });
      } else { console.log(out + ': HTTP ' + r.statusCode); resolve(); }
    });
  });
}

async function main() {
  await fetch('https://img.castlecore.uk/england/pexels-olliecraig1-6398416.jpg', 'tmp-tudors.jpg');
  
  if (fs.existsSync('tmp-tudors.jpg') && fs.statSync('tmp-tudors.jpg').size > 10000) {
    const meta = await sharp('tmp-tudors.jpg').metadata();
    console.log('source:', meta.width + 'x' + meta.height);
    
    await sharp('tmp-tudors.jpg')
      .resize(800, 600, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile('img/en/the-tudors.webp');
    console.log('desktop:', fs.statSync('img/en/the-tudors.webp').size);

    await sharp('tmp-tudors.jpg')
      .resize(400, 300, { fit: 'cover' })
      .webp({ quality: 70 })
      .toFile('img/en/the-tudors-mobile.webp');
    console.log('mobile:', fs.statSync('img/en/the-tudors-mobile.webp').size);
  }
}

main();
