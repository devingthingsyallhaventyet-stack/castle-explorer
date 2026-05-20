const fs = require('fs');
const vm = require('vm');
const d = fs.readFileSync(__dirname + '/data.js', 'utf8').replace(/\bconst\b/g, 'var');
const ctx = {};
vm.runInNewContext(d, ctx);
const C = ctx.CASTLES.filter(c => c && c.name);

function slug(n) { return n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

// Strategy: group by base name (strip common suffixes and qualifiers)
function baseName(name) {
  return name
    .replace(/\s*\(.*?\)\s*/g, '') // Remove parentheticals: (Devon), (Mull), etc.
    .replace(/\s+(Great Hall|Painted Ceiling|Curtain Wall|Views?|Viewpoint|Exterior|Ruins?|Remains|Mound|Gardens?|Grounds?|Keep|Chapel|Church|Museum|Hotel|Walk|Restored|Active|Victorian|New|Old|Main|Park|Deer Park|Roman|Cluniac|Sussex|Norfolk|Devon|Shropshire|Herefordshire|Staffordshire|Yorkshire|Wensleydale|Kent|Cumbria|Banbury|Eden|Eskdale|Leeds|Dartmoor|Northumberland|North Yorkshire|Stornoway|Gower|Kendal|Bedale|Anglesey)$/i, '')
    .replace(/\s+(County|Co\.)?\s*(Kerry|Cork|Galway|Mayo|Limerick|Tipperary|Kilkenny|Waterford|Wexford|Laois|Meath|Westmeath|Leitrim|Roscommon|Donegal|Sligo|Carlow|Down|Louth|Tyrone|Fife|Borders|Aberdeenshire|Perthshire|Pembs|Cheshire|Lancashire|Monmouthshire|Nottinghamshire)$/i, '')
    .replace(/\s+(Fort William|Lunan Bay|Benbecula|Harris|Skye|Boston|Bandon|Carrick|Newcastle West|Kinsale|Burren|Lim|Ros|Main)$/i, '')
    .trim();
}

// Group by normalized base name
const groups = {};
C.forEach(c => {
  const base = baseName(c.name).toLowerCase();
  if (!groups[base]) groups[base] = [];
  groups[base].push(c);
});

// Filter to groups with 2+ entries
const dupes = Object.entries(groups)
  .filter(([_, g]) => g.length > 1)
  .map(([base, g]) => {
    g.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    return { base, keep: g[0], remove: g.slice(1) };
  })
  .sort((a, b) => a.keep.name.localeCompare(b.keep.name));

let totalRemove = dupes.reduce((s, g) => s + g.remove.length, 0);
console.log(`Found ${dupes.length} duplicate groups (${totalRemove} to remove)\n`);

dupes.forEach((g, i) => {
  console.log(`${i + 1}. KEEP: ${g.keep.name} (${g.keep.type}, ${g.keep.reviewCount || 0} reviews)`);
  g.remove.forEach(r => {
    console.log(`   DEL: ${r.name} (${r.type}, ${r.reviewCount || 0} reviews)`);
  });
  console.log('');
});

// Save
fs.writeFileSync(__dirname + '/real-dupes.json', JSON.stringify(dupes.map(g => ({
  keep: g.keep.name,
  remove: g.remove.map(r => r.name)
})), null, 2), 'utf8');
