/* Sri Mukta Agency – front-end demo. Vanilla JS, no dependencies. */
(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  document.documentElement.classList.add('js');

  /* ---------- Icons (Lucide-style inline SVG) ---------- */
  const ICONS = {
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    arrow: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h2M18 16v6m-3-3h6"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
    headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 16v2a3 3 0 0 1-3 3h-4"/><rect x="2" y="14" width="4" height="6" rx="1"/><rect x="18" y="14" width="4" height="6" rx="1"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01M12 12h.01M16 12h.01" stroke-width="2.6"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    back: '<path d="M19 12H5m7-7-7 7 7 7"/>',
    account: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    person: '<circle cx="12" cy="5" r="2"/><path d="M5 9l7 2 7-2M12 11v5l-3 5m3-5 3 5"/>'
  };
  const paintIcons = (root = document) => $$('i[data-i]', root).forEach(el => {
    if (el.firstChild) return;
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[el.dataset.i] || ''}</svg>`;
  });
  paintIcons();

  /* ---------- Image fallbacks ---------- */
  $$('img').forEach(img => {
    const hide = () => { img.style.visibility = 'hidden'; };
    img.addEventListener('error', hide);
    if (img.complete && img.naturalWidth === 0) hide();
  });

  /* ---------- Footer year ---------- */
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Overlay manager (focus trap, Esc, outside click) ---------- */
  let lastFocus = null, openOv = null;
  const FOCUSABLE = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';
  function openOverlay(ov, focusSel) {
    closeOverlay();
    lastFocus = document.activeElement;
    ov.hidden = false; openOv = ov;
    document.body.style.overflow = 'hidden';
    (focusSel ? $(focusSel, ov) : $(FOCUSABLE, ov))?.focus();
  }
  function closeOverlay() {
    if (!openOv) return;
    openOv.hidden = true; openOv = null;
    document.body.style.overflow = '';
    lastFocus?.focus();
  }
  $$('.overlay').forEach(ov => {
    ov.addEventListener('mousedown', e => { if (e.target === ov) closeOverlay(); });
    $$('[data-close]', ov).forEach(b => b.addEventListener('click', closeOverlay));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (openOv) closeOverlay();
      else if (menu.classList.contains('open')) toggleMenu(false);
    }
    if (e.key === 'Tab' && openOv) { // keep focus inside dialog
      const f = $$(FOCUSABLE, openOv).filter(x => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Mobile menu ---------- */
  const menu = $('#menu'), burger = $('#burger');
  const scrim = $('#scrim');
  function toggleMenu(open) {
    if (open === menu.classList.contains('open')) return;
    menu.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('#menuClose').focus(); else burger.focus();
  }
  burger.addEventListener('click', () => toggleMenu(true));
  $('#menuClose').addEventListener('click', () => toggleMenu(false));
  scrim.addEventListener('click', () => toggleMenu(false));
  matchMedia('(min-width:1181px)').addEventListener('change', e => { if (e.matches) toggleMenu(false); });
  $$('a', menu).forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  /* ---------- Sticky nav shadow + active section ---------- */
  const nav = $('#nav');
  const links = $$('.menu a[href^="#"]');
  const targets = links.map(l => $(l.getAttribute('href')));
  function onScroll() {
    nav.classList.toggle('scrolled', scrollY > 8);
    const line = nav.offsetHeight + 40;
    let cur = 0, best = -Infinity;
    targets.forEach((t, i) => {
      const top = t ? t.getBoundingClientRect().top : Infinity;
      if (top <= line && top > best) { best = top; cur = i; }
    });
    links.forEach((l, i) => l.classList.toggle('active', i === cur));
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Scroll reveal ---------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12 }) : null;
  $$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  /* ---------- Validation helpers ---------- */
  const rules = {
    required: v => v.trim() ? '' : 'This field is required.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address, like name@example.com.',
    phone: v => /^[+\d][\d\s().-]{6,}$/.test(v.trim()) ? '' : 'Enter a valid phone number (digits, spaces, + or -).'
  };
  function validate(form) {
    let firstBad = null;
    $$('input,select,textarea', form).forEach(f => {
      const wrap = f.closest('.field'), out = $('.err', wrap);
      if (!out) return;
      let msg = f.required ? rules.required(f.value) : '';
      if (!msg && f.value) {
        if (f.type === 'email') msg = rules.email(f.value);
        if (f.type === 'tel') msg = rules.phone(f.value);
        if (f.type === 'date' && f.value < new Date().toISOString().slice(0, 10)) msg = 'Choose today or a future date.';
      }
      wrap.classList.toggle('invalid', !!msg);
      f.setAttribute('aria-invalid', !!msg);
      out.textContent = msg;
      if (msg && !firstBad) firstBad = f;
    });
    firstBad?.focus();
    return !firstBad;
  }
  $$('form input,form select,form textarea').forEach(f => f.addEventListener('input', () => {
    f.closest('.field')?.classList.remove('invalid');
    const e = $('.err', f.closest('.field') || document.createElement('i')); if (e) e.textContent = '';
  }));

  /* ---------- Data layer: swap saveRequest body for a real API call later ---------- */
  async function saveRequest(type, data) {
    // e.g. return fetch('/api/' + type, { method: 'POST', body: JSON.stringify(data) });
    const key = 'occ-demo-' + type;
    let list = []; try { list = JSON.parse(localStorage.getItem(key)) || []; } catch (_) {}
    list.push({ ...data, savedAt: new Date().toISOString() });
    try { localStorage.setItem(key, JSON.stringify(list)); } catch (_) {}
    return { ok: true };
  }

  /* ---------- Booking modal ---------- */
  const bookOv = $('#bookOv'), bookForm = $('#bookForm');
  
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-book]'); if (!b) return;
    toggleMenu(false);
    $('.status', bookForm).textContent = '';
    if (b.dataset.service) $('#bService').value = b.dataset.service;
    $('#bMsg').value = b.dataset.msg || '';
    window.SMA && SMA.prefill(bookForm);
    openOverlay(bookOv, '#bName');
  });
  bookForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validate(bookForm)) return;
    const dat = Object.fromEntries(new FormData(bookForm));
    await saveRequest('booking', dat);
    window.SMA && SMA.logEnquiry(dat);
    bookForm.reset(); window.SMA && SMA.prefill(bookForm);
    const wa = 'https://wa.me/919889197125?text=' + encodeURIComponent('Hello Sri Mukta Agency, I am ' + dat.name + ' (' + dat.phone + '). Enquiry: ' + dat.service + (dat.message ? ' - ' + dat.message : ''));
    $('.status', bookForm).innerHTML = 'Enquiry saved. <a href="' + wa + '" target="_blank" rel="noopener noreferrer">Send it on WhatsApp</a> so our team receives it right away.';
  });

  /* ---------- Contact form ---------- */
  const cForm = $('#contactForm');
  cForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validate(cForm)) return;
    await saveRequest('contact', Object.fromEntries(new FormData(cForm)));
    cForm.reset();
    $('.status', cForm).textContent = 'Thanks! This demo form saved your message locally only; nothing was sent.';
  });

  /* ---------- Search ---------- */
  const INDEX = [
    ['Home', '#home', 'Sri Mukta Agency overview'], ['About', '#about', 'Your trusted healthcare partner'],
    ['Products', '#services', 'Six categories of healthcare products'],
    ['Cardiac Holter Monitor', '#services', 'Continuous rhythm monitoring'], ['Wound Care', '#services', 'Dressings, NPWT, HBOT'],
    ['Stoma Care', '#services', 'Pouches, barriers, accessories'], ['Compression Therapy', '#services', 'Stockings and devices'],
    ['Prosthetics and Orthotics', '#services', 'Orthotic devices and wheelchairs'], ['Hygiene and Diagnostics', '#services', 'Chemicals, PPE, reagents, LifeCell'],
    ['Contact', '#contact', 'Call, WhatsApp or send an enquiry']
  ].concat(window.SMA ? SMA.searchItems() : []);
  const sIn = $('#searchIn'), sRes = $('#searchRes');
  function renderResults() {
    const q = sIn.value.trim().toLowerCase();
    const hits = INDEX.filter(([t, , d]) => !q || (t + ' ' + d).toLowerCase().includes(q));
    sRes.innerHTML = hits.length
      ? hits.map(([t, h, d]) => `<li><a href="${h}">${t}<small>${d}</small></a></li>`).join('')
      : '<li class="empty">No matches found. Try “wound”, “stoma” or “contact”.</li>';
  }
  const navEl = $('#nav'), veil = $('#searchVeil');
  const isSearching = () => navEl.classList.contains('searching');
  function showSearch(on) {
    navEl.classList.toggle('searching', on);
    veil.classList.toggle('on', on);
    $('#navSearch').setAttribute('aria-hidden', !on);
    document.body.style.overflow = on ? 'hidden' : '';
    sIn.value = ''; renderResults();
    if (on) setTimeout(() => sIn.focus(), 220);
    else { sIn.blur(); $('#searchBtn').focus({ preventScroll: true }); }
  }
  function openSearch() {
    if (isSearching()) return;
    try { history.pushState({ s: 1 }, ''); } catch (_) {}
    showSearch(true);
  }
  function closeSearch() {
    if (!isSearching()) return;
    let viaHistory = false;
    try { viaHistory = !!(history.state && history.state.s); } catch (_) {}
    if (viaHistory) history.back(); else showSearch(false);
  }
  window.addEventListener('popstate', () => { if (isSearching()) showSearch(false); });
  $('#searchBtn').addEventListener('click', openSearch);
  $('#searchBack').addEventListener('click', closeSearch);
  veil.addEventListener('click', closeSearch);
  sIn.addEventListener('input', renderResults);
  sRes.addEventListener('click', e => {
    const a = e.target.closest('a'); if (!a) return;
    e.preventDefault();
    try { if (history.state && history.state.s) history.replaceState(null, ''); } catch (_) {}
    showSearch(false);
    const hh = a.getAttribute('href'); try { location.hash = hh; } catch (_) {}
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

})();
