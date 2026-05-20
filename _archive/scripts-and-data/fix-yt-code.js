const fs = require('fs');

let h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');

// The template literal code was broken - need to restore it
// Replace the broken fetch with proper concatenation (no template literals)
const oldFetch = `fetch(\`https://www.googleapis.com/youtube/v3/search?part=snippet&q=Edinburgh%20Castle%20drone%20cinematic&type=video&videoDuration=medium&relevanceLanguage=en&maxResults=3&key=\`)`;
const newFetch = `fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Edinburgh%20Castle%20drone%20cinematic&type=video&videoDuration=medium&relevanceLanguage=en&maxResults=3&key='+YT_KEY)`;

h = h.replace(oldFetch, newFetch);

// Fix the broken embed URL template literal
h = h.replace(
  /grid\.innerHTML=d\.items\.map\(v=>`<iframe src="https:\/\/www\.youtube\.com\/embed\/" allow/,
  `grid.innerHTML=d.items.map(function(v){return '<iframe src="https://www.youtube.com/embed/'+v.id.videoId+'" allow`
);

// Also need to fix the closing of the map
// Let's look at what's after the embed
const embedIdx = h.indexOf('youtube.com/embed/');
console.log('Context around embed:');
console.log(h.substring(embedIdx - 20, embedIdx + 400));

fs.writeFileSync('site/edinburgh-castle.html', h);
console.log('\nWrote partial fix');
