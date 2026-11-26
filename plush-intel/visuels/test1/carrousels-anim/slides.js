// Contenu des carrousels C6 à C10 (26 nov. 2026). Chiffres sourcés en bas de chaque slide.

// ===== C6 : 6 minutes de douche = 1 mois d'eau bue =====
S['C6-1'] = { dur: 6, html: H(1, 5, 'swipe', 0) + `<div class="main" style="gap:24px">
 <div style="position:relative"><div class="big" style="font-size:215px">6 minutes</div>
  <div class="ab" style="right:-30px;top:-44px;transform:rotate(4deg)"><span class="pill">in the shower</span></div></div>
 <div style="display:grid;grid-template-columns:repeat(10,64px);gap:16px 24px;margin:26px 0">${Array.from({ length: 30 }, (_, i) => `<div data-bob="5 2.6 ${((i % 10) * .06 + Math.floor(i / 10) * .17).toFixed(2)} 0">${glass(64)}</div>`).join('')}</div>
 <div style="position:relative"><div class="big" style="font-size:215px">= 1 month</div>
  <div class="ab" style="left:-30px;bottom:-46px;transform:rotate(-3deg)"><span class="pill">of drinking water</span></div></div>
</div>` };

S['C6-2'] = { dur: 7, html: H(2, 5, 'per family', 2.7) + `<div class="main" style="gap:34px">
 <div class="h" data-in="up 0 .5">A month of drinking water is <b>15&nbsp;gallons</b>. So is a <em>6-minute</em> shower.</div>
 ${bars('gallons of water', [{ v: 15, l: 'you drink<br>30 days', c: '#FBF8F3' }, { v: 15, l: 'shower<br>6 min' }, { v: 25, l: 'shower<br>10 min' }, { v: 37.5, l: 'shower<br>15 min', dec: 1 }], 40, { at: .5, h: 440 })}
 <div class="p" data-in="up 2.3 .5">8 cups a day is half a gallon. A standard shower head runs <b>2.5 gallons a minute</b>.</div>
 <div class="src" data-in="up 2.6 .5">EPA WaterSense: standard showerheads use 2.5 gallons per minute · 8 cups = 0.5 gallon a day</div>
</div>` };

S['C6-3'] = { dur: 7, html: H(3, 5, 'so what?', 2.8) + `<div class="main" style="gap:14px">
 <div class="cap" style="color:#5b524a;font-size:30px" data-in="up 0 .5">just for showers, per family, per day</div>
 <div style="display:flex;align-items:baseline;gap:22px" data-in="up .1 .5"><span class="big" style="font-size:92px">nearly</span><span class="big" style="font-size:300px;min-width:300px" data-num="40 0 .3 1.4">0</span><span class="big" style="font-size:112px">gallons</span></div>
 <div style="display:flex;align-items:center;gap:46px;margin-top:20px" data-in="up 1.2 .5">${donut()}
  <div style="font:500 42px/1.3 Pop;max-width:450px;text-align:left">That’s <b>nearly 17%</b> of all the water used inside a US home.</div></div>
 <div class="src" style="margin-top:34px" data-in="up 2.2 .5">EPA WaterSense: showering is nearly 17% of residential indoor water use, nearly 40 gallons a day for the average family</div>
</div>`, fx(t) { donutFx(t, 17, 1.5, 1.3); } };

S['C6-4'] = { dur: 7, html: H(4, 5, 'save this', 2.6) + `<div class="main" style="gap:22px">
 <div class="big" style="font-size:150px" data-in="up 0 .5">the water<br>you stand in</div>
 <div class="p" data-in="up .3 .5">You think about the water you drink. Few people think about this one.</div>
 <div style="position:relative;height:420px;width:920px" data-in="pop .6 .7">
  <div class="ab" style="left:250px;top:-10px" data-bob="10 3 0 1.5">${productImg('cut-side.png', 430)}</div>
  <div class="ab" style="left:10px;top:70px" data-in="pop 1.3 .5" data-r="-4"><span class="pill">6-layer cartridge</span></div>
  <div class="ab" style="right:0;top:300px" data-in="pop 1.6 .5" data-r="3"><span class="pill lt">3 steps, no tools</span></div></div>
 <div class="p" style="font-size:33px" data-in="up 1.9 .5"><b>Plush</b> is designed to reduce chlorine and sediment. New cartridge every 3 months.</div>
 <div class="src" data-in="up 2.2 .5">${DISC}</div>
</div>` };

