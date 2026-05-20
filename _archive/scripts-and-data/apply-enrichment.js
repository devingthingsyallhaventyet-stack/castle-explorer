const fs = require('fs');

// Load enrichment data
const enrichments = JSON.parse(fs.readFileSync('enrichment-batch3.json', 'utf8'));

// Load data.js as text
let dataText = fs.readFileSync('data.js', 'utf8');

// Load via VM to get structured data
const vm = require('vm');
let code = dataText.replace(/^const /gm, 'var ');
const ctx = {};
vm.runInNewContext(code, ctx);

let updated = 0;
let failed = [];

for (const e of enrichments) {
  const castle = ctx.CASTLES.find(c => c.name === e.name);
  if (!castle) {
    failed.push(e.name + ' (not found)');
    continue;
  }
  
  // Update fields
  if (e.description) castle.description = e.description;
  if (e.history) castle.history = e.history;
  if (e.tags) castle.tags = e.tags;
  if (e.access) castle.access = e.access;
  if (e.era) castle.era = e.era;
  if (e.youtube) castle.youtube = e.youtube;
  if (e.sources) castle.sources = e.sources;
  updated++;
}

// Write back as data.js
// Rebuild the CASTLES array
const output = 'const CASTLES = ' + JSON.stringify(ctx.CASTLES, null, 2) + ';\n';
fs.writeFileSync('data.js', output, 'utf8');

console.log(`Updated ${updated} sites, ${failed.length} failed`);
if (failed.length) console.log('Failed:', failed.join(', '));

// Update progress
const progress = JSON.parse(fs.readFileSync('enrichment-progress.json', 'utf8'));
for (const e of enrichments) {
  if (!failed.includes(e.name + ' (not found)') && !progress.completed.includes(e.name)) {
    progress.completed.push(e.name);
  }
}
progress.lastRun = '2026-03-10T03:00:00-05:00';
progress.totalEnriched = progress.completed.length;
progress.nightsRun = 3;
fs.writeFileSync('enrichment-progress.json', JSON.stringify(progress, null, 2), 'utf8');
console.log(`Progress: ${progress.completed.length} total completed`);
