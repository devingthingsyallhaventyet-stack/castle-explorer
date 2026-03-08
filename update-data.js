const fs = require('fs');

// Load YouTube results
const ytResults = JSON.parse(fs.readFileSync('yt-results.json', 'utf8'));

// Map search names to data.js names and define sources
const enrichments = {
  "Caldicot Castle": {
    yt: ytResults["Caldicot Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caldicot_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/caldicot-castle" },
      { name: "Coflein", url: "https://coflein.gov.uk/en/site/95259/" }
    ]
  },
  "Dolforwyn Castle": {
    yt: ytResults["Dolforwyn Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dolforwyn_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/dolforwyn-castle" },
      { name: "Castles of Wales", url: "https://www.castlesofwales.com/dolforwyn-castle/" }
    ]
  },
  "Newcastle Emlyn Castle": {
    yt: ytResults["Newcastle Emlyn Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Newcastle_Emlyn_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/newcastle-emlyn-castle" },
      { name: "Coflein", url: "https://coflein.gov.uk/en/site/95070/" }
    ]
  },
  "Bolton Priory": {
    yt: ytResults["Bolton Priory"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bolton_Priory" },
      { name: "Bolton Abbey Estate", url: "https://www.boltonabbey.com/" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/bolton-priory/" }
    ]
  },
  "Haddon Hall": {
    yt: ytResults["Haddon Hall"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Haddon_Hall" },
      { name: "Haddon Hall Official", url: "https://www.haddonhall.co.uk/" },
      { name: "Historic Houses", url: "https://www.historichouses.org/houses/house-listing/haddon-hall.html" }
    ]
  },
  "Dudley Castle": {
    yt: ytResults["Dudley Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dudley_Castle" },
      { name: "Dudley Zoo & Castle", url: "https://www.dudleyzoo.org.uk/" },
      { name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1015843" }
    ]
  },
  "Muncaster Castle": {
    yt: ytResults["Muncaster Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Muncaster_Castle" },
      { name: "Muncaster Castle Official", url: "https://www.muncaster.co.uk/" },
      { name: "Historic Houses", url: "https://www.historichouses.org/houses/house-listing/muncaster-castle.html" }
    ]
  },
  "Sizergh Castle": {
    yt: ytResults["Sizergh Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sizergh_Castle" },
      { name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/lake-district/sizergh" },
      { name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1086839" }
    ]
  },
  "Cardigan Castle": {
    yt: ytResults["Cardigan Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cardigan_Castle" },
      { name: "Cardigan Castle Official", url: "https://www.cardigancastle.com/" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/cardigan-castle" }
    ]
  },
  "White Castle": {
    yt: ytResults["White Castle Monmouthshire"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/White_Castle_(castle)" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/white-castle" },
      { name: "Three Castles Walk", url: "https://www.threecastleswalk.co.uk/" }
    ]
  },
  "Weobley Castle": {
    yt: ytResults["Weobley Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Weobley_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/weobley-castle" }
    ]
  },
  "Hay Castle": {
    yt: ytResults["Hay Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hay_Castle" },
      { name: "Hay Castle Official", url: "https://www.haycastle.org/" }
    ]
  },
  "Swansea Castle": {
    yt: ytResults["Swansea Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Swansea_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/swansea-castle" },
      { name: "Coflein", url: "https://coflein.gov.uk/en/site/95389/" }
    ]
  },
  "Clun Castle": {
    yt: ytResults["Clun Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Clun_Castle" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/clun-castle/" },
      { name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1013600" }
    ]
  },
  "Sandal Castle": {
    yt: ytResults["Sandal Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sandal_Castle" },
      { name: "Wakefield Council", url: "https://www.wakefield.gov.uk/events-and-culture/sandal-castle/" }
    ]
  },
  "Bolingbroke Castle": {
    yt: ytResults["Bolingbroke Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bolingbroke_Castle" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/bolingbroke-castle-and-old-bolingbroke/" },
      { name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1012668" }
    ]
  },
  "Narberth Castle": {
    yt: ytResults["Narberth Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Narberth_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/narberth-castle" }
    ]
  },
  "Oxwich Castle": {
    yt: ytResults["Oxwich Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oxwich_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/oxwich-castle" }
    ]
  },
  "Bowes Castle": {
    yt: ytResults["Bowes Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bowes_Castle" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/bowes-castle/" }
    ]
  },
  "Fonmon Castle": {
    yt: ytResults["Fonmon Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fonmon_Castle" },
      { name: "Fonmon Castle Official", url: "https://www.fonmoncastle.com/" }
    ]
  },
  "Usk Castle": {
    yt: ytResults["Usk Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Usk_Castle" },
      { name: "Usk Castle Official", url: "https://www.uskcastle.com/" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/usk-castle" }
    ]
  },
  "Dunmoe Castle": {
    yt: ytResults["Dunmoe Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dunmoe_Castle" },
      { name: "Megalithic Ireland", url: "https://www.megalithicireland.com/dunmoe-castle.html" }
    ]
  },
  "Whorlton Castle": {
    yt: ytResults["Whorlton Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Whorlton_Castle" },
      { name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1002428" }
    ]
  },
  "Neath Castle": {
    yt: ytResults["Neath Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Neath_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/neath-castle" },
      { name: "Coflein", url: "https://coflein.gov.uk/en/site/95296/" }
    ]
  },
  "Caergwrle Castle": {
    yt: ytResults["Caergwrle Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caergwrle_Castle" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/caergwrle-castle" },
      { name: "Coflein", url: "https://coflein.gov.uk/en/site/95121/" }
    ]
  },
  "Castell Aberlleiniog": {
    yt: ytResults["Castell Aberlleiniog"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castell_Aberlleiniog" },
      { name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/castell-aberlleiniog" },
      { name: "Visit Anglesey", url: "https://www.visitanglesey.co.uk/en/things-to-do/castell-aberlleiniog/" }
    ]
  },
  "Balvaird Castle": {
    yt: ytResults["Balvaird Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Balvaird_Castle" },
      { name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/balvaird-castle/" }
    ]
  },
  "Snape Castle": {
    yt: ytResults["Snape Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Snape_Castle" },
      { name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1150787" }
    ]
  },
  "Sissinghurst Castle": {
    yt: ytResults["Sissinghurst Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sissinghurst_Castle_Garden" },
      { name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/kent/sissinghurst-castle-garden" }
    ]
  },
  "Hardwick Hall": {
    yt: ytResults["Hardwick Hall"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hardwick_Hall" },
      { name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/east-midlands/hardwick" },
      { name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1000076" }
    ]
  },
  "Inveraray Castle": {
    yt: ytResults["Inveraray Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Inveraray_Castle" },
      { name: "Inveraray Castle Official", url: "https://www.inveraray-castle.com/" }
    ]
  },
  "Belvoir Castle": {
    yt: ytResults["Belvoir Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Belvoir_Castle" },
      { name: "Belvoir Castle Official", url: "https://www.belvoircastle.com/" }
    ]
  },
  "Battle Abbey": {
    yt: ytResults["Battle Abbey"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Battle_Abbey" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/1066-battle-of-hastings-abbey-and-battlefield/" }
    ]
  },
  "Scotney Castle": {
    yt: ytResults["Scotney Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Scotney_Castle" },
      { name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/kent/scotney-castle" }
    ]
  },
  "Adare Manor": {
    yt: ytResults["Adare Manor"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Adare_Manor" },
      { name: "Adare Manor Official", url: "https://www.adaremanor.com/" }
    ]
  },
  "Herstmonceux Castle": {
    yt: ytResults["Herstmonceux Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Herstmonceux_Castle" },
      { name: "Herstmonceux Castle Official", url: "https://www.herstmonceux-castle.com/" }
    ]
  },
  "Lowther Castle": {
    yt: ytResults["Lowther Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lowther_Castle" },
      { name: "Lowther Castle Official", url: "https://www.lowthercastle.org/" }
    ]
  },
  "Witton Castle": {
    yt: ytResults["Witton Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Witton_Castle" },
      { name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1120956" }
    ]
  },
  "Aberglasney House": {
    yt: ytResults["Aberglasney House"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Aberglasney_House" },
      { name: "Aberglasney Official", url: "https://aberglasney.org/" }
    ]
  },
  "Oxburgh Hall": {
    yt: ytResults["Oxburgh Hall"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oxburgh_Hall" },
      { name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/norfolk/oxburgh-hall" }
    ]
  },
  "Powderham Castle": {
    yt: ytResults["Powderham Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Powderham_Castle" },
      { name: "Powderham Castle Official", url: "https://www.powderham.co.uk/" }
    ]
  },
  "Peckforton Castle": {
    yt: ytResults["Peckforton Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peckforton_Castle" },
      { name: "Peckforton Castle Official", url: "https://www.peckfortoncastle.co.uk/" }
    ]
  },
  "Dartmouth Castle": {
    yt: ytResults["Dartmouth Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dartmouth_Castle" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/dartmouth-castle/" }
    ]
  },
  "Brodie Castle": {
    yt: ytResults["Brodie Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brodie_Castle" },
      { name: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/brodie-castle" }
    ]
  },
  "Lumley Castle": {
    yt: ytResults["Lumley Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lumley_Castle" },
      { name: "Lumley Castle Hotel", url: "https://www.lumleycastle.com/" }
    ]
  },
  "Tioram Castle": {
    yt: ytResults["Castle Tioram"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castle_Tioram" },
      { name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/castle-tioram/" },
      { name: "Undiscovered Scotland", url: "https://www.undiscoveredscotland.co.uk/acharacle/castletioram/" }
    ]
  },
  "Belsay Castle": {
    yt: ytResults["Belsay Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Belsay" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/belsay-hall-castle-and-gardens/" }
    ]
  },
  "Ripley Castle": {
    yt: ytResults["Ripley Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ripley_Castle" },
      { name: "Ripley Castle Official", url: "https://www.ripleycastle.co.uk/" }
    ]
  },
  "Mount Grace Priory": {
    yt: ytResults["Mount Grace Priory"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mount_Grace_Priory" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/mount-grace-priory/" },
      { name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/yorkshire/mount-grace-priory" }
    ]
  },
  "Picton Castle": {
    yt: ytResults["Picton Castle Wales"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Picton_Castle" },
      { name: "Picton Castle Official", url: "https://www.pictoncastle.co.uk/" }
    ]
  },
  "Dumbarton Castle": {
    yt: ytResults["Dumbarton Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dumbarton_Castle" },
      { name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/dumbarton-castle/" }
    ]
  },
  "Wenlock Priory": {
    yt: ytResults["Wenlock Priory"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wenlock_Priory" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/wenlock-priory/" }
    ]
  },
  "Hadleigh Castle": {
    yt: ytResults["Hadleigh Castle"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hadleigh_Castle" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/hadleigh-castle/" }
    ]
  },
  "Minster Lovell Hall": {
    yt: ytResults["Minster Lovell Hall"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Minster_Lovell_Hall" },
      { name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/minster-lovell-hall-and-dovecote/" }
    ]
  },
  "Cong Abbey": {
    yt: ytResults["Cong Abbey Ireland"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cong_Abbey" },
      { name: "Heritage Ireland", url: "https://heritageireland.ie/places-to-visit/cong-abbey/" }
    ]
  },
  "Kilbeggan Distillery": {
    yt: ytResults["Kilbeggan Distillery"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kilbeggan_Distillery" },
      { name: "Kilbeggan Distillery Official", url: "https://www.kilbegganwhiskey.com/distillery/" }
    ]
  }
};

