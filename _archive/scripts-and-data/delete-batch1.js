const fs = require('fs');
const vm = require('vm');

const toDelete = [
  "Abbey Knockmoy Galway",
  "Abbeydorney Cistercian Ruins",
  "Abbeyknockmoy Abbey",
  "Knockmoy Abbey",
  "Aberdour Castle Great Hall",
  "Aberedw Castle",
  "Abergavenny Castle Museum",
  "Aberglasney Gardens Ruins",
  "Acton Burnell Castle (Shropshire)",
  "Adare Castle",
  "Aghaboe Abbey Laois",
  "Aghadoe",
  "Aghadoe Church and Round Tower",
  "Annaghkeen Castle Galway",
  "Antrim Round Tower",
  "Ardagh Heritage Centre",
  "Aros Castle (Mull)",
  "Askeaton Friary",
  "Auckland Castle Chapel",
  "Audleys Castle",
  "Ballingarry Castle",
  "Ballingarry Castle (Lim)",
  "Ballintober Castle Roscommon",
  "Ballintober Castle Mayo",
  "Ballycarberry Castle Ruin",
  "Ballycarberry Castle",
  "Ballygally Tower",
  "Ballygally Castle",
  "Ballyhack Tower",
  "Ballykinvarga Stone Fort",
  "Ballylee Castle (Thoor Ballylee)",
  "Ballyloughan Castle Carlow",
  "Ballyloughan Castle (Carlow)",
  "Ballynahinch Castle Tipperary",
  "Ballynahow Castle",
  "Battle Abbey (Sussex)",
  "Belsay Hall and Castle",
  "Benton Castle",
  "Berry Pomeroy Castle (Devon)",
  "Birr Castle Gardens",
  "Black Castle (Wicklow Main)",
  "Blackcastle",
  "Bleddfa Castle",
  "Bolton Abbey (Tipperary)",
  "Bolton Castle (Wensleydale)",
  "Bourchier's Castle",
  "Brampton Castle (Bryan de Jay)",
  "Brecon Castle",
  "Brinklow Castle Motte",
  "Brough Castle (Westmorland)",
  "Brougham Castle (Eden)",
  "Broughton Castle (Banbury)",
  "Broughty Castle",
  "Buckden Towers",
  "Builth Castle Mound",
  "Burnchurch Tower",
  "Burntcourt Castle",
  "Burrishoole Friary",
  "Buttevant Castle",
  "Byland Abbey (Yorkshire)"
];

const d = fs.readFileSync(__dirname + '/data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace(/\bconst\b/g, 'var'), ctx);

const before = ctx.CASTLES.filter(c => c && c.name).length;

// Check which ones exist
const existing = new Set(ctx.CASTLES.filter(c => c && c.name).map(c => c.name));
const found = [];
const notFound = [];
toDelete.forEach(name => {
  if (existing.has(name)) found.push(name);
  else notFound.push(name);
});

console.log(`To delete: ${toDelete.length}`);
console.log(`Found: ${found.length}`);
if (notFound.length) {
  console.log(`NOT FOUND (${notFound.length}):`);
  notFound.forEach(n => {
    // Try fuzzy match
    const lower = n.toLowerCase();
    const close = ctx.CASTLES.filter(c => c && c.name && c.name.toLowerCase().includes(lower.slice(0, 15)));
    console.log(`  "${n}" — close matches: ${close.map(c => c.name).join(', ') || 'none'}`);
  });
}

// Remove found entries
const deleteSet = new Set(found);
const newCastles = ctx.CASTLES.filter(c => {
  if (!c || !c.name) return true; // keep nulls/spacers as-is
  return !deleteSet.has(c.name);
});

// Write back
let dataStr = d;
// Replace the CASTLES array content
const castlesJson = JSON.stringify(newCastles, null, 2);
dataStr = 'const CASTLES = ' + castlesJson + ';\n';
fs.writeFileSync(__dirname + '/data.js', dataStr, 'utf8');

// Verify
const ctx2 = {};
vm.runInNewContext(fs.readFileSync(__dirname + '/data.js', 'utf8').replace(/\bconst\b/g, 'var'), ctx2);
const after = ctx2.CASTLES.filter(c => c && c.name).length;
console.log(`\nBefore: ${before}, After: ${after}, Removed: ${before - after}`);
