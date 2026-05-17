const all = JSON.parse(require('fs').readFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castle-explorer/audit-data.json','utf8'));
const approved = all.filter(x=>x.reviewStatus==='approved').map(x=>x.name);
const candidates = JSON.parse(require('fs').readFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castle-explorer/source-candidates.json','utf8'));
const found = new Set(candidates.candidates.map(c=>c.name));
// Approximate: batches 1-14 covered first 280 listings
const searchedCount = 280;
const remaining = approved.slice(searchedCount);
console.log('Total approved:', approved.length);
console.log('Already searched (approx):', searchedCount);
console.log('Remaining:', remaining.length);
// Print in groups of 20
for (let i = 0; i < remaining.length; i += 20) {
  console.log('\n--- Batch', Math.floor(i/20)+15, '---');
  console.log(JSON.stringify(remaining.slice(i, i+20)));
}
