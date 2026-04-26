const fs = require('fs');
const path = require('path');
const dir = 'scotland';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  let html = fs.readFileSync(path.join(dir, f), 'utf8');
  
  // Hero image: add srcset with transforms for responsive sizes
  html = html.replace(
    /(<div class="hero-bg"><img src=")(https:\/\/img\.castlecore\.uk\/[^"]+)("[^>]*loading="eager"[^>]*>)/g,
    (match, pre, url, post) => {
      const srcset = '/cdn-cgi/image/width=768,quality=80,format=auto,fit=cover/' + url + ' 768w, ' +
                     '/cdn-cgi/image/width=1280,quality=80,format=auto,fit=cover/' + url + ' 1280w, ' +
                     '/cdn-cgi/image/width=1920,quality=80,format=auto,fit=cover/' + url + ' 1920w';
      return pre + '/cdn-cgi/image/width=1280,quality=80,format=auto,fit=cover/' + url + 
             '" srcset="' + srcset + '" sizes="100vw' + post;
    }
  );
  
  // Route card images: transform to 600w
  html = html.replace(
    /(<div class="route-img"><img src=")(https:\/\/img\.castlecore\.uk\/[^"]+)(")/g,
    (match, pre, url, post) => pre + '/cdn-cgi/image/width=600,quality=80,format=auto,fit=cover/' + url + post
  );
  
  fs.writeFileSync(path.join(dir, f), html, 'utf8');
  console.log(f + ': updated');
});
