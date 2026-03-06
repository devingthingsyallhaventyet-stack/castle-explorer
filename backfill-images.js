const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.js');
const UA = 'castlecore-bot/1.0 (castle explorer project)';
const THUMB_SIZE = 500;
const BATCH = 5;
const TIMEOUT_MS = 8000;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Strip common suffixes that won't match Wikipedia
function cleanName(name) {
  let clean = name
    .replace(/\s*\(Main\)\s*/g, '')
    .replace(/\s*\(Ruin[s]?\)\s*/g, '')
    .replace(/\s*\(Site\)\s*/g, '')
    .replace(/\s*\(Interior\)\s*/g, '')
    .trim();
  
  // Remove trailing descriptors
  const suffixes = ['Keep', 'Interior', 'Ruins', 'Ruin', 'Site', 'Mound', 'Gatehouse', 'Gardens', 'Grounds', 'Tower House'];
  for (const s of suffixes) {
    if (clean.endsWith(' ' + s)) {
      clean = clean.slice(0, -(s.length + 1)).trim();
      break;
    }
  }
  return clean;
}

async function queryWiki(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=${THUMB_SIZE}`;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: controller.signal });
    clearTimeout(timer);
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return null;
    for (const id of Object.keys(pages)) {
      if (pages[id]?.thumbnail?.source) {
        return pages[id].thumbnail.source;
      }
    }
  } catch (e) {}
  return null;
}

async function findImage(castle) {
  const raw = castle.name;
  const clean = cleanName(raw);
  
  // Build query list - try cleaned name first, then with location qualifiers
  const queries = new Set();
  queries.add(clean);
  if (clean !== raw) queries.add(raw); // try original too
  if (castle.county) queries.add(`${clean} ${castle.county}`);
  if (castle.country) queries.add(`${clean} ${castle.country}`);
  // If name doesn't contain castle/palace/abbey etc, try adding "castle"
  const lc = clean.toLowerCase();
  if (!lc.includes('castle') && !lc.includes('palace') && !lc.includes('abbey') && !lc.includes('priory') && !lc.includes('cathedral') && !lc.includes('church') && !lc.includes('fort')) {
    queries.add(`${clean} castle`);
  }
  
  for (const q of queries) {
    const img = await queryWiki(q);
    if (img) return img;
    await sleep(30);
  }
  return null;
}

function loadCastles() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  const fn = new Function(raw + '\nreturn CASTLES;');
  return fn();
}

function writeCastles(castles) {
  let out = 'const CASTLES = [\n';
  let first = true;
  for (let i = 0; i < castles.length; i++) {
    if (castles[i] == null) continue;
    if (!first) out += ',\n';
    out += '  ' + JSON.stringify(castles[i]);
    first = false;
  }
  out += '\n];\n';
  fs.writeFileSync(DATA_FILE, out, 'utf-8');
}

async function main() {
  const castles = loadCastles();
  console.log(`Total castles: ${castles.length}`);
  
  const toProcess = [];
  for (let i = 0; i < castles.length; i++) {
    if (castles[i] && !castles[i].image) toProcess.push(i);
  }
  console.log(`Missing images: ${toProcess.length}`);
  
  let found = 0;
  let done = 0;
  
  for (let b = 0; b < toProcess.length; b += BATCH) {
    const batch = toProcess.slice(b, b + BATCH);
    const results = await Promise.all(batch.map(async idx => {
      try {
        const img = await findImage(castles[idx]);
        if (img) {
          castles[idx].image = img;
          return true;
        }
      } catch(e) {}
      return false;
    }));
    
    found += results.filter(Boolean).length;
    done += batch.length;
    
    if (done % 100 < BATCH) {
      console.log(`Progress: ${done}/${toProcess.length}, found: ${found}`);
    }
    if (done % 500 < BATCH) {
      writeCastles(castles);
      console.log('Checkpoint saved.');
    }
    await sleep(50);
  }
  
  writeCastles(castles);
  console.log(`\nDone! Found ${found} images out of ${toProcess.length} missing.`);
}

main().catch(console.error);
