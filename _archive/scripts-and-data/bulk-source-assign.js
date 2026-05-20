const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
const sc = JSON.parse(fs.readFileSync('source-candidates.json', 'utf8'));

function addSource(name, label, url) {
  const listing = d.find(l => l.name === name);
  if (!listing) { console.log('NOT FOUND:', name); return false; }
  if ((listing.sources || []).length > 0 || (listing.verifiedSources || []).length > 0) return false;
  listing.sources = [{ label, url }];
  listing.verifiedSources = [{ label, url }];
  return true;
}

function addCandidate(name, url, label, reason) {
  if (sc.candidates.some(c => c.name === name && c.candidateUrl === url)) return;
  sc.candidates.push({ name, candidateUrl: url, candidateLabel: label, reason, status: 'pending' });
}

let autoCount = 0;
let candidateCount = 0;

// ===== NATIONAL TRUST FOR SCOTLAND =====
const nts = {
  'Brodick Castle': 'https://www.nts.org.uk/visit/places/brodick-castle-garden-country-park',
  'Fyvie Castle': 'https://www.nts.org.uk/visit/places/fyvie-castle',
  'Brodie Castle': 'https://www.nts.org.uk/visit/places/brodie-castle',
  'Leith Hall': 'https://www.nts.org.uk/visit/places/leith-hall',
  'Haddo House': 'https://www.nts.org.uk/visit/places/haddo-house',
  'Pitmedden Garden': 'https://www.nts.org.uk/visit/places/pitmedden-garden',
  'Drum Castle': 'https://www.nts.org.uk/visit/places/drum-castle',
  'Crathes Castle': 'https://www.nts.org.uk/visit/places/crathes-castle',
  'Castle Fraser': 'https://www.nts.org.uk/visit/places/castle-fraser',
  'Craigievar Castle': 'https://www.nts.org.uk/visit/places/craigievar-castle',
};
for (const [name, url] of Object.entries(nts)) {
  if (addSource(name, 'National Trust for Scotland', url)) autoCount++;
}

// ===== HISTORIC ENVIRONMENT SCOTLAND =====
const hes = {
  'Duntulm Castle': 'https://www.historicenvironment.scot/visit-a-place/places/duntulm-castle/',
  "Sueno's Stone": 'https://www.historicenvironment.scot/visit-a-place/places/suenos-stone/',
  'Aberlemno Sculptured Stones': 'https://www.historicenvironment.scot/visit-a-place/places/aberlemno-sculptured-stones/',
  'Peel Ring of Lumphanan': 'https://www.historicenvironment.scot/visit-a-place/places/peel-ring-of-lumphanan/',
  'Edzell Castle': 'https://www.historicenvironment.scot/visit-a-place/places/edzell-castle-and-garden/',
  'Dingwall Castle': 'https://portal.historicenvironment.scot/designation/SM90075',
  'Cathcart Castle': 'https://portal.historicenvironment.scot/designation/SM2105',
  'Dudhope Castle': 'https://portal.historicenvironment.scot/designation/LB19498',
  'Culloden Battlefield': 'https://www.nts.org.uk/visit/places/culloden',
};
for (const [name, url] of Object.entries(hes)) {
  const label = url.includes('nts.org.uk') ? 'National Trust for Scotland' : 'Historic Environment Scotland';
  if (addSource(name, label, url)) autoCount++;
}

