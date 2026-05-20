const https = require('https');
const fs = require('fs');

const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const BUCKET = 'castle-images';

// Try multiple Edinburgh Castle images that show the full castle
const candidates = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edinburgh_Castle_from_the_north.JPG/1280px-Edinburgh_Castle_from_the_north.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Edinburgh_Castle_from_the_south_east.JPG/1280px-Edinburgh_Castle_from_the_south_east.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Edinburgh_Castle_-_01.jpg/1280px-Edinburgh_Castle_-_01.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Edinburgh_Castle_from_Princes_Street.jpg/1280px-Edinburgh_Castle_from_Princes_Street.jpg',
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'CastlecoreBot/1.0 (https://castlecore.uk)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) return download(res.headers.location).then(resolve).catch(reject);
      if (res.statusCode !== 200) { reject(new Error('Status: ' + res.statusCode)); return; }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function uploadR2(key, data) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.cloudflare.com',
      path: `/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${key}`,
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/jpeg', 'Content-Length': data.length }
    }, (res) => {
      let body = ''; res.on('data', c => body += c);
      res.on('end', () => resolve(res.statusCode));
    });
    req.on('error', reject);
    req.write(data); req.end();
  });
}

async function main() {
  for (const url of candidates) {
    try {
      console.log('Trying: ' + url.split('/').pop());
      const data = await download(url);
      console.log('  Downloaded ' + (data.length/1024).toFixed(0) + 'KB');
      const status = await uploadR2('edinburgh-castle-hero.jpg', data);
      console.log('  Upload status: ' + status);
      if (status === 200) {
        // Update the page
        let h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');
        h = h.replace(
          /img\.castlecore\.uk\/edinburgh-castle-interior\.jpg/g,
          'img.castlecore.uk/edinburgh-castle-hero.jpg'
        );
        // Also update og:image
        h = h.replace(
          /(property="og:image" content=")[^"]+(")/,
          '$1https://img.castlecore.uk/edinburgh-castle-hero.jpg$2'
        );
        h = h.replace(
          /(name="twitter:image" content=")[^"]+(")/,
          '$1https://img.castlecore.uk/edinburgh-castle-hero.jpg$2'
        );
        fs.writeFileSync('site/edinburgh-castle.html', h);
        console.log('  ✅ Page updated with new hero!');
        return;
      }
    } catch(e) {
      console.log('  Failed: ' + e.message);
    }
  }
  console.log('All candidates failed');
}

main();
