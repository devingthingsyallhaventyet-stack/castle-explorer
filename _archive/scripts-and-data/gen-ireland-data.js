const fs = require('fs');
const https = require('https');

const window = {};
new Function('window', fs.readFileSync('data-ireland.js', 'utf8'))(window);
const castles = window.irelandCastles;
console.log(`Loaded ${castles.length} Ireland castles`);

// Ireland uses countyToRegion mapping
const countyToRegion = {
  'County Galway': 'wild-atlantic-way', 'County Clare': 'wild-atlantic-way', 'County Mayo': 'wild-atlantic-way', 'County Sligo': 'wild-atlantic-way', 'County Leitrim': 'wild-atlantic-way',
  'County Kerry': 'kingdom-of-munster', 'County Cork': 'kingdom-of-munster', 'County Limerick': 'kingdom-of-munster',
  'County Meath': 'irelands-ancient-east', 'County Kilkenny': 'irelands-ancient-east', 'County Wexford': 'irelands-ancient-east', 'County Wicklow': 'irelands-ancient-east', 'County Carlow': 'irelands-ancient-east', 'County Waterford': 'irelands-ancient-east',
  'County Tipperary': 'the-heartlands', 'County Offaly': 'the-heartlands', 'County Laois': 'the-heartlands', 'County Westmeath': 'the-heartlands', 'County Longford': 'the-heartlands',
  'County Dublin': 'dublin-and-the-pale', 'County Kildare': 'dublin-and-the-pale', 'County Louth': 'dublin-and-the-pale',
  'County Donegal': 'ulster-and-the-north', 'County Cavan': 'ulster-and-the-north', 'County Monaghan': 'ulster-and-the-north', 'County Down': 'ulster-and-the-north', 'County Tyrone': 'ulster-and-the-north', 'County Fermanagh': 'ulster-and-the-north', 'County Derry': 'ulster-and-the-north', 'County Antrim': 'ulster-and-the-north', 'County Armagh': 'ulster-and-the-north', 'County Roscommon': 'ulster-and-the-north'
};

const regionData = {};
const slugs = [...new Set(Object.values(countyToRegion))];
slugs.forEach(s => regionData[s] = []);

let unassigned = [];
castles.forEach(c => {
  const slug = countyToRegion[c.county];
  if (slug) regionData[slug].push(c);
  else unassigned.push(c);
});

for (const [slug, data] of Object.entries(regionData)) {
  console.log(`${slug}: ${data.length} castles`);
}
if (unassigned.length) {
  console.log(`\n⚠️  ${unassigned.length} UNASSIGNED:`);
  unassigned.forEach(c => console.log(`  ${c.name} — county: "${c.county}"`));
}
const total = Object.values(regionData).reduce((s, d) => s + d.length, 0);
console.log(`\nTotal assigned: ${total}/${castles.length}`);

// Write JSONs
fs.mkdirSync('ireland/data', { recursive: true });
for (const [slug, data] of Object.entries(regionData)) {
  fs.writeFileSync(`ireland/data/${slug}.json`, JSON.stringify(data), 'utf8');
}
console.log('JSON files written to ireland/data/');

// Image validation
console.log('\n=== IMAGE VALIDATION ===');

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
      if (c.image) { ok++; continue; }
      if (c.gallery && c.gallery.length) {
        c.image = c.gallery[0];
        galleryFixes.push(c.name);
        fixed++;
        console.log(`  🔧 ${c.name}: promoted gallery image`);
        continue;
      }
      await new Promise(r => setTimeout(r, 100));
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
    fs.writeFileSync(`ireland/data/${slug}.json`, JSON.stringify(data), 'utf8');
  }

  if (galleryFixes.length || wikiFixes.length) {
    const allCastles = [...Object.values(regionData).flat(), ...unassigned];
    fs.writeFileSync('data-ireland.js', 'window.irelandCastles=' + JSON.stringify(allCastles), 'utf8');
    console.log(`\nUpdated data-ireland.js with ${galleryFixes.length + wikiFixes.length} image fixes`);
  }

  console.log(`\n=== Image Validation Report ===`);
  console.log(`✅ ${ok} entries OK`);
  console.log(`🔧 ${fixed} fixed (gallery: ${galleryFixes.length}, Wikipedia: ${wikiFixes.length})`);
  if (unfixable.length) {
    console.log(`❌ ${unfixable.length} unfixable`);
    unfixable.forEach(u => console.log(`   - ${u.name} (${u.slug})`));
  }
}

validate();
