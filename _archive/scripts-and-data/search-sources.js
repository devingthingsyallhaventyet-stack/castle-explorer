const fs = require('fs');

// Auto-approve domains (heritage/government organizations)
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
    
    // Check for heritage/museum/council organizations
    const heritageKeywords = ['heritage', 'museum', 'council', 'historic', 'national-trust'];
    return heritageKeywords.some(keyword => domain.includes(keyword));
  } catch (e) {
    return false;
  }
}

function getLabelFromUrl(url, siteName) {
  try {
    const domain = new URL(url).hostname.toLowerCase();
    
    // Map specific domains to labels
    const domainLabels = {
      'nationaltrust.org.uk': 'National Trust',
      'english-heritage.org.uk': 'English Heritage',
      'historicenvironment.scot': 'Historic Environment Scotland',
      'canmore.org.uk': 'Historic Environment Scotland',
      'cadw.gov.wales': 'Cadw',
      'heritageireland.ie': 'Heritage Ireland',
      'opw.ie': 'Office of Public Works',
      'nts.org.uk': 'National Trust for Scotland',
      'hrp.org.uk': 'Historic Royal Palaces',
      'rct.uk': 'Royal Collection Trust',
      'visitscotland.com': 'VisitScotland',
      'visitwales.com': 'Visit Wales',
      'visitengland.com': 'VisitEngland',
      'visitireland.com': 'Visit Ireland',
      'discoverireland.ie': 'Discover Ireland',
      'britainexpress.com': 'Britain Express',
      'historicengland.org.uk': 'Historic England'
    };
    
    // Return specific label if available
    const matchedDomain = Object.keys(domainLabels).find(d => 
      domain === d || domain === `www.${d}`
    );
    if (matchedDomain) {
      return domainLabels[matchedDomain];
    }
    
    // For government domains
    if (domain.endsWith('.gov.uk') || domain.endsWith('.gov.ie')) {
      return `Government Site`;
    }
    
    // Default fallback
    return siteName || domain.replace('www.', '');
  } catch (e) {
    return siteName || 'Official Site';
  }
}

// Load existing source candidates if available
let candidates = { candidates: [] };
if (fs.existsSync('./source-candidates.json')) {
  candidates = JSON.parse(fs.readFileSync('./source-candidates.json', 'utf8'));
}

// Track processed listings
let processed = new Set();
if (fs.existsSync('./processed-listings.json')) {
  const processedData = JSON.parse(fs.readFileSync('./processed-listings.json', 'utf8'));
  processed = new Set(processedData);
}

module.exports = {
  isAutoApproveDomain,
  getLabelFromUrl,
  candidates,
  processed,
  
  saveProgress: function() {
    // Save candidates
    fs.writeFileSync('./source-candidates.json', JSON.stringify(candidates, null, 2));
    
    // Save processed list
    fs.writeFileSync('./processed-listings.json', JSON.stringify([...processed], null, 2));
  },
  
  addCandidate: function(name, url, label, reason) {
    candidates.candidates.push({
      name,
      candidateUrl: url,
      candidateLabel: label,
      reason,
      status: 'pending'
    });
  }
};

console.log('Search utilities loaded. Auto-approve domains:', autoApproveDomains.length);
console.log('Existing candidates:', candidates.candidates.length);
console.log('Previously processed:', processed.size);