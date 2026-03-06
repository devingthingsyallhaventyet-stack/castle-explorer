const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.js');
const UA = 'castlecore-bot/1.0 (castle explorer project)';
const THUMB_SIZE = 500;
const BATCH = 5; // concurrent requests
const TIMEOUT_MS = 8000;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

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
  const queries = [castle.name];
  if (castle.county) queries.push(`${castle.name} ${castle.county}`);
  if (castle.country) queries.push(`${castle.name} ${castle.country}`);
  if (!castle.name.toLowerCase().includes('castle') && !castle.name.toLowerCase().includes('palace')) {
    queries.push(`${castle.name} castle`);
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
  for (let i = 0; i < castles.length; i++) {
    if (castles[i] == null) continue; // skip undefined/null
    out += '  ' + JSON.stringify(castles[i]);
    if (i < castles.length - 1) out += ',';
    out += '\n';
  }
  out += '];\n';
  fs.writeFileSync(DATA_FILE, out, 'utf-8');
}

async function main() {
  const castles = loadCastles();
  console.log(`Total castles: ${castles.length}`);
  
  // Build list of indices needing images
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
