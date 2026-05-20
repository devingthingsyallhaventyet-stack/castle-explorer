const https = require('https');
const fs = require('fs');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function main() {
  const pages = [
    ['https://www.castles.nl/castlemore-castle', 'img/scraped-castlemore.jpg'],
    ['https://www.castles.nl/roughan-castle', 'img/scraped-roughan.jpg']
  ];

  for (const [pageUrl, outFile] of pages) {
    console.log('Fetching page:', pageUrl);
    const html = (await fetch(pageUrl)).toString();
    
    // Find castle image - castles.nl uses /assets/img/ pattern
    const matches = html.match(/src="([^"]+\.(?:jpg|jpeg|png))"/gi) || [];
    console.log('Found', matches.length, 'image tags');
    
    // Find the main castle image (skip logos, icons, etc)
    let imgUrl = null;
    for (const m of matches) {
      const src = m.match(/src="([^"]+)"/)[1];
      if (src.includes('logo') || src.includes('icon') || src.includes('flag') || src.includes('banner')) continue;
      if (src.includes('castle') || src.includes('Castle') || matches.indexOf(m) > 0) {
        imgUrl = src.startsWith('http') ? src : 'https://www.castles.nl' + (src.startsWith('/') ? '' : '/') + src;
        break;
      }
    }

    if (!imgUrl) {
      // Just take the first non-logo image
      for (const m of matches) {
        const src = m.match(/src="([^"]+)"/)[1];
        if (src.includes('logo') || src.includes('icon')) continue;
        imgUrl = src.startsWith('http') ? src : 'https://www.castles.nl' + (src.startsWith('/') ? '' : '/') + src;
        break;
      }
    }

    if (imgUrl) {
      console.log('Downloading:', imgUrl);
      const imgBuf = await fetch(imgUrl);
      if (imgBuf[0] === 0xFF || imgBuf[0] === 0x89) {
        fs.writeFileSync(outFile, imgBuf);
        console.log('Saved:', outFile, imgBuf.length, 'bytes');
      } else {
        console.log('Not an image! First bytes:', imgBuf.toString('utf8', 0, 50));
      }
    } else {
      console.log('No suitable image found');
      // Show all img srcs for debugging
      matches.slice(0, 5).forEach(m => console.log(' ', m));
    }
    console.log();
  }
}

main().catch(console.error);