// ===== NATIONAL TRUST (ENGLAND/WALES) =====
const nt = {
  'Cragside House': 'https://www.nationaltrust.org.uk/visit/north-east/cragside',
  'Sissinghurst Castle': 'https://www.nationaltrust.org.uk/visit/kent/sissinghurst-castle-garden',
  'Montacute House': 'https://www.nationaltrust.org.uk/visit/somerset/montacute-house',
  'Lanhydrock House': 'https://www.nationaltrust.org.uk/visit/cornwall/lanhydrock',
  'Erddig Hall': 'https://www.nationaltrust.org.uk/visit/wales/erddig',
  'Speke Hall': 'https://www.nationaltrust.org.uk/visit/liverpool-lancashire/speke-hall',
  'Sizergh Castle': 'https://www.nationaltrust.org.uk/visit/lake-district/sizergh',
  'Scotney Castle': 'https://www.nationaltrust.org.uk/visit/kent/scotney-castle',
  'Lyme Park': 'https://www.nationaltrust.org.uk/visit/peak-district-derbyshire/lyme',
  'Cotehele House': 'https://www.nationaltrust.org.uk/visit/cornwall/cotehele',
  'Attingham Park': 'https://www.nationaltrust.org.uk/visit/shropshire/attingham-park',
  'Powis Castle': 'https://www.nationaltrust.org.uk/visit/wales/powis-castle-and-garden',
  'Penrhyn Castle': 'https://www.nationaltrust.org.uk/visit/wales/penrhyn-castle',
  'Plas Newydd': 'https://www.nationaltrust.org.uk/visit/wales/plas-newydd-house-and-garden',
  'Dunster Castle': 'https://www.nationaltrust.org.uk/visit/somerset/dunster-castle',
  'Tintinhull Garden': 'https://www.nationaltrust.org.uk/visit/somerset/tintinhull-garden',
  'Packwood House': 'https://www.nationaltrust.org.uk/visit/warwickshire/packwood-house',
  'Upton House': 'https://www.nationaltrust.org.uk/visit/warwickshire/upton-house-and-gardens',
  'Nostell Priory': 'https://www.nationaltrust.org.uk/visit/yorkshire/nostell',
  'Brodsworth Hall': 'https://www.english-heritage.org.uk/visit/places/brodsworth-hall-and-gardens/',
  'Rufford Old Hall': 'https://www.nationaltrust.org.uk/visit/liverpool-lancashire/rufford-old-hall',
  'Barrington Court': 'https://www.nationaltrust.org.uk/visit/somerset/barrington-court',
  'Lytes Cary Manor': 'https://www.nationaltrust.org.uk/visit/somerset/lytes-cary-manor',
  'Clevedon Court': 'https://www.nationaltrust.org.uk/visit/somerset/clevedon-court',
  'A La Ronde': 'https://www.nationaltrust.org.uk/visit/devon/a-la-ronde',
  'Croft Castle': 'https://www.nationaltrust.org.uk/visit/herefordshire/croft-castle',
  'Brockhampton Estate': 'https://www.nationaltrust.org.uk/visit/herefordshire/brockhampton-estate',
  'Berrington Hall': 'https://www.nationaltrust.org.uk/visit/herefordshire/berrington-hall',
  'Nunnington Hall': 'https://www.nationaltrust.org.uk/visit/yorkshire/nunnington-hall',
  'East Riddlesden Hall': 'https://www.nationaltrust.org.uk/visit/yorkshire/east-riddlesden-hall',
  'Wray Castle': 'https://www.nationaltrust.org.uk/visit/lake-district/wray-castle',
  'Compton Castle': 'https://www.nationaltrust.org.uk/visit/devon/compton-castle',
  'Oxburgh Hall': 'https://www.nationaltrust.org.uk/visit/norfolk/oxburgh-hall',
  'Ickworth House': 'https://www.nationaltrust.org.uk/visit/suffolk/ickworth',
  'Chirk Castle': 'https://www.nationaltrust.org.uk/visit/wales/chirk-castle',
  'Aberconwy House': 'https://www.nationaltrust.org.uk/visit/wales/aberconwy-house',
  'Tredegar House': 'https://www.nationaltrust.org.uk/visit/wales/tredegar-house',
  'Castle Ward': 'https://www.nationaltrust.org.uk/visit/northern-ireland/castle-ward',
  'Castle Coole': 'https://www.nationaltrust.org.uk/visit/northern-ireland/castle-coole',
  'Florence Court': 'https://www.nationaltrust.org.uk/visit/northern-ireland/florence-court',
  'Springhill House': 'https://www.nationaltrust.org.uk/visit/northern-ireland/springhill',
  'Stainsby Mill': 'https://www.nationaltrust.org.uk/visit/peak-district-derbyshire/hardwick/stainsby-mill',
  'Croxteth Hall': 'https://www.nationaltrust.org.uk/visit/liverpool-lancashire/croxteth-hall',
};
for (const [name, url] of Object.entries(nt)) {
  const label = url.includes('english-heritage') ? 'English Heritage' : 'National Trust';
  if (addSource(name, label, url)) autoCount++;
}

