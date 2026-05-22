// Import approved listings into Castlecore D1
// Only imports: name, country, region (required), slug, and source links
// All other fields left empty for fresh enrichment

const API = 'https://castlecore.uk/api';

// Region slug → display name mapping
const regionMap = {
  // Scotland
  'edinburgh-lothians': 'Edinburgh & Lothians',
  'glasgow-clyde-valley': 'Glasgow & Clyde Valley',
  'highlands': 'Highlands',
  'argyll-western-isles': 'Argyll & the Western Isles',
  'aberdeenshire-moray': 'Aberdeenshire & Moray',
  'perthshire': 'Perthshire',
  'fife': 'Fife',
  'borders': 'Borders',
  // Also handle alternate slugs
  'stirlingshire': 'Perthshire', // Stirling area falls under Perthshire region page
  'dumfries-galloway': 'Borders', // SW Scotland grouped with Borders
  'dundee-angus': 'Perthshire',
  'ayrshire-arran': 'Glasgow & Clyde Valley',
  'orkney-shetland': 'Highlands',
  'outer-hebrides': 'Argyll & the Western Isles',

  // England
  'south-east': 'South East',
  'south-west': 'South West',
  'midlands': 'Midlands',
  'north-west': 'North West',
  'north-east': 'North East',
  'east-anglia': 'East Anglia',
  // Alternate slugs
  'london': 'South East',
  'east-midlands': 'Midlands',
  'west-midlands': 'Midlands',
  'yorkshire': 'North East',

  // Wales
  'north-wales': 'North Wales',
  'south-wales': 'South Wales',
  'mid-wales': 'Mid Wales',
  'west-wales': 'West Wales',
  // Alternate slugs
  'monmouthshire': 'South Wales',
  'pembrokeshire': 'West Wales',
  'gwynedd': 'North Wales',
  'powys': 'Mid Wales',

  // Ireland
  'leinster': 'Leinster',
  'munster': 'Munster',
  'connacht': 'Connacht',
  'ulster': 'Ulster',
  'dublin': 'Leinster',
  'northern-ireland': 'Ulster',
  // County-based
  'co-meath': 'Leinster',
  'co-dublin': 'Leinster',
  'co-wicklow': 'Leinster',
  'co-kilkenny': 'Leinster',
  'co-wexford': 'Leinster',
  'co-cork': 'Munster',
  'co-kerry': 'Munster',
  'co-limerick': 'Munster',
  'co-tipperary': 'Munster',
  'co-waterford': 'Munster',
  'co-clare': 'Munster',
  'co-galway': 'Connacht',
  'co-mayo': 'Connacht',
  'co-sligo': 'Connacht',
  'co-roscommon': 'Connacht',
  'co-donegal': 'Ulster',
  'co-antrim': 'Ulster',
  'co-down': 'Ulster',
  'co-armagh': 'Ulster',
  'co-tyrone': 'Ulster',
  'co-fermanagh': 'Ulster',
  'co-derry': 'Ulster',
  'co-louth': 'Leinster',
  'co-westmeath': 'Leinster',
  'co-offaly': 'Leinster',
  'co-laois': 'Leinster',
  'co-carlow': 'Leinster',
  'co-longford': 'Leinster',
  'co-kildare': 'Leinster',
  'co-leitrim': 'Connacht',
  'co-cavan': 'Ulster',
  'co-monaghan': 'Ulster',
};

const countryMap = {
  'scotland': 'Scotland',
  'england': 'England',
  'wales': 'Wales',
  'ireland': 'Ireland',
  'northern-ireland': 'Ireland', // grouped under Ireland for now
};

// Default regions per country if we can't map one
const defaultRegion = {
  'Scotland': 'Highlands',
  'England': 'South East',
  'Wales': 'South Wales',
  'Ireland': 'Leinster',
};

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function run() {
  const fs = require('fs');
  const data = JSON.parse(fs.readFileSync('./audit-data.json', 'utf8'));
  
  const approved = data.filter(d => d.reviewStatus === 'approved');
  console.log(`Total entries: ${data.length}`);
  console.log(`Approved: ${approved.length}`);
  
  let created = 0;
  let skipped = 0;
  let errors = 0;
  let unmappedRegions = new Set();

  for (let i = 0; i < approved.length; i++) {
    const entry = approved[i];
    const name = entry.name.trim();
    const slug = slugify(name);
    const country = countryMap[entry.country] || entry.country;
    
    let region = regionMap[entry.region];
    if (!region) {
      unmappedRegions.add(`${entry.country}/${entry.region}`);
      region = defaultRegion[country] || 'Unknown';
    }

    // Create listing with minimal data
    try {
      const res = await fetch(`${API}/listings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, slug, country, region })
      });

      if (!res.ok) {
        const err = await res.text();
        // Likely duplicate slug
        if (err.includes('UNIQUE') || err.includes('unique')) {
          skipped++;
        } else {
          console.error(`[${i}] Failed ${name}: ${err}`);
          errors++;
        }
        continue;
      }

      const result = await res.json();
      const listingId = result.id;

      // Add source links
      const links = [];
      
      const wikiUrl = entry.wikipediaUrl || entry.wiki;
      if (wikiUrl) {
        links.push({ type: 'wikipedia', url: wikiUrl, label: 'Wikipedia' });
      }
      
      if (entry.sources && Array.isArray(entry.sources)) {
        for (const src of entry.sources) {
          if (src.url) {
            links.push({ type: 'official', url: src.url, label: src.label || 'Official' });
          }
        }
      }
      
      if (entry.source && Array.isArray(entry.source)) {
        for (const src of entry.source) {
          if (src.url) {
            // Avoid duplicates with sources array
            const already = links.some(l => l.url === src.url);
            if (!already) {
              links.push({ type: 'heritage', url: src.url, label: src.name || 'Heritage Body' });
            }
          }
        }
      }

      for (const link of links) {
        await fetch(`${API}/listings/${listingId}/links`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(link)
        });
      }

      created++;
      if (created % 50 === 0) {
        console.log(`Progress: ${created} created, ${skipped} skipped, ${errors} errors (${i + 1}/${approved.length})`);
      }
    } catch (err) {
      console.error(`[${i}] Error ${name}: ${err.message}`);
      errors++;
    }
  }

  console.log('\n=== IMPORT COMPLETE ===');
  console.log(`Created: ${created}`);
  console.log(`Skipped (duplicates): ${skipped}`);
  console.log(`Errors: ${errors}`);
  
  if (unmappedRegions.size > 0) {
    console.log(`\nUnmapped regions (used default):`);
    for (const r of unmappedRegions) console.log(`  - ${r}`);
  }
}

run().catch(console.error);
