const fs = require('fs');

const data = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));

console.log('Total listings:', data.length);

const enrichedNoSources = data.filter(listing => 
  listing.enrichStatus === 'enriched' && 
  (!listing.sources || listing.sources.length === 0) && 
  (!listing.verifiedSources || listing.verifiedSources.length === 0)
);

console.log('Enriched listings without sources:', enrichedNoSources.length);
console.log('First 10 names:');
enrichedNoSources.slice(0, 10).forEach((castle, i) => {
  console.log(`${i+1}. ${castle.name} (${castle.country})`);
});

// Save the filtered list for processing
fs.writeFileSync('filtered-castles.json', JSON.stringify(enrichedNoSources, null, 2));
console.log('\nFiltered list saved to filtered-castles.json');