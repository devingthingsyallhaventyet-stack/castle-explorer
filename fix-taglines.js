const fs = require('fs');

const taglines = {
  'alnwick-castle': 'From medieval stronghold to Hogwarts — a castle that never stopped reinventing itself',
  'bamburgh-castle': 'A Northumbrian citadel standing guard over nine miles of empty coast',
  'blarney-castle': 'Kiss the stone, find your voice — five centuries of silver-tongued legend',
  'blenheim-palace': "England's only non-royal palace, built as a nation's thank you to a war hero",
  'caernarfon-castle': "Edward I's iron ring — the fortress that crowned the first English Prince of Wales",
  'canterbury-cathedral': "Where Becket fell, where Chaucer's pilgrims walked, where a thousand years of faith endure",
  'cardiff-castle': 'Roman fort, Norman keep, Victorian fantasy — two thousand years in one city block',
  'castle-howard': "Vanbrugh's Baroque masterpiece, where Brideshead lives and the dome touches the Yorkshire sky",
  'chatsworth-house': 'The Palace of the Peak — where Cavendish ambition meets Derbyshire limestone',
  'conwy-castle': "Eight massive towers on the Welsh coast — Edward I's masterwork, unbroken since 1287",
  'corfe-castle': 'Shattered by Parliament, unbowed by time — Dorset\'s defiant hilltop ruin',
  'dover-castle': 'The Key to England — guarding the white cliffs from Romans to the Cold War',
  'dunnottar-castle': 'A sea-battered fortress on the edge of Scotland, where crown jewels were saved and rebels suffered',
  'durham-cathedral': 'The finest Romanesque cathedral in Europe, built on faith and the bones of a saint',
  'edinburgh-castle': 'A volcanic fortress above the haar — Scotland\'s story, written in stone and cannon fire',
  'eilean-donan-castle': 'Three lochs, one island, and the most photographed castle in the Highlands',
  'fountains-abbey': 'The grandest monastic ruin in Britain, silent in its green Yorkshire valley',
  'hampton-court-palace': "Henry VIII's stolen masterpiece — where Tudor ambition and Georgian elegance collide",
  'kilkenny-castle': "Eight centuries on the River Nore — the Butler dynasty's seat of power in Ireland's Medieval Mile",
  'leeds-castle': 'The loveliest castle in the world — a moated palace floating on a Kentish lake',
  'rock-of-cashel': "Ireland's acropolis — a limestone outcrop crowned with a thousand years of kings and bishops",
  'stirling-castle': 'The brooch that clasps the Highlands and Lowlands — Scotland\'s most strategic fortress',
  'tower-of-london': 'Prison, palace, armoury, zoo — a thousand years of power, treachery, and ravens',
  'warwick-castle': "A thousand years of siege and spectacle on the banks of the Avon",
  'windsor-castle': 'The oldest and largest occupied castle in the world — a thousand years of continuous royal residence',
};

let updated = 0;
for (const [slug, tagline] of Object.entries(taglines)) {
  let h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  const old = h.match(/class="hero-tagline">([^<]+)/);
  if (old) {
    h = h.replace('class="hero-tagline">' + old[1], 'class="hero-tagline">' + tagline);
    fs.writeFileSync('site/' + slug + '.html', h);
    console.log('✅ ' + slug + ': ' + tagline.substring(0, 60) + '...');
    updated++;
  }
}
console.log('\nUpdated ' + updated + '/25');
