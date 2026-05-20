const fs = require('fs');
const vm = require('vm');

const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);
let CASTLES = ctx.CASTLES.filter(x => x);
const before = CASTLES.length;

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const decisions = {
  "merge": [
    { "action": "merge", "keep": "Adare Desmond Castle", "keepIndex": 1437, "delete": "Adare Augustinian Friary", "deleteIndex": 2455 },
    { "action": "delete-one", "keep": "Adare Desmond Castle", "keepIndex": 1437, "delete": "Adare Manor", "deleteIndex": 764 },
    { "action": "delete-one", "keep": "Adare Augustinian Friary", "keepIndex": 2455, "delete": "Adare Manor", "deleteIndex": 764 },
    { "action": "merge", "keep": "Aghadoe Castle", "keepIndex": 1355, "delete": "Aghadoe Cathedral Kerry", "deleteIndex": 2475 },
    { "action": "merge", "keep": "Ardfert Friary", "keepIndex": 2482, "delete": "Ardfert Cathedral", "deleteIndex": 288 },
    { "action": "merge", "keep": "Ballinskelligs Priory", "keepIndex": 1463, "delete": "Ballinskelligs Castle", "deleteIndex": 1464 },
    { "action": "merge", "keep": "Bolton Abbey", "keepIndex": 1871, "delete": "Bolton Priory", "deleteIndex": 448 },
    { "action": "delete-one", "keep": "Brechin Castle", "keepIndex": 492, "delete": "Brechin Round Tower", "deleteIndex": 690 },
    { "action": "merge", "keep": "Caerau Hillfort", "keepIndex": 1483, "delete": "Caerau Ringwork", "deleteIndex": 1491 },
    { "action": "merge", "keep": "Caerleon Amphitheatre", "keepIndex": 1497, "delete": "Caerleon Roman Fortress", "deleteIndex": 1496 },
    { "action": "delete-one", "keep": "Caernarfon Castle", "keepIndex": 196, "delete": "Caernarfon Town Walls", "deleteIndex": 1403 },
    { "action": "delete-one", "keep": "Callan Friary", "keepIndex": 1395, "delete": "Callan Castle", "deleteIndex": 858 },
    { "action": "delete-one", "keep": "Carew Castle", "keepIndex": 237, "delete": "Carew Cross", "deleteIndex": 1350 },
    { "action": "delete-one", "keep": "Castlemartyr Castle", "keepIndex": 1329, "delete": "Castlemartyr Resort", "deleteIndex": 1471 },
    { "action": "merge", "keep": "Castletown Castle Laois", "keepIndex": 1817, "delete": "Castletown Castle (Laois)", "deleteIndex": 1202 },
    { "action": "delete-one", "keep": "Claregalway Friary", "keepIndex": 275, "delete": "Claregalway Castle", "deleteIndex": 935 },
    { "action": "delete-one", "keep": "Conwy Castle", "keepIndex": 195, "delete": "Conwy Town Walls", "deleteIndex": 1402 },
    { "action": "merge", "keep": "Creevelea Abbey", "keepIndex": 1441, "delete": "Creevelea Friary", "deleteIndex": 938 },
    { "action": "merge", "keep": "Crichton Castle", "keepIndex": 123, "delete": "Crichton Collegiate Church", "deleteIndex": 2084 },
    { "action": "merge", "keep": "Devenish Monastic Site", "keepIndex": 364, "delete": "Devenish Island Monastic Site", "deleteIndex": 1744 },
    { "action": "merge", "keep": "Dinefwr Park", "keepIndex": 1504, "delete": "Dinefwr Castle", "deleteIndex": 241 },
    { "action": "delete-one", "keep": "Thetford Priory", "keepIndex": 409, "delete": "Thetford Castle", "deleteIndex": 537 },
    { "action": "merge", "keep": "Thetford Priory", "keepIndex": 409, "delete": "Thetford Warren Lodge", "deleteIndex": 597 },
    { "action": "merge", "keep": "Thornton Abbey", "keepIndex": 112, "delete": "Thornton Curtis Abbey Gatehouse", "deleteIndex": 2284 },
    { "action": "delete-one", "keep": "Tullaroan Castle", "keepIndex": 2435, "delete": "Tullaroan Round Tower", "deleteIndex": 2401 },
    { "action": "merge", "keep": "Tynan Castle", "keepIndex": 1244, "delete": "Tynan High Crosses", "deleteIndex": 2170 },
    { "action": "merge", "keep": "Valle Crucis Abbey", "keepIndex": 233, "delete": "Valle Crucis Fishpond", "deleteIndex": 1548 },
    { "action": "merge", "keep": "Warkworth Castle", "keepIndex": 65, "delete": "Warkworth Hermitage", "deleteIndex": 543 },
    { "action": "merge", "keep": "Wentworth Castle", "keepIndex": 1851, "delete": "Wentworth Woodhouse", "deleteIndex": 2273 }
  ],
  "deleteBoth": [
    { "action": "delete-both", "deleteA": "Thetford Castle", "deleteAIndex": 537, "deleteB": "Thetford Warren Lodge", "deleteBIndex": 597 }
  ]
};

// Collect all names to delete (use Set to avoid duplicates)
const toDelete = new Set();

for (const m of decisions.merge) {
  toDelete.add(m.delete);
}
for (const d of decisions.deleteBoth) {
  toDelete.add(d.deleteA);
  toDelete.add(d.deleteB);
}

console.log(`Will delete ${toDelete.size} entries:`);
for (const name of toDelete) console.log(`  - ${name}`);

// Remove from data
const removed = [];
const notFound = [];
for (const name of toDelete) {
  const idx = CASTLES.findIndex(c => c.name === name);
  if (idx !== -1) {
    CASTLES.splice(idx, 1);
    removed.push(name);
  } else {
    notFound.push(name);
  }
}

console.log(`\nRemoved ${removed.length} entries from data.js (${before} → ${CASTLES.length})`);
if (notFound.length) console.log('NOT FOUND:', notFound.join(', '));

// Write updated data
fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(CASTLES, null, 2) + ';\n');

// Delete corresponding HTML pages
let deletedPages = 0;
for (const name of removed) {
  const slug = slugify(name);
  const path = 'site/' + slug + '.html';
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
    console.log('Deleted page: ' + path);
    deletedPages++;
  } else {
    console.log('No page for: ' + slug);
  }
}

console.log(`\nDone! Deleted ${deletedPages} pages. Total sites: ${CASTLES.length}`);
