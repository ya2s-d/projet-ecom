// Moteur d'animation des carrousels (rendu image par image par render.js)
const S = {};
const IMG = '../../../../assets/produit/detoures/';
const DISC = 'Filter capabilities refer to what the filter is designed to reduce, not to the guaranteed presence of those substances in your water. Individual results vary. Not a medical device and not intended to diagnose, treat, cure or prevent any condition.';
const ease = { out: x => 1 - Math.pow(1 - x, 3), back: x => { const c = 1.7; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); }, io: x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2, lin: x => x };
const P = (t, a, d, e = 'out') => ease[e](Math.min(1, Math.max(0, (t - a) / d)));
const $ = q => document.querySelector(q), $$ = q => [...document.querySelectorAll(q)];
const mix = (a, b, p) => a + (b - a) * p;
const hex = (c1, c2, p) => { const a = c1.match(/\w\w/g).map(h => parseInt(h, 16)), b = c2.match(/\w\w/g).map(h => parseInt(h, 16)); return '#' + a.map((v, i) => Math.round(mix(v, b[i], p)).toString(16).padStart(2, '0')).join(''); };

function fit() { for (const el of $$('.big')) { const max = +(el.dataset.fit || 968), w = el.scrollWidth; if (w > max) el.style.fontSize = (parseFloat(getComputedStyle(el).fontSize) * max / w * .995) + 'px'; } }

function render(t) {
  for (const el of $$('[data-in]')) {
    const [k, a, d = '.55'] = el.dataset.in.split(' '); const A = +a, D = +d;
    const p = P(t, A, D, k === 'pop' ? 'back' : 'out'), o = P(t, A, D * .55, 'lin');
    let tf = '';
    if (k === 'up') tf = `translateY(${(1 - p) * 70}px)`;
    else if (k === 'down') tf = `translateY(${(p - 1) * 70}px)`;
    else if (k === 'left') tf = `translateX(${(p - 1) * 90}px)`;
    else if (k === 'pop') tf = `scale(${.25 + .75 * p})`;
    el.style.opacity = o;
    el.style.transform = tf + (el.dataset.r ? ` rotate(${el.dataset.r}deg)` : '');
  }
  for (const el of $$('[data-bar]')) { const [v, m, a, d = 1] = el.dataset.bar.split(' ').map(Number); const f = v / m * P(t, a, d, 'io'); el.style.height = `calc(${f * 100}% - ${f * 64}px)`; }
  for (const el of $$('[data-num]')) { const [v, dec, a, d = 1] = el.dataset.num.split(' ').map(Number); el.textContent = (el.dataset.pre || '') + (v * P(t, a, d, 'out')).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + (el.dataset.suf || ''); }
  for (const el of $$('[data-bob]')) { const [A, T, ph = 0, R = 0] = el.dataset.bob.split(' ').map(Number); const s = Math.sin(2 * Math.PI * (t / T + ph)); el.style.transform = `translateY(${A * s}px) rotate(${R * Math.sin(2 * Math.PI * (t / T + ph) + 1)}deg)`; }
  for (const el of $$('[data-draw]')) { const [a, d = .4] = el.dataset.draw.split(' ').map(Number); const p = P(t, a, d, 'out'); el.style.strokeDashoffset = 1 - p; el.style.opacity = p > 0 ? 1 : 0; }
  for (const el of $$('[data-nudge]')) { const s = Math.max(0, Math.sin(2 * Math.PI * t / 1.6)); el.style.transform = `translateX(${10 * s * s}px)`; }
  if (window.cur && cur.fx) cur.fx(t);
}

// ---------- blocs communs ----------
const H = (n, N, next, at = 2.5) => `<div class="ab handle">@tryplush</div><div class="ab foot"><span class="wm">plush</span><span class="pg">${n}/${N}</span></div>` +
  (next ? `<div class="ab next"${at ? ` data-in="pop ${at} .5"` : ''}>${next} <span data-nudge style="display:inline-block">→</span></div>` : '');
const NUM = n => `<span class="mono" style="font:500 38px Mono;color:var(--brown);letter-spacing:.06em">${n}</span><br>`;

function bars(cap, items, max, { at = .5, h = 440, w = 920 } = {}) {
  const n = items.length, cw = Math.min(170, (w - 100) / n - 34);
  return `<div class="card" style="width:${w}px;padding:36px 40px 30px" data-in="up ${Math.max(0, at - .3)} .6">
  <div class="cap">${cap}</div>
  <div style="height:${h}px;display:flex;align-items:flex-end;justify-content:space-around;border-bottom:3px solid #5a5048;margin-top:18px">
  ${items.map((it, i) => { const a = at + .2 + i * .2; return `<div style="width:${cw}px;height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center">
   <div style="font:500 ${it.fs || 46}px Mono;margin-bottom:12px;white-space:nowrap;color:${it.c === '#FBF8F3' ? '#FBF8F3' : '#F0C9A8'}" ${it.txt ? `data-in="up ${a + .7} .4"` : `data-num="${it.v} ${it.dec || 0} ${a} 1.1"`}>${it.txt || '0'}</div>
   <div style="width:100%;height:0;background:${it.c || '#A86B45'};border-radius:8px 8px 0 0" data-bar="${it.v} ${max} ${a} 1.1"></div></div>`; }).join('')}
  </div>
  <div style="display:flex;justify-content:space-around;margin-top:14px">${items.map(it => `<div class="cap" style="width:${cw + 34}px;color:#E9DFD4;line-height:1.3;font-size:25px">${it.l}</div>`).join('')}</div></div>`;
}

