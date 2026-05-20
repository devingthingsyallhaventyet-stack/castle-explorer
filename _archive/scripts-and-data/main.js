const fs = require('fs');
const { setDependencies, processBatch } = require('./process-batch');

// This will be injected by the calling environment
let webSearchFn = null;

// Set up web search function
function setWebSearchFunction(fn) {
  webSearchFn = fn;
}

async function main() {
  console.log('🏰 Castlecore Source Finder Starting...\n');
  
  if (!webSearchFn) {
    console.error('❌ Web search function not provided');
    process.exit(1);
  }
  
  // Load data
  console.log('📂 Loading data files...');
  const auditData = JSON.parse(fs.readFileSync('./audit-data.json', 'utf8'));
  const needingSources = JSON.parse(fs.readFileSync('./listings-needing-sources.json', 'utf8'));
  
  console.log(`📊 Total audit entries: ${auditData.length}`);
  console.log(`🎯 Listings needing sources: ${needingSources.length}`);
  
  // Set up dependencies
  setDependencies(webSearchFn, auditData, needingSources);
  
  // Initialize source candidates file if it doesn't exist
  if (!fs.existsSync('./source-candidates.json')) {
    fs.writeFileSync('./source-candidates.json', JSON.stringify({ candidates: [] }, null, 2));
    console.log('📝 Created source-candidates.json');
  }
  
  // Initialize processed listings file if it doesn't exist
  if (!fs.existsSync('./processed-listings.json')) {
    fs.writeFileSync('./processed-listings.json', JSON.stringify([], null, 2));
    console.log('📝 Created processed-listings.json');
  }
  
  // Process in batches of 20
  const batchSize = 20;
  let totalProcessed = 0;
  let totalAutoApproved = 0;
  let totalReviewQueue = 0;
  
  for (let i = 0; i < needingSources.length; i += batchSize) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 Starting Batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(needingSources.length / batchSize)}`);
    console.log(`${'='.repeat(60)}`);
    
    const results = await processBatch(i, batchSize);
    
    totalProcessed += results.processedCount;
    totalAutoApproved += results.autoApprovedCount;
    totalReviewQueue += results.reviewQueueCount;
    
    console.log(`\n📊 Cumulative Progress:`);
    console.log(`   Total processed: ${totalProcessed}/${needingSources.length}`);
    console.log(`   Auto-approved sources: ${totalAutoApproved}`);
    console.log(`   Review queue size: ${totalReviewQueue}`);
    
    // Break if we've processed all
    if (totalProcessed >= needingSources.length) {
      break;
    }
    
    // Longer delay between batches
    if (i + batchSize < needingSources.length) {
      console.log('\n⏱️  Waiting 30 seconds between batches...');
      await new Promise(resolve => setTimeout(resolve, 30000));
    }
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log('🎉 ALL BATCHES COMPLETE!');
  console.log(`${'='.repeat(60)}`);
  console.log(`📊 Final Summary:`);
  console.log(`   Total listings processed: ${totalProcessed}`);
  console.log(`   Auto-approved sources added: ${totalAutoApproved}`);
  console.log(`   Sources queued for review: ${totalReviewQueue}`);
  
  // Show some stats about what was found
  const updatedAuditData = JSON.parse(fs.readFileSync('./audit-data.json', 'utf8'));
  const withSources = updatedAuditData.filter(listing => 
    listing.sources && listing.sources.length > 0
  ).length;
  
  console.log(`   Listings now with sources: ${withSources}`);
  
  const candidates = JSON.parse(fs.readFileSync('./source-candidates.json', 'utf8'));
  console.log(`   Candidates for manual review: ${candidates.candidates.length}`);
  
  // Show breakdown of auto-approved domains
  console.log('\n📈 Auto-approved source breakdown:');
  const domainCounts = {};
  updatedAuditData.forEach(listing => {
    if (listing.sources) {
      listing.sources.forEach(source => {
        try {
          const domain = new URL(source.url).hostname.toLowerCase();
          domainCounts[domain] = (domainCounts[domain] || 0) + 1;
        } catch (e) {}
      });
    }
  });
  
  Object.entries(domainCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([domain, count]) => {
      console.log(`   ${domain}: ${count}`);
    });
  
  console.log('\n🎯 Ready for Git commit!');
  return {
    processed: totalProcessed,
    autoApproved: totalAutoApproved,
    reviewQueue: totalReviewQueue
  };
}

module.exports = { setWebSearchFunction, main };

// If run directly (for testing)
if (require.main === module) {
  console.log('❌ This script needs to be called with a web search function');
  console.log('Use the OpenClaw environment to run the search process');
}