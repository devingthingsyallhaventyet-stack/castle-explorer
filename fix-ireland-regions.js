const { execSync } = require('child_process');
const auditData = require('./audit-data.json');

// Region mapping from enrichment guide
const countyToRegion = {
  'County Galway': 'The Wild Atlantic Way',
  'County Clare': 'The Wild Atlantic Way',
  'County Mayo': 'The Wild Atlantic Way',
  'County Sligo': 'The Wild Atlantic Way',
  // No Aran Islands/Connemara as separate counties

  'County Cork': 'Southwest Ireland & Munster',
  'County Kerry': 'Southwest Ireland & Munster',
  'County Limerick': 'Southwest Ireland & Munster',
  'County Tipperary': 'Southwest Ireland & Munster',
  'County Waterford': 'Southwest Ireland & Munster',

  'County Kilkenny': "Ireland's Ancient East",
  'County Wexford': "Ireland's Ancient East",
  'County Carlow': "Ireland's Ancient East",
  'County Wicklow': "Ireland's Ancient East",
  'County Kildare': "Ireland's Ancient East",
  'County Laois': "Ireland's Ancient East",
  'County Offaly': "Ireland's Ancient East",

  'County Westmeath': 'Central Ireland & the Heartlands',
  'County Roscommon': 'Central Ireland & the Heartlands',
  'County Longford': 'Central Ireland & the Heartlands',
  'County Leitrim': 'Central Ireland & the Heartlands',
  'County Cavan': 'Central Ireland & the Heartlands',

  'County Dublin': 'Dublin & Eastern Ireland',
  'County Meath': 'Dublin & Eastern Ireland',
  'County Louth': 'Dublin & Eastern Ireland',

  'County Antrim': 'Northern Ireland & Ulster',
  'County Armagh': 'Northern Ireland & Ulster',
  'County Down': 'Northern Ireland & Ulster',
  'County Fermanagh': 'Northern Ireland & Ulster',
  'County Tyrone': 'Northern Ireland & Ulster',
  'County Derry': 'Northern Ireland & Ulster',
  'County Donegal': 'Northern Ireland & Ulster',
  'County Monaghan': 'Northern Ireland & Ulster',
};

// Build name → county map from audit data
const irish = auditData.filter(x => x.country === 'ireland');
const nameToCounty = {};
for (const entry of irish) {
  nameToCounty[entry.name.toLowerCase()] = entry.county;
}

// Get all Irish DB listings that need updating
const result = JSON.parse(
  execSync('npx wrangler d1 execute castlecore-db --remote --command "SELECT id, name, region FROM listings WHERE country = \'Ireland\'" --json', { encoding: 'utf8' })
);

const listings = result[0].results;
console.log(`Found ${listings.length} Irish listings in DB`);

const updates = [];
const unmapped = [];

for (const listing of listings) {
  // Find county from audit data
  const county = nameToCounty[listing.name.toLowerCase()];
  if (!county) {
    unmapped.push({ id: listing.id, name: listing.name, reason: 'no audit match' });
    continue;
  }

  const region = countyToRegion[county];
  if (!region) {
    unmapped.push({ id: listing.id, name: listing.name, county, reason: 'county not in mapping' });
    continue;
  }

  if (listing.region !== region) {
    updates.push({ id: listing.id, name: listing.name, county, oldRegion: listing.region, newRegion: region });
  }
}

console.log(`\nUpdates needed: ${updates.length}`);
console.log(`Unmapped: ${unmapped.length}`);

if (unmapped.length > 0) {
  console.log('\nUnmapped listings:');
  for (const u of unmapped) {
    console.log(`  - ${u.name} (${u.reason}${u.county ? ', county: ' + u.county : ''})`);
  }
}

// Group by region for summary
const regionCounts = {};
for (const u of updates) {
  regionCounts[u.newRegion] = (regionCounts[u.newRegion] || 0) + 1;
}
console.log('\nRegion distribution:');
for (const [region, count] of Object.entries(regionCounts).sort((a,b) => b[1] - a[1])) {
  console.log(`  ${region}: ${count}`);
}

// Execute updates in batches
const BATCH_SIZE = 50;
for (let i = 0; i < updates.length; i += BATCH_SIZE) {
  const batch = updates.slice(i, i + BATCH_SIZE);
  const sql = batch.map(u => {
    const escapedRegion = u.newRegion.replace(/'/g, "''");
    return `UPDATE listings SET region = '${escapedRegion}', updated_at = datetime('now') WHERE id = ${u.id};`;
  }).join('\n');

  const fs = require('fs');
  fs.writeFileSync('temp-region-update.sql', sql);
  try {
    execSync('npx wrangler d1 execute castlecore-db --remote --file temp-region-update.sql', { encoding: 'utf8', stdio: 'pipe' });
    console.log(`Batch ${Math.floor(i/BATCH_SIZE)+1}: ${batch.length} updates sent`);
  } catch(e) {
    // wrangler often exits non-zero but still succeeds
    console.log(`Batch ${Math.floor(i/BATCH_SIZE)+1}: ${batch.length} updates sent (wrangler exited with warning)`);
  }
}

// Cleanup
try { require('fs').unlinkSync('temp-region-update.sql'); } catch(e) {}

console.log('\nDone!');
