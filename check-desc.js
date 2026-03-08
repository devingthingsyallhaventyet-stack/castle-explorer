const fs = require('fs');
const vm = require('vm');
const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);

const pages = ['tower-of-london','edinburgh-castle','warwick-castle','blarney-castle','corfe-castle'];

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

for (const slug of pages) {
  const c = ctx.CASTLES.find(x => x && x.name && slugify(x.name) === slug);
  if (c) console.log(slug + ' DATA.JS: ' + c.description.substring(0, 150));
  const h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  const m = h.match(/class="about-text"[^>]*>([\s\S]*?)<\/p>/);
  if (m) console.log(slug + ' HTML:    ' + m[1].replace(/<[^>]+>/g, '').trim().substring(0, 150));
  else {
    const m2 = h.match(/<meta name="description" content="([^"]+)"/);
    if (m2) console.log(slug + ' HTML meta: ' + m2[1].substring(0, 150));
  }
  console.log('---');
}
