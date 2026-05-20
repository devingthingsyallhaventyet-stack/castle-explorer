// This script will be populated with base64 chunks from browser
// Run after setting process.env.B64_DATA
const fs = require('fs');
const b64 = process.argv[2];
const outFile = process.argv[3];
fs.writeFileSync(outFile, Buffer.from(b64, 'base64'));
console.log('Written', fs.statSync(outFile).size, 'bytes to', outFile);
