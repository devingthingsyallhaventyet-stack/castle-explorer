const fs = require('fs');
const p = JSON.parse(fs.readFileSync('enrichment-progress.json','utf8'));
const newSites = [
  "Castle Leslie","St Fagans Castle","Witley Court","Ickworth House","Felbrigg Hall",
  "Beverley Minster","Temple Newsam","Wilton House","Cotehele House","Tredegar House",
  "Plas Newydd","Chesters Roman Fort","Newgrange Cursus","Newcastle Castle Keep",
  "Wallington Hall","Sycamore Gap","Nostell Priory","Bramall Hall","Southwell Minster",
  "Arbroath Abbey","Buckfast Abbey","Johnstown Castle","Muckross Friary","Llandaff Cathedral",
  "Pentre Ifan","Dylan Thomas Boathouse","Dunkeld Cathedral","Abbotsford House",
  "Great Malvern Priory","Cartmel Priory","Malmesbury Abbey","Raby Castle Deer Park",
  "Brodsworth Hall","Packwood House","Compton Verney","Coughton Court","Croome Court",
  "Buckland Abbey","Castle Coole","Sherborne Castle","Chillingham Castle","Hexham Abbey",
  "Floors Castle","Falkland Palace","Cabra Castle","Castlemartyr Resort","Dinefwr Park",
  "Plas Mawr","Monnow Bridge Gate","Paisley Abbey","Selby Abbey","St Augustine's Abbey",
  "Caerleon Roman Fortress","Rushen Castle","Culross Palace","Inverness Castle Viewpoint",
  "St Mary's Abbey York"
];
p.completed.push(...newSites);
p.lastRun = '2026-03-22T15:45:00-04:00';
p.totalEnriched = p.totalEnriched + newSites.length;
p.nightsRun = p.nightsRun + 1;
fs.writeFileSync('enrichment-progress.json', JSON.stringify(p, null, 2));
console.log('Progress updated. Total enriched:', p.totalEnriched, 'Nights:', p.nightsRun);
