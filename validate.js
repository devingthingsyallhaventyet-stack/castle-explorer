const d = require('fs').readFileSync('data.js', 'utf8');
// data.js starts with "const CASTLES = [..."
// Use Function to eval in its own scope
const fn = new Function(d + '; return CASTLES;');
const CASTLES = fn();
console.log('Valid JS, CASTLES count:', CASTLES.length);
const updated = CASTLES.filter(c => c.youtube);
console.log('With youtube:', updated.length);
const withSrc = CASTLES.filter(c => c.sources);
console.log('With sources:', withSrc.length);
// Spot check
const cal = CASTLES.find(c => c.name === 'Caldicot Castle');
console.log('Caldicot youtube:', cal.youtube);
console.log('Caldicot sources:', cal.sources.map(s => s.name));
