const fs = require('fs');

// Read the audit data
console.log('Reading audit-data.json...');
const auditData = JSON.parse(fs.readFileSync('./audit-data.json', 'utf8'));

console.log(`Total listings: ${auditData.length}`);

// Filter for enriched listings without sources
const needingSources = auditData.filter(listing => {
  return listing.enrichStatus === 'enriched' && 
         (!listing.sources || listing.sources.length === 0) &&
         (!listing.verifiedSources || listing.verifiedSources.length === 0);
});

console.log(`Listings needing sources: ${needingSources.length}`);

// Show first 10 for verification
console.log('\nFirst 10 listings that need sources:');
needingSources.slice(0, 10).forEach((listing, index) => {
  console.log(`${index + 1}. ${listing.name} (${listing.country})`);
});

// Save filtered list for processing
fs.writeFileSync('./listings-needing-sources.json', JSON.stringify(needingSources, null, 2));
console.log('\nFiltered listings saved to listings-needing-sources.json');

// Show breakdown by country
const byCountry = needingSources.reduce((acc, listing) => {
  acc[listing.country] = (acc[listing.country] || 0) + 1;
  return acc;
}, {});

console.log('\nBreakdown by country:');
Object.entries(byCountry).sort((a, b) => b[1] - a[1]).forEach(([country, count]) => {
  console.log(`  ${country}: ${count}`);
});