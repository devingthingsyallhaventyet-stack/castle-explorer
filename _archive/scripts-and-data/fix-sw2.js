const fs = require('fs');
let eng = fs.readFileSync('data-england.js', 'utf8');
try {
  const fn = new Function(eng + ';return CASTLES');
  const result = fn();
  console.log(`data-england.js valid: ${result.length} castles`);
  
  // Check fixes applied
  ['Salcombe Castle','Trowbridge Castle'].forEach(n => {
    const c = result.find(x => x.name === n);
    console.log(n, ':', c ? (c.img || 'NO IMG') : 'NOT FOUND');
  });
} catch(e) {
  console.error('VALIDATION FAILED:', e.message);
}
