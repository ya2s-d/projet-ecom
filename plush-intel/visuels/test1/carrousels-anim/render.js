// node render.js [--still] [IDs...]  ->  <dossier>/NN.mp4 (Instagram) + NN.png (TikTok)
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path');
const D = __dirname;
const OUT = { C6: 'C6-6-minutes-1-mois', C7: 'C7-lis-ton-pommeau', C8: 'C8-odeur-de-piscine', C9: 'C9-douche-d-hotel', C10: 'C10-la-vapeur-reste' };
const args = process.argv.slice(2), f916 = args.includes('--f916'), still = f916 || args.includes('--still');
let ids = args.filter(a => !a.startsWith('--'));
const FPS = 30;

(async () => {
  const b = await chromium.launch();
  if (!ids.length || ids.every(i => !i.includes('-'))) {
    const p = await b.newPage(); await p.goto('file://' + D + '/index.html?id=C6-1');
    const all = await p.evaluate(() => Object.keys(S)); await p.close();
    ids = ids.length ? all.filter(k => ids.includes(k.split('-')[0])) : all;
  }
  let i = 0;
  async function one(id) {
    const page = await b.newPage({ viewport: { width: 1080, height: f916 ? 1920 : 1350 }, deviceScaleFactor: 1 });
    await page.goto('file://' + D + '/index.html?id=' + id + (f916 ? '&f=916' : ''));
    await page.evaluate(async () => {
      await Promise.all(['50px Anton', '500 50px Mono', '400 50px Mono', '500 50px Pop', '600 50px Pop', '700 50px Pop', '700 50px LS'].map(f => document.fonts.load(f)));
      await document.fonts.ready;
      await Promise.all([...document.images].map(im => im.decode().catch(() => {})));
      fit();
    });
    const dur = await page.evaluate(() => cur.dur || 7);
    const [c, s] = id.split('-'); const dir = path.join(D, f916 ? 'tiktok-9x16' : OUT[c]); fs.mkdirSync(dir, { recursive: true });
    const base = path.join(dir, (f916 ? c + '-' : '') + String(s).padStart(2, '0'));
    if (!still) {
      const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', '' + FPS, '-c:v', 'png', '-i', '-',
        '-vf', 'scale=out_color_matrix=bt709:out_range=tv,format=yuv420p', '-c:v', 'libx264', '-preset', 'medium', '-crf', '17',
        '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-movflags', '+faststart', base + '.mp4']);
      const n = Math.round(dur * FPS);
      for (let f = 0; f < n; f++) {
        await page.evaluate(t => render(t), f / FPS);
        const buf = await page.screenshot({ type: 'png' });
        if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      }
      ff.stdin.end(); await new Promise(r => ff.on('close', r));
    }
    await page.evaluate(t => render(t), dur - .4);
    await page.screenshot({ path: base + '.png' });
    await page.close(); console.log('ok', id);
  }
  async function worker() { while (i < ids.length) await one(ids[i++]); }
  await Promise.all([worker(), worker(), worker()]);
  await b.close();
})();
