const fs = require('fs');
const p = JSON.parse(fs.readFileSync('enrichment-progress.json','utf8'));
const newSites = [
  "Craigevar Castle Grounds","Grey Mare's Tail","Dunbrody Country House","Wroxeter Roman City",
  "Arbeia Roman Fort","Cawfields Roman Wall","Delapre Abbey","Hanbury Hall","Berrington Hall",
  "Kilpeck Church","Boscobel House","Barrington Court","Pluscarden Abbey","Lews Castle",
  "Grimsthorpe Castle","Ardgillan Castle","Newark Castle (Nottinghamshire)","Kinnitty Castle",
  "Gwydir Castle","Ruthven Barracks","Earl Patrick's Palace","Dalhousie Castle",
  "Taunton Castle","Caerhays Castle","Kendal Castle","Burgh Island","Penshaw Monument",
  "Leap Castle","Tretower Court","Kelburn Castle","Mussenden Temple","Gainsborough Old Hall",
  "Lyveden New Bield","Layer Marney Tower","Guisborough Priory","Reading Abbey",
  "Dunmore Pineapple","Callendar House","Harvington Hall","East Riddlesden Hall",
  "Torre Abbey","Prideaux Place","Michelham Priory","Broughton Castle",
  "Ballindalloch Castle","Knowth Passage Tomb","Stoneleigh Abbey","Clevedon Court",
  "Brecon Cathedral","Caerwent Roman Town","Landguard Fort","Bradford-on-Avon Tithe Barn",
  "Hardknott Roman Fort","Segedunum Roman Fort"
];
for (const s of newSites) {
  if (!p.completed.includes(s)) p.completed.push(s);
}
p.lastRun = "2026-03-24T03:00:00-04:00";
p.totalEnriched = 383 + 54;
p.nightsRun = 8;
fs.writeFileSync('enrichment-progress.json', JSON.stringify(p, null, 2));
console.log('Total completed:', p.completed.length);
console.log('Total enriched:', p.totalEnriched);