S['C6-5'] = { dur: 8, html: H(5, 5) + `<div class="main" style="gap:30px">
 <div class="big" style="font-size:200px" data-in="up 0 .5">save this</div>
 ${check('your shower math', ['Time your next shower.', 'Minutes × 2.5 = gallons.', 'Look up your city’s water report.', 'Decide if a filter makes sense for you.'], .5)}
 <div class="p" data-in="up 2.9 .5">No guilt. Just know what you’re standing in.</div>
 <div class="cta" data-in="pop 3.3 .5">How long are your showers? Be honest.</div>
</div>` };

// ===== C7 : le chiffre gravé sur ton pommeau (GPM) =====
S['C7-1'] = { dur: 6, html: H(1, 5, 'swipe', 0) + `<div class="main" style="gap:8px">
 <div class="big" style="font-size:205px">read your</div>
 <div style="position:relative;margin:74px 0 14px">${headFace(490, { lens: true })}
  <div class="ab" style="right:-230px;top:215px;transform:rotate(5deg)"><span class="pill">there’s a number on it</span></div></div>
 <div class="big" style="font-size:185px">shower head</div>
</div>`, fx(t) { lensFx(t); } };

S['C7-2'] = { dur: 7, html: H(2, 5, 'what it means', 2.4) + `<div class="main" style="gap:40px">
 <div class="h" data-in="up 0 .5">Look for a tiny stamp, like <em>2.5 GPM</em></div>
 <div style="position:relative" data-in="pop .3 .6">${headFace(600)}
  <svg class="ab" style="left:0;top:0" width="600" height="600" viewBox="0 0 420 420" overflow="visible"><ellipse cx="210" cy="34" rx="122" ry="42" fill="none" stroke="#8A4524" stroke-width="8" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" data-draw="1 .7"/></svg>
  <div class="ab" style="right:-175px;top:160px" data-in="pop 1.6 .5" data-r="5"><span class="pill">gallons per minute</span></div></div>
 <div class="p" data-in="up 1.9 .5">It’s on the face ring or the neck. Tilt it and use your phone flashlight.</div>
</div>` };

S['C7-3'] = { dur: 7, html: H(3, 5, 'test yours', 2.8) + `<div class="main" style="gap:32px">
 <div class="h" data-in="up 0 .5">The legal max <b>keeps dropping</b></div>
 ${bars('max flow allowed, gallons per minute', [{ v: 3.3, l: 'before 1994<br>no US limit', c: '#6B6660', txt: 'no limit', fs: 30 }, { v: 2.5, l: '1994<br>US law', dec: 1 }, { v: 2, l: '2010<br>WaterSense', dec: 1 }, { v: 1.8, l: '2018<br>California', dec: 1 }], 3.3, { at: .5, h: 440 })}
 <div class="p" data-in="up 2.4 .5">No number at all? It could be <b>older than 1994</b>.</div>
 <div class="src" data-in="up 2.7 .5">Energy Policy Act of 1992: 2.5 gpm max at 80 psi, from 1994 · EPA WaterSense label: 2.0 gpm max · California: 1.8 gpm since 2018</div>
</div>` };

S['C7-4'] = { dur: 7, html: H(4, 5, 'save this', 3.8) + `<div class="main" style="gap:20px">
 <div class="big" style="font-size:170px" data-in="up 0 .5">the jug test</div>
 <div style="display:flex;align-items:flex-end;gap:56px;margin-top:40px">
  <div data-in="up .2 .5">${jug()}</div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:20px;padding-bottom:24px">
   <div class="cap" style="color:#5b524a;font-size:28px" data-in="up .3 .5">fill 1 gallon, time it</div>
   <div class="card" style="padding:16px 36px;white-space:nowrap" data-in="up .35 .5"><span id="sw" style="font:500 108px Mono;color:#FBF8F3">00.0</span><span style="font:500 46px Mono;color:#BFB3A7"> s</span></div>
   <div data-in="pop 3.1 .5" data-r="-3"><span class="pill" style="font-size:36px">60 ÷ 24 = 2.5 GPM</span></div></div></div>
 <div style="font:500 31px Mono;display:flex;gap:34px;margin-top:8px" data-in="up 3.4 .5"><span>24 s → 2.5</span><span>30 s → 2.0</span><span>33 s → 1.8</span></div>
 <div class="p" style="font-size:33px" data-in="up 3.6 .5">The stamp is a max at 80 psi. Your real flow depends on your water pressure.</div>
</div>`, fx(t) { jugFx(t); } };

