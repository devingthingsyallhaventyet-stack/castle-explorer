const fs = require('fs');

// Load data
const filteredCastles = JSON.parse(fs.readFileSync('filtered-castles.json', 'utf8'));

// Get the remaining castles (starting from position 14)
const remainingCastles = filteredCastles.slice(14);

console.log(`Rapid search processing for ${remainingCastles.length} remaining castles...`);
console.log('This script will output search queries for batch processing.');

console.log('\n=== SEARCH QUERIES FOR WEB SEARCH TOOL ===\n');

// Generate search queries in batches of 10 for efficient processing
remainingCastles.slice(0, 20).forEach((castle, i) => {
  const searchQuery = `${castle.name} official site historicenvironment.scot ${castle.country}`;
  console.log(`${i+15}. ${castle.name} (${castle.country})`);
  console.log(`   Query: ${searchQuery}\n`);
});

// Also create a summary for next steps
console.log('\n=== NEXT STEPS ===');
console.log('1. Use web_search tool for each query above');
console.log('2. Look for these AUTO-APPROVE domains:');
console.log('   - historicenvironment.scot');
console.log('   - trove.scot'); 
console.log('   - canmore.org.uk');
console.log('   - visitscotland.com');
console.log('   - nts.org.uk (National Trust for Scotland)');
console.log('   - Any .gov.uk/.gov.ie domains');
console.log('3. Queue private castle websites for review');
console.log('4. Skip castles with no official online presence');

// Create a template for batch processing
const templateScript = `
// Template for batch processing results
const searchResults = {
  // Add results in this format:
  // 'Castle Name': [
  //   { url: 'https://...', label: 'Source Name', reason: 'Description', autoApprove: true/false }
  // ]
};
`;

fs.writeFileSync('batch-template.js', templateScript);
console.log('\n✅ Created batch-template.js for processing results');