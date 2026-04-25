const https = require('https');
const fs = require('fs');

function fetch(url, out) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 CastleCore/1.0' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        console.log(`${out}: redirect → ${r.headers.location.slice(0,80)}...`);
        fetch(r.headers.location, out).then(resolve);
      } else if (r.statusCode === 200) {
        r.pipe(fs.createWriteStream(out)).on('finish', () => {
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
  // Wikimedia Fountains Abbey cellarium - dramatic vaulted arches
  await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Monks%27_cellarium%2C_Fountains_Abbey.jpg/1280px-Monks%27_cellarium%2C_Fountains_Abbey.jpg', 'tmp-cellarium.jpg');
  
  // Wikimedia Rievaulx Abbey - towering nave ruins
  await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rievaulx_Abbey_ruins.jpg/1280px-Rievaulx_Abbey_ruins.jpg', 'tmp-rievaulx.jpg');
  
  // Wikimedia Fountains Abbey wide view with tower
  await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Fountains_Abbey_view02_2005-08-27.jpg/1280px-Fountains_Abbey_view02_2005-08-27.jpg', 'tmp-fountains-wide.jpg');

  // Unsplash Whitby Abbey arches
  await fetch('https://images.unsplash.com/photo-1726241899602-0b498460dd42?w=1280', 'tmp-whitby-arches.jpg');
}

main();