function check(cap, items, at = .5) {
  return `<div class="card" style="width:920px;padding:36px 52px 30px" data-in="up ${at - .3} .6">
  <div class="cap" style="margin-bottom:10px">${cap}</div>
  ${items.map((x, i) => `<div style="display:flex;align-items:center;gap:28px;margin:17px 0" data-in="left ${at + .15 + i * .28} .45">
   <svg width="54" height="54" viewBox="0 0 54 54" style="flex:none"><rect x="3" y="3" width="48" height="48" rx="9" fill="none" stroke="#E9DFD4" stroke-width="3.5"/><path d="M13 28 L23 38 L42 16" fill="none" stroke="#E0A57E" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" data-draw="${at + 1.3 + i * .32} .35"/></svg>
   <div style="font:600 39px/1.25 Pop;color:#FBF8F3;text-align:left">${x}</div></div>`).join('')}</div>`;
}

const productImg = (file, w) => `<img src="${IMG}${file}" style="width:${w}px;display:block;filter:drop-shadow(0 26px 26px rgba(20,20,20,.22))">`;

// ---------- illustrations (code, jamais le produit) ----------
const glass = (w = 64) => `<svg width="${w}" height="${w * 1.33}" viewBox="0 0 60 80"><path d="M8 6H52L46.2 73.5Q45.8 77 42.3 77H17.7Q14.2 77 13.8 73.5Z" fill="#FBF8F3"/><path d="M10.9 26H49.1L46.2 73.5Q45.8 77 42.3 77H17.7Q14.2 77 13.8 73.5Z" fill="#B9CFD6"/><path d="M10.9 26H49.1" stroke="#8EB0BB" stroke-width="2.5"/><path d="M8 6H52L46.2 73.5Q45.8 77 42.3 77H17.7Q14.2 77 13.8 73.5Z" fill="none" stroke="#141414" stroke-width="3.6" stroke-linejoin="round"/><path d="M15 31L17 64" stroke="#fff" stroke-width="3.2" stroke-linecap="round" opacity=".75"/></svg>`;

const donut = () => `<svg width="290" height="290" viewBox="0 0 290 290"><circle cx="145" cy="145" r="112" fill="none" stroke="#C9C2B8" stroke-width="56"/><circle id="dn" cx="145" cy="145" r="112" fill="none" stroke="#8A4524" stroke-width="56" pathLength="100" stroke-dasharray="0 100" transform="rotate(-90 145 145)"/><text id="dnt" x="145" y="174" text-anchor="middle" font-family="Anton" font-size="84" fill="#141414">0%</text></svg>`;
function donutFx(t, v, a, d) { const p = P(t, a, d, 'io'); $('#dn').setAttribute('stroke-dasharray', `${v * p} 100`); $('#dnt').textContent = Math.round(v * p) + '%'; }

function headFace(size, { lens = false } = {}) {
  let noz = '';
  [[44, 8, 0], [78, 14, .2], [110, 20, .1]].forEach(([r, n, o]) => { for (let i = 0; i < n; i++) { const a = 2 * Math.PI * i / n + o; noz += `<circle cx="${(210 + r * Math.cos(a)).toFixed(1)}" cy="${(210 + r * Math.sin(a)).toFixed(1)}" r="6.4" fill="#76766F"/>`; } });
  return `<svg width="${size}" height="${size}" viewBox="0 0 420 420" overflow="visible"><defs>
  <radialGradient id="chr" cx="38%" cy="32%" r="78%"><stop offset="0" stop-color="#F7F7F5"/><stop offset=".5" stop-color="#CFCFCA"/><stop offset="1" stop-color="#8F8F89"/></radialGradient>
  <path id="arcT" d="M46 210A164 164 0 0 1 374 210"/><path id="arcB" d="M30 210A180 180 0 0 0 390 210"/>
  ${lens ? '<clipPath id="lc"><circle id="lcc" cx="210" cy="40" r="74"/></clipPath>' : ''}</defs>
  <g id="hd"><circle cx="210" cy="210" r="198" fill="url(#chr)" stroke="#141414" stroke-width="6"/>
  <circle cx="210" cy="210" r="132" fill="#E9E9E5" stroke="#141414" stroke-width="4.5"/>${noz}
  <circle cx="210" cy="210" r="20" fill="#C4C4BF" stroke="#141414" stroke-width="3"/>
  <text font-family="Mono" font-weight="500" font-size="27" letter-spacing="2" fill="#4F4F49"><textPath href="#arcT" startOffset="50%" text-anchor="middle">MAX 2.5 GPM</textPath></text>
  <text font-family="Mono" font-weight="500" font-size="22" letter-spacing="2" fill="#62625B"><textPath href="#arcB" startOffset="50%" text-anchor="middle">9.5 L/MIN</textPath></text>
  <path d="M62 128A170 170 0 0 1 128 62" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" opacity=".7"/></g>
  ${lens ? `<g clip-path="url(#lc)"><circle cx="210" cy="210" r="198" fill="#D8D8D4"/><use id="lz" href="#hd"/></g>
  <g><circle id="lr" cx="210" cy="40" r="74" fill="rgba(255,255,255,.10)" stroke="#141414" stroke-width="10"/><path id="lh" d="" stroke="#141414" stroke-width="24" stroke-linecap="round"/></g>` : ''}</svg>`;
}
function lensFx(t) {
  const th = Math.PI / 2 + .17 * Math.sin(2 * Math.PI * t / 3.4), r = 173, cx = 210 + r * Math.cos(th), cy = 210 - r * Math.sin(th);
  $('#lcc').setAttribute('cx', cx); $('#lcc').setAttribute('cy', cy); $('#lr').setAttribute('cx', cx); $('#lr').setAttribute('cy', cy);
  $('#lh').setAttribute('d', `M${cx + 56} ${cy + 56}L${cx + 112} ${cy + 112}`);
  $('#lz').setAttribute('transform', `translate(${cx} ${cy}) scale(1.9) translate(${-cx} ${-cy})`);
}

