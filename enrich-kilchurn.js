const fs = require('fs');
const { execSync } = require('child_process');

console.log('Starting Kilchurn Castle enrichment...');

// Build the main listing update SQL
const listingSQL = `UPDATE listings SET 
  subtitle = 'The mighty stronghold of the Campbells of Glenorchy — one of Scotland''s most photographed castles, standing sentinel over Loch Awe.',
  type = 'Castle',
  century = '15th Century',
  town = 'Dalmally',
  county = 'Argyll and Bute',
  latitude = 56.40361,
  longitude = -5.02889,
  status = 'Freely Accessible',
  condition = 'Ruin',
  description_expanded = 'The Campbell clan''s fortress rises from the rocky peninsula like something from a Highland fairy tale, its five-storey tower house commanding views across Loch Awe. Built around 1450 by Sir Colin Campbell as the base for the mighty Campbells of Glenorchy, Kilchurn became the powerhouse from which this cadet branch of Clan Campbell dominated the central Highlands for over two centuries.

From island stronghold to baronial seat, the castle evolved with the fortunes of its owners. Sir Duncan Campbell added the laich hall in the early 16th century, while his descendant "Black Duncan" rebuilt the south range in 1614 and constructed a chapel. When the Campbells became Earls of Breadalbane, they converted Kilchurn into a garrison capable of housing 200 troops — making it home to the oldest surviving barracks on the British mainland.

The castle''s dramatic end came not from siege or battle, but from nature itself. Lightning struck in 1760, destroying much of the structure and leaving it abandoned. Today, visitors can walk around the ruins and imagine the power that once emanated from this Highland stronghold, where Jacobite conferences were held and clan politics shaped Scotland''s destiny.',
  architecture = 'Kilchurn''s five-storey tower house dominates the complex, a testament to 15th-century Scottish defensive architecture. The original castle comprised this central keep with a courtyard defended by curtain walls, built when the site was still a small island in Loch Awe. The tower house features the characteristic thick walls of medieval construction, with chambers stacked vertically for both defense and domestic comfort.

Later additions reflect changing priorities and building techniques. The 16th-century laich hall shows the shift toward more comfortable living, while "Black Duncan''s" early 17th-century renovations brought Renaissance influences to the medieval core. The final phase saw the castle transformed into a modern barracks with the addition of a three-storey L-shaped block, representing the military architecture of the post-1689 period.',
  tags = '["Free Entry"]',
  terrain_description = 'Access is over agricultural land via the loch-side, which floods periodically, so caution is advised. The site is accessed through working farmland, with no vehicular access or parking.',
  terrain_tags = '["Uneven Terrain", "Flooding Risk"]',
  getting_there_car = 'At the north east end of Loch Awe, 2.5m west of Dalmally off the A85. No vehicular access or parking available.',
  getting_there_train = null,
  getting_there_bus = null,
  getting_there_airport = null,
  updated_at = datetime('now')
WHERE id = 2;`;

// Timeline entries
const timelineEntries = [
  {
    date_label: 'c.1440',
    title: 'Clan Gregor Loses Kilchurn',
    description: 'Colin Campbell seizes control of Kilchurn from Clan Gregor, setting the stage for Campbell dominance in the region.',
    sort_order: 1
  },
  {
    date_label: 'c.1450',
    title: 'Sir Colin Builds the Castle',
    description: 'Sir Colin Campbell, 1st of Glenorchy, establishes Kilchurn as his stronghold, constructing the five-storey tower house that still dominates the site.',
    sort_order: 2
  },
  {
    date_label: '1513',
    title: 'Death at Flodden',
    description: 'Sir Duncan Campbell of Glenorchy falls at the Battle of Flodden alongside King James IV, leaving his castle improvements as his legacy.',
    sort_order: 3
  },
  {
    date_label: '1614',
    title: 'Black Duncan\'s Renovations',
    description: 'Sir Duncan Campbell, "Black Duncan," rebuilds the south range and adds a chapel, transforming the fortress into a more comfortable residence.',
    sort_order: 4
  },
  {
    date_label: '1681',
    title: 'Rise of the Breadalbanes',
    description: 'Sir John Campbell becomes Earl of Breadalbane, elevating Kilchurn from clan stronghold to the seat of one of Scotland\'s most powerful noble families.',
    sort_order: 5
  },
  {
    date_label: '1693',
    title: 'Conversion to Barracks',
    description: 'The Earl of Breadalbane converts Kilchurn into a garrison stronghold capable of housing 200 troops, creating Britain\'s oldest surviving mainland barracks.',
    sort_order: 6
  },
  {
    date_label: '1760',
    title: 'Lightning Strike',
    description: 'A devastating lightning strike damages the castle beyond repair, ending three centuries of continuous occupation and leaving the romantic ruin we see today.',
    sort_order: 7
  }
];

