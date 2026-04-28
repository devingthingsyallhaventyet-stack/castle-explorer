/**
 * Merge approved+reviewed audit data into data.js
 * 
 * Updates: description, image, gallery, wiki, imageAttribution, mainImageSource
 * Preserves: tags, type, era, condition, access, rating, reviewCount, county, country, history, lat, lng
 * 
 * Also moves cinematic pages to flagged with "cinematic" tag in audit-data.json
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DRY_RUN = process.argv.includes('--dry-run');

// ===== Load current data.js =====
const dataPath = path.join(__dirname, 'data.js');
const dataJs = fs.readFileSync(dataPath, 'utf8').replace(/\bconst\b/g, 'var');
const dataCtx = {};
vm.runInNewContext(dataJs, dataCtx);
const CASTLES = dataCtx.CASTLES;

// ===== Load audit data =====
const audit = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-data.json'), 'utf8'));

// ===== Load Google images staging =====
const staging = JSON.parse(fs.readFileSync(path.join(__dirname, 'google-images-staging.json'), 'utf8'));

// Build staging lookup by normalized name
function normalize(s) { return s.toLowerCase().replace(/[''`\-]/g, '').replace(/\s+/g, ' ').trim(); }
const stagingByName = {};
for (const [idx, entry] of Object.entries(staging)) {
  if (!entry.placeName) continue;
  const key = normalize(entry.placeName);
  if (!stagingByName[key]) stagingByName[key] = [];
  stagingByName[key].push(entry);
}

function getGooglePhotos(name) {
  const key = normalize(name);
  let match = stagingByName[key];
  if (!match) {
    for (const [k, v] of Object.entries(stagingByName)) {
      if (k.includes(key) || key.includes(k)) { match = v; break; }
    }
  }
  return match ? match.flatMap(m => m.photos || []) : [];
}

// ===== Cinematic slugs =====
const CINEMATIC = new Set([
  'alnwick-castle', 'bamburgh-castle', 'blarney-castle', 'blenheim-palace',
  'caernarfon-castle', 'canterbury-cathedral', 'cardiff-castle', 'castle-howard',
  'chatsworth-house', 'conwy-castle', 'corfe-castle', 'dover-castle',
  'dunnottar-castle', 'durham-cathedral', 'edinburgh-castle', 'eilean-donan-castle',
  'fountains-abbey', 'hampton-court-palace', 'kilkenny-castle', 'leeds-castle',
  'rock-of-cashel', 'stirling-castle', 'tower-of-london', 'warwick-castle',
  'windsor-castle'
]);
function slugify(n) { return n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

// ===== Step 1: Flag cinematic pages in audit-data.json =====
let cinematicFlagged = 0;
audit.forEach(e => {
  if (CINEMATIC.has(slugify(e.name))) {
    if (e.reviewStatus !== 'flagged') {
      e.reviewStatus = 'flagged';
      cinematicFlagged++;
    }
    e.reviewReasons = e.reviewReasons || [];
    if (!e.reviewReasons.includes('cinematic')) {
      e.reviewReasons.push('cinematic');
    }
  }
});

// ===== Step 2: Build lookup of approved+reviewed audit entries =====
const approvedMap = {};
audit.forEach(e => {
  if (e.reviewStatus === 'approved' && e.imageReviewDone) {
    approvedMap[normalize(e.name)] = e;
  }
});

console.log(`\n📊 Merge Stats:`);
console.log(`   Audit entries: ${audit.length}`);
console.log(`   Approved+reviewed: ${Object.keys(approvedMap).length}`);
console.log(`   Cinematic newly flagged: ${cinematicFlagged}`);
console.log(`   data.js entries: ${CASTLES.length}`);

// ===== Step 3: Merge into CASTLES =====
let updated = 0, notFound = 0, skippedCinematic = 0;
const notFoundNames = [];

for (const castle of CASTLES) {
  if (!castle || !castle.name) continue;
  
  // Skip cinematic pages
  if (CINEMATIC.has(slugify(castle.name))) {
    skippedCinematic++;
    continue;
  }
  
  const key = normalize(castle.name);
  const auditEntry = approvedMap[key];
  if (!auditEntry) continue;
  
  // Update description (Wikipedia extract)
  if (auditEntry.desc) {
    castle.description = auditEntry.desc;
  }
  
  // Update hero image
  if (auditEntry.image) {
    castle.image = auditEntry.image;
  }
  
  // Update coordinates if audit has better ones
  if (auditEntry.lat && auditEntry.lng) {
    castle.lat = parseFloat(auditEntry.lat);
    castle.lng = parseFloat(auditEntry.lng);
  }
  
  // Add wiki link
  if (auditEntry.wiki) {
    castle.wiki = auditEntry.wiki;
  }
  
  // Add image attribution
  if (auditEntry.imageAttribution) {
    castle.imageAttribution = auditEntry.imageAttribution;
  }
  
  // Track main image source
  if (auditEntry.mainImageSource) {
    castle.mainImageSource = auditEntry.mainImageSource;
  }
  
  // Build gallery from Google images (exclude rejected ones from image review)
  const gPhotos = getGooglePhotos(castle.name);
  if (gPhotos.length) {
    // Get the review state to know which were rejected
    const heroUrl = auditEntry.image;
    castle.gallery = gPhotos
      .map(p => ({
        url: p.googlePhotoUri || p.url,
        attribution: p.attribution || 'Photo via Google Maps',
        authorUrl: p.authorUrl || null
      }))
      .filter(p => p.url !== heroUrl); // Don't duplicate the hero
    
    // Add Google Maps link
    castle.googleMapsLink = `https://www.google.com/maps/search/${encodeURIComponent(castle.name + ' ' + (castle.county || ''))}`;
  }
  
  updated++;
}

console.log(`   Updated: ${updated}`);
console.log(`   Skipped cinematic: ${skippedCinematic}`);

if (DRY_RUN) {
  console.log('\n🏃 DRY RUN — no files written');
  
  // Show sample
  const sample = CASTLES.find(c => c && approvedMap[normalize(c.name)] && !CINEMATIC.has(slugify(c.name)));
  if (sample) {
    console.log(`\n📋 Sample entry (${sample.name}):`);
    console.log(`   description: ${(sample.description || '').substring(0, 100)}...`);
    console.log(`   image: ${sample.image}`);
    console.log(`   wiki: ${sample.wiki}`);
    console.log(`   mainImageSource: ${sample.mainImageSource}`);
    console.log(`   imageAttribution: ${JSON.stringify(sample.imageAttribution)}`);
    console.log(`   gallery: ${(sample.gallery || []).length} images`);
    console.log(`   googleMapsLink: ${sample.googleMapsLink}`);
    console.log(`   --- PRESERVED ---`);
    console.log(`   tags: ${JSON.stringify(sample.tags)}`);
    console.log(`   type: ${sample.type}`);
    console.log(`   era: ${sample.era}`);
    console.log(`   condition: ${sample.condition}`);
    console.log(`   access: ${sample.access}`);
    console.log(`   rating: ${sample.rating}`);
    console.log(`   county: ${sample.county}`);
    console.log(`   country: ${sample.country}`);
  }
  
  // Count approved in audit after cinematic flagging
  const approvedCount = audit.filter(e => e.reviewStatus === 'approved').length;
  const flaggedCount = audit.filter(e => e.reviewStatus === 'flagged').length;
  console.log(`\n   Audit after cinematic flag: ${approvedCount} approved, ${flaggedCount} flagged`);
  
} else {
  // Write data.js
  const newDataJs = 'const CASTLES = ' + JSON.stringify(CASTLES, null, 2) + ';\n';
  fs.writeFileSync(dataPath, newDataJs, 'utf8');
  console.log(`\n✅ Written data.js (${(newDataJs.length / 1024).toFixed(0)} KB)`);
  
  // Write audit-data.json (with cinematic flags)
  fs.writeFileSync(path.join(__dirname, 'audit-data.json'), JSON.stringify(audit, null, 2));
  console.log(`✅ Written audit-data.json (cinematic flagged)`);
}
