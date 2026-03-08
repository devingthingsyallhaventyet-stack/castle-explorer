const fs = require('fs');

let h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');

// Find and replace the entire YT fetch block with a clean version using regular strings
const ytStart = h.indexOf("const YT_KEY=");
const ytEnd = h.indexOf("const GP_KEY=");

if (ytStart > -1 && ytEnd > -1) {
  const oldBlock = h.substring(ytStart, ytEnd);
  console.log('OLD BLOCK:\n' + oldBlock);
  
  const newBlock = `var YT_KEY='AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';
fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Edinburgh%20Castle%20drone%20cinematic&type=video&videoDuration=medium&relevanceLanguage=en&maxResults=3&key='+YT_KEY)
.then(function(r){return r.json()}).then(function(d){
  var grid=document.getElementById('ytGrid');
  if(!d.items||!d.items.length){grid.innerHTML='<p class="terrain-note">No videos available.</p>';return}
  grid.innerHTML=d.items.map(function(v){return '<iframe src="https://www.youtube.com/embed/'+v.id.videoId+'" allowfullscreen loading="lazy"></iframe>'}).join('');
}).catch(function(){document.getElementById('ytGrid').innerHTML='<p class="terrain-note">Videos unavailable.</p>'});

`;
  
  h = h.replace(oldBlock, newBlock);
  fs.writeFileSync('site/edinburgh-castle.html', h);
  console.log('\n✅ Fixed Edinburgh YT code');
} else {
  console.log('Could not find YT block boundaries');
}
