const fs = require('fs');
const results = JSON.parse(fs.readFileSync('wiki-aggressive-results.json','utf8'));
const notFound = results.stillNotFound;

console.log('FINAL check:', notFound.length, 'entries\n');

async function checkWiki(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=1280&format=json`;
  try {
    const r = await fetch(url);
    const text = await r.text();
    if (!text.startsWith('{')) return null;
    const j = JSON.parse(text);
    const page = Object.values(j.query.pages)[0];
    if (page && page.thumbnail && page.thumbnail.source) return page.thumbnail.source;
  } catch(e) {}
  return null;
}

async function tryName(name) {
  // Build every possible variant
  const variants = [];
  
  // Original
  variants.push(name);
  
  // Strip everything after last space-separated known word
  const stripWords = ['Solent','Fife','Down','Donegal','Galway','Mayo','Carlow','Meath',
    'Clare','Laois','Wexford','Kilkenny','Westmeath','Tipperary','Kinsale','Spenser',
    'Lim','Pembs','Banbury'];
  let n = name;
  // Strip parenthetical
  n = n.replace(/\s*\(.*?\)/g, '').trim();
  variants.push(n);
  
  // Strip trailing location words
  for (const w of stripWords) {
    if (n.endsWith(' ' + w)) {
      variants.push(n.slice(0, -(w.length + 1)).trim());
    }
  }
  
  // Strip common suffixes
  const suffixes = [' Keep',' Walls',' Main',' Interior',' Ruins',' Museum',' Bookshop',
    ' Gardens',' Heritage Centre',' Ancient Village',' Stone Fort',' Sculptured Stone',
    ' Escarpment',' Windmill',' Demesne',' Gatehouse'];
  for (const s of suffixes) {
    if (n.endsWith(s)) variants.push(n.slice(0, -s.length).trim());
    // Also try on already-stripped versions
    for (const v of [...variants]) {
      if (v.endsWith(s)) variants.push(v.slice(0, -s.length).trim());
    }
  }
  
  // For each base, try adding Castle/Abbey/Priory/House/Tower/Church
  const bases = [...new Set(variants)];
  const types = [' Castle', ' Abbey', ' Priory', ' House', ' Tower', ' Church', ' Cathedral', ' Fort', ' Manor'];
  for (const b of bases) {
    // Strip existing type word first
    let base = b;
    for (const t of types) {
      if (base.endsWith(t)) { base = base.slice(0, -t.length).trim(); break; }
    }
    variants.push(base);
    for (const t of types) {
      variants.push(base + t);
    }
  }
  
  // Dedupe
  const unique = [...new Set(variants)].filter(v => v.length > 2);
  
  for (const v of unique) {
    const img = await checkWiki(v);
    if (img) return { variant: v, img };
    await new Promise(r => setTimeout(r, 200));
  }
  return null;
}

async function run() {
  const found = [];
  const stillNotFound = [];
  
  for (const c of notFound) {
    const result = await tryName(c.name);
    if (result) {
      found.push({ ...c, wikiImg: result.img, matchedAs: result.variant });
      process.stdout.write(`✓ ${c.name} → "${result.variant}"\n`);
    } else {
      stillNotFound.push(c);
      process.stdout.write(`✗ ${c.name}\n`);
    }
  }
  
  console.log(`\n=== FINAL RESULTS ===`);
  console.log(`Rescued: ${found.length} / ${notFound.length}`);
  console.log(`Truly hopeless: ${stillNotFound.length}\n`);
  
  stillNotFound.sort((a,b) => b.rating - a.rating).forEach(c => {
    console.log(`  ${c.name} | ${c.type} | r:${c.rating} | imgs:${c.currentImgs}`);
  });
  
  fs.writeFileSync('wiki-final-results.json', JSON.stringify({ found, stillNotFound }, null, 2));
}

run();
