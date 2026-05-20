const fs = require('fs');
const raw = fs.readFileSync('data.js', 'utf8');
const m = raw.match(/const CASTLES = (\[[\s\S]*\]);/);
const data = JSON.parse(m[1]);
console.log('Before:', data.length);
const idx = data.findIndex(c => c.name.toLowerCase().includes('aghada'));
if (idx >= 0) {
  console.log('DELETE:', data[idx].name);
  data.splice(idx, 1);
}
console.log('After:', data.length);
fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(data, null, 2) + ';');
console.log('Done');
