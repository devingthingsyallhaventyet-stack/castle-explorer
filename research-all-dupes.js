const fs = require('fs');

const groups = JSON.parse(fs.readFileSync('ireland-dupe-groups.json', 'utf8'));

// Deduplicate castle names across groups
const allCastles = new Set();
for (const g of groups) {
  for (const c of g.castles) allCastles.add(c);
}

console.log(`Total unique castles to research: ${allCastles.size}`);

// Already fixed with correct images (keep as-is):
const alreadyFixed = new Set([
  // These were fixed with Wikipedia images earlier
  'Dunkerron Castle', 'Lixnaw Castle', 'Gowran Castle',
  'Burt Castle', 'Castle Saunderson', 'Newtownstewart Castle',
  'Croom Castle', 'Castle Forbes',
]);

async function searchWikipedia(name) {
  // Try exact name, then variations
  const variants = [
    name,
    name.replace(' Castle', '_Castle'),
    name.replace(' (Limerick)', ',_County_Limerick'),
    name.replace(' Meath', ',_County_Meath'),
    name.replace(' Waterford', ',_County_Waterford'),
    name.replace(' Roscommon', ',_County_Roscommon'),
    name.replace(' Laois', ',_County_Laois'),
  ];
  
  for (const v of variants) {
    try {
      const r = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(v));
      if (r.status === 200) {
        const d = await r.json();
        if (d.thumbnail?.source) {
          const big = d.thumbnail.source.replace(/\/\d+px-/, '/500px-');
          return { url: big, source: 'wikipedia', query: v };
        }
      }
    } catch(e) {}
    await new Promise(r => setTimeout(r, 300));
  }
  return null;
}

async function searchCommons(name) {
  try {
    const q = encodeURIComponent(name + ' castle ireland');
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${q}&gsrnamespace=6&gsrlimit=3&prop=imageinfo&iiprop=url|size&iiurlwidth=500&format=json`;
    const r = await fetch(url);
    const d = await r.json();
    if (d.query?.pages) {
      const pages = Object.values(d.query.pages);
      for (const p of pages) {
        const title = p.title?.toLowerCase() || '';
        const castleLower = name.toLowerCase().split(' ')[0]; // first word
        if (title.includes(castleLower) && p.imageinfo?.[0]) {
          return {
            url: p.imageinfo[0].thumburl || p.imageinfo[0].url,
            source: 'commons',
            title: p.title
          };
        }
      }
    }
  } catch(e) {}
  return null;
}

async function run() {
  const results = [];
  let i = 0;
  
  for (const name of allCastles) {
    i++;
    if (alreadyFixed.has(name)) continue;
    
    process.stderr.write(`[${i}/${allCastles.size}] ${name}...\n`);
    
    // Try Wikipedia first
    let result = await searchWikipedia(name);
    
    // Try Commons if no Wikipedia
    if (!result) {
      await new Promise(r => setTimeout(r, 500));
      result = await searchCommons(name);
    }
    
    results.push({
      name,
      newImage: result?.url || null,
      source: result?.source || null,
      verified: !!result,
      note: result ? (result.title || result.query) : 'No verified image found'
    });
    
    await new Promise(r => setTimeout(r, 400));
  }
  
  // Write results
  fs.writeFileSync('ireland-image-fixes.json', JSON.stringify(results, null, 2), 'utf8');
  
  // Summary
  const found = results.filter(r => r.verified);
  const notFound = results.filter(r => !r.verified);
  
  console.log(`\n=== RESULTS ===`);
  console.log(`Verified images found: ${found.length}/${results.length}`);
  console.log(`\n--- FOUND ---`);
  for (const r of found) console.log(`  ✅ ${r.name} (${r.source})`);
  console.log(`\n--- NOT FOUND ---`);
  for (const r of notFound) console.log(`  ❌ ${r.name}`);
}

run().catch(console.error);
