const fs = require('fs');
const { isAutoApproveDomain, getLabelFromUrl, candidates, processed, saveProgress, addCandidate } = require('./search-sources');

// This will be populated by the calling script
let webSearchFunction = null;
let auditData = null;
let needingSources = null;

function setDependencies(searchFn, audit, needing) {
  webSearchFunction = searchFn;
  auditData = audit;
  needingSources = needing;
}

async function searchForSources(listing) {
  console.log(`\n🔍 Searching for: ${listing.name} (${listing.country})`);
  
  const searchQueries = [
    `"${listing.name}" official website ${listing.country}`,
    `"${listing.name}" ${listing.country}`,
    `"${listing.name}" heritage site`
  ];
  
  let sources = [];
  
  for (const query of searchQueries) {
    try {
      console.log(`   Query: ${query}`);
      const results = await webSearchFunction({ query, count: 5 });
      
      if (results?.results) {
        for (const result of results.results) {
          const url = result.url;
          const title = result.title;
          
          if (isAutoApproveDomain(url)) {
            console.log(`   ✅ AUTO-APPROVE: ${url}`);
            const label = getLabelFromUrl(url, title);
            sources.push({ url, label, type: 'auto-approve' });
            break; // Found a heritage org, prefer this
          } else {
            // Check if it's a potential private website
            if (url.includes(listing.name.toLowerCase().replace(/\s+/g, '')) || 
                title.toLowerCase().includes(listing.name.toLowerCase())) {
              console.log(`   📝 REVIEW NEEDED: ${url}`);
              
              // Determine reason
              let reason = 'Unknown website type';
              if (url.includes('hotel') || url.includes('accommodation')) {
                reason = 'Hotel/accommodation website';
              } else if (url.includes(listing.name.toLowerCase().replace(/\s+/g, ''))) {
                reason = 'Private castle website';
              } else {
                reason = 'Potential official/local organization';
              }
              
              sources.push({ url, label: title, type: 'review', reason });
            }
          }
        }
      }
      
      if (sources.some(s => s.type === 'auto-approve')) {
        break; // Found heritage org, no need to search more
      }
    } catch (error) {
      console.log(`   ❌ Search error: ${error.message}`);
    }
    
    // Small delay between searches
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return sources;
}

function updateAuditData(listing, sources) {
  const auditIndex = auditData.findIndex(item => 
    item.name === listing.name && item.country === listing.country
  );
  
  if (auditIndex === -1) {
    console.log(`   ⚠️  Could not find listing in audit data: ${listing.name}`);
    return;
  }
  
  const autoApproved = sources.filter(s => s.type === 'auto-approve');
  
  if (autoApproved.length > 0) {
    // Initialize arrays if they don't exist
    if (!auditData[auditIndex].sources) {
      auditData[auditIndex].sources = [];
    }
    if (!auditData[auditIndex].verifiedSources) {
      auditData[auditIndex].verifiedSources = [];
    }
    
    // Add auto-approved sources to both arrays
    for (const source of autoApproved) {
      const sourceObj = { label: source.label, url: source.url };
      auditData[auditIndex].sources.push(sourceObj);
      auditData[auditIndex].verifiedSources.push(sourceObj);
      console.log(`   ✅ Added to audit-data: ${source.label}`);
    }
  }
  
  // Add review-needed sources to candidates
  const reviewNeeded = sources.filter(s => s.type === 'review');
  for (const source of reviewNeeded) {
    addCandidate(listing.name, source.url, source.label, source.reason);
    console.log(`   📝 Added to review queue: ${source.label}`);
  }
}

async function processBatch(startIndex, batchSize) {
  console.log(`\n🚀 Processing batch: ${startIndex + 1} to ${Math.min(startIndex + batchSize, needingSources.length)}`);
  
  const batch = needingSources.slice(startIndex, startIndex + batchSize);
  let processedCount = 0;
  let autoApprovedCount = 0;
  let reviewQueueCount = 0;
  
  for (const listing of batch) {
    // Skip if already processed
    const listingKey = `${listing.name}|${listing.country}`;
    if (processed.has(listingKey)) {
      console.log(`⏭️  Skipping already processed: ${listing.name}`);
      continue;
    }
    
    const sources = await searchForSources(listing);
    
    if (sources.length > 0) {
      updateAuditData(listing, sources);
      
      const autoCount = sources.filter(s => s.type === 'auto-approve').length;
      const reviewCount = sources.filter(s => s.type === 'review').length;
      
      autoApprovedCount += autoCount;
      reviewQueueCount += reviewCount;
      
      console.log(`   📊 Found: ${autoCount} auto-approved, ${reviewCount} for review`);
    } else {
      console.log(`   🔍 No sources found for ${listing.name}`);
    }
    
    // Mark as processed
    processed.add(listingKey);
    processedCount++;
    
    // Save progress every 5 listings
    if (processedCount % 5 === 0) {
      saveProgress();
      console.log(`   💾 Progress saved (${processedCount}/${batch.length})`);
    }
    
    // Delay between listings to be respectful to search API
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Final save for this batch
  saveProgress();
  fs.writeFileSync('./audit-data.json', JSON.stringify(auditData, null, 2));
  
  console.log(`\n✅ Batch complete!`);
  console.log(`   Processed: ${processedCount} listings`);
  console.log(`   Auto-approved sources: ${autoApprovedCount}`);
  console.log(`   Review queue additions: ${reviewQueueCount}`);
  console.log(`   Total candidates for review: ${candidates.candidates.length}`);
  
  return {
    processedCount,
    autoApprovedCount,
    reviewQueueCount
  };
}

module.exports = {
  setDependencies,
  processBatch
};