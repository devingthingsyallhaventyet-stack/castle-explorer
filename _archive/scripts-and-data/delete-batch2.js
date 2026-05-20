const fs = require('fs');
const src = fs.readFileSync('data.js', 'utf8');
const fn = new Function(src + '; return CASTLES;');
const arr = fn();

const toDelete = [
  "Abbeyknockmoy",
  "Brough Castle Clifford Tower",
  "Caerlaverockite",
  "Castle Acre Castle (Norfolk)",
  "Castle Acre Priory (Cluniac)",
  "Castle Combe Village",
  "Castlerea Castle (Clonalis)",
  "Cawdor Castle Gardens",
  "Chepstow Castle Great Tower",
  "Chillingham Castle (Northumberland)",
  "Conwy Town Walls Walk",
  "Dartmouth Castle (Devon)",
  "Desmond Castle Kinsale",
  "Desmond Castle Newcastle West",
  "Donore Castle Meath",
  "Dornoch Castle Hotel",
  "Dundrum Castle (Down)",
  "Dundrum Castle Down",
  "Earl's Palace Kirkwall",
  "Eynsford Castle Curtain Wall",
  "Farleigh Hungerford Keep",
  "Framlingham Castle (Suffolk)",
  "Furness Abbey (Cumbria)",
  "Goodrich Castle (Herefordshire)",
  "Greencastle Donegal",
  "Hawarden Castle (Old)",
  "Holycross Abbey",
  "Huntingtower Castle Painted Ceiling",
  "Hussey Tower (Boston)",
  "Kildavnet Castle",
  "Killmallock Castle",
  "Kirby Muxloe Castle",
  "Kirkstall Abbey (Leeds)",
  "Llansteffan Castle Viewpoint",
  "Lochleven Castle Keep",
  "Margam Castle Victorian",
  "Muncaster Castle (Eskdale)",
  "Newcastle (Bridgend)",
  "Newport Castle (Pembs)",
  "Okehampton Castle (Devon)",
  "Olderfleet Tower",
  "Parkes Castle",
  "Peel Castle (Main)",
  "Penmon Priory Anglesey",
  "Penmon Priory Church",
  "Pennard Castle Gower",
  "Pickering Castle (North Yorkshire)",
  "Portchester Castle (Roman)",
  "Raglan Castle Great Tower",
  "Ravenscraig Castle (Fife)",
  "Ravenscraig Castle Fife",
  "Ravensworth Castle (Yorkshire)",
  "Rhuddlan Castle Towers",
  "Roscrea Heritage Site",
  "Rougemont Castle Exeter",
  "Ruthin Castle Grounds",
  "Scalloway Castle Restored",
  "Sizergh Castle (Kendal)",
  "Slains Castle",
  "Stokesay Castle (Shropshire)",
  "Timoleague Friary",
  "Tioram Castle Viewpoint",
  "Tutbury Castle (Staffordshire)",
  "Usk Castle Gardens",
  "Wolvesey Castle (Palace)",
  // Spelling variants
  "Leamaneh Castle",
  "Lemeneagh Castle",
  "Ballycarberry Tower",
  "Coppingers Court",
  "Castle Hedingham",
];

const before = arr.length;
const nameSet = new Set(toDelete);
const filtered = arr.filter(s => {
  if (nameSet.has(s.name)) {
    nameSet.delete(s.name);
    console.log('DELETED:', s.name);
    return false;
  }
  return true;
});

if (nameSet.size > 0) {
  console.log('\nNOT FOUND:');
  for (const n of nameSet) console.log('  -', n);
}

console.log(`\nBefore: ${before}, After: ${filtered.length}, Removed: ${before - filtered.length}`);

const out = 'const CASTLES = ' + JSON.stringify(filtered, null, 2) + ';\n';
fs.writeFileSync('data.js', out);
console.log('data.js written.');
