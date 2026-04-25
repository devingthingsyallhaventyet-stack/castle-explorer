const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

function fetch(url, out) {
  return new Promise((resolve) => {
    const u = new URL(url);
    https.get({ hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) CastleCore/1.0 (contact: admin@castlecore.uk)' } }, (r) => {
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
  await fetch('https://upload.wikimedia.org/wikipedia/commons/f/f9/After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg', 'tmp-henry.jpg');
  
  if (fs.existsSync('tmp-henry.jpg') && fs.statSync('tmp-henry.jpg').size > 10000) {
    const meta = await sharp('tmp-henry.jpg').metadata();
    console.log('source:', meta.width + 'x' + meta.height);
    
    // Extract top portion - face and shoulders
    const cropHeight = Math.floor(meta.height * 0.45);
    await sharp('tmp-henry.jpg')
      .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
      .resize(800, 600, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile('img/en/henry-viii-wives.webp');
    console.log('desktop:', fs.statSync('img/en/henry-viii-wives.webp').size);

    await sharp('tmp-henry.jpg')
      .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
      .resize(400, 300, { fit: 'cover' })
      .webp({ quality: 70 })
      .toFile('img/en/henry-viii-wives-mobile.webp');
    console.log('mobile:', fs.statSync('img/en/henry-viii-wives-mobile.webp').size);
  }
}

main();
