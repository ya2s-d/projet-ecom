import subprocess, os
S='/tmp/claude-0/-home-user-projet-ecom/54bc030c-c11c-5ed9-a339-a7cdd77502d2/scratchpad/vo4'
V='/home/user/projet-ecom/plush-intel/visuels/test1/videos'
OUT=V+'/organiques/serie-4'; os.makedirs(OUT,exist_ok=True)
FONT='/home/user/projet-ecom/assets/fonts/Poppins-SemiBold.ttf'
def dur(f): return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f]))
def tf(n,t): p=f'{S}/{n}.txt'; open(p,'w').write(t); return p
def dt(p,size,y,t0=None,t1=None,box=False):
    s=f"drawtext=fontfile={FONT}:textfile={p}:fontsize={size}:fontcolor=white:x=(w-text_w)/2:y={y}:line_spacing=10"
    s+=":box=1:boxcolor=black@0.55:boxborderw=28" if box else ":borderw=3:bordercolor=black@0.85"
    if t0 is not None: s+=f":enable='between(t,{t0},{t1})'"
    return s
for i in range(25):
    if not os.path.exists(f'{S}/c{i}.wav'):
        subprocess.run(['ffmpeg','-v','error','-y','-i',f'{S}/l{i}.mp3','-af','silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse','-ar','48000','-ac','2',f'{S}/c{i}.wav'],check=True)
C=V+'/clips-bruts/'; O=V+'/organiques/'
jobs={
 'R01-voyage-goutte-dessin-anime':dict(segs=[(C+'29-cartoon-goutte-nuage.mp4',0.3,2.5,"every shower starts\nas a drop of rain",False),(C+'10-cartoon-goutte-station.mp4',0.3,2.5,"then the treatment plant",False),(C+'30-cartoon-goutte-sac-chlore.mp4',0.3,2.5,"chlorine keeps it\nsafe to drink",False),(C+'11-cartoon-goutte-tuyaux.mp4',0.3,2.5,"then miles of old pipes",False),(C+'31-cartoon-goutte-vieux-pommeau.mp4',0.3,2.5,"then your shower head",False),(C+'12-cartoon-goutte-sort-de-plush.mp4',0.3,2.5,"or one more stop:\na filter",True)],freeze=2.5,end="did you know that?",lines=[(0,0.1),(1,2.6),(2,5.1),(3,7.6),(4,10.1),(5,12.55),(6,15.45)]),
 'R02-astuce-locataire-depart':dict(segs=[(C+'07-vieux-pommeau-proprio.mp4',0.3,3,"renter tip nobody tells you",False),(C+'02-elle-visse-plush.mp4',0,3,"swap in your own\nshower head",True),(C+'19-couple-vieux-pommeau.mp4',0.3,3,"keep the old one\nin a drawer",False),(C+'28-couple-pizza-cartons.mp4',0.3,3,"move-out day:\nput it back",False)],freeze=2.2,end="did you know\nyou could do this?",lines=[(7,0.1),(8,3.1),(9,6.1),(10,9.1),(11,12.1)]),
 'R03-10-minutes-pour-toi':dict(segs=[(C+'24-megan-telephone-nuit.mp4',0.3,3,"after a long day...",False),(O+'O10-10-minutes.mp4',0,7,None,False)],freeze=2.2,end="what's your\n10-minute reset?",lines=[(12,0.1),(13,3.1),(14,6.6),(15,10.1)]),
 'R04-pate-a-modeler-shampooing':dict(segs=[(O+'O15-pate-a-modeler.mp4',0,9.5,None,False)],freeze=2.4,end="be honest:\nhow many have you tried?",lines=[(16,0.1),(17,3.1),(18,6.1),(19,9.6)]),
 'R05-black-friday-demain':dict(segs=[(C+'05-plush-zoom-lent.mp4',0,3,"black friday is tomorrow",True),(C+'04-jet-gros-plan-raccord-corrige.mp4',0,3,"skip the gadget\nyou'll forget about",True),(C+'32-unboxing-duo-mains-sans-texte.mp4',3.8,3.0,"get the upgrade\nyou use every day",False),(C+'32-unboxing-duo-mains-sans-texte.mp4',10.2,1.7,"2 cartridges = 6 months",False)],freeze=3.3,end="best thing you ever\nbought on black friday?",lines=[(20,0.1),(21,3.1),(22,6.1),(23,8.9),(24,10.8)]),
}
for name,j in jobs.items():
    if os.environ.get('ONLY') and os.environ['ONLY']!=name: continue
    ins=[]; fl=[]; parts=[]
    for k,(src,ss,d,txt,brand) in enumerate(j['segs']):
        ins+=['-ss',str(ss),'-t',str(d),'-i',src]
        f=f'[{k}:v]scale=1080:1920,setsar=1,fps=24'
        if txt: f+=','+dt(tf(f'{name}_s{k}',txt),48,'h*0.2')
        if brand: f+=','+dt(tf(f'{name}_b{k}','plush · link in bio'),30,'h*0.88')
        fl.append(f+f'[p{k}]'); parts.append(f'[p{k}]')
    base=sum(d for _,_,d,_,_ in j['segs']); T=base+j['freeze']; n=len(j['segs'])
    fl.append(''.join(parts)+f"concat=n={n}:v=1:a=0,tpad=stop_mode=clone:stop_duration={j['freeze']},"+dt(tf(f'{name}_end',j['end']),54,'h*0.42',base,T+1,box=True)+'[vv]')
    ins+=['-f','lavfi','-t',f'{T:.3f}','-i','anullsrc=r=48000:cl=stereo']; a0=n; lab=[f'[{a0}:a]']
    for k,(i,t) in enumerate(j['lines']):
        d=dur(f'{S}/c{i}.wav'); nxt=j['lines'][k+1][1] if k+1<len(j['lines']) else T; tempo=min(1.18,max(1.0,d/(nxt-t-0.08)))
        ins+=['-i',f'{S}/c{i}.wav']; fl.append(f'[{a0+1+k}:a]atempo={tempo:.3f},adelay={int(t*1000)}|{int(t*1000)}[v{k}]'); lab.append(f'[v{k}]')
        flag='  <-- DEBORDE' if t+d/tempo>nxt+0.02 else ''
        print(name,f'l{i} {d:.2f}s x{tempo:.2f} {t:.2f}->{t+d/tempo:.2f} (limite {nxt:.2f}){flag}')
    fl.append(''.join(lab)+f'amix=inputs={len(lab)}:duration=first:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=11[a]')
    subprocess.run(['ffmpeg','-v','error','-y',*ins,'-filter_complex',';'.join(fl),'-map','[vv]','-map','[a]','-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-t',f'{T:.3f}',f'{OUT}/{name}.mp4'],check=True)
print(sorted(os.listdir(OUT)))