// People associated with the castle
const people = [
  {
    name: 'Sir Colin Campbell, 1st of Glenorchy',
    dates: 'died 1475',
    role_description: 'Founder of Kilchurn Castle and progenitor of the powerful Campbell dynasty that would dominate the central Highlands.',
    portrait_url: null,
    wikipedia_url: null,
    sort_order: 1
  },
  {
    name: 'Sir Duncan Campbell of Glenorchy',
    dates: '1545-1631',
    role_description: 'Known as "Black Duncan," this ambitious laird rebuilt much of Kilchurn and was created 1st Baronet of Glenorchy.',
    portrait_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Unknown_artist_-_Sir_Duncan_Campbell_of_Glenorchy_%281545%E2%80%931631%29%2C_Highland_Improver_-_PG_2165_-_National_Galleries_of_Scotland.jpg/250px-Unknown_artist_-_Sir_Duncan_Campbell_of_Glenorchy_%281545%E2%80%931631%29%2C_Highland_Improver_-_PG_2165_-_National_Galleries_of_Scotland.jpg',
    wikipedia_url: 'https://en.wikipedia.org/wiki/Duncan_Campbell_of_Glenorchy',
    sort_order: 2
  },
  {
    name: 'John Campbell, 1st Earl of Breadalbane',
    dates: '1635-1717',
    role_description: 'Transformed Kilchurn into a military garrison and navigated the dangerous politics of the Jacobite era.',
    portrait_url: null,
    wikipedia_url: 'https://en.wikipedia.org/wiki/John_Campbell,_1st_Earl_of_Breadalbane_and_Holland',
    sort_order: 3
  }
];

// Designations
const designations = [
  {
    title: 'Scheduled Ancient Monument',
    body_name: 'Historic Environment Scotland',
    url: 'https://portal.historicenvironment.scot/designation/SM90179'
  }
];

// Videos
const videos = [
  {
    youtube_id: '31Aqca6fucY',
    title: 'Epic drone flight over Kilchurn Castle and Loch Awe, Scotland',
    sort_order: 1
  },
  {
    youtube_id: '-QlTE6gxZyk',
    title: 'Kilchurn Castle and Loch Awe, Scotland from the air with Yuneec Typhoon H drone',
    sort_order: 2
  }
];

// Further reading (from Wikipedia references)
const furtherReading = [
  {
    author: 'Lindsay, Maurice',
    title: 'The Castles of Scotland',
    year: '1986',
    url: null,
    sort_order: 1
  },
  {
    author: 'McKean, Charles',
    title: 'The Scottish Chateau',
    year: '2004',
    url: null,
    sort_order: 2
  }
];

// Write main listing SQL to file
fs.writeFileSync('listing-update.sql', listingSQL);

// Execute main listing update
console.log('Updating main listing...');
try {
  execSync('npx wrangler d1 execute castlecore-db --remote --file listing-update.sql --json', { stdio: 'inherit' });
  console.log('Main listing updated successfully');
} catch (error) {
  console.error('Error updating main listing:', error.message);
}

