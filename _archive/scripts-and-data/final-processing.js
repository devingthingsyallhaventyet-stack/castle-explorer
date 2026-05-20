const fs = require('fs');

// Load remaining castles
const filteredCastles = JSON.parse(fs.readFileSync('filtered-castles.json', 'utf8'));
const remainingCastles = filteredCastles.slice(24);

console.log(`Final processing approach for ${remainingCastles.length} remaining castles...`);

// Categorize by country and likely source types
const scottishCastles = remainingCastles.filter(c => c.country === 'scotland');
const englishCastles = remainingCastles.filter(c => c.country === 'england');
const welshCastles = remainingCastles.filter(c => c.country === 'wales');
const irishCastles = remainingCastles.filter(c => c.country === 'ireland' || c.country === 'northern-ireland');

console.log(`\n📊 Remaining Castle Distribution:`);
console.log(`   Scottish: ${scottishCastles.length}`);
console.log(`   English: ${englishCastles.length}`);
console.log(`   Welsh: ${welshCastles.length}`);
console.log(`   Irish: ${irishCastles.length}`);

// Create summary for efficient processing
console.log(`\n🏗️  Processing Strategy:`);
console.log(`1. Scottish castles: Search "NAME historicenvironment.scot OR trove.scot OR canmore.org.uk"`);
console.log(`2. English castles: Search "NAME english-heritage.org.uk OR nationaltrust.org.uk"`);
console.log(`3. Welsh castles: Search "NAME cadw.gov.wales OR visitwales.com"`);
console.log(`4. Irish castles: Search "NAME heritageireland.ie OR opw.ie OR visitireland.com"`);

// Output priority batches for rapid processing
console.log(`\n🎯 Priority Batch 1 - Scottish Castles (Likely HES):`);
scottishCastles.slice(0, 20).forEach((castle, i) => {
  console.log(`${i+25}. ${castle.name} - "${castle.name} historicenvironment.scot"`);
});

console.log(`\n🎯 Priority Batch 2 - English Castles (Likely EH/NT):`);
englishCastles.slice(0, 10).forEach((castle, i) => {
  console.log(`${i+45}. ${castle.name} - "${castle.name} english-heritage.org.uk OR nationaltrust.org.uk"`);
});

console.log(`\n🎯 Priority Batch 3 - Welsh Castles (Likely Cadw):`);
welshCastles.slice(0, 10).forEach((castle, i) => {
  console.log(`${i+55}. ${castle.name} - "${castle.name} cadw.gov.wales"`);
});

// Create a summary statistics
const totalRemaining = remainingCastles.length;
const estimatedAutoApprove = Math.floor(totalRemaining * 0.6); // Conservative estimate based on patterns
const estimatedReview = Math.floor(totalRemaining * 0.2);
const estimatedNoSource = totalRemaining - estimatedAutoApprove - estimatedReview;

console.log(`\n📈 Estimated Completion:`);
console.log(`   Auto-approve candidates: ~${estimatedAutoApprove} castles`);
console.log(`   Review candidates: ~${estimatedReview} castles`);  
console.log(`   No online presence: ~${estimatedNoSource} castles`);
console.log(`   Current completion: 24/202 (11.9%)`);
console.log(`   Target: 202/202 (100%)`);

// Save priority lists for batch processing
fs.writeFileSync('priority-scottish.json', JSON.stringify(scottishCastles.slice(0, 20), null, 2));
fs.writeFileSync('priority-english.json', JSON.stringify(englishCastles.slice(0, 10), null, 2));
fs.writeFileSync('priority-welsh.json', JSON.stringify(welshCastles.slice(0, 10), null, 2));

console.log(`\n✅ Priority lists saved for batch processing`);