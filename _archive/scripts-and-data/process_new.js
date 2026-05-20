const fs = require('fs');

// Load existing data
const dataJs = fs.readFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castles/data.js', 'utf8');
const existingNames = new Set([...dataJs.matchAll(/name: "([^"]+)"/g)].map(m => m[1]));

// Load the newCastles array from generate_new.js
// We need to extract the array - let's eval it safely
let newSource = fs.readFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castles/generate_new.js', 'utf8');

// Fix: the file might be incomplete, let's check
if (!newSource.includes('];')) {
  // Find last complete entry
  const lastBrace = newSource.lastIndexOf('},');
  if (lastBrace > 0) {
    newSource = newSource.substring(0, lastBrace + 1) + '\n];';
  }
}

// Extract array
const arrayMatch = newSource.match(/const newCastles = (\[[\s\S]*\]);/);
if (!arrayMatch) {
  console.error('Could not extract array');
  process.exit(1);
}

let newCastles;
eval('newCastles = ' + arrayMatch[1]);

// Filter duplicates
const unique = [];
const seen = new Set();
for (const c of newCastles) {
  if (existingNames.has(c.name) || seen.has(c.name)) {
    console.log('SKIP duplicate:', c.name);
    continue;
  }
  seen.add(c.name);
  unique.push(c);
}

console.log(`\nTotal new unique entries: ${unique.length}`);
console.log(`Existing entries: ${existingNames.size}`);
console.log(`Will have total: ${existingNames.size + unique.length}`);

// Format entries
function formatEntry(c) {
  const tags = JSON.stringify(c.tags || []);
  return `  { name: "${c.name}", lat: ${c.lat}, lng: ${c.lng}, country: "${c.country}", type: "${c.type}", era: "${c.era}", condition: "${c.condition}", description: "${c.description.replace(/"/g, '\\"')}", image: "", rating: ${c.rating}, reviewCount: ${c.reviewCount}, county: "${c.county}", tags: ${tags}, access: "${c.access}" }`;
}

const newEntries = unique.map(formatEntry).join(',\n');

// Insert before the closing ];
const insertPoint = dataJs.lastIndexOf('];');
const newDataJs = dataJs.substring(0, insertPoint) + 
  '\n  // ===== EXPANDED DATASET =====\n' +
  newEntries + ',\n' +
  '];';

fs.writeFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castles/data.js', newDataJs);

// Count total
const totalCount = [...newDataJs.matchAll(/{ name: "/g)].length;
console.log(`\nFinal total entries in data.js: ${totalCount}`);
