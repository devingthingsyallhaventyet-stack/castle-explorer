const fs = require('fs');
const path = 'C:/Users/Clawzisabot/.openclaw/workspace/castle-explorer/audit-data.json';
const data = JSON.parse(fs.readFileSync(path,'utf8'));

const justEnrich = ['Longthorpe Tower','Weeting Castle',"Bishop's Stortford Castle","St Botolph's Priory",'Ickworth House'];

for (const d of data) {
  if (justEnrich.includes(d.name)) {
    d.enrichStatus = 'enriched';
    d.enrichReviewDate = '2026-05-16';
    console.log('✨ ' + d.name + ' → enriched');
  }
  if (d.name === 'Elton Hall') {
    d.enrichStatus = 'enriched';
    d.enrichReviewDate = '2026-05-16';
    if (!d.sources || !Array.isArray(d.sources)) d.sources = [];
    d.sources.push({label:'Elton Hall', url:'https://eltonhall.com/'});
    if (!d.verifiedSources) d.verifiedSources = [];
    d.verifiedSources.push('https://eltonhall.com/');
    console.log('✨ Elton Hall → enriched + source');
  }
  if (d.name === 'Wymondham Abbey') {
    d.enrichStatus = 'enriched';
    d.enrichReviewDate = '2026-05-16';
    if (!d.sources || !Array.isArray(d.sources)) d.sources = [];
    d.sources.push({label:'Wymondham Abbey', url:'https://www.wymondhamabbey.org.uk/'});
    if (!d.verifiedSources) d.verifiedSources = [];
    d.verifiedSources.push('https://www.wymondhamabbey.org.uk/');
    console.log('✨ Wymondham Abbey → enriched + source');
  }
  if (d.name === 'Creake Abbey') {
    d.enrichStatus = 'enriched';
    d.enrichReviewDate = '2026-05-16';
    if (!d.sources || !Array.isArray(d.sources)) d.sources = [];
    d.sources.push({label:'Creake Abbey', url:'https://www.creakeabbey.co.uk/'});
    if (!d.verifiedSources) d.verifiedSources = [];
    d.verifiedSources.push('https://www.creakeabbey.co.uk/');
    console.log('✨ Creake Abbey → enriched + source');
  }
  if (d.name === 'Denny Abbey') {
    d.enrichStatus = 'enriched';
    d.enrichReviewDate = '2026-05-16';
    if (!d.sources || !Array.isArray(d.sources)) d.sources = [];
    d.sources.push({label:'Denny Abbey & Farmland Museum', url:'https://dennyfarmlandmuseum.org.uk/'});
    if (!d.verifiedSources) d.verifiedSources = [];
    d.verifiedSources.push('https://dennyfarmlandmuseum.org.uk/');
    console.log('✨ Denny Abbey → enriched + source');
  }
  if (d.name === 'St Albans Abbey') {
    d.name = 'St Albans Cathedral';
    d.enrichStatus = 'enriched';
    d.enrichReviewDate = '2026-05-16';
    d.mapsLink = 'https://maps.app.goo.gl/Wqt7BWknqrco9pod8';
    if (!d.sources || !Array.isArray(d.sources)) d.sources = [];
    d.sources.push({label:'St Albans Cathedral', url:'https://www.stalbanscathedral.org/'});
    if (!d.verifiedSources) d.verifiedSources = [];
    d.verifiedSources.push('https://www.stalbanscathedral.org/');
    console.log('✨ St Albans Abbey → St Albans Cathedral + mapsLink + source');
  }
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Done.');