const JUGD = 'M72 128Q72 100 98 92L124 84V58H170V84L232 99Q262 107 262 140V358Q262 380 240 380H94Q72 380 72 358Z';
const jug = () => `<svg width="320" height="427" viewBox="0 0 300 400" overflow="visible"><defs><clipPath id="jc"><path d="${JUGD}"/></clipPath></defs>
 <rect id="stream" x="139" y="-40" width="16" height="0" rx="8" fill="#8EB0BB"/>
 <path d="${JUGD}" fill="#FBF8F3"/><g clip-path="url(#jc)"><path id="wat" d="" fill="#B9CFD6"/></g>
 <path d="${JUGD}" fill="none" stroke="#141414" stroke-width="6" stroke-linejoin="round"/>
 <path d="M198 120L234 129Q243 132 243 141V180Q243 189 234 189H206Q198 189 198 180Z" fill="#F6F2ED" stroke="#141414" stroke-width="5"/>
 <path d="M96 330H118M96 290H110M96 250H118M96 210H110" stroke="#141414" stroke-width="3.5"/>
 <text x="126" y="338" font-family="Mono" font-size="22" font-weight="500" fill="#141414">1 gal</text></svg>`;
function jugFx(t) {
  const p = P(t, .7, 2.3, 'lin'), lvl = 380 - p * 252; let d = `M60 ${lvl}`;
  for (let x = 60; x <= 280; x += 10) d += ` L${x} ${(lvl + (p > 0 && p < 1 ? 5 : 2) * Math.sin(x / 18 + t * 7)).toFixed(1)}`;
  $('#wat').setAttribute('d', d + ' L280 400 L60 400 Z');
  $('#stream').setAttribute('height', p > 0 && p < 1 ? Math.max(0, lvl + 40) : 0);
  $('#sw').textContent = (24 * p).toFixed(1).padStart(4, '0');
}

function ring() {
  const cx = 300, cy = 190; let w = '';
  for (let i = 0; i < 8; i++) { const a1 = i * Math.PI / 4 + .2, a2 = a1 + Math.PI / 4; w += `<path d="M${cx} ${cy}L${cx + 400 * Math.cos(a1)} ${cy + 400 * Math.sin(a1)}L${cx + 400 * Math.cos(a2)} ${cy + 400 * Math.sin(a2)}Z" fill="${i % 2 ? '#FBF8F3' : '#8A4524'}"/>`; }
  return `<svg width="640" height="448" viewBox="0 0 600 420" overflow="visible"><defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B9CFD6" stop-opacity=".95"/><stop offset=".55" stop-color="#B9CFD6" stop-opacity=".55"/><stop offset="1" stop-color="#B9CFD6" stop-opacity="0"/></linearGradient><clipPath id="rc"><path clip-rule="evenodd" d="M${cx - 232} ${cy}a232 142 0 1 0 464 0a232 142 0 1 0 -464 0ZM${cx - 98} ${cy}a98 56 0 1 0 196 0a98 56 0 1 0 -196 0Z"/></clipPath></defs>
  <g id="rg"><g clip-path="url(#rc)">${w}</g><ellipse cx="${cx}" cy="${cy}" rx="232" ry="142" fill="none" stroke="#141414" stroke-width="7"/>
  <ellipse cx="${cx}" cy="${cy}" rx="98" ry="56" fill="#B9CFD6" stroke="#141414" stroke-width="6"/>
  <path d="M${cx - 196} ${cy - 44}Q${cx - 150} ${cy - 112} ${cx - 56} ${cy - 128}" stroke="#fff" stroke-width="12" fill="none" stroke-linecap="round" opacity=".6"/></g>
  <path id="wv" d="" fill="url(#wg)"/><path id="wl" d="" fill="none" stroke="#141414" stroke-width="5"/></svg>`;
}
function ringFx(t) {
  const s = Math.sin(2 * Math.PI * t / 3.2); $('#rg').setAttribute('transform', `translate(0 ${(8 * s).toFixed(2)}) rotate(${(2.2 * Math.sin(2 * Math.PI * t / 3.2 + 1)).toFixed(2)} 300 190)`);
  let d = 'M-60 420', l = '';
  for (let x = -60; x <= 660; x += 20) { const y = (266 + 9 * Math.sin((x / 120 + t * .9) * 2 * Math.PI)).toFixed(1); d += ` L${x} ${y}`; l += (x === -60 ? 'M' : ' L') + `${x} ${y}`; }
  $('#wv').setAttribute('d', d + ' L660 420 Z'); $('#wl').setAttribute('d', l);
}

