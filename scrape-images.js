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

function fetch(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) { const u = new URL(url); loc = u.protocol + '//' + u.host + loc; }
        res.resume();
        return resolve(fetch(loc, maxRedirects - 1));
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
      res.on('end', () => { if (res.statusCode >= 200 && res.statusCode < 300) resolve(true); else reject(new Error(`R2 ${res.statusCode}: ${Buffer.concat(chunks).toString().substring(0, 200)}`)); });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

function extractImageFromHtml(html, pageUrl) {
  // Try og:image first
  let m = html.match(/property=["']og:image["'][^>]*content=["']([^"']+)/i) ||
          html.match(/content=["']([^"']+)["'][^>]*property=["']og:image/i);
  if (m) return m[1];

  // Try first significant image
  const imgs = [];
  const re = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const src = match[1];
    if (src.match(/\.(jpg|jpeg|png|webp)/i) && !src.match(/logo|icon|banner|ad|sprite|pixel/i)) {
      imgs.push(src);
    }
  }
  if (imgs.length > 0) {
    // Resolve relative URLs
    let img = imgs[0];
    if (img.startsWith('//')) img = 'https:' + img;
    else if (img.startsWith('/')) {
      const u = new URL(pageUrl);
      img = u.protocol + '//' + u.host + img;
    }
    return img;
  }
  return null;
}

function contentTypeFromUrl(url) {
  if (/\.png/i.test(url)) return 'image/png';
  if (/\.webp/i.test(url)) return 'image/webp';
  return 'image/jpeg';
}

async function main() {
  delete require.cache[require.resolve('./data.js')];
  let castles = require('./data.js');
  if (!Array.isArray(castles)) castles = castles.CASTLES || castles;
  const nameMap = new Map();
  castles.forEach((c, i) => nameMap.set(c.name, i));

  const results = { success: [], failed: [] };

  // Part 1: Retry failed Wikipedia images
  const wikiRetries = [
    { castle: 'Deel Castle Mayo', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Castles_of_Connacht-_Deel%2C_Mayo_%281%29_%28geograph_1954385%29.jpg' },
    { castle: 'Newtownstewart', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Stewart_Castle%2C_Geograph.jpg' },
  ];

  console.log('=== Retrying failed Wikipedia images ===');
  for (const item of wikiRetries) {
    await sleep(5000);
    try {
      const buf = await fetch(item.imgUrl);
      if (buf.length < 2000) throw new Error(`Too small: ${buf.length}b`);
      const key = `wiki-${slug(item.castle)}.jpg`;
      await uploadToR2(key, buf, contentTypeFromUrl(item.imgUrl));
      const r2Url = `${R2_PUBLIC}/${key}`;
      const idx = nameMap.get(item.castle);
      if (idx !== undefined) {
        const c = castles[idx];
        if (!c.image || c.image.includes('placeholder') || c.image.includes('no-image')) c.image = r2Url;
        else { if (!c.gallery) c.gallery = []; if (!c.gallery.includes(r2Url)) c.gallery.push(r2Url); }
      }
      console.log(`OK: ${item.castle} → ${r2Url}`);
      results.success.push({ name: item.castle, url: r2Url });
    } catch (e) {
      console.log(`FAIL: ${item.castle} - ${e.message}`);
      results.failed.push({ name: item.castle, error: e.message });
    }
  }

  // Part 2: Scrape images
  const scrapeItems = [
    { castle: 'Wardour', url: 'https://www.english-heritage.org.uk/visit/places/old-wardour-castle/' },
    { castle: 'Peele Tower Kentmere', url: 'https://greatacre.wordpress.com/2017/03/24/kentmere-hall/', knownImg: 'https://greatacre.wordpress.com/wp-content/uploads/2017/03/p3150820.jpg' },
    { castle: 'Lohort', url: 'https://www.britainirelandcastles.com/Ireland/County-Cork/Lohort-Castle.html' },
    { castle: 'Kiltinan', url: 'https://fethard.com/research/kiltinan_castle.html' },
    { castle: 'Blackcastle', url: 'https://www.discoverireland.ie/carlow/black-castle' },
    { castle: 'Castlemore', url: 'https://www.castles.nl/castlemore-castle' },
    { castle: 'Dromore (Limerick)', url: 'https://www.buildingsofireland.ie/buildings-search/building/21901202/dromore-castle-limerick' },
    { castle: 'Bruree', url: 'https://www.ouririshheritage.org/content/archive/place/limerick-castles-database-archive/bruree-ballynoe-castle' },
    { castle: 'Roughan', url: 'https://www.castles.nl/roughan-castle' },
    { castle: 'Pitcur Souterrain', url: 'https://share.google/mu9J2HhkGs06aKZ1U' },
  ];

  console.log('\n=== Part 2: Scraping images ===');
  for (const item of scrapeItems) {
    await sleep(3000);
    try {
      let imgUrl = item.knownImg;
      if (!imgUrl) {
        const html = (await fetch(item.url)).toString();
        imgUrl = extractImageFromHtml(html, item.url);
        if (!imgUrl) throw new Error('No image found in page HTML');
      }
      console.log(`  ${item.castle}: found ${imgUrl.substring(0, 80)}...`);
      
      const buf = await fetch(imgUrl);
      if (buf.length < 2000) throw new Error(`Image too small: ${buf.length}b`);
      
      const key = `scraped-${slug(item.castle)}.jpg`;
      await uploadToR2(key, buf, contentTypeFromUrl(imgUrl));
      const r2Url = `${R2_PUBLIC}/${key}`;
      
      const idx = nameMap.get(item.castle);
      if (idx !== undefined) {
        const c = castles[idx];
        if (!c.image || c.image.includes('placeholder') || c.image.includes('no-image')) c.image = r2Url;
        else { if (!c.gallery) c.gallery = []; if (!c.gallery.includes(r2Url)) c.gallery.push(r2Url); }
      }
      
      console.log(`  OK: ${item.castle} → ${r2Url}`);
      results.success.push({ name: item.castle, url: r2Url });
    } catch (e) {
      console.log(`  FAIL: ${item.castle} - ${e.message}`);
      results.failed.push({ name: item.castle, error: e.message });
    }
  }

  // Save data.js
  const exportLine = `\nif (typeof module !== 'undefined') module.exports = CASTLES;\n`;
  fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n' + exportLine);

  console.log('\n=== FINAL RESULTS ===');
  console.log(`Success: ${results.success.length}`);
  for (const s of results.success) console.log(`  ✓ ${s.name} → ${s.url}`);
  console.log(`Failed: ${results.failed.length}`);
  for (const f of results.failed) console.log(`  ✗ ${f.name}: ${f.error}`);
  
  fs.writeFileSync('scrape-results.json', JSON.stringify(results, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
