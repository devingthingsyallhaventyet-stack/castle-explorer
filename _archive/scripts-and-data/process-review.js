const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('audit-data.json','utf8'));
const sc = JSON.parse(fs.readFileSync('source-candidates.json','utf8'));

const approved = ['Norwich Castle','Castle Rising','Corfe Castle','Kelburn Castle','Temple Newsam','Durham Cathedral','York City Walls',"Chetham's Library"];
const rejected = ['Tutbury Castle','Hanbury Hall','St Fagans Castle'];
const all = [...approved, ...rejected];

const scMap = {};
sc.candidates.forEach(c => { scMap[c.name] = c; });

approved.forEach(name => {
  const listing = audit.find(d => d.name === name);
  const cand = scMap[name];
  if (!listing || !cand) { console.log('SKIP:', name); return; }
  if (!listing.sources) listing.sources = [];
  if (!listing.verifiedSources) listing.verifiedSources = [];
  const entry = { label: cand.candidateLabel || 'Official Website', url: cand.candidateUrl };
  if (!listing.sources.find(s => s.url === entry.url)) listing.sources.push(entry);
  if (!listing.verifiedSources.find(s => s.url === entry.url)) listing.verifiedSources.push(entry);
  console.log('Approved:', name);
});
rejected.forEach(name => console.log('Rejected:', name));

const removeSet = new Set(all);
sc.candidates = sc.candidates.filter(c => !removeSet.has(c.name));
console.log('Remaining:', sc.candidates.length);
fs.writeFileSync('audit-data.json', JSON.stringify(audit, null, 2));
fs.writeFileSync('source-candidates.json', JSON.stringify(sc, null, 2));