const PIPED = 'M182 300H330V150H530V320H700V240H792';
const pipe = () => `<svg width="940" height="411" viewBox="0 0 960 420" overflow="visible" font-family="Mono" font-size="25" fill="#3b342e">
 <rect x="30" y="200" width="152" height="160" rx="8" fill="#C9C2B8" stroke="#141414" stroke-width="6"/>
 <rect x="52" y="150" width="46" height="56" rx="6" fill="#FBF8F3" stroke="#141414" stroke-width="5"/><rect x="112" y="118" width="46" height="88" rx="6" fill="#FBF8F3" stroke="#141414" stroke-width="5"/>
 <rect x="58" y="252" width="36" height="36" fill="#F6F2ED" stroke="#141414" stroke-width="4"/><rect x="118" y="252" width="36" height="36" fill="#F6F2ED" stroke="#141414" stroke-width="4"/>
 <path d="${PIPED}" fill="none" stroke="#141414" stroke-width="44" stroke-linejoin="round"/><path d="${PIPED}" fill="none" stroke="#B9CFD6" stroke-width="30" stroke-linejoin="round"/>
 <path id="flow" d="${PIPED}" fill="none" stroke="#FBF8F3" stroke-width="7" stroke-dasharray="16 30" stroke-linecap="round"/><g id="cls"></g>
 <path d="M792 200L870 140L948 200V360H792Z" fill="#FBF8F3" stroke="#141414" stroke-width="6" stroke-linejoin="round"/>
 <rect x="848" y="282" width="48" height="78" fill="#8A4524" stroke="#141414" stroke-width="5"/><rect x="808" y="214" width="40" height="40" fill="#B9CFD6" stroke="#141414" stroke-width="4"/>
 <text x="106" y="404" text-anchor="middle">plant</text><text x="430" y="404" text-anchor="middle">miles of pipe</text><text x="870" y="404" text-anchor="middle">your tap</text></svg>`;
function pipeFx(t) {
  const f = $('#flow'); f.style.strokeDashoffset = -t * 110; const g = $('#cls'), L = f.getTotalLength();
  if (!g.childElementCount) for (let k = 0; k < 5; k++) g.insertAdjacentHTML('beforeend', '<g><circle r="20" fill="#8A4524" stroke="#141414" stroke-width="3.5"/><text y="8" text-anchor="middle" font-family="Mono" font-weight="500" font-size="22" fill="#FBF8F3">Cl</text></g>');
  [...g.children].forEach((c, k) => { const pt = f.getPointAtLength((t * 150 + k * L / 5) % L); c.setAttribute('transform', `translate(${pt.x} ${pt.y})`); });
}

function ruler() {
  const X = v => 70 + v * 150; let tk = '';
  for (let i = 0; i <= 10; i++) { const v = i / 2, x = X(v), maj = i % 2 === 0; tk += `<line x1="${x}" y1="252" x2="${x}" y2="${maj ? 280 : 268}" stroke="#E9DFD4" stroke-width="${maj ? 4 : 3}"/>` + (maj ? `<text x="${x}" y="318" text-anchor="middle" font-family="Mono" font-size="28" fill="#E9DFD4">${v}</text>` : ''); }
  const pin = (id, v, h, c, l1, l2) => `<g id="${id}" style="opacity:0"><line x1="${X(v)}" y1="250" x2="${X(v)}" y2="${250 - h}" stroke="${c}" stroke-width="4"/><circle cx="${X(v)}" cy="250" r="14" fill="${c}" stroke="#1D1A17" stroke-width="4"/><text x="${X(v)}" y="${250 - h - 44}" text-anchor="middle" font-family="Pop" font-weight="700" font-size="36" fill="${c}">${l1}</text><text x="${X(v)}" y="${250 - h - 10}" text-anchor="middle" font-family="Mono" font-size="25" fill="#BFB3A7">${l2}</text></g>`;
  return `<svg width="860" height="338" viewBox="0 0 890 350"><line x1="70" y1="250" x2="820" y2="250" stroke="#5a5048" stroke-width="14" stroke-linecap="round"/><line id="rfill" x1="70" y1="250" x2="70" y2="250" stroke="#A86B45" stroke-width="14" stroke-linecap="round"/>${tk}
  ${pin('pn1', 1, 70, '#FBF8F3', 'pools', 'at least 1 · CDC')}${pin('pn2', 3, 70, '#FBF8F3', 'hot tubs', 'at least 3 · CDC')}${pin('pn3', 4, 165, '#E0A57E', 'tap water', 'max 4 · EPA')}</svg>`;
}
function rulerFx(t) {
  $('#rfill').setAttribute('x2', mix(70, 670, P(t, .7, 1.2, 'io')));
  [['#pn1', 1.2], ['#pn2', 1.6], ['#pn3', 2.0]].forEach(([id, a]) => { const e = $(id), p = P(t, a, .55, 'back'); e.setAttribute('transform', `translate(0 ${((1 - p) * -50).toFixed(1)})`); e.style.opacity = P(t, a, .3, 'lin'); });
}

