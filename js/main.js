/* SDK Men's Spa · lamas que giran (entrada y foto), panel de rituales en acordeón, recomendador de packs con precios reales */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof gsap !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);
  const D = window.I18N;
  let LANG = 'fr';
  const ix = () => (LANG === 'es' ? 1 : 0);
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } } };

  /* ---------- acordeón de lamas ---------- */
  const slats = $$('.slat');
  function openSlat(s) { slats.forEach((x) => x.classList.toggle('is-open', x === s)); }
  slats.forEach((s) => {
    s.addEventListener('click', () => openSlat(s));
    s.addEventListener('focus', () => openSlat(s));
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) s.addEventListener('mouseenter', () => openSlat(s));
  });

  /* ---------- packs ---------- */
  const sel = new Set();
  function renderChips() {
    $('#chips').innerHTML = D.services.map(([id, fr, es, ic]) => `<button class="chip" type="button" data-id="${id}" aria-pressed="${sel.has(id)}"><i class="ph-light ${ic}"></i>${ix() ? es : fr}</button>`).join('');
  }
  function renderPacks() {
    const u = D.ui[LANG];
    $('#packList').innerHTML = D.packs.map((p) => `
      <article class="pack" data-id="${p.id}">
        <p class="pack__save">${p.old - p.price} DH ${u.save}</p>
        <h3 class="pack__name">${p.name[ix()]}</h3>
        <p class="pack__price"><b>${p.price} DH</b><s>${p.old} DH</s></p>
        <ul>${p.items.map((it) => `<li data-s="${it[0].join(' ')}"><i class="ph-light ph-check"></i>${it[ix() + 1]}</li>`).join('')}</ul>
      </article>`).join('');
  }
  const covers = (p) => new Set(p.items.flatMap((it) => it[0]));
  function evaluate() {
    const u = D.ui[LANG];
    const cards = $$('.pack');
    $$('.chip').forEach((c) => c.setAttribute('aria-pressed', String(sel.has(c.dataset.id))));
    cards.forEach((c) => $$('li', c).forEach((li) => li.classList.toggle('is-hit', li.dataset.s.split(' ').some((s) => sel.has(s)))));
    if (!sel.size) { $('#verdict').textContent = u.none; cards.forEach((c) => c.classList.remove('is-dim', 'is-match')); return; }
    const full = D.packs.filter((p) => [...sel].every((s) => covers(p).has(s))).sort((a, b) => a.price - b.price)[0];
    let best = full, txt;
    const strip = (h) => h.replace(/<[^>]+>/g, '');
    if (full) {
      txt = u.all.replace('{p}', strip(full.name[ix()])).replace('{n}', full.price).replace('{o}', full.old).replace('{s}', full.old - full.price);
    } else {
      best = D.packs.map((p) => ({ p, c: [...sel].filter((s) => covers(p).has(s)).length })).sort((a, b) => b.c - a.c || a.p.price - b.p.price)[0];
      txt = u.part.replace('{p}', strip(best.p.name[ix()])).replace('{c}', best.c).replace('{t}', sel.size);
      best = best.p;
    }
    $('#verdict').textContent = txt;
    cards.forEach((c) => { const on = c.dataset.id === best.id; c.classList.toggle('is-match', on); c.classList.toggle('is-dim', !on); });
    if (hasGsap && !REDUCE) gsap.fromTo('#verdict', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.45, ease: 'expo.out' });
  }
  $('#chips').addEventListener('click', (e) => {
    const c = e.target.closest('.chip');
    if (!c) return;
    const id = c.dataset.id;
    sel.has(id) ? sel.delete(id) : sel.add(id);
    evaluate();
  });

  function renderReviews() {
    $('#reviews').innerHTML = D.reviews[LANG].map(([t, w]) => `<figure class="rv"><p>${LANG === 'fr' ? '« ' + t + ' »' : '«' + t + '»'}</p><cite>${w}, Google</cite></figure>`).join('');
  }

  /* ---------- idioma ---------- */
  function applyLang(l) {
    LANG = l;
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach((el) => {
      if (el.dataset.fr === undefined) el.dataset.fr = el.innerHTML;
      el.innerHTML = l === 'fr' ? el.dataset.fr : (D.dom[l] && D.dom[l][el.dataset.i18n]) || el.dataset.fr;
    });
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    store.set('sdk-lang', l);
    renderChips(); renderPacks(); evaluate(); renderReviews();
  }
  $$('.lang button').forEach((b) => b.addEventListener('click', () => applyLang(b.dataset.lang)));

  /* ---------- foto del héroe en lamas ---------- */
  const fig = $('#heroFig');
  function sliceHero() {
    const img = $('img', fig);
    const N = innerWidth < 700 ? 6 : 9;
    const wrap = document.createElement('div');
    wrap.className = 'slices';
    for (let i = 0; i < N; i++) {
      const s = document.createElement('span');
      s.className = 'slice';
      s.style.backgroundImage = `url(${img.currentSrc || img.src})`;
      s.style.backgroundSize = `${N * 100}% 100%`;
      s.style.backgroundPosition = `${(i / (N - 1)) * 100}% 50%`;
      wrap.appendChild(s);
    }
    fig.appendChild(wrap);
    fig.classList.add('is-split');
    return $$('.slice', wrap);
  }
  function heroIn() {
    if (!hasGsap || REDUCE) return;
    const slices = sliceHero();
    gsap.timeline()
      .from(slices, { rotateY: 90, opacity: 0.2, duration: 1.2, ease: 'expo.out', stagger: { each: 0.06, from: 'center' } })
      .from('.hero__mark', { opacity: 0, letterSpacing: '.2em', duration: 1.4, ease: 'expo.out' }, 0)
      .from('.hero__title, .hero__sub, .hero__cta', { y: 24, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.2);
    // inclinación suave de las lamas con el puntero
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
      fig.addEventListener('pointermove', (e) => {
        const r = fig.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5;
        slices.forEach((s, i) => gsap.to(s, { rotateY: x * 24 * (1 - Math.abs(i / (slices.length - 1) - 0.5)), duration: 0.6, ease: 'power3.out' }));
      });
      fig.addEventListener('pointerleave', () => gsap.to(slices, { rotateY: 0, duration: 0.8, ease: 'expo.out' }));
      fig.style.perspective = '900px';
    }
  }

  /* ---------- entrada ---------- */
  const lv = $('#louvers');
  let seen = false;
  try { seen = sessionStorage.getItem('sdk-intro') === '1'; sessionStorage.setItem('sdk-intro', '1'); } catch (e) { }
  if (!hasGsap || REDUCE || seen) { lv.remove(); heroIn(); }
  else {
    document.body.classList.add('is-locked');
    const row = $('.louvers__row', lv);
    const N = innerWidth < 700 ? 8 : 14;
    row.innerHTML = Array.from({ length: N }, () => '<span class="louver"></span>').join('');
    const tl = gsap.timeline({ onComplete: () => { lv.remove(); document.body.classList.remove('is-locked'); } });
    tl.from('.louvers__word', { opacity: 0, scale: 1.08, duration: 0.8, ease: 'expo.out' })
      .to('.louvers__word', { opacity: 0, duration: 0.35 }, '+=0.25')
      .to('.louver', { rotateY: 90, duration: 1, ease: 'expo.inOut', stagger: { each: 0.04, from: 'center' } }, '<')
      .add(heroIn, '-=0.6');
    lv.addEventListener('click', () => tl.progress(1));
  }

  /* ---------- scroll ---------- */
  function scrollFx() {
    if (!hasGsap || REDUCE) return;
    const nav = $('#nav');
    ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (s) => { const y = s.scroll(); nav.classList.toggle('is-solid', y > 60); nav.classList.toggle('is-hidden', s.direction === 1 && y > 700); } });
    gsap.from('.slat', { scaleY: 0, transformOrigin: 'bottom', duration: 1.1, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: '.slats', start: 'top 80%' } });
    gsap.from('.chip', { y: 14, opacity: 0, duration: 0.6, ease: 'expo.out', stagger: 0.03, scrollTrigger: { trigger: '#chips', start: 'top 85%' } });
    gsap.from('#packList', { clipPath: 'inset(100% 0 0 0)', y: 40, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '#packList', start: 'top 85%' }, clearProps: 'clipPath,transform' });
    gsap.from('.reviews .h2', { clipPath: 'inset(0 100% 0 0)', duration: 1.4, ease: 'expo.inOut', scrollTrigger: { trigger: '.reviews', start: 'top 75%' } });
    gsap.from('.visit__fig', { clipPath: 'inset(0 50% 0 50%)', duration: 1.3, ease: 'expo.inOut', scrollTrigger: { trigger: '.visit', start: 'top 75%' } });
  }

  const initial = [new URLSearchParams(location.search).get('lang'), store.get('sdk-lang'), (navigator.language || '').slice(0, 2)].find((l) => l === 'fr' || l === 'es') || 'fr';
  applyLang(initial);
  scrollFx();
  addEventListener('load', () => hasGsap && ScrollTrigger.refresh());
})();
