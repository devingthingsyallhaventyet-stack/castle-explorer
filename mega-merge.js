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

// Entries to DELETE (keeping the other from each pair)
// Format: name to delete → reason (what we're keeping)
const toDelete = [
  // 0ft pairs
  'Beaumaris Gaol',                    // keep Beaumaris Castle
  'Brechin Cathedral Round Tower',     // keep Brechin Castle
  'Drumcliff Round Tower Sligo',       // keep Drumcliff Tower
  'Saddell Abbey',                     // keep Sadell Castle
  'Holyrood Abbey',                    // keep Palace of Holyroodhouse
  'Culross Abbey',                     // keep Culross Palace

  // <250ft pairs
  'Fountains Hall',                    // keep Fountains Abbey
  'Slane Friary',                      // keep Slane Castle
  'Roslin Castle',                     // keep Rosslyn Chapel
  'Pickering Church Wall Paintings',   // keep Pickering Castle
  'Kilmallock Abbey',                  // keep Kilmallock Castle
  'Tretower Castle Round Tower',       // keep Tretower Court
  "St David's Bishop's Palace",        // keep St David's Cathedral
  'Ardmore Castle',                    // keep Ardmore Cathedral

  // 250-500ft pairs
  'Rievaulx Abbey (Yorkshire)',        // keep Rievaulx Abbey
  'St Andrews Cathedral',             // keep St Andrews Castle
  'Knaresborough Castle (Nidd)',       // keep Knaresborough Castle
  'Beaumaris Castle Town Wall',        // keep Beaumaris Castle
  'Jedburgh Castle Jail',             // keep Jedburgh Abbey
  'Dornoch Cathedral (Main)',          // keep Dornoch Castle
  'Dunsink Observatory',               // keep Dunsink Castle
  'Hore Abbey',                        // keep Rock of Cashel
  'Wolterton Park',                    // keep Wolterton Hall
  'Glendalough',                       // keep Glendalough Monastic Site
  "Treasurer's House York",            // keep York Minster
  'Newark Castle (Port Glasgow)',      // keep Newark Castle
  "Bishop's Castle, Glasgow",          // keep Glasgow Cathedral
  'Hever Castle (Kent)',               // keep Hever Castle
  'Carreg Cennen Castle Caves',        // keep Carreg Cennen Castle
  'Norham Castle (Border)',            // keep Norham Castle
  'Old Castle Lachlan',                // keep Castle Lachlan
  'Maghera Round Tower',               // keep Maghera Old Castle
  'Drumcliff Church',                  // keep Drumcliff Tower
  'Kells Tower',                       // keep Kells Round Tower
  'Durham Castle',                     // keep Durham Cathedral
  'Ardmore Round Tower',               // keep Ardmore Cathedral
  'Hardwick Old Hall',                 // keep Hardwick Hall
  'Greencastle (Donegal)',             // keep Greencastle
  'Athenry Priory',                    // keep Athenry Castle
  'Cockermouth Castle (Cumbria)',      // keep Cockermouth Castle
  'Haverfordwest Castle Museum',       // keep Haverfordwest Castle
  'Tutbury Priory',                    // keep Tutbury Castle (Staffordshire)
  'Barnard Castle (Town)',             // keep Barnard Castle
  'Framlingham Castle Walls',          // keep Framlingham Castle
];

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

console.log(`Removed ${removed.length} entries from data.js (${before} → ${CASTLES.length})`);
if (notFound.length) console.log('NOT FOUND in data:', notFound.join(', '));

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
    console.log('No page found for: ' + slug);
  }
}

console.log(`\nDeleted ${deletedPages} pages. Total sites: ${CASTLES.length}`);
