/* Ottobock Care Clinic – front-end demo. Vanilla JS, no dependencies. */
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
      else if (!$('#chatPanel').hidden) toggleChat(false);
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
  $('#bDate').min = new Date().toISOString().slice(0, 10);
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-book]'); if (!b) return;
    toggleMenu(false);
    $('.status', bookForm).textContent = '';
    if (b.dataset.service) $('#bService').value = b.dataset.service;
    openOverlay(bookOv, '#bName');
  });
  bookForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validate(bookForm)) return;
    await saveRequest('booking', Object.fromEntries(new FormData(bookForm)));
    bookForm.reset();
    const s = $('.status', bookForm);
    s.textContent = 'Demo request recorded locally in this browser. No appointment has been booked or sent to a clinic.';
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
    ['Home', '#home', 'Ottobock Care Clinic overview'], ['About', '#about', 'Our approach to personalized mobility care'],
    ['Services', '#services', 'Prosthetics, orthotics, mobility and rehabilitation'],
    ['Prosthetics', '#services', 'Advanced prosthetic solutions'], ['Orthotics', '#services', 'Braces and supports'],
    ['Mobility Solutions', '#services', 'Wheelchairs and everyday independence'], ['Rehabilitation', '#services', 'Guided therapy'],
    ['Our Team', '#team', 'Clinicians and specialists'], ['Resources', '#resources', 'Guides and education'],
    ['Contact', '#contact', 'Message us or request an appointment']
  ];
  const sIn = $('#searchIn'), sRes = $('#searchRes');
  function renderResults() {
    const q = sIn.value.trim().toLowerCase();
    const hits = INDEX.filter(([t, , d]) => !q || (t + ' ' + d).toLowerCase().includes(q));
    sRes.innerHTML = hits.length
      ? hits.map(([t, h, d]) => `<li><a href="${h}">${t}<small>${d}</small></a></li>`).join('')
      : '<li class="empty">No matches found. Try “prosthetics”, “team” or “contact”.</li>';
  }
  $('#searchBtn').addEventListener('click', () => { sIn.value = ''; renderResults(); openOverlay($('#searchOv'), '#searchIn'); });
  sIn.addEventListener('input', renderResults);
  sRes.addEventListener('click', e => { if (e.target.closest('a')) closeOverlay(); });

  /* ---------- Chat widget (demo only, no live agent) ---------- */
  const chatPanel = $('#chatPanel'), chatOpen = $('#chatOpen'), log = $('#chatLog');
  const chatNav = $('#chatNav');
  function toggleChat(open) {
    chatPanel.hidden = !open;
    [chatOpen, chatNav].forEach(b => b.setAttribute('aria-expanded', open));
    if (open) $('#chatIn').focus();
    else [chatNav, chatOpen].find(b => b.offsetParent !== null)?.focus();
  }
  [chatOpen, chatNav].forEach(b => b.addEventListener('click', () => toggleChat(chatPanel.hidden)));
  $('#chatClose').addEventListener('click', () => toggleChat(false));
  const addMsg = (html, who, isText) => {
    const p = document.createElement('p'); p.className = 'msg ' + who;
    isText ? p.textContent = html : p.innerHTML = html;
    log.appendChild(p); log.scrollTop = log.scrollHeight;
  };
  $('#chatForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#chatIn').value.trim(); if (!v) return;
    addMsg(v, 'me', true); $('#chatIn').value = '';
    setTimeout(() => addMsg('This demo chat isn’t connected to a live team. You can <a href="#contact" data-jump>send us a message</a> or <a href="#" data-jump-book>request an appointment</a>.', 'bot'), 500);
  });
  log.addEventListener('click', e => {
    if (e.target.matches('[data-jump-book]')) { e.preventDefault(); toggleChat(false); openOverlay(bookOv, '#bName'); }
    if (e.target.matches('[data-jump]')) toggleChat(false);
  });
})();
