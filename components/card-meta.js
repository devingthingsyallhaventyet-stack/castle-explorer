// Lazily fills a listing card's live star rating (attributed to Google) and, for
// Google photos, the required photo author attribution — by fetching
// /public/listing-card/{slug} only when the card scrolls into view. Nothing is
// cached/stored: the rating and photo are fetched live each time (per Google
// Places API policy).
(function () {
  function fill(el) {
    var slug = el.getAttribute('data-card-slug');
    if (!slug) return;
    fetch('/public/listing-card/' + encodeURIComponent(slug))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d) return;
        var rt = el.querySelector('[data-card-rating]');
        if (rt && d.rating) {
          rt.textContent = '★ ' + d.rating + ' · Google';
          rt.style.display = '';
        }
        // Show the photo credit only when the card is actually showing a Google photo.
        var cr = el.querySelector('[data-card-credit]');
        if (cr && d.attribution && el.getAttribute('data-card-google') === '1') {
          var name = d.attribution.name || 'Google user';
          cr.textContent = 'Photo: ' + name;
          cr.style.display = '';
        }
      })
      .catch(function () {});
  }

  var io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { io.unobserve(e.target); fill(e.target); }
        });
      }, { rootMargin: '300px' })
    : null;

  // Public hook: call with a card element that carries data-card-slug.
  window.enrichCard = function (el) {
    if (!el || el.__cm) return;
    el.__cm = true;
    if (io) io.observe(el); else fill(el);
  };
})();