S['C7-5'] = { dur: 8, html: H(5, 5) + `<div class="main" style="gap:30px">
 <div class="big" style="font-size:200px" data-in="up 0 .5">save this</div>
 ${check('check your flow', ['Find the stamp on your shower head.', 'Fill a 1-gallon jug. Time it.', '60 ÷ seconds = your real GPM.', 'Renting? Keep the old head for move-out.'], .5)}
 <div class="p" data-in="up 2.9 .5">Next up: we jug-test Plush. Follow for the number.</div>
 <div class="cta" data-in="pop 3.3 .5">Comment the number on yours.</div>
</div>` };

// ===== C8 : l'odeur de piscine, c'est voulu =====
S['C8-1'] = { dur: 6, html: H(1, 6, 'swipe', 0) + `<div class="main" style="gap:0">
 <div class="big" style="font-size:196px">that pool<br>smell</div>
 <div style="position:relative;margin:4px 0 0">${ring()}<div class="ab" style="right:-50px;top:0;transform:rotate(5deg)"><span class="pill">in your shower</span></div></div>
 <div class="big" style="font-size:170px">is on purpose.</div>
</div>`, fx(t) { ringFx(t); } };

S['C8-2'] = { dur: 7, html: H(2, 6, 'how much?', 2.6) + `<div class="main" style="gap:44px">
 <div class="h" data-in="up 0 .5">Your city <b>adds chlorine</b> to keep water <em>safe</em> on the way to you</div>
 <div data-in="up .3 .6">${pipe()}</div>
 <div class="p" data-in="up 1.6 .5">Miles of pipe between the plant and your tap. Chlorine keeps germs out the whole way.</div>
 <div class="src" data-in="up 2 .5">CDC: chlorine and chloramine are the main disinfectants used in US public water systems · first used in US city water in 1908</div>
</div>`, fx(t) { pipeFx(t); } };

S['C8-3'] = { dur: 7, html: H(3, 6, 'why the shower?', 3) + `<div class="main" style="gap:36px">
 <div class="h" data-in="up 0 .5">Same chemical. <b>Different amounts.</b></div>
 <div class="card" style="padding:36px 30px 22px" data-in="up .2 .6"><div class="cap">chlorine, in parts per million (ppm)</div>${ruler()}</div>
 <div class="p" data-in="up 2.6 .5">Tap water can legally hold up to <b>4 ppm</b>. Your city’s real level is in its water report.</div>
 <div class="src" data-in="up 2.9 .5">CDC: free chlorine at least 1 ppm in pools, at least 3 ppm in hot tubs · EPA: 4 mg/L (= 4 ppm) maximum for chlorine in drinking water</div>
</div>`, fx(t) { rulerFx(t); } };

S['C8-4'] = { dur: 7, html: H(4, 6, 'which one?', 2.6) + `<div class="main" style="gap:30px">
 <div class="h" data-in="up 0 .5">Why you smell it <b>more in the shower</b></div>
 <div>${steam()}</div>
 <div style="display:flex;gap:16px" data-in="up 1.2 .5"><span class="pill">heat</span><span class="pill lt">+ spray</span><span class="pill">= chlorine in the air</span></div>
 <div class="p" data-in="up 1.7 .5">Heat and spray help chlorine leave the water as a gas. Small room, door closed: you smell it.</div>
</div>`, fx(t) { steamFx(t); } };

S['C8-5'] = { dur: 7, html: H(5, 6, 'save this', 2.8) + `<div class="main" style="gap:26px">
 <div class="big" style="font-size:150px" data-in="up 0 .5">chlorine or<br>chloramine?</div>
 <div data-in="up .3 .5">${toggle()}</div>
 <div class="p" data-in="up .7 .5">More than <b>1 in 5 Americans</b> get chloramine instead (EPA). Your water report says which one you have.</div>
 <div style="display:flex;align-items:center;gap:26px" data-in="up 1.4 .6">
  <div data-bob="8 3 0 1.5">${productImg('cut-mount.png', 340)}</div>
  <span class="pill" style="white-space:normal;max-width:470px;line-height:1.35;transform:rotate(-3deg)">Plush is designed to reduce chlorine</span></div>
 <div class="src" data-in="up 2 .5">${DISC}</div>
</div>`, fx(t) { toggleFx(t); } };

