const sharp = require('sharp');
// Union Jack SVG - simplified but accurate
const w = 1600, h = 1000;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="${w}" height="${h}">
  <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
  <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
  <g clip-path="url(#s)">
    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#t)"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
  </g>
</svg>`;

sharp(Buffer.from(svg))
  .resize(1600, 1000)
  .webp({ quality: 85 })
  .toFile('img/en/union-jack-bg.webp')
  .then(i => console.log('done', i.size + 'b'));
