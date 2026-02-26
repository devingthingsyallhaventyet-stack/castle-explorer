const fs = require('fs');
const c = fs.readFileSync('existing.txt','utf8').split('\n').map(s=>s.trim().toLowerCase());
const set = new Set(c);
const check = [
  'Barcaldine Castle','Iona Abbey','Inchcolm Abbey','Balmerino Abbey','Braemar Castle',
  'Midmar Castle','Aboyne Castle','Invergarry Castle','Castle Coeffin','Balvaird Castle',
  'Castle Menzies','Drummond Castle','Hawick Castle','Kirkwall Castle','Birsay Palace',
  'Cubbie Roos Castle','Harthill Castle','Pitfichie Castle','Tillycairn Castle',
  'Knock Castle','Corse Castle','Balfluig Castle','Doune Castle'
];
check.forEach(n => console.log(set.has(n.toLowerCase()) ? 'EXISTS' : 'MISSING', n));