function steam() {
  let dr = ''; for (let i = 0; i < 9; i++) { const x = 250 + i * 38; dr += `<line class="dr" x1="${x}" y1="0" x2="${x + (i - 4) * 14}" y2="440" stroke="#8EB0BB" stroke-width="7" stroke-dasharray="34 30" stroke-linecap="round"/>`; }
  let ws = ''; for (let i = 0; i < 6; i++) ws += '<path class="ws" d="M0 0C-30-40 30-80 0-120S-30-200 0-240" fill="none" stroke="#A39A90" stroke-width="11" stroke-linecap="round" style="opacity:0"/>';
  return `<svg width="820" height="500" viewBox="0 0 820 500" overflow="visible">${dr}<ellipse cx="402" cy="458" rx="250" ry="26" fill="#B9CFD6" stroke="#141414" stroke-width="5"/>${ws}</svg>`;
}
function steamFx(t) {
  $$('.dr').forEach((d, i) => d.style.strokeDashoffset = -(t * 300 + i * 17));
  const xs = [150, 230, 600, 680, 330, 520]; $$('.ws').forEach((w, i) => { const ph = (t / 3.2 + i / 6) % 1, x = xs[i] + 12 * Math.sin(2 * Math.PI * (t / 2 + i * .3)); w.setAttribute('transform', `translate(${x.toFixed(1)} ${(440 - ph * 200).toFixed(1)})`); w.style.opacity = (Math.sin(Math.PI * ph) * .85 * P(t, .2, .8, 'lin')).toFixed(3); });
}

const toggle = () => `<div style="position:relative;display:flex;background:#1D1A17;border-radius:999px;padding:10px"><div id="tg" class="ab" style="top:10px;left:10px;width:330px;height:86px;border-radius:999px;background:#8A4524"></div>${['chlorine', 'chloramine'].map(x => `<div style="position:relative;width:330px;height:86px;display:flex;align-items:center;justify-content:center;font:500 38px Mono;color:#FBF8F3">${x}</div>`).join('')}</div>`;
function toggleFx(t) { const s = (1 - Math.cos(2 * Math.PI * Math.max(0, t - .8) / 3)) / 2; $('#tg').style.transform = `translateX(${(s * s * (3 - 2 * s) * 330).toFixed(1)}px)`; }

const hanger = () => `<svg width="326" height="600" viewBox="0 0 380 700" overflow="visible">
 <g id="hg"><path fill-rule="evenodd" d="M78 22H302Q330 22 330 50V652Q330 680 302 680H78Q50 680 50 652V50Q50 22 78 22ZM190 50a52 52 0 1 0 0.1 0Z" fill="#8A4524" stroke="#141414" stroke-width="7"/>
 <text x="190" y="250" text-anchor="middle" font-family="Mono" font-weight="500" font-size="34" letter-spacing="8" fill="#FBF8F3">PLEASE</text>
 <text x="190" y="362" text-anchor="middle" font-family="Anton" font-size="82" fill="#FBF8F3">DO NOT</text>
 <text x="190" y="456" text-anchor="middle" font-family="Anton" font-size="82" textLength="246" lengthAdjust="spacingAndGlyphs" fill="#FBF8F3">DISTURB</text>
 <line x1="100" y1="508" x2="280" y2="508" stroke="#E0A57E" stroke-width="4"/>
 <text x="190" y="566" text-anchor="middle" font-family="Mono" font-weight="500" font-size="30" fill="#F3DCC8">showering</text>
 <text x="190" y="636" text-anchor="middle" font-family="LS" font-weight="700" font-size="40" fill="#FBF8F3">plush</text></g>
 <circle cx="190" cy="102" r="36" fill="#C9C2B8" stroke="#141414" stroke-width="7"/><circle cx="178" cy="90" r="10" fill="#fff" opacity=".7"/></svg>`;
function hangerFx(t) { $('#hg').setAttribute('transform', `rotate(${(4 * Math.sin(2 * Math.PI * t / 2.6)).toFixed(2)} 190 102)`); }

