const https = require('https');
const http = require('http');
const fs = require('fs');

const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const R2_BASE = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/castle-images/objects`;
const R2_PUBLIC = 'https://img.castlecore.uk';

function slug(name) {
  return name.toLowerCase().replace(/[()'']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fetch(url, referer, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
    const mod = url.startsWith('https') ? https : http;
    const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' };
    if (referer) headers['Referer'] = referer;
    mod.get(url, { headers }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) { const u = new URL(url); loc = u.protocol + '//' + u.host + loc; }
        res.resume();
        return resolve(fetch(loc, referer, maxRedirects - 1));
      }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function uploadToR2(key, buffer, contentType) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${R2_BASE}/${encodeURIComponent(key)}`);
    const opts = {
      hostname: url.hostname, path: url.pathname, method: 'PUT',
      headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': contentType || 'image/jpeg', 'Content-Length': buffer.length }
    };
    const req = https.request(opts, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => { if (res.statusCode >= 200 && res.statusCode < 300) resolve(true); else reject(new Error(`R2 ${res.statusCode}`)); });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

function contentTypeFromUrl(url) {
  if (/\.png/i.test(url)) return 'image/png';
  if (/\.webp/i.test(url)) return 'image/webp';
  return 'image/jpeg';
}

async function downloadAndUpload(castle, imgUrl, referer) {
  const buf = await fetch(imgUrl, referer);
  if (buf.length < 2000) throw new Error(`Too small: ${buf.length}b`);
  const key = `scraped-${slug(castle)}.jpg`;
  await uploadToR2(key, buf, contentTypeFromUrl(imgUrl));
  return `${R2_PUBLIC}/${key}`;
}

async function main() {
  delete require.cache[require.resolve('./data.js')];
  let castles = require('./data.js');
  if (!Array.isArray(castles)) castles = castles.CASTLES || castles;
  const nameMap = new Map();
  castles.forEach((c, i) => nameMap.set(c.name, i));

  const results = [];

  // Fix items with known image URLs or needing Referer
  const fixes = [
    // Lohort - the britainirelandcastles.com site has castle images in a specific pattern
    { castle: 'Lohort', imgUrl: 'https://www.britainirelandcastles.com/image/Ireland/Cork/Lohort-Castle.jpg', referer: 'https://www.britainirelandcastles.com/Ireland/County-Cork/Lohort-Castle.html' },
    // Kiltinan - relative URL needs resolving
    { castle: 'Kiltinan', imgUrl: 'https://fethard.com/research/images/Kiltinan_1960s.jpg', referer: 'https://fethard.com/research/kiltinan_castle.html' },
    // Castlemore - castles.nl with referer
    { castle: 'Castlemore', imgUrl: 'https://www.castles.nl/images/ireland/0first/cmore.jpg', referer: 'https://www.castles.nl/castlemore-castle' },
    // Roughan - castles.nl with referer  
    { castle: 'Roughan', imgUrl: 'https://www.castles.nl/images/uk/ni/0first/roug.jpg', referer: 'https://www.castles.nl/roughan-castle' },
  ];

  for (const fix of fixes) {
    await sleep(3000);
    try {
      const r2Url = await downloadAndUpload(fix.castle, fix.imgUrl, fix.referer);
      const idx = nameMap.get(fix.castle);
      if (idx !== undefined) {
        const c = castles[idx];
        if (!c.image || c.image.includes('placeholder') || c.image.includes('no-image') || c.image.includes('Maps/Ireland')) c.image = r2Url;
        else { if (!c.gallery) c.gallery = []; if (!c.gallery.includes(r2Url)) c.gallery.push(r2Url); }
      }
      console.log(`OK: ${fix.castle} → ${r2Url}`);
      results.push({ name: fix.castle, url: r2Url, status: 'ok' });
    } catch (e) {
      console.log(`FAIL: ${fix.castle} - ${e.message}`);
      results.push({ name: fix.castle, error: e.message, status: 'fail' });
    }
  }

  // Bruree - try with different approach
  await sleep(3000);
  try {
    // Try fetching the page HTML with proper headers to find image
    const html = (await fetch('https://www.ouririshheritage.org/content/archive/place/limerick-castles-database-archive/bruree-ballynoe-castle', 'https://www.google.com')).toString();
    // Look for any castle image
    const m = html.match(/src=["'](https?:\/\/[^"']*(?:bruree|ballynoe|castle)[^"']*\.(?:jpg|jpeg|png|webp))/i) ||
              html.match(/src=["'](https?:\/\/[^"']*\.(?:jpg|jpeg|png|webp))/i);
    if (m) {
      const r2Url = await downloadAndUpload('Bruree', m[1], 'https://www.ouririshheritage.org');
      const idx = nameMap.get('Bruree');
      if (idx !== undefined) {
        const c = castles[idx];
        if (!c.image || c.image.includes('placeholder')) c.image = r2Url;
      }
      console.log(`OK: Bruree → ${r2Url}`);
      results.push({ name: 'Bruree', url: r2Url, status: 'ok' });
    } else {
      throw new Error('No image found');
    }
  } catch (e) {
    console.log(`FAIL: Bruree - ${e.message}`);
    results.push({ name: 'Bruree', error: e.message, status: 'fail' });
  }

  // Pitcur Souterrain - Google share link, try fetching
  await sleep(3000);
  try {
    const html = (await fetch('https://share.google/mu9J2HhkGs06aKZ1U', 'https://www.google.com')).toString();
    const m = html.match(/src=["'](https?:\/\/[^"']*\.(?:jpg|jpeg|png|webp))/i) ||
              html.match(/"(https:\/\/lh[0-9]*\.googleusercontent\.com\/[^"]+)"/);
    if (m) {
      const r2Url = await downloadAndUpload('Pitcur Souterrain', m[1]);
      const idx = nameMap.get('Pitcur Souterrain');
      if (idx !== undefined) {
        const c = castles[idx];
        if (!c.image || c.image.includes('placeholder')) c.image = r2Url;
      }
      console.log(`OK: Pitcur Souterrain → ${r2Url}`);
      results.push({ name: 'Pitcur Souterrain', url: r2Url, status: 'ok' });
    } else {
      // Save HTML for debugging
      fs.writeFileSync('pitcur-debug.html', html.substring(0, 5000));
      throw new Error('No image found in Google share page');
    }
  } catch (e) {
    console.log(`FAIL: Pitcur Souterrain - ${e.message}`);
    results.push({ name: 'Pitcur Souterrain', error: e.message, status: 'fail' });
  }

  // Save data.js
  const exportLine = `\nif (typeof module !== 'undefined') module.exports = CASTLES;\n`;
  fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n' + exportLine);

  console.log('\n=== FIX RESULTS ===');
  for (const r of results) {
    console.log(`  ${r.status === 'ok' ? '✓' : '✗'} ${r.name}: ${r.url || r.error}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
