const fs = require('fs');
const src = fs.readFileSync('data.js','utf8');
const m = src.match(/CASTLES\s*=\s*(\[[\s\S]*\]);/);
const d = JSON.parse(m[1].replace(/,\s*]/g,']'));

// Gather all entries with 0-1 photos total (no gallery or no image)
const thin = d.filter(c => {
  const hasImg = c.image && !c.image.includes('placeholder');
  const galLen = (c.gallery || []).length;
  return !hasImg || galLen === 0;
});

console.log('Total thin listings to wiki-check:', thin.length);

async function checkWiki(name) {
  // Try exact name, then without parenthetical
  const variants = [name, name.replace(/\s*\(.*\)/, ''), name.replace(' Castle', '')];
  for (const v of variants) {
    const title = v.replace(/ /g, '_');
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=1280&format=json`;
    try {
      const r = await fetch(url);
      const j = await r.json();
      const pages = j.query.pages;
      const page = Object.values(pages)[0];
      if (page && page.thumbnail && page.thumbnail.source) {
        return page.thumbnail.source;
      }
    } catch(e) {}
  }
  return null;
}

async function run() {
  const found = [];
  const notFound = [];
  
  for (let i = 0; i < thin.length; i++) {
    const c = thin[i];
    const img = await checkWiki(c.name);
    const hasImg = c.image && !c.image.includes('placeholder');
    const galLen = (c.gallery || []).length;
    const totalImgs = (hasImg ? 1 : 0) + galLen;
    
    if (img) {
      found.push({ name: c.name, type: c.type, rating: c.rating || 0, reviews: c.reviews || 0, currentImgs: totalImgs, wikiImg: img });
      process.stdout.write(`✓ ${c.name}\n`);
    } else {
      notFound.push({ name: c.name, type: c.type, rating: c.rating || 0, reviews: c.reviews || 0, currentImgs: totalImgs });
    }
    if (i % 10 === 9) await new Promise(r => setTimeout(r, 500));
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Wikipedia has images for: ${found.length} / ${thin.length}`);
  console.log(`Still hopeless: ${notFound.length}`);
  
  // Group notFound by type
  const byType = {};
  notFound.forEach(c => {
    if (!byType[c.type]) byType[c.type] = [];
    byType[c.type].push(c);
  });
  
  console.log('\n=== STILL NO IMAGE BY TYPE ===');
  Object.entries(byType).sort((a,b) => b[1].length - a[1].length).forEach(([type, items]) => {
    console.log(`\n--- ${type} (${items.length}) ---`);
    items.sort((a,b) => b.rating - a.rating).forEach(c => {
      console.log(`  ${c.name} | r:${c.rating} | rev:${c.reviews} | imgs:${c.currentImgs}`);
    });
  });
  
  console.log('\n=== WIKI RESCUABLE ===');
  found.forEach(c => console.log(`  ${c.name} | ${c.type} | r:${c.rating} | imgs:${c.currentImgs} → wiki`));
  
  fs.writeFileSync('wiki-remaining-results.json', JSON.stringify({ found, notFound }, null, 2));
}

run();
