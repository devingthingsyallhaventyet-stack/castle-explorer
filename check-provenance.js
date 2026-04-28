const fs=require('fs');
const raw=fs.readFileSync('data-scotland.js','utf8');
const names=['Fraoch Eilean','Claig','Heylipol','Toward Castle','Ardchonnel','Sadell','Kilmartin Church'];
names.forEach(n=>{
  console.log(n,'in original data-scotland.js:', raw.includes(n));
});
console.log();

const batch=JSON.parse(fs.readFileSync('enrichment-batch-scotland.json','utf8'));
const flagged=['Fraoch Eilean Castle','Claig Castle','Castle Loch Heylipol','Toward Castle','Ardchonnel Castle','Sadell Castle','Kilmartin Church'];
flagged.forEach(n=>{
  console.log(n,'in enrichment batch:', batch.includes(n));
});
console.log();

// Count originals vs current
const origNames=raw.match(/"name":"[^"]+"/g)||[];
const current=JSON.parse(fs.readFileSync('audit-data.json','utf8')).filter(x=>x.country==='scotland');
console.log('Original data-scotland.js entries:', origNames.length);
console.log('Current scotland entries:', current.length);
console.log('Difference:', current.length - origNames.length);
console.log();

// Check enrichment output for hallucination signs
const enrichOut=JSON.parse(fs.readFileSync('enrichment-output-scotland.json','utf8'));
console.log('Enrichment output entries:', enrichOut.length);
console.log('Enrichment batch entries:', batch.length);

// Are the flagged ones in enrichment output?
flagged.forEach(n=>{
  const found=enrichOut.find(x=>x.name===n);
  console.log(n,'in enrichment output:', !!found);
});
