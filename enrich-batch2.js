const fs = require('fs');
const vm = require('vm');

// Load and parse
let code = fs.readFileSync('data.js', 'utf8');
let evalCode = code.replace(/^const /gm, 'var ');
const ctx = {};
vm.runInNewContext(evalCode, ctx);
const castles = ctx.CASTLES;

// Load enrichments from JSON
const enrichments = JSON.parse(fs.readFileSync('enrich-data.json', 'utf8'));

let updated = 0;
for (const e of enrichments) {
  const castle = castles.find(c => c.name === e.name);
  if (!castle) {
    console.log('SKIP (not in CASTLES):', e.name);
    continue;
  }
  if (e.description) castle.description = e.description;
  if (e.history) castle.history = e.history;
  if (e.tags) castle.tags = e.tags;
  if (e.era) castle.era = e.era;
  if (e.access) castle.access = e.access;
  if (e.sources) castle.sources = e.sources;
  updated++;
  console.log('OK:', e.name);
}

// Write back
const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
fs.writeFileSync('data.js', output, 'utf8');
console.log('\nUpdated ' + updated + ' sites. data.js rewritten.');
