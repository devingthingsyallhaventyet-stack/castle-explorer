const fs = require('fs');
const results = JSON.parse(fs.readFileSync('wiki-remaining-results.json','utf8'));
const notFound = results.notFound;

console.log('Rechecking', notFound.length, 'entries with fuzzy name matching...\n');

async function checkWiki(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title.replace(/ /g,'_'))}&prop=pageimages&pithumbsize=1280&format=json`;
  try {
    const r = await fetch(url);
    const j = await r.json();
    const page = Object.values(j.query.pages)[0];
    if (page && page.thumbnail && page.thumbnail.source) return page.thumbnail.source;
  } catch(e) {}
  return null;
}

async function tryVariants(name) {
  // Generate many variants
  const variants = new Set();
  variants.add(name);
  // Strip suffixes
  for (const suffix of [' Keep', ' Walls', ' Ruins', ' Main', ' Interior', ' Fife', ' Down', ' Solent', ' Donegal', ' Galway', ' Mayo', ' Carlow', ' Meath', ' Clare', ' Laois', ' Wexford', ' Kilkenny', ' Westmeath', ' Tipperary', ' Kinsale', ' Spenser']) {
    if (name.endsWith(suffix)) variants.add(name.slice(0, -suffix.length));
  }
  // Strip parentheticals
  variants.add(name.replace(/\s*\(.*?\)\s*/g, '').trim());
  // Strip "Castle" and re-add
  const nocastle = name.replace(/ Castle/g, '').replace(/ Tower/g, '').replace(/ House/g, '').replace(/ Abbey/g, '').replace(/ Priory/g, '').replace(/ Church/g, '').trim();
  variants.add(nocastle + ' Castle');
  variants.add(nocastle + ' Abbey');
  variants.add(nocastle + ' Priory');
  // Try "X, County Y" pattern for Irish ones
  variants.add(name.replace(' Castle', ' Castle, Ireland'));
  // Try without "The" 
  variants.add(name.replace(/^The /, ''));
  // Try common renames
  if (name.includes('Bookshop')) variants.add(name.replace(' Bookshop', ''));
  if (name.includes('Gardens')) variants.add(name.replace(' Gardens', ''));
  if (name.includes('Museum')) variants.add(name.replace(' Museum', ''));
  if (name.includes('Heritage Centre')) variants.add(name.replace(' Heritage Centre', ''));
  if (name.includes('Ancient Village')) variants.add(name.replace(' Ancient Village', ''));
  if (name.includes('Stone Fort')) variants.add(name.replace(' Stone Fort', ' Fort'));
  if (name.includes('Escarpment')) variants.add(name.replace(' Escarpment', ''));
  // Specific known fixes
  if (name === 'Chysauster Ancient Village') variants.add('Chysauster');
  if (name === "Bishop's Palace, Kirkwall") variants.add("Bishop's Palace, Kirkwall");
  if (name === 'Old Scatness') variants.add('Old Scatness Broch');
  if (name === 'Ballycopeland Windmill') variants.add('Ballycopeland Windmill');
  if (name === 'Garn Goch') variants.add('Y Garn Goch');
  if (name === 'Dowth Hall') { variants.add('Dowth'); variants.add('Dowth Castle'); }
  if (name === 'Nappa Hall') variants.add('Nappa Hall, Askrigg');
  if (name === 'Peele Tower Kentmere') { variants.add('Kentmere Hall'); variants.add('Kentmere'); }
  if (name === 'Sulgrave Manor') variants.add('Sulgrave Manor');
  
  for (const v of variants) {
    const img = await checkWiki(v);
    if (img) return { variant: v, img };
  }
  return null;
}

async function run() {
  const found = [];
  const stillNotFound = [];
  
  for (let i = 0; i < notFound.length; i++) {
    const c = notFound[i];
    const result = await tryVariants(c.name);
    if (result) {
      found.push({ ...c, wikiImg: result.img, matchedAs: result.variant });
      process.stdout.write(`✓ ${c.name} (as "${result.variant}")\n`);
    } else {
      stillNotFound.push(c);
    }
    if (i % 10 === 9) await new Promise(r => setTimeout(r, 500));
  }
  
  console.log(`\n=== FUZZY RESULTS ===`);
  console.log(`Rescued: ${found.length} / ${notFound.length}`);
  console.log(`Truly hopeless: ${stillNotFound.length}\n`);
  
  found.forEach(c => console.log(`  ${c.name} → "${c.matchedAs}"`));
  
  console.log('\n=== TRULY HOPELESS ===');
  stillNotFound.sort((a,b) => b.rating - a.rating).forEach(c => {
    console.log(`  ${c.name} | ${c.type} | r:${c.rating} | imgs:${c.currentImgs}`);
  });
  
  fs.writeFileSync('wiki-fuzzy-results.json', JSON.stringify({ found, stillNotFound }, null, 2));
}

run();
