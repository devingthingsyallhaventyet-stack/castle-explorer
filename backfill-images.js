const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.js');

function readCastles() {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw.replace(/^const CASTLES\s*=\s*/, '').replace(/;\s*$/, ''));
}

function saveCastles(castles) {
  fs.writeFileSync(DATA_FILE, 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';', 'utf8');
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function queryWiki(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=500`;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'User-Agent': 'castlecore-bot/1.0 (castle explorer project; contact@example.com)', 'Accept': 'application/json' }
    });
    clearTimeout(timer);
    const data = await res.json();
    for (const p of Object.values(data.query?.pages || {})) {
      if (p.thumbnail?.source) return p.thumbnail.source;
    }
  } catch(e) { /* skip */ }
  return null;
}

async function findImage(c) {
  let img = await queryWiki(c.name);
  if (img) return img;
  await sleep(50);
  if (c.county) {
    img = await queryWiki(c.name + ' ' + c.county);
    if (img) return img;
    await sleep(50);
  }
  if (c.country) {
    img = await queryWiki(c.name + ' ' + c.country);
    if (img) return img;
  }
  return null;
}

async function main() {
  console.log('Loading data...');
  const castles = readCastles();
  let newImages = 0, stillMissing = 0, upgraded = 0;

  // Upgrade 120px thumbnails (deferred to end)
  // count for reporting
  for (const c of castles) {
    if (c.image && c.image.includes('120px-')) upgraded++;
  }

  // Build missing list
  const missing = [];
  for (let i = 0; i < castles.length; i++) {
    if (!castles[i].image) missing.push(i);
  }
  console.log(`${missing.length} entries need images out of ${castles.length} total`);

  console.log(`Will upgrade ${upgraded} 120px thumbnails at end`);

  for (let mi = 0; mi < missing.length; mi++) {
    const idx = missing[mi];
    const c = castles[idx];
    try {
      const img = await findImage(c);
      if (img) { castles[idx].image = img; newImages++; }
      else { stillMissing++; }
    } catch(e) {
      stillMissing++;
    }
    await sleep(50);
    if ((mi + 1) % 100 === 0) console.log(`Processed ${mi + 1}/${missing.length} — found ${newImages} so far`);
    if ((mi + 1) % 500 === 0) { saveCastles(castles); console.log('Saved checkpoint'); }
  }

  // Now do 120px upgrades
  for (const c of castles) {
    if (c.image && c.image.includes('120px-')) {
      c.image = c.image.replace(/\/\d+px-/, '/500px-');
    }
  }
  saveCastles(castles);
  console.log(`\nDone!`);
  console.log(`New images found: ${newImages}`);
  console.log(`Still missing: ${stillMissing}`);
  console.log(`120px upgraded: ${upgraded}`);
}

main().catch(e => { console.error('ERROR:', e); process.exit(1); });
