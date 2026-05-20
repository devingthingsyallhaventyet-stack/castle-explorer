(function() {
  // Footer CSS styles
  const cssStyles = `
    footer {
      background: #2a2522;
      color: #fff;
      padding: 64px 24px 32px;
    }
    
    .footer-inner {
      max-width: 1280px;
      margin: 0 auto;
    }
    
    .footer-top {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 32px;
      margin-bottom: 48px;
    }
    
    .footer-brand .footer-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
    }
    
    .footer-brand p {
      color: rgba(255,255,255,.6);
      font-size: .85rem;
      max-width: 280px;
    }
    
    .footer-col h4 {
      font-size: .85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .5px;
      margin-bottom: 12px;
      color: rgba(255,255,255,.5);
    }
    
    .footer-col a {
      display: block;
      color: rgba(255,255,255,.7);
      font-size: .9rem;
      margin-bottom: 8px;
      transition: color .2s;
      text-decoration: none;
    }
    
    .footer-col a:hover {
      color: #fff;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,.1);
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      font-size: .8rem;
      color: rgba(255,255,255,.4);
      flex-wrap: wrap;
      gap: 8px;
    }
    
    @media (max-width: 768px) {
      .footer-top {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
    }
    
    @media (max-width: 480px) {
      .footer-top {
        grid-template-columns: 1fr;
      }
    }
  `;

  // Footer HTML
  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="/logo.png" alt="castlecore" style="height:32px;width:auto;border-radius:4px;vertical-align:middle;margin-right:8px">
              castlecore
            </div>
            <p>The most complete heritage guide for the UK &amp; Ireland</p>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <a href="/explore.html">Map</a>
            <a href="/collection.html">Collections</a>
            <a href="/scotland">Regions</a>
            <a href="/trail.html">Routes</a>
          </div>
          <div class="footer-col">
            <h4>Info</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>Built with ❤️ for history lovers</span>
          <span>© 2026 castlecore</span>
        </div>
      </div>
    </footer>
  `;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = cssStyles;
  document.head.appendChild(style);

  // Inject footer HTML into the target element
  const targetElement = document.getElementById('site-footer') || document.body;
  if (targetElement === document.body) {
    targetElement.insertAdjacentHTML('beforeend', footerHTML);
  } else {
    targetElement.innerHTML = footerHTML;
  }
})();