S['C8-6'] = { dur: 8, html: H(6, 6) + `<div class="main" style="gap:28px">
 <div class="big" style="font-size:200px" data-in="up 0 .5">save this</div>
 ${check('pool smell, explained', ['It’s chlorine, added on purpose.', 'Tap water can hold up to 4 ppm (EPA).', 'Hot showers release more of it.', 'Your report says chlorine or chloramine.'], .5)}
 <div class="p" data-in="up 2.9 .5">A shower filter is designed to reduce chlorine. That’s the whole job.</div>
 <div class="cta" data-in="pop 3.3 .5">Does your shower smell like a pool? Comment your city.</div>
</div>` };

// ===== C9 : la douche d'hôtel, chez toi =====
S['C9-1'] = { dur: 6, html: H(1, 7, 'swipe', 0) + `<div class="main" style="gap:0">
 <div class="big" style="font-size:190px">hotel shower</div>
 <div style="position:relative;margin:26px 0 50px">${hanger()}<div class="ab" style="left:50%;bottom:-38px;transform:translateX(-50%) rotate(-4deg)"><span class="pill">5 renter-friendly tricks</span></div></div>
 <div class="big" style="font-size:210px">at home.</div>
</div>`, fx(t) { hangerFx(t); } };

S['C9-2'] = { dur: 7, html: H(2, 7, 'trick 2', 2.6) + `<div class="main" style="gap:36px">
 <div class="h" data-in="up 0 .5">${NUM('01')}A <em>curved</em> shower rod</div>
 <div data-in="up .2 .6">${tub()}</div>
 <div class="p" data-in="up 2.1 .5">It bows out past the tub, so the curtain stops sticking to you. Tension rods need no drilling.</div>
</div>`, fx(t) { tubFx(t); } };

S['C9-3'] = { dur: 7, html: H(3, 7, 'trick 3', 3) + `<div class="main" style="gap:30px">
 <div class="h" data-in="up 0 .5">${NUM('02')}<em>Warm</em> bulbs: look for 2700K</div>
 <div style="display:flex;align-items:center;gap:30px" data-in="up .2 .6">${bulb()}<div id="kv" class="big" style="font-size:190px;width:470px;text-align:left">6500K</div></div>
 ${kelvin()}
 <div class="p" data-in="up 2.6 .5">That cozy hotel glow is warm white. Check the box before you buy.</div>
</div>`, fx(t) { kelvinFx(t); } };

S['C9-4'] = { dur: 7, html: H(4, 7, 'trick 4', 3.2) + `<div class="main" style="gap:40px">
 <div class="h" data-in="up 0 .5">${NUM('03')}<em>Three</em> bottles. Not eleven.</div>
 <div style="display:flex;align-items:baseline;gap:22px" data-in="up .1 .5"><span id="bc" class="big" style="font-size:170px;min-width:150px;text-align:right">11</span><span style="font:500 34px Mono">bottles on the shelf</span></div>
 <div data-in="up .2 .5">${bottles()}</div>
 <div class="p" data-in="up 3 .5">Shampoo, conditioner, body wash. Everything else can live under the sink.</div>
</div>`, fx(t) { bottlesFx(t); } };

S['C9-5'] = { dur: 7, html: H(5, 7, 'trick 5', 2.4) + `<div class="main" style="gap:30px">
 <div class="h" data-in="up 0 .5">${NUM('04')}A <em>fabric</em> liner</div>
 <div style="position:relative" data-in="up .2 .6">${curtain()}<div class="ab" style="right:-40px;top:130px" data-in="pop 1.2 .5" data-r="4"><span class="pill">machine-washable</span></div></div>
 <div class="p" data-in="up 1.6 .5">Hotel-style liners are fabric. They hang heavier and go in the wash. Wash yours monthly.</div>
</div>`, fx(t) { curtainFx(t); } };

S['C9-6'] = { dur: 7, html: H(6, 7, 'save this', 2.6) + `<div class="main" style="gap:24px">
 <div class="h" data-in="up 0 .5">${NUM('05')}The <em>shower head</em> itself</div>
 <div style="position:relative;height:470px;width:920px" data-in="pop .3 .7">
  <div class="ab" style="left:225px;top:0" data-bob="10 3 0 1.5">${productImg('cut-side.png', 470)}</div>
  <div class="ab" style="left:0;top:90px" data-in="pop 1 .5" data-r="-4"><span class="pill">3 steps, no tools</span></div>
  <div class="ab" style="right:0;top:330px" data-in="pop 1.3 .5" data-r="3"><span class="pill lt">keep the old one</span></div></div>
 <div class="p" data-in="up 1.6 .5">It’s the one thing you touch every day. Bag the old one for move-out.</div>
 <div class="src" data-in="up 2 .5">Plush: 6-layer cartridge designed to reduce chlorine and sediment, changed every 3 months. ${DISC}</div>
</div>` };

