const fs = require('fs');

// Load data
const auditData = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
let sourceCandidates = JSON.parse(fs.readFileSync('source-candidates.json', 'utf8'));

// Search results from web searches
const searchResults = {
  'Amhuinnsuidhe Castle': [
    { url: 'https://www.amhuinnsuidhe.com/', label: 'Amhuinnsuidhe Castle Official Site', reason: 'Private castle website', autoApprove: false }
  ],
  'Methven Castle': [
    { url: 'https://portal.historicenvironment.scot/apex/f?p=1505%3A300%3A%3A%3A%3A%3AVIEWTYPE%2CVIEWREF%3Adesignation%2CGDL00285', label: 'Historic Environment Scotland', reason: 'Official heritage site', autoApprove: true }
  ],
  'Grandtully Castle': [
    { url: 'https://www.trove.scot/place/25692', label: 'Historic Environment Scotland', reason: 'Official heritage database', autoApprove: true }
  ],
  'Macduff\'s Castle': [
    { url: 'https://canmore.org.uk/site/53974/east-wemyss-macduffs-castle', label: 'Historic Environment Scotland', reason: 'Official heritage database', autoApprove: true }
  ],
  'Balmerino Abbey': [
    { url: 'https://www.visitscotland.com/info/see-do/balmerino-abbey-p247561', label: 'VisitScotland', reason: 'Official tourism site', autoApprove: true },
    { url: 'https://www.trove.scot/place/31746', label: 'Historic Environment Scotland', reason: 'Official heritage database', autoApprove: true }
  ]
};

let processedCount = 0;
let autoApprovedCount = 0;

console.log('Processing Batch 1 results...');

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
  
  processedCount++;
});

// Save the updated data
fs.writeFileSync('audit-data.json', JSON.stringify(auditData, null, 2));
fs.writeFileSync('source-candidates.json', JSON.stringify(sourceCandidates, null, 2));

console.log(`\n📊 Batch 1 Summary:`);
console.log(`   Processed: ${processedCount} castles`);
console.log(`   Auto-approved: ${autoApprovedCount} sources`);
console.log(`   Total candidates for review: ${sourceCandidates.candidates.length}`);
console.log(`   Remaining castles: ${202 - processedCount}`);