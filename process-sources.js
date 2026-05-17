const fs = require('fs');

// Auto-approve domains
const autoApproveDomains = [
  'nationaltrust.org.uk',
  'english-heritage.org.uk',
  'historicenvironment.scot',
  'canmore.org.uk',
  'cadw.gov.wales',
  'heritageireland.ie',
  'opw.ie',
  'nts.org.uk',
  'hrp.org.uk',
  'rct.uk',
  'visitscotland.com',
  'visitwales.com',
  'visitengland.com',
  'visitireland.com',
  'discoverireland.ie',
  'britainexpress.com',
  'historicengland.org.uk'
];

function isAutoApproveDomain(url) {
  try {
    const domain = new URL(url).hostname.toLowerCase();
    
    // Check specific heritage domains
    if (autoApproveDomains.some(d => domain === d || domain === `www.${d}`)) {
      return true;
    }
    
    // Check government domains
    if (domain.endsWith('.gov.uk') || domain.endsWith('.gov.ie')) {
      return true;
    }
    
    return false;
  } catch (e) {
    return false;
  }
}

function getLabelFromUrl(url) {
  try {
    const domain = new URL(url).hostname.toLowerCase();
    
    // Map specific domains to labels
    const domainLabels = {
      'heritageireland.ie': 'Heritage Ireland',
      'opw.ie': 'Office of Public Works',
      'nationaltrust.org.uk': 'National Trust',
      'english-heritage.org.uk': 'English Heritage',
      'historicenvironment.scot': 'Historic Environment Scotland',
      'cadw.gov.wales': 'Cadw',
      'nts.org.uk': 'National Trust for Scotland',
      'hrp.org.uk': 'Historic Royal Palaces',
      'visitscotland.com': 'VisitScotland',
      'visitwales.com': 'Visit Wales',
      'visitengland.com': 'VisitEngland',
      'visitireland.com': 'Visit Ireland'
    };
    
    const matchedDomain = Object.keys(domainLabels).find(d => 
      domain === d || domain === `www.${d}`
    );
    
    if (matchedDomain) {
      return domainLabels[matchedDomain];
    }
    
    // For government domains
    if (domain.endsWith('.gov.uk') || domain.endsWith('.gov.ie')) {
      return 'Government Site';
    }
    
    return domain.replace('www.', '');
  } catch (e) {
    return 'Official Site';
  }
}

function updateListingSource(listingName, country, url, label) {
  // Load audit data
  const auditData = JSON.parse(fs.readFileSync('./audit-data.json', 'utf8'));
  
  // Find the listing
  const listingIndex = auditData.findIndex(item => 
    item.name === listingName && item.country === country
  );
  
  if (listingIndex === -1) {
    console.log(`❌ Could not find listing: ${listingName} (${country})`);
    return false;
  }
  
  // Initialize arrays if they don't exist
  if (!auditData[listingIndex].sources) {
    auditData[listingIndex].sources = [];
  }
  if (!auditData[listingIndex].verifiedSources) {
    auditData[listingIndex].verifiedSources = [];
  }
  
  // Add to both arrays
  const sourceObj = { label, url };
  auditData[listingIndex].sources.push(sourceObj);
  auditData[listingIndex].verifiedSources.push(sourceObj);
  
  // Save back to file
  fs.writeFileSync('./audit-data.json', JSON.stringify(auditData, null, 2));
  
  console.log(`✅ Added source to ${listingName}: ${label} - ${url}`);
  return true;
}

function addToReviewQueue(listingName, url, label, reason) {
  // Load or create source candidates
  let candidates = { candidates: [] };
  if (fs.existsSync('./source-candidates.json')) {
    candidates = JSON.parse(fs.readFileSync('./source-candidates.json', 'utf8'));
  }
  
  candidates.candidates.push({
    name: listingName,
    candidateUrl: url,
    candidateLabel: label,
    reason,
    status: 'pending'
  });
  
  fs.writeFileSync('./source-candidates.json', JSON.stringify(candidates, null, 2));
  console.log(`📝 Added to review queue: ${listingName} - ${label}`);
}

// Process Newgrange Cursus with Heritage Ireland source
console.log('🏰 Processing Newgrange Cursus...');
const url = 'https://heritageireland.ie/places-to-visit/bru-na-boinne-visitor-centre-newgrange-knowth-and-dowth/';

if (isAutoApproveDomain(url)) {
  const label = getLabelFromUrl(url);
  updateListingSource('Newgrange Cursus', 'ireland', url, label);
} else {
  console.log('❌ Not an auto-approved domain');
}

module.exports = {
  isAutoApproveDomain,
  getLabelFromUrl,
  updateListingSource,
  addToReviewQueue
};