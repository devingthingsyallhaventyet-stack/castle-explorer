const https = require('https');
const fs = require('fs');

const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const BUCKET = 'castle-images';

const files = [
  'newport-castle-pembs.jpg',
  'castle-hyde.jpg',
  'finlaystone-castle.jpg',
  'deel-castle-mayo.jpg',
  'castle-of-esslemont.jpg',
  'wiki-newtownstewart.jpg',
  'wiki-millom.jpg',
  'pitcur-souterrain.jpg',
  'wiki-bruree.jpg',
  'scraped-blackcastle.jpg',
  'scraped-castlemore.jpg',
  'scraped-dromore-limerick.jpg',
  'scraped-kiltinan.jpg',
  'scraped-lohort.jpg',
  'scraped-roughan.jpg',
  'scraped-wardour.jpg',
  'wiki-peele-tower-kentmere.jpg',
];

async function upload(key) {
  const filePath = `img/${key}`;
  if (!fs.existsSync(filePath)) { console.log(`SKIP ${key}`); return; }
  const data = fs.readFileSync(filePath);
  if (data[0] === 0x3C) { console.log(`SKIP ${key} - HTML`); return; }

  const contentType = (data[0] === 0xFF && data[1] === 0xD8) ? 'image/jpeg' : 
                      (data[0] === 0x89 && data[1] === 0x50) ? 'image/png' : 'image/jpeg';

  return new Promise((resolve) => {
    const body = JSON.stringify({
      key,
      contentType,
      cacheControl: 'no-cache, must-revalidate',
    });
    
    // Re-upload with cache-control header
    const req = https.request({
      hostname: 'api.cloudflare.com',
      path: `/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': contentType,
        'Content-Length': data.length,
        'Cache-Control': 'no-cache, must-revalidate, max-age=0',
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        console.log(`${res.statusCode >= 200 && res.statusCode < 300 ? 'OK' : 'FAIL'} ${key} (${data.length} bytes) - ${res.statusCode}`);
        resolve();
      });
    });
    req.on('error', e => { console.log(`ERROR ${key}: ${e.message}`); resolve(); });
    req.write(data);
    req.end();
  });
}

async function main() {
  for (const f of files) await upload(f);
  console.log('\nDone. Cache may still need purging on Cloudflare.');
}
main();
