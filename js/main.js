'use strict';

// Navigation is progressively enhanced; without JavaScript every link stays visible.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('navigation');
  const compact = window.matchMedia('(max-width: 650px)');
  if (toggle && navigation) {
    document.documentElement.classList.add('js');
    toggle.hidden = !compact.matches;
    const label = toggle.querySelector('.menu-label');
    const setOpen = (open, returnFocus = false) => {
      navigation.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      label.textContent = open ? 'Close' : 'Menu';
      if (returnFocus) toggle.focus({ preventScroll: true });
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
      if (open) navigation.querySelector('a').focus({ preventScroll: true });
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false, true);
      }
    });
    navigation.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link || !compact.matches) return;
      setOpen(false);
      if (link.hash && link.origin === location.origin && link.pathname === location.pathname) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      } else {
        toggle.focus({ preventScroll: true });
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-nav') && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false, navigation.contains(document.activeElement));
      }
    });
    document.addEventListener('focusin', event => {
      if (!event.target.closest('.site-nav')) setOpen(false);
    });
    compact.addEventListener('change', () => {
      const focusWasInMenu = navigation.contains(document.activeElement);
      toggle.hidden = !compact.matches;
      setOpen(false, compact.matches && focusWasInMenu);
    });
  }

  // A short, native-scroll ribbon drift. No loop, entrance gate or scroll hijack.
  const hero = document.querySelector('.hero');
  const stage = document.querySelector('.ribbon-stage');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let queued = false;
  const paint = () => {
    queued = false;
    if (!hero || !stage || reduced.matches) return;
    const box = hero.getBoundingClientRect();
    if (box.bottom < 0 || box.top > window.innerHeight) return;
    const offset = Math.min(48, Math.max(0, -box.top) * 0.075);
    stage.style.setProperty('--ribbon-y', `${-offset}px`);
  };
  const onScroll = () => {
    if (!queued && !reduced.matches) {
      queued = true;
      window.requestAnimationFrame(paint);
    }
  };
  const syncMotion = () => {
    window.removeEventListener('scroll', onScroll);
    if (stage) stage.style.removeProperty('--ribbon-y');
    if (!reduced.matches) {
      window.addEventListener('scroll', onScroll, { passive: true });
      paint();
    }
  };
  reduced.addEventListener('change', syncMotion);
  syncMotion();
})();
