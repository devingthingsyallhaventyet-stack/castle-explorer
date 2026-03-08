const d = require('fs').readFileSync('data.js', 'utf8');
const targets = [
  'Caldicot Castle','Dolforwyn Castle','Newcastle Emlyn Castle','Bolton Priory','Haddon Hall',
  'Dudley Castle','Muncaster Castle','Sizergh Castle','Cardigan Castle','White Castle',
  'Weobley Castle','Hay Castle','Swansea Castle','Clun Castle','Sandal Castle',
  'Bolingbroke Castle','Narberth Castle','Oxwich Castle','Bowes Castle','Fonmon Castle',
  'Usk Castle','Dunmoe Castle','Whorlton Castle','Neath Castle','Caergwrle Castle',
  'Castell Aberlleiniog','Balvaird Castle','Snape Castle','Sissinghurst Castle','Hardwick Hall',
  'Inveraray Castle','Belvoir Castle','Battle Abbey','Scotney Castle','Adare Manor',
  'Herstmonceux Castle','Lowther Castle','Witton Castle','Aberglasney House','Oxburgh Hall',
  'Powderham Castle','Peckforton Castle','Dartmouth Castle','Brodie Castle','Lumley Castle',
  'Tioram Castle','Belsay Castle','Ripley Castle','Mount Grace Priory','Picton Castle',
  'Dumbarton Castle','Wenlock Priory','Hadleigh Castle','Minster Lovell Hall','Cong Abbey',
  'Hore Abbey','Kilbeggan Distillery'
];
targets.forEach(t => {
  const marker = '"' + t + '"';
  if (!d.includes(marker)) {
    console.log('NOT FOUND:', t);
  } else {
    const i = d.indexOf(marker);
    const chunk = d.substring(i, i + 2000);
    const hasYT = chunk.includes('youtube');
    const hasSrc = chunk.includes('sources');
    if (hasYT || hasSrc) console.log('ALREADY HAS:', t, hasYT ? 'youtube' : '', hasSrc ? 'sources' : '');
  }
});
console.log('Done checking', targets.length, 'targets');
