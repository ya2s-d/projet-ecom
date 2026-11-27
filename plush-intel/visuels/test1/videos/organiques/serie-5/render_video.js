// node render_video.js S01|S02|S03  ->  <nom>.mp4 (1080x1920, 30 i/s, voix off placée et normalisée à -16 LUFS)
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const path = require('path'), fs = require('fs');
const D = __dirname, v = process.argv[2];
const NAME = { S01: 'S01-quiz-douche', S02: 'S02-tier-list-salle-de-bain', S03: 'S03-red-flags-visite' }[v];
const TMP = '/tmp/claude-0/-home-user-projet-ecom/54bc030c-c11c-5ed9-a339-a7cdd77502d2/scratchpad/_' + v + '_muet.mp4';
(async () => {
  const b = await chromium.launch(), page = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + D + '/video.html?v=' + v);
  await page.evaluate(async () => {
    await Promise.all(['50px Anton', '500 50px Mono', '400 50px Mono', '500 50px Pop', '600 50px Pop', '700 50px Pop', '700 50px LS'].map(f => document.fonts.load(f)));
    await document.fonts.ready;
    await Promise.all(PRELOAD.map(u => { const im = new Image(); im.src = u; return im.decode().catch(() => {}); }));
  });
  const { total, cues } = await page.evaluate(() => ({ total: V.total, cues: V.cues }));
  const fps = 30, n = Math.round(total * fps);
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', '' + fps, '-c:v', 'png', '-i', '-',
    '-vf', 'scale=out_color_matrix=bt709:out_range=tv,format=yuv420p', '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
    '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', TMP]);
  for (let f = 0; f < n; f++) {
    await page.evaluate(t => renderV(t), f / fps);
    const buf = await page.screenshot({ type: 'png' });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await b.close();
  const args = ['-v', 'error', '-y', '-i', TMP]; cues.forEach(c => args.push('-i', path.join(D, c.f)));
  const fl = cues.map((c, i) => `[${i + 1}:a]adelay=${Math.round(c.t * 1000)}:all=1[a${i}]`).join(';') + ';' + cues.map((c, i) => `[a${i}]`).join('') +
    `amix=inputs=${cues.length}:normalize=0:dropout_transition=0,loudnorm=I=-16:TP=-1.5:LRA=11,aformat=channel_layouts=stereo,apad[a]`;
  args.push('-filter_complex', fl, '-map', '0:v', '-map', '[a]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-ar', '44100', '-shortest', '-movflags', '+faststart', path.join(D, NAME + '.mp4'));
  execFileSync('ffmpeg', args); fs.unlinkSync(TMP); console.log('ok', NAME, total.toFixed(1) + ' s');
})();
