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
  // Try multiple Unsplash CDN URL patterns for photo WeOWKZlJ5gs
  await fetch('https://images.unsplash.com/photo-WeOWKZlJ5gs?w=1600&q=80', 'tmp-dissolution.jpg');
  if (!fs.existsSync('tmp-dissolution.jpg') || fs.statSync('tmp-dissolution.jpg').size < 10000) {
    // Direct download format
    await fetch('https://unsplash.com/photos/WeOWKZlJ5gs/download?w=1600', 'tmp-dissolution.jpg');
  }
  
  await sharp('tmp-dissolution.jpg')
    .resize(800, 600, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile('img/en/henry-viii-dissolution.webp');
  console.log('desktop:', fs.statSync('img/en/henry-viii-dissolution.webp').size);

  await sharp('tmp-dissolution.jpg')
    .resize(400, 300, { fit: 'cover' })
    .webp({ quality: 70 })
    .toFile('img/en/henry-viii-dissolution-mobile.webp');
  console.log('mobile:', fs.statSync('img/en/henry-viii-dissolution-mobile.webp').size);
}

main();
