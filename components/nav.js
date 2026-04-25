(function() {
  // Get theme from script tag data attribute
  const currentScript = document.currentScript || document.querySelector('script[src*="nav.js"]');
  const theme = currentScript?.getAttribute('data-theme') || 'dark';
  const isDark = theme === 'dark';

  // CSS styles for both themes
  const cssStyles = `
    /* Base nav styles */
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      height: 64px;
      display: flex;
      align-items: center;
      padding: 0 24px;
      ${isDark ? 
        'background: rgba(15,22,40,.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,.06);' :
        'background: #fff; border-bottom: 1px solid #e8e8e8;'
      }
    }
    
    .nav-inner {
      max-width: 1280px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    
    .nav-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      color: ${isDark ? '#fff' : 'inherit'};
    }
    
    .nav-center {
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 1;
      justify-content: center;
    }
    
    .nav-dropdown {
      position: relative;
    }
    
    .nav-dropdown > .nav-drop-btn,
    .nav-center > .nav-drop-btn {
      font-size: .88rem;
      font-weight: 500;
      color: ${isDark ? 'rgba(255,255,255,.8)' : '#4a5568'};
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px 10px;
      font-family: 'Inter', sans-serif;
      transition: color .2s;
      display: flex;
      align-items: center;
      gap: 3px;
      text-decoration: none;
    }
    
    .nav-dropdown > .nav-drop-btn:hover,
    .nav-dropdown:hover > .nav-drop-btn,
    .nav-center > .nav-drop-btn:hover {
      color: ${isDark ? '#fff' : '#8b2335'};
    }
    
    .nav-drop-panel {
      display: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: ${isDark ? '#1a1d2e' : '#fff'};
      border: 1px solid ${isDark ? 'rgba(255,255,255,.1)' : '#e8e8e8'};
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(42,37,34,.12);
      min-width: 200px;
      padding: 8px 0;
      z-index: 9999;
      padding-top: 16px;
      margin-top: 0;
    }
    
    .nav-dropdown::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 16px;
    }
    
    .nav-dropdown:hover .nav-drop-panel {
      display: block;
    }
    
    .nav-drop-panel a {
      display: block;
      padding: 8px 18px;
      font-size: .88rem;
      color: ${isDark ? 'rgba(255,255,255,.9)' : '#2a2522'};
      transition: background .15s;
      text-decoration: none;
    }
    
    .nav-drop-panel a:hover {
      background: ${isDark ? 'rgba(255,255,255,.1)' : '#f0ebe0'};
      color: ${isDark ? '#fff' : '#8b2335'};
    }
    
    .nav-drop-panel .drop-divider {
      height: 1px;
      background: ${isDark ? 'rgba(255,255,255,.1)' : '#e8e8e8'};
      margin: 4px 0;
    }
    
    /* Mega menu */
    .mega-wrap:hover .mega-menu {
      display: flex;
    }
    
    .mega-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: ${isDark ? '#1a1d2e' : '#fff'};
      border: 1px solid ${isDark ? 'rgba(255,255,255,.1)' : '#e8e8e8'};
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(42,37,34,.12);
      min-width: 420px;
      z-index: 9999;
      margin-top: 0;
      padding: 0;
      overflow: hidden;
    }
    
    .mega-wrap::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 16px;
    }
    
    .mega-countries {
      display: flex;
      flex-direction: column;
      background: ${isDark ? 'rgba(255,255,255,.03)' : '#faf8f4'};
      border-right: 1px solid ${isDark ? 'rgba(255,255,255,.1)' : '#e8e8e8'};
      min-width: 150px;
      padding: 8px 0;
    }
    
    .mega-country {
      display: block;
      width: 100%;
      text-align: left;
      padding: 12px 20px;
      font-size: .9rem;
      font-weight: 500;
      color: ${isDark ? 'rgba(255,255,255,.7)' : '#4a5568'};
      background: none;
      border: none;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: all .15s;
      border-left: 3px solid transparent;
    }
    
    .mega-country:hover {
      color: ${isDark ? '#fff' : '#8b2335'};
      background: ${isDark ? 'rgba(255,255,255,.1)' : '#f0ebe0'};
    }
    
    .mega-country.active {
      color: ${isDark ? '#fff' : '#8b2335'};
      background: ${isDark ? 'rgba(255,255,255,.1)' : '#fff'};
      border-left-color: ${isDark ? '#fff' : '#8b2335'};
      font-weight: 600;
    }
    
    .mega-regions {
      flex: 1;
      padding: 12px 0;
    }
    
    .mega-panel {
      display: none;
    }
    
    .mega-panel.active {
      display: block;
    }
    
    .mega-panel a {
      display: block;
      padding: 8px 24px;
      font-size: .88rem;
      color: ${isDark ? 'rgba(255,255,255,.9)' : '#2a2522'};
      transition: background .15s, color .15s;
      text-decoration: none;
    }
    
    .mega-panel a:hover {
      background: ${isDark ? 'rgba(255,255,255,.1)' : '#f0ebe0'};
      color: ${isDark ? '#fff' : '#8b2335'};
    }
    
    .hamburger {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: ${isDark ? '#fff' : 'inherit'};
    }
    
    .mobile-menu {
      display: none;
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${isDark ? '#1a1d2e' : '#fff'};
      border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,.1)' : '#e8e8e8'};
      padding: 16px 24px;
      flex-direction: column;
      gap: 0;
      z-index: 999;
      overflow-y: auto;
    }
    
    .mobile-menu.open {
      display: flex;
    }
    
    .mobile-menu a {
      font-size: 1rem;
      font-weight: 500;
      color: ${isDark ? 'rgba(255,255,255,.8)' : '#4a5568'};
      padding: 10px 0;
      border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,.1)' : '#e8e8e8'};
      text-decoration: none;
    }
    
    .mobile-menu .mob-heading {
      font-size: .75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .5px;
      color: ${isDark ? 'rgba(255,255,255,.6)' : '#6b4c3b'};
      padding: 14px 0 4px;
      border-bottom: none;
    }
    
    .mobile-menu .mob-sub a {
      padding-left: 16px;
      font-size: .92rem;
    }
    
    @media (max-width: 768px) {
      .nav-center {
        display: none;
      }
      .hamburger {
        display: block;
      }
    }
  `;

  // HTML structure
  const navHTML = `
    <nav class="nav${isDark ? ' nav--dark' : ''}">
      <div class="nav-inner">
        <a href="/" class="nav-logo">
          <img src="/logo.png" alt="castlecore" style="height:42px;width:auto;border-radius:4px;vertical-align:middle">
          castlecore
        </a>
        <div class="nav-center">
          <div class="nav-dropdown">
            <button class="nav-drop-btn">🏰 Sites</button>
            <div class="nav-drop-panel">
              <a href="/search.html?type=castle">🏰 Castles</a>
              <a href="/search.html?type=abbey">⛪ Abbeys</a>
              <a href="/search.html?type=tower+house">🗼 Tower Houses</a>
              <a href="/search.html?type=palace">👑 Palaces</a>
              <a href="/search.html?type=fort">🛡️ Forts</a>
              <a href="/search.html?type=fortified+house">🏠 Fortified Houses</a>
            </div>
          </div>
          <div class="nav-dropdown mega-wrap">
            <button class="nav-drop-btn">🗺️ Regions</button>
            <div class="mega-menu">
              <div class="mega-countries">
                <button class="mega-country active" data-country="england">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</button>
                <button class="mega-country" data-country="scotland">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</button>
                <button class="mega-country" data-country="wales">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</button>
                <button class="mega-country" data-country="ireland">🍀 Ireland</button>
              </div>
              <div class="mega-regions">
                <div class="mega-panel active" data-country="england">
                  <a href="/england/northern-england">Northern England</a>
                  <a href="/england/yorkshire">Yorkshire</a>
                  <a href="/england/midlands">The Midlands</a>
                  <a href="/england/south-east">South East</a>
                  <a href="/england/south-west">South West</a>
                  <a href="/england/east-anglia">East Anglia</a>
                </div>
                <div class="mega-panel" data-country="scotland">
                  <a href="/scotland/highlands">The Highlands</a>
                  <a href="/scotland/edinburgh-lothians">Edinburgh &amp; Lothians</a>
                  <a href="/scotland/aberdeen-northeast">Aberdeen &amp; Northeast</a>
                  <a href="/scotland/argyll-islands">Argyll &amp; Islands</a>
                  <a href="/scotland/fife-perthshire">Fife &amp; Perthshire</a>
                  <a href="/scotland/borders">The Borders</a>
                  <a href="/scotland/dumfries-galloway">Dumfries &amp; Galloway</a>
                  <a href="/scotland/glasgow-stirling">Glasgow &amp; Stirling</a>
                </div>
                <div class="mega-panel" data-country="wales">
                  <a href="/wales/north-wales">Snowdonia &amp; the North</a>
                  <a href="/wales/mid-wales">The Marches &amp; Borders</a>
                  <a href="/wales/south-west-wales">Pembrokeshire &amp; the West</a>
                  <a href="/wales/south-wales">South Wales</a>
                </div>
                <div class="mega-panel" data-country="ireland">
                  <a href="/ireland/wild-atlantic-way">Wild Atlantic Way</a>
                  <a href="/ireland/kingdom-of-munster">Kingdom of Munster</a>
                  <a href="/ireland/irelands-ancient-east">Ireland's Ancient East</a>
                  <a href="/ireland/the-heartlands">The Heartlands</a>
                  <a href="/ireland/dublin-and-the-pale">Dublin &amp; The Pale</a>
                  <a href="/ireland/northwest-and-ulster">Northwest &amp; Ulster</a>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-dropdown">
            <button class="nav-drop-btn">✨ Collections</button>
            <div class="nav-drop-panel">
              <a href="/collection.html?id=top-rated">🏆 Top Rated</a>
              <a href="/collection.html?id=hidden-gems">💎 Hidden Gems</a>
              <a href="/collection.html?id=haunted">👻 Haunted</a>
              <a href="/collection.html?id=filming-locations">🎬 Filming Locations</a>
              <a href="/collection.html?id=free">🆓 Free to Visit</a>
              <a href="/collection.html?id=romantic-ruins">🌿 Romantic Ruins</a>
              <a href="/collection.html?id=photogenic">📸 Most Photogenic</a>
              <div class="drop-divider"></div>
              <a href="/collection.html">View all collections →</a>
            </div>
          </div>
          <a href="/trail.html" class="nav-drop-btn" style="text-decoration:none">🛤️ Routes</a>
        </div>
        <button class="hamburger" onclick="document.querySelector('.mobile-menu').classList.toggle('open')" aria-label="Menu">☰</button>
      </div>
    </nav>
    <div class="mobile-menu">
      <a href="/explore.html" style="color:${isDark ? '#c9a84c' : 'var(--burgundy)'};font-weight:700">Explore Map</a>
      <span class="mob-heading">🏰 Sites</span>
      <div class="mob-sub">
        <a href="/search.html?type=castle">🏰 Castles</a>
        <a href="/search.html?type=abbey">⛪ Abbeys</a>
        <a href="/search.html?type=tower+house">🗼 Tower Houses</a>
        <a href="/search.html?type=palace">👑 Palaces</a>
        <a href="/search.html?type=fort">🛡️ Forts</a>
      </div>
      <span class="mob-heading">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</span>
      <div class="mob-sub">
        <a href="/england/northern-england">Northern England</a>
        <a href="/england/yorkshire">Yorkshire</a>
        <a href="/england/midlands">The Midlands</a>
        <a href="/england/south-east">South East</a>
        <a href="/england/south-west">South West</a>
        <a href="/england/east-anglia">East Anglia</a>
      </div>
      <span class="mob-heading">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</span>
      <div class="mob-sub">
        <a href="/scotland/highlands">The Highlands</a>
        <a href="/scotland/edinburgh-lothians">Edinburgh &amp; Lothians</a>
        <a href="/scotland/aberdeen-northeast">Aberdeen &amp; Northeast</a>
        <a href="/scotland/argyll-islands">Argyll &amp; Islands</a>
        <a href="/scotland/fife-perthshire">Fife &amp; Perthshire</a>
        <a href="/scotland/borders">The Borders</a>
        <a href="/scotland/dumfries-galloway">Dumfries &amp; Galloway</a>
        <a href="/scotland/glasgow-stirling">Glasgow &amp; Stirling</a>
      </div>
      <span class="mob-heading">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</span>
      <div class="mob-sub">
        <a href="/wales/north-wales">Snowdonia &amp; the North</a>
        <a href="/wales/mid-wales">The Marches &amp; Borders</a>
        <a href="/wales/south-west-wales">Pembrokeshire &amp; the West</a>
        <a href="/wales/south-wales">South Wales</a>
      </div>
      <span class="mob-heading">🍀 Ireland</span>
      <div class="mob-sub">
        <a href="/ireland/wild-atlantic-way">Wild Atlantic Way</a>
        <a href="/ireland/kingdom-of-munster">Kingdom of Munster</a>
        <a href="/ireland/irelands-ancient-east">Ireland's Ancient East</a>
        <a href="/ireland/the-heartlands">The Heartlands</a>
        <a href="/ireland/dublin-and-the-pale">Dublin &amp; The Pale</a>
        <a href="/ireland/northwest-and-ulster">Northwest &amp; Ulster</a>
      </div>
      <span class="mob-heading">✨ Collections</span>
      <div class="mob-sub">
        <a href="/collection.html?id=top-rated">🏆 Top Rated</a>
        <a href="/collection.html?id=hidden-gems">💎 Hidden Gems</a>
        <a href="/collection.html?id=haunted">👻 Haunted</a>
        <a href="/collection.html?id=free">🆓 Free to Visit</a>
        <a href="/collection.html">View all →</a>
      </div>
      <a href="/trail.html">🛤️ Routes</a>
    </div>
  `;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = cssStyles;
  document.head.appendChild(style);

  // Inject nav HTML into the target element
  const targetElement = document.getElementById('site-nav') || document.body;
  if (targetElement === document.body) {
    targetElement.insertAdjacentHTML('afterbegin', navHTML);
  } else {
    targetElement.innerHTML = navHTML;
  }

  // Add mega menu functionality
  document.addEventListener('DOMContentLoaded', function() {
    const megaCountries = document.querySelectorAll('.mega-country');
    megaCountries.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        const country = this.dataset.country;
        const megaMenu = this.closest('.mega-menu');
        
        // Update active country
        megaMenu.querySelectorAll('.mega-country').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Update active panel
        megaMenu.querySelectorAll('.mega-panel').forEach(panel => {
          panel.classList.toggle('active', panel.dataset.country === country);
        });
      });
    });
  });
})();