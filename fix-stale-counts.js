const fs = require('fs');

// Fix highlands.html stale counts (81 → 74)
let h = fs.readFileSync('scotland/highlands.html', 'utf8');
h = h.replace('Explore 81 castles', 'Explore 74 castles');
h = h.replace('"81 castles, ruins', '"74 castles, ruins');
h = h.replace('"description":"81 castles', '"description":"74 castles');
h = h.replace('over 80 castles, ruins, abbeys, and historic sites', 'over 70 castles, ruins, abbeys, and historic sites');
h = h.replace('The exact count on CastleCore is <span id="faqCount">81</span>', 'The exact count on CastleCore is <span id="faqCount">74</span>');
h = h.replace('Nearly half of Highland castle sites (47 out of 81)', 'Many Highland castle sites');
// Also fix the structured data FAQ
h = h.replace('"Nearly half of Highland castle sites (47 out of 81) are completely free to visit.', '"Many Highland castle sites are completely free to visit.');
fs.writeFileSync('scotland/highlands.html', h, 'utf8');
console.log('highlands.html: fixed');

// Fix borders.html meta (31 → 30)
let b = fs.readFileSync('scotland/borders.html', 'utf8');
b = b.replace('Explore 31 castles', 'Explore 30 castles');
b = b.replace('"31 castles', '"30 castles');
b = b.replace('"description":"31 castles', '"description":"30 castles');
fs.writeFileSync('scotland/borders.html', b, 'utf8');
console.log('borders.html: fixed');
