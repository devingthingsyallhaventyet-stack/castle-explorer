const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json','utf8'));
const toDelete = [];

// #1 Carrick-on-Suir Castle → rename to Ormond Castle (Ireland)
//    Ormond Castle → rename to Ormond Castle (Scotland), update wiki + maps
const carrickIdx = d.findIndex(x => x.name === 'Carrick-on-Suir Castle' && x.reviewStatus === 'flagged');
if (carrickIdx >= 0) {
  d[carrickIdx].name = 'Ormond Castle (Ireland)';
  d[carrickIdx].altNames = ['Carrick-on-Suir Castle'];
  console.log('#1 Carrick-on-Suir → Ormond Castle (Ireland): OK');
}
const ormondIdx = d.findIndex(x => x.name === 'Ormond Castle' && x.reviewStatus === 'flagged');
if (ormondIdx >= 0) {
  d[ormondIdx].name = 'Ormond Castle (Scotland)';
  d[ormondIdx].wiki = 'https://en.wikipedia.org/wiki/Ormond_Castle';
  d[ormondIdx].wikipediaUrl = 'https://en.wikipedia.org/wiki/Ormond_Castle';
  d[ormondIdx].mapsLink = 'https://maps.app.goo.gl/keAmmjFPvuZqvdHw6';
  console.log('#1 Ormond → Ormond Castle (Scotland): OK');
}

// #2 Delete Lackan Castle
const lackanIdx = d.findIndex(x => x.name === 'Lackan Castle' && x.reviewStatus === 'flagged');
if (lackanIdx >= 0) { toDelete.push(lackanIdx); console.log('#2 Delete Lackan Castle: OK'); }

// #3 Delete Kilcormac Castle
const kilcormacIdx = d.findIndex(x => x.name === 'Kilcormac Castle' && x.reviewStatus === 'flagged');
if (kilcormacIdx >= 0) { toDelete.push(kilcormacIdx); console.log('#3 Delete Kilcormac Castle: OK'); }

// #4 Delete Clogh Oughter Castle
const cloghIdx = d.findIndex(x => x.name === 'Clogh Oughter Castle' && x.reviewStatus === 'flagged');
if (cloghIdx >= 0) { toDelete.push(cloghIdx); console.log('#4 Delete Clogh Oughter Castle: OK'); }

// #5 Delete Castlerea Castle
const castlereaIdx = d.findIndex(x => x.name === 'Castlerea Castle' && x.reviewStatus === 'flagged');
if (castlereaIdx >= 0) { toDelete.push(castlereaIdx); console.log('#5 Delete Castlerea Castle: OK'); }

// #6 Delete Castlecaulfield
const caulIdx = d.findIndex(x => x.name === 'Castlecaulfield' && x.reviewStatus === 'flagged');
if (caulIdx >= 0) { toDelete.push(caulIdx); console.log('#6 Delete Castlecaulfield: OK'); }

// #7 Delete Kilcornan Castle
const kilcornanIdx = d.findIndex(x => x.name === 'Kilcornan Castle' && x.reviewStatus === 'flagged');
if (kilcornanIdx >= 0) { toDelete.push(kilcornanIdx); console.log('#7 Delete Kilcornan Castle: OK'); }

// #8 Delete Moylough Castle
const moyloughIdx = d.findIndex(x => x.name === 'Moylough Castle' && x.reviewStatus === 'flagged');
if (moyloughIdx >= 0) { toDelete.push(moyloughIdx); console.log('#8 Delete Moylough Castle: OK'); }

// #9 Delete Carna Castle
const carnaIdx = d.findIndex(x => x.name === 'Carna Castle' && x.reviewStatus === 'flagged');
if (carnaIdx >= 0) { toDelete.push(carnaIdx); console.log('#9 Delete Carna Castle: OK'); }

// #10 Skryne Church - update wiki. Delete Skreen Castle.
const skryneIdx = d.findIndex(x => x.name === 'Skryne Church' && x.reviewStatus === 'flagged');
if (skryneIdx >= 0) {
  d[skryneIdx].wiki = 'https://en.wikipedia.org/wiki/Skryne_Church';
  d[skryneIdx].wikipediaUrl = 'https://en.wikipedia.org/wiki/Skryne_Church';
  d[skryneIdx].hasWikipedia = 'yes';
  console.log('#10 Skryne Church wiki updated: OK');
}
const skreenIdx = d.findIndex(x => x.name === 'Skreen Castle' && x.reviewStatus === 'flagged');
if (skreenIdx >= 0) { toDelete.push(skreenIdx); console.log('#10 Delete Skreen Castle: OK'); }

// #11 Kilcogan Castle - remove wiki + wiki-derived info, keep only google maps
const kilcoganIdx = d.findIndex(x => x.name === 'Kilcogan Castle' && x.reviewStatus === 'flagged');
if (kilcoganIdx >= 0) {
  delete d[kilcoganIdx].wiki;
  delete d[kilcoganIdx].wikipediaUrl;
  d[kilcoganIdx].hasWikipedia = 'no';
  d[kilcoganIdx].desc = '';
  console.log('#11 Kilcogan Castle: wiki removed, desc cleared: OK');
}

// #12 Delete Dunmoran Castle
const dunmoranIdx = d.findIndex(x => x.name === 'Dunmoran Castle' && x.reviewStatus === 'flagged');
if (dunmoranIdx >= 0) { toDelete.push(dunmoranIdx); console.log('#12 Delete Dunmoran Castle: OK'); }

// Delete in reverse order
toDelete.sort((a, b) => b - a).forEach(i => d.splice(i, 1));
console.log(`\nDeleted ${toDelete.length} entries`);

const approved = d.filter(x => x.reviewStatus === 'approved').length;
const flagged = d.filter(x => x.reviewStatus === 'flagged').length;
console.log(`Final: ${d.length} total, ${approved} approved, ${flagged} flagged`);
fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