const tub = () => `<svg width="880" height="553" viewBox="0 0 860 540" overflow="visible">
 <rect x="30" y="0" width="16" height="520" fill="#141414"/><rect x="814" y="0" width="16" height="520" fill="#141414"/><rect x="30" y="0" width="800" height="16" fill="#141414"/>
 <rect x="62" y="28" width="736" height="290" rx="40" fill="#FBF8F3" stroke="#141414" stroke-width="6"/><rect x="96" y="58" width="668" height="230" rx="105" fill="#DCE7EA" stroke="#141414" stroke-width="4"/>
 <circle cx="170" cy="173" r="12" fill="#6B6660"/><text x="700" y="250" text-anchor="end" font-family="Mono" font-size="25" fill="#6B6660">tub</text>
 <ellipse cx="430" cy="196" rx="80" ry="38" fill="#C9C2B8" stroke="#141414" stroke-width="5"/><circle cx="430" cy="196" r="29" fill="#A86B45" stroke="#141414" stroke-width="5"/>
 <text x="430" y="112" text-anchor="middle" font-family="Mono" font-size="25" fill="#3b342e">you</text>
 <line x1="46" y1="340" x2="814" y2="340" stroke="#B0A79C" stroke-width="5" stroke-dasharray="14 12"/>
 <path id="zone" d="" fill="#8A4524" opacity=".2"/><path id="rod" d="M46 340Q430 340 814 340" fill="none" stroke="#141414" stroke-width="13" stroke-linecap="round"/>
 <text id="zl" x="430" y="398" text-anchor="middle" font-family="Mono" font-weight="500" font-size="30" fill="#8A4524" style="opacity:0">+ elbow room</text>
 <text x="430" y="500" text-anchor="middle" font-family="Mono" font-size="24" fill="#6B6660">view from above</text></svg>`;
function tubFx(t) { const q = 340 + 170 * P(t, .8, 1.3, 'back'); $('#rod').setAttribute('d', `M46 340Q430 ${q} 814 340`); $('#zone').setAttribute('d', `M46 340Q430 ${q} 814 340Z`); $('#zl').style.opacity = P(t, 1.7, .4, 'lin'); }

const bulb = () => `<svg width="300" height="400" viewBox="0 0 300 400" overflow="visible"><defs><radialGradient id="gl"><stop id="g0" offset="0" stop-color="#DCE8FF" stop-opacity=".95"/><stop id="g1" offset="1" stop-color="#DCE8FF" stop-opacity="0"/></radialGradient></defs>
 <circle cx="150" cy="140" r="215" fill="url(#gl)"/>
 <path id="bgl" d="M150 30C80 30 40 85 40 140C40 190 75 215 95 250L100 285H200L205 250C225 215 260 190 260 140C260 85 220 30 150 30Z" fill="#F4F8FF" stroke="#141414" stroke-width="6"/>
 <path d="M122 250L131 182Q150 160 169 182L178 250" fill="none" stroke="#A86B45" stroke-width="5"/>
 <rect x="100" y="285" width="100" height="22" rx="6" fill="#C9C2B8" stroke="#141414" stroke-width="5"/><rect x="104" y="307" width="92" height="22" rx="6" fill="#C9C2B8" stroke="#141414" stroke-width="5"/><rect x="110" y="329" width="80" height="20" rx="6" fill="#C9C2B8" stroke="#141414" stroke-width="5"/><path d="M125 349H175L165 368H135Z" fill="#141414"/></svg>`;
const kelvin = () => `<div data-in="up .4 .5" style="position:relative;width:880px;margin-top:8px">
 <div style="position:relative;height:52px;border-radius:999px;background:linear-gradient(90deg,#FFB65C,#FFD9A8 28%,#FFF4E6 52%,#EAF1FF 78%,#CFE0FF);border:4px solid #141414">
 <div id="kn" class="ab" style="top:-16px;left:880px;width:76px;height:76px;margin-left:-38px;border-radius:50%;background:#FBF8F3;border:5px solid #141414;box-shadow:0 5px 0 #141414"></div></div>
 <div style="position:relative;height:40px;font:500 26px Mono;margin-top:16px"><span class="ab" style="left:0">2700K warm</span><span class="ab" style="left:301px;transform:translateX(-50%)">4000K</span><span class="ab" style="right:0">6500K daylight</span></div></div>`;
function kelvinFx(t) { const K = mix(6500, 2700, P(t, .9, 2, 'io')), f = (K - 2700) / 3800; $('#kn').style.left = (f * 872) + 'px'; $('#kv').textContent = Math.round(K / 100) * 100 + 'K'; const c = hex('FFC37A', 'DCE8FF', f); $('#g0').setAttribute('stop-color', c); $('#g1').setAttribute('stop-color', c); $('#bgl').setAttribute('fill', hex('FFE9C9', 'F4F8FF', f)); }

