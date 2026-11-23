import subprocess, os
S='/tmp/claude-0/-home-user-projet-ecom/54bc030c-c11c-5ed9-a339-a7cdd77502d2/scratchpad/vo2'
V='/home/user/projet-ecom/plush-intel/visuels/test1/videos'
OUT=V+'/organiques/serie-2'; os.makedirs(OUT,exist_ok=True)
FONT='/home/user/projet-ecom/assets/fonts/Poppins-SemiBold.ttf'
def dur(f): return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f]))
for i in range(18):
    subprocess.run(['ffmpeg','-v','error','-y','-i',f'{S}/l{i}.mp3','-af','silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse','-ar','48000','-ac','2',f'{S}/c{i}.wav'],check=True)
def tf(name,txt):
    p=f'{S}/{name}.txt'; open(p,'w').write(txt); return p
def dt(p,size,y,t0=None,t1=None,box=False):
    s=f"drawtext=fontfile={FONT}:textfile={p}:fontsize={size}:fontcolor=white:x=(w-text_w)/2:y={y}:line_spacing=10"
    s+=":box=1:boxcolor=black@0.55:boxborderw=28" if box else ":borderw=3:bordercolor=black@0.85"
    if t0 is not None: s+=f":enable='between(t,{t0},{t1})'"
    return s
V5=f'{S}/v5_base.mp4'
subprocess.run(['ffmpeg','-v','error','-y','-i',f'{V}/clips-bruts/16-cartouche-coupe-6-couches.mp4','-i',f'{V}/clips-bruts/17-cartouche-couches-assemblage.mp4','-filter_complex','[0:v]scale=1080:1920,setsar=1,fps=24[a];[1:v]scale=1080:1920,setsar=1,fps=24[b];[a][b]concat=n=2:v=1:a=0[v]','-map','[v]','-c:v','libx264','-crf','16','-pix_fmt','yuv420p',V5],check=True)
jobs={
 'P01-checklist-emmenagement':dict(src=f'{V}/organiques/O11-checklist-demenagement.mp4',freeze=1.8,end="what's on your day-1 list?",lines=[(0,0.15),(1,3.15),(2,6.1),(3,9.1)]),
 'P02-rapport-eau-1h-du-mat':dict(src=f'{V}/organiques/O08-rapport-1h-du-mat.mp4',freeze=3.4,end="comment your city\ni'll tell you where to find yours",lines=[(4,0.05),(5,3.55),(6,6.3),(7,9.2)]),
 'P03-proprio-swap-ou-pas':dict(src=f'{V}/organiques/O04-proprio-vs-toi.mp4',freeze=2.3,end="swap it or leave it?",lines=[(8,0.1),(9,3.1),(10,6.6)]),
 'P04-3-etapes':dict(src=f'{V}/organiques/O19-3-etapes.mp4',freeze=2.9,end="save this for move-in day",lines=[(11,0.1),(12,3.1),(13,6.1),(14,10.0)]),
 'P05-whats-inside-pt2':dict(src=V5,freeze=2.8,end="want part 3?\ncomment 3",lines=[(15,0.15),(16,4.1),(17,8.1)],extra=[("what's inside a shower filter?\npt. 2",0,3.95),("6 layers\nyou can open it and look",4.0,8.0)]),
}
for name,j in jobs.items():
    if os.environ.get('ONLY') and os.environ['ONLY']!=name: continue
    vd=dur(j['src']); T=vd+j['freeze']
    vf=[f"tpad=stop_mode=clone:stop_duration={j['freeze']}"]
    for k,(txt,a,b) in enumerate(j.get('extra',[])): vf.append(dt(tf(f'{name}_x{k}',txt),48,'h*0.1',a,b,box=True))
    if 'extra' in j: vf.append(dt(tf(f'{name}_brand','plush · link in bio'),30,'h*0.88',4.0,T))
    vf.append(dt(tf(f'{name}_end',j['end']),54,'h*0.42',vd,T+1,box=True))
    ins=['-i',j['src'],'-f','lavfi','-t',f'{T:.3f}','-i','anullsrc=r=48000:cl=stereo']; fl=[]; lab=['[1:a]']
    for k,(i,t) in enumerate(j['lines']):
        d=dur(f'{S}/c{i}.wav'); nxt=j['lines'][k+1][1] if k+1<len(j['lines']) else T; tempo=min(1.18,max(1.0,d/(nxt-t-0.08)))
        ins+=['-i',f'{S}/c{i}.wav']; fl.append(f'[{k+2}:a]atempo={tempo:.3f},adelay={int(t*1000)}|{int(t*1000)}[v{k}]'); lab.append(f'[v{k}]')
        print(name,f'l{i} {d:.2f}s x{tempo:.2f} {t:.2f}->{t+d/tempo:.2f} (limite {nxt:.2f})')
    fl.append('[0:v]'+','.join(vf)+'[vv]')
    fl.append(''.join(lab)+f'amix=inputs={len(lab)}:duration=first:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=11[a]')
    subprocess.run(['ffmpeg','-v','error','-y',*ins,'-filter_complex',';'.join(fl),'-map','[vv]','-map','[a]','-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-t',f'{T:.3f}',f'{OUT}/{name}.mp4'],check=True)
print(sorted(os.listdir(OUT)))
