const fs = require('fs');
let raw = fs.readFileSync('data.js', 'utf8');

// Extract JSON array
const start = raw.indexOf('[');
const end = raw.lastIndexOf(']') + 1;
let json = raw.substring(start, end);
const sites = JSON.parse(json);
console.log('Total sites:', sites.length);

// 1. Delete these
const deletes = ['Stowe Barton', 'Candacraig House', 'Ringrone Castle', 'Raunds Manor', 'Knighton Castle'];
deletes.forEach(d => {
  const idx = sites.findIndex(s => s.name === d);
  if (idx >= 0) {
    console.log('DELETE:', d);
    sites.splice(idx, 1);
  } else {
    console.log('NOT FOUND for delete:', d);
    // fuzzy search
    sites.filter(s => s.name.toLowerCase().includes(d.split(' ')[0].toLowerCase())).forEach(s => console.log('  maybe:', s.name));
  }
});

// 2. Check for King John's Carlingford dupes
const kj = sites.filter(s => s.name.toLowerCase().includes('king john') && s.name.toLowerCase().includes('carlingford'));
console.log('\nKing John Carlingford entries:', kj.length);
kj.forEach(s => console.log(' ', s.name, '| slug:', s.slug || 'no slug', '| image:', s.image ? 'yes' : 'no'));

// 3. Check Lochinch / Templehouse
const loc = sites.filter(s => s.name.toLowerCase().includes('lochinch') || s.name.toLowerCase().includes('templehouse'));
console.log('\nLochinch/Templehouse entries:');
loc.forEach(s => console.log(' ', s.name, '| region:', s.region || '', '| image:', s.image ? s.image.split('/').pop() : 'none'));

// 4. Check Castle of Esslemont (should already have image)
const ess = sites.filter(s => s.name.toLowerCase().includes('esslemont'));
console.log('\nEsslemont entries:');
ess.forEach(s => console.log(' ', s.name, '| image:', s.image || 'none'));

// 5. Check Ardoginna
const ard = sites.filter(s => s.name.toLowerCase().includes('ardoginna'));
console.log('\nArdoginna entries:');
ard.forEach(s => console.log(' ', s.name, '| type:', s.type || ''));

// 6. Check Cregg Castle
const cregg = sites.filter(s => s.name.toLowerCase().includes('cregg'));
console.log('\nCregg entries:');
cregg.forEach(s => console.log(' ', s.name, '| image:', s.image ? s.image.split('/').pop() : 'none'));

// 7. Check Castle of Fiddes
const fiddes = sites.filter(s => s.name.toLowerCase().includes('fiddes'));
console.log('\nFiddes entries:');
fiddes.forEach(s => console.log(' ', s.name, '| image:', s.image ? s.image.split('/').pop() : 'none'));

console.log('\nAfter deletes:', sites.length, 'sites');

// Write back
const output = 'const CASTLES = ' + JSON.stringify(sites, null, 2) + ';\n\nif (typeof module !== \'undefined\') module.exports = CASTLES;\n';
fs.writeFileSync('data.js', output);
console.log('data.js updated');
