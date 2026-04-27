const fs = require('fs');

// Load decisions from file
const decisions = JSON.parse(fs.readFileSync(process.argv[2] || 'C:\\Users\\Clawzisabot\\.openclaw\\media\\inbound\\file_391---0b3f9e5f-35ba-45ed-ad7f-93e684f3badb.txt', 'utf8'));
const auditData = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));

const decisionMap = {};
decisions.decisions.forEach(d => { decisionMap[d.name] = d; });

const flaggedSet = new Set(decisions.flagged || []);

let mainUpdated = 0, rejected = 0, flagged = 0, notFound = [];

auditData.forEach(entry => {
  // Handle flagged listings
  if (flaggedSet.has(entry.name) && entry.reviewStatus === 'approved') {
    entry.reviewStatus = 'flagged';
    entry.reviewReasons = ['flagged-during-image-review'];
    flagged++;
  }

  // Handle image decisions
  const dec = decisionMap[entry.name];
  if (!dec) return;

  if (dec.main) {
    entry.image = dec.main;
    entry.mainImageSource = dec.mainSource || 'google';
    mainUpdated++;
  }

  if (dec.rejected && dec.rejected.length) {
    // Remove rejected images from gallery
    if (entry.gallery) {
      entry.gallery = entry.gallery.filter(url => !dec.rejected.includes(url));
    }
    // Track rejected count
    rejected += dec.rejected.length;
  }

  entry.imageReviewDone = true;
});

// Check for decisions that didn't match
decisions.decisions.forEach(d => {
  if (!auditData.find(e => e.name === d.name)) notFound.push(d.name);
});

fs.writeFileSync('audit-data.json', JSON.stringify(auditData, null, 2));

console.log(`\n✅ Applied image decisions:`);
console.log(`   ${decisions.decisions.length} listings reviewed`);
console.log(`   ${mainUpdated} main images updated`);
console.log(`   ${rejected} images rejected`);
console.log(`   ${flagged} listings moved to flagged`);
if (notFound.length) console.log(`   ⚠️ Not found in data: ${notFound.join(', ')}`);

// Summary of flagged
if (flaggedSet.size) {
  console.log(`\n🚩 Flagged listings (${flaggedSet.size}):`);
  [...flaggedSet].forEach(name => console.log(`   - ${name}`));
}
