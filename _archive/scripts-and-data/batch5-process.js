const fs = require('fs');

// Load data
const auditData = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
let sourceCandidates = JSON.parse(fs.readFileSync('source-candidates.json', 'utf8'));

// Search results from web searches for batch 5 - All auto-approvals!
const searchResults = {
  'Fyvie Castle': [
    { url: 'https://www.nts.org.uk/visit/places/fyvie-castle', label: 'National Trust for Scotland', reason: 'Official heritage organization', autoApprove: true }
  ],
  'Brodie Castle': [
    { url: 'https://www.nts.org.uk/visit/places/brodie-castle', label: 'National Trust for Scotland', reason: 'Official heritage organization', autoApprove: true }
  ],
  'Drum Castle': [
    { url: 'https://www.nts.org.uk/visit/places/drum-castle', label: 'National Trust for Scotland', reason: 'Official heritage organization', autoApprove: true }
  ],
  'Sissinghurst Castle': [
    { url: 'https://www.nationaltrust.org.uk/visit/kent/sissinghurst-castle-garden', label: 'National Trust', reason: 'Official heritage organization', autoApprove: true }
  ],
  'Cragside House': [
    { url: 'https://www.nationaltrust.org.uk/visit/north-east/cragside', label: 'National Trust', reason: 'Official heritage organization', autoApprove: true }
  ]
};

let processedCount = 0;
let autoApprovedCount = 0;

console.log('Processing Batch 5 results (all auto-approvals!)...');

// Process each castle
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

const currentTotalProcessed = 19 + processedCount;

console.log(`\n📊 Batch 5 Summary:`);
console.log(`   Processed: ${processedCount} castles`);
console.log(`   Auto-approved: ${autoApprovedCount} sources`);
console.log(`   Total processed so far: ${currentTotalProcessed} castles`);
console.log(`   Remaining castles: ${202 - currentTotalProcessed}`);
console.log(`   Total auto-approved sources so far: ${19 + autoApprovedCount}`);