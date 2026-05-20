const fs = require('fs');

// Read and parse the data
const dataContent = fs.readFileSync('data.js', 'utf8');

// Count lines and structure
const lines = dataContent.split('\n');
console.log('Total lines:', lines.length);
console.log('First 10 lines:');
console.log(lines.slice(0, 10).join('\n'));

// Try to extract just the array part
const startIndex = dataContent.indexOf('[');
const endIndex = dataContent.lastIndexOf(']');
if (startIndex !== -1 && endIndex !== -1) {
    const arrayContent = dataContent.substring(startIndex, endIndex + 1);
    try {
        const castles = JSON.parse(arrayContent);
        console.log('\nParsed successfully!');
        console.log('Total castles:', castles.length);
        console.log('First castle:', castles[0]);
    } catch (e) {
        console.log('Parse error:', e.message);
    }
}