const fs = require('fs');
const raw = fs.readFileSync('data.js', 'utf8');
const m = raw.match(/const CASTLES = (\[[\s\S]*\]);/);
const data = JSON.parse(m[1]);
console.log('Before:', data.length);

// Delete list from E's review
const deleteNames = [
  'Kilmokea', 'Smithstown', 'Bunowen', 'Faunarooska', 'Rossclogher',
  'Castlemore Castle', 'Clenagh', 'Two Mile Borris', 'Tromra', 'Castle Hewson',
  'Monksgrange', 'Creagh', 'Castlegal', 'Eglish',
  'Breifne Castle',   // phantom - Kingdom of Breifne, not a real castle
  'Rearcross Tower',  // E says delete
];

// Find and delete by name
const toDelete = new Set();
for (const name of deleteNames) {
  const idx = data.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
  if (idx >= 0) {
    console.log('DELETE:', data[idx].name, '(index', idx + ')');
    toDelete.add(idx);
  } else {
    // Try partial match
    const partial = data.findIndex(c => c.name.toLowerCase().includes(name.toLowerCase()));
    if (partial >= 0) {
      console.log('DELETE (partial):', data[partial].name, '(index', partial + ')');
      toDelete.add(partial);
    } else {
      console.log('NOT FOUND:', name);
    }
  }
}

// Sigginstown merge: keep "Sigginstown Castle", delete "Sigginstown Tower"
const sigTower = data.findIndex(c => c.name === 'Sigginstown Tower');
if (sigTower >= 0) {
  console.log('DELETE (Sigginstown merge):', data[sigTower].name);
  toDelete.add(sigTower);
}

// Fix Cloughoughter Castle - wrong image (Glenarm!) and verify coords
const clough = data.findIndex(c => c.name === 'Cloughoughter Castle');
if (clough >= 0) {
  const c = data[clough];
  console.log('FIX Cloughoughter:', 'old image=', c.image, 'old coords=', c.lat, c.lng);
  c.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg/500px-Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg';
  c.lat = 54.0187;
  c.lng = -7.4548;
  console.log('FIX Cloughoughter: new coords=', c.lat, c.lng);
}

const filtered = data.filter((c, i) => !toDelete.has(i));
console.log('After:', filtered.length, 'Removed:', data.length - filtered.length);

const out = 'const CASTLES = ' + JSON.stringify(filtered, null, 2) + ';';
fs.writeFileSync('data.js', out);
console.log('Done');
