(function () {
  'use strict';

  var root = document.documentElement;
  var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  /* Theme toggle: follows the system until the visitor picks a theme. */
  var themeButton = document.querySelector('[data-theme-toggle]');

  function activeTheme() {
    var chosen = root.getAttribute('data-theme');
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return darkQuery && darkQuery.matches ? 'dark' : 'light';
  }

  function syncThemeButton() {
    if (!themeButton) return;
    var isDark = activeTheme() === 'dark';
    themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = activeTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
      syncThemeButton();
    });
  }
  if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener('change', syncThemeButton);
  syncThemeButton();

  /* Phone menu */
  var menuButton = document.querySelector('[data-menu-toggle]');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    if (!menuButton || !nav) return;
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuButton.setAttribute('aria-label', open ? 'Close section menu' : 'Open section menu');
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        menuButton.focus();
      }
    });
  }

  /* Hairline under the top bar once the page scrolls */
  var topbar = document.querySelector('.topbar');
  function onScroll() {
    if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mark the section currently in view in the nav */
  if ('IntersectionObserver' in window) {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link[href^="#"]'));
    var byId = {};
    links.forEach(function (link) { byId[link.getAttribute('href').slice(1)] = link; });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) { link.removeAttribute('aria-current'); });
        var match = byId[entry.target.id];
        if (match) match.setAttribute('aria-current', 'location');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
})();
