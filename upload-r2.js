const https = require('https');
const fs = require('fs');

const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const BUCKET = 'castle-images';

// All 17 images that need uploading
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
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP ${key} - file not found`);
    return;
  }
  const data = fs.readFileSync(filePath);
  
  // Validate it's an actual image
  if (data[0] === 0x3C) { // '<' = HTML
    console.log(`SKIP ${key} - HTML file, not image`);
    return;
  }
  
  const contentType = (data[0] === 0xFF && data[1] === 0xD8) ? 'image/jpeg' : 
                      (data[0] === 0x89 && data[1] === 0x50) ? 'image/png' : 'image/jpeg';

  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: `${ACCOUNT_ID}.r2.cloudflarestorage.com`,
      path: `/${BUCKET}/${key}`,
      method: 'PUT',
      headers: {
        'Content-Type': contentType,
        'Content-Length': data.length,
        'Authorization': `Bearer ${API_TOKEN}`,
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`OK ${key} (${data.length} bytes)`);
        } else {
          console.log(`FAIL ${key} - ${res.statusCode}: ${body.substring(0, 200)}`);
        }
        resolve();
      });
    });
    req.on('error', e => { console.log(`ERROR ${key}: ${e.message}`); resolve(); });
    req.write(data);
    req.end();
  });
}

async function main() {
  for (const f of files) {
    await upload(f);
  }
}

main();
