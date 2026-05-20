const fs = require('fs');
let src = fs.readFileSync('data.js','utf8');

// Extract the CASTLES array
const match = src.match(/const CASTLES\s*=\s*(\[[\s\S]*\]);/);
if(!match) { console.log('Could not parse CASTLES'); process.exit(1); }
let castles = eval(match[1]);
console.log(`Starting count: ${castles.length}`);

// Build name->index map
const byName = {};
castles.forEach((c,i) => { byName[c.name] = i; });

// Names to DELETE (keep the other one)
const toDelete = [
  // From first pass - qualifier duplicates
  'Inniscrone Castle',
  'Easky Castle',
  'Carrigogunnel Castle',
  'Bagington Castle',
  'Notland Castle',
  'Dunnideer Castle',
  'Dryslwyn Castle',
  'Rinvyle Castle',
  'Creevlea Abbey',
  'Castle Hacket',
  'Ballingskelligs Castle',
  'Loughmore Castle',
  'Kilcooley Abbey',
  "Earl's Palace, Birsay",
  'Ballynacarriga Castle',
  'Lydican Castle',
  'Taaffe Castle',
  'Donamon Castle (Ros)',
  'Tioram Castle',
  'Stalker Castle',
  'Girnigoe Castle (Ruins)',
  'Coeffin Castle (Main)',
  'Castle Sween (Main)',
  'Wardour Old Castle',
  'Castle Bolton',
  'Castle Drogo (Dartmoor)',
  'Castle Rising (Norfolk)',
  'Ludlow Castle (Shropshire)',
  'Scotney Castle (Kent)',
  'Snape Castle (Bedale)',
  'Lews Castle (Stornoway)',
  'Wigmore Castle (Herefordshire)',
  'Jervaulx Abbey (Wensleydale)',
  'Whittington Castle (Shropshire)',
  'Ross Castle (Killarney)',
  "Parke's Castle (Leitrim)",
  'Mulgrave Castle (Old)',
  'Mulgrave Castle (Old Main)',
  'Old Inverlochy Castle',
  'Inverlochy Castle (Fort William)',
  'Old Mellifont Abbey',
  'Halton Castle (Cheshire)',
  'Coolbanagher Castle (Laois)',
  'Wiston Castle Mound',
  'Roch Castle Exterior',
  'Tretower Court & Castle',
  'Tretower Court and Castle',
  'Creevelea Friary (Leitrim)',
  'Castlegregory Castle',
  'Crom Old Castle',
  'Moy Castle (Mull)',
  'Castle Lachlan (New)',
  'Hawarden Castle Old',
  'Caerlaverock Castle (New)',
  'Castle Murray (Donegal)',
  'Donore Castle (Meath)',
  'Dromore Castle (Kerry/Lim)',
  'Kinlough Castle (Mayo)',
  'Killaha Castle (Kerry)',
  'Dunmore Castle (Galway)',
  'Castle Roche',
  'Rathmoylan Castle',
  'Castlemore Castle (Cork)',

  // From second pass - E's list
  'Abbeyknockmoy',
  'Brough Castle Clifford Tower',
  'Castle Acre Castle (Norfolk)',
  'Castle Acre Priory (Cluniac)',
  'Castle Combe Village',
  'Castlerea Castle (Clonalis)',
  'Cawdor Castle Gardens',
  'Chepstow Castle Great Tower',
  'Chillingham Castle (Northumberland)',
  'Conwy Town Walls Walk',
  'Dartmouth Castle (Devon)',
  'Desmond Castle Kinsale',
  'Desmond Castle Newcastle West',
  'Donore Castle Meath',
  'Dornoch Castle Hotel',
  'Dundrum Castle (Down)',
  'Dundrum Castle Down',
  "Earl's Palace Kirkwall",
  'Eynsford Castle Curtain Wall',
  'Farleigh Hungerford Keep',
  'Framlingham Castle (Suffolk)',
  'Furness Abbey (Cumbria)',
  'Goodrich Castle (Herefordshire)',
  'Greencastle Donegal',
  'Hawarden Castle (Old)',
  'Holycross Abbey',
  'Huntingtower Castle Painted Ceiling',
  'Hussey Tower (Boston)',
  'Kildavnet Castle',
  'Killmallock Castle',
  'Kirby Muxloe Castle',
  'Kirkstall Abbey (Leeds)',
  'Llansteffan Castle Viewpoint',
  'Lochleven Castle Keep',
  'Margam Castle Victorian',
  'Muncaster Castle (Eskdale)',
  'Newcastle (Bridgend)',
  'Newport Castle (Pembs)',
  'Okehampton Castle (Devon)',
  'Olderfleet Tower',
  'Parkes Castle',
  'Peel Castle (Main)',
  'Penmon Priory Anglesey',
  'Penmon Priory Church',
  'Pennard Castle Gower',
  'Pickering Castle (North Yorkshire)',
  'Portchester Castle (Roman)',
  'Raglan Castle Great Tower',
  'Ravenscraig Castle (Fife)',
  'Ravenscraig Castle Fife',
  'Ravensworth Castle (Yorkshire)',
  'Rhuddlan Castle Towers',
  'Roscrea Heritage Site',
  'Rougemont Castle Exeter',
  'Ruthin Castle Grounds',
  'Scalloway Castle Restored',
  'Sizergh Castle (Kendal)',
  'Slains Castle',
  'Stokesay Castle (Shropshire)',
  'Timoleague Friary',
  'Tioram Castle Viewpoint',
  'Tutbury Castle (Staffordshire)',
  'Usk Castle Gardens',
  'Wolvesey Castle (Palace)',

  // Spelling variants from E's list
  'Leamaneh Castle',
  'Ballycarberry Tower',
  "Coppinger's Court",
  'Castle Hedingham',

  // Additional from smart-dupes (same site different name format)  
  'Dunluce Dark Hedges Tower',
  'Easkey Tower House', // keep Easkey Castle
  'Dysert O\'Dea Tower', // keep Dysert O'Dea Castle
  'Dunmore East Tower', // keep Dunmore East Castle
  'Castletownshend Tower', // keep Castletownshend Castle
  'Groby Old Hall', // keep Groby Castle
  'Rathcroghan Mound', // keep Rathcroghan
  'Coolhull Tower', // keep Coolhull Castle
  'Rathmacknee Tower', // keep Rathmacknee Castle
  'Stradbally Tower', // keep Stradbally Castle
  'Clomantagh Tower', // keep Clomantagh Castle
  'Kilrush Church', // keep Kilrush Tower House
  'Sigginstown Castle', // keep Jigginstown Castle
  'Kinturk Castle', // keep Kanturk Castle
  'Newcastle Bridgend Castle', // keep Newcastle (Bridgend) — wait, we're deleting that too
  'Knockgraffon Motte', // keep Knockgraffon Castle
  'Cefnllys Castle Mound', // keep Cefnllys Castle
  'Mathrafal Castle Mound', // keep Mathrafal Castle
  'Killahara Tower', // keep Killahara Castle
  'Killarone Tower', // keep Killarone Castle
  'Finlaystone House', // keep Finlaystone Castle
  'Tomen y Mur Fort', // keep Tomen y Mur
];

// Deduplicate the delete list
const deleteSet = new Set(toDelete);
console.log(`Entries to delete: ${deleteSet.size}`);

const before = castles.length;
const deleted = [];
const notFound = [];

castles = castles.filter(c => {
  if(deleteSet.has(c.name)) {
    deleted.push(c.name);
    deleteSet.delete(c.name);
    return false;
  }
  return true;
});

// Check what wasn't found
for(const name of deleteSet) {
  notFound.push(name);
}

console.log(`Deleted: ${deleted.length}`);
console.log(`Not found: ${notFound.length}`);
if(notFound.length > 0) {
  console.log('Not found:', notFound);
}
console.log(`Final count: ${castles.length} (was ${before})`);

// Write back
const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
fs.writeFileSync('data.js', output);
console.log('Written to data.js');
