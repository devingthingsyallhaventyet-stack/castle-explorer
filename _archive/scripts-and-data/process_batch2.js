const fs = require('fs');

// Load existing data
const dataJs = fs.readFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castles/data.js', 'utf8');
const existingNames = new Set([...dataJs.matchAll(/name: "([^"]+)"/g)].map(m => m[1]));
console.log(`Existing entries: ${existingNames.size}`);

// Load batch2
const batch2 = require('./batch2.js');
console.log(`Batch 2 candidates: ${batch2.length}`);

// Filter duplicates
const unique = [];
const seen = new Set();
let dupes = 0;
for (const c of batch2) {
  if (existingNames.has(c.name) || seen.has(c.name)) {
    dupes++;
    continue;
  }
  seen.add(c.name);
  unique.push(c);
}
console.log(`Duplicates skipped: ${dupes}`);
console.log(`New unique entries: ${unique.length}`);

// Format entries
function formatEntry(c) {
  const tags = JSON.stringify(c.tags || []);
  const desc = c.description.replace(/"/g, '\\"');
  return `  { name: "${c.name}", lat: ${c.lat}, lng: ${c.lng}, country: "${c.country}", type: "${c.type}", era: "${c.era}", condition: "${c.condition}", description: "${desc}", image: "", rating: ${c.rating}, reviewCount: ${c.reviewCount}, county: "${c.county}", tags: ${tags}, access: "${c.access}" }`;
}

const newEntries = unique.map(formatEntry).join(',\n');

// Insert before the closing ];
const insertPoint = dataJs.lastIndexOf('];');
const newDataJs = dataJs.substring(0, insertPoint) + 
  '\n  // ===== EXPANDED DATASET - BATCH 2 =====\n' +
  newEntries + ',\n' +
  '];';

fs.writeFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castles/data.js', newDataJs);

// Count total
const totalCount = [...newDataJs.matchAll(/\{ name: "/g)].length;
console.log(`\nFinal total entries in data.js: ${totalCount}`);
