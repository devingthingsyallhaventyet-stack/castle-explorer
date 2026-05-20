const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json','utf8'));

// Helper to find flagged entries
const findFlagged = (name, region) => d.findIndex(x => x.name === name && x.reviewStatus === 'flagged' && (!region || x.region === region));
const findAny = (name, region) => d.findIndex(x => x.name === name && (!region || x.region === region));

// Track indices to delete (collect first, delete at end in reverse order)
const toDelete = new Set();

// #1 MERGE: Ardchonnel + Innis Chonnel → Innis Chonnel Castle (main), add alias
const innisIdx = findFlagged('Innis Chonnel Castle');
if (innisIdx >= 0) {
  d[innisIdx].altNames = d[innisIdx].altNames || [];
  d[innisIdx].altNames.push('Ardchonnel Castle');
}
const ardIdx = findFlagged('Ardchonnel Castle');
if (ardIdx >= 0) toDelete.add(ardIdx);
console.log('#1 Merge Ardchonnel→Innis Chonnel:', innisIdx >= 0 && ardIdx >= 0 ? 'OK' : 'WARN');

// #2 DELETE: Castle Girnigoe
const girnigoeIdx = findFlagged('Castle Girnigoe');
if (girnigoeIdx >= 0) toDelete.add(girnigoeIdx);
console.log('#2 Delete Castle Girnigoe:', girnigoeIdx >= 0 ? 'OK' : 'NOT FOUND');

// #3 DELETE: Askerton Castle
const askertonIdx = findFlagged('Askerton Castle');
if (askertonIdx >= 0) toDelete.add(askertonIdx);
console.log('#3 Delete Askerton Castle:', askertonIdx >= 0 ? 'OK' : 'NOT FOUND');

// #4 Berkeley Castle: keep south-west, delete midlands
const berkeleyDel = d.findIndex(x => x.name === 'Berkeley Castle' && x.region === 'the-midlands' && x.reviewStatus === 'flagged');
if (berkeleyDel >= 0) toDelete.add(berkeleyDel);
console.log('#4 Delete Berkeley Castle midlands:', berkeleyDel >= 0 ? 'OK' : 'NOT FOUND');

// #5 Thornbury Castle: keep south-west, delete midlands, update maps
const thornburyKeep = d.findIndex(x => x.name === 'Thornbury Castle' && x.region === 'south-west' && x.reviewStatus === 'flagged');
const thornburyDel = d.findIndex(x => x.name === 'Thornbury Castle' && x.region === 'the-midlands' && x.reviewStatus === 'flagged');
if (thornburyKeep >= 0) d[thornburyKeep].mapsLink = 'https://maps.app.goo.gl/6dgFNMBpu7hQKHCH9';
if (thornburyDel >= 0) toDelete.add(thornburyDel);
console.log('#5 Thornbury Castle:', thornburyKeep >= 0 && thornburyDel >= 0 ? 'OK' : 'WARN');

// #6-10, #13-14: keep south-west, delete midlands (no special maps links)
const swKeepMidDel = ['St Briavels Castle', 'Hailes Abbey', 'Tewkesbury Abbey', 'Beverston Castle', 'Gloucester Cathedral', 'Llanthony Secunda Priory', 'Gloucester Blackfriars'];
swKeepMidDel.forEach((name, i) => {
  const delIdx = d.findIndex(x => x.name === name && x.region === 'the-midlands' && x.reviewStatus === 'flagged');
  if (delIdx >= 0) toDelete.add(delIdx);
  console.log(`#${[6,7,8,9,10,13,14][i]} Delete ${name} midlands:`, delIdx >= 0 ? 'OK' : 'NOT FOUND');
});

// #11 Sudeley Castle: keep south-west, delete midlands, update maps
const sudeleyKeep = d.findIndex(x => x.name === 'Sudeley Castle' && x.region === 'south-west' && x.reviewStatus === 'flagged');
const sudeleyDel = d.findIndex(x => x.name === 'Sudeley Castle' && x.region === 'the-midlands' && x.reviewStatus === 'flagged');
if (sudeleyKeep >= 0) d[sudeleyKeep].mapsLink = 'https://maps.app.goo.gl/P7gbvr9Aer57EUJz5';
if (sudeleyDel >= 0) toDelete.add(sudeleyDel);
console.log('#11 Sudeley Castle:', sudeleyKeep >= 0 && sudeleyDel >= 0 ? 'OK' : 'WARN');

