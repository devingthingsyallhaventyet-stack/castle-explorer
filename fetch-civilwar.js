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
  // Cromwell at Battle of Naseby by Charles Landseer
  await fetch('https://upload.wikimedia.org/wikipedia/commons/8/88/Charles_Landseer_Cromwell_Battle_of_Naseby.JPG', 'tmp-civilwar.jpg');
  
  if (fs.existsSync('tmp-civilwar.jpg') && fs.statSync('tmp-civilwar.jpg').size > 10000) {
    const meta = await sharp('tmp-civilwar.jpg').metadata();
    console.log('source:', meta.width + 'x' + meta.height);
    
    await sharp('tmp-civilwar.jpg')
      .resize(800, 600, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile('img/en/english-civil-war.webp');
    console.log('desktop:', fs.statSync('img/en/english-civil-war.webp').size);

    await sharp('tmp-civilwar.jpg')
      .resize(400, 300, { fit: 'cover' })
      .webp({ quality: 70 })
      .toFile('img/en/english-civil-war-mobile.webp');
    console.log('mobile:', fs.statSync('img/en/english-civil-war-mobile.webp').size);
  }
}

main();
