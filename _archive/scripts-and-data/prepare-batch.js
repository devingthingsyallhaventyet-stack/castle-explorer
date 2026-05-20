const fs = require('fs');

// Load the listings that need sources
const needingSources = JSON.parse(fs.readFileSync('./listings-needing-sources.json', 'utf8'));

console.log('🚀 Starting Batch 1 - First 20 listings');
console.log('================================');

const batch1 = needingSources.slice(0, 20);

batch1.forEach((listing, index) => {
  console.log(`${index + 1}. ${listing.name} (${listing.country})`);
});

console.log('\n📝 Saving batch 1 for processing...');
fs.writeFileSync('./current-batch.json', JSON.stringify(batch1, null, 2));
console.log('✅ Ready to search for sources!');