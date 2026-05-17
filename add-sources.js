const fs = require('fs');
const sc = JSON.parse(fs.readFileSync('source-candidates.json','utf8'));

const newCandidates = [
  { name: "Durham Cathedral", candidateUrl: "https://www.durhamcathedral.co.uk/", candidateLabel: "Durham Cathedral Official Website", status: "pending", foundDate: "2026-05-17" },
  { name: "Chetham's Library", candidateUrl: "https://library.chethams.com/", candidateLabel: "Chetham's Library - Oldest Public Library in the English Speaking World", status: "pending", foundDate: "2026-05-17" },
  { name: "York City Walls", candidateUrl: "https://www.yorkwalls.org.uk/", candidateLabel: "Friends of York Walls", status: "pending", foundDate: "2026-05-17" },
  { name: "St Fagans Castle", candidateUrl: "https://museum.wales/stfagans/", candidateLabel: "St Fagans National Museum of History", status: "pending", foundDate: "2026-05-17" },
];

// Avoid dupes
const existing = new Set(sc.candidates.map(c => c.name));
const added = newCandidates.filter(c => !existing.has(c.name));
sc.candidates.push(...added);
console.log('Added:', added.length, 'Total:', sc.candidates.length);
fs.writeFileSync('source-candidates.json', JSON.stringify(sc, null, 2));
