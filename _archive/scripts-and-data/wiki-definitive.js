const fs = require('fs');
const results = JSON.parse(fs.readFileSync('wiki-final-results.json','utf8'));
const notFound = results.stillNotFound;

console.log('Definitive check:', notFound.length, 'entries (slow & careful)\n');

async function checkWiki(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=1280&format=json`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(url);
      const text = await r.text();
      if (!text.startsWith('{')) {
        // Rate limited, wait and retry
        console.log(`  [rate limited on "${title}", retry ${attempt+1}]`);
        await new Promise(r => setTimeout(r, 5000));
        continue;
      }
      const j = JSON.parse(text);
      const page = Object.values(j.query.pages)[0];
      if (page && page.thumbnail && page.thumbnail.source) return page.thumbnail.source;
      return null;
    } catch(e) {
      await new Promise(r => setTimeout(r, 3000));
    }
  }
  return null;
}

function getVariants(name) {
  const v = new Set();
  v.add(name);
  
  // Strip parentheticals
  const noParens = name.replace(/\s*\(.*?\)/g, '').trim();
  v.add(noParens);
  
  // Location suffixes to strip
  const locs = ['Fife','Down','Solent','Donegal','Galway','Mayo','Carlow','Meath',
    'Clare','Laois','Wexford','Kilkenny','Westmeath','Tipperary','Kinsale','Spenser','Lim','Newcastle West'];
  for (const loc of locs) {
    if (noParens.endsWith(' ' + loc)) v.add(noParens.slice(0, -(loc.length + 1)).trim());
  }
  
  // Type suffixes to strip
  const types = [' Keep',' Walls',' Museum',' Bookshop',' Gardens',' Heritage Centre',
    ' Ancient Village',' Stone Fort',' Sculptured Stone',' Demesne',' Windmill'];
  for (const t of types) {
    for (const base of [...v]) {
      if (base.endsWith(t)) v.add(base.slice(0, -t.length).trim());
    }
  }
  
  // Try with comma-separated location for Irish/Scottish
  for (const base of [...v]) {
    v.add(base + ', County Donegal');
    v.add(base + ', Ireland');
  }
  
  // For "Desmond Castle Newcastle West" → "Desmond Castle, Newcastle West"  
  if (name.includes('Newcastle West')) v.add(name.replace(' Newcastle West', ', Newcastle West'));
  if (name.includes('Kinsale')) v.add(name.replace(' Kinsale', ', Kinsale'));
  if (name.includes('Carlingford')) v.add(name.replace(' Carlingford', ', Carlingford'));
  
  // Specific known mappings
  const map = {
    "Harry Avery Castle": ["Harry Avery's Castle"],
    "Old Scatness": ["Old Scatness Broch"],
    "Stanton Harcourt Tower": ["Stanton Harcourt"],
    "Greencastle Donegal": ["Greencastle, County Donegal"],
    "Desmond Castle Kinsale": ["Desmond Castle, Kinsale", "Desmond Castle (Kinsale)"],
    "Desmond Castle Newcastle West": ["Desmond Castle, Newcastle West", "Newcastle West"],
    "Bishop's Palace Kirkwall": ["Bishop's Palace, Kirkwall"],
    "Kilcooley Abbey Tipperary": ["Kilcooley Abbey"],
    "Kilcooley Abbey": ["Kilcooly Abbey"],
    "Fowlis Wester Sculptured Stone": ["Fowlis Wester"],
    "Repton Priory": ["Repton"],
    "Ballykinvarga Stone Fort": ["Caherballykinvarga", "Ballykinvarga"],
    "Cramond Tower": ["Cramond Tower", "Cramond"],
  };
  if (map[name]) map[name].forEach(m => v.add(m));
  
  return [...v];
}

async function run() {
  const found = [];
  const stillNotFound = [];
  
  for (let i = 0; i < notFound.length; i++) {
    const c = notFound[i];
    const variants = getVariants(c.name);
    let img = null, matchedAs = null;
    
    for (const v of variants) {
      img = await checkWiki(v);
      if (img) { matchedAs = v; break; }
      await new Promise(r => setTimeout(r, 300));
    }
    
    if (img) {
      found.push({ ...c, wikiImg: img, matchedAs });
      process.stdout.write(`✓ ${c.name} → "${matchedAs}"\n`);
    } else {
      stillNotFound.push(c);
      process.stdout.write(`✗ ${c.name}\n`);
    }
    
    // Be nice to Wikipedia
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log(`\n=== DEFINITIVE RESULTS ===`);
  console.log(`Rescued: ${found.length} / ${notFound.length}`);
  console.log(`Actually hopeless: ${stillNotFound.length}\n`);
  
  stillNotFound.sort((a,b) => b.rating - a.rating).forEach(c => {
    console.log(`  ${c.name} | ${c.type} | r:${c.rating} | imgs:${c.currentImgs}`);
  });
  
  fs.writeFileSync('wiki-definitive-results.json', JSON.stringify({ found, stillNotFound }, null, 2));
}

run();
