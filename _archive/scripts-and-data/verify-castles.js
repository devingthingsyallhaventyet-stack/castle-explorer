const fs = require('fs');

const castles = [
  {name:"Knockmealdown Castle",county:"County Waterford",region:"kingdom-of-munster"},
  {name:"Knockelly Castle",county:"County Tipperary",region:"the-heartlands"},
  {name:"Sharavogue Castle",county:"County Offaly",region:"the-heartlands"},
  {name:"Nendrum Monastic Site",county:"County Down",region:"ulster-and-the-north"},
  {name:"Rataine Castle",county:"County Westmeath",region:"the-heartlands"},
  {name:"Dowdstown Castle Meath",county:"County Meath",region:"irelands-ancient-east"},
  {name:"Drumconrath Castle",county:"County Meath",region:"irelands-ancient-east"},
  {name:"Dunlicky Castle",county:"County Clare",region:"wild-atlantic-way"},
  {name:"Inishmaan Castle",county:"County Galway",region:"wild-atlantic-way"},
  {name:"Navan Castle",county:"County Meath",region:"irelands-ancient-east"},
  {name:"Gortmore Castle",county:"County Galway",region:"wild-atlantic-way"},
  {name:"Derrymacloughna Castle",county:"County Clare",region:"wild-atlantic-way"},
  {name:"Collooney Castle",county:"County Sligo",region:"wild-atlantic-way"},
  {name:"Drumlease Castle",county:"County Leitrim",region:"wild-atlantic-way"},
  {name:"Ballinlough Castle Roscommon",county:"County Roscommon",region:"the-heartlands"},
  {name:"Fuerty Castle",county:"County Roscommon",region:"the-heartlands"},
  {name:"Cloonfree Castle",county:"County Roscommon",region:"the-heartlands"},
  {name:"Frenchpark Castle",county:"County Roscommon",region:"the-heartlands"},
  {name:"Rathmullan Castle Meath",county:"County Meath",region:"irelands-ancient-east"},
  {name:"Malin Castle",county:"County Donegal",region:"ulster-and-the-north"},
  {name:"Carrigart Castle",county:"County Donegal",region:"ulster-and-the-north"},
  {name:"Cloone Round Tower",county:"County Leitrim",region:"the-heartlands"},
  {name:"Annestown Castle",county:"County Waterford",region:"irelands-ancient-east"},
  {name:"Ballylaneen Castle",county:"County Waterford",region:"irelands-ancient-east"},
  {name:"Clondra Castle",county:"County Longford",region:"the-heartlands"},
  {name:"Frankford Castle",county:"County Offaly",region:"the-heartlands"},
  {name:"Rahasane Castle",county:"County Galway",region:"wild-atlantic-way"},
  {name:"Ardrahan Castle",county:"County Galway",region:"wild-atlantic-way"},
  {name:"Tullaroan Castle",county:"County Kilkenny",region:"irelands-ancient-east"},
  {name:"Kilcoursey Castle",county:"County Offaly",region:"the-heartlands"},
  {name:"Ballymulcashel Castle",county:"County Limerick",region:"kingdom-of-munster"},
  {name:"Ballycahill Castle",county:"County Tipperary",region:"the-heartlands"},
  {name:"Ballyfarnon Castle",county:"County Roscommon",region:"the-heartlands"},
  {name:"Drumshanbo Castle",county:"County Leitrim",region:"the-heartlands"},
  {name:"Kilbarry Castle Waterford",county:"County Waterford",region:"irelands-ancient-east"},
  {name:"Ballylooby Castle",county:"County Tipperary",region:"kingdom-of-munster"},
  {name:"Carriggundel Castle",county:"County Limerick",region:"kingdom-of-munster"},
  {name:"Caherconlish Castle",county:"County Limerick",region:"kingdom-of-munster"},
  {name:"Ballinagleragh Castle",county:"County Leitrim",region:"wild-atlantic-way"},
  {name:"Caherlistrane Castle",county:"County Galway",region:"wild-atlantic-way"},
  {name:"Ballyjamesduff Castle",county:"County Cavan",region:"the-heartlands"},
  {name:"Lough Oughter Castle Island",county:"County Cavan",region:"the-heartlands"},
  {name:"Carna Castle",county:"County Galway",region:"wild-atlantic-way"},
];

