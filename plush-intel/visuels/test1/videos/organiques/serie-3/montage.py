import subprocess, os
S='/tmp/claude-0/-home-user-projet-ecom/54bc030c-c11c-5ed9-a339-a7cdd77502d2/scratchpad/vo3'
V='/home/user/projet-ecom/plush-intel/visuels/test1/videos'
OUT=V+'/organiques/serie-3'; os.makedirs(OUT,exist_ok=True)
FONT='/home/user/projet-ecom/assets/fonts/Poppins-SemiBold.ttf'
def dur(f): return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f]))
def tf(n,t): p=f'{S}/{n}.txt'; open(p,'w').write(t); return p
def dt(p,size,y,t0=None,t1=None,box=False):
    s=f"drawtext=fontfile={FONT}:textfile={p}:fontsize={size}:fontcolor=white:x=(w-text_w)/2:y={y}:line_spacing=10"
    s+=":box=1:boxcolor=black@0.55:boxborderw=28" if box else ":borderw=3:bordercolor=black@0.85"
    if t0 is not None: s+=f":enable='between(t,{t0},{t1})'"
    return s
for i in range(26):
    if not os.path.exists(f'{S}/c{i}.wav'):
        subprocess.run(['ffmpeg','-v','error','-y','-i',f'{S}/l{i}.mp3','-af','silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse','-ar','48000','-ac','2',f'{S}/c{i}.wav'],check=True)
C=V+'/clips-bruts/'; O=V+'/organiques/'
jobs={
 'Q01-cadeau-cremaillere':dict(segs=[(C+'26-couple-cles.mp4',0,3,"they just got the keys",False),(O+'O12-cadeau-cremaillere.mp4',0,9,None,False)],freeze=2.4,end="would you gift this?\nor is it weird?",lines=[(0,0.1),(1,3.1),(2,6.5),(3,9.1),(4,12.1)]),
 'Q02-cheveux-shampooing':dict(segs=[(O+'O09-troisieme-shampooing.mp4',0,9,None,False),(O+'O20-avant-un-masque.mp4',3,6,None,False)],freeze=2.6,end="how many shampoos\ndid you try this year?",lines=[(5,0.1),(6,3.1),(7,6.1),(8,9.1),(9,12.1),(10,15.1)]),
 'Q03-calcul-41-cents':dict(segs=[(O+'O18-upgrade-location.mp4',0,9,None,False),(C+'08-box-duo-elle-montre.mp4',0,4,"2 cartridges in the box\n= 6 months",True),(C+'16-cartouche-coupe-6-couches.mp4',0,4,"41¢ a day",True)],freeze=2.0,end="worth it or not?",lines=[(11,0.05),(12,3.35),(13,6.1),(14,9.1),(15,13.1),(16,17.1)]),
 'Q04-satisfying-premier-jet':dict(segs=[(O+'O17-asmr-premier-jet.mp4',0,7.5,None,False),(C+'04-jet-gros-plan-raccord-corrige.mp4',0,4,"filtered, right at the head",True),(C+'05-plush-zoom-lent.mp4',0,4,None,True)],freeze=2.0,end="rate it 1 to 10",lines=[(17,0.2),(18,3.7),(19,7.7),(20,15.6)]),
 'Q05-hacks-rates':dict(segs=[(C+'01-filtre-a-cafe-rate.mp4',0,4,"ways people try to filter their shower\n1. a coffee filter",False),(C+'06-passoire-ratee.mp4',0,4,"2. a colander",False),(O+'O01-filtre-a-cafe.mp4',3,6.5,None,False)],freeze=2.0,end="which one would you try?",lines=[(21,0.05),(22,4.35),(23,8.1),(24,11.1),(25,14.6)]),
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
