const sharp = require('sharp');
const w = 1600, h = 1000, crossW = 200;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="white"/>
  <rect x="${(w - crossW) / 2}" y="0" width="${crossW}" height="${h}" fill="#CE1124"/>
  <rect x="0" y="${(h - crossW) / 2}" width="${w}" height="${crossW}" fill="#CE1124"/>
</svg>`;
sharp(Buffer.from(svg)).webp({ quality: 80 }).toFile('img/en/st-george-bg.webp').then(i => console.log('done', i.size + 'b'));
