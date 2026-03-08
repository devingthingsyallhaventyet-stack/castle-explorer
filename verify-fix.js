const fs = require('fs');
const pages = ['windsor-castle-interior','cardiff-castle','bamburgh-castle','edinburgh-castle-interior','conwy-castle'];
for (const slug of pages) {
  const h = fs.readFileSync(`site/${slug}.html`, 'utf8');
  const hero = h.match(/<section class="hero">[\s\S]*?<img src="([^"]+)"/);
  const yt = h.match(/googleapis\.com\/youtube[^"]*q=([^&"]+)/);
  const gp = h.match(/textQuery:'([^']+)'/);
  console.log(`\n=== ${slug} ===`);
  console.log('Hero:', hero ? hero[1].substring(0, 100) : 'MISSING');
  console.log('YT:', yt ? decodeURIComponent(yt[1]) : 'MISSING');
  console.log('GP:', gp ? gp[1] : 'MISSING');
  if (h.includes('${')) console.log('⚠️ UNINTERPOLATED TEMPLATE VARS FOUND');
}