// Read data.js
let data = fs.readFileSync('data.js', 'utf8');

let updated = 0;
let notFound = 0;

for (const [name, info] of Object.entries(enrichments)) {
  const marker = `"name": "${name}"`;
  const idx = data.indexOf(marker);
  if (idx === -1) {
    console.log(`NOT FOUND: ${name}`);
    notFound++;
    continue;
  }
  
  // Find the closing } of this castle's object
  // We need to find the right spot to insert youtube and sources
  // Find the next object boundary - look for the pattern after the name
  // Strategy: find the _index or last property before the closing }, insert before }
  
  // Find end of this object: search for "\n  }," or "\n  }" after idx
  let searchFrom = idx;
  let braceCount = 0;
  let objStart = -1;
  
  // Go backwards to find the opening {
  for (let i = idx; i >= 0; i--) {
    if (data[i] === '{') {
      // Check if this is the object start (at proper indentation)
      const lineStart = data.lastIndexOf('\n', i);
      const indent = i - lineStart - 1;
      if (indent === 2) { // 2 spaces indent = top-level array item
        objStart = i;
        break;
      }
    }
  }
  
  if (objStart === -1) {
    console.log(`Can't find object start for: ${name}`);
    continue;
  }
  
  // Find matching closing brace
  braceCount = 0;
  let objEnd = -1;
  for (let i = objStart; i < data.length; i++) {
    if (data[i] === '{') braceCount++;
    if (data[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        objEnd = i;
        break;
      }
    }
  }
  
  if (objEnd === -1) {
    console.log(`Can't find object end for: ${name}`);
    continue;
  }
  
  // Check if already has youtube/sources
  const objText = data.substring(objStart, objEnd + 1);
  if (objText.includes('"youtube"') || objText.includes('"sources"')) {
    console.log(`SKIP (already has data): ${name}`);
    continue;
  }
  
  // Build the new fields to insert before the closing }
  let newFields = '';
  if (info.yt && info.yt.length > 0) {
    newFields += `,\n    "youtube": ${JSON.stringify(info.yt)}`;
  }
  if (info.sources && info.sources.length > 0) {
    newFields += `,\n    "sources": ${JSON.stringify(info.sources)}`;
  }
  
  if (newFields) {
    // Insert before the closing }
    // Find the last non-whitespace before objEnd
    let insertPos = objEnd;
    // Just insert before the }
    data = data.substring(0, objEnd) + newFields + '\n  ' + data.substring(objEnd);
    updated++;
    console.log(`UPDATED: ${name}`);
  }
}

fs.writeFileSync('data.js', data, 'utf8');
console.log(`\nDone! Updated: ${updated}, Not found: ${notFound}`);
