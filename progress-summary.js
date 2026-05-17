const fs = require('fs');

console.log('🎯 PROGRESS SUMMARY - Batch 1');
console.log('================================');

// Check source candidates
const candidates = fs.existsSync('./source-candidates.json') ? 
  JSON.parse(fs.readFileSync('./source-candidates.json', 'utf8')) : { candidates: [] };

console.log(`📝 Review Queue: ${candidates.candidates.length} candidates`);
candidates.candidates.forEach((candidate, index) => {
  console.log(`  ${index + 1}. ${candidate.name} - ${candidate.reason}`);
});

// Check how many listings have been processed from audit data
const auditData = JSON.parse(fs.readFileSync('./audit-data.json', 'utf8'));
const withNewSources = auditData.filter(listing => 
  listing.sources && listing.sources.length > 0 && 
  listing.sources.some(source => 
    source.url.includes('heritageireland.ie') || 
    source.url.includes('english-heritage.org.uk') ||
    source.url.includes('historicenvironment.scot') ||
    source.url.includes('nationaltrust.org.uk') ||
    source.url.includes('cadw.gov.wales') ||
    source.url.includes('britainexpress.com') ||
    source.url.includes('trove.scot')
  )
);

console.log(`\n✅ Auto-approved sources added: ${withNewSources.length}`);
withNewSources.slice(0, 10).forEach((listing, index) => {
  const newSources = listing.sources.filter(source => 
    source.url.includes('heritageireland.ie') || 
    source.url.includes('english-heritage.org.uk') ||
    source.url.includes('historicenvironment.scot') ||
    source.url.includes('nationaltrust.org.uk') ||
    source.url.includes('cadw.gov.wales') ||
    source.url.includes('britainexpress.com') ||
    source.url.includes('trove.scot')
  );
  
  console.log(`  ${index + 1}. ${listing.name} (${listing.country}) - ${newSources[0]?.label}`);
});

console.log('\n🎯 Ready to continue with next listings...');