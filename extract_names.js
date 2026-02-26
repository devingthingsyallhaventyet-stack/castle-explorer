const fs = require('fs');
const d = fs.readFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castles/data.js', 'utf8');
const m = [...d.matchAll(/name: "([^"]+)"/g)].map(x => x[1]);
fs.writeFileSync('C:/Users/Clawzisabot/.openclaw/workspace/castles/existing_names.txt', m.join('\n'));
console.log(m.length);
