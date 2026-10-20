/* Sri Mukta Agency – catalogue, product pages and account. Front-end demo: account data stays in this browser. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const WA = '919889197125', T0 = document.title;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const CATS = [
    { s: 'cardiac', t: 'Cardiac Holter Monitor', d: 'Single-lead continuous rhythm monitoring for better diagnosis.' },
    { s: 'wound', t: 'Advanced Wound Care', d: 'For complex, sunburn and stalled wounds.' },
    { s: 'stoma', t: 'Stoma Care', d: 'Complete care for better comfort and skin protection.' },
    { s: 'compression', t: 'Compression Therapy', d: 'Support. Comfort. Better circulation.' },
    { s: 'mobility', t: 'Prosthetics, Orthotics & Mobility', d: 'Restoring mobility, independence and confidence.' },
    { s: 'hygiene', t: 'Hygiene, Chemicals & Diagnostics', d: 'For a cleaner, safer environment and accurate diagnosis.' }
  ];
  const CODE = ['CAR', 'WND', 'STO', 'CMP', 'MOB', 'HYG'], cnt = [0, 0, 0, 0, 0, 0];
  const RAW = [
    [0, 'Single-lead cardiac Holter monitor', 'Continuous rhythm monitoring for better diagnosis.', 'Palpitations, Syncope, Presyncope, Suspected arrhythmia, Post ablation / post surgery, Post-MI rhythm surveillance, Bradyarrhythmia, Arrhythmia burden assessment, Monitoring anti-arrhythmic drug'],
    [1, 'Biological dressings', 'Collagen based and dehydrated amniotic membrane based dressings.'],
    [1, 'Synthetic dressings', 'PU foam, alginate, hydrocolloid and hydrogel dressings.'],
    [1, 'Enzymatic debridement agent', 'Enzymatic agent for wound debridement.'],
    [1, 'NPWT (VAC)', 'Negative pressure wound therapy, standard and irrigation.'],
    [1, 'HBOT (ambulatory)', 'Ambulatory hyperbaric oxygen therapy.'],
    [1, 'Silicone gel', 'Silicone gel for hypertrophic scars.'],
    [2, 'Skin barriers', 'Skin barriers for comfort and skin protection.'],
    [2, 'One-piece pouches'], [2, 'Two-piece pouches'], [2, 'Accessories and seals'],
    [2, 'Adhesive removers and skin care'],
    [3, 'Standard and customised compression'], [3, 'Elastic and non-elastic compression'],
    [3, 'Compression devices'], [3, 'Customised fitting'],
    [4, 'Breast prosthesis (after mastectomy)'], [4, 'Upper and lower extremity amputation solutions'],
    [4, 'Customised orthotic devices'], [4, 'Offloading footwear'], [4, 'Customised wheelchair'],
    [5, 'Disinfectants and antiseptics'], [5, 'Wipes (surface and hand hygiene)'], [5, 'Housekeeping chemicals'],
    [5, 'Mops and tools'], [5, 'Mechanical cleaning options'], [5, 'Hand rub'], [5, 'Surface care'],
    [5, 'PPE and protective supplies'], [5, 'Sterilisation support'], [5, 'Pathology reagents'],
    [5, 'Clinical biochemistry reagents'], [5, 'Microbiology reagents'], [5, 'ELISA and more'],
    [5, 'LifeCell diagnostics', 'Routine, cancer and genetic diagnostics: blood tests and health checkups, cancer screening and monitoring, genetic testing and expert consultation.']
  ];
  const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const P = RAW.map(([c, n, d, u]) => ({
    c, n, id: slug(n), sku: `SMA-${CODE[c]}-${String(++cnt[c]).padStart(2, '0')}`,
    d: d || `Part of our ${CATS[c].t} range. Contact us for specifications, sizes and availability.`,
    u: u ? u.split(', ') : []
  }));
  const imgOf = ci => $(`.card[data-cat="${CATS[ci].s}"] img`)?.getAttribute('src') || '';
  const waLink = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

  /* ---------- Storage (localStorage with in-memory fallback) ---------- */
  const mem = {};
  const st = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (_) { return mem[k] ?? null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) { mem[k] = v; } }
  };
  const users = () => st.get('sma_users') || {};
  const me = () => { const e = st.get('sma_session'), u = e && users()[e]; return u ? { ...u, email: e } : null; };
  const save = u => { const a = users(), { email, ...rest } = u; a[email] = rest; st.set('sma_users', a); };
  async function hp(e, p) {
    try { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(e + ':' + p)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join(''); }
    catch (_) { return btoa(unescape(encodeURIComponent(e + ':' + p))); }
  }
  const nav = () => { const a = $('.acct-nav'); if (a) { a.classList.toggle('on', !!me()); a.title = me() ? 'My account' : 'Sign in / Register'; } };
  const fmt = d => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  /* ---------- Views ---------- */
  const home = $('#homeView'), view = $('#appView');
  let mode = 'in', tab = 'enq', app = false;
  const card = p => `<a class="card" href="#/product/${p.id}" data-t="${esc((p.n + ' ' + p.sku).toLowerCase())}"><div class="card__img"><img src="${imgOf(p.c)}" alt="${esc(p.n)}" loading="lazy"></div><div class="card__body"><h3>${esc(p.n)}</h3><p>${p.sku}</p></div></a>`;
  const nf = () => `<div class="wrap pg"><h1>Page not found</h1><p class="lead">We could not find that page.</p><p><a class="btn btn--navy" href="#/products">Browse products</a></p></div>`;
  const field = (n, l, t, ac, v = '') => `<div class="field"><label for="a_${n}">${l}</label><input id="a_${n}" name="${n}" type="${t}" autocomplete="${ac}" value="${esc(v)}" required></div>`;

  function listView(cs) {
    const c = cs ? CATS.find(x => x.s === cs) : null;
    if (cs && !c) return [nf(), 'Not found'];
    const items = P.filter(p => !c || CATS[p.c] === c);
    return [`<div class="wrap pg"><nav class="crumbs"><a href="#home">Home</a> / <a href="#/products">Products</a>${c ? ' / ' + esc(c.t) : ''}</nav>
      <h1>${c ? esc(c.t) : 'All Products'}</h1><p class="lead">${c ? esc(c.d) : 'Browse all six categories and request information for any product.'}</p>
      <div class="chips"><a class="${c ? '' : 'on'}" href="#/products">All</a>${CATS.map(x => `<a class="${c === x ? 'on' : ''}" href="#/category/${x.s}">${esc(x.t)}</a>`).join('')}</div>
      <input id="pq" type="search" placeholder="Search products" aria-label="Search products">
      <div class="pgrid">${items.map(card).join('')}</div><p class="empty-msg" hidden>No products match your search.</p></div>`, c ? c.t : 'All Products'];
  }

  function productView(id) {
    const p = P.find(x => x.id === id); if (!p) return [nf(), 'Not found'];
    const c = CATS[p.c], u = me(), fav = u && u.favs.includes(p.id);
    const rel = P.filter(x => x.c === p.c && x.id !== p.id).slice(0, 4);
    return [`<div class="wrap pg"><nav class="crumbs"><a href="#home">Home</a> / <a href="#/products">Products</a> / <a href="#/category/${c.s}">${esc(c.t)}</a> / ${esc(p.n)}</nav>
      <div class="pd"><div class="pd__img"><img src="${imgOf(p.c)}" alt="${esc(p.n)}"></div>
      <div><p class="eyebrow">${esc(c.t)}</p><h1>${esc(p.n)}</h1>
      <div class="pd__meta"><span class="tag">SKU: ${p.sku}</span><span class="tag">${esc(c.t)}</span><span class="tag tag--ok">Available on enquiry</span></div>
      <div class="pd__actions"><button class="btn btn--navy" data-book data-service="${esc(c.t)}" data-msg="${esc('Product: ' + p.n + ' (' + p.sku + ')')}">Request Information</button>
      <a class="btn btn--ghost" href="${waLink('Hello, I would like information about: ' + p.n + ' (' + p.sku + ')')}" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
      <button class="btn btn--ghost" id="favBtn" data-id="${p.id}" aria-pressed="${!!fav}">${fav ? '♥ Saved' : '♡ Save'}</button></div>
      <p class="lead">${esc(p.d)}</p>
      ${p.u.length ? `<h2 class="h-sm">Common uses</h2><p class="chips chips--static">${p.u.map(x => `<span>${esc(x)}</span>`).join('')}</p>` : ''}
      <p class="note">Product details, sizes and availability are shared by our team on enquiry. Call <a href="tel:+919889197125">9889197125</a>.</p></div></div>
      ${rel.length ? `<h2 class="h-sm h-gap">More in ${esc(c.t)}</h2><div class="pgrid">${rel.map(card).join('')}</div>` : ''}</div>`, p.n];
  }

  function accountView() {
    const u = me();
    if (!u) {
      const hint = st.get('sma_next') ? 'Please sign in to continue.' : '';
      return [`<div class="wrap pg"><div class="auth"><p class="eyebrow">Account</p><h1>${mode === 'up' ? 'Create your account' : 'Welcome back'}</h1>
        <div class="tabs"><button data-mode="in" class="${mode === 'in' ? 'on' : ''}">Sign in</button><button data-mode="up" class="${mode === 'up' ? 'on' : ''}">Register</button></div>
        <form class="form" id="authForm" data-auth="${mode}" novalidate>
        ${mode === 'up' ? field('name', 'Full name', 'text', 'name') + field('phone', 'Phone', 'tel', 'tel') : ''}
        ${field('email', 'Email', 'email', 'email')}${field('password', 'Password', 'password', mode === 'up' ? 'new-password' : 'current-password')}
        <button class="btn btn--navy btn--full" type="submit">${mode === 'up' ? 'Create account' : 'Sign in'}</button><p class="status" role="status">${hint}</p></form>
        <p class="note">Save favourites and keep a list of your enquiries. Demo accounts are stored in this browser only.</p></div></div>`, 'Account'];
    }
    const tabs = [['enq', `Enquiries (${(u.enq || []).length})`], ['fav', `Favourites (${u.favs.length})`], ['pro', 'Profile']];
    let body = '';
    if (tab === 'enq') {
      const e = (u.enq || []).slice().reverse();
      body = e.length ? `<ul class="lst">${e.map(x => `<li><div><b>${esc(x.cat || 'General enquiry')}</b><small>${fmt(x.date)}</small></div>${x.msg ? `<p>${esc(x.msg)}</p>` : ''}</li>`).join('')}</ul>`
        : `<p class="lead">No enquiries yet.</p><p><a class="btn btn--navy" href="#/products">Browse products</a></p>`;
    } else if (tab === 'fav') {
      const f = u.favs.map(id => P.find(x => x.id === id)).filter(Boolean);
      body = f.length ? `<div class="pgrid">${f.map(card).join('')}</div>` : `<p class="lead">No favourites yet. Tap “Save” on any product.</p><p><a class="btn btn--navy" href="#/products">Browse products</a></p>`;
    } else {
      body = `<form class="form" id="proForm" novalidate>${field('name', 'Full name', 'text', 'name', u.name)}${field('phone', 'Phone', 'tel', 'tel', u.phone)}
        <div class="field"><label>Email</label><input value="${esc(u.email)}" disabled></div><button class="btn btn--navy" type="submit">Save changes</button><p class="status" role="status"></p></form>`;
    }
    return [`<div class="wrap pg"><div class="acct-head"><span class="avatar">${esc((u.name || u.email)[0].toUpperCase())}</span><div><h1>${esc(u.name)}</h1><p>${esc(u.email)}</p></div><button class="btn btn--ghost" id="out">Sign out</button></div>
      <div class="tabs">${tabs.map(([k, l]) => `<button data-tab="${k}" class="${tab === k ? 'on' : ''}">${l}</button>`).join('')}</div>${body}</div>`, 'My Account'];
  }

  /* ---------- Router ---------- */
  function go(h) { let same = false; try { same = location.hash === h; if (!same) location.hash = h; } catch (_) { same = true; } if (same) route(); }
  function route(keep) {
    const h = location.hash || '';
    if (!h.startsWith('#/')) {
      if (app) { view.hidden = true; home.hidden = false; app = false; document.title = T0; if (h.length <= 1) scrollTo(0, 0); }
      if (h.length > 1) { try { $(h)?.scrollIntoView(); } catch (_) {} }
      return;
    }
    const [, pg, a] = h.split('/');
    let r;
    if (pg === 'product') r = productView(a);
    else if (pg === 'category') r = listView(a);
    else if (pg === 'products') r = listView();
    else if (pg === 'account') r = accountView();
    else { go('#home'); return; }
    view.innerHTML = r[0]; home.hidden = true; view.hidden = false; app = true;
    document.title = r[1] + ' – Sri Mukta Agency';
    if (!keep) scrollTo(0, 0);
    nav();
  }
  addEventListener('hashchange', () => route());
  /* Handle in-page links in JS so they also work inside embedded/sandboxed previews */
  document.addEventListener('click', e => {
    const l = e.target.closest('a[href^="#"]');
    if (!l || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    const h = l.getAttribute('href'); if (h.length < 2) return;
    e.preventDefault(); go(h);
  });

  /* ---------- Interactions ---------- */
  function fav(id) {
    const u = me();
    if (!u) { st.set('sma_next', location.hash); go('#/account'); return; }
    const i = u.favs.indexOf(id); i < 0 ? u.favs.push(id) : u.favs.splice(i, 1);
    save(u); route(true);
  }
  view.addEventListener('click', e => {
    const b = e.target.closest('[data-mode],[data-tab],#out,#favBtn'); if (!b) return;
    if (b.dataset.mode) { mode = b.dataset.mode; route(true); }
    else if (b.dataset.tab) { tab = b.dataset.tab; route(true); }
    else if (b.id === 'out') { st.set('sma_session', null); nav(); route(true); }
    else fav(b.dataset.id);
  });
  view.addEventListener('input', e => {
    if (e.target.id !== 'pq') return;
    const q = e.target.value.trim().toLowerCase(); let n = 0;
    view.querySelectorAll('.pgrid .card').forEach(c => { const ok = c.dataset.t.includes(q); c.hidden = !ok; n += ok; });
    $('.empty-msg', view).hidden = n > 0;
  });
  view.addEventListener('submit', async e => {
    const f = e.target; e.preventDefault();
    const d = Object.fromEntries(new FormData(f)), s = $('.status', f), say = m => { s.textContent = m; };
    if (f.id === 'authForm') {
      const email = (d.email || '').trim().toLowerCase();
      if (!/^\S+@\S+\.\S+$/.test(email)) return say('Please enter a valid email address.');
      if ((d.password || '').length < 6) return say('Password must be at least 6 characters.');
      const h = await hp(email, d.password), all = users();
      if (f.dataset.auth === 'up') {
        if (!(d.name || '').trim()) return say('Please enter your name.');
        if (String(d.phone || '').replace(/\D/g, '').length < 10) return say('Please enter a valid phone number.');
        if (all[email]) return say('An account with this email already exists. Please sign in.');
        save({ email, name: d.name.trim(), phone: d.phone.trim(), h, favs: [], enq: [] });
      } else if (!all[email] || all[email].h !== h) return say('Incorrect email or password.');
      st.set('sma_session', email); nav();
      const nx = st.get('sma_next'); st.set('sma_next', null);
      if (nx && nx !== '#/account') go(nx); else route(true);
    } else if (f.id === 'proForm') {
      if (!(d.name || '').trim() || String(d.phone || '').replace(/\D/g, '').length < 10) return say('Please enter a valid name and phone number.');
      const u = me(); u.name = d.name.trim(); u.phone = d.phone.trim(); save(u); say('Saved.');
    }
  });

  /* ---------- Hooks used by script.js ---------- */
  window.SMA = {
    prefill(form) {
      const u = me(); if (!u) return;
      [['#bName', u.name], ['#bEmail', u.email], ['#bPhone', u.phone]].forEach(([s, v]) => { const i = $(s, form); if (i && !i.value) i.value = v || ''; });
    },
    logEnquiry(d) {
      const u = me(); if (!u) return;
      (u.enq = u.enq || []).push({ date: new Date().toISOString(), cat: d.service, msg: d.message || '' }); save(u);
    },
    searchItems: () => P.map(p => [p.n, '#/product/' + p.id, CATS[p.c].t]).concat([['Account', '#/account', 'Sign in, register, favourites and enquiries']])
  };
  nav(); route();
})();