// ===== ENGLISH HERITAGE =====
const eh = {
  'Kenilworth Castle': 'https://www.english-heritage.org.uk/visit/places/kenilworth-castle/',
  'Witley Court': 'https://www.english-heritage.org.uk/visit/places/witley-court-and-gardens/',
  'Boscobel House': 'https://www.english-heritage.org.uk/visit/places/boscobel-house-and-the-royal-oak/',
  'Birdoswald Roman Fort': 'https://www.english-heritage.org.uk/visit/places/birdoswald-roman-fort-hadrians-wall/',
  'Corbridge Roman Town': 'https://www.english-heritage.org.uk/visit/places/corbridge-roman-town-hadrians-wall/',
  'Mount Grace Priory': 'https://www.english-heritage.org.uk/visit/places/mount-grace-priory/',
  'Walmer Castle': 'https://www.english-heritage.org.uk/visit/places/walmer-castle-and-gardens/',
  'Netley Abbey': 'https://www.english-heritage.org.uk/visit/places/netley-abbey/',
  'Richborough Castle': 'https://www.english-heritage.org.uk/visit/places/richborough-roman-fort-and-amphitheatre/',
  'Tattershall Castle': 'https://www.nationaltrust.org.uk/visit/lincolnshire/tattershall-castle',
  'Wenlock Priory': 'https://www.english-heritage.org.uk/visit/places/wenlock-priory/',
  'Lyveden New Bield': 'https://www.nationaltrust.org.uk/visit/northamptonshire/lyveden',
  'Tretower Court': 'https://cadw.gov.wales/visit/places-to-visit/tretower-court-and-castle',
  'Pentre Ifan': 'https://cadw.gov.wales/visit/places-to-visit/pentre-ifan-burial-chamber',
  'Lewes Castle': 'https://sussexpast.co.uk/properties-to-discover/lewes-castle/',
  'Minster Lovell Hall': 'https://www.english-heritage.org.uk/visit/places/minster-lovell-hall-and-dovecote/',
  'Reculver Towers': 'https://www.english-heritage.org.uk/visit/places/reculver-towers-and-roman-fort/',
  'Maiden Castle': 'https://www.english-heritage.org.uk/visit/places/maiden-castle/',
  'Guisborough Priory': 'https://www.english-heritage.org.uk/visit/places/gisborough-priory/',
  "Lamphey Bishop's Palace": 'https://cadw.gov.wales/visit/places-to-visit/lamphey-bishops-palace',
  'Thornton Abbey': 'https://www.english-heritage.org.uk/visit/places/thornton-abbey-and-gatehouse/',
  'Knaresborough Castle': 'https://www.english-heritage.org.uk/visit/places/knaresborough-castle/',
  'Rhuddlan Castle': 'https://cadw.gov.wales/visit/places-to-visit/rhuddlan-castle',
  'Dolwyddelan Castle': 'https://cadw.gov.wales/visit/places-to-visit/dolwyddelan-castle',
  'Penmon Priory': 'https://cadw.gov.wales/visit/places-to-visit/penmon-priory',
  'Cilgerran Castle': 'https://cadw.gov.wales/visit/places-to-visit/cilgerran-castle',
  'Wolvesey Castle': 'https://www.english-heritage.org.uk/visit/places/wolvesey-castle-old-bishops-palace/',
  'Reading Abbey': 'https://www.english-heritage.org.uk/visit/places/reading-abbey-ruins/',
  'Aldborough Roman Town': 'https://www.english-heritage.org.uk/visit/places/aldborough-roman-site/',
  'Hardknott Roman Fort': 'https://www.english-heritage.org.uk/visit/places/hardknott-roman-fort/',
  'Thetford Priory': 'https://www.english-heritage.org.uk/visit/places/thetford-priory/',
  'Binham Priory': 'https://www.english-heritage.org.uk/visit/places/binham-priory/',
  'Wingfield Castle': 'https://www.english-heritage.org.uk/visit/places/wingfield-college/',
  'New Buckenham Castle': 'https://www.english-heritage.org.uk/visit/places/new-buckenham-castle/',
  'Longthorpe Tower': 'https://www.english-heritage.org.uk/visit/places/longthorpe-tower/',
  'Weeting Castle': 'https://www.english-heritage.org.uk/visit/places/weeting-castle/',
  'Lindisfarne Priory': 'https://www.english-heritage.org.uk/visit/places/lindisfarne-priory/',
  'Bewcastle Cross': 'https://www.english-heritage.org.uk/visit/places/bewcastle-roman-fort-and-settlement/',
  'Chesters Roman Fort': 'https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/',
  'Orford Castle': 'https://www.english-heritage.org.uk/visit/places/orford-castle/',
  'Binchester Roman Fort': 'https://www.english-heritage.org.uk/visit/places/binchester-roman-fort/',
  'Dolforwyn Castle': 'https://cadw.gov.wales/visit/places-to-visit/dolforwyn-castle',
  'Coity Castle': 'https://cadw.gov.wales/visit/places-to-visit/coity-castle',
  'Segontium Roman Fort': 'https://cadw.gov.wales/visit/places-to-visit/segontium-roman-fort',
  'Weobley Castle': 'https://cadw.gov.wales/visit/places-to-visit/weobley-castle',
  'Oxwich Castle': 'https://cadw.gov.wales/visit/places-to-visit/oxwich-castle',
  'Laugharne Castle': 'https://cadw.gov.wales/visit/places-to-visit/laugharne-castle',
  'Criccieth Castle': 'https://cadw.gov.wales/visit/places-to-visit/criccieth-castle',
  'Harlech Castle': 'https://cadw.gov.wales/visit/places-to-visit/harlech-castle',
  'Valle Crucis Abbey': 'https://cadw.gov.wales/visit/places-to-visit/valle-crucis-abbey',
  'White Castle': 'https://cadw.gov.wales/visit/places-to-visit/white-castle',
  'Bryn Celli Ddu': 'https://cadw.gov.wales/visit/places-to-visit/bryn-celli-ddu-burial-chamber',
  'Castell Dinas': 'https://cadw.gov.wales/visit/places-to-visit/castell-dinas-bran',
  'Caer y Twr': 'https://cadw.gov.wales/visit/places-to-visit/caer-y-twr',
  'Llansteffan Castle': 'https://cadw.gov.wales/visit/places-to-visit/llansteffan-castle',
  'Castell Henllys': 'https://cadw.gov.wales/visit/places-to-visit/castell-henllys-iron-age-village',
  'Morlais Castle': 'https://cadw.gov.wales/visit/places-to-visit/morlais-castle',
  'Dynevor Castle': 'https://cadw.gov.wales/visit/places-to-visit/dinefwr-castle',
  "Paxton's Tower": 'https://cadw.gov.wales/visit/places-to-visit/paxtons-tower',
  "St Non's Chapel": 'https://cadw.gov.wales/visit/places-to-visit/st-nons-chapel',
};
for (const [name, url] of Object.entries(eh)) {
  let label = 'English Heritage';
  if (url.includes('nationaltrust')) label = 'National Trust';
  if (url.includes('cadw.gov.wales')) label = 'Cadw';
  if (url.includes('sussexpast')) label = 'Sussex Past';
  if (addSource(name, label, url)) autoCount++;
}

