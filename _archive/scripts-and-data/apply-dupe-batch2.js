const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json','utf8'));
const toDelete = [];

// #1 Duagh Castle → rename to Dough Castle, update wiki, keep maps
const duaghIdx = d.findIndex(x => x.name === 'Duagh Castle' && x.reviewStatus === 'flagged');
if (duaghIdx >= 0) {
  d[duaghIdx].name = 'Dough Castle';
  d[duaghIdx].wiki = 'https://en.wikipedia.org/wiki/Dough_Castle';
  d[duaghIdx].wikipediaUrl = 'https://en.wikipedia.org/wiki/Dough_Castle';
  d[duaghIdx].hasWikipedia = 'yes';
  d[duaghIdx].altNames = ['Duagh Castle'];
  console.log('#1 Renamed Duagh→Dough Castle: OK');
} else console.log('#1 Duagh Castle: NOT FOUND');

// #2 Delete Castlecove Castle AND Castlecomer Castle
['Castlecove Castle', 'Castlecomer Castle'].forEach(n => {
  const idx = d.findIndex(x => x.name === n && x.reviewStatus === 'flagged');
  if (idx >= 0) { toDelete.push(idx); console.log(`#2 Delete ${n}: OK`); }
  else console.log(`#2 ${n}: NOT FOUND`);
});

// #3 Delete Abington Castle (flagged), keep Allington (approved)
const abingtonIdx = d.findIndex(x => x.name === 'Abington Castle' && x.reviewStatus === 'flagged');
if (abingtonIdx >= 0) { toDelete.push(abingtonIdx); console.log('#3 Delete Abington Castle: OK'); }
else console.log('#3 Abington Castle: NOT FOUND');

// #4 Dromineer Castle - keep google, update wiki
const dromineerIdx = d.findIndex(x => x.name === 'Dromineer Castle' && x.reviewStatus === 'flagged');
if (dromineerIdx >= 0) {
  d[dromineerIdx].wiki = 'https://en.wikipedia.org/wiki/Dromineer';
  d[dromineerIdx].wikipediaUrl = 'https://en.wikipedia.org/wiki/Dromineer';
  d[dromineerIdx].hasWikipedia = 'yes';
  console.log('#4 Dromineer wiki updated: OK');
}
// Dromaneen Castle - keep wiki, update google maps
const dromanIdx = d.findIndex(x => x.name === 'Dromaneen Castle' && x.reviewStatus === 'flagged');
if (dromanIdx >= 0) {
  d[dromanIdx].mapsLink = 'https://maps.app.goo.gl/usyMR8EAVExFm4mt6';
  console.log('#4 Dromaneen maps updated: OK');
}

// #5 Delete Clonyn Castle. Delvin Castle - remove wiki, clear description, repull images
const clonynIdx = d.findIndex(x => x.name === 'Clonyn Castle' && x.reviewStatus === 'flagged');
if (clonynIdx >= 0) { toDelete.push(clonynIdx); console.log('#5 Delete Clonyn Castle: OK'); }
const delvinIdx = d.findIndex(x => x.name === 'Delvin Castle' && x.reviewStatus === 'flagged');
if (delvinIdx >= 0) {
  delete d[delvinIdx].wiki;
  delete d[delvinIdx].wikipediaUrl;
  d[delvinIdx].hasWikipedia = 'no';
  d[delvinIdx].desc = '';
  d[delvinIdx].image = '';
  d[delvinIdx].gallery = [];
  console.log('#5 Delvin Castle: wiki removed, desc+images cleared: OK');
}

// #6 Killaha Castle - remove wiki, clear description. Keep Killua unchanged.
const killahaIdx = d.findIndex(x => x.name === 'Killaha Castle' && x.reviewStatus === 'flagged');
if (killahaIdx >= 0) {
  delete d[killahaIdx].wiki;
  delete d[killahaIdx].wikipediaUrl;
  d[killahaIdx].hasWikipedia = 'no';
  d[killahaIdx].desc = '';
  console.log('#6 Killaha Castle: wiki removed, desc cleared: OK');
}

// #7 Dunguaire Castle already exists in flagged → delete Dungar Castle
const dungarIdx = d.findIndex(x => x.name === 'Dungar Castle' && x.reviewStatus === 'flagged');
if (dungarIdx >= 0) { toDelete.push(dungarIdx); console.log('#7 Delete Dungar Castle (Dunguaire already exists): OK'); }

// Delete in reverse order
toDelete.sort((a, b) => b - a).forEach(i => d.splice(i, 1));
console.log(`\nDeleted ${toDelete.length} entries`);

const approved = d.filter(x => x.reviewStatus === 'approved').length;
const flagged = d.filter(x => x.reviewStatus === 'flagged').length;
console.log(`Final: ${d.length} total, ${approved} approved, ${flagged} flagged`);
fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
