/* ===== Design tokens ===== */
:root{
  --navy:#0B315D; --deep:#08284F; --brand:#0755A5; --accent:#1473D2;
  --tint:#F1F7FD; --bg:#fff; --text:#102F55; --muted:#58718F; --line:#DCE8F5;
  --nav-h:68px; --r:12px; --max:1320px;
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:calc(var(--nav-h) + 12px)}
body{margin:0;font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--text);background:var(--bg);line-height:1.6;overflow-x:hidden}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
h1,h2,h3,h4,p,ul{margin:0}
ul{padding:0;list-style:none}
:focus-visible{outline:3px solid var(--accent);outline-offset:2px;border-radius:6px}
[hidden]{display:none!important}
i[data-i]{display:inline-flex;width:1.25em;height:1.25em;flex:none}
i[data-i] svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.wrap{width:min(var(--max),100% - 2*clamp(20px,4vw,56px));margin-inline:auto}
.skip{position:absolute;left:-999px;top:8px;background:var(--navy);color:#fff;padding:8px 14px;border-radius:8px;z-index:200}
.skip:focus{left:8px}

/* ===== Buttons ===== */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:44px;padding:0 24px;border-radius:999px;font:600 .9rem/1 Inter,sans-serif;border:1.5px solid transparent;cursor:pointer;transition:background .2s,color .2s,transform .15s,border-color .2s;white-space:nowrap}
.btn--navy{background:var(--navy);color:#fff}
.btn--navy:hover{background:var(--brand)}
.btn--ghost{background:#fff;border-color:var(--accent);color:var(--navy)}
.btn--ghost:hover{background:var(--tint)}
.btn:active{transform:scale(.98)}
.btn--full{width:100%}
.icon-btn{width:44px;height:44px;border:0;background:none;color:var(--navy);border-radius:50%;display:grid;place-items:center;cursor:pointer;transition:background .2s}
.icon-btn:hover{background:var(--tint)}

/* ===== Navbar ===== */
.nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid transparent;transition:border-color .2s,box-shadow .2s}
.nav.scrolled{border-color:var(--line);box-shadow:0 2px 12px rgba(11,49,93,.06)}
.nav__in{width:min(var(--max),100% - 2*clamp(20px,4vw,56px));margin-inline:auto;height:var(--nav-h);display:flex;align-items:center;justify-content:space-between;gap:24px}
.brand{display:flex;align-items:center;color:var(--navy);flex:none}
.brand b{font-size:1.9rem;font-weight:700;letter-spacing:-.04em;line-height:1}
.brand span{font-size:1.25rem;margin-left:14px;padding-left:14px;border-left:1px solid var(--line);font-weight:400}
.menu{display:flex;align-items:center;gap:clamp(18px,2.6vw,38px)}
.menu a{font-size:.85rem;font-weight:500;padding:6px 0;border-bottom:2px solid transparent;transition:color .2s,border-color .2s}
.menu a:hover{color:var(--accent)}
.menu a.active{border-color:var(--accent);color:var(--navy)}
.menu__book,.burger,.menu__close{display:none}
.nav__actions{display:flex;align-items:center;gap:12px}

/* ===== Hero ===== */
.eyebrow{font-size:.7rem;font-weight:600;letter-spacing:.28em;text-transform:uppercase;color:var(--brand);margin-bottom:14px}
.hero{background:linear-gradient(90deg,var(--tint),#fff 70%);overflow:hidden}
.hero__in{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;min-height:min(420px,52vw);gap:clamp(20px,3vw,48px)}
.hero__text{align-self:center;padding:40px 0}
.hero h1{font-size:clamp(2.2rem,4.1vw,3.4rem);line-height:1.12;font-weight:700;letter-spacing:-.02em;color:var(--navy)}
.hero h1 span{display:block;font-weight:400;margin-top:4px}
.lead{max-width:30em;color:var(--muted);margin:22px 0 28px;font-size:.95rem}
.cta{display:flex;flex-wrap:wrap;gap:14px}
.hero__img{position:relative;margin-right:min(calc((var(--max) - 100vw) / 2),calc(-1 * clamp(20px,4vw,56px)));background:var(--tint);border-radius:50% 0 0 50% / 62% 0 0 62%;overflow:hidden;min-height:300px}
.hero__img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:55% 30%}
.float-card{position:absolute;right:clamp(16px,2.5vw,40px);bottom:24px;display:flex;gap:14px;background:#fff;border-radius:16px;padding:20px 22px;box-shadow:0 8px 28px rgba(8,40,79,.14);max-width:290px;color:var(--navy)}
.float-card i{width:2.2em;height:2.2em;color:var(--brand)}
.float-card h2{font-size:1rem;line-height:1.3;font-weight:600}
.float-card p{font-size:.72rem;color:var(--muted);margin-top:8px}

/* ===== Benefits ===== */
.benefits{display:grid;grid-template-columns:repeat(4,1fr);background:var(--tint);border-radius:var(--r);padding:22px 12px;margin-top:16px}
.benefits li{display:flex;align-items:center;gap:18px;padding:4px 28px;color:var(--navy)}
.benefits li+li{border-left:1px solid var(--line)}
.benefits i{width:2.2em;height:2.2em}
.benefits h3{font-size:.85rem;font-weight:600}
.benefits p{font-size:.75rem;color:var(--muted)}

/* ===== Services ===== */
.services{display:grid;grid-template-columns:minmax(260px,.9fr) 3fr;gap:clamp(24px,3vw,48px);padding:clamp(40px,5vw,64px) 0 32px;align-items:start}
.services__intro h2,.sec h2,.why h2{font-size:clamp(1.6rem,2.4vw,2rem);line-height:1.2;font-weight:600;color:var(--navy);letter-spacing:-.01em}
.services__intro p:not(.eyebrow){color:var(--muted);font-size:.9rem;margin:16px 0 24px}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.card{display:flex;flex-direction:column;background:#fff;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;transition:transform .2s,box-shadow .2s}
.card:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(11,49,93,.1)}
.card__img{aspect-ratio:16/9;background:var(--tint)}
.card__img img{width:100%;height:100%;object-fit:cover}
.card__body{padding:16px 16px 18px;display:flex;flex-direction:column;flex:1;color:var(--navy)}
.card h3{font-size:1.02rem;font-weight:600}
.card p{font-size:.8rem;color:var(--muted);margin:6px 0 16px}
.card__body>i{margin-top:auto;transition:transform .2s}
.card:hover .card__body>i{transform:translateX(5px)}

/* ===== Why banner ===== */
.why{position:relative;display:grid;grid-template-columns:1.1fr 1.7fr 1.4fr;align-items:center;background:var(--deep);color:#fff;border-radius:var(--r);overflow:hidden;min-height:150px;margin-bottom:clamp(40px,5vw,72px)}
.why__text{padding:28px 0 28px 36px}
.why .eyebrow{color:#fff;font-size:.62rem;letter-spacing:.24em}
.why h2{color:#fff;font-weight:700;font-size:clamp(1.4rem,2.2vw,1.9rem)}
.why__list{display:grid;grid-template-columns:repeat(3,1fr);padding:16px 0}
.why__list li{padding:4px 20px}
.why__list li+li{border-left:1px solid rgba(255,255,255,.2)}
.why__list i{margin-bottom:8px}
.why__list h3{font-size:.85rem;font-weight:600}
.why__list p{font-size:.72rem;color:#C5D6EA;margin-top:2px}
.why__img{align-self:stretch;border-radius:50% 0 0 50% / 100% 0 0 100%;overflow:hidden;background:var(--brand)}
.why__img img{width:100%;height:100%;object-fit:cover;object-position:60% 62%}

/* ===== Extra sections ===== */
.sec{padding:clamp(48px,6vw,88px) 0}
.sec--tint{background:var(--tint)}
.sec p{color:var(--muted)}
.sec .eyebrow{margin-bottom:10px}
.sec h2+p{margin-top:14px}
.sub{font-size:.85rem}
.split{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,72px);align-items:center}
.photo{aspect-ratio:4/3;border-radius:var(--r);overflow:hidden;background:var(--line)}
.photo img{width:100%;height:100%;object-fit:cover}
.grid3,.grid4{display:grid;gap:20px;margin-top:32px}
.grid3{grid-template-columns:repeat(3,1fr)}
.grid4{grid-template-columns:repeat(4,1fr)}
.tcard,.rcard{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:20px}
.tcard img{aspect-ratio:1;width:100%;object-fit:cover;border-radius:8px;background:var(--tint);margin-bottom:16px}
.tcard h3,.rcard h3{font-size:1.05rem;color:var(--navy);font-weight:600}
.tcard p,.rcard p{font-size:.85rem;margin-top:6px}
.rcard{transition:transform .2s,box-shadow .2s}
.rcard:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(11,49,93,.1)}
.info{margin:20px 0;display:grid;gap:6px;color:var(--muted)}
.map{display:block;padding:0;min-height:0;border-radius:var(--r);overflow:hidden;border:1px solid var(--accent);background:#fff;line-height:0}
.map iframe{display:block;width:100%;height:260px;border:0;margin:0}
@media (max-width:767px){.map iframe{height:150px}}

/* ===== Forms ===== */
.form{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:clamp(20px,3vw,32px)}
.field{display:grid;gap:6px;margin-bottom:16px}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
label{font-size:.82rem;font-weight:600;color:var(--navy)}
input,select,textarea{font:inherit;font-size:.95rem;color:var(--text);width:100%;min-height:44px;padding:10px 14px;border:1.5px solid var(--line);border-radius:10px;background:#fff}
input:focus,select:focus,textarea:focus,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:none;border-color:var(--accent);box-shadow:none;border-radius:10px}
.field.invalid input,.field.invalid select,.field.invalid textarea{border-color:#C62828}
.err{font-size:.78rem;color:#B3261E;min-height:0}
.status{margin-top:14px;font-size:.88rem;color:var(--navy);font-weight:500}

/* ===== Overlays ===== */
.overlay{position:fixed;inset:0;z-index:150;background:rgba(8,40,79,.55);display:grid;place-items:center;padding:16px;overflow:auto;animation:fade .2s}
.panel{position:relative;background:#fff;border-radius:16px;width:min(560px,100%);padding:clamp(20px,4vw,36px);animation:rise .25s;max-height:calc(100dvh - 32px);overflow:auto}
.panel h2{color:var(--navy);font-size:1.5rem;margin-bottom:6px}
.panel .sub{color:var(--muted);margin-bottom:20px}
.panel__x{position:absolute;top:10px;right:10px}
.overlay:has(.panel--search){place-items:start center;padding-top:12vh}
.search-row{display:flex;align-items:center;gap:10px;color:var(--navy)}
.search-row input{border:0;box-shadow:none!important;font-size:1.05rem}
.results{margin-top:12px;border-top:1px solid var(--line);padding-top:8px}
.results a{display:block;padding:12px;border-radius:8px;color:var(--navy);font-weight:500}
.results a small{display:block;color:var(--muted);font-weight:400}
.results a:hover,.results a:focus-visible{background:var(--tint)}
.results .empty{padding:12px;color:var(--muted)}
@keyframes fade{from{opacity:0}}
@keyframes rise{from{opacity:0;transform:translateY(12px)}}

/* ===== Chat ===== */
.chat{position:fixed;right:20px;bottom:20px;z-index:120;display:flex;flex-direction:column;align-items:flex-end;gap:12px}
.chat__pill{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:999px;padding:8px 18px 8px 8px;box-shadow:0 8px 24px rgba(8,40,79,.14);cursor:pointer;color:var(--navy);text-align:left;font:inherit;min-height:56px}
.chat__pill strong{display:block;font-size:.85rem}
.chat__pill small{display:block;font-size:.72rem;color:var(--muted)}
.chat__ic{width:40px;height:40px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center}
.chat__panel{width:min(340px,calc(100vw - 40px));background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 12px 32px rgba(8,40,79,.2);overflow:hidden;animation:rise .2s}
.chat__panel header{display:flex;justify-content:space-between;align-items:center;background:var(--navy);color:#fff;padding:4px 8px 4px 16px}
.chat__panel .icon-btn{color:#fff}
.chat__panel .icon-btn:hover{background:rgba(255,255,255,.15)}
.chat__log{height:240px;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:8px;background:var(--tint)}
.msg{max-width:85%;padding:9px 13px;border-radius:14px;font-size:.85rem;color:var(--text)}
.msg a{color:var(--accent);text-decoration:underline}
.msg.bot{background:#fff;border:1px solid var(--line);align-self:flex-start}
.msg.me{background:var(--navy);color:#fff;align-self:flex-end}
.chat__form{display:flex;gap:8px;padding:10px;border-top:1px solid var(--line)}
.chat__form .btn{padding:0 16px}

/* ===== Footer ===== */
.foot{background:var(--deep);color:#C5D6EA;padding:56px 0 24px;font-size:.88rem}
.foot__grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1.2fr;gap:32px}
.foot__grid>div{display:flex;flex-direction:column;gap:8px}
.foot h4{color:#fff;font-size:.9rem;margin-bottom:4px}
.foot a:hover{color:#fff}
.brand--w{color:#fff;margin-bottom:6px}
.brand--w span{border-color:rgba(255,255,255,.3)}
.foot__bar{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;margin-top:40px;padding-top:20px;border-top:1px solid rgba(255,255,255,.15);font-size:.8rem}

/* ===== Reveal ===== */
.js .reveal{opacity:0;transform:translateY(16px);transition:opacity .6s,transform .6s}
.js .reveal.in{opacity:1;transform:none}

/* ===== Responsive ===== */
@media (max-width:1180px){
  .nav__book{display:none}
  .menu__book{display:inline-flex}
  .burger{display:grid}
  :root{--nav-h:60px}
  .menu{position:fixed;top:0;right:0;bottom:0;height:100vh;height:100dvh;width:min(84vw,340px);z-index:2;flex-direction:column;align-items:stretch;gap:0;background:#fff;box-shadow:-12px 0 32px rgba(8,40,79,.18);padding:12px 24px calc(24px + env(safe-area-inset-bottom,0px));overflow-y:auto;transform:translateX(100%);visibility:hidden;transition:transform .3s ease,visibility 0s .3s}
  .menu.open{transform:none;visibility:visible;transition:transform .3s ease}
  .menu__close{display:grid;align-self:flex-end;margin:0 -10px 8px 0}
  .menu a{padding:14px 0;border-bottom:1px solid var(--line);font-size:1rem}
  .scrim{position:fixed;inset:0;z-index:1;background:rgba(8,40,79,.45);opacity:0;visibility:hidden;transition:opacity .3s,visibility 0s .3s}
  .scrim.open{opacity:1;visibility:visible;transition:opacity .3s}
  .menu a.active{border-color:var(--line);color:var(--accent)}
  .menu__book{margin-top:16px}
  .services{grid-template-columns:1fr}
  .cards{grid-template-columns:repeat(2,1fr)}
  .benefits{grid-template-columns:repeat(2,1fr);row-gap:20px}
  .benefits li:nth-child(3){border-left:0}
  .why{grid-template-columns:1fr 1.6fr}
  .why__img{grid-column:1/-1;height:200px;border-radius:0}
  .why__text{padding:28px 0 8px 28px}
}
@media (max-width:860px){
  .hero__in{grid-template-columns:1fr;min-height:0;gap:0}
  .hero__text{padding:36px 0 28px}
  .hero__img{margin:0 calc(-1 * clamp(20px,4vw,56px));border-radius:32px 32px 0 0;min-height:440px}
  .float-card{left:16px;right:auto;bottom:16px;max-width:215px;padding:14px 16px;gap:10px}.hero__img img{object-position:62% 65%}
  .split,.grid3,.foot__grid{grid-template-columns:1fr}
  .grid4{grid-template-columns:repeat(2,1fr)}
  .why{grid-template-columns:1fr}
  .why__text{padding:28px 24px 8px}
  .why__list{grid-template-columns:1fr;padding:8px 24px 20px;gap:16px}
  .why__list li{padding:0}
  .why__list li+li{border-left:0;border-top:1px solid rgba(255,255,255,.2);padding-top:16px}
}
@media (max-width:560px){
  .brand b{font-size:1.5rem}.brand span{font-size:1rem;margin-left:10px;padding-left:10px}
  .cta .btn{width:100%}
  .cards,.grid4,.row2{grid-template-columns:1fr}
  .benefits{grid-template-columns:1fr}
  .benefits li{border-left:0!important;padding:4px 16px}
  .chat{right:12px;bottom:12px}
  .chat__pill small{display:none}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation:none!important;transition:none!important}
  .js .reveal{opacity:1;transform:none}
}
.card[data-service="Rehabilitation"] img{object-position:55% 40%}
.card__img{position:relative;overflow:hidden}.card__img img{position:absolute;inset:0}
.sec p.eyebrow{color:var(--brand)}.sec p+p{margin-top:12px}

/* Mobile only: hero photo first, above the eyebrow and headline */
@media (max-width:767px){
  .hero__in{display:flex;flex-direction:column}
  .hero__img{order:-1;border-radius:0 0 32px 32px;min-height:380px}
  .hero__text{padding:28px 0 36px}
}
body.menu-open .chat{visibility:hidden}

/* Mobile only: CTA buttons sit above the eyebrow, below the hero photo */
@media (max-width:767px){
  .hero__text{display:flex;flex-direction:column;padding:24px 0 36px}
  .hero .cta{order:-1;flex-wrap:nowrap;gap:10px;margin-bottom:26px}
  .hero .cta .btn{flex:1 1 0;min-width:0;width:auto;padding:0 10px;font-size:.8rem}
  .hero .cta .btn i{display:none}
}
@media (max-width:380px){
  .hero .cta .btn{font-size:.72rem;padding:0 6px}
}

/* Footer credit */
.foot__right{display:flex;flex-wrap:wrap;align-items:center;gap:6px 24px}
.foot__legal{display:flex;gap:16px}
.foot__dev a{color:#fff;font-weight:600;text-decoration:underline;text-underline-offset:3px}

/* Mobile: footer row keeps Privacy Policy on the left and the credit to its right;
   chat widget minimised to a compact icon button */
@media (max-width:767px){
  .foot__bar{flex-direction:column;align-items:stretch}
  .foot__right{flex-wrap:wrap;justify-content:space-between;font-size:.78rem;gap:6px 12px}
  .foot__legal{gap:12px}
  }
@media (max-width:767px){
  .foot__right{flex-wrap:nowrap;font-size:.72rem;gap:10px}
  .foot__legal{gap:10px;flex:none}
  .foot__dev{text-align:right}
}
@media (max-width:370px){
  .foot__right{flex-wrap:wrap}
  .foot__legal{display:contents}
  .foot__legal a:first-child{order:1}
  .foot__dev{order:2}
  .foot__legal a:last-child{order:3;flex-basis:100%}
}
@media (max-width:767px){.foot{padding-bottom:84px}}
@media (max-width:370px){.foot__right{font-size:.68rem;gap:4px 6px}}
.foot__dev a{text-decoration:none}
@media (max-width:767px){
}

/* Shorter "Need help?" pill, fixed at the bottom-right */
.chat__pill{min-height:46px;padding:5px 16px 5px 5px;gap:10px}
.chat__ic{width:36px;height:36px}
.chat__pill strong{font-size:.82rem;line-height:1.2}
.chat__pill small{font-size:.68rem;line-height:1.2}
@media (max-width:767px){.chat{right:12px;left:auto;align-items:flex-end}}

/* Mobile: chat trigger lives in the navbar, right of search (icon only, outline) */
.chat-nav{display:none}
@media (max-width:767px){
  .chat-nav{display:grid}
  .chat__pill{display:none}
  .nav__actions{gap:2px}
  .chat{left:12px;right:12px;align-items:stretch}
  .chat__panel{width:100%}
  .brand b{font-size:1.4rem}
  .brand span{font-size:.95rem;margin-left:9px;padding-left:9px}
}
@media (max-width:360px){
  .brand span{display:none}
}
@media (max-width:767px){
  .nav__in{gap:8px}
  .brand b{font-size:1.3rem}
  .brand span{font-size:.85rem;margin-left:7px;padding-left:7px}
}
@media (max-width:380px){.brand span{display:none}}

/* Desktop hero: photo edge is one smooth, shallow arc (no halo rings) */
@media (min-width:861px){
  .hero__img{box-shadow:none;border-radius:clamp(110px,11.5vw,190px) 0 0 clamp(110px,11.5vw,190px) / 50% 0 0 50%}
}


/* Stacked layouts (tablet + phone): same photo proportions on every device */
@media (max-width:860px){
  .hero__img{aspect-ratio:3/2;min-height:0}
  .hero__img img{object-position:center}
}
@media (max-width:767px){
  .hero__img{border-radius:0 0 40px 40px}
  .float-card{max-width:185px;padding:12px 14px;left:12px;bottom:12px}
  .float-card h2{font-size:.9rem}
}
@media (max-width:767px){
  .float-card{max-width:none;padding:10px 14px;align-items:center}
  .float-card i{width:1.7em;height:1.7em}
  .float-card p{display:none}
  .float-card h2{font-size:.82rem;line-height:1.25}
}

/* Mobile: service cards in two columns (2 x 2) */
@media (max-width:767px){
  .cards{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
  .card__img{aspect-ratio:4/3}
  .card__body{padding:12px 12px 14px}
  .card h3{font-size:.92rem;line-height:1.3}
  .card p{font-size:.74rem;line-height:1.45;margin:4px 0 12px}
}

/* Mobile: team cards, two on top and the third centred beneath them */
@media (max-width:767px){
  .grid3{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
  .grid3 .tcard:nth-child(3){grid-column:1/-1;justify-self:center;width:calc(50% - 6px)}
  .tcard{padding:10px}
  .tcard img{margin-bottom:10px}
  .tcard h3{font-size:.88rem;line-height:1.3}
  .tcard p{font-size:.74rem;line-height:1.45;margin-top:4px}
}

/* Navbar icons slightly larger */
.nav__actions .icon-btn i{width:1.5em;height:1.5em}
@media (max-width:767px){.card[data-service="Rehabilitation"] img{object-position:85% 40%}}

/* Page views + detail pages */
main{min-height:60vh;outline:none}
.detail{padding:clamp(32px,5vw,64px) 0}
.back{display:inline-flex;align-items:center;min-height:44px;margin-bottom:12px;color:var(--brand);font-weight:600;font-size:.9rem}
.back:hover{text-decoration:underline}
.detail h1{font-size:clamp(2rem,3.4vw,2.8rem);line-height:1.15;font-weight:700;color:var(--navy);letter-spacing:-.02em;margin-bottom:14px}
.detail .lead2{color:var(--muted);font-size:1rem;max-width:34em}
.ticks{display:grid;gap:10px;margin:22px 0 28px}
.ticks li{position:relative;padding-left:30px;color:var(--text);font-size:.95rem}
.ticks li::before{content:"";position:absolute;left:0;top:.3em;width:18px;height:18px;border-radius:50%;background:var(--tint) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230755A5' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 12 4 4 8-8'/%3E%3C/svg%3E") center/12px no-repeat;border:1px solid var(--line)}
.detail .note{margin-top:20px;font-size:.78rem;color:var(--muted)}
@media (max-width:860px){.detail .split{gap:24px}.detail .photo{order:-1}}

html{scroll-padding-top:var(--nav-h)}

.card__img.ic{display:grid;place-items:center;background:linear-gradient(135deg,#E6F1FC,#EAF7EF)}
.card__img.ic i{display:grid;place-items:center;width:64px;height:64px;border-radius:50%;background:#fff;box-shadow:0 4px 14px rgba(11,49,93,.12)}
.card__img.ic svg{width:30px;height:30px;fill:none;stroke:var(--brand);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
@media (min-width:1000px){.cards--6{grid-template-columns:repeat(3,1fr)}}

*{-webkit-tap-highlight-color:transparent}
.nav__in{position:relative}
.brand,.nav__actions{transition:opacity .25s ease,transform .3s ease,visibility 0s}
.menu{transition:opacity .25s ease,visibility 0s}
.nav.searching .brand,.nav.searching .nav__actions{opacity:0;visibility:hidden;pointer-events:none;transform:translateX(-18px);transition:opacity .22s ease,transform .3s ease,visibility 0s .3s}
.nav.searching .menu{opacity:0;visibility:hidden;pointer-events:none;transition:opacity .22s ease,visibility 0s .3s}
.navsearch{position:absolute;inset:0;display:flex;align-items:center;gap:8px;opacity:0;visibility:hidden;pointer-events:none;transform:translateX(32px);transition:opacity .22s ease,transform .3s ease,visibility 0s .3s;z-index:3;background:#fff}
.nav.searching .navsearch{opacity:1;visibility:visible;pointer-events:auto;transform:none;transition:opacity .28s ease .08s,transform .32s ease .08s,visibility 0s}
.navsearch .icon-btn{flex:none}
.navsearch input{flex:1;border:1px solid #000;background:#fff;border-radius:999px;padding:10px 18px;font-size:1rem}
.navsearch input:focus,.navsearch input:focus-visible{border:1px solid #000;border-radius:999px;outline:none;box-shadow:none}
.navres{position:absolute;left:0;right:0;top:100%;margin:0;list-style:none;background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line);box-shadow:0 14px 28px rgba(8,40,79,.12);padding:0 max(clamp(20px,4vw,56px),calc((100% - var(--max))/2));max-height:0;overflow:hidden;opacity:0;visibility:hidden;transition:max-height .35s ease,opacity .25s ease,visibility 0s .35s}
.nav.searching .navres{max-height:min(60vh,420px);overflow:auto;opacity:1;visibility:visible;padding-top:8px;padding-bottom:12px;transition:max-height .35s ease,opacity .28s ease .1s,visibility 0s}
@media (prefers-reduced-motion:reduce){.brand,.nav__actions,.menu,.navsearch,.navres{transition:none!important}}

.searchveil{position:fixed;inset:0;z-index:130;background:rgba(8,40,79,.28);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility 0s .3s}
.searchveil.on{opacity:1;visibility:visible;transition:opacity .3s ease,visibility 0s}
.nav.searching{z-index:140}
@media (prefers-reduced-motion:reduce){.searchveil{transition:none!important}}

.nav__actions .icon-btn{font-size:13.3333px}

.cards--6 .card__img{aspect-ratio:4/3}
.hero__img img{object-position:38% 22%!important}

.card[hidden]{display:none}
.acct-nav{position:relative}
.acct-nav.on::after{content:"";position:absolute;top:9px;right:9px;width:9px;height:9px;border-radius:50%;background:#2EAD62;border:2px solid #fff}
.pg{padding-block:clamp(24px,4vw,48px) 72px}
.pg h1{font-size:clamp(1.6rem,3.2vw,2.3rem);line-height:1.2;color:var(--navy);margin:6px 0 10px}
.h-sm{font-size:1.05rem;color:var(--navy);margin:20px 0 10px}.h-gap{margin-top:48px;font-size:1.3rem}
.crumbs{font-size:.84rem;color:var(--muted);margin-bottom:12px}.crumbs a{color:var(--brand)}.crumbs a:hover{text-decoration:underline}
.chips{display:flex;gap:8px;overflow-x:auto;padding:4px 0 10px;margin:14px 0 6px;scrollbar-width:thin}
.chips a,.chips span{flex:none;padding:8px 14px;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--navy);font-size:.88rem;font-weight:500;white-space:nowrap}
.chips a.on{background:var(--navy);border-color:var(--navy);color:#fff}.chips--static{flex-wrap:wrap;overflow:visible;margin:0}
#pq{max-width:420px;margin:6px 0 20px;border-radius:999px}
.pgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:18px}
.pgrid .card__img{aspect-ratio:4/3}.empty-msg{margin-top:20px;color:var(--muted)}
.pd{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:clamp(24px,4vw,56px);align-items:start}
.pd__img{border:1px solid var(--line);border-radius:var(--r);overflow:hidden;background:var(--tint);aspect-ratio:4/3}
.pd__img img{width:100%;height:100%;object-fit:cover}
.pd__meta{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 16px}
.tag{padding:5px 12px;border-radius:999px;background:var(--tint);color:var(--brand);font-size:.8rem;font-weight:600}.tag--ok{background:#E8F6EE;color:#1E7A45}
.pd__actions{display:flex;flex-wrap:wrap;gap:10px;margin:22px 0 14px}
.note{font-size:.86rem;color:var(--muted)}.note a{color:var(--brand);font-weight:600}
.auth{max-width:460px;margin-inline:auto}
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--line);margin:16px 0 20px;overflow-x:auto}
.tabs button{background:none;border:0;padding:10px 14px;font:inherit;font-weight:600;color:var(--muted);cursor:pointer;border-bottom:2px solid transparent;white-space:nowrap}
.tabs button.on{color:var(--navy);border-color:var(--accent)}
.acct-head{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.acct-head>div{flex:1;min-width:160px}.acct-head h1{margin:0}.acct-head p{color:var(--muted);font-size:.9rem}
.avatar{width:56px;height:56px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-size:1.4rem;font-weight:700}
.lst{list-style:none;padding:0;display:grid;gap:12px}.lst li{border:1px solid var(--line);border-radius:var(--r);padding:14px 16px;background:#fff}
.lst li div{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}.lst small{color:var(--muted)}.lst p{margin-top:6px;color:var(--text);font-size:.92rem}
#profile .form,#proForm{max-width:460px}
@media (max-width:760px){.pd{grid-template-columns:1fr}.pd__actions .btn{flex:1 1 140px;justify-content:center}.pgrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}}

/* chips + tabs: no scrollbar; swipe by hand on mobile, wrap on desktop */
.chips{flex-wrap:wrap;overflow:visible}
.chips--static{flex-wrap:wrap}
.tabs{scrollbar-width:none}.tabs::-webkit-scrollbar{display:none}
.pd__actions{margin:4px 0 20px}
.acct-head{flex-wrap:nowrap;gap:14px}
.acct-head>div{min-width:0}.acct-head p{overflow-wrap:anywhere}
.acct-head .btn{flex:none;width:auto;min-height:0;padding:7px 14px;font-size:.82rem;border-radius:8px}
@media (max-width:760px){
  .chips:not(.chips--static){flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;margin-inline:-20px;padding-inline:20px}
  .chips:not(.chips--static)::-webkit-scrollbar{display:none}
  .acct-head{gap:12px}.avatar{width:48px;height:48px;font-size:1.2rem}
  .acct-head h1{font-size:1.25rem}.acct-head .btn{padding:6px 12px;font-size:.78rem}
  .pd__actions{gap:8px}.pd__actions .btn{flex:1 1 calc(50% - 8px);padding-inline:12px}
}
@media (max-width:760px){.pd__actions .btn:first-child{flex-basis:100%}.tabs button{padding:10px 9px;font-size:.86rem}}
.nav__in{overflow:hidden}
