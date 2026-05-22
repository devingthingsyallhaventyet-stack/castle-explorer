const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'non-whitelisted-links.json'), 'utf8'));

// A link is "probably fine" if the domain clearly relates to the castle name
// A link is "suspicious" if it's generic, a blog, fan site, or unrelated

function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isDedicatedSite(name, domain) {
  const normName = normalize(name);
  const normDomain = normalize(domain);
  
  // Check if castle name (or significant part) appears in domain
  const words = name.toLowerCase().split(/[\s'-]+/).filter(w => w.length > 3);
  const domainMatch = words.some(w => normDomain.includes(normalize(w)));
  
  // Common patterns for dedicated sites
  const dedicatedPatterns = [
    /castle/i, /abbey/i, /priory/i, /cathedral/i, /palace/i,
    /hall\./i, /tower\./i, /fort\./i, /minster/i, /chapel/i,
    /house\./i, /museum/i
  ];
  const hasDedicatedWord = dedicatedPatterns.some(p => p.test(domain));
  
  return domainMatch && hasDedicatedWord;
}

// Generic tourism/county sites (not castle-specific)
const genericDomains = [
  'corkcoco.ie', 'mayo.ie', 'tipperary.com', 'govisitdonegal.com',
  'galwaytourism.ie', 'kilkennyheritage.ie', 'clare.ie', 'visitwaterford.com',
  'visitwexford.ie', 'visitwales.com', 'visitliverpool.com', 'visitcardiff.com',
  'meathtourism.ie', 'louthheritage.ie', 'sligoheritage.ie', 'kerrytourism.ie',
  'roscommon.ie', 'monaghantourism.com', 'thisiscavan.ie', 'visitwicklow.ie',
  'dlrcoco.ie', 'discoverboynevalley.ie', 'connemara.ie', 'slievebloom.ie',
  'visitnewryandmourne.com', 'exploredevon.info', 'ayrshirescotland.com',
  'visitcausewaycoastandglens.com', 'visitmerthyr.co.uk', 'visitanglesey.co.uk',
  'millstreet.ie', 'westmeathheritage.ie', 'clareisland.ie'
];

// Known blog/fan/aggregator sites
const blogFanSites = [
  'crazyaboutcastles.com', 'historic-uk.com', 'theirishaesthete.com',
  'tudortimes.co.uk', 'artfund.org', 'gatehouse-gazetteer.info',
  'shannonheritage.com', 'megalithicireland.com'
];

// Sites where the domain doesn't match the castle at all (unrelated orgs)
const suspicious = [];
const autoOk = [];

for (const link of data) {
  const domain = link.domain;
  
  // Check if it's a known generic/blog site
  if (genericDomains.includes(domain) || blogFanSites.includes(domain)) {
    suspicious.push({...link, reason: genericDomains.includes(domain) ? 'generic-tourism' : 'blog/fan-site'});
    continue;
  }
  
  // Check if domain is clearly a dedicated site for this castle
  if (isDedicatedSite(link.name, domain)) {
    autoOk.push(link);
    continue;
  }
  
  // Check for mismatches - domain doesn't seem related to the castle
  const normName = normalize(link.name);
  const normDomain = normalize(domain);
  const nameWords = link.name.toLowerCase().split(/[\s'-]+/).filter(w => w.length > 3);
  const anyMatch = nameWords.some(w => normDomain.includes(normalize(w)));
  
  if (!anyMatch) {
    // Domain doesn't contain any significant word from castle name - suspicious
    suspicious.push({...link, reason: 'domain-mismatch'});
  } else {
    // Some match found - probably OK
    autoOk.push(link);
  }
}

console.log(`\nResults:`);
console.log(`  Auto-OK (dedicated/matching sites): ${autoOk.length}`);
console.log(`  Needs review (suspicious): ${suspicious.length}`);

console.log(`\n--- SUSPICIOUS LINKS ---`);
const byReason = {};
suspicious.forEach(s => {
  byReason[s.reason] = byReason[s.reason] || [];
  byReason[s.reason].push(s);
});

for (const [reason, items] of Object.entries(byReason)) {
  console.log(`\n  ${reason} (${items.length}):`);
  items.forEach(s => console.log(`    ${s.name} → ${s.domain} (${s.url})`));
}

fs.writeFileSync(path.join(__dirname, 'suspicious-links.json'), JSON.stringify(suspicious, null, 2));
fs.writeFileSync(path.join(__dirname, 'auto-ok-links.json'), JSON.stringify(autoOk, null, 2));
console.log(`\nWrote suspicious-links.json (${suspicious.length}) and auto-ok-links.json (${autoOk.length})`);
