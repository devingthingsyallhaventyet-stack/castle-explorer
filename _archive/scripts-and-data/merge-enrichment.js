const fs = require('fs');
const vm = require('vm');
const path = require('path');

// 1. Read enrichment files
const files = [
  'enrichment-output-ireland.json',
  'enrichment-output-scotland.json', 
  'enrichment-output-england.json',
  'enrichment-output-wales-ni.json'
];

const enrichMap = new Map(); // name -> last entry

for (const f of files) {
  const raw = fs.readFileSync(path.join(__dirname, f), 'utf-8');
  // Strip BOM
  const clean = raw.replace(/^\uFEFF/, '').trim();
  let entries;
  try {
    entries = JSON.parse(clean);
  } catch {
    // Try JSONL - parse line by line, skip failures
    entries = [];
    for (const line of clean.split('\n')) {
      const t = line.trim();
      if (!t || t === '[' || t === ']') continue;
      try {
        // Remove trailing comma if present
        const fixed = t.replace(/,\s*$/, '');
        if (fixed.startsWith('{')) entries.push(JSON.parse(fixed));
      } catch(e2) {
        // skip bad line
      }
    }
  }
  for (const e of entries) {
    if (e.name) enrichMap.set(e.name, e); // last wins
  }
}

console.log(`Loaded ${enrichMap.size} unique enrichment entries from ${files.length} files`);

// 2. Load data.js
const dataPath = path.join(__dirname, 'data.js');
const dataRaw = fs.readFileSync(dataPath, 'utf-8');
const ctx = {};
vm.runInNewContext(dataRaw.replace('const CASTLES', 'this.CASTLES'), ctx);
const castles = ctx.CASTLES;
console.log(`Loaded ${castles.length} castles from data.js`);

// 3. Merge
const fieldsToUpdate = ['description', 'history', 'tags', 'access', 'era', 'youtube', 'sources'];
let updated = 0;
let notFound = [];

for (const [name, enrichment] of enrichMap) {
  const castle = castles.find(c => c.name === name);
  if (!castle) {
    notFound.push(name);
    continue;
  }
  let changed = false;
  for (const field of fieldsToUpdate) {
    const val = enrichment[field];
    if (val === undefined || val === null || val === '' || (Array.isArray(val) && val.length === 0)) continue;
    castle[field] = val;
    changed = true;
  }
  if (changed) updated++;
}

console.log(`Updated ${updated} sites`);
if (notFound.length) console.log(`Not found in CASTLES (${notFound.length}): ${notFound.join(', ')}`);

// 4. Write data.js
const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
fs.writeFileSync(dataPath, output, 'utf-8');
console.log('Wrote updated data.js');
