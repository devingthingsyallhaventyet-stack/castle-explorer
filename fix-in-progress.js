const fs = require('fs');
const d = require('./audit-data.json');

const inProgress = [
  { name: 'Hulne Priory', note: 'needs more research to build out a page.', date: '2026-05-17' },
  { name: 'Lligwy Burial Chamber', note: 'should likely be remade into Capel Llugwy', date: '2026-05-17' },
  { name: 'Dowth Hall', note: 'needs more research', date: '2026-05-17' },
  { name: 'Garn Goch', note: 'needs more research', date: '2026-05-17' },
  { name: 'Dromana Gate', note: 'needs more research.', date: '2026-05-17' },
  { name: 'Rathcroghan', note: 'more research', date: '2026-05-17' },
  { name: 'Dun Eochla', note: 'more research', date: '2026-05-17' },
  { name: 'Taunton Castle', note: 'needs more research', date: '2026-05-17' },
  { name: 'Clara Castle', note: 'no google places', date: '2026-05-17' },
  { name: 'Ormond Castle (Scotland)', note: 'more reseaerch needed', date: '2026-05-17' },
  { name: 'Gosford Castle', note: 'more research needed', date: '2026-05-17' },
  { name: 'Halton Castle', note: 'no google places.', date: '2026-05-17' },
  { name: 'Bellister Castle', note: 'needs more research', date: '2026-05-17' },
  { name: 'Dacre Castle', note: "Shares a site with St Andrew's Church. needs more research.", date: '2026-05-17' },
  { name: 'Pitsligo Castle', note: 'Google places is wrong Pittulie and Pitsligo castles are nearby but two different castles.', date: '2026-05-16' },
  { name: 'Cairnbulg Castle', note: 'Needs more research', date: '2026-05-16' },
  { name: 'Harthill Castle', note: 'needs more research', date: '2026-05-16' },
  { name: 'Craig Castle', note: 'Needs more research. wiki coordinates are in connecticut?', date: '2026-05-16' },
  { name: 'Baikie Castle', note: 'I do not think this place exists.', date: '2026-05-16' },
  { name: 'Tillycairn Castle', note: 'Private residence. Doesnt seem worth the listing unless it can be further enriched and get better photos.', date: '2026-05-16' },
  { name: 'Castle of Fiddes', note: 'Needs more info', date: '2026-05-16' },
  { name: 'Durris Castle', note: 'not sure where these photos are from. needs more research.', date: '2026-05-16' },
  { name: 'Cortachy Castle', note: 'No google places listing.', date: '2026-05-16' },
  { name: 'Lochinch Castle', note: 'Add source - https://lochinchcastle.com/\nTheres two castles here. hard to tell which is which.', date: '2026-05-16' },
  { name: 'Auchinleck House', note: 'seems to be a house and a castle here? two different listings', date: '2026-05-16' },
  { name: 'Mauchline Castle', note: 'needs more research', date: '2026-05-16' },
  { name: 'Ayr Castle', note: '', date: '2026-05-16' },
  { name: 'Sundrum Castle', note: '', date: '2026-05-16' },
  { name: 'Wolterton Hall', note: 'no google places. needs more research.', date: '2026-05-17' },
  { name: 'Castle Craig', note: 'Deleted Google Maps link (no valid listing). Needs more research, no Google Places found.', date: '2026-05-17' },
  { name: 'Cranshaws Castle', note: 'needs more research. no google maps listing seems to exist. looks like you could stay there at one point but not sure if this is still true. https://www.gentlemansbutler.com/cranshaws-castle-luxurious-scottish-getaway/', date: '2026-05-17' },
  { name: 'Kinclaven Castle', note: 'No google places and wikipedia has minimal info. Needs more research.', date: '2026-05-17' },
];

let count = 0;
for (const ip of inProgress) {
  const entry = d.find(x => x.name === ip.name);
  if (!entry) {
    console.log('NOT FOUND:', ip.name);
    continue;
  }
  entry.enrichStatus = 'in-progress';
  entry.enrichReviewDate = ip.date;
  if (ip.note) entry.enrichNote = ip.note;
  // Remove enrichReviewQueued flag if present
  delete entry.enrichReviewQueued;
  count++;
  console.log('Set in-progress:', ip.name);
}

fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
console.log('\nTotal set:', count);
