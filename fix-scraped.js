const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CF_ACCOUNT = '0593d0435bdf2220598fcc51183baa95';
const CF_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const BUCKET = 'castle-images';

const scrapedImages = [
  { url: 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/old-wardour-castle/wardour-banner1.jpg?w=1440&h=612&mode=crop&scale=both&quality=60', key: 'scraped-wardour.jpg' },
  { url: 'https://greatacre.wordpress.com/wp-content/uploads/2017/03/p3150820_thumb.jpg?w=640&h=480', key: 'wiki-peele-tower-kentmere.jpg' },
  { url: 'https://www.britainirelandcastles.com/image/Ireland/lahort-castle-1.jpg', key: 'scraped-lohort.jpg' },
  { url: 'https://fethard.com/research/images/Kiltinan_1960s.jpg', key: 'scraped-kiltinan.jpg' },
  { url: 'https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/cd57e340-8b95-4b3d-868d-691ff2ff98d2/a408c983-5fb2-4d33-8626-78a6d2e198bf_5386.jpg?w=1332&q=66&h=750&fit=crop&fm=jpg', key: 'scraped-blackcastle.jpg' },
  { url: 'https://www.castles.nl/images/ireland/0first/cmore.jpg', key: 'scraped-castlemore.jpg' },
  { url: 'https://www.buildingsofireland.ie/building-images/niah/images/survey_specific/800/21901202_1.jpg', key: 'scraped-dromore-limerick.jpg' },
  { url: 'https://www.castles.nl/images/uk/ni/0first/roug.jpg', key: 'scraped-roughan.jpg' },
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) { const u = new URL(url); loc = u.origin + loc; }
        return fetchUrl(loc).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });
    req.on('error', reject);
  });
}

function uploadToR2(key, buffer) {
  return new Promise((resolve, reject) => {
    const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/r2/buckets/${BUCKET}/objects/${key}`;
    const parsed = new URL(url);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${CF_TOKEN}`,
        'Content-Type': 'image/jpeg',
        'Content-Length': buffer.length,
      }
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve('ok');
        else reject(new Error(`R2 ${res.statusCode}: ${Buffer.concat(chunks).toString()}`));
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

function validate(buf) {
  if (buf.length < 5000) return `Too small: ${buf.length} bytes`;
  if (buf[0] === 0x3C) return 'HTML detected';
  return null;
}

async function main() {
  if (!fs.existsSync('img')) fs.mkdirSync('img');
  const results = [];
  
  for (const item of scrapedImages) {
    console.log(`Downloading: ${item.key} from ${item.url.substring(0, 80)}...`);
    try {
      const buf = await fetchUrl(item.url);
      const err = validate(buf);
      if (err) { console.log(`  FAIL: ${err}`); results.push({key: item.key, status: 'FAIL', reason: err}); continue; }
      fs.writeFileSync(path.join('img', item.key), buf);
      await uploadToR2(item.key, buf);
      console.log(`  OK: ${buf.length} bytes`);
      results.push({key: item.key, status: 'OK', size: buf.length});
    } catch(e) {
      console.log(`  FAIL: ${e.message}`);
      results.push({key: item.key, status: 'FAIL', reason: e.message});
    }
  }
  
  console.log('\n=== SCRAPED RESULTS ===');
  for (const r of results) console.log(`${r.status} ${r.key} ${r.reason || r.size + ' bytes'}`);
}

main();
