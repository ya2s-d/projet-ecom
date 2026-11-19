"""Hook variants of V11: each spoken hook replaces V11's opening (0-4.2 s, the thank-you card),
then the retained body (4.2 s -> end: product reveal, captions, Black Friday end card) follows untouched."""
import subprocess, sys, re, os
F = '/home/user/projet-ecom/assets/fonts/Poppins-SemiBold.ttf'
V11 = '/home/user/projet-ecom/plush-intel/visuels/test1/videos/V11-unboxing-duo-mains.mp4'
OUT = '/home/user/projet-ecom/plush-intel/visuels/test1/videos/hooks/'
CUT = 4.2   # first retained frame of V11: open box, products visible, no hands
HOOKS = {1: ('apartment', 'Your shower head came\nwith the apartment.'),
         2: ('filter-your-shower', 'Wait... you can\nfilter your shower?'),
         3: ('third-shampoo', 'Third shampoo this year?\nStart with the water.'),
         4: ('pool-smell', 'Does your shower\nsmell like a pool?'),
         5: ('two-minute-upgrade', 'A 2-minute bathroom upgrade.\nNo plumber.'),
         6: ('black-friday', "It's Black Friday.\nSwap your shower head.")}
def run(*a): subprocess.run(['ffmpeg', '-v', 'error', '-y', *a], check=True)
def dur(f): return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], capture_output=True, text=True).stdout)
def speech_parts(f):
    """speech intervals of the hook's own audio; pauses longer than 0.45 s are cut down (jump cut)"""
    err = subprocess.run(['ffmpeg', '-i', f, '-af', 'silencedetect=noise=-35dB:d=0.18', '-f', 'null', '-'], capture_output=True, text=True).stderr
    st = [float(x) for x in re.findall(r'silence_start: ([0-9.]+)', err)]
    en = [float(x) for x in re.findall(r'silence_end: ([0-9.]+)', err)]
    total = dur(f)
    sil = list(zip(st, en + [total] * (len(st) - len(en))))
    speech, t = [], 0.0
    for a, b in sil:
        if a > t + 0.02: speech.append([t, a])
        t = b
    if t < total - 0.02: speech.append([t, total])
    speech = [seg for seg in speech if seg[1] - seg[0] >= 0.2] or speech   # drop isolated breaths and clicks
    merged = []
    for a, b in speech:
        if merged and a - merged[-1][1] < 0.45: merged[-1][1] = b
        else: merged.append([a, b])
    return [(max(0.0, a - 0.10), min(total, b + 0.22)) for a, b in merged], total
os.makedirs(OUT, exist_ok=True)
# retained body, re-encoded once from the exact cut
if not os.path.exists('body.mp4'): run('-ss', str(CUT), '-i', V11, '-c:v', 'libx264', '-crf', '18', '-pix_fmt', 'yuv420p', '-r', '30', '-c:a', 'aac', '-b:a', '192k', '-ar', '44100', '-ac', '2', 'body.mp4')
report = []
for i in sorted(HOOKS):
    src = f'hook{i}.mp4'
    if not os.path.exists(src): continue
    slug, line = HOOKS[i]
    parts, total = speech_parts(src)
    open(f'line{i}.txt', 'w').write(line)
    fc, cat = '', ''
    for k, (pa, pb) in enumerate(parts):
        fc += f'[0:v]trim=start={pa:.3f}:end={pb:.3f},setpts=PTS-STARTPTS[v{k}];[0:a]atrim=start={pa:.3f}:end={pb:.3f},asetpts=PTS-STARTPTS[a{k}];'
        cat += f'[v{k}][a{k}]'
    fc += (cat + f'concat=n={len(parts)}:v=1:a=1[vc][ac];'
           '[vc]scale=1080:1920:flags=lanczos,fps=30,format=yuv420p,'
           f"drawtext=fontfile={F}:textfile=line{i}.txt:fontsize=62:fontcolor=white:borderw=6:bordercolor=black@0.85:line_spacing=10:x=(w-text_w)/2:y=330[v];"
           '[ac]loudnorm=I=-16:TP=-1.5:LRA=11,aresample=44100[a]')
    run('-i', src, '-filter_complex', fc, '-map', '[v]', '-map', '[a]', '-c:v', 'libx264', '-crf', '18', '-c:a', 'aac', '-b:a', '192k', '-ac', '2', f'h{i}.mp4')
    s0, s1 = parts[0][0], parts[-1][1]
    hook_len = dur(f'h{i}.mp4')
    out = f'{OUT}V11-H{i}-{slug}.mp4'
    run('-i', f'h{i}.mp4', '-i', 'body.mp4', '-filter_complex', '[0:v][0:a][1:v][1:a]concat=n=2:v=1:a=1[v][a]',
        '-map', '[v]', '-map', '[a]', '-c:v', 'libx264', '-crf', '18', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k', out)
    report.append((i, slug, round(s0, 2), round(s1, 2), round(hook_len, 2), round(dur(out), 2), len(parts)))
for r in report: print('H%d %-20s kept %.2f-%.2f  hook %.2fs  total %.2fs  parts %d' % r)
