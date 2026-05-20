const fs = require('fs');
const raw = fs.readFileSync('data.js', 'utf8');
const m = raw.match(/const CASTLES = (\[[\s\S]*\]);/);
const data = JSON.parse(m[1]);

console.log('Before:', data.length);

// 1. Carlingford: keep i=744 (Wikipedia image, correct coords, good desc)
//    Delete i=1473 (wrong lat), i=1754, i=2475 (all dupes). Carlingford Mint (i=895) is separate, keep.
// 2. Templehouse: keep Castle (i=1155), delete Demesne (i=2184), enrich desc
// 3. Esslemont: keep Esslemont Castle (i=965), delete Castle of Esslemont (i=1616)
// 4. Cregg: keep Cregg Castle (i=2494, well-preserved), delete Creggs Castle (i=1826)
// 6. Ardoginna (i=2488): rename to McKenna's Castle

const deleteIndices = new Set([1473, 1754, 2475, 2184, 1616, 1826]);

// Enrich Templehouse
data[1155].description += ' Part of a historic demesne with a Georgian house on the estate grounds.';

// Rename Ardoginna
data[2488].name = "McKenna's Castle";

const filtered = data.filter((c, i) => !deleteIndices.has(i));
console.log('After:', filtered.length, 'Removed:', data.length - filtered.length);

const out = 'const CASTLES = ' + JSON.stringify(filtered, null, 2) + ';';
fs.writeFileSync('data.js', out);
console.log('Done');
