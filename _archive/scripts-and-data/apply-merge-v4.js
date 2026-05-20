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

const decisions = {"merge":[{"action":"delete-one","keep":"Donegal Abbey","keepIndex":1745,"delete":"Donegal Friary","deleteIndex":887},{"action":"delete-one","keep":"Donegal Abbey","keepIndex":1745,"delete":"Donegal Bay Friary","deleteIndex":2182},{"action":"delete-one","keep":"Doonbeg Castle","keepIndex":1055,"delete":"Doonbeg White Strand Tower","deleteIndex":1359},{"action":"merge","keep":"Drogheda Magdalene Tower","keepIndex":2224,"delete":"Drogheda St Laurence Gate","deleteIndex":2225},{"action":"delete-one","keep":"Dromore Castle (Limerick)","keepIndex":778,"delete":"Dromore Castle Clare","deleteIndex":1713},{"action":"merge","keep":"Dromore Mound","keepIndex":2214,"delete":"Dromore Castle (Down)","deleteIndex":930},{"action":"merge","keep":"Dunamase Castle","keepIndex":300,"delete":"Dunamase Rock Summit","deleteIndex":2399},{"action":"delete-one","keep":"Dunaverty Castle","keepIndex":1004,"delete":"Dunaverty Rock","deleteIndex":2073},{"action":"delete-one","keep":"Dunbar Castle","keepIndex":495,"delete":"Dunbar Battery","deleteIndex":2062},{"action":"delete-one","keep":"Dunbrody Abbey","keepIndex":296,"delete":"Dunbrody Country House","deleteIndex":948},{"action":"merge","keep":"Dunbrody Abbey","keepIndex":296,"delete":"Dunbrody Castle","deleteIndex":1833},{"action":"delete-one","keep":"Dungiven Priory","keepIndex":366,"delete":"Dungiven Castle","deleteIndex":926},{"action":"delete-one","keep":"Dunmore Castle","keepIndex":509,"delete":"Dunmore Cave Castle","deleteIndex":857},{"action":"merge","keep":"Glamis Castle","keepIndex":130,"delete":"Glamis Village Tower","deleteIndex":1268},{"action":"merge","keep":"Glenstal Castle","keepIndex":768,"delete":"Glenstal Abbey (Main)","deleteIndex":1425},{"action":"merge","keep":"Harry Avery Castle","keepIndex":1453,"delete":"Harry Avery's Castle","deleteIndex":358},{"action":"merge","keep":"Hospital Church","keepIndex":1782,"delete":"Hospital Priory","deleteIndex":2456},{"action":"merge","keep":"Innisfallen Abbey","keepIndex":2479,"delete":"Innisfallen Island","deleteIndex":1379},{"action":"delete-one","keep":"Kilbeggan Abbey","keepIndex":1764,"delete":"Kilbeggan Distillery","deleteIndex":1446},{"action":"merge","keep":"Kilconnell Friary","keepIndex":940,"delete":"Kilconnell Castle","deleteIndex":2466},{"action":"delete-one","keep":"Kilcrea Friary","keepIndex":292,"delete":"Kilcrea Castle","deleteIndex":835},{"action":"delete-one","keep":"Killaloe Cathedral","keepIndex":1715,"delete":"Killaloe Bridge Castle","deleteIndex":1783},{"action":"delete-one","keep":"Kilmartin Church","keepIndex":1645,"delete":"Kilmartin Castle","deleteIndex":675},{"action":"delete-one","keep":"Kinkell Church","keepIndex":1679,"delete":"Kinkell Castle","deleteIndex":1260},{"action":"merge","keep":"Knocktopher Abbey","keepIndex":1254,"delete":"Knocktopher Castle","deleteIndex":2461},{"action":"delete-one","keep":"Malin Castle","keepIndex":888,"delete":"Malin Head Tower","deleteIndex":2185},{"action":"delete-one","keep":"Maxstoke Castle","keepIndex":407,"delete":"Maxstoke Priory","deleteIndex":1911},{"action":"delete-one","keep":"Muckross Friary","keepIndex":942,"delete":"Muckross Abbey","deleteIndex":290},{"action":"delete-one","keep":"Nendrum Monastic Site","keepIndex":1834,"delete":"Nendrum Monastery","deleteIndex":344},{"action":"delete-one","keep":"Orford Castle","keepIndex":50,"delete":"Orford Ness","deleteIndex":1934},{"action":"merge","keep":"Powerscourt Castle","keepIndex":1319,"delete":"Powerscourt Estate","deleteIndex":1759},{"action":"delete-one","keep":"Rathmullan Priory","keepIndex":890,"delete":"Rathmullan Fort","deleteIndex":1212},{"action":"delete-one","keep":"Roscrea Castle","keepIndex":267,"delete":"Roscrea Friary","deleteIndex":2152},{"action":"merge","keep":"Seir Kieran Monastery","keepIndex":1198,"delete":"Seir Kieran Monastic Site","deleteIndex":1787},{"action":"merge","keep":"Sherborne Castle","keepIndex":393,"delete":"Sherborne Old Castle","deleteIndex":32},{"action":"delete-one","keep":"Skryne Church","keepIndex":1734,"delete":"Skryne Castle","deleteIndex":872},{"action":"merge","keep":"Strade Abbey","keepIndex":1439,"delete":"Strade Friary","deleteIndex":908},{"action":"merge","keep":"Strokestown House","keepIndex":1750,"delete":"Strokestown Castle","deleteIndex":1137},{"action":"delete-one","keep":"Tenby Castle","keepIndex":724,"delete":"Tenby Town Walls","deleteIndex":1571}],"deleteBoth":[{"action":"delete-both","deleteA":"Elphin Castle","deleteAIndex":1141,"deleteB":"Elphin Windmill","deleteBIndex":2191}]};

const toDelete = new Set();
for (const m of decisions.merge) toDelete.add(m.delete);
for (const d of decisions.deleteBoth) { toDelete.add(d.deleteA); toDelete.add(d.deleteB); }

console.log(`Will delete ${toDelete.size} entries:`);
for (const name of toDelete) console.log(`  - ${name}`);

const removed = [];
const notFound = [];
for (const name of toDelete) {
  const idx = CASTLES.findIndex(c => c.name === name);
  if (idx !== -1) { CASTLES.splice(idx, 1); removed.push(name); }
  else notFound.push(name);
}

console.log(`\nRemoved ${removed.length} entries (${before} → ${CASTLES.length})`);
if (notFound.length) console.log('NOT FOUND:', notFound.join(', '));

fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(CASTLES, null, 2) + ';\n');

let deletedPages = 0;
for (const name of removed) {
  const slug = slugify(name);
  const path = 'site/' + slug + '.html';
  if (fs.existsSync(path)) { fs.unlinkSync(path); console.log('Deleted page: ' + path); deletedPages++; }
  else console.log('No page for: ' + slug);
}

console.log(`\nDone! Deleted ${deletedPages} pages. Total sites: ${CASTLES.length}`);
