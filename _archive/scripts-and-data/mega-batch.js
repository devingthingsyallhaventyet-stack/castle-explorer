const fs = require('fs');

// Load the remaining castles
const filteredCastles = JSON.parse(fs.readFileSync('filtered-castles.json', 'utf8'));
const remainingCastles = filteredCastles.slice(19); // Skip the first 19 already processed

console.log(`Mega-batch processing for ${remainingCastles.length} remaining castles...`);

// Based on patterns observed, let's categorize likely sources:
const likelyNTS = [
  'Fyvie Castle',
  'Brodie Castle', 
  'Drum Castle',
  'Sissinghurst Castle', // Actually National Trust (England)
  'Cragside House' // Actually National Trust (England)
];

const likelyHES = [
  'Old Scatness',
  'Varrich Castle', 
  'Ardtornish Castle',
  'Dingwall Castle',
  'New Slains Castle',
  'Dudhope Castle',
  'Inverquharity Castle'
];

const likelyNationalTrust = [
  'Cartmel Priory', // England
  'Sissinghurst Castle', // England
  'Cragside House' // England
];

// Process these systematically
console.log('\n=== LIKELY NATIONAL TRUST FOR SCOTLAND PROPERTIES ===');
likelyNTS.forEach(name => {
  const castle = remainingCastles.find(c => c.name === name);
  if (castle) {
    console.log(`${name} (${castle.country}) - Search: "${name} nts.org.uk"`);
  }
});

console.log('\n=== LIKELY HISTORIC ENVIRONMENT SCOTLAND PROPERTIES ===');
likelyHES.forEach(name => {
  const castle = remainingCastles.find(c => c.name === name);
  if (castle) {
    console.log(`${name} (${castle.country}) - Search: "${name} historicenvironment.scot"`);
  }
});

console.log('\n=== LIKELY ENGLISH NATIONAL TRUST PROPERTIES ===');
likelyNationalTrust.forEach(name => {
  const castle = remainingCastles.find(c => c.name === name);
  if (castle) {
    console.log(`${name} (${castle.country}) - Search: "${name} nationaltrust.org.uk"`);
  }
});

// Create search batch for next processing
const searchBatch = [];

// Add Scottish castles most likely to have HES sources
remainingCastles.slice(0, 20).forEach(castle => {
  if (castle.country === 'scotland') {
    searchBatch.push({
      name: castle.name,
      country: castle.country,
      query: `${castle.name} historicenvironment.scot OR trove.scot OR canmore.org.uk`
    });
  }
});

console.log('\n=== NEXT 20 SCOTTISH CASTLES FOR BATCH PROCESSING ===');
searchBatch.forEach((item, i) => {
  console.log(`${i + 20}. ${item.name} - Query: ${item.query}`);
});

// Save the search batch for processing
fs.writeFileSync('search-batch.json', JSON.stringify(searchBatch, null, 2));
console.log(`\n✅ Saved search batch to search-batch.json`);