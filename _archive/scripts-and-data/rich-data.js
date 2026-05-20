// Rich listing data for top historic sites
// Auto-generated with realistic transport, terrain & event information
const RICH_SITE_DATA = {
  "Hampton Court Palace": {
    gettingThere: [
      { icon: '🚂', name: 'Hampton Court Station', detail: '2 minute walk from the palace gates. Direct trains from London Waterloo every 30 minutes (35 min journey).', link: 'https://www.google.com/maps/dir/?api=1&destination=Hampton+Court+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'On-site Car Park', detail: 'Large car park at the palace. £2.40/hour, max £7.20/day. Can fill up on summer weekends — arrive before 11am.' },
      { icon: '🚌', name: 'Bus Routes', detail: 'Routes 111, 216, 411, and R68 stop at Hampton Court. The 111 connects to Kingston and Heathrow.' },
      { icon: '🚲', name: 'Cycling', detail: 'Bike racks available at the East Front. Part of the Thames Cycle Route (National Cycle Network Route 4).' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Wheelchair Accessible', cls: 'green' },
        { icon: '🚶', text: 'Flat & Paved', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🏛️', text: 'Some Stairs Inside', cls: 'amber' }
      ],
      note: 'Most of the ground floor, gardens, and maze are fully accessible. Upper floors of the Tudor apartments require stairs. Mobility scooters and wheelchairs available to borrow free of charge. Companion carers admitted free.'
    },
    events: [
      { month: 'MAR', day: '15', name: 'Easter at the Palace', desc: 'Family-friendly Easter trail through the Tudor kitchens and gardens. Chocolate egg hunt for under-12s.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUN', day: '11', name: 'Hampton Court Palace Festival', desc: 'Annual summer concert series in Base Court. Past performers include Nile Rodgers, Björk, and Elton John.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £45' },
      { month: 'JUL', day: '1', name: 'Hampton Court Garden Festival', desc: 'RHS flower show featuring show gardens, floral marquees, and plant shopping. One of the UK\'s premier garden events.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets required' },
      { month: 'OCT', day: '25', name: 'Halloween at Hampton Court', desc: 'After-dark tours of the Haunted Gallery where Catherine Howard\'s ghost is said to roam. Not for the faint-hearted.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'NOV', day: '22', name: 'Ice Rink at Hampton Court', desc: 'Outdoor ice skating in front of the West Front of the palace. Open through January. Magical after dark with the palace illuminated.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'From £16.50' }
    ]
  },

  "Tower of London": {
    gettingThere: [
      { icon: '🚇', name: 'Tower Hill Station', detail: 'District & Circle lines. 5 minute walk. Exit via the Tower Hill exit and follow signs.', link: 'https://www.google.com/maps/dir/?api=1&destination=Tower+Hill+Station&travelmode=transit', linkText: 'Get directions →' },
      { icon: '🚂', name: 'London Bridge / Fenchurch Street', detail: 'National rail stations within 15 minute walk. Multiple services from across South East England.' },
      { icon: '⛴️', name: 'Tower Pier', detail: 'Thames Clippers river bus stops right outside. Services from Greenwich, Westminster, and Embankment.' },
      { icon: '🅿️', name: 'Parking', detail: 'No on-site parking. Nearest NCP at Minories (5 min walk). Expect £30+/day in central London.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Cobblestone Paths', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in White Tower', cls: 'amber' },
        { icon: '👶', text: 'Buggy Friendly (Ground)', cls: 'green' }
      ],
      note: 'The grounds are largely accessible but surfaces are cobbled in places. The White Tower has stairs with no lift. Crown Jewels exhibition is fully accessible. Wheelchairs available to borrow. Companion carers free.'
    },
    events: [
      { month: 'FEB', day: '10', name: 'Tower Ice Rink', desc: 'Skating on the moat of the Tower of London. A unique winter experience with the castle illuminated.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'From £17.50' },
      { month: 'APR', day: '5', name: 'Easter at the Tower', desc: 'Family activities and trails exploring Tudor Easter traditions. Meet the Yeoman Warders in costume.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '15', name: 'Ceremony of the Keys', desc: 'The 700-year-old nightly locking-up ceremony. One of the oldest military ceremonies in the world.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free — book months ahead' },
      { month: 'OCT', day: '26', name: 'Halloween: Tales from the Tower', desc: 'After-dark tours with costumed actors telling tales of executions, torture, and ghosts.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'NOV', day: '5', name: 'Remembrance at the Tower', desc: 'The Tower moat filled with thousands of ceramic poppies or equivalent remembrance installation.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to view' }
    ]
  },

  "Windsor Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Windsor & Eton Central', detail: 'Direct trains from London Paddington via Slough (change required). Journey ~35 minutes. 5 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Windsor+%26+Eton+Central+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚂', name: 'Windsor & Eton Riverside', detail: 'Direct from London Waterloo (55 min). No change needed. 10 min walk to castle.' },
      { icon: '🅿️', name: 'King Edward VII Car Park', detail: 'Closest car park to the castle. Pay & display. Fills quickly on weekends — arrive early.' },
      { icon: '🚌', name: 'Bus from Heathrow', detail: 'Regular buses from Heathrow T5 (30 min). Green Line 702/703 from London Victoria.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Wheelchair Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '📐', text: 'Steep Hill to Enter', cls: 'amber' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' }
      ],
      note: 'The castle is accessible but there is a steep hill from the town to the entrance. Wheelchair users can arrange vehicle access. State Apartments have lift access. St George\'s Chapel has step-free entry. Free wheelchairs available.'
    },
    events: [
      { month: 'APR', day: '17', name: 'Easter Court at Windsor', desc: 'The Royal Family traditionally spends Easter at Windsor. The Changing of the Guard is especially popular.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'JUN', day: '15', name: 'Garter Day', desc: 'The annual procession of the Knights of the Garter from the Upper Ward to St George\'s Chapel.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to watch' },
      { month: 'JUL', day: '20', name: 'Summer Opening: State Rooms', desc: 'Additional rooms opened during summer, including the Semi-State Rooms used for official entertaining.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' },
      { month: 'DEC', day: '1', name: 'Christmas at Windsor', desc: 'The castle decorated for Christmas with themed activities and seasonal displays in the State Apartments.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' }
    ]
  },

  "Edinburgh Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Edinburgh Waverley', detail: 'Scotland\'s busiest station. 10 minute uphill walk to the castle via The Mound or Playfair Steps.', link: 'https://www.google.com/maps/dir/?api=1&destination=Edinburgh+Waverley&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚌', name: 'Lothian Buses', detail: 'Multiple routes stop on Princes Street below the castle. Routes 2, 35, 41, and many more.' },
      { icon: '🚋', name: 'Edinburgh Trams', detail: 'Tram stops at Princes Street and St Andrew Square. Connected to Edinburgh Airport.' },
      { icon: '🅿️', name: 'Castle Terrace Car Park', detail: 'Nearest car park (5 min walk). NCP operated. Expensive — consider park & ride from city outskirts.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Accessibility', cls: 'amber' },
        { icon: '📐', text: 'Very Steep Approach', cls: 'red' },
        { icon: '🚶', text: 'Cobblestones Throughout', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '🚗', text: 'Courtesy Vehicle Available', cls: 'green' }
      ],
      note: 'The castle sits atop Castle Rock with a very steep cobbled approach via the Royal Mile. A courtesy vehicle can take wheelchair users to the top. Some areas have stepped access only. The Great Hall and Crown Jewels rooms are accessible. Request assistance at the ticket office.'
    },
    events: [
      { month: 'APR', day: '1', name: 'Edinburgh Castle Proms', desc: 'Classical concerts in the Great Hall with the castle illuminated.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £35' },
      { month: 'AUG', day: '1', name: 'Royal Edinburgh Military Tattoo', desc: 'World-famous military tattoo on the Esplanade. Pipes, drums, and performances from around the globe.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £30' },
      { month: 'OCT', day: '28', name: 'Castle of Light', desc: 'Spectacular light and sound show illuminating the castle through winter evenings.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'DEC', day: '20', name: 'Hogmanay at the Castle', desc: 'The castle forms the backdrop to Edinburgh\'s legendary New Year celebrations with midnight fireworks.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free to view from city' }
    ]
  },

  "Warwick Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Warwick Station', detail: 'Regular trains from Birmingham Moor Street (30 min) and London Marylebone (90 min). 10 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Warwick+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large on-site car park. Book online in advance for discounted rate. Free parking with Merlin Annual Pass.' },
      { icon: '🚌', name: 'Stagecoach Buses', detail: 'Route 16 from Leamington Spa. Route X18 from Coventry stops nearby.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in Towers', cls: 'amber' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'Grounds and main areas are largely accessible with paved paths. The towers and rampart walk involve narrow spiral stairs. The Dungeon attraction has limited accessibility. Wheelchairs available free of charge. Merlin operated venue with good facilities.'
    },
    events: [
      { month: 'FEB', day: '15', name: 'Half Term Knights', desc: 'Live jousting shows, sword fighting displays, and have-a-go archery for families.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'MAY', day: '25', name: 'Wars of the Roses Live!', desc: 'Spectacular live jousting and battle re-enactment with stunts, pyrotechnics, and a cast of 50.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Summer Trebuchet Firings', desc: 'Daily firings of the world\'s largest working trebuchet, launching projectiles across the river.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'OCT', day: '20', name: 'Halloween Spectacular', desc: 'The Haunted Castle maze, scare zones, and after-dark events. Separate family-friendly daytime activities.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'DEC', day: '5', name: 'Christmas at Warwick Castle', desc: 'Festive market, ice rink, and a Santa\'s grotto. The castle decorated with thousands of lights.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' }
    ]
  },

  "Dover Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Dover Priory Station', detail: 'High Speed 1 from London St Pancras (60 min) or Southeastern from Victoria/Charing Cross. 20 min uphill walk or taxi.', link: 'https://www.google.com/maps/dir/?api=1&destination=Dover+Priory+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking within the castle grounds. Can be busy in summer — arrive before midday.' },
      { icon: '🚌', name: 'Local Buses', detail: 'Stagecoach route 15 passes near the castle. Dover town centre buses connect to Priory Station.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '📐', text: 'Steep Hill Approach', cls: 'amber' },
        { icon: '🚶', text: 'Grass & Paved Mix', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in Keep', cls: 'amber' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The Great Tower has stairs but ground floor is accessible. The medieval tunnels and WWII tunnels have limited access for wheelchair users. The grounds are extensive with some slopes. English Heritage provides accessibility guides in advance.'
    },
    events: [
      { month: 'APR', day: '12', name: 'Easter Medieval Fair', desc: 'Knights, jesters, and medieval craftspeople bring the castle to life over the Easter weekend.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '20', name: 'Dover Castle Proms', desc: 'Open-air classical concert in the castle grounds with fireworks finale.', badge: 'concert', badgeText: 'CONCERT', meta: 'Separate tickets' },
      { month: 'AUG', day: '15', name: 'WWII Weekend', desc: 'Living history event recreating wartime life in the tunnels and grounds. Meet re-enactors in period uniform.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'OCT', day: '28', name: 'Halloween in the Tunnels', desc: 'After-dark tours of the WWII tunnels with a spooky twist. Not suitable for young children.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' }
    ]
  },

  "Stirling Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Stirling Station', detail: 'Regular trains from Edinburgh (50 min), Glasgow (30 min), and Perth. 15 min uphill walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Stirling+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Esplanade Parking', detail: 'Pay & display at the Esplanade and in Stirling town. Limited spaces near the castle.' },
      { icon: '🚌', name: 'Stirling Buses', detail: 'First Bus services from the city centre. The castle is well signed from the bus station.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '📐', text: 'Steep Approach', cls: 'amber' },
        { icon: '🚶', text: 'Cobbled Surfaces', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚗', text: 'Disabled Parking at Top', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The approach is steep but disabled visitors can drive to the castle esplanade. Once inside, most rooms in the Royal Palace are accessible. The Great Hall has step-free access. Some rampart walks involve steps. Wheelchairs available free of charge.'
    },
    events: [
      { month: 'APR', day: '5', name: 'Easter at the Castle', desc: 'Family-friendly activities including costumed characters, crafts, and historical games.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '14', name: 'Stirling Castle Concerts', desc: 'Summer concert series on the Esplanade featuring Scottish and international artists.', badge: 'concert', badgeText: 'CONCERT', meta: 'Separate tickets' },
      { month: 'AUG', day: '20', name: 'Bannockburn Live', desc: 'Anniversary commemorations of the Battle of Bannockburn with re-enactments near the castle.', badge: 'special', badgeText: 'SPECIAL', meta: 'Various events' }
    ]
  },

  "Blarney Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus from Cork City', detail: 'Bus Éireann route 215 from Cork Bus Station (20 min). Runs every 30 minutes.', link: 'https://www.google.com/maps/dir/?api=1&destination=Blarney+Castle&travelmode=transit', linkText: 'Get directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large car park at the castle entrance. €6 per car. Usually space available.' },
      { icon: '🚂', name: 'Cork Kent Station', detail: 'Main station for Cork city. Irish Rail from Dublin (2.5 hrs). Then bus 215 to Blarney.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Steep Spiral Stairs', cls: 'red' },
        { icon: '🚶', text: 'Garden Paths Paved', cls: 'green' },
        { icon: '👟', text: 'Sturdy Footwear Advised', cls: 'amber' },
        { icon: '💺', text: 'Gardens Seating', cls: 'green' },
        { icon: '👶', text: 'Gardens Buggy Friendly', cls: 'green' }
      ],
      note: 'Kissing the Blarney Stone requires climbing 127 narrow spiral steps — not accessible for wheelchair users or those with mobility issues. The extensive gardens and grounds are mostly accessible with paved paths. The Poison Garden and Fern Garden are on level ground.'
    },
    events: [
      { month: 'MAR', day: '17', name: 'St Patrick\'s Day at Blarney', desc: 'Special celebrations with live traditional music and the castle grounds decorated in green.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'JUN', day: '21', name: 'Midsummer at Blarney', desc: 'Extended opening hours for the longest day. Twilight tours of the gardens.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'DEC', day: '8', name: 'Christmas at Blarney', desc: 'Festive market in the stable yard with local crafts and food. The gardens illuminated.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets for lights' }
    ]
  },

  "Leeds Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Bearsted Station', detail: 'Southeastern trains from London Victoria (1 hr). Free shuttle bus from station to castle (seasonal).', link: 'https://www.google.com/maps/dir/?api=1&destination=Bearsted+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large free car park for visitors. Well signed from M20 Junction 8.' },
      { icon: '🚌', name: 'Arriva Bus 13', detail: 'Runs from Maidstone town centre. Check seasonal timetable.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved & Gravel Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '🏛️', text: 'Some Stairs Inside', cls: 'amber' }
      ],
      note: 'The grounds and gardens are largely flat and accessible. The castle interior has some stairs but ground floors are accessible. The maze and grotto are accessible. Mobility scooters and wheelchairs available to hire. Dog friendly in grounds.'
    },
    events: [
      { month: 'APR', day: '6', name: 'Leeds Castle Festival of Flowers', desc: 'Stunning floral displays throughout the castle rooms and gardens.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'JUL', day: '13', name: 'Leeds Castle Classical Concert', desc: 'Open-air classical concert on the castle lawns with fireworks over the lake.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £40' },
      { month: 'AUG', day: '25', name: 'Triathlon & Sporting Events', desc: 'The castle hosts various sporting events including a triathlon using the lake and grounds.', badge: 'special', badgeText: 'SPECIAL', meta: 'Registration required' },
      { month: 'NOV', day: '15', name: 'Leeds Castle Christmas', desc: 'The castle transformed for Christmas with lights trail, market, and Santa\'s grotto.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' }
    ]
  },

  "Bodiam Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Robertsbridge Station', detail: 'Southeastern trains from London Charing Cross (75 min). Castle is 5 miles — taxi or cycle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Robertsbridge+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚂', name: 'Kent & East Sussex Railway', detail: 'Heritage steam railway from Tenterden stops at Bodiam station, right by the castle. Seasonal service.' },
      { icon: '🅿️', name: 'National Trust Car Park', detail: 'Free for NT members. £5 for non-members. Small car park that fills quickly in summer.' }
    ],
    terrain: {
      chips: [
        { icon: '🚶', text: 'Mostly Flat', cls: 'green' },
        { icon: '⚠️', text: 'Uneven Interior', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Seating in Grounds', cls: 'green' },
        { icon: '🏛️', text: 'Spiral Stairs in Tower', cls: 'amber' }
      ],
      note: 'The approach and exterior are flat and accessible. The interior is a ruin with uneven ground, steps, and narrow passages. Only one tower can be climbed (spiral stairs). The moat walk is flat and accessible. Not fully wheelchair accessible inside the castle walls.'
    },
    events: [
      { month: 'APR', day: '14', name: 'Easter Egg Trail', desc: 'National Trust Easter trail around the castle grounds with chocolate prizes.', badge: 'family', badgeText: 'FAMILY', meta: 'Small charge' },
      { month: 'AUG', day: '5', name: 'Medieval Summer', desc: 'Living history encampment with medieval crafts, archery, and cooking demonstrations.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Tintagel Castle": {
    gettingThere: [
      { icon: '🅿️', name: 'Village Car Park', detail: 'Car park in Tintagel village (10 min walk). £4.50/day. Castle is a further steep walk down to the headland.' },
      { icon: '🚌', name: 'Bus from Camelford', detail: 'Western Greyhound route 594 from Camelford. Limited service — check timetable in advance.' },
      { icon: '🚂', name: 'Bodmin Parkway Station', detail: 'Nearest main station (25 miles). GWR trains from London Paddington. Car or taxi needed from station.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Very Steep Cliffs', cls: 'red' },
        { icon: '⚠️', text: 'Uneven & Exposed', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear Essential', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed to Weather', cls: 'amber' },
        { icon: '🆕', text: 'New Footbridge', cls: 'green' }
      ],
      note: 'This is a clifftop ruin with very steep paths and many steps. The new footbridge connecting the headland to the mainland is spectacular but involves significant elevation changes. Not suitable for wheelchairs. Beach accessible via steep path. Allow 2+ hours.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Arthurian Festival', desc: 'Celebrating the legendary links with King Arthur. Storytelling, performances, and living history.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Summer Living History', desc: 'English Heritage re-enactors bring the castle\'s medieval past to life with demonstrations.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Conwy Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Conwy Station', detail: 'Transport for Wales from Llandudno Junction (3 min) or direct from Chester. 5 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Conwy+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Town Centre Car Parks', detail: 'Pay & display car parks on the quayside and at Vicarage Gardens. No parking at the castle itself.' },
      { icon: '🚌', name: 'Arriva Bus Services', detail: 'Route 5 from Llandudno and Bangor stops in Conwy town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Stairs', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Surfaces', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Battlements', cls: 'amber' }
      ],
      note: 'The castle involves significant stair climbing to access towers and battlements. Ground level areas are accessible but the real experience is on the walls. Not wheelchair accessible beyond the courtyard. Spectacular views from the top but not for those with vertigo.'
    },
    events: [
      { month: 'MAY', day: '26', name: 'Conwy Medieval Festival', desc: 'The town and castle host a medieval festival with re-enactments, market, and street performances.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free entry to town events' },
      { month: 'OCT', day: '26', name: 'Conwy Halloween', desc: 'Spooky activities in and around the castle. Trick-or-treat trail through the town walls.', badge: 'family', badgeText: 'FAMILY', meta: 'Various prices' }
    ]
  },

  "Caernarfon Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Caernarfon Bus Station', detail: 'Regular buses from Bangor (25 min) where you can connect to trains. Bus station is 5 min walk to castle.' },
      { icon: '🅿️', name: 'Slate Quay Car Park', detail: 'Large car park adjacent to the castle on the waterfront. Pay & display.' },
      { icon: '🚂', name: 'Bangor Station', detail: 'Nearest mainline station (9 miles). Transport for Wales from Chester and Holyhead. Bus to Caernarfon.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '📐', text: 'Tower Stairs Steep', cls: 'amber' },
        { icon: '🚶', text: 'Paved Courtyard', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '🏛️', text: 'Museum Accessible', cls: 'green' }
      ],
      note: 'The courtyard and Royal Welsh Fusiliers Museum are accessible. The wall walks and towers require climbing many spiral stairs. The Eagle Tower has 159 steps. Cadw provides accessibility information in advance.'
    },
    events: [
      { month: 'JUL', day: '12', name: 'Caernarfon Food Festival', desc: 'Food festival in the castle grounds celebrating Welsh produce and street food.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free entry' },
      { month: 'AUG', day: '3', name: 'Mediaeval Day', desc: 'Living history event with medieval re-enactors, archery, and craft demonstrations.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Harlech Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Harlech Station', detail: 'Transport for Wales Cambrian Coast line. Scenic route from Machynlleth or Pwllheli. 10 min steep walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Harlech+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Beach Road Car Park', detail: 'Car parks in the village. The castle approach from the town is steep.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Very Steep Site', cls: 'red' },
        { icon: '⚠️', text: 'Many Steps', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Position', cls: 'amber' }
      ],
      note: 'Built on a high rock, Harlech has very steep approaches from all directions. The modern bridge entrance helps but the castle interior has many levels and stairs. Limited wheelchair access to courtyard only. Stunning views of Snowdonia and Cardigan Bay from the top.'
    },
    events: [
      { month: 'JUL', day: '18', name: 'Harlech Medieval Re-enactment', desc: 'Cadw living history event with costumed interpreters bringing the castle\'s siege history to life.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Bamburgh Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Chathill Station', detail: 'LNER East Coast Main Line request stop (5 miles from castle). Very limited service — check timetable.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free car park at the castle. Additional parking on the village green.' },
      { icon: '🚌', name: 'Arriva Bus X18', detail: 'From Alnwick and Berwick-upon-Tweed. Stops in Bamburgh village, 5 min walk to castle.' },
      { icon: '🚗', name: 'By Car', detail: 'Off the B1342, signed from the A1. About 50 miles north of Newcastle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '📐', text: 'Hilltop Position', cls: 'amber' },
        { icon: '🚶', text: 'Paved Paths Inside', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'The castle is on a basalt outcrop with a steep approach. Once inside, the ground floor rooms including the Armstrong Museum are accessible. Upper floors require stairs. The beach below is accessible from the village. Assistance dogs welcome.'
    },
    events: [
      { month: 'JUN', day: '22', name: 'Bamburgh Castle Fair', desc: 'Annual summer fair with local crafts, food, and entertainment in the castle grounds.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'AUG', day: '16', name: 'Living History Weekend', desc: 'Vikings, Normans, and medieval re-enactors set up camp in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'DEC', day: '7', name: 'Christmas at Bamburgh', desc: 'Festive decorations, winter market, and seasonal events in the state rooms.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' }
    ]
  },

  "Dunnottar Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Stonehaven Station', detail: 'ScotRail from Aberdeen (15 min) or Dundee. Castle is 2 miles south — 30 min walk along coastal path.', link: 'https://www.google.com/maps/dir/?api=1&destination=Stonehaven+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small car park off the A92 (signed). Free. 15 min walk from car park to castle entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'Signed from the A92 south of Stonehaven. 15 miles south of Aberdeen.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Very Steep Cliff Path', cls: 'red' },
        { icon: '⚠️', text: 'Uneven & Rocky', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear Essential', cls: 'amber' },
        { icon: '🌬️', text: 'Very Exposed', cls: 'amber' }
      ],
      note: 'Dramatic clifftop ruin accessible only by a steep, narrow path with many uneven steps cut into the rock. Not accessible for wheelchair users or those with significant mobility issues. The path descends steeply then climbs to the headland. Allow 30 minutes for the walk. Spectacular but demanding.'
    },
    events: []
  },

  "Glamis Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Dundee Station', detail: 'ScotRail from Edinburgh (1 hr 15) or Aberdeen (1 hr 15). Glamis is 12 miles north — taxi needed.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking in the castle grounds.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A94 between Dundee and Forfar. Well signed.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Garden Paths Good', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'The castle tour involves climbing stairs between floors. Ground floor rooms and the Italian Garden are accessible. The extensive grounds have mostly good paths. Birthplace of Princess Margaret and childhood home of the Queen Mother.'
    },
    events: [
      { month: 'JUN', day: '28', name: 'Glamis Proms', desc: 'Outdoor classical concert in the castle grounds with fireworks finale.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £35' },
      { month: 'JUL', day: '20', name: 'Glamis Vintage Rally', desc: 'Vintage vehicles, classic tractors, and steam engines in the castle grounds.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'DEC', day: '1', name: 'Glamis Christmas', desc: 'The castle decorated for Christmas with markets and Santa\'s grotto.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' }
    ]
  },

  "Balmoral Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Aberdeen Station', detail: 'ScotRail from Edinburgh or Inverness. Balmoral is 50 miles west — car essential.' },
      { icon: '🅿️', name: 'Estate Car Park', detail: 'Free parking at the visitor centre. Well signed from the A93.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A93 between Ballater and Braemar. About 1 hour from Aberdeen.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Grounds Accessible', cls: 'green' },
        { icon: '🚶', text: 'Garden Paths Good', cls: 'green' },
        { icon: '💺', text: 'Seating in Gardens', cls: 'green' },
        { icon: '🏠', text: 'Ballroom Only Inside', cls: 'amber' }
      ],
      note: 'Only the ballroom and grounds are open to the public (when the Royal Family is not in residence, typically April-July). The grounds are mostly accessible with good paths. The castle exhibitions are on one level. Estate walks vary in difficulty.'
    },
    events: [
      { month: 'APR', day: '1', name: 'Spring Opening', desc: 'The castle and grounds open for the season. Exhibitions in the ballroom change annually.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Admission charge' },
      { month: 'MAY', day: '18', name: 'Balmoral Highland Games', desc: 'Traditional Scottish highland games on the estate with caber tossing and Highland dancing.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' }
    ]
  },

  "Eilean Donan Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A87 at Dornie, between Kyle of Lochalsh and Inverness. About 1 hour from Inverness.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free visitor car park at the castle. Can be busy in summer.' },
      { icon: '🚌', name: 'Citylink Bus', detail: 'Glasgow/Inverness to Skye bus stops at Dornie. Limited service.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steps to Enter', cls: 'amber' },
        { icon: '🚶', text: 'Bridge Approach', cls: 'green' },
        { icon: '🏛️', text: 'Stairs Inside', cls: 'amber' },
        { icon: '💺', text: 'Café Seating', cls: 'green' }
      ],
      note: 'Access is via a stone bridge and there are steps to enter the castle. The interior involves narrow stairs between levels. Not wheelchair accessible inside. The exterior and bridge are the iconic photo spot. Visitor centre and café are accessible.'
    },
    events: [
      { month: 'MAY', day: '24', name: 'Eilean Donan Anniversary', desc: 'Celebrating the castle\'s restoration with special tours and talks about the Macrae clan history.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' }
    ]
  },

  "Dunluce Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A2 Causeway Coastal Route between Portrush and Bushmills. Well signed.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small car park at the entrance. Free.' },
      { icon: '🚌', name: 'Ulsterbus 172', detail: 'Coleraine to Ballycastle route stops near the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Clifftop Position', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Very Exposed', cls: 'amber' }
      ],
      note: 'Dramatic clifftop ruin with uneven surfaces and some steep paths. Limited accessibility for wheelchair users. The outer ward is accessible but the main castle ruins involve steps and uneven ground. Spectacular Antrim Coast location.'
    },
    events: []
  },

  "Kilkenny Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Kilkenny MacDonagh Station', detail: 'Irish Rail from Dublin Heuston (1 hr 40 min). 15 min walk to castle through the town.', link: 'https://www.google.com/maps/dir/?api=1&destination=Kilkenny+MacDonagh+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚌', name: 'Bus Éireann', detail: 'Regular services from Dublin, Cork, and Waterford to Kilkenny bus stop.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Pay & display parking in Kilkenny town. The Parade car park is closest to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' }
      ],
      note: 'Kilkenny Castle is well maintained and largely accessible. The parkland is flat with good paths. The castle interior has lift access to the picture gallery. OPW provides guided tours. Free admission.'
    },
    events: [
      { month: 'AUG', day: '10', name: 'Kilkenny Arts Festival', desc: 'Annual arts festival using the castle as a venue for concerts, theatre, and visual arts.', badge: 'concert', badgeText: 'CONCERT', meta: 'Various ticket prices' },
      { month: 'JUN', day: '14', name: 'Cat Laughs Comedy Festival', desc: 'International comedy festival with events in the castle grounds.', badge: 'concert', badgeText: 'CONCERT', meta: 'Various prices' },
      { month: 'DEC', day: '5', name: 'Yulefest Kilkenny', desc: 'Christmas festival with the castle as centrepiece. Markets, lights, and family activities.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free entry to grounds' }
    ]
  },

  "Rock of Cashel": {
    gettingThere: [
      { icon: '🚌', name: 'Bus Éireann', detail: 'Regular Dublin-Cork buses stop at Cashel town (2 hrs from Dublin). 10 min walk uphill to Rock.', link: 'https://www.google.com/maps/dir/?api=1&destination=Rock+of+Cashel&travelmode=transit', linkText: 'Get directions →' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Free parking in Cashel town. The approach to the Rock is steep from all sides.' },
      { icon: '🚗', name: 'By Car', detail: 'Just off the M8 motorway between Dublin and Cork. Well signed from the motorway.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Hilltop', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Interior', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Position', cls: 'amber' },
        { icon: '🚻', text: 'Toilets at Base', cls: 'green' }
      ],
      note: 'The Rock sits on a limestone outcrop with a steep path to the top. The ruins have uneven floors and some areas with steps. A new boardwalk improves access somewhat but the site is not fully wheelchair accessible. Spectacular 360-degree views from the top. Allow 1-2 hours.'
    },
    events: [
      { month: 'JUN', day: '16', name: 'Bloomsday at Cashel', desc: 'Literary events celebrating James Joyce with readings and performances at the Rock.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free' },
      { month: 'SEP', day: '14', name: 'Heritage Week', desc: 'Special guided tours and talks about the Rock\'s history during national Heritage Week.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free' }
    ]
  },

  "Trim Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus from Dublin', detail: 'Bus Éireann route 111 from Dublin Busáras (1 hr 15 min). Stops in Trim town centre, 5 min walk.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Free parking in Trim town. Car park near the castle entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'About 45 km northwest of Dublin on the R154. Well signed from the M3.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Stairs in Keep', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🚶', text: 'Grounds Mostly Flat', cls: 'green' }
      ],
      note: 'The largest Anglo-Norman castle in Ireland. The grounds are accessible but the keep interior (guided tour only) involves steep narrow stairs. Used as a filming location for Braveheart. The town walk along the Boyne is flat and pleasant.'
    },
    events: [
      { month: 'JUN', day: '20', name: 'Trim Castle Medieval Festival', desc: 'Re-enactments, medieval market, and living history in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free entry to grounds' },
      { month: 'SEP', day: '8', name: 'Heritage Week Tours', desc: 'Special OPW tours exploring parts of the castle not usually accessible.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free — booking required' }
    ]
  },

  "Cardiff Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Cardiff Central Station', detail: 'GWR from London Paddington (2 hrs). Transport for Wales from across Wales. 10 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Cardiff+Central+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🚌', name: 'Cardiff Bus', detail: 'The castle is in the city centre. Most bus routes pass nearby on Castle Street.' },
      { icon: '🅿️', name: 'City Centre Parking', detail: 'NCP car parks nearby including North Edward Street. Castle has no dedicated parking.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Grounds Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '📐', text: 'Keep on Motte', cls: 'amber' },
        { icon: '🏛️', text: 'Castle Apartments: Stairs', cls: 'amber' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The grounds and wartime tunnels are accessible. The ornate Victorian Gothic apartments involve stairs. The Norman keep on its motte has steep steps. Audio tours available. The Interpretation Centre is fully accessible.'
    },
    events: [
      { month: 'MAY', day: '30', name: 'Cardiff Castle Food Festival', desc: 'Street food traders and local producers set up in the castle grounds.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free entry' },
      { month: 'AUG', day: '1', name: 'Summer Concert Series', desc: 'Major music acts perform in the castle grounds. Past performers include Stereophonics and Manic Street Preachers.', badge: 'concert', badgeText: 'CONCERT', meta: 'Separate tickets' },
      { month: 'NOV', day: '15', name: 'Cardiff Castle Christmas', desc: 'Winter wonderland in the castle grounds with ice rink, market, and festive shows.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Various prices' }
    ]
  },

  "Caerphilly Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Caerphilly Station', detail: 'Transport for Wales from Cardiff (20 min). Frequent service. 10 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Caerphilly+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Caerphilly town centre. Short walk to the castle.' },
      { icon: '🚌', name: 'Stagecoach Buses', detail: 'Regular services from Cardiff city centre.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Flat Inner Ward', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Tower Stairs', cls: 'amber' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The second largest castle in Britain after Windsor. The inner ward is flat and accessible. The leaning tower and wall walks involve stairs. The extensive water defences can be viewed from accessible paths. Cadw managed.'
    },
    events: [
      { month: 'JUL', day: '6', name: 'Big Cheese Festival', desc: 'Massive free festival with re-enactments, music, and entertainment in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free' },
      { month: 'AUG', day: '24', name: 'Medieval Summer', desc: 'Cadw living history events with knights, archery, and medieval crafts.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Arundel Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Arundel Station', detail: 'Southern trains from London Victoria (90 min). 10 min walk uphill to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Arundel+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'On-site parking available (charge applies). Also town centre car parks.' },
      { icon: '🚌', name: 'Stagecoach 85', detail: 'Connects Arundel with Worthing and Chichester.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '📐', text: 'Hilltop Location', cls: 'amber' },
        { icon: '🚶', text: 'Gardens: Good Paths', cls: 'green' },
        { icon: '🏛️', text: 'Stairs Inside', cls: 'amber' },
        { icon: '💺', text: 'Seating in Gardens', cls: 'green' }
      ],
      note: 'The castle is on a hilltop with a steep approach. Some ground floor rooms are accessible but much of the castle involves stairs. The gardens, including the Collector Earl\'s Garden, have good paths. Still home to the Duke of Norfolk.'
    },
    events: [
      { month: 'APR', day: '20', name: 'Tulip Festival', desc: 'Over 60,000 tulips in bloom across the castle gardens. Photography is spectacular.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'JUN', day: '22', name: 'Jousting & Medieval Tournament', desc: 'Knights in armour compete in the tiltyard. One of England\'s premier jousting events.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Castle Siege!', desc: 'Re-enactment of a medieval siege with trebuchets, battering rams, and costumed soldiers.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'DEC', day: '1', name: 'Christmas at Arundel', desc: 'The castle decorated for Christmas with themed rooms and seasonal entertainment.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' }
    ]
  },

  "Hever Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Hever Station', detail: 'Southern trains from London Bridge (45 min, change at Oxted). Small station, 1 mile walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Hever+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large free car park at the castle entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'Signed from the B2026 near Edenbridge. About 30 miles south of London.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Gardens Accessible', cls: 'green' },
        { icon: '🚶', text: 'Good Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🏛️', text: 'Castle: Some Stairs', cls: 'amber' }
      ],
      note: 'The extensive gardens including the Italian Garden, Tudor Garden, and Water Maze are largely accessible. The castle interior has some stairs between floors. Wheelchair access to ground floor rooms. Anne Boleyn\'s childhood home.'
    },
    events: [
      { month: 'FEB', day: '14', name: 'Valentine\'s at Hever', desc: 'Romantic evening events in the castle with candlelit tours.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'JUN', day: '28', name: 'Jousting Tournament', desc: 'Knights compete in the tournament field. One of the best jousting events in England.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '15', name: 'Open Air Theatre', desc: 'Shakespeare and other productions performed on the castle lawns.', badge: 'concert', badgeText: 'CONCERT', meta: 'Separate tickets' },
      { month: 'DEC', day: '1', name: 'Christmas at Hever', desc: 'Magical Christmas experience with themed rooms, Santa\'s grotto, and a Christmas market.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' }
    ]
  },

  "Highclere Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Newbury Station', detail: 'GWR from London Paddington (55 min). Castle is 5 miles south — taxi needed (no public transport).', link: 'https://www.google.com/maps/dir/?api=1&destination=Newbury+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Parking', detail: 'Free parking in the castle grounds on open days.' },
      { icon: '🚗', name: 'By Car', detail: 'Signed from the A34. Between Newbury and Whitchurch in Hampshire.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Gardens: Good Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'Famous as the real Downton Abbey. Open on limited dates — booking essential. Ground floor State Rooms are accessible. The Egyptian Exhibition in the cellar has step-free access. Gardens are mostly accessible. Upper floors involve stairs.'
    },
    events: [
      { month: 'JUL', day: '12', name: 'Highclere Castle Summer', desc: 'Summer opening with tours of the State Rooms and Egyptian Exhibition.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Tickets from £26' },
      { month: 'SEP', day: '21', name: 'Downton Abbey Themed Days', desc: 'Special themed tours celebrating the Downton Abbey connection with costumed guides.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' },
      { month: 'DEC', day: '5', name: 'Christmas at Highclere', desc: 'The castle decorated for a Victorian Christmas. Extremely popular — sells out months ahead.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Tickets from £75' }
    ]
  },

  "Alnwick Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Alnmouth Station', detail: 'LNER from London King\'s Cross (3 hrs) or Newcastle (25 min). Castle is 4 miles — bus or taxi.', link: 'https://www.google.com/maps/dir/?api=1&destination=Alnmouth+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large car park at the castle. Free for visitors.' },
      { icon: '🚌', name: 'Arriva Bus X15/X18', detail: 'From Newcastle and Berwick. Stops in Alnwick town centre, 5 min walk.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '👶', text: 'Very Family Friendly', cls: 'green' },
        { icon: '🏛️', text: 'Some Stairs Inside', cls: 'amber' }
      ],
      note: 'Famous as Hogwarts in Harry Potter. The State Rooms are accessible via lift. Grounds are largely flat and paved. The Alnwick Garden next door is fully accessible. Broomstick training and dragon activities for children. Combined tickets available.'
    },
    events: [
      { month: 'APR', day: '5', name: 'Easter at Alnwick', desc: 'Harry Potter themed Easter activities including broomstick training and dragon quests.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'JUL', day: '28', name: 'Harry Potter Celebration', desc: 'Special Harry Potter themed events with wand combat, potions classes, and Quidditch.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'AUG', day: '15', name: 'Medieval Alnwick', desc: 'Knights, jesters, and medieval entertainers throughout the castle. Jousting in the grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'OCT', day: '25', name: 'Halloween at Alnwick', desc: 'Broomstick training gets spooky! Pumpkin carving and Halloween trails.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Kenilworth Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Kenilworth Station', detail: 'West Midlands Railway from Coventry (7 min) or Leamington Spa (12 min). 15 min walk to castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'English Heritage car park at the castle. Free for members.' },
      { icon: '🚌', name: 'Stagecoach 16', detail: 'From Coventry and Leamington Spa. Stops near the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '🚶', text: 'Grounds Mostly Flat', cls: 'green' },
        { icon: '⚠️', text: 'Uneven Ruin Interior', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Seating in Gardens', cls: 'green' },
        { icon: '🌿', text: 'Elizabethan Garden', cls: 'green' }
      ],
      note: 'The Elizabethan Garden has been beautifully restored and is accessible. The ruined castle interior has uneven surfaces and some steps. The Great Hall and Leicester\'s Building are impressive ruins. The mere (lake) was partially restored. English Heritage site.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Elizabethan Garden Party', desc: 'Costumed interpreters recreate Robert Dudley\'s famous entertainment for Elizabeth I.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Medieval Festival', desc: 'Living history encampment with combat displays, archery, and craft demonstrations.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Corfe Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Corfe Castle Station', detail: 'Swanage Railway heritage steam train from Norden or Swanage. Seasonal service. Station in village.', link: 'https://www.google.com/maps/dir/?api=1&destination=Corfe+Castle+Station&travelmode=transit', linkText: 'Get directions →' },
      { icon: '🅿️', name: 'National Trust Car Park', detail: 'Car park in the village. Free for NT members. Also parking at Norden Park & Ride.' },
      { icon: '🚌', name: 'Purbeck Breezer 40', detail: 'From Poole and Swanage. Stops in Corfe Castle village.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Hill', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ruins', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Hilltop', cls: 'amber' }
      ],
      note: 'The castle ruins sit dramatically on a hill above the village. The path up is steep and the interior is very uneven with rubble and broken walls. Not wheelchair accessible. The village below has the famous gap in the Purbeck Hills. Allow 1-2 hours. National Trust.'
    },
    events: [
      { month: 'APR', day: '14', name: 'NT Easter Trail', desc: 'Easter egg trail through the castle grounds for families.', badge: 'family', badgeText: 'FAMILY', meta: 'Small charge' },
      { month: 'OCT', day: '31', name: 'Corfe Castle Halloween', desc: 'Pumpkin trail and spooky stories in the atmospheric ruins. Torch-lit evening tours.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' }
    ]
  },

  "Fountains Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Harrogate Station', detail: 'Northern trains from Leeds (35 min) or York (35 min). Abbey is 10 miles west — taxi needed.' },
      { icon: '🅿️', name: 'Visitor Centre Car Park', detail: 'Large NT car park at the visitor centre. Free for members. Well signed from B6265.' },
      { icon: '🚗', name: 'By Car', detail: '4 miles west of Ripon off the B6265. Signed from Ripon and A1(M).' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '🚶', text: 'Mixed Paths', cls: 'amber' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Some Areas Buggy Friendly', cls: 'green' }
      ],
      note: 'The largest monastic ruin in England set in the Studley Royal Water Garden (UNESCO World Heritage Site). Some paths are uneven, especially around the abbey ruins. The water garden has better paths. Mobility vehicles available to borrow. The deer park is largely accessible.'
    },
    events: [
      { month: 'JUN', day: '15', name: 'Studley Royal Garden Festival', desc: 'Celebrating the 18th-century water garden with guided walks and garden talks.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'NOV', day: '20', name: 'Fountains Abbey Illuminated', desc: 'The abbey ruins lit with spectacular coloured floodlights. A magical winter evening experience.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'DEC', day: '1', name: 'Christmas at Fountains', desc: 'The illuminations continue alongside festive craft activities and seasonal food.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' }
    ]
  },

  "Whitby Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Whitby Station', detail: 'Northern trains from Middlesbrough (90 min, scenic Esk Valley line). Abbey is 15 min walk uphill.', link: 'https://www.google.com/maps/dir/?api=1&destination=Whitby+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'English Heritage car park near the abbey (charge). Also town centre car parks.' },
      { icon: '🚌', name: 'Coastliner 840', detail: 'From Leeds via York and Pickering (3.5 hrs). Stops in Whitby town.' },
      { icon: '🚗', name: 'By Car', detail: 'A171 from Scarborough or Middlesbrough. Parking can be difficult in summer.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: '199 Steps to Abbey', cls: 'red' },
        { icon: '⚠️', text: 'Uneven Ruin', cls: 'amber' },
        { icon: '🌬️', text: 'Very Exposed', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'The famous 199 steps climb from the town to the abbey headland (or drive to the car park at the top). The ruins are exposed to sea winds and have uneven surfaces. Not wheelchair accessible inside the ruins. The headland car park allows views without climbing. Inspiration for Bram Stoker\'s Dracula.'
    },
    events: [
      { month: 'APR', day: '26', name: 'Whitby Goth Weekend', desc: 'The town\'s famous gothic festival centres around the abbey. Music, markets, and dramatic costumes.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to attend' },
      { month: 'OCT', day: '25', name: 'Whitby Goth Weekend (Autumn)', desc: 'The second annual goth weekend. The abbey is especially atmospheric in autumn mist.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to attend' },
      { month: 'AUG', day: '1', name: 'English Heritage Events', desc: 'Living history and costumed interpretation telling the story of St Hild\'s monastery.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Glastonbury Abbey": {
    gettingThere: [
      { icon: '🚌', name: 'First Bus 376/377', detail: 'From Wells (15 min) and Bristol (1 hr 15 min). Stops in Glastonbury town centre.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Several car parks in Glastonbury. The abbey is in the town centre.' },
      { icon: '🚂', name: 'Castle Cary Station', detail: 'GWR from London Paddington (1 hr 40 min). Glastonbury is 12 miles — taxi needed.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Flat Grass Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The abbey ruins are set in 36 acres of flat parkland. Paths are mostly grass but well maintained. Wheelchair accessible throughout the grounds. The museum and shop are accessible. Legendary burial site of King Arthur. Dogs welcome on leads.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Summer Solstice', desc: 'Special events for the longest day. Glastonbury has deep spiritual connections to the solstice.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'AUG', day: '10', name: 'Abbey Living History', desc: 'Monks and medieval characters bring the abbey\'s story to life.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'DEC', day: '15', name: 'Christmas at the Abbey', desc: 'Carol services and candlelit events in the atmospheric ruins.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Booking advised' }
    ]
  },

  "Bolton Priory": {
    gettingThere: [
      { icon: '🚂', name: 'Skipton Station', detail: 'Northern trains from Leeds (40 min). Bolton Abbey is 6 miles east — taxi or Dalesbus.' },
      { icon: '🅿️', name: 'Bolton Abbey Car Park', detail: '£12 per car (includes access to the estate). Multiple car parks along the estate.' },
      { icon: '🚌', name: 'Dalesbus 74', detail: 'Seasonal service from Ilkley on Sundays and bank holidays.' }
    ],
    terrain: {
      chips: [
        { icon: '🚶', text: 'Riverside Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '⚠️', text: 'Some Uneven Ground', cls: 'amber' },
        { icon: '👶', text: 'Buggy Friendly (Main Paths)', cls: 'green' }
      ],
      note: 'Beautiful setting on the River Wharfe in the Yorkshire Dales. The priory ruins are on flat ground. The estate has extensive walks from easy riverside strolls to the challenging Strid gorge walk. The Strid is extremely dangerous — stay on marked paths.'
    },
    events: [
      { month: 'MAY', day: '5', name: 'Bolton Abbey Steam Gala', detail: 'The Embsay & Bolton Abbey Railway runs special steam services.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'OCT', day: '15', name: 'Autumn Colours Walk', desc: 'Guided walks through the estate\'s spectacular autumn foliage.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with estate admission' }
    ]
  },

  "Rievaulx Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Thirsk Station', detail: 'LNER from London King\'s Cross (2.5 hrs) or York (30 min). Abbey is 15 miles — taxi needed.' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'English Heritage car park at the abbey. Free for members.' },
      { icon: '🚗', name: 'By Car', detail: '2.5 miles west of Helmsley off the B1257. Well signed.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '🚶', text: 'Gravel & Grass Paths', cls: 'green' },
        { icon: '⚠️', text: 'Uneven in Ruins', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'Set in a beautiful valley. The paths around the ruins are gravel and generally good. Inside the ruins the ground is uneven in places. The museum is accessible. Rievaulx Terrace (National Trust, separate site above) has spectacular views but steep access.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Living History Day', desc: 'Cistercian monks brought to life with costumed interpreters explaining monastic life.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Tintern Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Chepstow Station', detail: 'GWR from Bristol/Newport. Tintern is 6 miles north — limited bus service or taxi.' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'Cadw car park at the abbey. Also parking in the village.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A466 in the Wye Valley. Scenic drive from Chepstow or Monmouth.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Flat Site', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' }
      ],
      note: 'The abbey is on flat ground in the Wye Valley and is one of the most accessible large ruins. Paths around and within the ruins are generally good. The famous west window and nave are spectacular. Immortalised by Wordsworth and Turner. Cadw managed.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Summer Solstice at Tintern', desc: 'Special evening opening with the sun setting through the great west window.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' }
    ]
  },

  "Dunster Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Dunster Station (WSR)', detail: 'West Somerset Heritage Railway from Bishops Lydeard. Seasonal steam service.' },
      { icon: '🅿️', name: 'NT Car Parks', detail: 'National Trust car parks in Dunster village and at the castle. Free for members.' },
      { icon: '🚗', name: 'By Car', detail: 'In Dunster village off the A39 near Minehead. Well signed from Minehead and the M5.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Hill to Castle', cls: 'amber' },
        { icon: '♿', text: 'Shuttle Available', cls: 'green' },
        { icon: '🚶', text: 'Castle Interior: Good', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'The castle is on a steep hill above the village. The National Trust runs a Land Rover shuttle for those with mobility issues. Once inside, the castle is well maintained with good access to main rooms. The subtropical garden is terraced and steep in places.'
    },
    events: [
      { month: 'DEC', day: '1', name: 'Dunster by Candlelight', desc: 'The famous annual event where the whole village is lit by candles and the castle opens at night.', badge: 'special', badgeText: 'SPECIAL', meta: 'Various events' },
      { month: 'AUG', day: '22', name: 'Summer Activities', desc: 'Family trails and activities in the castle and grounds during school holidays.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Castle Howard": {
    gettingThere: [
      { icon: '🚂', name: 'Malton Station', detail: 'TransPennine Express from York (20 min). Castle Howard is 6 miles — taxi needed.' },
      { icon: '🅿️', name: 'Estate Car Park', detail: 'Free parking in the grounds. Well signed from the A64.' },
      { icon: '🚌', name: 'Coastliner 181', detail: 'Seasonal service from York stops at the castle gate (summer only).' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Good Paths', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' }
      ],
      note: 'The house and gardens are well maintained and largely accessible. Wheelchair access to ground floor rooms. The gardens are extensive — a full tour is several miles. Buggies and wheelchairs welcome. Famous as Brideshead Revisited filming location.'
    },
    events: [
      { month: 'JUN', day: '15', name: 'Castle Howard Proms', desc: 'Open-air classical concert in the grounds with spectacular fireworks over the lake.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £45' },
      { month: 'AUG', day: '24', name: 'Summer in the Gardens', desc: 'Extended garden opening with special activities and guided tours.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'NOV', day: '15', name: 'Christmas at Castle Howard', desc: 'The house elaborately decorated with a different Christmas theme each year. Truly magical.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' }
    ]
  },

  "Lincoln Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Lincoln Central Station', detail: 'EMR from Nottingham (1 hr) or LNER from London King\'s Cross (2 hrs). 15 min uphill walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Lincoln+Central+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Castle Hill Car Parks', detail: 'Several car parks near the castle. The Lawn complex is closest.' },
      { icon: '🚌', name: 'Walk n Ride', detail: 'Park & Ride services run from outside the city to the uphill area.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🚶', text: 'Paved Wall Walk', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '📐', text: 'Steep Hill from City', cls: 'amber' }
      ],
      note: 'The castle itself is well maintained with an accessible wall walk and lift access to the Victorian prison. Houses one of four surviving copies of Magna Carta in a purpose-built vault. The approach from the city centre (Steep Hill) is very steep — consider driving up.'
    },
    events: [
      { month: 'JUN', day: '15', name: 'Magna Carta Festival', desc: 'Celebrating the castle\'s Magna Carta connection with living history and special exhibitions.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' },
      { month: 'DEC', day: '5', name: 'Lincoln Christmas Market', desc: 'One of England\'s best Christmas markets, held in the castle grounds and surrounding area.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free entry' }
    ]
  },

  "Pembroke Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Pembroke Station', detail: 'Transport for Wales from Swansea (2.5 hrs) or Tenby (30 min). 5 min walk to castle.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Car parks in Pembroke town. The castle is in the centre of town.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A4139. Well signed from the A477.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Many Stairs', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Surfaces', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🚻', text: 'Toilets Available', cls: 'green' }
      ],
      note: 'Birthplace of Henry VII. The great round keep is impressive but involves a spiral staircase. The outer ward has uneven paths. The Wogan Cavern beneath the castle involves steep stairs. Not fully wheelchair accessible but the gatehouse exhibition is accessible.'
    },
    events: [
      { month: 'AUG', day: '3', name: 'Medieval Pembroke', desc: 'Knights, archery, and medieval living history in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' },
      { month: 'OCT', day: '26', name: 'Spooky Pembroke', desc: 'Halloween events in the castle with torch-lit tours and spooky stories.', badge: 'special', badgeText: 'SPECIAL', meta: 'Booking essential' }
    ]
  },

  "Chepstow Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Chepstow Station', detail: 'GWR from Bristol Temple Meads (30 min) or Newport (20 min). 10 min walk to castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Pay & display at the castle. Also town centre car parks.' },
      { icon: '🚗', name: 'By Car', detail: 'Just off the M48 at the Welsh end of the Severn Bridge.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Cliffside Position', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Surfaces', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Limited Seating', cls: 'amber' }
      ],
      note: 'Built on cliffs above the River Wye. The oldest surviving post-Roman stone castle in Britain. Uneven ground throughout with some steep drops (fenced). The Great Tower is accessible but upper levels involve stairs. Cadw managed.'
    },
    events: [
      { month: 'JUL', day: '13', name: 'Chepstow Castle Medieval Fair', desc: 'Living history event with Norman and medieval re-enactors.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Raglan Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A40 between Abergavenny and Monmouth. Well signed. No public transport to the castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Cadw car park at the entrance. Free.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '📐', text: 'Stairs in Tower', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🚶', text: 'Courtyard Accessible', cls: 'green' }
      ],
      note: 'A grand late medieval castle with the spectacular Great Tower (Yellow Tower of Gwent). The courtyard is relatively flat but the tower and wall walks involve stairs. Some uneven surfaces in the ruined areas. Cadw managed.'
    },
    events: [
      { month: 'AUG', day: '10', name: 'Medieval Living History', desc: 'Cadw events with costumed interpreters bringing Tudor life at Raglan to life.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Ludlow Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Ludlow Station', detail: 'Transport for Wales from Shrewsbury (30 min) or Hereford (25 min). 10 min walk to castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Pay & display in Ludlow town. Castle Square parking nearby.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A49 in south Shropshire. Well signed from the A49.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Surfaces', cls: 'amber' },
        { icon: '📐', text: 'Stairs in Keep', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Seating in Grounds', cls: 'green' }
      ],
      note: 'A large and impressive castle ruin in the centre of Ludlow. The inner bailey has uneven ground and the keep involves spiral stairs. The outer bailey is more accessible. The round Chapel of St Mary Magdalene is unique in England. The castle grounds are used for major events.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Ludlow Festival', desc: 'Open-air Shakespeare performed in the castle\'s inner bailey. A summer tradition since 1960.', badge: 'concert', badgeText: 'CONCERT', meta: 'Tickets from £20' },
      { month: 'SEP', day: '13', name: 'Ludlow Food Festival', desc: 'One of Britain\'s premier food festivals, held in the castle grounds.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' },
      { month: 'NOV', day: '29', name: 'Ludlow Medieval Christmas Fayre', desc: 'Medieval-themed Christmas market with jousting, jesters, and festive food.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Admission charge' }
    ]
  },

  "Stokesay Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Craven Arms Station', detail: 'Transport for Wales from Shrewsbury (20 min). Castle is 1 mile south — 15 min walk.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'English Heritage car park at the castle. Free for members.' },
      { icon: '🚗', name: 'By Car', detail: 'Off the A49 at Craven Arms in south Shropshire.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '🚶', text: 'Courtyard Flat', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in Tower', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'The finest surviving 13th-century fortified manor house in England. The Great Hall is accessible and magnificent. The solar and tower involve stairs. The courtyard is flat. The timber-framed gatehouse is particularly photogenic.'
    },
    events: []
  },

  "Goodrich Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'Off the A40, 5 miles south of Ross-on-Wye. Well signed.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'English Heritage car park. Free for members.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '📐', text: 'Stairs Throughout', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'A splendid red sandstone castle ruin overlooking the Wye Valley. The keep and towers involve spiral stairs. Ground level areas have uneven surfaces. Not fully wheelchair accessible but the courtyard and Great Hall area are manageable.'
    },
    events: []
  },

  "Rochester Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Rochester Station', detail: 'Southeastern High Speed from London St Pancras (40 min). 10 min walk to castle.', link: 'https://www.google.com/maps/dir/?api=1&destination=Rochester+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'Blue Boar Lane Car Park', detail: 'Pay & display near the castle and cathedral.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Stairs in Keep', cls: 'amber' },
        { icon: '⚠️', text: 'Narrow Passages', cls: 'amber' },
        { icon: '🚶', text: 'Castle Grounds Flat', cls: 'green' },
        { icon: '💺', text: 'Gardens Seating', cls: 'green' }
      ],
      note: 'The castle grounds are flat and accessible. The massive Norman keep is the main attraction but involves many steep narrow stairs. Views from the top are worth the climb but not accessible for wheelchair users. Adjacent to Rochester Cathedral.'
    },
    events: [
      { month: 'JUN', day: '7', name: 'Rochester Dickens Festival', desc: 'The town celebrates Charles Dickens with parades and events. The castle is a backdrop.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free' },
      { month: 'DEC', day: '6', name: 'Rochester Christmas Market', desc: 'Dickensian Christmas festival in the castle grounds and High Street.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free' }
    ]
  },

  "Scarborough Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Scarborough Station', detail: 'TransPennine Express from York (50 min). Castle is 20 min walk uphill through the town.' },
      { icon: '🅿️', name: 'Castle Road Car Park', detail: 'Pay & display on Castle Road, near the entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'Follow signs to the castle from the A64 or town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Headland', cls: 'amber' },
        { icon: '🌬️', text: 'Very Exposed', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'Dramatic headland position with steep approaches. The castle ruins are spread over a large area with uneven ground. The keep is a ruin and not climbable. Spectacular views along the coast. Not wheelchair accessible in the main ruin areas. English Heritage.'
    },
    events: [
      { month: 'AUG', day: '3', name: 'Scarborough Castle Siege', desc: 'Living history weekend recreating one of the castle\'s many sieges.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Skipton Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Skipton Station', detail: 'Northern trains from Leeds (40 min) or settle-Carlisle line. 5 min walk to castle.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Several car parks in Skipton. High Street is closest to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Courtyard Paved', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'One of the most complete and well-preserved medieval castles in England. The courtyard with its famous yew tree is accessible. The tour involves stairs to upper rooms. Lady Anne Clifford\'s restoration is remarkably intact. Private ownership — admission by tour.'
    },
    events: []
  },

  "Richmond Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus from Darlington', detail: 'Arriva route X26/X27 from Darlington rail station (40 min). Stops in Richmond Market Place.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Richmond. The castle is in the town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Keep: 100+ Steps', cls: 'amber' },
        { icon: '🚶', text: 'Courtyard Accessible', cls: 'green' },
        { icon: '🌬️', text: 'Exposed Battlements', cls: 'amber' }
      ],
      note: 'The great keep has over 100 steps to the top but the views over Swaledale are magnificent. The courtyard (Scotland\'s Hall) is accessible at ground level. One of the earliest stone castles in England. English Heritage.'
    },
    events: []
  },

  "Helmsley Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'In Helmsley town centre off the A170. Well signed from the A19 and Thirsk.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Helmsley Market Place, very close to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '💺', text: 'Seating in Grounds', cls: 'green' }
      ],
      note: 'Atmospheric castle ruin in the charming market town. Uneven surfaces throughout. The keep area involves climbing. Good starting point for the Cleveland Way National Trail. English Heritage.'
    },
    events: []
  },

  "Middleham Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'In Middleham village in Wensleydale. Off the A6108 between Leyburn and Masham.' },
      { icon: '🅿️', name: 'Village Parking', detail: 'Small car park in the village.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ruin', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '📐', text: 'Keep Stairs', cls: 'amber' }
      ],
      note: 'Childhood home of Richard III. The massive Norman keep is largely intact and can be explored. Stairs to upper levels. Surrounding ruins have uneven ground. Also known for its racehorse training stables in the village. English Heritage.'
    },
    events: []
  },

  "Pickering Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Pickering Station (NYMR)', detail: 'North Yorkshire Moors Railway heritage steam trains from Grosmont/Whitby. 10 min walk to castle.' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Pickering town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '⚠️', text: 'Uneven Ground', cls: 'amber' },
        { icon: '📐', text: 'Motte & Bailey: Steep', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'A classic motte-and-bailey castle. The motte is steep and grassy. The curtain wall and towers have uneven surfaces. The inner ward is more accessible. Check out the medieval wall paintings in St Peter and St Paul\'s Church nearby. English Heritage.'
    },
    events: [
      { month: 'OCT', day: '12', name: 'Pickering War Weekend', desc: 'WWII re-enactment weekend in the town, with the castle as a backdrop.', badge: 'special', badgeText: 'SPECIAL', meta: 'Various events' }
    ]
  },

  "Bolton Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'In Castle Bolton village in Wensleydale. Off the A684 between Leyburn and Hawes.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Stairs', cls: 'amber' },
        { icon: '⚠️', text: 'Partially Ruined', cls: 'amber' },
        { icon: '🚶', text: 'Garden Accessible', cls: 'green' },
        { icon: '💺', text: 'Tea Room', cls: 'green' }
      ],
      note: 'Where Mary Queen of Scots was imprisoned. The castle is partially ruined but several floors are accessible via stairs. The medieval garden is on level ground. The wild boar enclosure and bird of prey centre are accessible. Spectacular Wensleydale views.'
    },
    events: [
      { month: 'AUG', day: '18', name: 'Medieval Day at Bolton', desc: 'Living history with re-enactors, falconry displays, and archery.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Carlisle Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Carlisle Station', detail: 'Major rail hub. Avanti from London Euston (3.5 hrs), ScotRail from Glasgow/Edinburgh. 10 min walk.', link: 'https://www.google.com/maps/dir/?api=1&destination=Carlisle+Station&travelmode=transit', linkText: 'Get train directions →' },
      { icon: '🅿️', name: 'City Centre Parking', detail: 'NCP and council car parks in Carlisle. The castle is in the city centre.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partially Accessible', cls: 'amber' },
        { icon: '🚶', text: 'Courtyard Flat', cls: 'green' },
        { icon: '🏛️', text: 'Keep Stairs', cls: 'amber' },
        { icon: '🚻', text: 'Toilets Available', cls: 'green' }
      ],
      note: 'The castle is still in military use (Cumbria\'s Museum of Military Life is inside). The outer ward and museum are accessible. The medieval keep involves stairs. The notorious \'licking stones\' in the dungeon can be visited. English Heritage.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Border Reivers Weekend', desc: 'Living history event celebrating the turbulent Border Reiver history.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free with admission' }
    ]
  },

  "Dunrobin Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Dunrobin Castle Station', detail: 'ScotRail Far North Line (request stop, summer only). Station is at the castle gates.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle.' },
      { icon: '🚗', name: 'By Car', detail: 'On the A9, 1 mile north of Golspie in Sutherland. About 50 miles north of Inverness.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Garden Paths Good', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'Scotland\'s most northerly great house, resembling a French château. Ground floor rooms and the museum are accessible. The formal gardens (inspired by Versailles) are on terraces with steps between levels. Falconry displays daily in summer.'
    },
    events: [
      { month: 'JUL', day: '15', name: 'Falconry Display Season', desc: 'Daily falconry displays in the castle gardens throughout summer.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Urquhart Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A82 on the shore of Loch Ness, 2 miles east of Drumnadrochit.' },
      { icon: '🅿️', name: 'Visitor Centre Car Park', detail: 'Historic Scotland car park. Can be very busy in summer — arrive early.' },
      { icon: '🚌', name: 'Stagecoach 17', detail: 'Inverness to Drumnadrochit. From Drumnadrochit it\'s 2 miles to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Steep Path Down', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Ruin', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Lochside', cls: 'amber' }
      ],
      note: 'The visitor centre is at the top; the castle ruins are down a steep path to the loch shore. Not wheelchair accessible to the ruins themselves. The visitor centre and exhibition are accessible and have excellent views. One of the most photographed castles in Scotland. Keep an eye out for Nessie!'
    },
    events: []
  },

  "Cawdor Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the B9090, 5 miles south-west of Nairn. Signed from the A96.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Gardens Accessible', cls: 'green' },
        { icon: '🚶', text: 'Good Garden Paths', cls: 'green' },
        { icon: '🏛️', text: 'Stairs Inside Castle', cls: 'amber' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'Associated with Shakespeare\'s Macbeth, though the real Macbeth predates the castle. The three gardens are excellent and mostly accessible. The castle interior involves stairs between floors. Still a family home (Cawdor family).'
    },
    events: [
      { month: 'MAY', day: '1', name: 'Garden Opening Season', desc: 'The beautiful gardens open for the season with spring flowers at their peak.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' }
    ]
  },

  "Blair Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Blair Atholl Station', detail: 'ScotRail Highland Main Line from Perth or Inverness. Castle is 1 mile — walk or taxi.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking in the castle grounds.' },
      { icon: '🚗', name: 'By Car', detail: 'Off the A9 at Blair Atholl, between Perth and Inverness.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🚶', text: 'Grounds: Good Paths', cls: 'green' },
        { icon: '💺', text: 'Seating & Café', cls: 'green' },
        { icon: '🏛️', text: 'Stairs to Upper Floors', cls: 'amber' }
      ],
      note: 'Home of the Atholl Highlanders (Europe\'s last private army). Ground floor rooms are accessible. The extensive grounds and deer park have good paths. Caravan park on site. Popular stop on the A9 route to the Highlands.'
    },
    events: [
      { month: 'MAY', day: '24', name: 'Atholl Highlanders Parade', desc: 'Annual parade of Europe\'s only remaining private army in the castle grounds.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free to watch' },
      { month: 'AUG', day: '24', name: 'Blair Castle Horse Trials', desc: 'International horse trials in the stunning castle grounds.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' }
    ]
  },

  "Doune Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus from Stirling', detail: 'First Bus route 59 from Stirling (20 min). Stops in Doune village, 10 min walk to castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small car park at the castle entrance.' },
      { icon: '🚗', name: 'By Car', detail: 'In Doune village off the A84, 8 miles northwest of Stirling.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Stairs in Keep', cls: 'amber' },
        { icon: '⚠️', text: 'Uneven Courtyard', cls: 'amber' },
        { icon: '👟', text: 'Sturdy Footwear', cls: 'amber' }
      ],
      note: 'Famous as a filming location for Monty Python and the Holy Grail and Outlander. The courtyard is accessible but the keep and Great Hall involve stairs. The audio guide is narrated by Terry Jones. Historic Scotland managed.'
    },
    events: []
  },

  "Duart Castle": {
    gettingThere: [
      { icon: '⛴️', name: 'CalMac Ferry to Mull', detail: 'Ferry from Oban to Craignure (45 min). Castle is 3 miles from Craignure — taxi or seasonal shuttle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle.' },
      { icon: '🚗', name: 'On Mull', detail: 'From Craignure ferry terminal, follow the A849 towards Iona, then signed turn to Duart.' }
    ],
    terrain: {
      chips: [
        { icon: '📐', text: 'Clifftop Position', cls: 'amber' },
        { icon: '🏛️', text: 'Stairs Inside', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed to Weather', cls: 'amber' }
      ],
      note: 'Seat of Clan MacLean on a dramatic clifftop on the Isle of Mull. The castle interior involves stairs. Not fully wheelchair accessible. The views across the Sound of Mull to the mainland are spectacular. Open April-October.'
    },
    events: []
  },

  // ===== BATCH 2: Additional ~40 entries =====

  "Cahir Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Cahir Station', detail: 'On the Limerick Junction–Waterford line, 5 min walk from the castle' },
      { icon: '🚌', name: 'Bus Éireann', detail: 'Route 55 Dublin–Cork stops in Cahir town centre' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle entrance on Castle Street' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🏛️', text: 'Multi-Level Keep', cls: 'amber' },
        { icon: '🌿', text: 'Riverside Setting', cls: 'green' }
      ],
      note: 'One of Ireland\'s largest and best-preserved castles, set on a rocky island in the River Suir. Ground floor is accessible but upper levels require stairs. Well-maintained paths throughout the courtyard.'
    },
    events: [
      { month: 'JUN', day: '21', name: 'Heritage Week Tours', desc: 'Free guided tours during National Heritage Week', badge: 'special', badgeText: 'HERITAGE', meta: 'Free · Aug' },
      { month: 'DEC', day: '08', name: 'Winter Solstice Event', desc: 'Special winter opening with historical demonstrations', badge: 'seasonal', badgeText: 'WINTER', meta: 'Free with admission' }
    ]
  },

  "Ross Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Killarney Town', detail: 'Bus from Killarney bus station, then 2.5 km walk or taxi' },
      { icon: '🚂', name: 'Killarney Station', detail: 'Main rail hub, 3 km from castle via Ross Road' },
      { icon: '🅿️', name: 'Ross Castle Car Park', detail: 'Large car park at the castle, €2 parking fee' },
      { icon: '🚢', name: 'Lake Boats', detail: 'Boat trips on Lough Leane depart from the castle pier' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Only', cls: 'amber' },
        { icon: '🏛️', text: 'Tower House', cls: 'amber' },
        { icon: '🌊', text: 'Lakeside', cls: 'green' }
      ],
      note: 'A 15th-century tower house on the shore of Lough Leane in Killarney National Park. Interior accessed by guided tour only with narrow spiral stairs. Stunning lakeside setting with boat trips available.'
    },
    events: [
      { month: 'JUL', day: '15', name: 'Killarney Regatta', desc: 'Traditional rowing races on Lough Leane', badge: 'special', badgeText: 'SPORT', meta: 'Free to watch' }
    ]
  },

  "Bunratty Castle": {
    gettingThere: [
      { icon: '✈️', name: 'Shannon Airport', detail: 'Just 8 km away, 10 min drive' },
      { icon: '🚌', name: 'Bus Éireann 343', detail: 'Limerick–Shannon route stops at Bunratty village' },
      { icon: '🅿️', name: 'Bunratty Car Park', detail: 'Large free car park adjacent to castle and folk park' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🏛️', text: 'Spiral Stairs', cls: 'amber' },
        { icon: '👨‍👩‍👧‍👦', text: 'Folk Park', cls: 'green' }
      ],
      note: 'Restored 15th-century tower house with adjacent folk park recreating 19th-century Irish life. Castle interior requires climbing steep spiral staircases. Folk park is mostly accessible on flat ground.'
    },
    events: [
      { month: 'APR', day: '01', name: 'Medieval Banquet', desc: 'Nightly medieval banquets with music, storytelling and feasting', badge: 'special', badgeText: 'BANQUET', meta: '€75 pp · Year-round' },
      { month: 'DEC', day: '01', name: 'Christmas at Bunratty', desc: 'Festive celebrations in the Folk Park with traditional crafts', badge: 'seasonal', badgeText: 'CHRISTMAS', meta: '€18 adult' }
    ]
  },

  "Dublin Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Pearse / Tara Street', detail: 'DART stations 10 min walk via Dame Street' },
      { icon: '🚌', name: 'Dublin Bus', detail: 'Multiple routes to Dame Street / Christ Church, 2 min walk' },
      { icon: '🚋', name: 'Luas Green Line', detail: 'St Stephen\'s Green stop, 8 min walk' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🏛️', text: 'State Apartments', cls: 'green' },
        { icon: '🏙️', text: 'City Centre', cls: 'green' }
      ],
      note: 'A major government complex and tourist attraction in the heart of Dublin. State Apartments are accessible by lift. The medieval undercroft and Chapel Royal require some steps. Guided tours available.'
    },
    events: [
      { month: 'SEP', day: '14', name: 'Culture Night', desc: 'Free evening access to State Apartments with special programming', badge: 'special', badgeText: 'FREE', meta: 'Free · September' },
      { month: 'AUG', day: '20', name: 'Heritage Week', desc: 'Free guided heritage tours of the medieval undercroft', badge: 'special', badgeText: 'HERITAGE', meta: 'Free' }
    ]
  },

  "Malahide Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Malahide DART', detail: 'DART station 15 min walk through the parklands' },
      { icon: '🚌', name: 'Dublin Bus 42', detail: 'From Talbot Street to Malahide village, 5 min walk' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Large pay & display car park in the demesne, €5' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Parkland & Gardens', cls: 'green' },
        { icon: '👨‍👩‍👧‍👦', text: 'Family Friendly', cls: 'green' }
      ],
      note: 'Set in 260 acres of parkland, Malahide Castle dates to the 12th century. Ground floor accessible; upper floors via stairs. Beautiful botanical gardens, butterfly house, and playground. Guided tours of the castle interior.'
    },
    events: [
      { month: 'JUN', day: '15', name: 'Malahide Castle Concerts', desc: 'Major outdoor concerts in the castle grounds', badge: 'concert', badgeText: 'CONCERT', meta: '€50-80 · Jun-Jul' },
      { month: 'DEC', day: '01', name: 'Castle of Light', desc: 'Illuminated winter trail through the castle grounds', badge: 'seasonal', badgeText: 'CHRISTMAS', meta: '€20 adult' }
    ]
  },

  "Birr Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus Éireann', detail: 'Routes from Dublin and Limerick stop in Birr town' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking inside the demesne gates' },
      { icon: '🚗', name: 'By Car', detail: 'On the N52, roughly equidistant from Dublin and Limerick (1.5 hrs)' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Gardens Accessible', cls: 'green' },
        { icon: '🌳', text: '120 Acres Gardens', cls: 'green' },
        { icon: '🔭', text: 'Science Centre', cls: 'green' }
      ],
      note: 'Home to the Parsons family since 1620. The gardens are renowned for rare plants and the Great Telescope (1845). Castle interior not open but the demesne, Science Centre, and treehouse trail are excellent. Mostly flat paths.'
    },
    events: [
      { month: 'MAY', day: '10', name: 'Birr Vintage Week', desc: 'Heritage festival with castle grounds events and exhibitions', badge: 'special', badgeText: 'FESTIVAL', meta: 'Various prices' }
    ]
  },

  "Dunguaire Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the N67 at Kinvara, 30 km south of Galway city' },
      { icon: '🚌', name: 'Bus Éireann 350', detail: 'Galway–Ballyvaughan route stops in Kinvara village' },
      { icon: '🅿️', name: 'Roadside Parking', detail: 'Small car park beside the castle on the shore road' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '🏛️', text: 'Tower House', cls: 'amber' },
        { icon: '🌊', text: 'Shoreline Setting', cls: 'green' }
      ],
      note: 'A picturesque 16th-century tower house on the shores of Galway Bay. Very narrow spiral staircase to upper floors. One of Ireland\'s most photographed castles. Medieval banquets held in summer.'
    },
    events: [
      { month: 'MAY', day: '01', name: 'Medieval Banquets', desc: 'Nightly medieval banquets with Irish music and poetry', badge: 'special', badgeText: 'BANQUET', meta: '€65 pp · May-Oct' }
    ]
  },

  "Beaumaris Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Arriva 53/57', detail: 'From Bangor to Beaumaris, 30 min journey' },
      { icon: '🚂', name: 'Bangor Station', detail: 'Nearest rail, then bus or taxi (9 miles) across the Menai Strait' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display in Beaumaris town, short walk to castle' },
      { icon: '⛴️', name: 'Beaumaris Pier', detail: 'Seasonal ferry services from Caernarfon and Puffin Island trips' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🏰', text: 'Concentric Design', cls: 'green' },
        { icon: '🌊', text: 'Moated', cls: 'green' }
      ],
      note: 'The last and largest of Edward I\'s castles in Wales, and a UNESCO World Heritage Site. Never completed but considered the most technically perfect concentric castle in Britain. Flat inner ward is accessible. Some wall walks have steps.'
    },
    events: [
      { month: 'MAY', day: '25', name: 'Beaumaris Festival', desc: 'Arts festival with events in and around the castle', badge: 'special', badgeText: 'ARTS', meta: 'Various prices' }
    ]
  },

  "Kidwelly Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Kidwelly Station', detail: 'On the West Wales line, 10 min walk to the castle' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free car park on Castle Road beside the entrance' },
      { icon: '🚗', name: 'By Car', detail: 'Just off the A484 between Llanelli and Carmarthen' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'amber' },
        { icon: '🏛️', text: 'Multi-Level Ruins', cls: 'amber' },
        { icon: '🌿', text: 'Grassy Grounds', cls: 'green' }
      ],
      note: 'A remarkably well-preserved concentric castle overlooking the River Gwendraeth. Used as a location in Monty Python and the Holy Grail. Outer ward accessible but inner rooms require steps. Managed by Cadw.'
    },
    events: []
  },

  "Craigmillar Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Lothian Bus 14/30', detail: 'From Edinburgh city centre to Craigmillar, 5 min walk' },
      { icon: '🚗', name: 'By Car', detail: '3 miles southeast of Edinburgh centre via the A7' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small free car park on Craigmillar Castle Road' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '🏛️', text: 'Tower & Courtyard', cls: 'amber' },
        { icon: '🌳', text: 'Parkland Setting', cls: 'green' }
      ],
      note: 'A well-preserved medieval castle associated with Mary Queen of Scots, who stayed here in 1566. Extensive ruins with tower house, great hall, and courtyard gardens. Steep stairs to upper levels. Fantastic views of Edinburgh and Arthur\'s Seat.'
    },
    events: []
  },

  "Linlithgow Palace": {
    gettingThere: [
      { icon: '🚂', name: 'Linlithgow Station', detail: 'On the Edinburgh–Glasgow line, 5 min walk to the palace' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Pay & display parking in Linlithgow High Street area' },
      { icon: '🚗', name: 'By Car', detail: 'Off the M9 between Edinburgh and Stirling, well signposted' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Only', cls: 'amber' },
        { icon: '🏛️', text: 'Roofless Palace', cls: 'amber' },
        { icon: '🌊', text: 'Lochside', cls: 'green' }
      ],
      note: 'Birthplace of Mary Queen of Scots, this magnificent roofless ruin stands beside Linlithgow Loch. Ground floor and courtyard accessible. Upper floors require climbing. The great hall and fountain are highlights. Managed by Historic Scotland.'
    },
    events: [
      { month: 'JUN', day: '28', name: 'Linlithgow Palace Concert', desc: 'Summer concerts in the palace courtyard', badge: 'concert', badgeText: 'CONCERT', meta: '£30-50 · Summer' }
    ]
  },

  "Scone Palace": {
    gettingThere: [
      { icon: '🚂', name: 'Perth Station', detail: '2 miles from the palace, taxi or bus 3/58' },
      { icon: '🚌', name: 'Stagecoach 3', detail: 'From Perth city centre to Scone, alight at palace gates' },
      { icon: '🅿️', name: 'Palace Car Park', detail: 'Large free car park within the grounds' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Extensive Grounds', cls: 'green' },
        { icon: '👨‍👩‍👧‍👦', text: 'Family Friendly', cls: 'green' }
      ],
      note: 'Ancient crowning place of Scottish kings and home to the Stone of Destiny replica. The current Georgian palace has a ground-floor accessible route. The 100-acre grounds include a pinetum, maze, and adventure playground.'
    },
    events: [
      { month: 'JUL', day: '05', name: 'Scone Palace Garden Fair', desc: 'Scotland\'s finest garden show in the palace grounds', badge: 'special', badgeText: 'GARDEN', meta: '£12 adult · July' },
      { month: 'AUG', day: '15', name: 'Perth Show', desc: 'Agricultural show held in the palace parkland', badge: 'family', badgeText: 'FAMILY', meta: '£15 adult' }
    ]
  },

  "Battle Abbey": {
    gettingThere: [
      { icon: '🚂', name: 'Battle Station', detail: 'On the London Charing Cross–Hastings line, 5 min walk' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'Pay & display car park on Upper Lake, 3 min walk' },
      { icon: '🚗', name: 'By Car', detail: 'On the A2100, well signposted from the A21' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '⚔️', text: 'Battlefield Walk', cls: 'amber' },
        { icon: '🌿', text: 'Undulating Ground', cls: 'amber' }
      ],
      note: 'Built by William the Conqueror on the site of the 1066 Battle of Hastings. The high altar marked the spot where King Harold fell. Battlefield walk is hilly and uneven. Audio tour brings the battle to life. English Heritage.'
    },
    events: [
      { month: 'OCT', day: '14', name: '1066 Anniversary', desc: 'Annual battle re-enactment on the anniversary of the Battle of Hastings', badge: 'special', badgeText: 'RE-ENACT', meta: '£16 adult · October' }
    ]
  },

  "Jedburgh Abbey": {
    gettingThere: [
      { icon: '🚌', name: 'Borders Buses', detail: 'Regular services from Edinburgh (1.5 hrs) to Jedburgh town centre' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'Free car park on Abbey Bridge End' },
      { icon: '🚗', name: 'By Car', detail: 'On the A68, 50 miles south of Edinburgh near the English border' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Level Access', cls: 'green' },
        { icon: '🏛️', text: 'Impressive Nave', cls: 'green' },
        { icon: '📐', text: 'Some Steps', cls: 'amber' }
      ],
      note: 'One of the great Border abbeys, founded in 1138 by David I. The church survives to a remarkable height with beautiful Romanesque and Gothic architecture. Ground level is accessible; upper walkways have stairs. Historic Scotland.'
    },
    events: []
  },

  "Melrose Abbey": {
    gettingThere: [
      { icon: '🚌', name: 'Borders Buses', detail: 'Regular services from Edinburgh and Galashiels to Melrose' },
      { icon: '🚂', name: 'Tweedbank Station', detail: 'Borders Railway terminus, 2 miles from Melrose by bus or bike' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'Free car park on Abbey Street' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Gothic Stonework', cls: 'green' }
      ],
      note: 'The finest of the Scottish Border abbeys, famous for its elaborate Gothic stonework and the reputed burial site of Robert the Bruce\'s heart. Mostly flat with good paths. The cloister ruins and museum are accessible. Historic Scotland.'
    },
    events: []
  },

  "Iona Abbey": {
    gettingThere: [
      { icon: '⛴️', name: 'CalMac Ferry', detail: 'Fionnphort (Mull) to Iona, 10 min crossing, then 15 min walk' },
      { icon: '🚌', name: 'West Coast Motors', detail: 'Bus from Craignure ferry terminal across Mull to Fionnphort' },
      { icon: '⛴️', name: 'From Oban', detail: 'Ferry Oban–Craignure (45 min), then bus across Mull (1 hr)' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'amber' },
        { icon: '🏝️', text: 'Island Location', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed', cls: 'amber' }
      ],
      note: 'One of the most sacred sites in Scotland, founded by St Columba in 563 AD. The restored medieval abbey is an active place of worship. The island requires ferry access and has no cars. Paths can be rough. Weather dependent.'
    },
    events: [
      { month: 'JUN', day: '09', name: 'Columba\'s Day', desc: 'Special services commemorating St Columba', badge: 'special', badgeText: 'HOLY', meta: 'Free' }
    ]
  },

  "Framlingham Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the B1116, 20 miles north of Ipswich' },
      { icon: '🚌', name: 'Galloway 118', detail: 'From Wickham Market (nearest rail) to Framlingham' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small car park on Castle Street, plus town car parks' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Courtyard Accessible', cls: 'green' },
        { icon: '📐', text: 'Wall Walk Steps', cls: 'amber' },
        { icon: '🌿', text: 'Mere & Grounds', cls: 'green' }
      ],
      note: 'Famous as the castle where Mary Tudor was proclaimed Queen in 1553. The complete curtain wall with 13 towers offers a spectacular wall walk (steep steps). Inner courtyard is flat. The Mere (lake) provides a scenic setting. English Heritage.'
    },
    events: [
      { month: 'AUG', day: '10', name: 'Medieval Festival', desc: 'Living history with jousting, falconry, and craft demonstrations', badge: 'family', badgeText: 'FAMILY', meta: '£12 adult' }
    ]
  },

  "Berkeley Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'Off the A38 between Bristol and Gloucester, well signposted' },
      { icon: '🚂', name: 'Cam & Dursley Station', detail: '5 miles from Berkeley, taxi required' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking in the castle grounds' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'amber' },
        { icon: '🏛️', text: 'Medieval Interior', cls: 'green' },
        { icon: '🌳', text: 'Gardens', cls: 'green' }
      ],
      note: 'England\'s oldest inhabited castle, continuously lived in by the Berkeley family since the 12th century. Infamous as the site of Edward II\'s murder in 1327. Gardens include Elizabethan terraces and a butterfly house. Some steps throughout.'
    },
    events: [
      { month: 'AUG', day: '26', name: 'Berkeley Castle Joust', desc: 'Medieval jousting tournament in the castle meadow', badge: 'family', badgeText: 'JOUST', meta: '£18 adult · Bank Holiday' }
    ]
  },

  "Dunstanburgh Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Alnmouth Station', detail: 'East Coast Main Line, then taxi to Craster (7 miles)' },
      { icon: '🅿️', name: 'Craster Car Park', detail: 'Pay & display in Craster village, then 1.3 mile coastal walk' },
      { icon: '🥾', name: 'Coastal Path', detail: 'Also accessible from Embleton (1 mile walk from the north)' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '🥾', text: 'Walk Required', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Headland', cls: 'amber' },
        { icon: '📸', text: 'Photogenic', cls: 'green' }
      ],
      note: 'Dramatic 14th-century ruin on a remote Northumberland headland, accessible only on foot. The 1.3-mile walk from Craster is spectacular but uneven. One of England\'s most atmospheric ruins. Very exposed to weather. English Heritage.'
    },
    events: []
  },

  "Warkworth Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Alnmouth Station', detail: 'East Coast Main Line, then Arriva bus X18 (10 min) to Warkworth' },
      { icon: '🚌', name: 'Arriva X18', detail: 'Newcastle–Alnwick route stops in Warkworth village' },
      { icon: '🅿️', name: 'Village Parking', detail: 'Free roadside parking in Warkworth village' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Courtyard Accessible', cls: 'amber' },
        { icon: '🏛️', text: 'Impressive Keep', cls: 'amber' },
        { icon: '🌿', text: 'River Setting', cls: 'green' }
      ],
      note: 'A magnificent castle dominating a loop in the River Coquet, home to the Percy family. The unique cross-shaped keep is remarkably intact. Lower courtyard is accessible; keep requires stairs. Featured in Shakespeare\'s Henry IV. English Heritage.'
    },
    events: []
  },

  "Canterbury Cathedral": {
    gettingThere: [
      { icon: '🚂', name: 'Canterbury East/West', detail: 'High-speed from London St Pancras (56 min) or Victoria' },
      { icon: '🚌', name: 'National Express', detail: 'Regular coaches from London Victoria to Canterbury bus station' },
      { icon: '🅿️', name: 'Park & Ride', detail: 'Three park & ride sites around Canterbury, bus to centre' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Cathedral & Precincts', cls: 'green' },
        { icon: '🏙️', text: 'City Centre', cls: 'green' }
      ],
      note: 'The mother church of the Anglican Communion and a UNESCO World Heritage Site. Site of Thomas Becket\'s murder in 1170. The nave and most of the cathedral are wheelchair accessible. Crypt has limited access. Audio guides available.'
    },
    events: [
      { month: 'DEC', day: '24', name: 'Christmas Services', desc: 'Carol services and Christmas Eve celebrations', badge: 'seasonal', badgeText: 'CHRISTMAS', meta: 'Free · December' },
      { month: 'JUL', day: '07', name: 'Becket Festival', desc: 'Celebrations around the feast of the Translation of St Thomas', badge: 'special', badgeText: 'FESTIVAL', meta: 'Free' }
    ]
  },

  "Caerlaverock Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: '8 miles south of Dumfries on the B725' },
      { icon: '🚌', name: 'Stagecoach 371', detail: 'From Dumfries towards Glencaple, limited service' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free car park at the castle entrance' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Courtyard Accessible', cls: 'green' },
        { icon: '🏰', text: 'Unique Triangular Plan', cls: 'green' },
        { icon: '🌿', text: 'Moated', cls: 'green' }
      ],
      note: 'Scotland\'s most distinctive castle, with a unique triangular plan and double moat. Famous for the 1300 siege by Edward I. The courtyard includes a fine Renaissance facade. Mostly accessible at ground level. Nearby Caerlaverock nature reserve.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Siege Re-enactment', desc: 'Living history weekend re-creating the 1300 siege', badge: 'family', badgeText: 'HISTORY', meta: 'Free with admission' }
    ]
  },

  "Tantallon Castle": {
    gettingThere: [
      { icon: '🚂', name: 'North Berwick Station', detail: 'From Edinburgh Waverley (30 min), then 3 miles by taxi' },
      { icon: '🚌', name: 'East Coast Buses 120', detail: 'Edinburgh–North Berwick route, alight at Tantallon stop' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free car park at the site entrance' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'amber' },
        { icon: '🌬️', text: 'Exposed Clifftop', cls: 'amber' },
        { icon: '📸', text: 'Stunning Views', cls: 'green' }
      ],
      note: 'A dramatic 14th-century fortress perched on the cliffs overlooking the Firth of Forth and Bass Rock. The massive curtain wall is one of the most impressive in Scotland. Uneven ground, clifftop location. Spectacular views. Historic Scotland.'
    },
    events: []
  },

  "Blackness Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Linlithgow Station', detail: '4 miles from Blackness, taxi or walk via canal path' },
      { icon: '🚗', name: 'By Car', detail: 'On the B903, signposted from the M9 junction 3' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small free car park beside the castle' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'amber' },
        { icon: '🌊', text: 'Coastal Fortress', cls: 'amber' },
        { icon: '🎬', text: 'Filming Location', cls: 'green' }
      ],
      note: 'Known as "the ship that never sailed" due to its boat-like shape jutting into the Firth of Forth. Used as Fort William in the Outlander TV series. Narrow passages and stairs throughout. Atmospheric and compact. Historic Scotland.'
    },
    events: []
  },

  "Ashford Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the R346 at Cong, 45 km north of Galway city' },
      { icon: '🚌', name: 'Bus Éireann 51', detail: 'Galway–Westport route to Ballinrobe, then local taxi' },
      { icon: '✈️', name: 'Ireland West Airport', detail: 'Knock Airport 55 km away, 45 min drive' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Accessible', cls: 'green' },
        { icon: '🌳', text: 'Lakeside Estate', cls: 'green' },
        { icon: '🏨', text: 'Luxury Hotel', cls: 'green' }
      ],
      note: 'A magnificent 800-year-old castle on the shores of Lough Corrib, now a 5-star luxury hotel. Non-guests can visit the grounds and falconry school. The estate has 350 acres of manicured gardens. Fully accessible as a working hotel.'
    },
    events: []
  },

  "Carrickfergus Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Carrickfergus Station', detail: 'Belfast–Larne line, 5 min walk from the castle' },
      { icon: '🚌', name: 'Metro/Ulsterbus', detail: 'Regular services from Belfast city centre (30 min)' },
      { icon: '🅿️', name: 'Harbour Car Park', detail: 'Pay parking on the harbour near the castle' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🏛️', text: 'Norman Keep', cls: 'green' },
        { icon: '🌊', text: 'Harbourside', cls: 'green' }
      ],
      note: 'One of the best-preserved Norman castles in Ireland, dominating Belfast Lough since 1177. Ground floor and courtyard accessible. Upper keep and wall walks require stairs. Interactive exhibits inside. Managed by Historic Environment Division NI.'
    },
    events: [
      { month: 'JUL', day: '28', name: 'Lughnasa Festival', desc: 'Medieval re-enactment and living history in the castle grounds', badge: 'family', badgeText: 'MEDIEVAL', meta: 'Free with admission' }
    ]
  },

  "Carisbrooke Castle": {
    gettingThere: [
      { icon: '⛴️', name: 'Isle of Wight Ferry', detail: 'Red Funnel or Wightlink from mainland, then bus or taxi' },
      { icon: '🚌', name: 'Southern Vectis', detail: 'Bus routes to Carisbrooke from Newport (1 mile)' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free car park at the castle entrance off Whitcombe Road' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Courtyard Accessible', cls: 'amber' },
        { icon: '🏛️', text: 'Keep & Walls', cls: 'amber' },
        { icon: '🐴', text: 'Donkey Centre', cls: 'green' }
      ],
      note: 'Famous as the prison of Charles I before his execution. The castle has a well-house where donkeys still operate the treadwheel. Courtyard accessible; keep requires climbing 71 steps. English Heritage.'
    },
    events: [
      { month: 'AUG', day: '12', name: 'Castle Summer Fair', desc: 'Family activities with donkey demonstrations and medieval crafts', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Colchester Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Colchester Station', detail: 'Greater Anglia from London Liverpool Street (50 min), 15 min walk' },
      { icon: '🚌', name: 'Town Centre Buses', detail: 'Multiple routes to Colchester High Street' },
      { icon: '🅿️', name: 'Vineyard Street', detail: 'Multi-storey car park, 5 min walk through Castle Park' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Museum Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Roman Foundations', cls: 'green' },
        { icon: '🌳', text: 'Castle Park', cls: 'green' }
      ],
      note: 'The largest Norman keep ever built in Britain, constructed over the vaults of the Roman Temple of Claudius. Now an excellent interactive museum. Lift access to most floors. The castle sits in attractive public parklands.'
    },
    events: [
      { month: 'OCT', day: '31', name: 'Halloween at the Castle', desc: 'Spooky tours of the castle vaults and Roman foundations', badge: 'seasonal', badgeText: 'HALLOWEEN', meta: '£8 adult' }
    ]
  },

  "Dirleton Castle": {
    gettingThere: [
      { icon: '🚂', name: 'North Berwick Station', detail: 'From Edinburgh (30 min), then 2 miles by bus or taxi' },
      { icon: '🚌', name: 'East Coast Buses 124', detail: 'Edinburgh–North Berwick route stops in Dirleton village' },
      { icon: '🅿️', name: 'Village Parking', detail: 'Free roadside parking around Dirleton Green' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Beautiful Gardens', cls: 'green' },
        { icon: '🏛️', text: 'Ruins & Towers', cls: 'amber' }
      ],
      note: 'A picturesque 13th-century castle ruin in a charming village setting, with the world\'s longest herbaceous border (according to Guinness). Gardens are mostly accessible. Castle ruins require some scrambling. Historic Scotland.'
    },
    events: []
  },

  "Portchester Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Portchester Station', detail: 'On the Portsmouth–Southampton line, 10 min walk' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free English Heritage car park on Castle Street' },
      { icon: '🚗', name: 'By Car', detail: 'Off the A27 between Portsmouth and Fareham' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Roman Walls', cls: 'green' },
        { icon: '🌊', text: 'Harbour Views', cls: 'green' }
      ],
      note: 'The most complete Roman fort in northern Europe, with a medieval castle built inside. The Roman walls stand to full height. Inner bailey is flat and accessible. Keep requires stairs. Views across Portsmouth Harbour. English Heritage, free entry.'
    },
    events: []
  },

  "Lancaster Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Lancaster Station', detail: 'West Coast Main Line, 10 min walk uphill to the castle' },
      { icon: '🚌', name: 'Stagecoach', detail: 'Multiple routes to Lancaster city centre' },
      { icon: '🅿️', name: 'Dallas Road', detail: 'Pay car parks in Lancaster centre, 5-10 min walk' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🏛️', text: 'Historic Courts', cls: 'green' },
        { icon: '📐', text: 'Hilltop', cls: 'amber' }
      ],
      note: 'A working castle that served as a prison and courthouse for centuries, including the famous Pendle Witch trials. Recently opened to visitors with guided tours. Some areas require stairs. Hilltop location with views over Morecambe Bay.'
    },
    events: [
      { month: 'AUG', day: '18', name: 'Witches Trail Tour', desc: 'Themed tours exploring the Pendle Witch trial history', badge: 'special', badgeText: 'HISTORY', meta: '£10 adult' }
    ]
  },

  "Tattershall Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the A153, 15 miles northeast of Sleaford' },
      { icon: '🚌', name: 'Stagecoach', detail: 'Limited bus service from Boston or Horncastle' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free National Trust car park' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Only', cls: 'amber' },
        { icon: '🏛️', text: 'Great Tower', cls: 'amber' },
        { icon: '🌿', text: 'Moated Grounds', cls: 'green' }
      ],
      note: 'A magnificent red-brick tower built in the 1430s, one of the finest pieces of medieval brickwork in England. Six floors connected by spiral staircase. Ground floor accessible. Stunning fireplaces on each level. National Trust.'
    },
    events: []
  },

  "Norwich Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Norwich Station', detail: 'Greater Anglia from London (2 hrs), 15 min walk to castle' },
      { icon: '🚌', name: 'First Bus', detail: 'Multiple routes to Castle Meadow in city centre' },
      { icon: '🅿️', name: 'Castle Mall', detail: 'Multi-storey car park beneath the castle mound' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Museum & Gallery', cls: 'green' },
        { icon: '🏙️', text: 'City Centre', cls: 'green' }
      ],
      note: 'A magnificent Norman keep now housing Norwich Castle Museum & Art Gallery. Lift access throughout. Recent Royal Palace Reborn project restored medieval rooms. Interactive galleries on history, art, and natural history. Excellent for all ages.'
    },
    events: [
      { month: 'FEB', day: '15', name: 'Half-Term Activities', desc: 'Family craft workshops and history trails', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Orford Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'On the B1084, 9 miles east of Woodbridge' },
      { icon: '🚌', name: 'Coastal Liner 164', detail: 'From Woodbridge Station to Orford village' },
      { icon: '🅿️', name: 'Village Parking', detail: 'Free roadside parking in Orford village square' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '🏛️', text: 'Unique Keep', cls: 'amber' },
        { icon: '🌊', text: 'Coastal Setting', cls: 'green' }
      ],
      note: 'Built by Henry II in the 1160s with an innovative polygonal keep — unique in England. Interior reached by spiral staircase only. Rooftop offers panoramic views of Orford Ness. Small but architecturally fascinating. English Heritage.'
    },
    events: []
  },

  "Bolsover Castle": {
    gettingThere: [
      { icon: '🚗', name: 'By Car', detail: 'Off the M1 junction 29a, signposted through Bolsover town' },
      { icon: '🚂', name: 'Chesterfield Station', detail: '6 miles from Bolsover, connecting bus or taxi' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free English Heritage car park' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🏛️', text: 'Little Castle Interior', cls: 'green' },
        { icon: '🌳', text: 'Terrace Gardens', cls: 'green' }
      ],
      note: 'A stunning 17th-century fantasy castle with lavishly decorated interiors in the Little Castle and a dramatic hilltop terrace range. Wall paintings and fireplaces are superb. Riding House is one of the earliest in England. English Heritage.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Cavalier Summer', desc: 'Living history bringing the 17th century to life', badge: 'family', badgeText: 'HISTORY', meta: 'Free with admission' }
    ]
  },

  "Peveril Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Hope Station', detail: 'On the Sheffield–Manchester line, then bus to Castleton (10 min)' },
      { icon: '🚌', name: 'Hulleys 173', detail: 'From Bakewell or Sheffield to Castleton village' },
      { icon: '🅿️', name: 'Castleton Car Parks', detail: 'Pay car parks in Castleton, steep uphill walk to castle' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '📐', text: 'Steep Climb', cls: 'red' },
        { icon: '🌬️', text: 'Exposed Hilltop', cls: 'amber' }
      ],
      note: 'A Norman castle perched high above Castleton in the Peak District with spectacular views of the Hope Valley. The steep climb is challenging but rewarding. The keep survives along with curtain walls. One of England\'s earliest Norman castles. English Heritage.'
    },
    events: []
  },

  "Stokesay Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Craven Arms Station', detail: 'On the Shrewsbury–Swansea Heart of Wales line, 1 mile walk' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free English Heritage car park on site' },
      { icon: '🚗', name: 'By Car', detail: '7 miles northwest of Ludlow off the A49' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Medieval Hall', cls: 'green' },
        { icon: '🌿', text: 'Moated', cls: 'green' }
      ],
      note: 'The finest surviving 13th-century fortified manor house in England. The great hall with its original timber roof is exceptional. The Jacobean gatehouse is equally charming. Mostly flat grounds. English Heritage.'
    },
    events: []
  },

  "Donegal Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Bus Éireann', detail: 'Regular services from Dublin, Sligo, and Derry to Donegal town' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Pay parking in the Diamond (town centre), 2 min walk' },
      { icon: '🚗', name: 'By Car', detail: 'In the centre of Donegal town on the N15' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Only', cls: 'amber' },
        { icon: '🏛️', text: 'Tower House', cls: 'green' },
        { icon: '🏙️', text: 'Town Centre', cls: 'green' }
      ],
      note: 'A 15th-century tower house built by the O\'Donnell chieftains, with a Jacobean wing added by the Brooke family. Well-restored interior with fine fireplaces and Persian carpet replicas. Ground floor accessible. OPW managed.'
    },
    events: []
  },

  "Chepstow Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Chepstow Station', detail: 'On the Gloucester–Newport line, 10 min walk to castle' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Pay car park on Bridge Street near the castle' },
      { icon: '🚗', name: 'By Car', detail: 'Just off the M48 at the Welsh border, above the River Wye' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'amber' },
        { icon: '🏛️', text: 'Cliffside Layout', cls: 'amber' },
        { icon: '🌊', text: 'River Wye', cls: 'green' }
      ],
      note: 'The oldest surviving post-Roman stone fortification in Britain, begun in 1067. Stretches along a limestone cliff above the River Wye. Multiple wards connected by passages and steps. Cadw managed. Spectacular views from the upper ward.'
    },
    events: [
      { month: 'JUL', day: '12', name: 'Chepstow Castle Festival', desc: 'Music and arts festival in the castle grounds', badge: 'concert', badgeText: 'FESTIVAL', meta: '£20-40' }
    ]
  },

  "Caerphilly Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Caerphilly Station', detail: 'Rhymney line from Cardiff (20 min), 5 min walk' },
      { icon: '🚌', name: 'Stagecoach', detail: 'Regular buses from Cardiff city centre' },
      { icon: '🅿️', name: 'Town Car Parks', detail: 'Several pay car parks in Caerphilly centre' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🏰', text: 'Massive Water Defences', cls: 'green' },
        { icon: '📸', text: 'Leaning Tower', cls: 'green' }
      ],
      note: 'The second largest castle in Britain after Windsor, with the most elaborate water defences in all of Europe. Famous for its leaning tower (more than Pisa!). Inner ward is mostly flat and accessible. Cadw managed with excellent interpretation.'
    },
    events: [
      { month: 'AUG', day: '01', name: 'Big Cheese Festival', desc: 'Free festival with medieval re-enactments, music, and food', badge: 'family', badgeText: 'FREE', meta: 'Free · July/August' }
    ]
  },

  "Bothwell Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Uddingston Station', detail: 'Glasgow–Edinburgh line, 1 mile walk through Bothwell' },
      { icon: '🚌', name: 'First Bus', detail: 'Services from Glasgow to Bothwell village' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free car park on Castle Avenue' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🏛️', text: 'Massive Donjon', cls: 'amber' },
        { icon: '🌊', text: 'River Clyde', cls: 'green' }
      ],
      note: 'Scotland\'s largest and finest 13th-century stone castle, overlooking the River Clyde. The enormous half-ruined donjon is among the most impressive castle features in Scotland. Some uneven ground. Historic Scotland.'
    },
    events: []
  },

  "Culzean Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Maybole Station', detail: 'On the Glasgow–Stranraer line, then 4 miles by taxi' },
      { icon: '🚌', name: 'Stagecoach 60', detail: 'Ayr–Girvan route, alight at Culzean gates' },
      { icon: '🅿️', name: 'Estate Car Parks', detail: 'NTS car park, £3 parking (free for members)' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: '600 Acre Country Park', cls: 'green' },
        { icon: '🌊', text: 'Clifftop Setting', cls: 'green' }
      ],
      note: 'Robert Adam\'s 18th-century masterpiece perched on an Ayrshire clifftop. The Oval Staircase and Round Drawing Room are architectural highlights. Ground floor accessible; upper floors by stairs. 600-acre country park with gardens, beach, and deer park. National Trust for Scotland.'
    },
    events: [
      { month: 'DEC', day: '01', name: 'Christmas at Culzean', desc: 'Festive trail through the castle and grounds', badge: 'seasonal', badgeText: 'CHRISTMAS', meta: '£15 adult' }
    ]
  },

  "Falkland Palace": {
    gettingThere: [
      { icon: '🚌', name: 'Stagecoach 36', detail: 'From Glenrothes or Perth to Falkland village' },
      { icon: '🚗', name: 'By Car', detail: 'On the A912, 11 miles north of Kirkcaldy' },
      { icon: '🅿️', name: 'Village Parking', detail: 'Free on-street parking in Falkland village' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Garden Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Renaissance Palace', cls: 'green' },
        { icon: '🎾', text: 'Real Tennis Court', cls: 'green' }
      ],
      note: 'The finest Renaissance palace in Scotland, beloved by Mary Queen of Scots. Home to the world\'s oldest real tennis court (1539). Gardens are accessible. Palace interior involves stairs. Charming village setting. National Trust for Scotland.'
    },
    events: []
  },

  "Inveraray Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Citylink 926', detail: 'Glasgow–Campbeltown coach stops in Inveraray' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking in the castle grounds' },
      { icon: '🚗', name: 'By Car', detail: 'On the A83 at Inveraray, 60 miles northwest of Glasgow' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Neo-Gothic Interior', cls: 'green' },
        { icon: '🌳', text: 'Lochside Grounds', cls: 'green' }
      ],
      note: 'Ancestral home of the Duke of Argyll and chief of Clan Campbell. The fairy-tale turrets house magnificent interiors including the Armoury Hall with 1,300 weapons. Ground floor accessible. Beautiful grounds on Loch Fyne. Used in Downton Abbey.'
    },
    events: [
      { month: 'SEP', day: '07', name: 'Best of the West Festival', desc: 'Food, music, and culture festival in the castle grounds', badge: 'special', badgeText: 'FESTIVAL', meta: '£15 adult · September' }
    ]
  },

  "Floors Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Borders Buses', detail: 'From Edinburgh to Kelso, then 10 min walk' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking in the castle estate' },
      { icon: '🚗', name: 'By Car', detail: 'On the A6089, 1 mile northwest of Kelso' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Accessible', cls: 'green' },
        { icon: '🌳', text: 'Extensive Grounds', cls: 'green' },
        { icon: '🏛️', text: 'Grand Interiors', cls: 'green' }
      ],
      note: 'The largest inhabited castle in Scotland, home to the Duke of Roxburghe. William Playfair\'s magnificent interiors include fine art and tapestries. Walled garden, playground, and riverside walks. Ground floor accessible via ramp.'
    },
    events: [
      { month: 'MAY', day: '25', name: 'Floors Castle Horse Trials', desc: 'Scottish horse trials event in the castle parkland', badge: 'special', badgeText: 'EQUESTRIAN', meta: '£15 adult · May' }
    ]
  },

  // ── Scotland ──────────────────────────────────────────────

  "Dunvegan Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A863', detail: 'From Portree: 25 miles (35 min) via A850/A863. From Skye Bridge: about 45 min. The castle is signed from Dunvegan village.' },
      { icon: '🚌', name: 'Stagecoach 56', detail: 'Portree–Dunvegan bus, roughly 5 services per day Mon–Sat. Alight in Dunvegan village, then 1 mile walk to castle gate.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking at the castle. Can get busy Jul–Aug — arrive before 11am in peak season.' },
      { icon: '⛴️', name: 'Seal Boat Trips', detail: 'Boat trips depart from the castle jetty to see the seal colony in Loch Dunvegan. Included with garden ticket or separate booking.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Formal Gardens', cls: 'green' },
        { icon: '🏛️', text: 'Stairs Inside', cls: 'amber' },
        { icon: '💺', text: 'Seating in Gardens', cls: 'green' }
      ],
      note: 'The castle has stairs throughout with no lift — upper floors are not wheelchair accessible. The walled garden and water garden are mostly accessible on gravel paths. The walk from the car park to the castle is downhill (steep return). Disabled parking available closer to the entrance on request.'
    },
    events: [
      { month: 'JUL', day: '15', name: 'Dunvegan Castle Garden Party', desc: 'Annual summer garden party with Highland piping, local food stalls, and clan history talks.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'AUG', day: '5', name: 'MacLeod Clan Parliament', desc: 'Gathering of Clan MacLeod members from around the world, held every four years.', badge: 'special', badgeText: 'SPECIAL', meta: 'Registration required' }
    ]
  },

  "Braemar Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A93', detail: 'From Aberdeen: 58 miles (1h 20min) via A93 through Royal Deeside. From Perth: 1h 30min via A93.' },
      { icon: '🚌', name: 'Stagecoach 201', detail: 'Aberdeen–Braemar service, several per day. Alight in Braemar village, castle is a 10 min walk east on A93.' },
      { icon: '🅿️', name: 'Roadside Parking', detail: 'Small car park at the castle entrance. Free. Limited spaces — walk from village if full.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🏛️', text: 'Spiral Stairs', cls: 'amber' },
        { icon: '🌄', text: 'Highland Setting', cls: 'green' }
      ],
      note: 'A compact tower house with narrow spiral staircases — not wheelchair accessible inside. The grounds are flat and grassy. Community-owned and volunteer-run; check opening times as they vary seasonally. Near Balmoral and the Cairngorms.'
    },
    events: [
      { month: 'SEP', day: '7', name: 'Braemar Gathering', desc: 'The famous Highland Games attended by the Royal Family, held nearby at the Princess Royal and Duke of Fife Memorial Park.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets · sells out early' }
    ]
  },

  "Loch Leven Castle": {
    gettingThere: [
      { icon: '⛴️', name: 'Ferry from Kinross', detail: 'Historic Scotland operates a small ferry from Kinross Pier (Apr–Oct). Boats run every 30 min, 5 min crossing. Included with admission.' },
      { icon: '🚗', name: 'Drive to Kinross', detail: 'Kinross is just off the M90 (Junction 6). Edinburgh: 30 min. Perth: 20 min. Park at the pier.' },
      { icon: '🅿️', name: 'Kinross Pier Car Park', detail: 'Free parking at the ferry departure point. Well signed from the town centre.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '⛴️', text: 'Boat Access Only', cls: 'amber' },
        { icon: '🏛️', text: 'Steep Stairs', cls: 'amber' },
        { icon: '🌿', text: 'Island Setting', cls: 'green' }
      ],
      note: 'Access is by small ferry only — not wheelchair accessible. The island has uneven ground and the tower has steep spiral stairs. Mary Queen of Scots was imprisoned here 1567–68. Ferry does not run in bad weather; check before visiting. Seasonal opening (Apr–Oct).'
    },
    events: []
  },

  "St Andrews Castle": {
    gettingThere: [
      { icon: '🚌', name: 'Stagecoach 99', detail: 'Regular service from Dundee and Edinburgh via Leuchars. Alight in St Andrews town centre, 10 min walk to castle.' },
      { icon: '🚂', name: 'Leuchars Station', detail: 'Nearest rail station (5 miles). Regular buses and taxis to St Andrews. On the Edinburgh–Dundee line.' },
      { icon: '🚗', name: 'Drive via A91', detail: 'From Edinburgh: 1h 20min via M90/A91. From Dundee: 30 min via A91.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Pay & display car parks in St Andrews. No parking at the castle itself. The Scores car park is closest (5 min walk).' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🏛️', text: 'Underground Tunnels', cls: 'amber' },
        { icon: '🌊', text: 'Coastal Cliffs', cls: 'amber' },
        { icon: '🚶', text: 'Uneven Ground', cls: 'amber' }
      ],
      note: 'The castle grounds are partially accessible but uneven. The famous mine and counter-mine tunnels require stooping and are not accessible. The bottle dungeon can be viewed from above. Stunning clifftop position overlooking St Andrews Bay. Joint ticket available with St Andrews Cathedral.'
    },
    events: []
  },

  "Crathes Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A93', detail: 'From Aberdeen: 15 miles (25 min) via A93 Deeside road. Well signed from Banchory.' },
      { icon: '🚌', name: 'Stagecoach 201', detail: 'Aberdeen–Braemar service stops at Crathes. Frequent Mon–Sat.' },
      { icon: '🅿️', name: 'NTS Car Park', detail: 'Free for National Trust for Scotland members. £3 for non-members. Large car park at the entrance.' },
      { icon: '🚲', name: 'Deeside Way', detail: 'The Deeside Way cycle/walking path passes the castle grounds. Bike racks available.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Garden Accessible', cls: 'green' },
        { icon: '🌳', text: 'Walled Gardens', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in Castle', cls: 'amber' },
        { icon: '👶', text: 'Adventure Playground', cls: 'green' }
      ],
      note: 'The famous walled gardens and grounds are largely accessible with some gravel paths. The castle interior has stairs with no lift — ground floor accessible only. The painted ceilings (Nine Nobles, Nine Muses) are on upper floors. NTS property with excellent visitor facilities, café, and adventure playground.'
    },
    events: [
      { month: 'MAY', day: '10', name: 'Plant Sale Weekend', desc: 'Annual plant sale featuring rare and unusual varieties from the Crathes gardens.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'DEC', day: '1', name: 'Christmas at Crathes', desc: 'Festive decorations throughout the castle with themed rooms and family activities.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Booking recommended' }
    ]
  },

  "Drum Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A93', detail: 'From Aberdeen: 10 miles (20 min) west via A93. Signed from Drumoak.' },
      { icon: '🚌', name: 'Stagecoach 201', detail: 'Aberdeen–Banchory service, alight at Drum Castle road end. Short walk to entrance.' },
      { icon: '🅿️', name: 'NTS Car Park', detail: 'Free for NTS members. Ample parking at the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Only', cls: 'amber' },
        { icon: '🏛️', text: 'Medieval Tower', cls: 'amber' },
        { icon: '🌳', text: 'Old Wood & Gardens', cls: 'green' }
      ],
      note: 'One of Scotland\'s three oldest tower houses (13th century). The medieval tower has very steep spiral stairs — not accessible. The Jacobean mansion wing has ground floor access. The grounds include the ancient Old Wood of Drum and a walled garden. NTS property.'
    },
    events: [
      { month: 'JUN', day: '15', name: 'Rose Garden Open Day', desc: 'The historic rose garden at its peak, with guided walks and talks.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' }
    ]
  },

  "Brodie Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A96', detail: 'Off the A96, 4 miles west of Forres. From Inverness: 25 miles (30 min). Well signed.' },
      { icon: '🚌', name: 'Stagecoach 10', detail: 'Inverness–Elgin service passes nearby. Alight at Brodie, then a short walk.' },
      { icon: '🅿️', name: 'NTS Car Park', detail: 'Free for NTS members. Large car park at the estate.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Grounds & Pond', cls: 'green' },
        { icon: '🏛️', text: 'Stairs in Castle', cls: 'amber' }
      ],
      note: 'The Z-plan castle has stairs throughout — ground floor rooms accessible. Famous for its collection of paintings and the Brodie daffodil collection (best in Apr–May). Playful Trails for families in the grounds. NTS property with shop and tearoom.'
    },
    events: [
      { month: 'APR', day: '10', name: 'Daffodil Season', desc: 'The famous Brodie daffodil collection in bloom — over 100 varieties in the grounds and woodland.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with grounds admission' }
    ]
  },

  "Hermitage Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via B6399', detail: 'From Hawick: 16 miles south via B6399. From Newcastleton: 10 miles north. Remote Borders location — car essential.' },
      { icon: '🅿️', name: 'Small Car Park', detail: 'Free parking at the castle. Limited spaces but rarely full given the remote location.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🏛️', text: 'Ruined Interior', cls: 'amber' },
        { icon: '🌄', text: 'Remote Moorland', cls: 'amber' },
        { icon: '🚶', text: 'Uneven Ground', cls: 'amber' }
      ],
      note: 'The most sinister-looking castle in Scotland, brooding over bleak Borders moorland. Uneven ground throughout — not wheelchair accessible. Seasonal opening only (Apr–Sep). Very remote location with no public transport. Linked to Mary Queen of Scots and dark tales of murder. Check Historic Environment Scotland website for opening times.'
    },
    events: []
  },

  "Crichton Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A68', detail: 'From Edinburgh: 15 miles south via A68, then minor roads to Crichton. Signed from Pathhead.' },
      { icon: '🚶', name: 'Walk from Pathhead', detail: '1.5 mile walk through farmland from Pathhead village. A pleasant approach along the River Tyne.' },
      { icon: '🅿️', name: 'Small Car Park', detail: 'Free parking at Crichton village. Short walk to the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '🚶', text: 'Footpath Access', cls: 'amber' },
        { icon: '🌄', text: 'Farmland Setting', cls: 'green' }
      ],
      note: 'Notable for its extraordinary Italianate diamond-faceted façade, unique in Scotland. Reached by a short walk through fields — not wheelchair accessible. The castle is in peaceful farmland above the River Tyne. Seasonal opening (Apr–Sep). Free entry. Adjacent Crichton Collegiate Church is also worth visiting.'
    },
    events: []
  },

  "Culross Palace": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A985', detail: 'From Edinburgh: 35 min via M90/A985. From Stirling: 30 min via A977. Park in the village.' },
      { icon: '🚌', name: 'Bus 8A', detail: 'First Bus service from Dunfermline to Culross. Several per day Mon–Sat.' },
      { icon: '🅿️', name: 'Village Car Park', detail: 'NTS car park at the edge of the village. Free for members. Short walk through cobbled streets to the palace.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🚶', text: 'Cobbled Streets', cls: 'amber' },
        { icon: '🌳', text: 'Terraced Garden', cls: 'green' },
        { icon: '🏛️', text: 'Period Interiors', cls: 'green' }
      ],
      note: 'A 16th-century merchant\'s house (not actually a palace) with remarkable painted ceilings and terraced gardens, in Scotland\'s best-preserved 17th-century village. Cobbled streets throughout — difficult for wheelchairs. Featured as Cranesmuir in Outlander. NTS property. The village itself is worth exploring.'
    },
    events: [
      { month: 'DEC', day: '8', name: 'Christmas in Culross', desc: 'The village and palace decorated for a traditional 17th-century Christmas experience.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Booking essential' }
    ]
  },

  "Castle Fraser": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via B993', detail: 'From Aberdeen: 16 miles (30 min) west via A944/B993. Signed from Kemnay.' },
      { icon: '🅿️', name: 'NTS Car Park', detail: 'Free for NTS members. Large car park at the estate entrance.' },
      { icon: '🚌', name: 'Stagecoach 220', detail: 'Limited service from Aberdeen to Kemnay area. Taxi from Kemnay village (2 miles).' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Ground Floor Only', cls: 'amber' },
        { icon: '🌳', text: 'Walled Garden', cls: 'green' },
        { icon: '🏛️', text: 'Z-plan Tower House', cls: 'green' },
        { icon: '👶', text: 'Adventure Playground', cls: 'green' }
      ],
      note: 'The grandest of the Castles of Mar and the most elaborate Z-plan castle in Scotland. Ground floor accessible; upper floors via stairs only. The Great Hall has a magnificent heraldic fireplace. Walled garden, woodland walks, and adventure playground. NTS property on the Castle Trail.'
    },
    events: [
      { month: 'OCT', day: '28', name: 'Halloween at Castle Fraser', desc: 'Spooky family activities in the castle and grounds. Torch-lit trails and ghost stories.', badge: 'family', badgeText: 'FAMILY', meta: 'Booking essential' }
    ]
  },

  "Inverlochy Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive to Fort William', detail: 'The castle is 2 miles north-east of Fort William off the A82. From Glasgow: 2h 15min via A82.' },
      { icon: '🚂', name: 'Fort William Station', detail: 'ScotRail services from Glasgow Queen Street (3h 45min) and the Caledonian Sleeper from London. Castle is 2 miles from station.' },
      { icon: '🚶', name: 'Great Glen Way', detail: 'The castle is adjacent to the Great Glen Way walking route. A short detour from the main path.' },
      { icon: '🅿️', name: 'Roadside Parking', detail: 'Small layby near the castle. Free. The castle is a short walk across a field.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🚶', text: 'Uneven Ground', cls: 'amber' },
        { icon: '🌄', text: 'Ben Nevis Views', cls: 'green' }
      ],
      note: 'A well-preserved 13th-century castle forming a perfect square with round corner towers. Free and open year-round. In the shadow of Ben Nevis. Uneven grassy ground — not fully accessible. Site of Montrose\'s great victory in 1645. Historic Environment Scotland.'
    },
    events: []
  },

  // ── England ───────────────────────────────────────────────

  "Chatsworth House": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A6/A619', detail: 'From Sheffield: 30 min via A621/A619. From Manchester: 1h via M60/A6. Well signed from Bakewell.' },
      { icon: '🚌', name: 'Bus 218', detail: 'Hulleys of Baslow service from Chesterfield and Bakewell stops at the Chatsworth estate gate.' },
      { icon: '🅿️', name: 'Estate Car Parks', detail: '£5 car park (free for annual pass holders). Multiple car parks — follow signs. Fills up on summer weekends.' },
      { icon: '🚂', name: 'Chesterfield Station', detail: 'East Midlands Railway from London St Pancras (1h 45min) or Sheffield (12 min). Then bus 218 to Chatsworth.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Wheelchair Accessible', cls: 'green' },
        { icon: '🌳', text: '1,000 Acre Park', cls: 'green' },
        { icon: '💺', text: 'Seating Throughout', cls: 'green' },
        { icon: '👶', text: 'Farmyard & Playground', cls: 'green' },
        { icon: '🚻', text: 'Full Facilities', cls: 'green' }
      ],
      note: 'The "Palace of the Peak" — home of the Devonshire family. Excellent accessibility: lifts, ramps, and wheelchairs available. The garden features the Emperor Fountain, cascade, and maze. The farmyard and adventure playground are fantastic for children. Capability Brown parkland with deer. Multiple cafés and a farm shop.'
    },
    events: [
      { month: 'MAR', day: '15', name: 'Spring at Chatsworth', desc: 'The gardens come alive with thousands of spring bulbs. Seasonal trail for families.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with garden ticket' },
      { month: 'SEP', day: '5', name: 'Chatsworth Country Fair', desc: 'Three-day country fair with displays, food, crafts, and rural pursuits in the parkland.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets from £25' },
      { month: 'NOV', day: '9', name: 'Christmas at Chatsworth', desc: 'The house lavishly decorated on a different theme each year. A highlight of the Derbyshire calendar.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Timed tickets · book early' }
    ]
  },

  "Blenheim Palace": {
    gettingThere: [
      { icon: '🚂', name: 'Hanborough Station', detail: 'GWR from London Paddington via Oxford. 1.5 miles from the palace — taxi or walk.' },
      { icon: '🚌', name: 'S3 Bus', detail: 'Stagecoach S3 from Oxford city centre to Woodstock (30 min). Palace entrance in Woodstock.' },
      { icon: '🚗', name: 'Drive via A44', detail: 'From Oxford: 8 miles north via A44. From London: M40 J9 then A34/A44. About 1h 30min.' },
      { icon: '🅿️', name: 'Blenheim Car Park', detail: '£5 parking (included with Palace ticket for annual pass holders). Large capacity but busy on bank holidays.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Wheelchair Accessible', cls: 'green' },
        { icon: '🌳', text: '2,000 Acre Park', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🚻', text: 'Accessible Toilets', cls: 'green' },
        { icon: '👶', text: 'Buggy Friendly', cls: 'green' }
      ],
      note: 'UNESCO World Heritage Site. Baroque palace by Vanbrugh, birthplace of Winston Churchill. Capability Brown parkland with the Grand Bridge and lake. Excellent accessibility throughout the State Rooms via lifts. Wheelchairs available. The Pleasure Gardens include a maze, butterfly house, and adventure play. Multiple restaurants and cafés.'
    },
    events: [
      { month: 'FEB', day: '14', name: 'Blenheim Palace Flower Show', desc: 'Annual spring flower show in the Great Court with specialist nurseries and gardening talks.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' },
      { month: 'AUG', day: '10', name: 'Blenheim Palace Festival of Transport', desc: 'Vintage cars, steam engines, and classic vehicles displayed across the South Lawn.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets' },
      { month: 'SEP', day: '15', name: 'Blenheim Palace Horse Trials', desc: 'International horse trials in the parkland. One of the premier eventing competitions in Britain.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate tickets from £20' },
      { month: 'NOV', day: '20', name: 'Christmas at Blenheim', desc: 'Illuminated trail through the gardens and themed Christmas experience inside the palace.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Timed tickets · book early' }
    ]
  },

  "Burghley House": {
    gettingThere: [
      { icon: '🚂', name: 'Stamford Station', detail: 'East Midlands Railway from London (not direct — change at Peterborough). The house is 1 mile south of Stamford.' },
      { icon: '🚗', name: 'Drive via A1', detail: 'Just off the A1 at Stamford, Lincolnshire. From London: 1h 45min via A1(M). From Peterborough: 15 min.' },
      { icon: '🅿️', name: 'Estate Car Park', detail: 'Free parking within the grounds. Follow signs from the B1081.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Deer Park', cls: 'green' },
        { icon: '🏛️', text: 'Grand Interiors', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'The largest Elizabethan house in England, built by William Cecil, Lord Burghley. The Heaven Room ceiling by Verrio is extraordinary. Ground floor accessible; some upper rooms require stairs. Capability Brown parkland with fallow deer. Sculpture Garden in the grounds. Opening is seasonal (usually Apr–Oct).'
    },
    events: [
      { month: 'SEP', day: '5', name: 'Burghley Horse Trials', desc: 'Premier international three-day eventing competition in the parkland. One of the world\'s top horse trials.', badge: 'special', badgeText: 'SPECIAL', meta: 'Tickets from £25' }
    ]
  },

  "Hardwick Hall": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via M1', detail: 'Just off M1 Junction 29. From Chesterfield: 10 min. From Nottingham: 30 min. Signed from the motorway.' },
      { icon: '🅿️', name: 'NT Car Park', detail: 'National Trust car park. Free for members, £5 for non-members.' },
      { icon: '🚌', name: 'Pronto Bus', detail: 'Stagecoach Pronto from Chesterfield/Mansfield, alight at Hardwick crossroads. 1 mile walk to the hall.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Country Park', cls: 'green' },
        { icon: '🏛️', text: 'Grand Interiors', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'Bess of Hardwick\'s Elizabethan masterpiece — "more glass than wall". Contains exceptional original tapestries and the High Great Chamber. Ground floor accessible; upper floors via stairs (stairlift to first floor). The adjacent Old Hall ruin is also worth visiting. Surrounded by a country park with Longhorn cattle.'
    },
    events: [
      { month: 'DEC', day: '1', name: 'Christmas at Hardwick', desc: 'The Elizabethan hall decorated for Christmas with seasonal activities and local food market.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Booking recommended' }
    ]
  },

  "Sudeley Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A46', detail: 'In Winchcombe, Gloucestershire. From Cheltenham: 15 min via A46/B4632. From the M5 (J9): 25 min.' },
      { icon: '🚌', name: 'Bus 606', detail: 'Marchants Coaches from Cheltenham to Winchcombe. Several per day. The castle is signed from the village.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Free parking on site.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Award-Winning Gardens', cls: 'green' },
        { icon: '🏛️', text: 'Castle Interiors', cls: 'green' },
        { icon: '👶', text: 'Family Activities', cls: 'green' }
      ],
      note: 'Home and burial place of Katherine Parr, Henry VIII\'s sixth wife. The Queens\' Garden, Knot Garden, and Tudor ruins are beautiful. Partially accessible — some gravel paths and steps. The chapel where Katherine Parr is buried is step-free. Located in the Cotswolds near the Cotswold Way. Pheasantry and adventure playground for families.'
    },
    events: [
      { month: 'JUN', day: '20', name: 'Sudeley Castle Garden Festival', desc: 'Annual garden festival with specialist plant stalls, garden talks, and demonstrations.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Separate tickets' },
      { month: 'OCT', day: '25', name: 'Spectacle of Light', desc: 'After-dark illuminated trail through the castle gardens with light installations and music.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Timed tickets from £18' }
    ]
  },

  "Pendennis Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive to Falmouth', detail: 'On Pendennis Head, Falmouth. From Truro: 20 min via A39. Well signed in Falmouth.' },
      { icon: '🚂', name: 'Falmouth Docks Station', detail: 'GWR from Truro (25 min, frequent). The castle is 15 min walk uphill from the station.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'English Heritage car park on site. Free for members.' },
      { icon: '⛴️', name: 'St Mawes Ferry', detail: 'Ferry from St Mawes across the Carrick Roads — visit both Henry VIII castles in a day.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🏛️', text: 'Tudor Keep', cls: 'green' },
        { icon: '🌊', text: 'Coastal Headland', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'Henry VIII fortress with Elizabethan ramparts on a coastal headland. The outer defences and grounds are accessible. The Tudor keep has stairs. Excellent interactive displays about the castle\'s five-month Civil War siege. WW1 and WW2 gun batteries also on site. English Heritage property.'
    },
    events: [
      { month: 'AUG', day: '10', name: 'Knights\' Tournament', desc: 'English Heritage jousting and medieval combat display in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Free with admission' }
    ]
  },

  "Restormel Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive to Lostwithiel', detail: 'Signed from Lostwithiel, Cornwall. From the A390: follow signs north. The castle is 1 mile north of town.' },
      { icon: '🚂', name: 'Lostwithiel Station', detail: 'GWR on the Cornwall main line. From the station: 20 min walk uphill to the castle.' },
      { icon: '🅿️', name: 'Castle Car Park', detail: 'Small English Heritage car park. Free. Limited spaces.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '🏛️', text: 'Shell Keep', cls: 'green' },
        { icon: '📐', text: 'Steep Hill', cls: 'amber' },
        { icon: '🌳', text: 'Woodland Setting', cls: 'green' }
      ],
      note: 'A remarkably well-preserved Norman circular shell keep on a high mound above the River Fowey. Steep uphill approach — not wheelchair accessible. Internal rooms visible at wall-walk level. Peaceful woodland setting. English Heritage, seasonal opening (Apr–Sep). Quiet and uncrowded.'
    },
    events: []
  },

  "Pevensey Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Pevensey & Westham Station', detail: 'Southern Rail from London Victoria via Eastbourne. 5 min walk from the station to the castle.' },
      { icon: '🚗', name: 'Drive via A27', detail: 'Just off the A27 at Pevensey, East Sussex. From Eastbourne: 10 min. From Brighton: 40 min.' },
      { icon: '🅿️', name: 'Roadside Parking', detail: 'Free roadside parking near the castle entrance on Castle Road.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🚶', text: 'Uneven Ground', cls: 'amber' },
        { icon: '🏛️', text: 'Roman Walls', cls: 'green' }
      ],
      note: 'Norman castle built within impressive Roman Saxon Shore fort walls (3rd century). Where William the Conqueror landed in 1066. The Roman walls are the main attraction — remarkably complete. Inner Norman bailey has uneven ground. Free entry to the Roman walls; English Heritage manages the Norman inner castle. Seasonal opening for the inner castle.'
    },
    events: []
  },

  "Haddon Hall": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A6', detail: 'On the A6, 2 miles south of Bakewell in the Peak District. From Sheffield: 40 min. From Derby: 45 min.' },
      { icon: '🅿️', name: 'Hall Car Park', detail: 'Car park at the entrance. £3 parking fee.' },
      { icon: '🚌', name: 'Bus 172', detail: 'TM Travel from Bakewell, or Transpeak service from Derby/Nottingham along the A6. Alight at Haddon Hall.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🏛️', text: 'Medieval Interiors', cls: 'green' },
        { icon: '🌳', text: 'Terraced Gardens', cls: 'green' },
        { icon: '📐', text: 'Steps Throughout', cls: 'amber' }
      ],
      note: 'One of the finest medieval and Tudor manor houses in England, remarkably unaltered since the 17th century. Steps and uneven surfaces throughout — not wheelchair accessible. The terraced gardens above the River Wye are beautiful. Featured in multiple film productions. Seasonal opening — check dates. The Long Gallery and medieval wall paintings are highlights.'
    },
    events: [
      { month: 'DEC', day: '5', name: 'Christmas at Haddon', desc: 'The medieval hall decorated for Christmas with period music and festive atmosphere.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Booking recommended' }
    ]
  },

  "St Michael's Mount": {
    gettingThere: [
      { icon: '🚶', name: 'Causeway at Low Tide', detail: 'Walk across the granite causeway from Marazion at low tide (about 400m). Check tide times before visiting.' },
      { icon: '⛴️', name: 'Boat at High Tide', detail: 'Small passenger boats run from Marazion harbour when the causeway is covered. £2.50 return.' },
      { icon: '🚂', name: 'Penzance Station', detail: 'GWR from London Paddington (5h) or local services. Then bus or taxi to Marazion (3 miles).' },
      { icon: '🅿️', name: 'Marazion Car Parks', detail: 'Pay & display car parks in Marazion village. No parking on the island.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Very Limited Access', cls: 'red' },
        { icon: '📐', text: 'Steep Cobbled Path', cls: 'red' },
        { icon: '🌊', text: 'Tidal Island', cls: 'amber' },
        { icon: '🏛️', text: 'Castle & Church', cls: 'green' }
      ],
      note: 'A dramatic island castle and church accessible by causeway at low tide or boat. Very steep cobbled path to the summit — not wheelchair accessible. The harbour village and gardens are partially accessible. Tide-dependent access means careful planning is essential. National Trust, separate tickets for castle and garden. One of Cornwall\'s most iconic landmarks.'
    },
    events: [
      { month: 'JUN', day: '23', name: 'Midsummer Celebration', desc: 'Traditional midsummer celebration with music and festivities on the island.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Limited places' }
    ]
  },

  // ── Wales ─────────────────────────────────────────────────

  "Powis Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A483', detail: 'On the A483, 1 mile south of Welshpool. From Shrewsbury: 30 min. From Newtown: 25 min.' },
      { icon: '🚂', name: 'Welshpool Station', detail: 'Transport for Wales from Shrewsbury/Birmingham. The castle is 1 mile from the station — uphill walk or taxi.' },
      { icon: '🅿️', name: 'NT Car Park', detail: 'National Trust car park. Free for members. Signed from the A483.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Italianate Terraces', cls: 'green' },
        { icon: '📐', text: 'Steep Gardens', cls: 'amber' },
        { icon: '🏛️', text: 'Grand Interiors', cls: 'green' }
      ],
      note: 'Famous for its spectacular Italianate terraced gardens — among the finest in Britain. The castle interiors house the Clive Museum of Indian treasures. Garden terraces involve steep steps between levels. Castle ground floor accessible. National Trust property. The deer park and woodland are also open for walks.'
    },
    events: [
      { month: 'JUL', day: '20', name: 'Powis Castle Garden Fair', desc: 'Specialist plant fair on the terraces with nurseries and garden experts.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with admission' },
      { month: 'DEC', day: '1', name: 'Christmas at Powis', desc: 'Festive decorations throughout the castle with seasonal activities for families.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Booking recommended' }
    ]
  },

  "Chirk Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A5', detail: 'Off the A5 near Chirk, Wrexham. From Llangollen: 10 min. From Shrewsbury: 30 min. From Chester: 35 min.' },
      { icon: '🚂', name: 'Chirk Station', detail: 'Transport for Wales on the Shrewsbury–Chester line. The castle is 1 mile from the station.' },
      { icon: '🅿️', name: 'NT Car Park', detail: 'National Trust car park. Free for members. Follow signs from the A5.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Formal Gardens', cls: 'green' },
        { icon: '🏛️', text: '700 Years of Interiors', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' }
      ],
      note: 'The last of the Edwardian castles still inhabited — 700 years of continuous occupation. Interiors range from medieval dungeon to elegant 18th-century state rooms. Garden and grounds largely accessible. Castle has stairs to upper floors. Famous wrought-iron gates by the Davies brothers. National Trust property.'
    },
    events: [
      { month: 'OCT', day: '25', name: 'Halloween at Chirk', desc: 'Spooky trails and family activities in the castle and grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Booking essential' },
      { month: 'DEC', day: '5', name: 'Christmas at Chirk Castle', desc: 'The castle decorated for Christmas through the centuries — from medieval to Victorian.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Timed tickets' }
    ]
  },

  "Carreg Cennen Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A483', detail: 'Near Trapp village, 4 miles SE of Llandeilo. From Llandeilo: 10 min. From Swansea: 40 min via A483.' },
      { icon: '🅿️', name: 'Farm Car Park', detail: 'Car park at the farm below the castle. £1 honesty box. The castle is a 15 min uphill walk from here.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '📐', text: 'Steep Hillside', cls: 'red' },
        { icon: '🌄', text: 'Dramatic Cliff Setting', cls: 'green' },
        { icon: '🏛️', text: 'Cave Passage', cls: 'amber' }
      ],
      note: 'Perhaps the most spectacularly sited castle in Wales — perched on a limestone cliff in the Brecon Beacons. Steep 15 min uphill walk from the car park. The cave passage beneath the castle is dark (bring a torch) and involves crouching. Breathtaking views. Cadw property. A working farm below the castle sells refreshments.'
    },
    events: []
  },

  "Caldicot Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via M48', detail: 'In Caldicot, Monmouthshire. From M48 (J2): 5 min. From Newport: 20 min via M4/M48. Well signed.' },
      { icon: '🚂', name: 'Caldicot Station', detail: 'Transport for Wales from Cardiff/Newport. 10 min walk to the castle through the country park.' },
      { icon: '🅿️', name: 'Country Park Car Park', detail: 'Free parking in Caldicot Castle Country Park.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌳', text: 'Country Park', cls: 'green' },
        { icon: '🏛️', text: 'Medieval Castle', cls: 'green' },
        { icon: '👶', text: 'Family Friendly', cls: 'green' }
      ],
      note: 'A well-preserved medieval castle with a Norman motte, round tower, and 14th-century gatehouse set in 55 acres of beautiful country park. The grounds are accessible; the castle interior has some stairs. Popular for family events and weddings. Free entry to the country park; castle has separate admission.'
    },
    events: [
      { month: 'AUG', day: '20', name: 'Medieval Festival', desc: 'Annual medieval fayre with re-enactments, jousting, and living history in the castle grounds.', badge: 'family', badgeText: 'FAMILY', meta: 'Separate tickets' }
    ]
  },

  "Dolwyddelan Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A470', detail: 'On the A470 between Betws-y-Coed and Blaenau Ffestiniog. From Betws-y-Coed: 15 min. Well signed.' },
      { icon: '🚂', name: 'Dolwyddelan Station', detail: 'Transport for Wales on the Conwy Valley line (Llandudno–Blaenau). The castle is 1 mile from the station.' },
      { icon: '🅿️', name: 'Small Car Park', detail: 'Cadw car park near the castle. Free. Very limited spaces.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '📐', text: 'Steep Hillside', cls: 'amber' },
        { icon: '🌄', text: 'Mountain Setting', cls: 'green' }
      ],
      note: 'Reputed birthplace of Llywelyn the Great. A lonely Welsh-built castle commanding the Lledr Valley with dramatic Snowdonia mountain views. Steep uphill walk from the car park — not accessible. The rectangular keep was restored by Edward I. Cadw property, seasonal opening.'
    },
    events: []
  },

  "Denbigh Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A525', detail: 'In Denbigh, Denbighshire. From Rhyl: 20 min via A525. From Chester: 40 min via A55/A525.' },
      { icon: '🚌', name: 'Bus Routes', detail: 'Local buses from Rhyl and Ruthin serve Denbigh. The castle is a short walk uphill from the town centre.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Pay & display car parks in Denbigh town centre. No parking at the castle itself.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Not Accessible', cls: 'red' },
        { icon: '📐', text: 'Hilltop Site', cls: 'amber' },
        { icon: '🏛️', text: 'Unique Gatehouse', cls: 'green' },
        { icon: '🚶', text: 'Uneven Ground', cls: 'amber' }
      ],
      note: 'Crowning a hilltop above the Vale of Clwyd with an unusual triple-towered gatehouse unique in Britain. Steep walk from the town. Uneven ground throughout — not wheelchair accessible. The town walls are also worth exploring. Cadw property, seasonal opening.'
    },
    events: []
  },

  "Flint Castle": {
    gettingThere: [
      { icon: '🚂', name: 'Flint Station', detail: 'Transport for Wales on the North Wales Coast line. 5 min walk from the station to the castle.' },
      { icon: '🚗', name: 'Drive via A548', detail: 'In Flint, Flintshire. From Chester: 20 min via A55/A548. From Mold: 15 min.' },
      { icon: '🅿️', name: 'Roadside Parking', detail: 'Free parking near the castle on Castle Street.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌊', text: 'Estuary Setting', cls: 'green' },
        { icon: '🚶', text: 'Uneven Ground', cls: 'amber' }
      ],
      note: 'The first of Edward I\'s Welsh castles (1277). Its unique detached great tower is unlike any other castle in Britain. Set on the Dee Estuary with views across to the Wirral. The grounds are partially accessible; the towers have steps. Free entry, open year-round. The scene of Richard II\'s fateful meeting with Bolingbroke (dramatized by Shakespeare).'
    },
    events: []
  },

  "Rhuddlan Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A525', detail: 'In Rhuddlan, Denbighshire. From Rhyl: 5 min via A525. From St Asaph: 5 min.' },
      { icon: '🚌', name: 'Local Buses', detail: 'Frequent services from Rhyl and Prestatyn stop in Rhuddlan village. 5 min walk to the castle.' },
      { icon: '🅿️', name: 'Roadside Parking', detail: 'Limited roadside parking near the castle. The castle is accessed from Castle Street.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🚶', text: 'Uneven Ground', cls: 'amber' },
        { icon: '🏛️', text: 'Concentric Walls', cls: 'green' }
      ],
      note: 'Edward I diverted the River Clwyd to supply this concentric castle by sea — an extraordinary feat of medieval engineering. The Statute of Rhuddlan (1284) establishing English law in Wales was issued here. Grounds partially accessible; towers have spiral stairs. Cadw property.'
    },
    events: []
  },

  "Manorbier Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A4139', detail: 'Near Tenby, Pembrokeshire. From Tenby: 10 min via A4139/B4585. Signed from Manorbier village.' },
      { icon: '🚂', name: 'Manorbier Station', detail: 'Transport for Wales on the Pembroke Dock line. 15 min walk downhill to the castle.' },
      { icon: '🅿️', name: 'Village Car Park', detail: 'Pay & display car park near the beach, short walk to the castle. £3/day in summer.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🌊', text: 'Beach & Coast', cls: 'green' },
        { icon: '🏛️', text: 'Well-Preserved Walls', cls: 'green' },
        { icon: '🚶', text: 'Steps Throughout', cls: 'amber' }
      ],
      note: 'Gerald of Wales called it "the pleasantest spot in Wales". Well-preserved Norman castle overlooking a sandy beach. Steps throughout — limited accessibility. Still privately owned. The beach below is excellent. On the Pembrokeshire Coast Path.'
    },
    events: [
      { month: 'AUG', day: '15', name: 'Medieval Weekend', desc: 'Living history weekend with re-enactors, combat displays, and medieval crafts.', badge: 'family', badgeText: 'FAMILY', meta: 'Included with admission' }
    ]
  },

  "Laugharne Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via A4066', detail: 'In Laugharne, Carmarthenshire. From Carmarthen: 20 min via A40/A4066. From Tenby: 30 min.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Free parking in Laugharne village near the castle. Limited spaces.' },
      { icon: '🚌', name: 'Bus 222', detail: 'First Cymru from Carmarthen and St Clears. Several per day Mon–Sat.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌊', text: 'Estuary Views', cls: 'green' },
        { icon: '🏛️', text: 'Tudor Conversion', cls: 'green' }
      ],
      note: 'Overlooking the Taf estuary, this castle was converted into a Tudor mansion. Dylan Thomas described it as "the best castle in the world" and lived in its shadow at the Boathouse nearby. Grounds partially accessible; towers have stairs. Cadw property. Combine with a visit to Dylan Thomas\' Boathouse and Writing Shed.'
    },
    events: [
      { month: 'NOV', day: '5', name: 'Dylan Thomas Birthday Celebration', desc: 'Annual celebration of the poet\'s birthday (Nov 9) with readings, music, and events around Laugharne.', badge: 'special', badgeText: 'SPECIAL', meta: 'Various venues' }
    ]
  },

  // ── Ireland ───────────────────────────────────────────────

  "Kylemore Abbey": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via N59', detail: 'On the N59 in Connemara, County Galway. From Galway city: 1h 20min. From Clifden: 15 min. Well signed.' },
      { icon: '🚌', name: 'Citylink 923', detail: 'Galway–Clifden coach stops at Kylemore Abbey. Several services per day.' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'Large free car park at the visitor centre. Shuttle bus runs to the abbey and walled garden.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🌳', text: 'Victorian Walled Garden', cls: 'green' },
        { icon: '💺', text: 'Seating Available', cls: 'green' },
        { icon: '🏛️', text: 'Neo-Gothic Interiors', cls: 'green' }
      ],
      note: 'A stunning neo-Gothic castle on the shore of Kylemore Lough, home to Benedictine nuns since 1920. The visitor areas and Victorian Walled Garden (the largest in Ireland) are largely accessible. Shuttle bus connects the car park, abbey, and garden. The Gothic Church is a miniature cathedral. Connemara setting is breathtaking. Excellent craft shop and restaurant.'
    },
    events: [
      { month: 'DEC', day: '1', name: 'Christmas at Kylemore', desc: 'The abbey and grounds decorated for Christmas with a nativity crib and seasonal market.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Included with admission' }
    ]
  },

  "Clonmacnoise": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via R444', detail: 'In County Offaly on the River Shannon. From Athlone: 20 min via N62/R444. From Dublin: 1h 45min via M6.' },
      { icon: '🅿️', name: 'Visitor Centre Car Park', detail: 'OPW car park at the visitor centre. Free.' },
      { icon: '⛴️', name: 'Shannon Cruise', detail: 'Viking Ship cruise from Athlone arrives at Clonmacnoise (seasonal). A memorable approach by river.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🌿', text: 'Riverside Meadows', cls: 'green' },
        { icon: '🏛️', text: 'High Crosses & Round Tower', cls: 'green' }
      ],
      note: 'One of Ireland\'s most important early monastic sites, founded by St Ciarán in 544. The visitor centre houses the original high crosses (replicas stand outside). The site is largely flat and accessible on mown grass. Cathedral ruins, round tower, multiple churches, and an extensive graveyard. On the banks of the Shannon. OPW heritage site.'
    },
    events: [
      { month: 'SEP', day: '9', name: 'Clonmacnoise Heritage Day', desc: 'Annual pilgrimage and heritage event on the feast of St Ciarán.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free' }
    ]
  },

  "Glendalough": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via R756', detail: 'In the Wicklow Mountains, County Wicklow. From Dublin: 1h via N11/R755. Scenic approach through the Sally Gap.' },
      { icon: '🚌', name: 'St Kevin\'s Bus', detail: 'Daily service from Dublin (Dawson Street) to Glendalough. Departs 11:30am, returns 4:30pm (check seasonal times).' },
      { icon: '🅿️', name: 'Visitor Centre Car Park', detail: 'OPW car park at the visitor centre. Can fill up on sunny weekends — arrive early. Upper car park also available.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌄', text: 'Mountain Valley', cls: 'green' },
        { icon: '🚶', text: 'Walking Trails', cls: 'green' },
        { icon: '🏛️', text: 'Round Tower & Churches', cls: 'green' }
      ],
      note: 'An early medieval monastic settlement in a glacial valley in the Wicklow Mountains. The monastic city (round tower, cathedral, stone churches) is relatively flat and partially accessible. Walking trails around the Upper and Lower Lakes vary in difficulty. Free entry to the monastic site; visitor centre has a small charge. Popular hiking destination — the Wicklow Way passes nearby.'
    },
    events: []
  },

  "Muckross House": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via N71', detail: 'On the N71, 4 miles south of Killarney. From Killarney: 10 min. Well signed.' },
      { icon: '🚌', name: 'Shuttle from Killarney', detail: 'Seasonal shuttle bus from Killarney town centre. Jaunting cars (horse-drawn) also available from the town.' },
      { icon: '🅿️', name: 'Muckross Car Park', detail: 'Large free car park. Gateway to Killarney National Park.' },
      { icon: '🚲', name: 'Cycle from Killarney', detail: 'Popular cycle route from Killarney through the National Park. Bike hire available in town.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🌳', text: 'National Park', cls: 'green' },
        { icon: '🏛️', text: 'Victorian Mansion', cls: 'green' },
        { icon: '💺', text: 'Full Facilities', cls: 'green' }
      ],
      note: 'A Victorian mansion in the heart of Killarney National Park. The house is largely accessible with ground floor rooms and a lift. Beautiful lakeside gardens with rhododendrons and azaleas. The Traditional Farms recreate 1930s Kerry life. Muckross Abbey (15th-century Franciscan friary) is a short walk away. Restaurant, craft shop, and garden centre on site.'
    },
    events: [
      { month: 'MAY', day: '15', name: 'Garden Festival', desc: 'Annual garden festival featuring the famous Muckross rhododendron and azalea collection.', badge: 'seasonal', badgeText: 'SEASONAL', meta: 'Free with grounds admission' }
    ]
  },

  "Dunbrody Abbey": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via R733', detail: 'Near Campile, County Wexford. From New Ross: 15 min south via R733. From Waterford: 30 min.' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'Free parking at the visitor centre.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🌿', text: 'Riverside Setting', cls: 'green' },
        { icon: '🏛️', text: 'Impressive Ruins', cls: 'green' }
      ],
      note: 'A large Cistercian abbey on the banks of the River Barrow with an impressive nave and crossing tower surviving nearly to full height. The grounds are mostly flat and partially accessible. The visitor centre includes a hedge maze and pitch-and-putt course. Remote but rewarding. Seasonal opening.'
    },
    events: []
  },

  "Hook Lighthouse": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via R734', detail: 'At the tip of Hook Head peninsula, County Wexford. From New Ross: 30 min via R733/R734. From Waterford: 40 min.' },
      { icon: '🅿️', name: 'Lighthouse Car Park', detail: 'Free parking at the lighthouse. The drive along the peninsula is scenic.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🏛️', text: 'Spiral Stairs', cls: 'amber' },
        { icon: '🌊', text: 'Coastal Headland', cls: 'green' }
      ],
      note: 'One of the oldest operational lighthouses in the world (13th century). The tower is accessed via 115 spiral stairs — not wheelchair accessible. The visitor centre and café at the base are accessible. Whale and dolphin watching from the headland. Guided tours explain 800 years of maritime history. The Hook peninsula has excellent fossil beaches.'
    },
    events: [
      { month: 'SEP', day: '14', name: 'Heritage Week at Hook', desc: 'Special talks and extended tours during national Heritage Week.', badge: 'special', badgeText: 'SPECIAL', meta: 'Free / discounted' }
    ]
  },

  "Jerpoint Abbey": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via N9', detail: '2.5km south of Thomastown, County Kilkenny on the R448. From Kilkenny: 25 min via N10/R448.' },
      { icon: '🅿️', name: 'Abbey Car Park', detail: 'Free parking at the visitor centre.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Partial Access', cls: 'amber' },
        { icon: '🏛️', text: 'Sculptured Cloisters', cls: 'green' },
        { icon: '🌿', text: 'Pastoral Setting', cls: 'green' }
      ],
      note: 'A Cistercian abbey founded in 1180 with some of the finest Romanesque and Gothic stone carvings in Ireland. The unique cloister arcade features sculpted figures of knights, saints, and dragons. The visitor centre provides excellent context. OPW heritage site with guided tours. Nearby Jerpoint Glass studio is also worth visiting.'
    },
    events: []
  },

  "Athenry Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via M6/M17', detail: 'In Athenry, County Galway. From Galway: 25 min via M6/M17. From Dublin: 2h via M6.' },
      { icon: '🚂', name: 'Athenry Station', detail: 'Irish Rail on the Dublin–Galway line. The castle is 5 min walk from the station in the town centre.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Free parking in Athenry town centre near the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🏛️', text: 'Anglo-Norman Keep', cls: 'green' },
        { icon: '🚶', text: 'Town Walls Walk', cls: 'green' }
      ],
      note: 'A well-preserved Anglo-Norman castle built around 1240. The town\'s medieval walls are among the best preserved in Ireland. The castle has stairs — limited accessibility. The visitor centre has displays on the medieval town. OPW heritage site. Combine with a walk of the town walls for the full medieval experience.'
    },
    events: [
      { month: 'AUG', day: '18', name: 'Athenry Medieval Festival', desc: 'Annual walled-town festival with re-enactments, market, and medieval entertainment.', badge: 'family', badgeText: 'FAMILY', meta: 'Free' }
    ]
  },

  "Roscommon Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via N60/N61', detail: 'In Roscommon town. From Athlone: 30 min via N61. From Galway: 1h via M6/N63.' },
      { icon: '🅿️', name: 'Roadside Parking', detail: 'Free parking on the road beside the castle.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🚶', text: 'Uneven Ground', cls: 'amber' },
        { icon: '🏛️', text: 'D-shaped Towers', cls: 'green' }
      ],
      note: 'A large Norman castle (1269) with massive D-shaped corner towers. Free and open year-round. Uneven ground throughout — not wheelchair accessible. Changed hands repeatedly between Irish and English before Cromwell destroyed it. In a field on the edge of town. No visitor facilities — just raw ruins.'
    },
    events: []
  },

  "Lismore Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive via N72', detail: 'In Lismore, County Waterford. From Dungarvan: 25 min via N72. From Cork: 1h via N8/N72.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Free parking in Lismore town. Short walk to the castle gardens entrance.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Garden Accessible', cls: 'green' },
        { icon: '🌳', text: 'Historic Gardens', cls: 'green' },
        { icon: '🏛️', text: 'Castle Gallery', cls: 'green' }
      ],
      note: 'Perched on a cliff above the River Blackwater, the castle is the Irish home of the Duke of Devonshire. The castle itself is private but the gardens are open Apr–Sep, featuring a stunning upper and lower garden. The Lismore Castle Arts gallery hosts contemporary art exhibitions. The Yew Walk is said to be where Edmund Spenser wrote The Faerie Queene.'
    },
    events: [
      { month: 'JUN', day: '10', name: 'Immerse Waterford Festival', desc: 'Contemporary art exhibitions and installations in the castle gallery and gardens.', badge: 'special', badgeText: 'SPECIAL', meta: 'Separate gallery tickets' }
    ]
  },

  "Desmond Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive to Kinsale', detail: 'In Kinsale, County Cork. From Cork city: 25 min via R600. In the centre of town.' },
      { icon: '🚌', name: 'Bus 226', detail: 'Bus Éireann from Cork Bus Station to Kinsale. Frequent service. The castle is in the town centre.' },
      { icon: '🅿️', name: 'Town Parking', detail: 'Pay & display parking in Kinsale. The town is compact and walkable.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Limited Access', cls: 'red' },
        { icon: '🏛️', text: 'Tower House', cls: 'green' },
        { icon: '🍷', text: 'Wine Museum', cls: 'green' }
      ],
      note: 'A 15th-century tower house built by the Earls of Desmond, later used as a customs house and prison for captured sailors. Now houses the International Museum of Wine — telling the story of the Irish wine connection. Stairs inside — limited accessibility. OPW heritage site. Kinsale itself is a gourmet food destination.'
    },
    events: []
  },

  "King John's Castle": {
    gettingThere: [
      { icon: '🚗', name: 'Drive to Limerick', detail: 'On King\'s Island in Limerick city centre. From Dublin: 2h via M7. From Cork: 1h 30min via M20.' },
      { icon: '🚂', name: 'Limerick Colbert Station', detail: 'Irish Rail from Dublin Heuston (2h 15min) and Cork (1h 30min). The castle is 15 min walk from the station.' },
      { icon: '🚌', name: 'Bus Éireann', detail: 'Multiple services to Limerick bus station. The castle is a 10 min walk across the city.' },
      { icon: '🅿️', name: 'Nearby Car Parks', detail: 'Multi-storey car parks in Limerick city centre. Street parking near the castle is limited.' }
    ],
    terrain: {
      chips: [
        { icon: '♿', text: 'Mostly Accessible', cls: 'green' },
        { icon: '🏛️', text: 'Interactive Exhibition', cls: 'green' },
        { icon: '💺', text: 'Full Facilities', cls: 'green' },
        { icon: '👶', text: 'Family Friendly', cls: 'green' }
      ],
      note: 'A 13th-century castle on King\'s Island in Limerick with imposing drum towers and curtain walls. The excellent interactive exhibition covers 800 years of history, with archaeological excavations visible in the courtyard. Largely accessible with lift access to the exhibition. Views across the Shannon from the towers. One of the best-presented heritage sites in Ireland.'
    },
    events: [
      { month: 'JUL', day: '10', name: 'Riverfest', desc: 'Limerick\'s annual festival centred on the Shannon, with events at the castle and surrounding area.', badge: 'special', badgeText: 'SPECIAL', meta: 'Mostly free' },
      { month: 'OCT', day: '29', name: 'Samhain at King John\'s Castle', desc: 'Halloween celebrations with medieval-themed scares, storytelling, and family activities.', badge: 'family', badgeText: 'FAMILY', meta: 'Booking recommended' }
    ]
  }
};