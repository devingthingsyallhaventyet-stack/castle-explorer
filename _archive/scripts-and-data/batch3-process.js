const fs = require('fs');

// Load data
const auditData = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
let sourceCandidates = JSON.parse(fs.readFileSync('source-candidates.json', 'utf8'));

// Search results from web searches for batch 3
const searchResults = {
  'Lochindorb Castle': [
    { url: 'https://portal.historicenvironment.scot/apex/f?p=1505%3A300%3A%3A%3A%3A%3AVIEWTYPE%2CVIEWREF%3Adesignation%2CSM1231', label: 'Historic Environment Scotland', reason: 'Official heritage designation', autoApprove: true },
    { url: 'https://www.trove.scot/place/15463', label: 'Historic Environment Scotland', reason: 'Official heritage database', autoApprove: true }
  ],
  'Jarlshof': [
    { url: 'https://www.historicenvironment.scot/visit-a-place/places/jarlshof-prehistoric-and-norse-settlement/', label: 'Historic Environment Scotland', reason: 'Official heritage site', autoApprove: true }
  ],
  'Clickimin Broch': [
    { url: 'https://www.historicenvironment.scot/visit-a-place/places/clickimin-broch/', label: 'Historic Environment Scotland', reason: 'Official heritage site', autoApprove: true }
  ],
  'Mousa Broch': [
    { url: 'https://www.historicenvironment.scot/visit-a-place/places/mousa-broch/', label: 'Historic Environment Scotland', reason: 'Official heritage site', autoApprove: true }
  ],
  'Old Scatness': [
    // Will search for this separately
  ],
  'Varrich Castle': [
    // Will search for this separately  
  ],
  'Ardtornish Castle': [
    // Will search for this separately
  ],
  'Tor Castle': [
    // Will search for this separately
  ]
};

let processedCount = 0;
let autoApprovedCount = 0;
let skippedCount = 0;

console.log('Processing Batch 3 results...');

// Process each castle that has results
Object.keys(searchResults).forEach(castleName => {
  const results = searchResults[castleName];
  if (results.length === 0) {
    return; // Skip castles without search results yet
  }
  
  console.log(`\nProcessing: ${castleName}`);
  
  // Find the castle in audit data
  const castle = auditData.find(c => c.name === castleName);
  if (!castle) {
    console.log(`  ❌ Castle not found: ${castleName}`);
    return;
  }
  
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
      // Queue for review 
      sourceCandidates.candidates.push({
        name: castleName,
        candidateUrl: result.url,
        candidateLabel: result.label,
        reason: result.reason,
        status: "pending"
      });
      console.log(`  ⏳ ADDED TO REVIEW QUEUE: ${result.label}`);
    }
  });
  
  processedCount++;
});

// Save the updated data
fs.writeFileSync('audit-data.json', JSON.stringify(auditData, null, 2));
fs.writeFileSync('source-candidates.json', JSON.stringify(sourceCandidates, null, 2));

console.log(`\n📊 Batch 3 Summary:`);
console.log(`   Processed: ${processedCount} castles`);
console.log(`   Auto-approved: ${autoApprovedCount} sources`);
console.log(`   Total candidates for review: ${sourceCandidates.candidates.length}`);
console.log(`   Total processed so far: ${10 + processedCount} castles`);
console.log(`   Remaining castles: ${202 - 10 - processedCount}`);