// #12 DELETE: Lilbourne Castle
const lilbourneIdx = findFlagged('Lilbourne Castle');
if (lilbourneIdx >= 0) toDelete.add(lilbourneIdx);
console.log('#12 Delete Lilbourne Castle:', lilbourneIdx >= 0 ? 'OK' : 'NOT FOUND');

// #15 Prinknash Abbey: keep south-west, delete midlands, update maps
const prinknashKeep = d.findIndex(x => x.name === 'Prinknash Abbey' && x.region === 'south-west' && x.reviewStatus === 'flagged');
const prinknashDel = d.findIndex(x => x.name === 'Prinknash Abbey' && x.region === 'the-midlands' && x.reviewStatus === 'flagged');
if (prinknashKeep >= 0) prinknashKeep >= 0 && (d[prinknashKeep].mapsLink = 'https://maps.app.goo.gl/fvt5gdozQpX34iLg8');
if (prinknashDel >= 0) toDelete.add(prinknashDel);
console.log('#15 Prinknash Abbey:', prinknashKeep >= 0 && prinknashDel >= 0 ? 'OK' : 'WARN');

// #16 Dynevor Castle ↔ Dinefwr Park: keep Dynevor Castle, delete Dinefwr Park, update maps
const dynevorIdx = findFlagged('Dynevor Castle');
const dinefwrIdx = findFlagged('Dinefwr Park');
if (dynevorIdx >= 0) d[dynevorIdx].mapsLink = 'https://maps.app.goo.gl/nPsHYLLgEkHaJ8HX6';
if (dinefwrIdx >= 0) toDelete.add(dinefwrIdx);
console.log('#16 Dynevor/Dinefwr:', dynevorIdx >= 0 && dinefwrIdx >= 0 ? 'OK' : 'WARN');

// #17 Castleroche ↔ Roche Castle: keep Roche Castle, delete Castleroche, update maps
const rocheIdx = findFlagged('Roche Castle');
const castlerocheIdx = findFlagged('Castleroche');
if (rocheIdx >= 0) d[rocheIdx].mapsLink = 'https://maps.app.goo.gl/Ensp15fFpkpdZ9xq8';
if (castlerocheIdx >= 0) toDelete.add(castlerocheIdx);
console.log('#17 Roche/Castleroche:', rocheIdx >= 0 && castlerocheIdx >= 0 ? 'OK' : 'WARN');

// #18 DELETE: Ballyteague Castle
const ballyteagueIdx = findFlagged('Ballyteague Castle');
if (ballyteagueIdx >= 0) toDelete.add(ballyteagueIdx);
console.log('#18 Delete Ballyteague Castle:', ballyteagueIdx >= 0 ? 'OK' : 'NOT FOUND');

// #19 Keep Dunsany Castle, delete Dunsink Castle
const dunsinkIdx = findFlagged('Dunsink Castle');
if (dunsinkIdx >= 0) toDelete.add(dunsinkIdx);
console.log('#19 Delete Dunsink Castle:', dunsinkIdx >= 0 ? 'OK' : 'NOT FOUND');

// #20 DELETE: Clonard Castle
const clonardIdx = findFlagged('Clonard Castle');
if (clonardIdx >= 0) toDelete.add(clonardIdx);
console.log('#20 Delete Clonard Castle:', clonardIdx >= 0 ? 'OK' : 'NOT FOUND');

// #21 MERGE: Graiguenamanagh Abbey + Duiske Abbey → Duiske Abbey (main), add alias
const duiskeIdx = findFlagged('Duiske Abbey');
if (duiskeIdx >= 0) {
  d[duiskeIdx].altNames = d[duiskeIdx].altNames || [];
  d[duiskeIdx].altNames.push('Graiguenamanagh Abbey');
}
const graigIdx = findFlagged('Graiguenamanagh Abbey');
if (graigIdx >= 0) toDelete.add(graigIdx);
console.log('#21 Merge Graiguenamanagh→Duiske:', duiskeIdx >= 0 && graigIdx >= 0 ? 'OK' : 'WARN');

// Delete in reverse order to preserve indices
const sorted = [...toDelete].sort((a,b) => b - a);
console.log(`\nDeleting ${sorted.length} entries...`);
sorted.forEach(i => d.splice(i, 1));

// Summary
const approved = d.filter(x => x.reviewStatus === 'approved').length;
const flagged = d.filter(x => x.reviewStatus === 'flagged').length;
console.log(`\nFinal: ${d.length} total, ${approved} approved, ${flagged} flagged`);

fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
console.log('Saved audit-data.json');
