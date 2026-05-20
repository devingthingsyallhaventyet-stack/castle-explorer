const fs = require('fs');

// All 30 unconfirmed castles + 7 with no castle photo = 37 to remove
// Plus fix Nendrum and Lough Oughter naming
const toRemove = [
  "Knockelly Castle",
  "Sharavogue Castle",
  "Rataine Castle",
  "Dowdstown Castle Meath",
  "Drumconrath Castle",
  "Dunlicky Castle",
  "Inishmaan Castle",
  "Gortmore Castle",
  "Derrymacloughna Castle",
  "Collooney Castle",
  "Drumlease Castle",
  "Fuerty Castle",
  "Cloonfree Castle",
  "Rathmullan Castle Meath",
  "Carrigart Castle",
  "Cloone Round Tower",
  "Annestown Castle",
  "Ballylaneen Castle",
  "Clondra Castle",
  "Frankford Castle",
  "Ballymulcashel Castle",
  "Ballycahill Castle",
  "Drumshanbo Castle",
  "Kilbarry Castle Waterford",
  "Ballylooby Castle",
  "Carriggundel Castle",
  "Caherconlish Castle",
  "Ballinagleragh Castle",
  "Caherlistrane Castle",
  "Ballyjamesduff Castle",
  // 7 "exists but no photo"
  "Ballinlough Castle Roscommon",
  "Frenchpark Castle",
  "Rahasane Castle",
  "Ardrahan Castle",
  "Tullaroan Castle",
  "Kilcoursey Castle",
  "Ballyfarnon Castle",
];

const removeSet = new Set(toRemove);

// Fix region JSONs
const regionDir = 'ireland/data';
const regionFiles = fs.readdirSync(regionDir).filter(f => f.endsWith('.json'));
let totalRemoved = 0;

for (const file of regionFiles) {
  const data = JSON.parse(fs.readFileSync(`${regionDir}/${file}`, 'utf8'));
  const before = data.length;
  const filtered = data.filter(c => !removeSet.has(c.name));
  const removed = before - filtered.length;
  if (removed > 0) {
    fs.writeFileSync(`${regionDir}/${file}`, JSON.stringify(filtered, null, 2), 'utf8');
    console.log(`${file}: ${before} → ${filtered.length} (removed ${removed})`);
    totalRemoved += removed;
  }
}

// Fix data-ireland.js
let js = fs.readFileSync('data-ireland.js', 'utf8');

// data-ireland.js has entries as JSON objects in an array
// Need to parse carefully - it's assigned to window.irelandCastles or similar
// Let's find each entry by name and remove it

for (const name of toRemove) {
  // Match the full object: {"name":"Castle Name",...}
  // The entries are comma-separated in an array
  const nameEsc = name.replace(/[()]/g, '\\$&');
  const re = new RegExp(`\\{"name":"${nameEsc}"[^}]*\\},?`, 'g');
  const before = js.length;
  js = js.replace(re, '');
  if (js.length < before) {
    console.log(`data-ireland.js: removed ${name}`);
  }
}

// Clean up any trailing commas before ]
js = js.replace(/,(\s*\])/g, '$1');
// Clean up any double commas
js = js.replace(/,,+/g, ',');

fs.writeFileSync('data-ireland.js', js, 'utf8');

console.log(`\nTotal removed from region JSONs: ${totalRemoved}`);

// Count remaining
let totalRemaining = 0;
for (const file of regionFiles) {
  const data = JSON.parse(fs.readFileSync(`${regionDir}/${file}`, 'utf8'));
  totalRemaining += data.length;
  console.log(`  ${file}: ${data.length}`);
}
console.log(`Total remaining: ${totalRemaining}`);
