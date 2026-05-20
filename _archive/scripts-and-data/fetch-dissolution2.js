const https = require('https');
const fs = require('fs');

function fetch(url, out) {
  return new Promise((resolve) => {
    const u = new URL(url);
    https.get({ hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) CastleCore/1.0 (contact: admin@castlecore.uk)' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        console.log(`${out}: redirect...`);
        fetch(r.headers.location, out).then(resolve);
      } else if (r.statusCode === 200) {
        const chunks = [];
        r.on('data', c => chunks.push(c));
        r.on('end', () => {
          fs.writeFileSync(out, Buffer.concat(chunks));
          console.log(`${out}: ${fs.statSync(out).size} bytes`);
          resolve();
        });
      } else {
        console.log(`${out}: HTTP ${r.statusCode}`);
        resolve();
      }
    });
  });
}

async function main() {
  // Fountains Abbey cellarium - vaulted arches, CC-BY-SA Katie Chan
  await fetch('https://upload.wikimedia.org/wikipedia/commons/2/29/Monks%27_cellarium%2C_Fountains_Abbey.jpg', 'tmp-cellarium.jpg');
  
  // Fountains Abbey wide view 
  await fetch('https://upload.wikimedia.org/wikipedia/commons/9/9b/Fountains_Abbey_view02_2005-08-27.jpg', 'tmp-fountains-wide.jpg');
}

main();
