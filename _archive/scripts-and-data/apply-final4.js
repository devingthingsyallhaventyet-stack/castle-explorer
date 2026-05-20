const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
const today = '2025-05-17';

const updates = [
  { name: 'Blickling Hall', label: 'National Trust', url: 'https://www.nationaltrust.org.uk/visit/norfolk/blickling-estate' },
  { name: "St Michael's Mount", label: "St Michael's Mount", url: 'https://stmichaelsmount.co.uk/' },
  { name: 'Avebury Manor', label: 'National Trust', url: 'https://www.nationaltrust.org.uk/visit/wiltshire/avebury' },
  { name: 'Baconsthorpe Castle', label: 'English Heritage', url: 'https://www.english-heritage.org.uk/visit/places/baconsthorpe-castle/' },
];

updates.forEach(u => {
  const listing = d.find(l => l.name === u.name);
  if (!listing) { console.log('NOT FOUND:', u.name); return; }
  listing.enrichStatus = 'enriched';
  listing.enrichReviewDate = today;
  listing.reviewStatus = 'approved';
  delete listing.enrichReviewQueued;
  if (!listing.sources) listing.sources = [];
  if (!listing.verifiedSources) listing.verifiedSources = [];
  listing.sources.push({ label: u.label, url: u.url });
  listing.verifiedSources.push({ label: u.label, url: u.url });
  console.log('✅', u.name, '+source');
});

fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
fs.writeFileSync('enrich-queue.json', JSON.stringify({ items: [] }, null, 2));
console.log('Done. 4 enriched + approved. Queue cleared.');
