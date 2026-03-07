const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CF_ACCOUNT = '0593d0435bdf2220598fcc51183baa95';
const CF_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const BUCKET = 'castle-images';

const wikiImages = [
  { title: 'Newport_Castle,_Pembrokeshire', key: 'newport-castle-pembs.jpg' },
  { title: 'Castlehyde', key: 'castle-hyde.jpg' },
  { title: 'Finlaystone_House', key: 'finlaystone-castle.jpg' },
  { title: 'Deel_Castle', key: 'deel-castle-mayo.jpg' },
  { title: 'Esslemont_Castle', key: 'castle-of-esslemont.jpg' },
  { title: 'Stewart_Castle,_Northern_Ireland', key: 'wiki-newtownstewart.jpg' },
  { title: 'Millom_Castle', key: 'wiki-millom.jpg' },
  { title: 'Pitcur', key: 'pitcur-souterrain.jpg' },
  { title: 'Bruree', key: 'wiki-bruree.jpg' },
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'CastleExplorer/1.0 (clawzisabot@proton.me)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });
    req.on('error', reject);
  });
}

function uploadToR2(key, buffer, contentType) {
  return new Promise((resolve, reject) => {
    const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/r2/buckets/${BUCKET}/objects/${key}`;
    const parsed = new URL(url);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${CF_TOKEN}`,
        'Content-Type': contentType || 'image/jpeg',
        'Content-Length': buffer.length,
      }
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const body = Buffer.concat(chunks).toString();
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(body);
        else reject(new Error(`R2 upload ${res.statusCode}: ${body}`));
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

function validate(buf, key) {
  if (buf.length < 5000) return `Too small: ${buf.length} bytes`;
  if (buf[0] === 0x3C) return 'HTML detected (starts with <)';
  if (buf[0] === 0xFF && buf[1] === 0xD8) return null; // JPEG
  if (buf[0] === 0x89 && buf[1] === 0x50) return null; // PNG
  // Try anyway if large enough
  return null;
}

async function processWiki(item) {
  try {
    const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.title)}`;
    const apiData = await fetchUrl(apiUrl);
    const json = JSON.parse(apiData.toString());
    const imgUrl = json.originalimage?.source || json.thumbnail?.source;
    if (!imgUrl) return { key: item.key, status: 'FAIL', reason: 'No image in wiki API response' };
    
    console.log(`  Downloading: ${imgUrl}`);
    const imgBuf = await fetchUrl(imgUrl);
    const err = validate(imgBuf, item.key);
    if (err) return { key: item.key, status: 'FAIL', reason: err };
    
    // Save locally
    fs.writeFileSync(path.join('img', item.key), imgBuf);
    
    const ct = imgUrl.endsWith('.png') ? 'image/png' : 'image/jpeg';
    await uploadToR2(item.key, imgBuf, ct);
    return { key: item.key, status: 'OK', size: imgBuf.length };
  } catch (e) {
    return { key: item.key, status: 'FAIL', reason: e.message };
  }
}

async function main() {
  if (!fs.existsSync('img')) fs.mkdirSync('img');
  
  console.log('=== Processing Wikipedia images ===');
  const results = [];
  for (const item of wikiImages) {
    console.log(`Processing: ${item.title} → ${item.key}`);
    const r = await processWiki(item);
    console.log(`  ${r.status} ${r.reason || r.size + ' bytes'}`);
    results.push(r);
  }
  
  console.log('\n=== RESULTS ===');
  for (const r of results) {
    console.log(`${r.status} ${r.key} ${r.reason || r.size + ' bytes'}`);
  }
  
  fs.writeFileSync('wiki-fix-results.json', JSON.stringify(results, null, 2));
}

main();
