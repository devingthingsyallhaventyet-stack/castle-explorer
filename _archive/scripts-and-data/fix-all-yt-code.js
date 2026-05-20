const fs = require('fs');

const pages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','canterbury-cathedral','cardiff-castle','castle-howard',
  'chatsworth-house','conwy-castle','corfe-castle','dover-castle',
  'dunnottar-castle','durham-cathedral','edinburgh-castle','eilean-donan-castle',
  'fountains-abbey','hampton-court-palace','kilkenny-castle','leeds-castle',
  'rock-of-cashel','stirling-castle','tower-of-london','warwick-castle',
  'windsor-castle'
];

const YT_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

let fixed = 0;
for (const slug of pages) {
  let h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  
  // Extract the search query from the existing code
  const qMatch = h.match(/q=([A-Za-z0-9%+]+)/);
  const query = qMatch ? qMatch[1] : encodeURIComponent(slug.replace(/-/g, ' ') + ' drone cinematic');
  
  // Find the YT block: starts with "const YT_KEY" or "var YT_KEY", ends before "const GP_KEY" or "var GP_KEY" or next section
  const ytStart = h.indexOf("const YT_KEY=") !== -1 ? h.indexOf("const YT_KEY=") : h.indexOf("var YT_KEY=");
  const gpStart = h.indexOf("const GP_KEY=") !== -1 ? h.indexOf("const GP_KEY=") : h.indexOf("var GP_KEY=");
  
  if (ytStart === -1 || gpStart === -1) {
    console.log('⚠️ ' + slug + ': Could not find YT/GP boundaries');
    continue;
  }
  
  const oldBlock = h.substring(ytStart, gpStart);
  
  const newBlock = `var YT_KEY='${YT_KEY}';
fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&videoDuration=medium&relevanceLanguage=en&maxResults=3&key='+YT_KEY)
.then(function(r){return r.json()}).then(function(d){
  var grid=document.getElementById('ytGrid');
  if(!d.items||!d.items.length){grid.innerHTML='<p class="terrain-note">No videos available.</p>';return}
  grid.innerHTML=d.items.map(function(v){return '<iframe src="https://www.youtube.com/embed/'+v.id.videoId+'" allowfullscreen loading="lazy"></iframe>'}).join('');
}).catch(function(){document.getElementById('ytGrid').innerHTML='<p class="terrain-note">Videos unavailable.</p>'});

`;
  
  h = h.replace(oldBlock, newBlock);
  fs.writeFileSync('site/' + slug + '.html', h);
  console.log('✅ ' + slug + ' (q=' + decodeURIComponent(query).substring(0, 40) + ')');
  fixed++;
}

console.log('\nFixed ' + fixed + '/' + pages.length);
