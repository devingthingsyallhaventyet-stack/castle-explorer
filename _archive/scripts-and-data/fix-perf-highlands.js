const fs = require('fs');
const path = require('path');
let html = fs.readFileSync(path.join(__dirname, 'scotland', 'highlands.html'), 'utf8');

// 1. Add preconnect for img.castlecore.uk and fonts
html = html.replace(
  '<link rel="icon" href="/favicon.ico" type="image/x-icon">',
  '<link rel="preconnect" href="https://img.castlecore.uk" crossorigin>\n<link rel="preconnect" href="https://upload.wikimedia.org" crossorigin>\n<link rel="dns-prefetch" href="https://img.castlecore.uk">\n<link rel="icon" href="/favicon.ico" type="image/x-icon">'
);

// 2. Add fetchpriority="high" and dimensions to hero image
html = html.replace(
  'alt="Highlands & Northern Isles landscape" loading="eager"',
  'alt="Highlands & Northern Isles landscape" loading="eager" fetchpriority="high" width="1920" height="1080" decoding="async"'
);

// 3. Make data.js defer so it doesn't block rendering
html = html.replace(
  '<script src="/data.js"></script>',
  '<script src="/data.js" defer></script>'
);

// 4. Add decoding="async" to route card images
html = html.replace(
  /loading="lazy"(?!.*decoding)/g,
  'loading="lazy" decoding="async"'
);

// 5. Add width/height to route card images to prevent CLS
html = html.replace(
  /<div class="route-img"><img src="([^"]+)" alt="([^"]+)" loading="lazy" decoding="async"><\/div>/g,
  '<div class="route-img"><img src="$1" alt="$2" loading="lazy" decoding="async" width="400" height="200"></div>'
);

// 6. Wrap the main script in DOMContentLoaded since data.js is now deferred
// Actually, defer scripts execute in order, so our inline script after data.js should still work
// But we need to make the inline script also deferred — we can't defer inline scripts
// Better approach: move the inline script logic to wait for data.js
// Since defer preserves order and inline scripts execute immediately, 
// we need to ensure data.js loads before our inline script runs.
// Solution: wrap inline script body in a load listener for data.js

// Actually the simplest fix: don't defer data.js, instead use async + a load callback
// OR: keep defer on data.js and move the inline script into an external file
// For now, let's use a DOMContentLoaded wrapper + check for CASTLES

// Find the inline script start
const scriptStart = html.indexOf('<script>\n(function(){');
const scriptEnd = html.indexOf('})();\n</script>', scriptStart);

if (scriptStart !== -1 && scriptEnd !== -1) {
  const inlineScript = html.substring(scriptStart, scriptEnd + '})();\n</script>'.length);
  const scriptBody = html.substring(scriptStart + '<script>\n'.length, scriptEnd + '})();'.length);
  
  // Wrap in a function that waits for CASTLES to be defined
  const wrappedScript = `<script>
function initRegion(){
${scriptBody}
}
if(typeof CASTLES!=='undefined'){initRegion()}
else{document.addEventListener('DOMContentLoaded',function(){
  var check=setInterval(function(){if(typeof CASTLES!=='undefined'){clearInterval(check);initRegion()}},50);
  setTimeout(function(){clearInterval(check)},10000);
});}</script>`;
  
  html = html.replace(inlineScript, wrappedScript);
}

fs.writeFileSync(path.join(__dirname, 'scotland', 'highlands.html'), html, 'utf8');
console.log('Performance fixes applied');
console.log('File size:', (Buffer.byteLength(html) / 1024).toFixed(1) + 'KB');