const BOT = [[190, 66, '#C9C2B8'], [240, 72, '#A86B45'], [210, 78, '#FBF8F3'], [160, 60, '#6B6660'], [250, 70, '#E8DCCD'], [220, 80, '#8A4524'], [180, 64, '#B9CFD6'], [230, 70, '#C9C2B8'], [205, 76, '#FBF8F3'], [170, 62, '#A86B45'], [245, 68, '#6B6660']];
function bottles() {
  let s = '', x = 34;
  BOT.forEach(([h, w, c], i) => { const y = 380 - h; s += `<g id="b${i}" data-x="${x}" transform="translate(${x} 0)"><rect x="0" y="${y}" width="${w}" height="${h}" rx="16" fill="${c}" stroke="#141414" stroke-width="5"/><rect x="${w / 2 - 12}" y="${y - 26}" width="24" height="30" fill="${c}" stroke="#141414" stroke-width="5"/><rect x="${w / 2 - 17}" y="${y - 48}" width="34" height="24" rx="5" fill="#141414"/><rect x="10" y="${y + h * .35}" width="${w - 20}" height="${h * .28}" rx="6" fill="#F6F2ED" opacity=".75"/></g>`; x += w + 10; });
  return `<svg width="900" height="440" viewBox="0 0 900 440" overflow="visible">${s}<line x1="10" y1="383" x2="890" y2="383" stroke="#141414" stroke-width="8" stroke-linecap="round"/><g id="blab" font-family="Mono" font-size="25" font-weight="500" text-anchor="middle" fill="#141414" style="opacity:0"><text x="269" y="428">shampoo</text><text x="451" y="428">conditioner</text><text x="630" y="428">body wash</text></g></svg>`;
}
function bottlesFx(t) {
  const keep = { 2: 230, 5: 411, 8: 592 }; let gone = 0;
  BOT.forEach((b, i) => { const g = $('#b' + i), x0 = +g.dataset.x; if (i in keep) g.setAttribute('transform', `translate(${mix(x0, keep[i], P(t, 2, .8, 'io')).toFixed(1)} 0)`); else { const p = P(t, .8 + i * .07, .5, 'out'); g.setAttribute('transform', `translate(${x0} ${(p * 60).toFixed(1)})`); g.style.opacity = 1 - p; if (p >= .5) gone++; } });
  $('#bc').textContent = 11 - gone;
  $('#blab').style.opacity = P(t, 2.8, .4, 'lin');
}

const curtain = () => `<svg width="760" height="560" viewBox="0 0 760 560" overflow="visible"><line x1="30" y1="44" x2="730" y2="44" stroke="#141414" stroke-width="12" stroke-linecap="round"/><path id="cfab" d="" fill="#FBF8F3" stroke="#141414" stroke-width="6" stroke-linejoin="round"/><g id="folds"></g><g id="rings"></g></svg>`;
function curtainFx(t) {
  const sw = 9 * Math.sin(2 * Math.PI * t / 3.4), hem = x => 522 + 12 * Math.sin(x / 40 + t * 2.2), sx = x => x + sw * ((x - 70) / 620);
  let d = 'M70 64'; for (let x = 70; x < 690; x += 62) d += ` Q${x + 31} 84 ${x + 62} 64`;
  d += ` L${(690 + sw).toFixed(1)} ${hem(690).toFixed(1)}`; for (let x = 680; x >= 70; x -= 10) d += ` L${sx(x).toFixed(1)} ${hem(x).toFixed(1)}`;
  $('#cfab').setAttribute('d', d + ' Z');
  let f = ''; for (let x = 132; x < 690; x += 62) f += `<path d="M${x} 84Q${x + 8} 300 ${sx(x).toFixed(1)} ${(hem(x) - 8).toFixed(1)}" stroke="#C9C2B8" stroke-width="5" fill="none"/>`; $('#folds').innerHTML = f;
  if (!$('#rings').childElementCount) { let r = ''; for (let x = 70; x <= 690; x += 62) r += `<circle cx="${x}" cy="48" r="17" fill="none" stroke="#141414" stroke-width="5"/>`; $('#rings').innerHTML = r; }
}

const MIRD = 'M50 570V250A210 210 0 0 1 470 250V570Z';
function mirror() {
  let tiles = ''; for (let x = 50; x < 480; x += 62) tiles += `<line x1="${x}" y1="0" x2="${x}" y2="600" stroke="#BFB3A6" stroke-width="3"/>`; for (let y = 40; y < 600; y += 62) tiles += `<line x1="0" y1="${y}" x2="520" y2="${y}" stroke="#BFB3A6" stroke-width="3"/>`;
  return `<svg width="540" height="623" viewBox="0 0 520 600" overflow="visible"><defs><clipPath id="mc"><path d="${MIRD}"/></clipPath>
  <mask id="fm"><rect width="520" height="600" fill="#fff"/><path d="M118 352C190 300 300 318 404 282" stroke="#000" stroke-width="80" stroke-linecap="round" fill="none"/></mask></defs>
  <g clip-path="url(#mc)"><rect width="520" height="600" fill="#D9CFC4"/>${tiles}<circle cx="372" cy="150" r="46" fill="#FFE2B8" opacity=".9"/><rect x="96" y="420" width="120" height="150" rx="14" fill="#A86B45" opacity=".55"/>
  <rect width="520" height="600" fill="#FAF8F5" opacity=".94" mask="url(#fm)"/><g id="drops"></g></g>
  <path d="${MIRD}" fill="none" stroke="#141414" stroke-width="12"/><rect x="24" y="566" width="472" height="20" rx="10" fill="#141414"/></svg>`;
}
function mirrorFx(t) {
  const g = $('#drops'); if (!g.childElementCount) { let s = ''; for (let i = 0; i < 8; i++) s += '<ellipse rx="7" ry="10" fill="#D6E3E7" stroke="#8EB0BB" stroke-width="2.5"/>'; g.innerHTML = s; }
  const xs = [96, 150, 236, 300, 356, 420, 190, 448], y0 = [190, 420, 410, 440, 380, 200, 470, 430], sp = [.22, .16, .2, .26, .18, .24, .21, .17];
  [...g.children].forEach((e, i) => { const ph = (t * sp[i] + i * .13) % 1; e.setAttribute('cx', xs[i]); e.setAttribute('cy', (y0[i] + ph * 110).toFixed(1)); e.style.opacity = Math.sin(Math.PI * ph).toFixed(3); });
}

