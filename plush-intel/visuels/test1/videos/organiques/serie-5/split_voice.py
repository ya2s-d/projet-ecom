#!/usr/bin/env python3
"""split_voice.py <mp3> <n_lignes> : coupe la voix en n répliques aux n-1 plus longs silences -> voix/<nom>_NN.wav + durées"""
import json, re, subprocess, sys, os
src, n = sys.argv[1], int(sys.argv[2])
log = subprocess.run(['ffmpeg', '-v', 'info', '-i', src, '-af', 'silencedetect=noise=-38dB:d=0.18', '-f', 'null', '-'], capture_output=True, text=True).stderr
dur = float(re.search(r'Duration: (\d+):(\d+):([\d.]+)', log).groups()[2]) + 60 * int(re.search(r'Duration: (\d+):(\d+)', log).group(2))
st = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', log)]
en = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', log)]
sil = list(zip(st, en + [dur] * (len(st) - len(en))))
inner = [s for s in sil if s[0] > 0.05 and s[1] < dur - 0.05]
cuts = sorted(sorted(inner, key=lambda s: s[1] - s[0], reverse=True)[:n - 1])
head = sil[0][1] if sil and sil[0][0] <= 0.05 else 0.0
tail = sil[-1][0] if sil and sil[-1][1] >= dur - 0.05 else dur
bounds = [head] + [x for c in cuts for x in c] + [tail]
base = os.path.splitext(src)[0]; out = []
for i in range(n):
    a, b = max(0, bounds[2 * i] - 0.04), min(dur, bounds[2 * i + 1] + 0.06)
    f = f'{base}_{i:02d}.wav'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{a:.3f}', '-to', f'{b:.3f}', '-i', src, '-ar', '44100', '-ac', '1', f], check=True)
    out.append(round(b - a, 3))
json.dump(out, open(base + '.json', 'w')); print(os.path.basename(src), 'durées:', out, '| silences gardés:', [round(c[1] - c[0], 2) for c in cuts])