// Insert timeline entries
console.log('Inserting timeline entries...');
for (let i = 0; i < timelineEntries.length; i++) {
  const entry = timelineEntries[i];
  const timelineSQL = `INSERT INTO timeline_entries (listing_id, date_label, title, description, sort_order) VALUES (2, '${entry.date_label}', '${entry.title}', '${entry.description.replace(/'/g, "''")}', ${entry.sort_order});`;
  fs.writeFileSync('timeline-temp.sql', timelineSQL);
  
  try {
    execSync('npx wrangler d1 execute castlecore-db --remote --file timeline-temp.sql --json', { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error inserting timeline entry ${i + 1}:`, error.message);
  }
}

// Insert people
console.log('Inserting people...');
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  const portraitUrl = person.portrait_url ? `'${person.portrait_url}'` : 'null';
  const wikiUrl = person.wikipedia_url ? `'${person.wikipedia_url}'` : 'null';
  const peopleSQL = `INSERT INTO people (listing_id, name, dates, role_description, portrait_url, wikipedia_url, sort_order) VALUES (2, '${person.name}', '${person.dates}', '${person.role_description.replace(/'/g, "''")}', ${portraitUrl}, ${wikiUrl}, ${person.sort_order});`;
  fs.writeFileSync('people-temp.sql', peopleSQL);
  
  try {
    execSync('npx wrangler d1 execute castlecore-db --remote --file people-temp.sql --json', { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error inserting person ${i + 1}:`, error.message);
  }
}

// Insert designations
console.log('Inserting designations...');
for (let i = 0; i < designations.length; i++) {
  const designation = designations[i];
  const designationSQL = `INSERT INTO designations (listing_id, title, body_name, url) VALUES (2, '${designation.title}', '${designation.body_name}', '${designation.url}');`;
  fs.writeFileSync('designation-temp.sql', designationSQL);
  
  try {
    execSync('npx wrangler d1 execute castlecore-db --remote --file designation-temp.sql --json', { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error inserting designation ${i + 1}:`, error.message);
  }
}

// Insert videos
console.log('Inserting videos...');
for (let i = 0; i < videos.length; i++) {
  const video = videos[i];
  const videoSQL = `INSERT INTO videos (listing_id, youtube_id, title, sort_order) VALUES (2, '${video.youtube_id}', '${video.title}', ${video.sort_order});`;
  fs.writeFileSync('video-temp.sql', videoSQL);
  
  try {
    execSync('npx wrangler d1 execute castlecore-db --remote --file video-temp.sql --json', { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error inserting video ${i + 1}:`, error.message);
  }
}

// Insert further reading
console.log('Inserting further reading...');
for (let i = 0; i < furtherReading.length; i++) {
  const reading = furtherReading[i];
  const url = reading.url ? `'${reading.url}'` : 'null';
  const readingSQL = `INSERT INTO further_reading (listing_id, author, title, year, url, sort_order) VALUES (2, '${reading.author}', '${reading.title}', '${reading.year}', ${url}, ${reading.sort_order});`;
  fs.writeFileSync('reading-temp.sql', readingSQL);
  
  try {
    execSync('npx wrangler d1 execute castlecore-db --remote --file reading-temp.sql --json', { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error inserting reading ${i + 1}:`, error.message);
  }
}

// Publish the listing
console.log('Publishing listing...');
const publishSQL = `UPDATE listings SET published = 1, published_at = datetime('now'), updated_at = datetime('now') WHERE id = 2;`;
fs.writeFileSync('publish-temp.sql', publishSQL);

try {
  execSync('npx wrangler d1 execute castlecore-db --remote --file publish-temp.sql --json', { stdio: 'inherit' });
  console.log('Listing published successfully!');
} catch (error) {
  console.error('Error publishing listing:', error.message);
}

// Clean up temporary files
const tempFiles = ['listing-update.sql', 'timeline-temp.sql', 'people-temp.sql', 'designation-temp.sql', 'video-temp.sql', 'reading-temp.sql', 'publish-temp.sql'];
tempFiles.forEach(file => {
  try {
    fs.unlinkSync(file);
  } catch (error) {
    // Ignore cleanup errors
  }
});

console.log('\n=== ENRICHMENT COMPLETE ===');
console.log('Kilchurn Castle listing has been enriched and published!');
console.log('View at: /scotland/argyll-western-isles/kilchurn-castle');