function gauge() {
  const cx = 380, cy = 390, R = 300, pt = (v, r) => { const a = Math.PI * (1 - v / 100); return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; };
  const arc = (v1, v2, c) => { const [x1, y1] = pt(v1, R), [x2, y2] = pt(v2, R); return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)}A${R} ${R} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${c}" stroke-width="76" fill="none"/>`; };
  const lab = (v, s) => { const [x, y] = pt(v, R - 66); return `<text x="${x.toFixed(1)}" y="${(y + 9).toFixed(1)}" text-anchor="middle" font-family="Mono" font-size="26" fill="#3b342e">${s}</text>`; };
  const zone = (v, s, c, w) => { const [x, y] = pt(v, R + 74); return `<text x="${x.toFixed(1)}" y="${(y + 8).toFixed(1)}" text-anchor="middle" font-family="Mono" font-weight="${w}" font-size="28" fill="${c}">${s}</text>`; };
  return `<svg width="800" height="474" viewBox="0 0 760 450" overflow="visible">${arc(0, 30, '#C9C2B8')}${arc(30, 50, '#8A4524')}${arc(50, 60, '#D7B49A')}${arc(60, 100, '#3A3330')}
  ${lab(0, '0')}${lab(30, '30')}${lab(50, '50')}${lab(60, '60')}${lab(100, '100%')}
  ${zone(40, 'sweet spot', '#8A4524', 500)}<text x="80" y="448" text-anchor="middle" font-family="Mono" font-weight="500" font-size="28" fill="#6B6660">too dry</text><text x="680" y="448" text-anchor="middle" font-family="Mono" font-weight="500" font-size="28" fill="#141414">mold likes it</text>
  <g id="ndl"><path d="M${cx - 15} ${cy}L${cx} ${cy - 262}L${cx + 15} ${cy}Z" fill="#141414"/></g><circle cx="${cx}" cy="${cy}" r="32" fill="#141414"/><circle cx="${cx}" cy="${cy}" r="12" fill="#F6F2ED"/></svg>`;
}
function gaugeFx(t) { const v = mix(96, 42, P(t, .7, 1.8, 'back')); $('#ndl').setAttribute('transform', `rotate(${((v - 50) / 50 * 90).toFixed(2)} 380 390)`); }

function fan() {
  let sl = ''; for (let i = 0; i < 6; i++) sl += `<line x1="206" y1="${64 + i * 22}" x2="434" y2="${64 + i * 22}" stroke="#141414" stroke-width="7" stroke-linecap="round"/>`;
  return `<svg width="640" height="440" viewBox="0 0 640 440" overflow="visible"><rect x="-200" y="0" width="1040" height="40" fill="#C9C2B8"/><line x1="-200" y1="40" x2="840" y2="40" stroke="#141414" stroke-width="6"/>
  <rect x="180" y="40" width="280" height="150" rx="10" fill="#FBF8F3" stroke="#141414" stroke-width="6"/>${sl}<g id="air"></g>
  <g id="tp"><rect x="-70" y="-60" width="140" height="120" rx="4" fill="#fff" stroke="#141414" stroke-width="4"/><line x1="-62" y1="-50" x2="62" y2="-50" stroke="#B0A79C" stroke-width="3" stroke-dasharray="6 6"/><line x1="-62" y1="50" x2="62" y2="50" stroke="#B0A79C" stroke-width="3" stroke-dasharray="6 6"/></g></svg>`;
}
function fanFx(t) {
  const p = P(t, .8, 1.3, 'out'), y = mix(380, 252, p), r = (1 - p) * 10 * Math.sin(t * 8) + (p >= 1 ? 1.3 * Math.sin(t * 6) : 0);
  $('#tp').setAttribute('transform', `translate(320 ${y.toFixed(1)}) rotate(${r.toFixed(2)})`);
  const a = $('#air'); if (!a.childElementCount) { let s = ''; for (let i = 0; i < 4; i++) s += '<path d="M0 0q9-15 0-30t0-30" fill="none" stroke="#8EB0BB" stroke-width="6" stroke-linecap="round"/>'; a.innerHTML = s; }
  [...a.children].forEach((e, i) => { const ph = (t / 1.3 + i / 4) % 1; e.setAttribute('transform', `translate(${[214, 238, 402, 426][i]} ${(y - 10 - ph * (y - 230)).toFixed(1)})`); e.style.opacity = (Math.sin(Math.PI * ph) * .9).toFixed(2); });
}
