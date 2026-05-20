const fs = require('fs');
const vm = require('vm');
const d = fs.readFileSync(__dirname + '/data.js','utf8').replace(/\bconst\b/g,'var');
const ctx = {};
vm.runInNewContext(d, ctx);
const names = ctx.CASTLES.map(c => c.name);

const toDelete = [
  'Abbey Knockmoy Galway','Abbeydorney Cistercian Ruins','Abbeyknockmoy Abbey Knockmoy',
  'Aberdour Castle Great Hall','Aberedw Castle','Abergavenny Castle Museum',
  'Aberglasney Gardens Ruins','Acton Burnell Castle (Shropshire)','Adare Castle',
  'Aghaboe Abbey Laois','Aghadoe','Aghadoe Church and Round Tower',
  'Annaghkeen Castle Galway','Antrim Round Tower','Ardagh Heritage Centre',
  'Aros Castle (Mull)','Askeaton Friary','Auckland Castle Chapel',
  "Audley's Castle",'Ballingarry Castle','Ballingarry Castle (Lim)',
  'Ballintober Castle Roscommon','Ballintober Castle Mayo',
  'Ballycarberry Castle Ruin','Ballycarberry Castle',
  'Ballygally Tower','Ballygally Castle','Ballyhack Tower',
  'Ballykinvarga Stone Fort','Ballylee Castle (Thoor Ballylee)',
  'Ballyloughan Castle Carlow','Ballyloughan Castle (Carlow)',
  'Ballynahinch Castle Tipperary','Ballynahow Castle',
  'Battle Abbey (Sussex)','Belsay Hall and Castle','Benton Castle',
  'Berry Pomeroy Castle (Devon)','Birr Castle Gardens',
  'Black Castle (Wicklow Main)','Blackcastle','Bleddfa Castle',
  'Bolton Abbey (Tipperary)','Bolton Castle (Wensleydale)',
  "Bourchier's Castle",'Brampton Castle (Bryan de Jay)','Brecon Castle',
  'Brinklow Castle Motte','Brough Castle (Westmorland)',
  'Brougham Castle (Eden)','Broughton Castle (Banbury)',
  'Broughty Castle','Buckden Towers','Builth Castle Mound',
  'Burnchurch Tower','Burntcourt Castle','Burrishoole Friary',
  'Buttevant Castle','Byland Abbey (Yorkshire)'
];

const found = [];
const notFound = [];
const alreadyGone = [];

for (const del of toDelete) {
  const exact = names.find(n => n === del);
  if (exact) { found.push({query: del, match: del, type: 'exact'}); continue; }
  
  // Try fuzzy
  const core = del.split('(')[0].trim().toLowerCase();
  const fuzzy = names.filter(n => {
    const nl = n.toLowerCase();
    return nl.includes(core) || core.includes(nl);
  });
  
  if (fuzzy.length > 0) {
    found.push({query: del, match: fuzzy.join(' | '), type: 'fuzzy'});
  } else {
    // Might already be deleted
    alreadyGone.push(del);
  }
}

console.log(`EXACT/FUZZY MATCHES (${found.length}):`);
found.forEach(f => console.log(`  [${f.type}] "${f.query}" => ${f.match}`));
console.log(`\nALREADY DELETED OR NOT FOUND (${alreadyGone.length}):`);
alreadyGone.forEach(f => console.log(`  ${f}`));
console.log(`\nTotal in data.js: ${names.length}`);
