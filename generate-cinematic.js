const fs = require('fs');
const path = require('path');

// Load data
const vm = require('vm');
const dataJs = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8').replace(/\bconst\b/g, 'var');
const dataCtx = {};
vm.runInNewContext(dataJs, dataCtx);
const CASTLES = dataCtx.CASTLES;

const GAPI_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function heroImg(castle) {
  if (!castle.image) return '../placeholder.svg';
  return castle.image.replace(/\/\d+px-/, '/1280px-');
}
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371, dLat = (lat2-lat1)*Math.PI/180, dLng = (lng2-lng1)*Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
function findNearby(castle, count=5, maxKm=30) {
  const results = [];
  for (const c of CASTLES) {
    if (!c || c.name === castle.name) continue;
    const d = haversine(castle.lat, castle.lng, c.lat, c.lng);
    if (d <= maxKm) results.push({ castle: c, dist: d });
  }
  results.sort((a,b) => a.dist - b.dist);
  return results.slice(0, count);
}

// Custom narrative data for each cinematic castle
const NARRATIVES = {
  'Tower of London': {
    displayName: 'Tower of London',
    tagline: 'Nine centuries of power, treason, and the Crown Jewels',
    hookQuote: 'More people were executed within these walls than in any other building in England. The ravens still keep watch — because legend says if they ever leave, the kingdom falls.',
    story: [
      { text: 'William the Conqueror built the White Tower in 1066 to terrify London into submission. It worked. For nearly a thousand years, this fortress on the Thames has been the backdrop to England\'s bloodiest chapters — <span class="highlight">beheadings, betrayals, and the disappearance of two young princes</span> whose fate remains one of history\'s great unsolved mysteries.', dropCap: true },
      { text: 'Today, the Crown Jewels glitter in their vault beneath the Waterloo Block — <span class="highlight">£3 billion worth of gold, diamonds, and rubies</span> that have been worn at every coronation since Charles II. The Beefeaters who guard them have been doing so since Tudor times.' },
      { text: 'Walk the ramparts and you\'re walking where Anne Boleyn took her last steps. Stand in the chapel and you\'re standing above the remains of three queens. <span class="highlight">The Tower doesn\'t just contain history — it contains ghosts.</span>' }
    ],
    photoBreakQuote: 'Every stone in this place has witnessed something that would change the course of a nation.',
    terrain: { chips: ['🦽 Mostly Accessible', '🪨 Cobblestones', '📶 Step-Free Routes Available'], chipsClass: ['green','amber','green'], note: 'The Tower has step-free access to most areas including the Crown Jewels. Cobblestone surfaces throughout — wheelchair users should use the smooth paths. Accessible toilets available. Some towers have narrow spiral staircases with no lift access. Free access guides for visitors with disabilities.' },
    gettingThere: [
      { icon: '🚇', name: 'By Underground', detail: 'Tower Hill station (District & Circle lines) is a 5-minute walk. The castle is clearly signposted from the station exit.' },
      { icon: '🚌', name: 'By Bus', detail: 'Routes 15, 42, 78, 100, and RV1 stop nearby. The closest stop is Tower of London on Tower Hill.' },
      { icon: '🚗', name: 'By Car', detail: 'Limited parking in the area. The nearest NCP car park is on Lower Thames Street. Congestion charge zone applies on weekdays.' },
      { icon: '🚢', name: 'By River', detail: 'Thames Clippers river bus stops at Tower Pier, directly outside the castle entrance.' }
    ]
  },
  'Edinburgh Castle Interior': {
    displayName: 'Edinburgh Castle',
    tagline: 'The rock that holds the soul of Scotland',
    hookQuote: 'Perched on an ancient volcanic plug 250 feet above the city, Edinburgh Castle has been besieged more times than any other place in Great Britain. It has never truly fallen.',
    story: [
      { text: 'There has been a fortress on Castle Rock for over three thousand years — since the Iron Age, when the Votadini people first recognised that this volcanic crag, with its sheer cliffs on three sides, was <span class="highlight">the most defensible position in Scotland</span>.', dropCap: true },
      { text: 'Mary Queen of Scots gave birth to the future King James within these walls. The Stone of Destiny — <span class="highlight">the ancient coronation stone of Scottish kings</span> — sits in the Crown Room alongside the Honours of Scotland, the oldest crown jewels in the British Isles.' },
      { text: 'Every day at 1pm, the One O\'Clock Gun fires from the Half Moon Battery — a tradition since 1861. <span class="highlight">You hear it before you expect it, and the whole city flinches.</span>' }
    ],
    photoBreakQuote: 'From these walls, you can see the Highlands beginning. Scotland starts here.',
    terrain: { chips: ['🦽 Partial Access', '📐 Steep Approach', '🪨 Cobblestones'], chipsClass: ['amber','amber','amber'], note: 'The castle sits atop a volcanic rock with a steep cobbled approach. A courtesy vehicle can take visitors with mobility issues to the top. Wheelchair access is available to most areas via ramps and a lift, though some sections including the Crown Room involve steps. Accessible toilets on site.' },
    gettingThere: [
      { icon: '🚶', name: 'On Foot', detail: 'At the top of the Royal Mile in Edinburgh\'s Old Town. A 15-minute walk uphill from Waverley Station via the Mound or Cockburn Street.' },
      { icon: '🚌', name: 'By Bus', detail: 'Lothian Buses routes 2, 23, 27, 41, 42 stop on George IV Bridge or The Mound, a short walk from the castle esplanade.' },
      { icon: '🚂', name: 'By Train', detail: 'Edinburgh Waverley station is the nearest, about 15 minutes on foot. Edinburgh Haymarket is a 25-minute walk.' },
      { icon: '✈️', name: 'By Air', detail: 'Edinburgh Airport (EDI) is 8 miles west. The Airlink 100 express bus runs to Waverley Bridge every 10 minutes.' }
    ]
  },
  'Bamburgh Castle': {
    displayName: 'Bamburgh Castle',
    tagline: 'Where the North Sea meets a thousand years of defiance',
    hookQuote: 'Rising from a basalt outcrop on the Northumberland coast, Bamburgh has stood against Viking raids, Scottish invasions, and the full fury of the North Sea for over 1,400 years.',
    story: [
      { text: 'The first thing you see is the scale of it — a colossus of dark stone rising from the beach like a cliff face that someone carved into a fortress. <span class="highlight">Bamburgh doesn\'t sit on the landscape. It dominates it.</span>', dropCap: true },
      { text: 'This was the seat of the ancient Kings of Northumbria, the most powerful Anglo-Saxon kingdom. The Vikings besieged it. The Normans rebuilt it. During the Wars of the Roses, it became the <span class="highlight">first castle in England to be defeated by gunpowder</span> — the beginning of the end for medieval warfare.' },
      { text: 'Walk along the beach at low tide and look back. The castle fills the entire horizon. <span class="highlight">No photograph does it justice — and you\'ll take fifty trying.</span>' }
    ],
    photoBreakQuote: 'The beach below is empty for miles. The castle above has been occupied for fourteen centuries. Time moves differently here.',
    terrain: { chips: ['🦽 Partial Access', '📐 Steep in Places', '🌬️ Exposed & Windy'], chipsClass: ['amber','amber','amber'], note: 'The castle grounds have uneven grass and gravel paths. The State Rooms are accessible via a lift. Some areas including the keep involve steep steps. The approach from the village car park is relatively flat. Wheelchair-accessible toilets available. The beach below is sandy and not wheelchair-friendly.' },
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the B1342 off the A1, about 16 miles north of Alnwick. Free car park in Bamburgh village, a short walk to the castle entrance.' },
      { icon: '🚌', name: 'By Bus', detail: 'Arriva X18 runs from Newcastle to Berwick-upon-Tweed via Bamburgh. The Bamburgh village stop is a 5-minute walk from the castle.' },
      { icon: '🚂', name: 'By Train', detail: 'Nearest station is Chathill (4 miles) on the East Coast Main Line. Limited services — Alnmouth station (15 miles) has more frequent trains from London and Edinburgh.' },
      { icon: '✈️', name: 'By Air', detail: 'Newcastle Airport (NCL) ~55 miles · Edinburgh Airport (EDI) ~80 miles' }
    ]
  },
  'Warwick Castle': {
    displayName: 'Warwick Castle',
    tagline: 'A thousand years of spectacle, from medieval jousting to modern-day trebuchets',
    hookQuote: 'William the Conqueror built the first fortification here in 1068. A thousand years later, Warwick Castle still draws crowds — and still fires its trebuchet every afternoon.',
    story: [
      { text: 'Warwick is the castle that refuses to become a museum. Yes, it\'s over a thousand years old. Yes, it has dungeons and a ghost tower and suits of armour lining the halls. But it also has <span class="highlight">the world\'s largest working trebuchet</span>, which launches flaming projectiles across the river every day at 5pm.', dropCap: true },
      { text: 'The castle was the seat of the Earls of Warwick — the most powerful family in medieval England. Richard Neville, the "Kingmaker," literally decided who sat on the English throne. <span class="highlight">When you had Warwick on your side, you were king. When you didn\'t, you were dead.</span>' },
      { text: 'It\'s one of the most visited castles in England, and the experience matches the history — <span class="highlight">tower climbs with panoramic views, candlelit dungeon tours, live falconry, and jousting displays on the riverbank.</span>' }
    ],
    photoBreakQuote: 'The Kingmaker chose who ruled England from these halls. The trebuchet he would have recognised still works.',
    terrain: { chips: ['🦽 Mostly Accessible', '🪨 Uneven in Places', '👶 Pushchair Friendly'], chipsClass: ['green','amber','green'], note: 'Warwick Castle has good accessibility throughout the main grounds and many indoor exhibits. Wheelchair-accessible routes to the Great Hall, State Rooms, and most outdoor areas. The castle towers and dungeons involve narrow stairs without lift access. Complimentary wheelchair loan available. Accessible toilets and baby-changing facilities on site.' },
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'Just off the M40 (junction 15), well signposted from the motorway. Paid car park on-site with overflow parking available on busy days.' },
      { icon: '🚂', name: 'By Train', detail: 'Warwick station is a 10-minute walk. Direct trains from Birmingham Moor Street (25 min) and London Marylebone (90 min via Chiltern Railways).' },
      { icon: '🚌', name: 'By Bus', detail: 'Stagecoach X17 from Coventry and Leamington Spa stops in Warwick town centre, a 5-minute walk to the castle.' }
    ]
  },
  'Fountains Abbey': {
    displayName: 'Fountains Abbey',
    tagline: 'The most beautiful ruin in England, hidden in a Yorkshire valley',
    hookQuote: 'In 1132, thirteen Benedictine monks were expelled from their monastery for being too strict. They walked into the wilderness of Skeldale and built what would become the richest abbey in Britain.',
    story: [
      { text: 'Fountains Abbey is what happens when you give monks three centuries and unlimited ambition. The Cistercians who built it believed that beauty was a form of prayer — and <span class="highlight">they prayed harder than anyone</span>.', dropCap: true },
      { text: 'By the 15th century, Fountains was the wealthiest monastery in England, owning vast estates, lead mines, and some of the finest wool in Europe. Then Henry VIII dissolved the monasteries, and <span class="highlight">one of the greatest buildings in the country was left to the rain and the ivy</span>.' },
      { text: 'What remains is staggering. The nave stretches 300 feet, open to the sky. The tower still stands. Light falls through empty windows onto grass floors where monks once chanted at midnight. <span class="highlight">Five centuries of silence have only made it more beautiful.</span>' }
    ],
    photoBreakQuote: 'The roof is gone. The monks are gone. But the walls still hold the shape of their prayers.',
    terrain: { chips: ['🦽 Partial Access', '🌿 Grass & Gravel Paths', '📐 Some Slopes'], chipsClass: ['amber','green','amber'], note: 'The visitor centre and tea room are fully accessible. Paths to the abbey ruins are mostly gravel and grass, with some slopes. Powered mobility vehicles are available to borrow (book in advance). The abbey ruins themselves have uneven ground. Accessible toilets at the visitor centre.' },
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: '4 miles west of Ripon off the B6265. Signed from the A1(M) junction 50. Large National Trust car park on site (free for members).' },
      { icon: '🚌', name: 'By Bus', detail: 'The 139 bus from Ripon runs to Fountains Abbey on Sundays and bank holidays in summer. Ripon is served by buses from Harrogate and Leeds.' },
      { icon: '🚂', name: 'By Train', detail: 'Nearest station is Harrogate (12 miles). From there, take the 36 bus to Ripon, then taxi or the seasonal 139 to the abbey.' },
      { icon: '✈️', name: 'By Air', detail: 'Leeds Bradford Airport (LBA) ~25 miles · Manchester Airport (MAN) ~75 miles' }
    ]
  },
  'Corfe Castle': {
    displayName: 'Corfe Castle',
    tagline: 'The shattered crown of Purbeck, broken but unbowed',
    hookQuote: 'Parliament blew Corfe Castle apart in 1646 to stop the Royalists from using it again. They succeeded — but the ruins they left behind became more famous than the castle ever was.',
    story: [
      { text: 'Corfe Castle looks like a broken tooth on the Purbeck skyline — shattered towers leaning at impossible angles, walls split clean in half by gunpowder charges. <span class="highlight">It\'s the most photogenic destruction in England.</span>', dropCap: true },
      { text: 'For six hundred years before Parliament got to it, Corfe was a royal castle. King John used it as a treasury and a prison — <span class="highlight">twenty-two French knights were starved to death in its dungeons</span>. Lady Bankes defended it for three years during the Civil War before being betrayed by one of her own officers.' },
      { text: 'Now it belongs to the village cats and the National Trust. Climb to the keep and look out across the Isle of Purbeck — <span class="highlight">the view hasn\'t changed since William the Conqueror stood here in 1066.</span>' }
    ],
    photoBreakQuote: 'They tried to erase it. Instead they created the most dramatic silhouette in southern England.',
    terrain: { chips: ['⚠️ Steep & Uneven', '🧗 Rugged Terrain', '🌬️ Exposed'], chipsClass: ['red','red','amber'], note: 'The castle ruins sit on a steep hill with rough, uneven ground throughout. The climb to the keep is strenuous with no step-free alternative. Not suitable for wheelchairs or pushchairs beyond the outer bailey. Sturdy footwear essential. The village and National Trust tea room at the base are fully accessible.' },
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A351 between Wareham and Swanage. National Trust car park in Corfe Castle village (free for members, pay & display for others).' },
      { icon: '🚂', name: 'By Train', detail: 'Corfe Castle station on the Swanage Heritage Railway is a 5-minute walk. Connect from the main line at Wareham (South Western Railway from London Waterloo).' },
      { icon: '🚌', name: 'By Bus', detail: 'Purbeck Breezer 40 runs from Wareham to Swanage via Corfe Castle every 30 minutes in summer.' },
      { icon: '✈️', name: 'By Air', detail: 'Bournemouth Airport (BOH) ~18 miles · Southampton Airport (SOU) ~40 miles' }
    ]
  },
  'Caernarfon Castle': {
    displayName: 'Caernarfon Castle',
    tagline: 'Edward I\'s masterpiece of intimidation, built to crush a nation',
    hookQuote: 'Edward I didn\'t just want to conquer Wales. He wanted the Welsh to look at Caernarfon and know — beyond any doubt — that resistance was finished.',
    story: [
      { text: 'Caernarfon is not a castle built for defence. It\'s a castle built for <span class="highlight">psychological warfare</span>. Edward I modelled its banded walls and polygonal towers on the walls of Constantinople — the greatest city in the world — to send a message: this is imperial power, and it is permanent.', dropCap: true },
      { text: 'It worked. Caernarfon became the seat of English power in North Wales, and in 1284, Edward made sure his son — the first English Prince of Wales — was born here. <span class="highlight">Seven centuries later, Prince Charles\'s investiture took place in the same courtyard.</span>' },
      { text: 'The Eagle Tower still stands over 100 feet tall, and the walls are up to 15 feet thick in places. Walk the wall-walk circuit and you\'ll understand — <span class="highlight">this was never just a castle. It was a statement.</span>' }
    ],
    photoBreakQuote: 'The walls of Constantinople inspired these walls. Edward I wanted the Welsh to see Rome in Snowdonia.',
    terrain: { chips: ['🦽 Partial Access', '📐 Steep Stairs in Towers', '🪨 Uneven Surfaces'], chipsClass: ['amber','amber','amber'], note: 'The ground floor and courtyard areas are mostly accessible for wheelchair users. The wall-walk and tower interiors involve steep spiral staircases without lift access. Uneven stone surfaces throughout. An accessible virtual tour of the towers is available in the exhibition space. Accessible toilets on site.' },
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'In the centre of Caernarfon, well signed from the A487 and A4086. Pay & display car parks within walking distance, including the Castle Ditch car park adjacent to the walls.' },
      { icon: '🚌', name: 'By Bus', detail: 'Regular services from Bangor (5/5X, ~25 min) and Porthmadog. The bus station is a 3-minute walk from the castle entrance.' },
      { icon: '🚂', name: 'By Train', detail: 'Nearest mainline station is Bangor (9 miles), with direct trains from London Euston, Chester, and Crewe. The Welsh Highland Railway heritage line also stops in Caernarfon.' },
      { icon: '✈️', name: 'By Air', detail: 'Liverpool John Lennon Airport (LPL) ~85 miles · Manchester Airport (MAN) ~95 miles' }
    ]
  },
  'Stirling Castle': {
    displayName: 'Stirling Castle',
    tagline: 'Whoever holds Stirling, holds Scotland',
    hookQuote: 'Stirling Castle sits at the narrowest crossing point of the River Forth — the gateway between the Highlands and the Lowlands. Every army that ever wanted Scotland had to take this rock first.',
    story: [
      { text: 'There\'s a reason the two most important battles in Scottish history — Stirling Bridge and Bannockburn — were fought within sight of this castle. <span class="highlight">Control Stirling and you control the only route north.</span> William Wallace knew it. Robert the Bruce knew it. Every Scottish king knew it.', dropCap: true },
      { text: 'The Great Hall, built by James IV in 1503, is the largest medieval banqueting hall in Scotland. Mary Queen of Scots was crowned here at nine months old. <span class="highlight">The Renaissance palace that James V added is the finest in Britain</span> — carved with grotesque figures, classical columns, and planetary symbols that scholars still argue about.' },
      { text: 'Stand on the castle esplanade and you can see seven battlefields stretching to the horizon. The Wallace Monument rises from the trees to the northeast. <span class="highlight">No other castle in Britain wears its history so visibly on the landscape around it.</span>' }
    ],
    photoBreakQuote: 'Seven battlefields are visible from these walls. Every one of them was fought over this view.',
    terrain: { chips: ['🦽 Partial Access', '📐 Steep Approach', '🪨 Cobblestones'], chipsClass: ['amber','amber','amber'], note: 'The approach to the castle is up a steep cobbled road. A courtesy vehicle runs from the lower car park for visitors with mobility needs. Once inside, the Great Hall, Chapel Royal, and most courtyard areas are accessible. The palace has a virtual tour for areas with stairs. Accessible toilets available.' },
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'Signed from the M9 and M80 motorways. Castle car park at the top of the hill (limited spaces) or larger car parks in Stirling town centre.' },
      { icon: '🚂', name: 'By Train', detail: 'Stirling station is a 20-minute uphill walk, or a short taxi. Direct trains from Edinburgh (50 min), Glasgow (30 min), and Perth (30 min).' },
      { icon: '🚌', name: 'By Bus', detail: 'Stirling bus station is a 15-minute walk. First Bus and Citylink services run from Edinburgh, Glasgow, and Perth. Local buses 51 and 52 go closer to the castle.' },
      { icon: '✈️', name: 'By Air', detail: 'Edinburgh Airport (EDI) ~35 miles · Glasgow Airport (GLA) ~30 miles' }
    ]
  },
  'Blenheim Palace': {
    displayName: 'Blenheim Palace',
    tagline: 'A nation\'s thank-you gift that became England\'s grandest home',
    hookQuote: 'Parliament gave the Duke of Marlborough a palace for winning the Battle of Blenheim in 1704. He got 2,000 acres, 187 rooms, and the building that would one day produce Winston Churchill.',
    story: [
      { text: 'Blenheim isn\'t really a house. It\'s a <span class="highlight">victory monument disguised as a home</span>. John Vanbrugh designed it to rival Versailles, and the Duke\'s wife Sarah hated it — too big, too cold, too much like living inside a political statement. She wasn\'t wrong.', dropCap: true },
      { text: 'But what a statement. The Great Hall is 67 feet high. The Long Library stretches 180 feet. The grounds — landscaped by Capability Brown — include a lake he created by damming a river, <span class="highlight">casually reshaping the geography of Oxfordshire</span> because the view needed improving.' },
      { text: 'Winston Churchill was born here in 1874, in a small room off the main hall. He proposed to Clementine in the Temple of Diana by the lake, and he\'s buried in the churchyard at Bladon, half a mile away. <span class="highlight">His life began and ended within sight of these walls.</span>' }
    ],
    photoBreakQuote: 'Too grand for a home, too beautiful for a monument. Blenheim is England showing off.',
    terrain: { chips: ['🦽 Mostly Accessible', '🌿 Gardens on Grass', '👶 Pushchair Friendly'], chipsClass: ['green','green','green'], note: 'The Palace State Rooms are fully wheelchair accessible via ramps and a lift. The formal gardens have gravel paths suitable for wheelchairs. The wider parkland has grass paths that may be difficult in wet weather. Powered mobility scooters available to hire. Accessible toilets throughout. Assistance dogs welcome everywhere.' },
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'In Woodstock, 8 miles north of Oxford on the A44. Large car park on site. Well signed from the M40 (junction 9) and A34.' },
      { icon: '🚌', name: 'By Bus', detail: 'Stagecoach S3 runs every 30 minutes from Oxford city centre to Woodstock (30 min). The bus stop is at the palace gates.' },
      { icon: '🚂', name: 'By Train', detail: 'Oxford station is the nearest (8 miles), with direct trains from London Paddington (60 min). Take the S3 bus from the station to Woodstock.' },
      { icon: '✈️', name: 'By Air', detail: 'London Heathrow (LHR) ~60 miles · Birmingham Airport (BHX) ~55 miles' }
    ]
  }
};