// ===== HERITAGE IRELAND / OPW =====
const hi = {
  'Charles Fort': 'https://heritageireland.ie/places-to-visit/charles-fort/',
  'Hill of Tara': 'https://heritageireland.ie/places-to-visit/hill-of-tara/',
  'Mellifont Abbey': 'https://heritageireland.ie/places-to-visit/old-mellifont-abbey/',
  'Kilmacduagh Monastery': 'https://heritageireland.ie/places-to-visit/kilmacduagh-churches-and-round-tower/',
  'Quin Abbey': 'https://heritageireland.ie/places-to-visit/quin-franciscan-friary/',
  'Timoleague Abbey': 'https://heritageireland.ie/places-to-visit/timoleague-friary/',
  'Staigue Fort': 'https://heritageireland.ie/places-to-visit/staigue-fort/',
  'Kilcooly Abbey': 'https://heritageireland.ie/places-to-visit/kilcooley-abbey/',
  'Ormond Castle (Ireland)': 'https://heritageireland.ie/places-to-visit/ormond-castle/',
  "Reginald's Tower": 'https://heritageireland.ie/places-to-visit/reginalds-tower/',
  'Kilcrea Friary': 'https://heritageireland.ie/places-to-visit/kilcrea-friary/',
  'Dunamase Castle': 'https://heritageireland.ie/places-to-visit/rock-of-dunamase/',
  'Portumna Castle': 'https://heritageireland.ie/places-to-visit/portumna-castle-and-gardens/',
  'Selskar Abbey': 'https://heritageireland.ie/places-to-visit/selskar-abbey/',
  'Ballinskelligs Priory': 'https://heritageireland.ie/places-to-visit/ballinskelligs-priory/',
  'Roscrea Castle': 'https://heritageireland.ie/places-to-visit/roscrea-castle/',
  'Emo Court': 'https://heritageireland.ie/places-to-visit/emo-court/',
  'Desmond Castle': 'https://heritageireland.ie/places-to-visit/desmond-castle/',
  'Abbey Knockmoy': 'https://heritageireland.ie/places-to-visit/knockmoy-abbey/',
  'Murrisk Abbey': 'https://heritageireland.ie/places-to-visit/murrisk-friary/',
  'Creevelea Abbey': 'https://heritageireland.ie/places-to-visit/creevelea-friary/',
  'Navan Fort': 'https://heritageireland.ie/places-to-visit/navan-fort/',
  'Ardboe High Cross': 'https://heritageireland.ie/places-to-visit/ardboe-high-cross/',
  'Roche Castle': 'https://heritageireland.ie/places-to-visit/roche-castle/',
  'Carlingford Castle': 'https://heritageireland.ie/places-to-visit/king-johns-castle-carlingford/',
  'Blarney Castle': 'https://www.blarneycastle.ie/',
  'Grianan of Aileach': 'https://heritageireland.ie/places-to-visit/grianan-of-aileach/',
};
for (const [name, url] of Object.entries(hi)) {
  let label = 'Heritage Ireland';
  if (url.includes('blarneycastle')) { label = 'Blarney Castle'; }
  if (addSource(name, label, url)) autoCount++;
}

