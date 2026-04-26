// Shared region page logic - reads window.REGION_CONFIG
(function(){
  const CONFIG = window.REGION_CONFIG;
  if (!CONFIG) { console.error('REGION_CONFIG not defined'); return; }

  const counties = CONFIG.counties;
  const country = CONFIG.country || 'Scotland';

  // Load per-region JSON data
  const regionSlug = CONFIG.slug || location.pathname.split('/').pop().replace('.html','');
  
  fetch('/scotland/data/' + regionSlug + '.json')
    .then(r => r.json())
    .then(all => initRegion(all))
    .catch(err => { console.error('Failed to load region data:', err); });

  function slug(n){ return n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
  
  // Cloudflare Image Transformations — resize + auto-format on the fly
  function optImg(url, width, quality) {
    if (!url) return '';
    // Only transform http(s) URLs from allowed origins
    if (!url.startsWith('http')) return url;
    var w = width || 400;
    var q = quality || 80;
    return '/cdn-cgi/image/width=' + w + ',quality=' + q + ',format=auto,fit=cover/' + url;
  }

  function getImg(c){
    if (c.image && c.image.includes('img.castlecore.uk')) return c.image;
    if (c.gallery && c.gallery.length) return c.gallery[0];
    return c.image || '';
  }

  function initRegion(all) {
    const freeCount = all.filter(c => c.access === 'free').length;

    // Update dynamic counts
    const heroEl = document.getElementById('heroCount');
    if (heroEl) heroEl.textContent = all.length + ' Castles & Historic Sites';
    const introEl = document.getElementById('introCount');
    if (introEl) introEl.textContent = all.length;
    const faqEl = document.getElementById('faqCount');
    if (faqEl) faqEl.textContent = all.length;

    // ===== QUICK PICKS =====
    const top5 = all.filter(c => c.rating >= 4.0)
      .sort((a, b) => (b.rating - a.rating) || (b.reviewCount - a.reviewCount))
      .slice(0, 5);
    const picksEl = document.getElementById('picksRow');
    if (picksEl) {
      picksEl.innerHTML = top5.map((c, i) => {
        const img = getImg(c);
        return '<a class="pick-card" href="/site/' + slug(c.name) + '.html" data-idx="' + i + '">' +
          '<img src="' + optImg(img, 600) + '" alt="' + c.name + '" loading="lazy" decoding="async" onerror="this.style.display=\'none\'">' +
          '<div class="pick-card-body"><h3>' + c.name + '</h3><span>★ ' + c.rating + '</span></div></a>';
      }).join('');
    }

    // ===== FILTERS =====
    const filterDefs = [
      { label: 'All', fn: null },
      { label: 'Free Entry', fn: c => c.access === 'free' },
      { label: 'Castles', fn: c => (c.type || '').toLowerCase() === 'castle' },
      { label: 'Abbeys', fn: c => (c.type || '').toLowerCase() === 'abbey' },
      { label: 'Ruins', fn: c => (c.condition || '').includes('ruin') },
      { label: 'Intact', fn: c => c.condition === 'intact' || c.condition === 'restored' },
      { label: 'Atmospheric', fn: c => (c.tags || []).includes('atmospheric') },
      { label: 'Remote', fn: c => (c.tags || []).includes('remote') },
      { label: 'Photogenic', fn: c => (c.tags || []).includes('photogenic') },
      { label: 'Haunted', fn: c => (c.tags || []).includes('haunted') },
    ];
    const filterRow = document.getElementById('filterRow');
    filterDefs.forEach((d, i) => {
      const b = document.createElement('button');
      b.className = 'filter-chip' + (i === 0 ? ' active' : '');
      b.textContent = d.label;
      b.dataset.idx = i;
      filterRow.appendChild(b);
    });

    let activeFilters = new Set([0]), curSort = 'rating', searchQ = '', shown = 12;

    filterRow.addEventListener('click', e => {
      if (!e.target.classList.contains('filter-chip')) return;
      const idx = +e.target.dataset.idx;
      if (idx === 0) {
        activeFilters.clear(); activeFilters.add(0);
        filterRow.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      } else {
        if (activeFilters.has(idx)) { activeFilters.delete(idx); e.target.classList.remove('active'); }
        else { activeFilters.add(idx); e.target.classList.add('active'); }
        if (activeFilters.size > 0 && activeFilters.has(0)) {
          activeFilters.delete(0);
          filterRow.querySelector('[data-idx="0"]').classList.remove('active');
        }
        if (activeFilters.size === 0) {
          activeFilters.add(0);
          filterRow.querySelector('[data-idx="0"]').classList.add('active');
        }
      }
      shown = 12; render();
    });

    document.getElementById('sortRow').addEventListener('click', e => {
      if (!e.target.classList.contains('sort-btn')) return;
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      curSort = e.target.dataset.sort; render();
    });

    document.getElementById('siteSearch').addEventListener('input', function() {
      searchQ = this.value.toLowerCase().trim(); shown = 12; render();
    });
    window.showMore = function() { shown += 12; render(); };

    // ===== RENDER GRID =====
    function render() {
      let list = [...all];
      if (!activeFilters.has(0)) {
        activeFilters.forEach(idx => {
          const def = filterDefs[idx];
          if (def && def.fn) list = list.filter(def.fn);
        });
      }
      if (searchQ) list = list.filter(c => c.name.toLowerCase().includes(searchQ));
      if (curSort === 'rating') list.sort((a, b) => (b.rating || 0) - (a.rating || 0) || (b.reviewCount || 0) - (a.reviewCount || 0));
      else if (curSort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
      else if (curSort === 'reviews') list.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
      else if (curSort === 'free') list.sort((a, b) => { const af = a.access === 'free' ? 0 : 1, bf = b.access === 'free' ? 0 : 1; return af - bf || (b.rating || 0) - (a.rating || 0); });

      document.getElementById('resultsCount').textContent = Math.min(shown, list.length) + ' of ' + list.length + ' sites';
      const vis = list.slice(0, shown);
      const gridView = document.getElementById('gridView');
      gridView.innerHTML = vis.map((c, i) => {
        const img = getImg(c);
        const gallery = (c.gallery || []).slice(0, 5);
        const mobGallery = gallery.length ?
          '<div class="mob-gallery" style="display:none"><div class="mob-gallery-track">' +
          gallery.map((gi, j) => '<img src="' + optImg(gi, 600) + '" alt="" loading="lazy" decoding="async" class="' + (j === 0 ? 'active' : '') + '" style="width:100%;height:200px;object-fit:cover;display:' + (j === 0 ? 'block' : 'none') + '">').join('') +
          '</div>' + (gallery.length > 1 ? '<button class="mob-gal-btn prev" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.5);color:#fff;border:none;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:1rem;z-index:2">‹</button><button class="mob-gal-btn next" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.5);color:#fff;border:none;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:1rem;z-index:2">›</button>' : '') +
          (gallery.length > 1 ? '<div class="mob-dots" style="display:flex;justify-content:center;gap:5px;padding:8px 0">' + gallery.map((_, j) => '<span class="mob-dot' + (j === 0 ? ' active' : '') + '" style="width:6px;height:6px;border-radius:50%;background:' + (j === 0 ? 'var(--candlelight)' : 'rgba(255,255,255,.25)') + ';display:inline-block;cursor:pointer" data-idx="' + j + '"></span>').join('') + '</div>' : '') + '</div>' : '';
        
        const mobActions = '<div class="mob-actions" style="display:none;justify-content:space-between;align-items:center;padding:0 16px 14px;gap:12px">' +
          '<button class="mob-save-btn" style="background:none;border:1px solid #3a3a3a;border-radius:20px;padding:8px 16px;color:#ccc;font-size:.85rem;cursor:pointer;display:flex;align-items:center;gap:6px;flex-shrink:0">♡ Save</button>' +
          '<a href="/site/' + slug(c.name) + '.html" style="background:var(--burgundy);border:1px solid var(--burgundy);border-radius:20px;padding:8px 20px;color:#fff;font-size:.85rem;font-weight:600;text-align:center;flex:1;text-decoration:none">Explore</a>' +
          '</div>';
        
        return '<div class="site-card" data-idx="' + i + '">' +
          '<div class="site-card-img" style="position:relative">' + (img ? '<img src="' + optImg(img, 600) + '" alt="' + c.name + '" loading="lazy" decoding="async" onerror="this.parentElement.style.background=\'rgba(201,168,76,.03)\'">' : '') + (c.access === 'free' ? '<span class="free-badge">Free</span>' : '') + '</div>' +
          '<div class="site-card-body">' +
          '<h3>' + c.name + '</h3>' +
          mobGallery +
          '<p class="sc-meta">' + (c.era || '') + (c.county ? ' · ' + c.county : '') + '</p>' +
          '<p class="sc-desc">' + (c.description || '') + '</p>' +
          '<div class="site-card-foot"><span class="sc-type">' + (c.type || 'Castle') + '</span>' + (c.rating ? '<span class="sc-rating">★ ' + c.rating + '</span>' : '') + '</div>' +
          mobActions +
          '</div></div>';
      }).join('');

      const btn = document.getElementById('loadMore');
      btn.classList.toggle('hidden', shown >= list.length);
    }
    render();

    // ===== EVENT DELEGATION for hover/swipe/clicks =====
    const gridView = document.getElementById('gridView');
    
    // Delegated click handlers
    gridView.addEventListener('click', function(e) {
      // Mobile gallery nav
      const galBtn = e.target.closest('.mob-gal-btn');
      if (galBtn) {
        e.preventDefault();
        const dir = galBtn.classList.contains('next') ? 1 : -1;
        mobGalNav(galBtn, dir);
        return;
      }
      // Mobile gallery dots
      const dot = e.target.closest('.mob-dot');
      if (dot) {
        e.preventDefault();
        mobGalGo(dot, parseInt(dot.dataset.idx));
        return;
      }
      // Save button
      if (e.target.closest('.mob-save-btn')) {
        e.preventDefault(); e.stopPropagation();
        alert('Saved!');
        return;
      }
      // Card click → navigate (desktop only)
      const card = e.target.closest('.site-card');
      if (card && window.innerWidth > 768) {
        const idx = parseInt(card.dataset.idx);
        const castle = all[idx];
        if (castle) window.location = '/site/' + slug(castle.name) + '.html';
      }
    });

    // ===== HOVER PREVIEW (event delegation) =====
    let hoverPreview = null;
    let hideTimer = null;
    let currentHoverIdx = -1;

    function createHoverPreview() {
      if (hoverPreview) return hoverPreview;
      hoverPreview = document.createElement('div');
      hoverPreview.className = 'hover-preview';
      document.body.appendChild(hoverPreview);
      hoverPreview.addEventListener('mouseenter', function() {
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      });
      hoverPreview.addEventListener('mouseleave', function() {
        hoverPreview.classList.remove('show');
        currentHoverIdx = -1;
      });
      return hoverPreview;
    }

    function showHoverPreview(card, castle) {
      if (window.innerWidth <= 768) return;
      if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      const preview = createHoverPreview();
      const gallery = (castle.gallery || []).slice(0, 5);
      let galleryHtml = '';
      if (gallery.length) {
        galleryHtml = '<div class="hp-gallery">' +
          gallery.map((img, i) => '<img src="' + optImg(img, 600) + '" alt="" loading="lazy" decoding="async" class="' + (i === 0 ? 'active' : '') + '" onerror="this.remove()">').join('') +
          (gallery.length > 1 ? '<button class="hp-gallery-btn prev">‹</button><button class="hp-gallery-btn next">›</button>' : '') +
          '</div>' + (gallery.length > 1 ? '<div class="hp-dots">' + gallery.map((_, i) => '<button class="hp-dot' + (i === 0 ? ' active' : '') + '" data-idx="' + i + '"></button>').join('') + '</div>' : '');
      }
      const summary = (castle.description || '').substring(0, 120).replace(/\s+\S*$/, '') + (castle.description && castle.description.length > 120 ? '...' : '');
      preview.innerHTML = '<h4>' + castle.name + '</h4>' + galleryHtml +
        '<div class="hp-summary">' + summary + '</div>' +
        '<div class="hp-actions">' +
        '<button class="hp-heart">♡ Save</button>' +
        '<a class="hp-explore" href="/site/' + slug(castle.name) + '.html" target="_blank">Explore</a>' +
        '</div>';
      const rect = card.getBoundingClientRect();
      const isPick = card.classList.contains('pick-card');
      const w = isPick ? Math.max(rect.width, 340) : rect.width;
      preview.style.width = w + 'px';
      let left = isPick ? rect.left + (rect.width - w) / 2 : rect.left;
      let top = rect.top;
      if (left < 10) left = 10;
      if (top < 10) top = 10;
      preview.style.left = left + 'px';
      preview.style.top = (top + window.scrollY) + 'px';
      setTimeout(() => preview.classList.add('show'), 10);
    }

    // Hover preview click delegation
    document.addEventListener('click', function(e) {
      if (!hoverPreview) return;
      const galleryBtn = e.target.closest('.hp-gallery-btn');
      if (galleryBtn) {
        const dir = galleryBtn.classList.contains('next') ? 1 : -1;
        const gallery = galleryBtn.closest('.hp-gallery');
        const imgs = gallery.querySelectorAll('img');
        let cur = [...imgs].findIndex(i => i.classList.contains('active'));
        imgs[cur].classList.remove('active');
        cur = (cur + dir + imgs.length) % imgs.length;
        imgs[cur].classList.add('active');
        const dots = gallery.parentElement.querySelector('.hp-dots');
        if (dots) dots.querySelectorAll('.hp-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
        return;
      }
      const hpDot = e.target.closest('.hp-dot');
      if (hpDot) {
        const idx = parseInt(hpDot.dataset.idx);
        const dots = hpDot.parentElement;
        const gallery = dots.previousElementSibling;
        const imgs = gallery.querySelectorAll('img');
        imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
        dots.querySelectorAll('.hp-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
        return;
      }
      if (e.target.closest('.hp-heart')) { alert('Saved!'); return; }
    });

    // Delegated mouseenter/leave on grid + picks
    function setupHoverDelegation(container) {
      container.addEventListener('mouseover', function(e) {
        const card = e.target.closest('.site-card[data-idx], .pick-card[data-idx]');
        if (!card) return;
        const idx = parseInt(card.dataset.idx);
        if (idx === currentHoverIdx) return;
        currentHoverIdx = idx;
        const castle = all[idx];
        if (castle) showHoverPreview(card, castle);
      });
      container.addEventListener('mouseout', function(e) {
        const card = e.target.closest('.site-card[data-idx], .pick-card[data-idx]');
        if (!card) return;
        const related = e.relatedTarget;
        if (related && card.contains(related)) return;
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
          if (hoverPreview) hoverPreview.classList.remove('show');
          currentHoverIdx = -1;
          hideTimer = null;
        }, 200);
      });
    }
    setupHoverDelegation(gridView);
    const picksRow = document.getElementById('picksRow');
    if (picksRow) setupHoverDelegation(picksRow);

    // Mobile gallery functions
    function mobGalNav(btn, dir) {
      const card = btn.closest('.mob-gallery');
      const imgs = card.querySelectorAll('.mob-gallery-track img');
      let cur = [...imgs].findIndex(i => i.style.display === 'block');
      imgs[cur].style.display = 'none'; imgs[cur].classList.remove('active');
      cur = (cur + dir + imgs.length) % imgs.length;
      imgs[cur].style.display = 'block'; imgs[cur].classList.add('active');
      updateMobDots(card, cur);
    }
    function mobGalGo(dot, idx) {
      const card = dot.closest('.mob-gallery');
      const imgs = card.querySelectorAll('.mob-gallery-track img');
      imgs.forEach((img, i) => { img.style.display = i === idx ? 'block' : 'none'; img.classList.toggle('active', i === idx); });
      updateMobDots(card, idx);
    }
    function updateMobDots(card, cur) {
      const dots = card.querySelector('.mob-dots');
      if (dots) dots.querySelectorAll('.mob-dot').forEach((d, i) => {
        d.style.background = i === cur ? 'var(--candlelight)' : 'rgba(255,255,255,.25)';
        d.classList.toggle('active', i === cur);
      });
    }

    // Touch swipe delegation
    let swipeStartX = 0;
    gridView.addEventListener('touchstart', function(e) {
      if (e.target.closest('.mob-gallery')) swipeStartX = e.touches[0].clientX;
    }, { passive: true });
    gridView.addEventListener('touchend', function(e) {
      const gal = e.target.closest('.mob-gallery');
      if (!gal) return;
      const dx = e.changedTouches[0].clientX - swipeStartX;
      if (Math.abs(dx) < 40) return;
      const imgs = gal.querySelectorAll('.mob-gallery-track img');
      let cur = [...imgs].findIndex(i => i.style.display === 'block');
      const dir = dx < 0 ? 1 : -1;
      const next = (cur + dir + imgs.length) % imgs.length;
      imgs[cur].style.display = 'none'; imgs[cur].classList.remove('active');
      imgs[next].style.display = 'block'; imgs[next].classList.add('active');
      updateMobDots(gal, next);
    }, { passive: true });

    // ===== SUBMENU SCROLL + NAV HIDE =====
    const submenu = document.getElementById('submenu');
    const mainNav = document.querySelector('.nav');
    const sections = ['sites-anchor', 'routes-anchor', 'travel-anchor', 'stay-anchor', 'when-anchor', 'faq-anchor'];
    const subLinks = submenu ? submenu.querySelectorAll('a') : [];
    let submenuNaturalTop = submenu ? submenu.offsetTop : 0;

    function updateSubmenu() {
      if (!submenu) return;
      const scroll = window.scrollY;
      const pastSubmenu = scroll >= submenuNaturalTop - 64;
      if (mainNav) mainNav.classList.toggle('nav-hidden', pastSubmenu);
      submenu.classList.toggle('submenu-solo', pastSubmenu);
      const offset = scroll + (pastSubmenu ? 60 : 140);
      let active = 0;
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) active = i;
      });
      subLinks.forEach((a, i) => { a.classList.toggle('active', i === active); });
      submenu.classList.toggle('scrolled', scroll > 400);
    }
    window.addEventListener('scroll', updateSubmenu, { passive: true });
    window.addEventListener('resize', () => { if (submenu) submenuNaturalTop = submenu.offsetTop; }, { passive: true });

    // ===== MEGA MENU =====
    document.querySelectorAll('.mega-country').forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        const c = this.dataset.country;
        this.closest('.mega-menu').querySelectorAll('.mega-country').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        this.closest('.mega-menu').querySelectorAll('.mega-panel').forEach(p => p.classList.toggle('active', p.dataset.country === c));
      });
    });
  }
})();