import React,{useEffect,useRef,useState} from 'react';import{createRoot}from'react-dom/client';import heic2any from'heic2any';import'./styles.css';
const C={black:'#101010',paper:'#f4efe3',lime:'#c7ff00',pink:'#ff3d9d',yellow:'#ffd83d'};
const titles=['Code Navigator','Ship Commander','Pixel Alchemist','Terminal Nomad','Bug Hunter','Product Hacker','System Architect','API Voyager','Cloud Surfer','Build Catalyst'];
const initials=n=>n.trim().split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0].toUpperCase()).join('')||'HH';
const titleFor=(n,r,s)=>{let x=`${n}${r}${s}`.split('').reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7);return titles[x%titles.length]};
async function fileURL(f){if(!/image\/hei[cf]/i.test(f.type)&&!/\.(heic|heif)$/i.test(f.name))return URL.createObjectURL(f);let b=await heic2any({blob:f,toType:'image/jpeg',quality:.92});return URL.createObjectURL(Array.isArray(b)?b[0]:b)}
function rr(c,x,y,w,h,r){r=Math.min(r,w/2,h/2);c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function cover(c,img,x,y,w,h,z,ox,oy){let s=Math.max(w/img.width,h/img.height)*z,dw=img.width*s,dh=img.height*s;c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.drawImage(img,x+(w-dw)/2+ox,y+(h-dh)/2+oy,dw,dh);c.restore()}
function palm(c,x,y,s,col){c.save();c.translate(x,y);c.scale(s,s);c.strokeStyle=col;c.lineWidth=7;c.beginPath();c.moveTo(0,150);c.quadraticCurveTo(-10,70,8,0);c.stroke();for(let i=0;i<7;i++){let a=-1.25+i*.42;c.beginPath();c.moveTo(7,8);c.quadraticCurveTo(Math.cos(a)*85,Math.sin(a)*50,Math.cos(a)*125,Math.sin(a)*5);c.stroke()}c.restore()}
function barcode(c,x,y,w,h,seedText){let s=[...seedText].reduce((n,ch)=>(n*33+ch.charCodeAt(0))>>>0,11),a=[];for(let i=0;i<54;i++){s=(s*1664525+1013904223)>>>0;a.push(1+s%4)}let unit=w/a.reduce((p,q)=>p+q,0),cur=x;c.fillStyle=C.black;a.forEach((v,i)=>{let bw=v*unit;if(i%2===0)c.fillRect(cur,y,bw,h);cur+=bw})}
function card(canvas,d){const W=1200,H=1500;canvas.width=W;canvas.height=H;let c=canvas.getContext('2d');c.imageSmoothingQuality='high';
const bg='#062f2a';const dark='#041d1c';const lime='#c7ff00';const lime2='#aee808';const pink='#ff4db2';const yellow='#f4d240';const cream='#f4efe3';const line='#6fd39e';
const name=(d.name||'PREMNATH').toUpperCase();const role=(d.role||'CYBERSECURITY BUILDER').toUpperCase();const title=(d.title||'SIGNAL HUNTER').toUpperCase();const stack=(d.stack||'Security').toUpperCase();const stack2=(d.stack2||'Python').toUpperCase();const id=(d.id||'HHG26-PM-0427');

c.fillStyle=bg;c.fillRect(0,0,W,H);

c.strokeStyle=lime;c.lineWidth=4;c.strokeRect(26,26,W-52,H-52);
c.strokeStyle='rgba(199,255,0,.5)';c.setLineDash([1,10]);c.strokeRect(52,52,W-104,H-104);c.setLineDash([]);

c.fillStyle='rgba(122,176,70,.12)';for(let i=0;i<16;i++){c.fillRect(70+i*70,0,2,H)}

c.fillStyle=lime;c.font='900 34px Arial Black,Arial';c.textAlign='left';c.fillText('BUILDER IDENTITY',830,100);
c.fillStyle=cream;c.font='900 18px Arial';c.fillText('HH GOA 2026',818,135);

const signalX=1048;const signalY=118;for(let i=0;i<18;i++){const h=10+(i%6)*7;c.fillStyle=i%2?lime:yellow;c.fillRect(signalX+i*8,signalY-h,4,h)}

c.fillStyle=cream;c.font='900 220px Arial Black,Arial';c.fillText('HH',85,310);c.fillStyle=yellow;c.fillText('GOA',430,310);c.fillStyle=pink;c.font='900 110px "Segoe UI Emoji","Noto Sans Devanagari",sans-serif';c.fillText('गोवा',870,260);

c.fillStyle='rgba(255,255,255,.7)';c.font='900 42px Arial';c.textAlign='left';c.fillText('HACKER HOUSE 2026',92,370);

const px=170,py=430,pw=600,ph=520;
const r=275;
const cx=px+r+20;const cy=py+r+30;
c.save();c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.clip();if(d.image){cover(c,d.image,px+20,py+30,pw-30,ph-20,d.zoom,d.ox,d.oy)}else{c.fillStyle='#d9d2c4';c.fillRect(px+20,py+30,pw-30,ph-20);c.fillStyle='#666';c.font='700 120px Arial';c.textAlign='center';c.fillText(initials(name),cx,cy+40);}
c.restore();
c.strokeStyle=lime;c.lineWidth=10;c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.stroke();
c.strokeStyle='rgba(199,255,0,.85)';c.lineWidth=3;c.beginPath();c.arc(cx,cy,r+20,0,Math.PI*2);c.stroke();

c.fillStyle=lime;c.font='900 62px Arial';c.textAlign='left';
const infoX=860;const infoY=500;
const icons=['◌','◌','▁▁','⌖'];
const labels=['ID','STATUS','SIGNAL','LOCATION'];
const values=[id,'BUILDER','STRONG','GOA, INDIA'];
for(let i=0;i<4;i++){const yy=infoY+i*110;c.fillStyle=cream;c.font='900 20px Arial';c.fillText(labels[i],infoX,yy);c.fillStyle=lime;c.font='900 26px Arial';c.fillText(values[i],infoX,yy+34);if(i===1){c.fillStyle='#7ee38c';c.fillRect(infoX+260,yy+18,42,14);c.beginPath();c.arc(infoX+282,yy+25,8,0,Math.PI*2);c.fillStyle='#7ee38c';c.fill();}
if(i===2){c.fillStyle=yellow;c.fillRect(infoX+220,yy+18,110,10);for(let j=0;j<16;j++){const h=6+(j%4)*8;c.fillStyle=(j%2)?yellow:lime;c.fillRect(infoX+220+j*7,yy+19-h,4,h)}}
if(i===3){c.fillStyle='#b6d6ff';c.strokeStyle=lime;c.lineWidth=2;c.strokeRect(infoX+250,yy+4,30,30);c.fillStyle=cream;c.font='900 15px Arial';c.fillText('◍',infoX+260,yy+25)}}

c.fillStyle=lime;c.font='900 34px Arial';c.fillText('LESS NOISE. MORE SIGNAL.', 120, 1330);

c.fillStyle=cream;c.textAlign='center';c.font='900 110px Arial Black,Arial';c.fillText(name,600,790);

c.strokeStyle=lime;c.lineWidth=4;c.beginPath();c.moveTo(200,820);c.lineTo(1000,820);c.stroke();

c.fillStyle=yellow;c.font='900 34px Arial Black,Arial';c.fillText((d.role||'CYBERSECURITY BUILDER').toUpperCase(),600,900);

c.fillStyle=lime;c.font='900 24px Arial';c.fillText('BUILDER TITLE',470,980);
c.fillStyle=yellow;c.font='900 90px Arial Black,Arial';c.fillText(title,600,1075);

c.strokeStyle=lime;c.lineWidth=3;c.beginPath();c.moveTo(260,1110);c.lineTo(940,1110);c.stroke();

c.fillStyle=lime;c.font='900 22px Arial';c.fillText('STACK / ROLE',480,1190);
const chips=[['SECURITY','⚡'],['PYTHON','</>'],['AI','◎'],['LINUX','◔']];
let chipX=160;for(let chip of chips){let w=170,h=54; c.fillStyle='rgba(199,255,0,.12)'; c.strokeStyle=lime;c.strokeRect(chipX,1215,w,h); c.fillStyle=cream;c.font='900 26px Arial'; c.fillText(chip[0],chipX+22,1252); chipX+=190}

c.fillStyle=lime;c.font='900 22px Arial';c.fillText('GOA, INDIA',120,1415);c.fillText('HH GOA / 2026',520,1415);c.fillText('BUILD • CONNECT • IMPACT',860,1415);

c.strokeStyle=lime;c.lineWidth=3;c.beginPath();c.moveTo(80,1445);c.lineTo(340,1445);c.stroke();
c.beginPath();c.moveTo(860,1445);c.lineTo(1118,1445);c.stroke();

c.fillStyle=yellow;c.font='900 18px Arial';c.textAlign='left';c.fillText('hhgoa.com',120,1478);
c.fillText('#FRAMEINGOA',970,1478);
c.textAlign='left'}
export default function App(){const ref=useRef(),[name,setName]=useState(''),[role,setRole]=useState(''),[stack,setStack]=useState(''),[stack2,setStack2]=useState(''),[img,setImg]=useState(null),[url,setUrl]=useState(''),[zoom,setZoom]=useState(1),[ox,setOx]=useState(0),[oy,setOy]=useState(0),[drag,setDrag]=useState(null),[msg,setMsg]=useState('');const title=titleFor(name||'Builder',role||'Developer',stack||'Code'),id=`HHG26-${initials(name||'Builder')}-0427`;useEffect(()=>{card(ref.current,{name,role,stack,stack2,title,id,image:img,zoom,ox,oy})},[name,role,stack,stack2,title,id,img,zoom,ox,oy]);
async function file(f){if(!f)return;setMsg('Processing photo…');try{let u=await fileURL(f),i=new Image();i.onload=()=>{setUrl(u);setImg(i);setZoom(1);setOx(0);setOy(0);setMsg('Ready — your Builder ID is live.')};i.src=u}catch(e){setMsg('HEIC conversion failed. Try JPG/PNG.')}}function download(){ref.current.toBlob(b=>{let a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`hh-goa-${(name||'builder').replace(/\s+/g,'-').toLowerCase()}-id.jpg`;a.click()},'image/jpeg',.95)}async function share(){let b=await new Promise(r=>ref.current.toBlob(r,'image/jpeg',.95)),f=new File([b],'hh-goa-builder-id.jpg',{type:'image/jpeg'}),text='I just framed my builder identity for Hacker House Goa 2026 🌴⚡\n\nBuild. Connect. Ship from Goa.\n#FrameInGoa #HHGoa2026';if(navigator.canShare?.({files:[f]})){try{await navigator.share({files:[f],text,title:'HH Goa 2026 Builder ID'});return}catch(e){if(e?.name==='AbortError')return}}window.open('https://x.com/intent/post?text='+encodeURIComponent(text),'_blank');setMsg('X opened. On desktop, attach the downloaded card.')}function start(e){if(!img)return;let p=e.touches?e.touches[0]:e;setDrag({x:p.clientX,y:p.clientY,ox,oy})}function move(e){if(!drag)return;let p=e.touches?e.touches[0]:e;setOx(drag.ox+(p.clientX-drag.x)*2.2);setOy(drag.oy+(p.clientY-drag.y)*2.2)}return <main className="app"><header className="topbar"><div className="brand"><b>h</b><div><strong>HACKER HOUSE</strong><span>GOA 2026 / BUILDER ID</span></div></div><a href="https://hhgoa.com/" target="_blank">hhgoa.com ↗</a></header><section className="hero"><div><p className="eyebrow">SHORTLISTING TASK #1</p><h1>BUILD YOUR<br/><em>BUILDER ID.</em></h1><p>Upload. Personalize. Ship it to X. No login. No signup.</p><div className="chips"><span>#FrameInGoa</span><span>28–31 OCT</span><span>GOA, INDIA</span></div></div></section><section className="workspace"><div className="panel controls"><div className="head"><span>01 / IDENTITY</span><small>SECONDS TO SHIP</small></div><label className="upload"><input type="file" accept="image/jpeg,image/png,image/heic,image/heif,.heic,.heif" onChange={e=>file(e.target.files?.[0])}/><strong>{url?'CHANGE PHOTO':'DROP YOUR PHOTO'}</strong><span>JPG / PNG / HEIC • portrait & landscape</span></label><div className="fields">{[['NAME',name,setName,'Bharath Ram'],['ROLE / STACK',role,setRole,'Full Stack Developer'],['STACK — LINE 01',stack,setStack,'React · Node.js · TypeScript'],['STACK — LINE 02',stack2,setStack2,'PostgreSQL · Docker · AWS']].map(([l,v,s,p])=><label key={l}><span>{l}</span><input value={v} onChange={e=>s(e.target.value)} placeholder={p}/></label>)}</div><div className="titlebox"><span>GENERATED BUILDER CLASS</span><strong>{title}</strong></div>{img&&<div className="crop"><span>PHOTO ZOOM</span><output>{zoom.toFixed(2)}×</output><input type="range" min="1" max="2.2" step=".01" value={zoom} onChange={e=>setZoom(+e.target.value)}/><small>Drag the photo in the preview.</small></div>}<div className="actions"><button onClick={download}>DOWNLOAD ID ↘</button><button onClick={share}>SHARE TO X ↗</button></div><p className="status">{msg||'No account. No signup. One pass.'}</p></div><div className="panel preview"><div className="head"><span>02 / LIVE OUTPUT</span><small>1200 × 1500 JPG</small></div><div className="canvaswrap" onMouseDown={start} onMouseMove={move} onMouseUp={()=>setDrag(null)} onMouseLeave={()=>setDrag(null)} onTouchStart={start} onTouchMove={move} onTouchEnd={()=>setDrag(null)}><canvas ref={ref}/></div></div></section><footer><span>LESS NOISE. MORE SIGNAL.</span><span>BUILD. CONNECT. SHIP FROM GOA.</span><span>#FrameInGoa</span></footer></main>}
