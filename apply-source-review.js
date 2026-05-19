const fs = require('fs');
const d = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
const sc = JSON.parse(fs.readFileSync('source-candidates.json', 'utf8'));

const approved = [
  { name: 'Amhuinnsuidhe Castle', url: 'https://www.amhuinnsuidhe.com/', label: 'Amhuinnsuidhe Castle' },
  { name: 'Kilpeck Church', url: 'https://kilpeckchurch.org.uk/', label: 'Kilpeck Church' },
  { name: "St David's Cathedral", url: 'https://www.stdavidscathedral.org.uk/', label: "St David's Cathedral" },
  { name: 'Balgonie Castle', url: 'https://www.balgoniecastle.co.uk/', label: 'Balgonie Castle' },
  { name: 'Old Inverlochy Castle', url: 'https://www.inverlochycastle.co.uk/', label: 'Inverlochy Castle' },
  { name: 'Michelham Priory', url: 'https://sussexpast.co.uk/properties-to-discover/michelham-priory/', label: 'Sussex Past' },
  { name: 'Newcastle Castle Keep', url: 'https://www.newcastlecastle.co.uk/', label: 'Newcastle Castle' },
  { name: 'Oxford Castle', url: 'https://www.oxfordcastleandprison.co.uk/', label: 'Oxford Castle & Prison' },
  { name: 'Ford Castle', url: 'https://www.ford-and-etal.co.uk/', label: 'Ford & Etal Estates' },
  { name: 'Dudley Castle', url: 'https://www.dudleyzoo.org.uk/', label: 'Dudley Zoo & Castle' },
  { name: 'Corsewall Lighthouse', url: 'https://www.lighthousehotel.co.uk/', label: 'Corsewall Lighthouse Hotel' },
  { name: 'Bodysgallen Hall', url: 'https://www.bodysgallen.com/', label: 'Bodysgallen Hall & Spa' },
  { name: 'Whalley Abbey', url: 'https://www.whalleyabbey.org/', label: 'Whalley Abbey' },
  { name: 'Hafod Estate', url: 'https://www.hafod.org/', label: 'The Hafod Trust' },
  { name: 'Craig y Nos Castle', url: 'https://www.craigynoscastle.com/', label: 'Craig y Nos Castle' },
  { name: 'Cartmel Priory', url: 'https://cartmelpriory.org.uk/', label: 'Cartmel Priory' },
  { name: 'Kinnaird Head Castle', url: 'https://lighthousemuseum.org.uk/', label: 'Museum of Scottish Lighthouses' },
];

const rejected = ['Auckland Palace', 'Balintore Castle', 'Lough Key Castle', 'Bungay Castle'];

let count = 0;
approved.forEach(a => {
  const listing = d.find(l => l.name === a.name);
  if (!listing) { console.log('NOT FOUND:', a.name); return; }
  if (!listing.sources) listing.sources = [];
  if (!listing.verifiedSources) listing.verifiedSources = [];
  if (!listing.sources.some(s => s.url === a.url)) {
    listing.sources.push({ label: a.label, url: a.url });
    listing.verifiedSources.push({ label: a.label, url: a.url });
    count++;
    console.log('✅', a.name);
  }
});

// Update candidate statuses
sc.candidates.forEach(c => {
  if (approved.some(a => a.name === c.name)) c.status = 'approved';
  if (rejected.includes(c.name)) c.status = 'rejected';
});

fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
fs.writeFileSync('source-candidates.json', JSON.stringify(sc, null, 2));
console.log('Sources added:', count);
console.log('Rejected:', rejected.join(', '));
