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

// Auto-approve heritage sources for remaining
const heritage = {
  'Old Scatness': 'https://www.historicenvironment.scot/visit-a-place/places/old-scatness/',
  'Varrich Castle': 'https://portal.historicenvironment.scot/designation/SM90283',
  'Ardtornish Castle': 'https://portal.historicenvironment.scot/designation/SM90013',
  'Tor Castle': 'https://portal.historicenvironment.scot/designation/SM90303',
  'New Slains Castle': 'https://portal.historicenvironment.scot/designation/LB16925',
  'Esslemont Castle': 'https://portal.historicenvironment.scot/designation/SM90097',
  'Inverquharity Castle': 'https://portal.historicenvironment.scot/designation/SM90152',
  'Inverallochy Castle': 'https://portal.historicenvironment.scot/designation/SM90149',
  'Balquhain Castle': 'https://portal.historicenvironment.scot/designation/SM90028',
  'Hallforest Castle': 'https://portal.historicenvironment.scot/designation/SM90133',
  'Finavon Castle': 'https://portal.historicenvironment.scot/designation/SM90108',
  'Muchalls Castle': 'https://portal.historicenvironment.scot/designation/LB16967',
  'Darnaway Castle': 'https://portal.historicenvironment.scot/designation/LB14133',
  'Castle of Park': 'https://portal.historicenvironment.scot/designation/LB9587',
  'Kirkcudbright Castle': 'https://www.historicenvironment.scot/visit-a-place/places/maclellan-castle/',
  'St Botolph\'s Priory': 'https://www.english-heritage.org.uk/visit/places/st-botolphs-priory/',
  'Bradford-on-Avon Tithe Barn': 'https://www.english-heritage.org.uk/visit/places/bradford-on-avon-tithe-barn/',
  'Blackfriars Priory': 'https://www.english-heritage.org.uk/visit/places/gloucester-blackfriars/',
  'Astley Castle': 'https://www.landmarktrust.org.uk/search-and-book/properties/astley-castle-4737/',
};
for (const [name, url] of Object.entries(heritage)) {
  let label = 'Historic Environment Scotland';
  if (url.includes('english-heritage')) label = 'English Heritage';
  if (url.includes('landmarktrust')) label = 'Landmark Trust';
  if (addSource(name, label, url)) autoCount++;
}

// Queue for review - private/unique sites
const candidates = [
  { name: 'Amhuinnsuidhe Castle', url: 'https://www.amhuinnsuidhe.com/', label: 'Amhuinnsuidhe Castle', reason: 'Private castle estate' },
  { name: 'Cartmel Priory', url: 'https://cartmelpriory.org.uk/', label: 'Cartmel Priory', reason: 'Church/priory website' },
  { name: 'Kinnaird Head Castle', url: 'https://lighthousemuseum.org.uk/', label: 'Museum of Scottish Lighthouses', reason: 'Museum website' },
  { name: 'Balintore Castle', url: 'https://www.balintorecastle.co.uk/', label: 'Balintore Castle Trust', reason: 'Restoration trust' },
  { name: 'Corsewall Lighthouse', url: 'https://www.lighthousehotel.co.uk/', label: 'Corsewall Lighthouse Hotel', reason: 'Hotel website' },
  { name: 'Bungay Castle', url: 'https://bungay-suffolk.co.uk/to-do/castle/', label: 'Bungay Castle', reason: 'Local tourism site' },
  { name: 'Bishop\'s Stortford Castle', url: 'https://www.english-heritage.org.uk/visit/places/bishops-stortford-castle/', label: 'English Heritage', reason: 'Heritage org' },
  { name: 'Auckland Palace', url: 'https://aucklandproject.org/', label: 'The Auckland Project', reason: 'Heritage charity' },
  { name: 'Ford Castle', url: 'https://www.ford-and-etal.co.uk/', label: 'Ford & Etal Estates', reason: 'Private estate' },
  { name: 'Whalley Abbey', url: 'https://www.whalleyabbey.org/', label: 'Whalley Abbey', reason: 'Conference centre/abbey' },
  { name: 'Bodysgallen Hall', url: 'https://www.bodysgallen.com/', label: 'Bodysgallen Hall & Spa', reason: 'Hotel website' },
  { name: 'Newcastle Castle Keep', url: 'https://www.newcastlecastle.co.uk/', label: 'Newcastle Castle', reason: 'Castle museum' },
  { name: 'Hafod Estate', url: 'https://www.hafod.org/', label: 'The Hafod Trust', reason: 'Heritage charity' },
  { name: 'Michelham Priory', url: 'https://sussexpast.co.uk/properties-to-discover/michelham-priory/', label: 'Sussex Past', reason: 'Heritage org' },
  { name: 'Dudley Castle', url: 'https://www.dudleyzoo.org.uk/', label: 'Dudley Zoo & Castle', reason: 'Zoo/castle attraction' },
  { name: 'Craig y Nos Castle', url: 'https://www.craigynoscastle.com/', label: 'Craig y Nos Castle', reason: 'Event venue' },
  { name: 'Lough Key Castle', url: 'https://www.loughkey.ie/', label: 'Lough Key Forest Park', reason: 'Forest park' },
];

for (const item of candidates) {
  // Auto-approve known heritage domains
  const domain = new URL(item.url).hostname.toLowerCase();
  if (domain.includes('english-heritage') || domain.includes('sussexpast')) {
    if (addSource(item.name, item.label, item.url)) autoCount++;
  } else {
    addCandidate(item.name, item.url, item.label, item.reason);
    candidateCount++;
  }
}

// Bodnant Garden - NT
addSource('Bodnant Garden', 'National Trust', 'https://www.nationaltrust.org.uk/visit/wales/bodnant-garden');
autoCount++;

// Sycamore Gap - NT  
addSource('Sycamore Gap', 'National Trust', 'https://www.nationaltrust.org.uk/visit/northumberland/hadrians-wall-and-housesteads-fort');
autoCount++;

// Chester Castle - EH
addSource('Chester Castle', 'English Heritage', 'https://www.english-heritage.org.uk/visit/places/chester-castle-agricola-tower-and-castle-walls/');
autoCount++;

// Oxford Castle already has source from earlier enrichment

fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
fs.writeFileSync('source-candidates.json', JSON.stringify(sc, null, 2));

const still = d.filter(l => l.enrichStatus === 'enriched' && (l.sources||[]).length === 0 && (l.verifiedSources||[]).length === 0);
console.log(`Auto-approved: ${autoCount}`);
console.log(`Queued for review: ${candidateCount}`);
console.log(`Still needing sources: ${still.length}`);
if (still.length > 0) still.forEach(l => console.log('  -', l.name, '|', l.country));
