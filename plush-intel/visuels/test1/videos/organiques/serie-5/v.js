// Série 5 (27 nov.) : 3 formats nouveaux, tout en code + voix off. S01 quiz · S02 tier list · S03 red flags.
const VIDS = {};
const PIMG = '../../../../../../assets/produit/detoures/';
const PRELOAD = [PIMG + 'cut-face.png'];
const RED = '#C2412D', GREEN = '#2E6B4F';

function build(name, fn) {
  const d = DUR[name], scenes = [], cues = []; let T = 0;
  const add = (sc, segs = []) => { scenes.push(sc); segs.forEach(([i, t]) => cues.push({ f: `voix/${name}_${String(i).padStart(2, '0')}.wav`, t: T + t })); T += sc.d; };
  fn(d, add); return { scenes, cues };
}

// ===== S01 : quiz (fond sombre) =====
VIDS.S01 = Object.assign(build('S01-quiz', (d, add) => {
  const dots = k => `<div style="display:flex;gap:22px;justify-content:center">${[0, 1, 2].map(i => `<div style="width:28px;height:28px;border-radius:50%;background:${i < k ? '#8A4524' : i === k ? '#FBF8F3' : '#3d3834'}"></div>`).join('')}</div>`;
  add({ d: d[0] + .5, html: `<div class="main" style="gap:46px">
    <div class="big" style="font-size:250px;color:#FBF8F3" data-in="pop 0 .45">shower<br>quiz</div>
    <div style="display:flex;gap:18px" data-in="up .45 .4"><span class="pill">3 questions</span><span class="pill lt">no googling</span></div>
    <div data-in="up .7 .4">${dots(-1)}</div></div>` }, [[0, .1]]);
  const Q = [
    ['How much water does a <em style="white-space:nowrap">10-minute</em> shower use?', ['5 gallons', '15 gallons', '25 gallons'], 2, 'standard shower head: 2.5 gallons a minute (EPA)', 1, 2],
    ['What’s the <em>most chlorine</em> US tap water can legally have?', ['4 ppm', '1 ppm', '0.4 ppm'], 0, 'EPA legal maximum: 4 mg/L (= 4 ppm)', 3, 4],
    ['Before 1994, how much water could a shower head use <em>per minute</em>?', ['2.5 gallons', 'no limit', '1.8 gallons'], 1, 'the 2.5 GPM cap only started in 1994', 5, 6]];
  Q.forEach(([q, opts, ok, note, iq, ia], k) => {
    const tq = .12, tc = tq + d[iq] + .05, CD = 2.1, tr = tc + CD;
    add({ d: tr + d[ia] + .8, html: `<div class="main" style="gap:40px">
      <div style="display:flex;flex-direction:column;gap:18px;align-items:center">${dots(k)}<div style="font:500 30px Mono;color:#BFB3A7">question ${k + 1} of 3</div></div>
      <div class="h" style="color:#FBF8F3" data-in="up 0 .45">${q}</div>
      <div style="display:flex;flex-direction:column;gap:24px;width:880px">${opts.map((o, i) => `
       <div id="o${i}" data-in="left ${.3 + i * .14} .4" style="display:flex;align-items:center;gap:30px;height:126px;padding:0 34px;border-radius:26px;background:#24211F;border:4px solid #3d3834">
        <span style="width:72px;height:72px;border-radius:50%;border:4px solid #FBF8F3;display:flex;align-items:center;justify-content:center;font:500 36px Mono;flex:none">${'ABC'[i]}</span>
        <span style="font:600 54px Pop;flex:1">${o}</span>
        <svg width="66" height="66" viewBox="0 0 54 54" style="flex:none"><path id="ck${i}" d="M10 28L22 40L44 14" fill="none" stroke="#FBF8F3" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" style="opacity:0"/></svg></div>`).join('')}</div>
      <div style="position:relative;height:200px;width:880px">
       <svg id="tm" class="ab" style="left:345px;top:0;opacity:0" width="190" height="190" viewBox="0 0 190 190"><circle cx="95" cy="95" r="78" fill="none" stroke="#3d3834" stroke-width="14"/><circle id="tmr" cx="95" cy="95" r="78" fill="none" stroke="#E0A57E" stroke-width="14" stroke-linecap="round" pathLength="1" stroke-dasharray="1" transform="rotate(-90 95 95)"/><text id="tmn" x="95" y="125" text-anchor="middle" font-family="Anton" font-size="86" fill="#FBF8F3">3</text></svg>
       <div id="nt" class="ab" style="left:0;right:0;top:56px;text-align:center;font:500 32px/1.4 Mono;color:#E9DFD4;opacity:0">${note}</div></div>
     </div>`,
      fx(t) {
        const p = P(t, tc, CD, 'lin'); $('#tm').style.opacity = t < tc - .2 ? 0 : t < tr ? 1 : Math.max(0, 1 - (t - tr) / .2);
        $('#tmr').style.strokeDashoffset = p; $('#tmn').textContent = Math.max(1, Math.ceil(3 * (1 - p) - 1e-9));
        if (t >= tr) opts.forEach((_, i) => { const e = $('#o' + i); if (i === ok) { e.style.background = '#8A4524'; e.style.borderColor = '#8A4524'; e.style.transform = `scale(${(1 + .05 * Math.sin(Math.PI * Math.min(1, (t - tr) / .35))).toFixed(3)})`; } else e.style.opacity = Math.max(.3, 1 - (t - tr) / .3 * .7); });
        const ck = $('#ck' + ok); ck.style.opacity = t >= tr ? 1 : 0; ck.style.strokeDashoffset = 1 - P(t, tr + .08, .3);
        $('#nt').style.opacity = P(t, tr + .3, .4, 'lin');
      } }, [[iq, tq], [ia, tr + .05]]);
  });
  add({ d: d[7] + 1.7, html: `<div class="main" style="gap:48px">
    <div class="big" style="font-size:170px;color:#FBF8F3" data-in="up 0 .45">how many<br>did you get?</div>
    <div style="display:flex;gap:20px">${['0/3', '1/3', '2/3', '3/3'].map((x, i) => `<span data-in="pop ${.35 + i * .12} .4" style="font:500 54px Mono;padding:18px 26px;border-radius:18px;border:4px solid ${i === 3 ? '#8A4524' : '#FBF8F3'};background:${i === 3 ? '#8A4524' : 'transparent'}">${x}</span>`).join('')}</div>
    <div data-in="up .9 .4"><span class="pill lt" style="font-size:38px">comment your score</span></div>
    <div class="wm" style="margin-top:24px" data-in="up 1.2 .4">plush</div></div>` }, [[7, .1]]);
}), { cls: 'dark' });

// ===== S02 : tier list =====
const ICON = {
  speaker: `<svg width="300" height="300" viewBox="0 0 300 300"><rect x="80" y="40" width="140" height="220" rx="36" fill="#6B6660" stroke="#141414" stroke-width="8"/><circle cx="150" cy="185" r="46" fill="#C9C2B8" stroke="#141414" stroke-width="7"/><circle cx="150" cy="185" r="16" fill="#141414"/><circle cx="150" cy="95" r="20" fill="#C9C2B8" stroke="#141414" stroke-width="6"/><path d="M242 110q22 40 0 80M264 92q34 58 0 116" fill="none" stroke="#141414" stroke-width="8" stroke-linecap="round"/></svg>`,
  bottles: `<svg width="300" height="300" viewBox="0 0 300 300">${[62, 132, 202].map(x => `<rect x="${x}" y="110" width="56" height="150" rx="14" fill="#FBF8F3" stroke="#141414" stroke-width="7"/><rect x="${x + 18}" y="84" width="20" height="30" fill="#FBF8F3" stroke="#141414" stroke-width="6"/><rect x="${x + 12}" y="64" width="32" height="22" rx="5" fill="#141414"/><rect x="${x + 10}" y="160" width="36" height="52" rx="5" fill="#A86B45"/>`).join('')}</svg>`,
  liner: `<svg width="300" height="300" viewBox="0 0 300 300"><line x1="40" y1="60" x2="260" y2="60" stroke="#141414" stroke-width="10" stroke-linecap="round"/><path d="M60 72Q80 84 100 72Q120 84 140 72Q160 84 180 72Q200 84 220 72Q235 82 250 72L250 250Q230 262 210 250Q190 262 170 250Q150 262 130 250Q110 262 90 250Q75 258 60 250Z" fill="#FBF8F3" stroke="#141414" stroke-width="7" stroke-linejoin="round"/>${[95, 135, 175, 215].map(x => `<path d="M${x} 82L${x} 244" stroke="#C9C2B8" stroke-width="5"/>`).join('')}${[60, 100, 140, 180, 220, 250].map(x => `<circle cx="${x}" cy="62" r="9" fill="none" stroke="#141414" stroke-width="5"/>`).join('')}</svg>`,
  bulb: `<svg width="300" height="300" viewBox="0 0 300 300"><circle cx="150" cy="120" r="125" fill="#FFC37A" opacity=".35"/><path d="M150 40C100 40 72 80 72 118C72 154 96 172 110 196L114 220H186L190 196C204 172 228 154 228 118C228 80 200 40 150 40Z" fill="#FFE2B8" stroke="#141414" stroke-width="7"/><rect x="114" y="220" width="72" height="18" rx="5" fill="#C9C2B8" stroke="#141414" stroke-width="6"/><rect x="118" y="238" width="64" height="18" rx="5" fill="#C9C2B8" stroke="#141414" stroke-width="6"/><path d="M128 256H172L164 272H136Z" fill="#141414"/><text x="150" y="132" text-anchor="middle" font-family="Mono" font-weight="500" font-size="34" fill="#8A4524">2700K</text></svg>`,
  rod: `<svg width="300" height="300" viewBox="0 0 300 300"><rect x="30" y="40" width="240" height="120" rx="30" fill="#DCE7EA" stroke="#141414" stroke-width="7"/><path d="M20 175Q150 290 280 175Z" fill="#8A4524" opacity=".22"/><line x1="20" y1="175" x2="280" y2="175" stroke="#B0A79C" stroke-width="5" stroke-dasharray="10 9"/><path d="M20 175Q150 290 280 175" fill="none" stroke="#141414" stroke-width="11" stroke-linecap="round"/></svg>`,
};
VIDS.S02 = build('S02-tier', (d, add) => {
  const R = [['S', '#8A4524', '#FBF8F3'], ['A', '#A86B45', '#FBF8F3'], ['B', '#D2B79C', '#141414'], ['C', '#C9C2B8', '#141414'], ['D', '#6B6660', '#FBF8F3']];
  const Y0 = 620, RH = 168, rowY = r => Y0 + r * (RH + 8);
  const IT = [['Shower speaker', ICON.speaker, 4, 1.60], ['Matching bottles', ICON.bottles, 3, 1.49], ['Fabric liner', ICON.liner, 2, 1.45],
    ['Warm bulbs', ICON.bulb, 1, 1.48], ['Curved rod', ICON.rod, 1, 1.49], ['A shower head you love', `<img src="${PIMG}cut-face.png" style="width:340px">`, 0, 1.92]];
  const t0 = .12; let T = t0 + d[0] + .25; const times = [], cnt = [0, 0, 0, 0, 0];
  IT.forEach((it, j) => { const tA = T; times.push({ tA, tF: tA + .05 + it[3], k: cnt[it[2]]++ }); T = tA + .05 + d[j + 1] + .25; });
  const tEnd = T;
  add({ d: tEnd + .05 + d[7] + 1.8, html: `
   <div id="ttl" class="ab" style="top:400px;left:0;right:0;text-align:center;z-index:6"><div class="big" style="font-size:118px" data-in="pop 0 .45">bathroom upgrades</div><div class="cap" style="margin-top:14px" data-in="up .3 .4">ranked by how much you’ll notice them</div></div>
   <div id="end" class="ab" style="top:386px;left:0;right:0;text-align:center;opacity:0;z-index:6"><div class="big" style="font-size:122px">what would you move?</div><div style="margin-top:18px"><span class="pill">tell me in the comments</span></div></div>
   ${R.map(([l, bg, fg], r) => `<div class="ab" data-in="left ${.15 + r * .1} .45" style="left:70px;top:${rowY(r)}px;width:940px;height:${RH}px;display:flex">
     <div id="lab${r}" style="width:${RH}px;height:${RH}px;background:${bg};color:${fg};border-radius:20px 0 0 20px;display:flex;align-items:center;justify-content:center;font:400 110px Anton">${l}</div>
     <div style="flex:1;background:#ECE5DC;border-radius:0 20px 20px 0"></div></div>`).join('')}
   <div id="bd" class="ab" style="inset:0;background:#F6F2ED;opacity:0;z-index:5"></div>
   ${IT.map(([lab, ic], j) => `<div id="it${j}" class="ab card" style="left:0;top:0;width:440px;height:440px;transform-origin:0 0;opacity:0">${ic}</div>
     <div id="lb${j}" class="ab" style="left:0;right:0;top:1230px;text-align:center;font:700 64px Pop;opacity:0;z-index:10">${lab}</div>`).join('')}
   <div id="bias" class="ab" style="left:430px;top:${rowY(0) + 50}px;opacity:0;z-index:2"><span class="pill" style="font-size:34px">we’re biased</span></div>`,
  fx(t) {
    let feat = 0;
    IT.forEach((it, j) => {
      const { tA, tF, k } = times[j], e = $('#it' + j), lb = $('#lb' + j), sx = 70 + RH + 16 + k * 156, sy = rowY(it[2]) + 14;
      if (t < tA) { e.style.opacity = 0; lb.style.opacity = 0; return; }
      e.style.opacity = 1; e.style.zIndex = t < tF + .45 ? 10 : 1;
      if (t < tF) { const s = .55 + .45 * P(t, tA, .38, 'back'); e.style.transform = `translate(${540 - 220 * s}px,${960 - 220 * s}px) scale(${s})`; lb.style.opacity = P(t, tA + .1, .25, 'lin'); feat = Math.max(feat, P(t, tA, .25, 'lin')); }
      else {
        const p = P(t, tF, .45, 'io'); e.style.transform = `translate(${mix(320, sx, p)}px,${mix(740, sy, p)}px) scale(${mix(1, 140 / 440, p)})`;
        lb.style.opacity = 1 - P(t, tF, .2, 'lin'); feat = Math.max(feat, 1 - P(t, tF, .35, 'lin'));
        $('#lab' + it[2]).style.transform = `scale(${1 + .12 * Math.sin(Math.PI * P(t, tF + .4, .35, 'lin'))})`;
      }
    });
    $('#bd').style.opacity = (.86 * feat).toFixed(3);
    const b = $('#bias'), tb = times[5].tF + .55; b.style.opacity = P(t, tb, .25, 'lin'); b.style.transform = `rotate(-4deg) scale(${.6 + .4 * P(t, tb, .35, 'back')})`;
    const pe = P(t, tEnd, .4, 'out'); $('#ttl').style.opacity = 1 - pe; $('#end').style.opacity = pe; $('#end').style.transform = `translateY(${(1 - pe) * 40}px)`;
  } }, [[0, t0], ...IT.map((_, j) => [j + 1, times[j].tA + .05]), [7, tEnd + .05]]);
});

// ===== S03 : red flags en visite d'appart =====
const flagSVG = (id, w, c = RED) => `<svg width="${w}" height="${w * 1.25}" viewBox="0 0 240 300" overflow="visible"><rect x="38" y="14" width="16" height="280" rx="8" fill="#141414"/><path id="${id}" d="" fill="${c}" stroke="#141414" stroke-width="7" stroke-linejoin="round"/></svg>`;
function wave(id, t, A = 10) {
  let top = '', bot = ''; for (let x = 54; x <= 222; x += 8) { const w = A * Math.sin(2 * Math.PI * (x / 120 - t * 1.3)) * (x - 54) / 168; top += ` L${x} ${(28 + w).toFixed(1)}`; bot = ` L${x} ${(158 + w).toFixed(1)}` + bot; }
  const e = $('#' + id); if (e) e.setAttribute('d', `M54 28${top}${bot} Z`);
}
const hdr = n => `<div style="display:flex;align-items:center;gap:20px" data-in="up 0 .4">${flagSVG('f' + n, 70)}<span id="fl${n}" style="font:500 40px Mono;color:${RED};letter-spacing:.08em">RED FLAG #${n}</span></div>`;
function caulk() {
  let g = '', s = '', seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  for (let x = 0; x <= 860; x += 143) g += `<line x1="${x}" y1="0" x2="${x}" y2="330" stroke="#D3CBC1" stroke-width="5"/>`;
  for (let y = 44; y < 330; y += 143) g += `<line x1="0" y1="${y}" x2="860" y2="${y}" stroke="#D3CBC1" stroke-width="5"/>`;
  for (let i = 0; i < 24; i++) { const x = 40 + rnd() * 780, y = 334 + rnd() * 16 - (rnd() < .3 ? 30 : 0), r = 4 + rnd() * 8; s += `<circle class="sp" cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="0" data-r="${r.toFixed(1)}" fill="#1B1A18" opacity=".88"/>`; }
  return `<svg width="860" height="480" viewBox="0 0 860 480"><rect width="860" height="330" fill="#EFEAE3"/>${g}<rect x="0" y="352" width="860" height="128" fill="#FBF8F3"/><line x1="0" y1="352" x2="860" y2="352" stroke="#141414" stroke-width="6"/><rect x="0" y="322" width="860" height="34" rx="17" fill="#F7F4EF" stroke="#C9C2B8" stroke-width="4"/>${s}<rect width="860" height="480" fill="none" stroke="#141414" stroke-width="6" rx="12"/></svg>`;
}
VIDS.S03 = build('S03-redflags', (d, add) => {
  add({ d: .1 + d[0] + .4, html: `<div class="main" style="gap:40px">
   <div data-in="pop 0 .45">${flagSVG('fh', 230)}</div>
   <div class="big" style="font-size:170px" data-in="up .15 .45">touring an<br>apartment?</div>
   <div class="p" style="font-weight:600" data-in="up .5 .4">Check the bathroom for these.</div></div>`, fx(t) { wave('fh', t, 14); } }, [[0, .1]]);
  add({ d: .1 + d[1] + 1.0, html: `<div class="main" style="gap:34px">${hdr(1)}
   <div class="h" data-in="up .1 .4">No fan. Or it fails the <em style="color:${RED}">paper test</em>.</div>
   <div style="position:relative" data-in="up .2 .45">${fan()}<svg id="xx" class="ab" style="left:430px;top:300px;opacity:0" width="130" height="130" viewBox="0 0 100 100"><path d="M20 20L80 80M80 20L20 80" stroke="${RED}" stroke-width="15" stroke-linecap="round"/></svg></div>
   <div class="cap" data-in="up 1.4 .4">tissue doesn’t stick = the fan isn’t pulling</div></div>`,
    fx(t) { wave('f1', t, 8); const up = P(t, .4, .8, 'out'), dn = P(t, 1.6, .7, 'io'); $('#tp').setAttribute('transform', `translate(320 ${mix(mix(380, 280, up), 392, dn).toFixed(1)}) rotate(${(8 * Math.sin(t * 7) * (1 - dn) + 25 * dn).toFixed(1)})`); const x = $('#xx'); x.style.opacity = P(t, 2.0, .2, 'lin'); x.style.transform = `scale(${.5 + .5 * P(t, 2.0, .35, 'back')})`; } }, [[1, .1]]);
  add({ d: .1 + d[2] + 1.1, html: `<div class="main" style="gap:40px">${hdr(2)}
   <div class="h" data-in="up .1 .4">Black spots in the <em style="color:${RED}">caulk</em>.</div>
   <div data-in="up .2 .45">${caulk()}</div>
   <div class="cap" data-in="up 1.5 .4">= moisture that never dries</div></div>`,
    fx(t) { wave('f2', t, 8); $$('.sp').forEach((e, i) => e.setAttribute('r', (e.dataset.r * P(t, .45 + i * .06, .25, 'back')).toFixed(1))); } }, [[2, .1]]);
  add({ d: .1 + d[3] + 1.7, html: `<div class="main" style="gap:30px">${hdr(3)}
   <div class="h" data-in="up .1 .4">Weak spray? Time a <em style="color:${RED};white-space:nowrap">1-gallon jug</em>.</div>
   <div style="display:flex;align-items:flex-end;gap:50px" data-in="up .2 .45">${jug()}<div style="display:flex;flex-direction:column;align-items:center;gap:22px;padding-bottom:30px">
     <div style="background:#1D1A17;border-radius:24px;padding:16px 34px;white-space:nowrap"><span id="sw" style="font:500 110px Mono;color:#FBF8F3">00.0</span><span style="font:500 48px Mono;color:#BFB3A7"> s</span></div>
     <div id="rs" style="opacity:0"><span class="pill red" style="font-size:36px">60 ÷ 40 = 1.5 GPM</span></div></div></div>
   <div class="cap" data-in="up .6 .4">60 ÷ seconds = your real GPM</div></div>`,
    fx(t) { wave('f3', t, 8); const p = P(t, .5, 2.6, 'lin'), lvl = 380 - p * 252; let dd = `M60 ${lvl}`; for (let x = 60; x <= 280; x += 10) dd += ` L${x} ${(lvl + (p > 0 && p < 1 ? 5 : 2) * Math.sin(x / 18 + t * 7)).toFixed(1)}`; $('#wat').setAttribute('d', dd + ' L280 400 L60 400 Z'); const st = $('#stream'); st.setAttribute('x', 142.5); st.setAttribute('width', 9); st.setAttribute('height', p > 0 && p < 1 ? Math.max(0, lvl + 40) : 0); $('#sw').textContent = (40 * p).toFixed(1).padStart(4, '0'); const r = $('#rs'); r.style.opacity = P(t, 3.15, .2, 'lin'); r.style.transform = `rotate(-3deg) scale(${.5 + .5 * P(t, 3.15, .4, 'back')})`; } }, [[3, .1]]);
  add({ d: .1 + d[4] + .9, html: `<div class="main" style="gap:26px">${hdr(4).replace('RED FLAG #4', 'RED FLAG #4?')}
   <div class="big" style="font-size:190px" data-in="pop .05 .45">pool smell?</div>
   <div style="position:relative">${ring()}<div id="nr" class="ab" style="left:50%;top:150px;opacity:0"><span style="display:inline-block;font:400 92px Anton;color:${GREEN};border:8px solid ${GREEN};border-radius:18px;padding:6px 26px;background:rgba(246,242,237,.92);white-space:nowrap">NOT A RED FLAG</span></div></div>
   <div id="ex" class="p" style="font-weight:600;opacity:0">Your city adds chlorine on purpose.</div></div>`,
    fx(t) { const fl = t > 1.7; wave('f4', t, 8); $('#f4').setAttribute('fill', fl ? GREEN : RED); const L = $('#fl4'); L.textContent = fl ? 'NOT A RED FLAG' : 'RED FLAG #4?'; L.style.color = fl ? GREEN : RED; ringFx(t);
      const n = $('#nr'); n.style.opacity = P(t, 1.7, .12, 'lin'); n.style.transform = `translateX(-50%) rotate(-8deg) scale(${(1.6 - .6 * P(t, 1.7, .4, 'back')).toFixed(3)})`; $('#ex').style.opacity = P(t, 2.7, .35, 'lin'); } }, [[4, .1]]);
  add({ d: .15 + d[5] + 1.8, html: `<div class="main" style="gap:44px">
   <div data-in="pop 0 .4">${flagSVG('f5', 120)}</div>
   <div class="big" style="font-size:132px" data-in="up .1 .45">what’s the worst<br>bathroom you’ve<br>ever toured?</div>
   <div data-in="up .8 .4"><span class="pill lt" style="font-size:38px">tell me in the comments</span></div>
   <div class="wm" style="margin-top:20px" data-in="up 1.1 .4">plush</div></div>`, fx(t) { wave('f5', t, 12); } }, [[5, .15]]);
});
