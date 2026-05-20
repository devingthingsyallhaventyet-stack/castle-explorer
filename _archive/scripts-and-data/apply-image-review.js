const fs = require('fs');
const data = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
const review = JSON.parse(fs.readFileSync('review-batch1.json', 'utf8'));

const nameMap = new Map();
data.forEach((d, i) => nameMap.set(d.name, i));

let updated = 0, notFound = 0, mainSet = 0, flaggedEnrich = 0;

for (const dec of review.decisions) {
  const idx = nameMap.get(dec.name);
  if (idx === undefined) { notFound++; console.log('NOT FOUND:', dec.name); continue; }
  const entry = data[idx];
  
  // Mark as image-reviewed
  entry.imageReviewDone = true;
  
  if (dec.main) {
    // Set the chosen main image
    entry.image = dec.main;
    entry.imageSource = dec.mainSource || 'google';
    mainSet++;
  } else if (dec.rejected && dec.rejected.length > 0) {
    // All images rejected — flag for enrichment
    entry.needsEnrich = true;
    entry.enrichReason = (entry.enrichReason || '') + (entry.enrichReason ? '; ' : '') + 'all images rejected';
    flaggedEnrich++;
  }
  // else: no images available at all, just mark reviewed
  
  updated++;
}

fs.writeFileSync('audit-data.json', JSON.stringify(data, null, 2));
console.log(`Done! ${updated} updated, ${mainSet} main images set, ${flaggedEnrich} flagged for enrich, ${notFound} not found`);
console.log(`Total entries: ${data.length}`);
console.log(`Approved with images: ${data.filter(d => d.reviewStatus === 'approved' && d.image).length}`);