S['C9-7'] = { dur: 8, html: H(7, 7) + `<div class="main" style="gap:26px">
 <div class="big" style="font-size:190px" data-in="up 0 .5">save this</div>
 ${check('hotel shower checklist', ['Curved tension rod.', '2700K warm bulbs.', '3 bottles on the shelf.', 'Fabric liner, washed monthly.', 'A shower head you actually like.'], .5)}
 <div class="p" data-in="up 3.2 .5">None of it needs a drill.</div>
 <div class="cta" data-in="pop 3.5 .5">Which one are you doing first? 1 to 5.</div>
</div>` };

// ===== C10 : la vapeur reste (humidité, locataires) =====
S['C10-1'] = { dur: 6, html: H(1, 5, 'swipe', 0) + `<div class="main" style="gap:0">
 <div class="big" style="font-size:210px">the steam</div>
 <div style="position:relative;margin:22px 0 14px">${mirror()}<div class="ab" style="right:-200px;top:110px;transform:rotate(5deg)"><span class="pill">renters, save this</span></div></div>
 <div class="big" style="font-size:190px">stays behind</div>
</div>`, fx(t) { mirrorFx(t); } };

S['C10-2'] = { dur: 7, html: H(2, 5, 'after every shower', 2.8) + `<div class="main" style="gap:34px">
 <div class="h" data-in="up 0 .5">Keep your bathroom <em>30 to 50%</em> humid</div>
 <div data-in="up .2 .6">${gauge()}</div>
 <div class="p" data-in="up 2.3 .5">Above 60%, mold gets comfortable. Run the fan or crack a window when you shower.</div>
 <div class="src" data-in="up 2.6 .5">EPA, A Brief Guide to Mold, Moisture and Your Home: keep indoor humidity below 60%, ideally 30-50% · run the bathroom fan or open the window when showering</div>
</div>`, fx(t) { gaugeFx(t); } };

S['C10-3'] = { dur: 7, html: H(3, 5, 'test your fan', 3) + `<div class="main" style="gap:34px">
 <div class="big" style="font-size:165px" data-in="up 0 .5">after every<br>shower</div>
 <div class="card" style="width:920px;padding:34px 50px" data-in="up .2 .6">
 ${['Fan on. Door cracked.', 'Squeegee the walls. 30 seconds.', 'Close the curtain so it dries flat.', 'Towel on a hook, not the floor.'].map((x, i) => `<div style="display:flex;align-items:center;gap:28px;margin:14px 0" data-in="left ${.6 + i * .35} .5"><span class="big" style="font-size:86px;color:#E0A57E;width:92px">0${i + 1}</span><span style="font:600 41px/1.25 Pop;color:#FBF8F3">${x}</span></div>`).join('')}</div>
 <div class="p" data-in="up 2.3 .5">Leak or wet spot? The EPA says dry it within 24 to 48 hours.</div>
</div>` };

S['C10-4'] = { dur: 7, html: H(4, 5, 'save this', 3) + `<div class="main" style="gap:24px">
 <div class="big" style="font-size:165px" data-in="up 0 .5">the paper test</div>
 <div data-in="up .2 .5">${fan()}</div>
 <div class="p" data-in="up 2.2 .5">Hold one square of toilet paper under the fan. <b>If it doesn’t stick, the fan isn’t pulling.</b></div>
 <div data-in="pop 2.7 .5" data-r="-2"><span class="pill" style="font-size:27px">renting? that’s your landlord’s fix. ask in writing.</span></div>
</div>`, fx(t) { fanFx(t); } };

S['C10-5'] = { dur: 8, html: H(5, 5) + `<div class="main" style="gap:26px">
 <div class="big" style="font-size:190px" data-in="up 0 .5">save this</div>
 ${check('after-shower routine', ['Fan on, during and after.', 'Squeegee: 30 seconds.', 'Curtain closed and flat.', 'Towel on a hook.', 'Fan fails the paper test? Email your landlord.'], .5)}
 <div class="p" data-in="up 3.2 .5">Your deposit will thank you.</div>
 <div class="cta" data-in="pop 3.5 .5">Does your bathroom even have a fan? Yes or no.</div>
</div>` };
