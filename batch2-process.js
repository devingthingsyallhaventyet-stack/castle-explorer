const fs = require('fs');

// Load data
const auditData = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
let sourceCandidates = JSON.parse(fs.readFileSync('source-candidates.json', 'utf8'));

// Search results from web searches
const searchResults = {
  'Balgonie Castle': [
    { url: 'https://www.balgoniecastle.co.uk/', label: 'Balgonie Castle Official Site', reason: 'Private castle website', autoApprove: false },
    { url: 'https://www.trove.scot/place/31389', label: 'Historic Environment Scotland', reason: 'Official heritage database', autoApprove: true }
  ],
  'Cathcart Castle': [
    // No official sources found, only ruins
  ],
  'Old Inverlochy Castle': [
    { url: 'https://www.historicenvironment.scot/visit-a-place/places/inverlochy-castle/', label: 'Historic Environment Scotland', reason: 'Official heritage site', autoApprove: true },
    { url: 'https://www.inverlochycastle.co.uk/', label: 'Inverlochy Castle Official Site', reason: 'Private castle website', autoApprove: false }
  ],
  'Castle of Old Wick': [
    { url: 'https://www.historicenvironment.scot/visit-a-place/places/castle-of-old-wick/', label: 'Historic Environment Scotland', reason: 'Official heritage site', autoApprove: true },
    { url: 'https://www.trove.scot/place/8956', label: 'Historic Environment Scotland', reason: 'Official heritage database', autoApprove: true }
  ],
  'Duntulm Castle': [
    // No official sources found, only ruins
  ]
};

let processedCount = 0;
let autoApprovedCount = 0;
let skippedCount = 0;

console.log('Processing Batch 2 results...');

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
  
  if (results.length === 0) {
    console.log(`  ⏭️  No official sources found - SKIPPED`);
    skippedCount++;
  } else {
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
      } else {
        // Queue for review - but check if already exists
        const existsInCandidates = sourceCandidates.candidates.some(c => 
          c.name === castleName && c.candidateUrl === result.url
        );
        
        if (!existsInCandidates) {
          sourceCandidates.candidates.push({
            name: castleName,
            candidateUrl: result.url,
            candidateLabel: result.label,
            reason: result.reason,
            status: "pending"
          });
          console.log(`  ⏳ ADDED TO REVIEW QUEUE: ${result.label}`);
        } else {
          console.log(`  ⏭️  ALREADY IN QUEUE: ${result.label}`);
        }
      }
    });
  }
  
  processedCount++;
});

// Save the updated data
fs.writeFileSync('audit-data.json', JSON.stringify(auditData, null, 2));
fs.writeFileSync('source-candidates.json', JSON.stringify(sourceCandidates, null, 2));

console.log(`\n📊 Batch 2 Summary:`);
console.log(`   Processed: ${processedCount} castles`);
console.log(`   Auto-approved: ${autoApprovedCount} sources`);
console.log(`   Skipped (no sources): ${skippedCount} castles`);
console.log(`   Total candidates for review: ${sourceCandidates.candidates.length}`);
console.log(`   Total processed so far: ${10} castles`);
console.log(`   Remaining castles: ${202 - 10}`);