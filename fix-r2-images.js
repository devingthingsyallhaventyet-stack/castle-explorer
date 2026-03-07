const https = require('https');
const http = require('http');
const fs = require('fs');
const { execSync } = require('child_process');

// R2 credentials
let R2_ACCOUNT, R2_TOKEN, R2_BUCKET = 'castle-images';
try {
  const creds = fs.readFileSync('C:/Users/Clawzisabot/.openclaw/workspace/.cloudflare-creds', 'utf8');
  for (const line of creds.split('\n')) {
    if (line.includes('R2_ACCESS_KEY') || line.includes('ACCOUNT_ID')) {
      const [k,v] = line.split('=').map(s => s.trim());
      if (k.includes('ACCOUNT')) R2_ACCOUNT = v;
    }
  }
} catch(e) {}

// Read R2 token from env or creds file
R2_ACCOUNT = R2_ACCOUNT || '0593d0435bdf2220598fcc51183baa95';

const wikiImages = [
  ['Newport_Castle,_Pembrokeshire', 'newport-castle-pembs.jpg'],
  ['Castlehyde', 'castle-hyde.jpg'],
  ['Finlaystone_House', 'finlaystone-castle.jpg'],
  ['Deel_Castle', 'deel-castle-mayo.jpg'],
  ['Esslemont_Castle', 'castle-of-esslemont.jpg'],
  ['Stewart_Castle,_Northern_Ireland', 'wiki-newtownstewart.jpg'],
  ['Millom_Castle', 'wiki-millom.jpg'],
  ['Pitcur', 'pitcur-souterrain.jpg'],
  ['Bruree', 'wiki-bruree.jpg'],
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'CastlecoreBot/1.0 (castle explorer project)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, type: res.headers['content-type'], data: Buffer.concat(chunks) }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function isImage(buf) {
  if (!buf || buf.length < 10) return false;
  // JPEG: FF D8
  if (buf[0] === 0xFF && buf[1] === 0xD8) return true;
  // PNG: 89 50 4E 47
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) return true;
  // GIF: 47 49 46
  if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46) return true;
  // WebP: RIFF...WEBP
  if (buf[0] === 0x52 && buf[1] === 0x49 && buf[4] === 0x57 && buf[5] === 0x45 && buf[6] === 0x42 && buf[7] === 0x50) return true;
  return false;
}

async function getWikiImage(title) {
  const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const resp = await fetchUrl(apiUrl);
  const json = JSON.parse(resp.data.toString());
  if (json.originalimage && json.originalimage.source) {
    return json.originalimage.source;
  }
  if (json.thumbnail && json.thumbnail.source) {
    return json.thumbnail.source.replace(/\/\d+px-/, '/1280px-');
  }
  return null;
}

async function downloadAndSave(url, filename) {
  console.log(`  Downloading: ${url.substring(0, 80)}...`);
  const resp = await fetchUrl(url);
  if (!isImage(resp.data)) {
    console.log(`  FAILED: Not an image (got ${resp.type}, starts with: ${resp.data.toString('utf8', 0, 50)})`);
    return false;
  }
  console.log(`  OK: ${resp.data.length} bytes, type: ${resp.type}`);
  fs.writeFileSync(`img/${filename}`, resp.data);
  return true;
}

async function main() {
  // Create img dir
  if (!fs.existsSync('img')) fs.mkdirSync('img');

  console.log('=== Wikipedia Images ===');
  for (const [title, key] of wikiImages) {
    console.log(`\n${title} -> ${key}`);
    try {
      const imgUrl = await getWikiImage(title);
      if (!imgUrl) { console.log('  No image found on Wikipedia'); continue; }
      await downloadAndSave(imgUrl, key);
    } catch(e) {
      console.log(`  ERROR: ${e.message}`);
    }
  }

  console.log('\n\nNow upload these to R2 using wrangler or the S3 API.');
  console.log('Files saved in img/ directory.');
  console.log('\nTo upload, run:');
  console.log('npx wrangler r2 object put castle-images/<key> --file img/<key>');
}

main().catch(console.error);
