const fs = require('fs');

// Load data
const auditData = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
let sourceCandidates = JSON.parse(fs.readFileSync('source-candidates.json', 'utf8'));

// Search results from web searches for batch 4
const searchResults = {
  'Edzell Castle': [
    { url: 'https://www.historicenvironment.scot/visit-a-place/places/edzell-castle-and-garden/', label: 'Historic Environment Scotland', reason: 'Official heritage site', autoApprove: true }
  ],
  'Craigievar Castle': [
    { url: 'https://www.nts.org.uk/visit/places/craigievar', label: 'National Trust for Scotland', reason: 'Official heritage organization', autoApprove: true }
  ],
  'Castle Fraser': [
    { url: 'https://www.nts.org.uk/visit/places/castle-fraser', label: 'National Trust for Scotland', reason: 'Official heritage organization', autoApprove: true }
  ],
  'Crathes Castle': [
    { url: 'https://www.nts.org.uk/visit/places/crathes-castle', label: 'National Trust for Scotland', reason: 'Official heritage organization', autoApprove: true }
  ],
  'Culloden Battlefield': [
    { url: 'https://www.nts.org.uk/visit/places/culloden', label: 'National Trust for Scotland', reason: 'Official heritage organization', autoApprove: true }
  ]
};

let processedCount = 0;
let autoApprovedCount = 0;

console.log('Processing Batch 4 results...');

// Process each castle that has results
Object.keys(searchResults).forEach(castleName => {
  console.log(`\nProcessing: ${castleName}`);
  
  // Find the castle in audit data
  const castle = auditData.find(c => c.name === castleName);
  if (!castle) {
    console.log(`  ❌ Castle not found: ${castleName}`);
    return;
  }
  
  const results = searchResults[castleName];
  
  results.forEach(result => {
    if (result.autoApprove) {
      // Auto-approve: add directly to sources and verifiedSources
      if (!castle.sources) castle.sources = [];
      if (!castle.verifiedSources) castle.verifiedSources = [];
      
      const source = { label: result.label, url: result.url };
      castle.sources.push(source);
      castle.verifiedSources.push(source);
      
      autoApprovedCount++;
      console.log(`  ✅ AUTO-APPROVED: ${result.label}`);
    }
  });
  
  processedCount++;
});

// Save the updated data
fs.writeFileSync('audit-data.json', JSON.stringify(auditData, null, 2));

const currentTotalProcessed = 14 + processedCount;

console.log(`\n📊 Batch 4 Summary:`);
console.log(`   Processed: ${processedCount} castles`);
console.log(`   Auto-approved: ${autoApprovedCount} sources`);
console.log(`   Total processed so far: ${currentTotalProcessed} castles`);
console.log(`   Remaining castles: ${202 - currentTotalProcessed}`);