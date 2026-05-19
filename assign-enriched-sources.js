const fs = require('fs');
const d = require('./audit-data.json');

// Sources for 16 enriched tab listings missing websites
const autoApprove = [
  // .gov.uk
  { name: 'Guildford Castle', source: { name: 'Guildford Borough Council', url: 'https://www.guildford.gov.uk/article/25594/About-Guildford-Castle' } },
  // Cadw
  { name: 'Skenfrith Castle', source: { name: 'Cadw', url: 'https://cadw.gov.wales/visit/places-to-visit/skenfrith-castle' } },
  { name: 'Aberystwyth Castle', source: { name: 'Cadw', url: 'https://cadw.gov.wales/visit/places-to-visit/aberystwyth-castle' } },
  { name: 'Ewloe Castle', source: { name: 'Cadw', url: 'https://cadw.gov.wales/visit/places-to-visit/ewloe-castle' } },
  { name: 'Bronllys Castle', source: { name: 'Cadw', url: 'https://cadw.gov.wales/visit/places-to-visit/bronllys-castle' } },
  { name: 'Deganwy Castle', source: { name: 'Cadw', url: 'https://cadw.gov.wales/visit/places-to-visit/deganwy-castle' } },
  { name: 'Abergavenny Castle', source: { name: 'Cadw', url: 'https://cadw.gov.wales/visit/places-to-visit/abergavenny-castle' } },
  // Heritage Ireland / OPW
  { name: 'Nenagh Castle', source: { name: 'Heritage Ireland', url: 'https://heritageireland.ie/places-to-visit/nenagh-castle/' } },
  { name: 'Kanturk Castle', source: { name: 'Heritage Ireland', url: 'https://heritageireland.ie/places-to-visit/kanturk-castle/' } },
  // English Heritage
  { name: 'Lydford Castle', source: { name: 'English Heritage', url: 'https://www.english-heritage.org.uk/visit/places/lydford-castleand-saxon-town/' } },
  { name: 'Christchurch Castle', source: { name: 'English Heritage', url: 'https://www.english-heritage.org.uk/visit/places/christchurch-castle-and-normans-house/' } },
  { name: 'Barnwell Castle', source: { name: 'English Heritage', url: 'https://www.english-heritage.org.uk/visit/places/barnwell-castle/' } },
  { name: 'Haverfordwest Castle', source: { name: 'Haverfordwest Town Museum', url: 'https://haverfordwest-town-museum.org.uk/' } },
];

// These need E's review
const needsReview = [
  { name: 'Ince Castle', source: { name: 'Ince Castle', url: 'https://incecastle.co.uk/' } },
  { name: 'Calder Abbey', source: { name: 'Calder Abbey', url: 'https://www.calderabbey.co.uk/' } },
  { name: 'Cooling Castle', source: { name: 'Cooling Castle Barn', url: 'https://www.coolingcastlebarn.com/' } },
];

let autoCount = 0;
for (const item of autoApprove) {
  const entry = d.find(x => x.name === item.name);
  if (!entry) { console.log('NOT FOUND:', item.name); continue; }
  if (!entry.source) entry.source = [];
  if (!entry.source.find(s => s.url === item.source.url)) {
    entry.source.push(item.source);
    autoCount++;
    console.log('AUTO-APPROVED:', item.name, '->', item.source.name);
  } else {
    console.log('ALREADY HAS:', item.name);
  }
}

console.log('\nNEEDS REVIEW (not applied):');
for (const item of needsReview) {
  console.log(' -', item.name, '->', item.source.url);
}

// Write source candidates for review
const candidates = require('./source-candidates.json') || [];
for (const item of needsReview) {
  if (!candidates.find(c => c.name === item.name)) {
    candidates.push({ ...item, status: 'pending' });
  }
}
fs.writeFileSync('source-candidates.json', JSON.stringify(candidates, null, 2));

fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
console.log('\nAuto-approved:', autoCount);
console.log('Queued for review:', needsReview.length);