// ===== REMAINING - queue as candidates for manual review =====
// These are ones I'm less sure about - private castles, obscure sites
const privateOrUnsure = [
  { name: 'Amhuinnsuidhe Castle', url: 'https://www.amhuinnsuidhe.com/', label: 'Amhuinnsuidhe Castle Estate', reason: 'Private castle/hotel website' },
  { name: 'Bodnant Garden', url: 'https://www.nationaltrust.org.uk/visit/wales/bodnant-garden', label: 'National Trust', reason: 'National Trust site' },
  { name: 'Michelham Priory', url: 'https://sussexpast.co.uk/properties-to-discover/michelham-priory/', label: 'Sussex Past', reason: 'Heritage org' },
  { name: 'Newcastle Castle Keep', url: 'https://www.newcastlecastle.co.uk/', label: 'Newcastle Castle', reason: 'Castle museum website' },
  { name: 'Oxford Castle', url: 'https://www.oxfordcastleandprison.co.uk/', label: 'Oxford Castle & Prison', reason: 'Tourist attraction website' },
  { name: 'Chester Castle', url: 'https://www.english-heritage.org.uk/visit/places/chester-castle-agricola-tower-and-castle-walls/', label: 'English Heritage', reason: 'Heritage org' },
  { name: 'Auckland Palace', url: 'https://aucklandproject.org/', label: 'The Auckland Project', reason: 'Heritage charity' },
  { name: 'Ford Castle', url: 'https://www.ford-and-etal.co.uk/', label: 'Ford & Etal Estates', reason: 'Private estate website' },
  { name: 'Dudley Castle', url: 'https://www.dudleyzoo.org.uk/', label: 'Dudley Zoo & Castle', reason: 'Zoo/castle attraction' },
  { name: 'Balintore Castle', url: 'https://www.balintorecastle.co.uk/', label: 'Balintore Castle Trust', reason: 'Restoration trust' },
  { name: 'Corsewall Lighthouse', url: 'https://www.lighthousehotel.co.uk/', label: 'Corsewall Lighthouse Hotel', reason: 'Hotel website' },
  { name: 'Kirkcudbright Castle', url: 'https://www.historicenvironment.scot/visit-a-place/places/maclellan-castle/', label: 'Historic Environment Scotland', reason: 'Heritage org' },
  { name: 'Bodysgallen Hall', url: 'https://www.bodysgallen.com/', label: 'Bodysgallen Hall & Spa', reason: 'Hotel website' },
  { name: 'Whalley Abbey', url: 'https://www.whalleyabbey.org/', label: 'Whalley Abbey', reason: 'Abbey/conference centre' },
  { name: 'Hafod Estate', url: 'https://www.hafod.org/', label: 'The Hafod Trust', reason: 'Heritage charity' },
  { name: 'Sycamore Gap', url: 'https://www.nationaltrust.org.uk/visit/northumberland/hadrians-wall-and-housesteads-fort', label: 'National Trust', reason: 'Part of Hadrian Wall NT property' },
  { name: 'Craig y Nos Castle', url: 'https://www.craigynoscastle.com/', label: 'Craig y Nos Castle', reason: 'Event venue website' },
  { name: 'Classiebawn Castle', url: '', label: '', reason: 'Private, no public website' },
  { name: 'Lough Key Castle', url: 'https://www.loughkey.ie/', label: 'Lough Key Forest Park', reason: 'Forest park website' },
  { name: 'Saul Church', url: '', label: '', reason: 'No official website found' },
  { name: 'Dunserverick Castle', url: '', label: '', reason: 'Ruin, no official website' },
];

for (const item of privateOrUnsure) {
  if (!item.url) continue;
  // Auto-approve heritage orgs
  const domain = new URL(item.url).hostname.toLowerCase();
  if (domain.includes('nationaltrust') || domain.includes('english-heritage') || domain.includes('historicenvironment') || domain.includes('cadw.gov') || domain.includes('heritageireland')) {
    if (addSource(item.name, item.label, item.url)) autoCount++;
  } else {
    addCandidate(item.name, item.url, item.label, item.reason);
    candidateCount++;
  }
}

fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
fs.writeFileSync('source-candidates.json', JSON.stringify(sc, null, 2));

// Count remaining
const still = d.filter(l => l.enrichStatus === 'enriched' && (l.sources||[]).length === 0 && (l.verifiedSources||[]).length === 0);
console.log(`Auto-approved: ${autoCount}`);
console.log(`Queued for review: ${candidateCount}`);
console.log(`Still needing sources: ${still.length}`);
still.forEach(l => console.log('  -', l.name, '|', l.country));
