const fs = require('fs');
const results = JSON.parse(fs.readFileSync('wiki-fuzzy-results.json','utf8'));
const notFound = results.stillNotFound;

console.log('Aggressive recheck:', notFound.length, 'entries\n');

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

function generateVariants(name) {
  const v = new Set();
  v.add(name);
  
  // Strip ALL common suffixes
  const suffixes = [' Keep', ' Walls', ' Ruins', ' Main', ' Interior', ' Fife', ' Down', ' Solent', 
    ' Donegal', ' Galway', ' Mayo', ' Carlow', ' Meath', ' Clare', ' Laois', ' Wexford', ' Kilkenny',
    ' Westmeath', ' Tipperary', ' Kinsale', ' Spenser', ' Museum', ' Bookshop', ' Gardens', 
    ' Heritage Centre', ' Ancient Village', ' Stone Fort', ' Escarpment', ' Sculptured Stone',
    ' (Banbury)', ' (Solent)', ' (Limerick)', ' (Lim)', ' (Pembs)'];
  
  let cleaned = name;
  for (const s of suffixes) {
    if (cleaned.endsWith(s)) cleaned = cleaned.slice(0, -s.length).trim();
  }
  // Also strip parentheticals
  cleaned = cleaned.replace(/\s*\(.*?\)/g, '').trim();
  v.add(cleaned);
  
  // Try base name + Castle/Abbey/Priory
  v.add(cleaned + ' Castle');
  v.add(cleaned + ' Abbey');  
  v.add(cleaned + ' Priory');
  v.add(cleaned + ' House');
  v.add(cleaned + ' Manor');
  v.add(cleaned + ' Tower');
  
  // Try without "Castle" etc and readd
  const base = cleaned.replace(/ Castle$/, '').replace(/ Abbey$/, '').replace(/ Priory$/, '')
    .replace(/ House$/, '').replace(/ Tower$/, '').replace(/ Church$/, '').replace(/ Hall$/, '')
    .replace(/ Cathedral$/, '').replace(/ Manor$/, '').replace(/ Fort$/, '').trim();
  v.add(base);
  v.add(base + ' Castle');
  v.add(base + ' Abbey');
  v.add(base + ' Priory');
  v.add(base + ' House');
  v.add(base + ' Tower');
  v.add(base + ' Church');
  v.add(base + ' Cathedral');
  v.add(base + ' Fort');
  
  // Specific known mappings
  const specific = {
    'Lochleven Castle Keep': ['Lochleven Castle', 'Loch Leven Castle'],
    'Framlingham Castle (Walls)': ['Framlingham Castle'],
    'Broughton Castle (Banbury)': ['Broughton Castle'],
    'Dundrum Castle Down': ['Dundrum Castle'],
    'Hay Castle Bookshop': ['Hay Castle'],
    'Hurst Castle (Solent)': ['Hurst Castle'],
    'Chysauster Ancient Village': ['Chysauster'],
    'Bishop\'s Palace, Kirkwall': ['Bishop\'s Palace, Kirkwall', 'Earl\'s Palace, Kirkwall', 'Bishops Palace Kirkwall'],
    'Ravenscraig Castle Fife': ['Ravenscraig Castle'],
    'Desmond Castle Kinsale': ['Desmond Castle'],
    'Desmond Castle Newcastle West': ['Desmond Castle, Newcastle West', 'Newcastle West Castle'],
    'Sulgrave Manor': ['Sulgrave Manor'],
    'O\'Dea Castle Museum': ['Dysert O\'Dea Castle', 'Dysert O\'Dea'],
    'Old Scatness': ['Old Scatness Broch', 'Old Scatness'],
    'King John\'s Castle Carlingford': ['King John\'s Castle, Carlingford'],
    'King Johns Castle Carlingford': ['King John\'s Castle, Carlingford'],
    'Kilcooley Abbey Tipperary': ['Kilcooley Abbey'],
    'Kilcooley Abbey': ['Kilcooley Abbey', 'Kilcooly Abbey'],
    'Llangattock Escarpment': ['Llangattock', 'Craig y Cilau'],
    'Dowth Hall': ['Dowth'],
    'Ballycopeland Windmill': ['Ballycopeland Windmill'],
    'Thornton Curtis Abbey Gatehouse': ['Thornton Abbey'],
    'Repton Priory': ['Repton Priory', 'Repton, Derbyshire'],
    'Hulne Priory': ['Hulne Priory'],
    'Clonca Church': ['Clonca'],
    'Kilcolman Castle Spenser': ['Kilcolman Castle'],
    'Ardmore Cathedral': ['Ardmore Cathedral', 'Ardmore, County Waterford'],
    'Stanton Harcourt Tower': ['Stanton Harcourt'],
    'Finlaystone House': ['Finlaystone'],
    'Graiguenamanagh Abbey': ['Duiske Abbey'],
    'Dunderave Castle': ['Dunderave Castle'],
    'Balgonie Castle': ['Balgonie Castle'],
    'Candacraig House': ['Candacraig'],
    'Ballykinvarga Stone Fort': ['Ballykinvarga', 'Caherballykinvarga'],
    'Clara Castle Kilkenny': ['Clara Castle'],
    'Dromore Castle (Limerick)': ['Dromore Castle'],
    'Smithstown Castle': ['Smithstown Castle'],
    'Lohort Castle': ['Lohort Castle'],
    'Kiltinan Castle': ['Kiltinan Castle'],
    'Roughan Castle': ['Roughan Castle'],
    'Greencastle Donegal': ['Greencastle, County Donegal', 'Northburgh Castle'],
  };
  
  if (specific[name]) specific[name].forEach(s => v.add(s));
  
  return [...v];
}

async function run() {
  const found = [];
  const stillNotFound = [];
  
  for (let i = 0; i < notFound.length; i++) {
    const c = notFound[i];
    const variants = generateVariants(c.name);
    let img = null, matchedAs = null;
    
    for (const v of variants) {
      img = await checkWiki(v);
      if (img) { matchedAs = v; break; }
    }
    
    if (img) {
      found.push({ ...c, wikiImg: img, matchedAs });
      process.stdout.write(`✓ ${c.name} → "${matchedAs}"\n`);
    } else {
      stillNotFound.push(c);
    }
    if (i % 5 === 4) await new Promise(r => setTimeout(r, 300));
  }
  
  console.log(`\n=== RESULTS ===`);
  console.log(`Rescued: ${found.length} / ${notFound.length}`);
  console.log(`Truly hopeless: ${stillNotFound.length}\n`);
  
  stillNotFound.sort((a,b) => b.rating - a.rating).forEach(c => {
    console.log(`  ${c.name} | ${c.type} | r:${c.rating} | imgs:${c.currentImgs}`);
  });
  
  fs.writeFileSync('wiki-aggressive-results.json', JSON.stringify({ found, stillNotFound }, null, 2));
}

run();