// Mood tag mappings
function getMoodTags(castle) {
  const tags = castle.tags || [];
  const mood = [];
  if (tags.includes('dramatic-ruin') || castle.condition === 'ruin') mood.push('Dramatic Ruin');
  if (tags.includes('romantic-ruin')) mood.push('Romantic Ruin');
  if (tags.includes('photogenic')) mood.push('Photogenic');
  if (tags.includes('filming-location')) mood.push('Filming Location');
  if (tags.includes('haunted')) mood.push('Haunted');
  if (tags.includes('kid-friendly')) mood.push('Family Friendly');
  if (tags.includes('well-preserved')) mood.push('Well Preserved');
  if (tags.includes('free')) mood.push('Free Entry');
  if (castle.condition === 'intact') mood.push('Intact');
  // Add geographic vibes
  if (castle.description && castle.description.match(/cliff|coast|sea|ocean|atlantic/i)) mood.push('Cliffside');
  if (castle.description && castle.description.match(/forest|wood|valley/i)) mood.push('Hidden Valley');
  return mood.slice(0, 5);
}

function generateCinematicPage(castle) {
  const slug = slugify(castle.name);
  const narr = NARRATIVES[castle.name];
  if (!narr) { console.log('  SKIP (no narrative):', castle.name); return null; }
  
  const bigImg = heroImg(castle);
  const gallery = castle.gallery || [];
  const moodTags = getMoodTags(castle);
  const nearby = findNearby(castle);
  const metaDesc = escapeHtml((castle.description || '').substring(0, 160));

  const displayName = narr.displayName || castle.name;
  // Photo grid images (hero + first 6 gallery)
  const gridImgs = [bigImg, ...gallery.slice(0, 6)];
  // All images for lightbox (no separate scroll strip)
  const scrollImgs = []; // removed "More Photos" section

  const nearbyHtml = nearby.length ? nearby.map(n => {
    const ns = slugify(n.castle.name);
    const nImg = n.castle.image ? n.castle.image.replace(/\/\d+px-/, '/250px-') : '../placeholder.svg';
    return `<a href="./${ns}.html" class="nearby-card"><img src="${escapeHtml(nImg)}" alt="${escapeHtml(n.castle.name)}" loading="lazy" onerror="this.src='../placeholder.svg'"><div class="nc-body"><div class="nc-name">${escapeHtml(n.castle.name)}</div><div class="nc-meta">★ ${n.castle.rating} · ${n.dist.toFixed(0)} km</div></div></a>`;
  }).join('') : '<p style="color:var(--ink-faded)">No nearby sites within 30 km.</p>';

  const storyHtml = narr.story.map((s, i) => 
    `<p${i === 0 ? ' class="drop-cap"' : ''}>${s.text}</p>`
  ).join('\n      ');

  const photoGridHtml = gridImgs.slice(0, 4).map((img, i) => {
    const cls = i === 0 ? 'pg-item pg-main' : 'pg-item';
    const more = i === 3 && gallery.length > 3 ? `<span class="pg-more">+${gallery.length} photos</span>` : '';
    return `<div class="${cls}" onclick="openLb(${i})"><img src="${escapeHtml(img)}" alt="${escapeHtml(displayName)}" loading="${i < 2 ? 'eager' : 'lazy'}">${more}</div>`;
  }).join('\n      ');

  const scrollHtml = scrollImgs.length ? scrollImgs.map((img, i) => 
    `<div class="g-item"><img src="${escapeHtml(img)}" alt="" onclick="openLb(${gridImgs.length + i})" loading="lazy"></div>`
  ).join('\n        ') : '';

  const allLbImages = [...gridImgs, ...gallery.slice(6)]; // all images in lightbox

  // Getting There HTML
  const gettingThereHtml = narr.gettingThere ? narr.gettingThere.map(g =>
    `<div class="transport-card"><div class="tc-header">${g.icon} ${escapeHtml(g.name)}</div><div class="tc-detail">${escapeHtml(g.detail)}</div></div>`
  ).join('\n      ') : `<div class="transport-card"><div class="tc-header">📍 Directions</div><div class="tc-detail">Use the link below for directions to ${escapeHtml(displayName)}.</div><a href="https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}">Get directions via Google Maps →</a></div>`;

  // Terrain HTML
  const terrainHtml = narr.terrain ? `<div class="terrain-chips">${narr.terrain.chips.map((c, i) => `<span class="chip ${narr.terrain.chipsClass[i]}">${c}</span>`).join('')}</div><p class="terrain-note">${escapeHtml(narr.terrain.note)}</p>` : `<p class="terrain-note">Terrain details for ${escapeHtml(displayName)}. Check before visiting if you have accessibility needs.</p>`;

  // Read the v4 template CSS from the prototype
  const templateCss = fs.readFileSync(path.join(__dirname, 'site', 'prototype-dunluce-v4.html'), 'utf8');
  const cssMatch = templateCss.match(/<style>([\s\S]*?)<\/style>/);
  const css = cssMatch ? cssMatch[1] : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="../favicon.ico" type="image/x-icon">
<title>${escapeHtml(displayName)} — castlecore | Castles, Abbeys &amp; Ruins</title>
<meta name="description" content="${metaDesc}">
<meta property="og:title" content="${escapeHtml(displayName)} — castlecore">
<meta property="og:description" content="${metaDesc}">
<meta property="og:image" content="${escapeHtml(bigImg)}">
<meta property="og:url" content="https://castlecore.uk/site/${slug}.html">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>

<nav class="float-nav" id="floatNav">
  <a href="../index.html" class="logo"><img src="../logo.png" alt="">Castlecore</a>
  <div class="nav-links">
    <a href="../search.html">Sites</a>
    <a href="../collection.html">Collections</a>
    <a href="../trail.html">Routes</a>
    <a href="../explore.html" class="explore-btn">Explore Map</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-img"><img src="${escapeHtml(bigImg)}" alt="${escapeHtml(displayName)}"></div>
  <div class="hero-vignette"></div>
  <div class="hero-content">
    <p class="hero-tagline">${escapeHtml(narr.tagline)}</p>
    <h1>${escapeHtml(displayName)}</h1>
    <div class="hero-meta">
      <span>${escapeHtml(castle.county || '')} · ${escapeHtml(castle.country)}</span>
      <span>✦ ${castle.rating} · ${(castle.reviewCount||0).toLocaleString()} reviews</span>
      <span>${escapeHtml(castle.era || '')} · ${escapeHtml(castle.condition || '')}</span>
    </div>
    <div class="mood-tags">
      ${moodTags.map(t => `<span class="mood-tag">${escapeHtml(t)}</span>`).join('\n      ')}
    </div>
  </div>
</section>

<div class="action-bar">
  <button class="action-btn action-save" id="saveBtn" onclick="toggleSave()">♡ Save</button>
  <a href="https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}" target="_blank" class="action-btn action-primary">📍 Directions</a>
  <a href="../trail.html" class="action-btn action-secondary">🛤️ Add to Route</a>
  <a href="https://www.google.com/maps/search/${encodeURIComponent(castle.name)}/@${castle.lat},${castle.lng},15z" target="_blank" class="action-btn action-secondary">🗺️ View on Map</a>
  <span class="action-spacer"></span>
  <span class="action-share" onclick="shareThis()">↗ Share</span>
</div>

<div class="content-wrap">
  <div class="content-main">

    <div class="photo-grid-compact" id="photoGrid">
      ${photoGridHtml}
    </div>

    <div class="narrative-quote">
      <p>"${escapeHtml(narr.hookQuote)}"</p>
    </div>

    <section class="fade-section">
      <h2>About</h2>
      ${storyHtml}
      <div id="hoursInline" style="display:none"></div>
    </section>

    <div class="ornament-sm"></div>

    <section class="fade-section">
      <h2>Videos</h2>
      <div class="yt-grid" id="ytGrid">
        <p class="terrain-note" id="ytLoading">Loading videos...</p>
      </div>
    </section>

    <div class="ornament-sm"></div>

    <section class="fade-section">
      <h2>Getting There</h2>
      ${gettingThereHtml}
    </section>

    <div class="ornament-sm"></div>

    <section class="fade-section">
      <h2>Terrain &amp; Accessibility</h2>
      ${terrainHtml}
    </section>

    <div class="ornament-sm"></div>

    <section class="fade-section">
      <h2>Visitor Reviews</h2>
      <div id="reviewsBox"><p class="terrain-note">Loading reviews...</p></div>
    </section>

  </div>

  <aside class="content-sidebar">
    <div class="sidebar-card">
      <h3>Location</h3>
      <div class="sidebar-map">🗺️ Map coming soon</div>
      <a href="https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}" target="_blank" class="sidebar-directions">📍 Get Directions</a>
    </div>

    <div class="sidebar-card" id="visitInfoCard" style="display:none">
      <h3>Visit Info</h3>
      <div id="visitInfoContent"></div>
    </div>

    <div class="sidebar-card" id="linksCard" style="display:none">
      <h3>Official Links</h3>
      <div id="linksContent"></div>
    </div>
  </aside>
</div>

${gallery.length > 0 ? `
<div class="photo-break fade-section">
  <img src="${escapeHtml(gallery[Math.min(2, gallery.length-1)])}" alt="${escapeHtml(displayName)}">
  <div class="pb-text"><p>"${escapeHtml(narr.photoBreakQuote)}"</p></div>
</div>` : ''}


<div class="full-width">
  <section class="fade-section">
    <h2>Nearby Sites</h2>
    <div class="nearby-grid">${nearbyHtml}</div>
  </section>
</div>

<section class="cta-section fade-section">
  <h2>"There are places that change the way you see the world."</h2>
  <a href="../explore.html" class="cta-btn">Explore the Map</a>
</section>

<footer>
  <p style="font-family:'Cinzel Decorative',serif;font-size:.85rem;color:var(--ink);margin-bottom:4px;letter-spacing:2px">Castlecore</p>
  <p>The most complete heritage guide for the UK &amp; Ireland</p>
  <p style="margin-top:6px">© MMXXVI · <a href="../index.html">Home</a> · <a href="../explore.html">Map</a></p>
</footer>

<div class="lb-overlay" id="lightbox">
  <button class="lb-close" onclick="closeLb()">✕</button>
  <button class="lb-nav lb-prev" onclick="lbNav(-1)">‹</button>
  <img src="" alt="Photo">
  <button class="lb-nav lb-next" onclick="lbNav(1)">›</button>
  <div class="lb-counter" id="lbCounter"></div>
</div>

<script>
window.addEventListener('scroll',()=>document.getElementById('floatNav').classList.toggle('scrolled',window.scrollY>60));
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.1,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.fade-section').forEach(el=>obs.observe(el));

const lbImages=${JSON.stringify(allLbImages)};
let lbIdx=0;
function openLb(i){lbIdx=i;const lb=document.getElementById('lightbox');lb.querySelector('img').src=lbImages[i];document.getElementById('lbCounter').textContent=(i+1)+' / '+lbImages.length;lb.classList.add('open');document.body.style.overflow='hidden'}
function closeLb(){document.getElementById('lightbox').classList.remove('open');document.body.style.overflow=''}
function lbNav(d){lbIdx=(lbIdx+d+lbImages.length)%lbImages.length;document.getElementById('lightbox').querySelector('img').src=lbImages[lbIdx];document.getElementById('lbCounter').textContent=(lbIdx+1)+' / '+lbImages.length}
document.addEventListener('keydown',e=>{if(!document.getElementById('lightbox').classList.contains('open'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')lbNav(-1);if(e.key==='ArrowRight')lbNav(1)});
document.getElementById('lightbox').addEventListener('click',function(e){if(e.target===this)closeLb()});

const SLUG='${slug}';
function toggleSave(){let s=JSON.parse(localStorage.getItem('cc_saved')||'[]');const i=s.indexOf(SLUG);if(i>=0)s.splice(i,1);else s.push(SLUG);localStorage.setItem('cc_saved',JSON.stringify(s));document.querySelectorAll('.action-save').forEach(b=>{const v=s.includes(SLUG);b.classList.toggle('saved',v);b.innerHTML=v?'♥ Saved':'♡ Save'})}
(function(){const s=JSON.parse(localStorage.getItem('cc_saved')||'[]');if(s.includes(SLUG))document.querySelectorAll('.action-save').forEach(b=>{b.classList.add('saved');b.innerHTML='♥ Saved'})})();
function shareThis(){if(navigator.share)navigator.share({title:'${escapeHtml(displayName)} — castlecore',url:location.href}).catch(()=>{});else{navigator.clipboard.writeText(location.href);alert('Link copied!')}}

const YT_KEY='${GAPI_KEY}';
fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(displayName)}+drone+cinematic&type=video&videoDuration=medium&relevanceLanguage=en&maxResults=3&key='+YT_KEY)
.then(r=>r.json()).then(d=>{const g=document.getElementById('ytGrid');if(!d.items||!d.items.length){g.innerHTML='<p class="terrain-note">No videos available.</p>';return}g.innerHTML=d.items.map(v=>'<iframe src="https://www.youtube.com/embed/'+v.id.videoId+'" allowfullscreen loading="lazy"></iframe>').join('')}).catch(()=>{document.getElementById('ytGrid').innerHTML='<p class="terrain-note">Videos unavailable.</p>'});

const GP_KEY='${GAPI_KEY}';
fetch('https://places.googleapis.com/v1/places:searchText',{method:'POST',headers:{'Content-Type':'application/json','X-Goog-Api-Key':GP_KEY,'X-Goog-FieldMask':'places.reviews,places.photos,places.websiteUri,places.currentOpeningHours,places.regularOpeningHours,places.googleMapsUri'},body:JSON.stringify({textQuery:'${escapeHtml(displayName)} ${escapeHtml(castle.county||'')} ${escapeHtml(castle.country||'')}',locationBias:{circle:{center:{latitude:${castle.lat},longitude:${castle.lng}},radius:1000}},maxResultCount:1})}).then(r=>r.json()).then(d=>{
  const place=d.places&&d.places[0];if(!place)return;
  if(place.reviews&&place.reviews.length){document.getElementById('reviewsBox').innerHTML=place.reviews.slice(0,5).map(r=>{const s='★'.repeat(Math.round(r.rating||0));const a=(r.authorAttribution&&r.authorAttribution.displayName)||'Visitor';const t=(r.text&&r.text.text)||'';const tm=r.relativePublishTimeDescription||'';return '<div class="review-card"><div class="review-header"><span class="review-author">'+a+'</span><span class="review-rating">'+s+'</span><span class="review-time">'+tm+'</span></div><p class="review-text">"'+t+'"</p></div>'}).join('')}
  if(place.photos&&place.photos.length){place.photos.slice(0,8).forEach(p=>{lbImages.push('https://places.googleapis.com/v1/'+p.name+'/media?maxWidthPx=1200&key='+GP_KEY)});const m=document.querySelector('.pg-more');if(m)m.textContent='+'+(lbImages.length-4)+' photos'}
  const hours=place.currentOpeningHours||place.regularOpeningHours;
  if(hours&&hours.weekdayDescriptions){const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];const today=days[new Date().getDay()];const todayH=hours.weekdayDescriptions.find(h=>h.startsWith(today))||hours.weekdayDescriptions[0];const isOpen=hours.openNow;const st=isOpen?'<span style="color:#2e7d32;font-weight:600">Open now</span>':'<span style="color:#c62828;font-weight:600">Closed</span>';const all=hours.weekdayDescriptions.join('<br>');const el=document.getElementById('hoursInline');el.style.display='';el.innerHTML='<div style="margin-top:1rem;padding:1rem;background:#fff;border:1px solid var(--border);border-radius:3px"><div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.3rem"><span>🕐</span><span style="font-family:Cinzel,serif;font-size:.7rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--ink-faded)">Opening Hours</span></div><div style="font-size:.95rem;color:var(--ink)">'+st+' · '+todayH+'</div><span class="visit-hours-toggle" onclick="this.nextElementSibling.classList.toggle(\\\'open\\\')" >See all hours ▾</span><div class="visit-hours-full">'+all+'</div></div>'}
  const li=[];if(place.websiteUri){const dm=new URL(place.websiteUri).hostname.replace('www.','');li.push('<div class="link-item"><span class="link-icon">🌐</span><a href="'+place.websiteUri+'" target="_blank" rel="noopener">'+dm+'</a></div>')}if(place.googleMapsUri){li.push('<div class="link-item"><span class="link-icon">📍</span><a href="'+place.googleMapsUri+'" target="_blank" rel="noopener">Google Maps</a></div>')}if(li.length){document.getElementById('linksCard').style.display='';document.getElementById('linksContent').innerHTML=li.join('')}
}).catch(()=>{});
</script>
</body>
</html>`;
}

// Generate pages for the 9 castles (Dunluce already has its prototype)
const targetNames = [
  'Tower of London',
  'Edinburgh Castle Interior',
  'Bamburgh Castle',
  'Warwick Castle',
  'Fountains Abbey',
  'Corfe Castle',
  'Caernarfon Castle',
  'Stirling Castle',
  'Blenheim Palace'
];

const siteDir = path.join(__dirname, 'site');
let count = 0;

for (const name of targetNames) {
  const castle = CASTLES.find(c => c.name === name);
  if (!castle) { console.log('NOT FOUND:', name); continue; }
  
  const html = generateCinematicPage(castle);
  if (!html) continue;
  
  const slug = slugify(castle.name);
  const outPath = path.join(siteDir, `${slug}.html`);
  
  // Back up old version
  if (fs.existsSync(outPath)) {
    fs.copyFileSync(outPath, outPath.replace('.html', '-old.html'));
  }
  
  fs.writeFileSync(outPath, html, 'utf8');
  count++;
  console.log(`✅ ${castle.name} → ${slug}.html`);
}

console.log(`\nGenerated ${count} cinematic pages`);