async function searchGoogle(name, county) {
  const q = encodeURIComponent(`${name} ${county} Ireland`);
  const url = `https://www.google.com/search?q=${q}`;
  // We can't actually scrape Google, but we can use web_fetch patterns
  // Instead, let's check multiple sources
  
  const results = { name, county, exists: 'unknown', sources: [] };
  
  // 1. Check heritage databases - buildingsofireland.ie / archaeology.ie
  try {
    const q2 = encodeURIComponent(name);
    const r = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${q2}&format=json`);
    const d = await r.json();
    const hits = d.query?.search || [];
    const relevant = hits.filter(h => {
      const t = h.title.toLowerCase();
      const n = name.toLowerCase().split(' ')[0];
      return t.includes(n);
    });
    if (relevant.length > 0) {
      results.sources.push(`wikipedia-search: ${relevant[0].title}`);
    }
  } catch(e) {}
  
  // 2. Geograph.ie search
  try {
    const q3 = encodeURIComponent(name);
    const r = await fetch(`https://www.geograph.ie/search?q=${q3}&format=json`, {
      headers: { 'Accept': 'application/json' }
    });
    if (r.status === 200) {
      const text = await r.text();
      if (text.includes(name.split(' ')[0])) {
        results.sources.push('geograph-hit');
      }
    }
  } catch(e) {}
  
  // 3. Check Wikimedia Commons more aggressively
  try {
    const searches = [
      name,
      name.replace(' Castle', '').replace(' Round Tower', '') + ' castle ' + county,
      name + ' Ireland',
    ];
    
    for (const sq of searches) {
      const q4 = encodeURIComponent(sq);
      const r = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${q4}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|size&iiurlwidth=500&format=json`);
      const d = await r.json();
      if (d.query?.pages) {
        const pages = Object.values(d.query.pages);
        for (const p of pages) {
          const title = (p.title || '').toLowerCase();
          const firstWord = name.toLowerCase().split(' ')[0];
          if (title.includes(firstWord) && p.imageinfo?.[0]) {
            const img = p.imageinfo[0];
            results.imageUrl = img.thumburl || img.url;
            results.imageTitle = p.title;
            results.exists = 'confirmed';
            break;
          }
        }
        if (results.imageUrl) break;
      }
      await new Promise(r => setTimeout(r, 400));
    }
  } catch(e) {}
  
  // 4. Try National Monuments Service search pattern
  // Just flag based on what we found
  if (results.imageUrl) {
    results.exists = 'confirmed';
  } else if (results.sources.length > 0) {
    results.exists = 'likely-exists';
  } else {
    results.exists = 'unconfirmed';
  }
  
  return results;
}

async function run() {
  const allResults = [];
  
  for (let i = 0; i < castles.length; i++) {
    const c = castles[i];
    process.stderr.write(`[${i+1}/${castles.length}] ${c.name}...\n`);
    const result = await searchGoogle(c.name, c.county);
    result.region = c.region;
    allResults.push(result);
    await new Promise(r => setTimeout(r, 600));
  }
  
  // Categorize
  const found = allResults.filter(r => r.imageUrl);
  const likelyExists = allResults.filter(r => !r.imageUrl && r.exists === 'likely-exists');
  const unconfirmed = allResults.filter(r => r.exists === 'unconfirmed');
  
  console.log(`\n=== IMAGES FOUND (${found.length}) ===`);
  for (const r of found) {
    console.log(`  ✅ ${r.name} — ${r.imageTitle}`);
    console.log(`     ${r.imageUrl}`);
  }
  
  console.log(`\n=== EXISTS BUT NO IMAGE (${likelyExists.length}) ===`);
  for (const r of likelyExists) {
    console.log(`  ⚠️  ${r.name} — ${r.sources.join(', ')}`);
  }
  
  console.log(`\n=== UNCONFIRMED / POSSIBLY FAKE (${unconfirmed.length}) ===`);
  for (const r of unconfirmed) {
    console.log(`  ❌ ${r.name} (${r.county})`);
  }
  
  // Write full results
  fs.writeFileSync('ireland-verify-results.json', JSON.stringify(allResults, null, 2), 'utf8');
  
  // Write fixes for found images
  const fixes = found.map(r => ({
    name: r.name,
    newImage: r.imageUrl,
    source: 'commons-deep-search',
    verified: true,
    commonsTitle: r.imageTitle
  }));
  
  // Merge with existing fixes
  const existing = JSON.parse(fs.readFileSync('ireland-image-fixes.json', 'utf8'));
  const merged = [...existing.filter(e => !fixes.find(f => f.name === e.name)), ...fixes];
  fs.writeFileSync('ireland-image-fixes.json', JSON.stringify(merged, null, 2), 'utf8');
  
  console.log(`\nWrote ${fixes.length} new fixes to ireland-image-fixes.json`);
}

run().catch(console.error);
