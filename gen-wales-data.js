const fs = require('fs');
const https = require('https');

// Load Wales data
const src = fs.readFileSync('data-wales.js', 'utf8');
const window = {};
new Function('window', src)(window);
const castles = window.walesCastles;
console.log(`Loaded ${castles.length} Wales castles`);

const REGIONS = {
  'snowdonia-north': ['Gwynedd','Conwy','Denbighshire','Flintshire','Wrexham','Anglesey'],
  'mid-wales-marches': ['Powys'],
  'west-wales': ['Pembrokeshire','Carmarthenshire','Ceredigion'],
  'south-wales': ['Cardiff','Swansea','Vale of Glamorgan','Bridgend','Neath Port Talbot','Caerphilly','Merthyr Tydfil','Newport','Torfaen','Monmouthshire']
};

// Split castles into regions
const regionData = {};
let assigned = 0;
for (const [slug, counties] of Object.entries(REGIONS)) {
  regionData[slug] = castles.filter(c => counties.includes(c.county));
  console.log(`${slug}: ${regionData[slug].length} castles`);
  assigned += regionData[slug].length;
}

// Check for unassigned
const allCounties = Object.values(REGIONS).flat();
const unassigned = castles.filter(c => !allCounties.includes(c.county));
if (unassigned.length) {
  console.log(`\n⚠️  ${unassigned.length} UNASSIGNED:`);
  unassigned.forEach(c => console.log(`  ${c.name} — county: "${c.county}"`));
}
console.log(`\nTotal assigned: ${assigned}/${castles.length}`);

// Write JSONs
fs.mkdirSync('wales/data', { recursive: true });
for (const [slug, data] of Object.entries(regionData)) {
  fs.writeFileSync(`wales/data/${slug}.json`, JSON.stringify(data), 'utf8');
}
console.log('\nJSON files written to wales/data/');

// Image validation
console.log('\n=== IMAGE VALIDATION ===');

function headCheck(url) {
  return new Promise(resolve => {
    const mod = url.startsWith('https') ? https : require('http');
    const req = mod.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 5000 }, res => {
      resolve({ status: res.statusCode, size: parseInt(res.headers['content-length'] || '0') });
    });
    req.on('error', () => resolve({ status: 0, size: 0 }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, size: 0 }); });
    req.end();
  });
}

function wikiImageLookup(name) {
  return new Promise(resolve => {
    const title = name.replace(/ /g, '_');
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=500&format=json`;
    https.get(url, { headers: { 'User-Agent': 'CastleCore/1.0' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const pages = JSON.parse(d).query.pages;
          const page = Object.values(pages)[0];
          resolve(page?.thumbnail?.source || null);
        } catch { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

async function validate() {
  let ok = 0, fixed = 0, unfixable = [];
  const galleryFixes = [], wikiFixes = [];

  for (const [slug, data] of Object.entries(regionData)) {
    console.log(`\nValidating ${slug} (${data.length} entries)...`);
    
    for (const c of data) {
      // Check if image exists
      if (c.image) {
        ok++;
        continue;
      }
      
      // Missing image — try gallery promotion
      if (c.gallery && c.gallery.length) {
        c.image = c.gallery[0];
        galleryFixes.push(c.name);
        fixed++;
        console.log(`  🔧 ${c.name}: promoted gallery image`);
        continue;
      }
      
      // Try Wikipedia API
      await new Promise(r => setTimeout(r, 100)); // rate limit
      const wikiImg = await wikiImageLookup(c.name);
      if (wikiImg) {
        c.image = wikiImg;
        wikiFixes.push(c.name);
        fixed++;
        console.log(`  🔧 ${c.name}: found Wikipedia image`);
        continue;
      }
      
      unfixable.push({ name: c.name, slug });
      console.log(`  ❌ ${c.name}: no image source found`);
    }
    
    // Rewrite JSON with fixes
    fs.writeFileSync(`wales/data/${slug}.json`, JSON.stringify(data), 'utf8');
  }

  // Also update data-wales.js with fixes
  const allFixed = [...galleryFixes, ...wikiFixes];
  if (allFixed.length) {
    // Rebuild from region data
    const allCastles = Object.values(regionData).flat();
    // But we need to include unassigned too
    const full = [...allCastles, ...unassigned];
    fs.writeFileSync('data-wales.js', 'const CASTLES=' + JSON.stringify(full), 'utf8');
    console.log(`\nUpdated data-wales.js with ${allFixed.length} image fixes`);
  }

  console.log(`\n=== Image Validation Report ===`);
  console.log(`✅ ${ok} entries OK`);
  console.log(`🔧 ${fixed} fixed (gallery: ${galleryFixes.length}, Wikipedia: ${wikiFixes.length})`);
  if (galleryFixes.length) console.log(`   Gallery: ${galleryFixes.join(', ')}`);
  if (wikiFixes.length) console.log(`   Wikipedia: ${wikiFixes.join(', ')}`);
  console.log(`❌ ${unfixable.length} unfixable`);
  unfixable.forEach(u => console.log(`   - ${u.name} (${u.slug})`));
}

validate();
