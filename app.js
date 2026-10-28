(function(){
'use strict';
// App, die Buch für Buch lädt. Wie in der Teilausgabe nur Zugabe zu dem, was ohne Skript geht; dazu Sprünge
// über Buchgrenzen, Versraster der übrigen Bücher, Leseposition, Wortsuche und Offline-Speicher.
var R=document.documentElement,$=function(i){return document.getElementById(i);};
var LEISTE=$('leiste'),SCHWEBE=$('schwebe'),SEITE=$('seite'),POP=$('pop'),FEIN=window.matchMedia('(hover:hover) and (pointer:fine)');
var KEY='lyb-einst-3',POS='lyb-app-pos',HIER=R.getAttribute('data-buch')||'',T=$('treffer');
function lies(k){try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}}
function schreib(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e;}
function wert(n){var i=document.querySelector('input.e[name="'+n+'"]:checked');return i?i.value:'';}
function kopf(){R.style.setProperty('--kopf',LEISTE.offsetHeight+'px');}
function farbe(){var g=getComputedStyle(SEITE).getPropertyValue('--grund').trim();if(!g)return;R.style.background=g;
 document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.removeAttribute('media');m.content=g;});}
document.addEventListener('change',function(ev){var t=ev.target;if(!t.classList||!t.classList.contains('e'))return;
 var o={};document.querySelectorAll('input.e:checked').forEach(function(x){o[x.name]=x.id;});schreib(KEY,o);
 if(t.name==='b')vollbild(t.value==='ein');farbe();kopf();rand();halte();});
var VB=document.fullscreenEnabled||document.webkitFullscreenEnabled;if(VB)R.classList.add('vollbild-ok');
function vollbild(an){var d=document,ist=d.fullscreenElement||d.webkitFullscreenElement,r;
 try{if(an&&!ist)r=(R.requestFullscreen||R.webkitRequestFullscreen).call(R,{navigationUI:'hide'});
  else if(!an&&ist)r=(d.exitFullscreen||d.webkitExitFullscreen).call(d);}catch(x){}
 if(r&&r.catch)r.catch(function(){});}
if(VB&&wert('b')==='ein')document.addEventListener('click',function erst(){document.removeEventListener('click',erst,true);if(wert('b')==='ein')vollbild(true);},true);
var ANKER=null;
function merke(){var m=document.querySelector('main').getBoundingClientRect(),x=m.left+m.width/2,e=null;
 (document.elementsFromPoint?document.elementsFromPoint(x,24):[]).some(function(z){e=z.closest('main p,main h1,main h2,main li,main section');return!!e;});ANKER=e?{e:e,top:e.getBoundingClientRect().top}:null;}
function halte(){if(!ANKER)return;var a=ANKER;requestAnimationFrame(function(){window.scrollBy(0,a.e.getBoundingClientRect().top-a.top);});}
var DUNKEL=window.matchMedia('(prefers-color-scheme: dark)');if(DUNKEL.addEventListener)DUNKEL.addEventListener('change',farbe);

// Bücher, Kapitel und Verse aus verzeichnis.js
var BUE=[],NACH={};
(window.LYB_V||[]).forEach(function(x){var b={abk:x[0],name:x[1],wort:x[2],datei:x[3],kap:x[4],kurz:x[5]};BUE.push(b);NACH[b.abk]=b;});
function kapname(b,k){return b.kap.length>1?(b.wort==='Psalm'?'Psalm '+k:b.name+' '+k):b.name;}
function verse(b,k){var x=b.kap[k-1],o=[];if(x==null)return o;if(typeof x!=='number')return x.map(String);for(var i=1;i<=x;i++)o.push(String(i));return o;}
function stelle(b,k,v){return b.kap.length>1?b.kurz+' '+k+(v?','+v:''):b.kurz+(v?' '+v:'');}

// Ort in der Leiste, Fortschritt im Buch
var ORT={abk:null,k:null},plan=false;
function ort(){plan=false;var m=document.querySelector('main').getBoundingClientRect();
 var x=Math.max(2,Math.min(window.innerWidth-2,m.left+m.width/2)),s=null;
 [Math.round(window.innerHeight*.22),14,48,96,160].some(function(d){var e=document.elementFromPoint(x,d);s=e&&e.closest('main [data-ort]');return!!s;});
 if(!s)return;var bt=s.closest('.buch-text'),q=0;
 if(bt){var r=bt.getBoundingClientRect();q=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-window.innerHeight/2)));}
 var pq=q.toFixed(2);if(SCHWEBE.style.getPropertyValue('--p')!==pq)SCHWEBE.style.setProperty('--p',pq);
 var L=$('ort-lang');if(L.textContent!==s.dataset.ort){L.textContent=s.dataset.ort;$('ort-kurz').textContent=s.dataset.kurz||s.dataset.ort;
  var O=$('ort');O.classList.remove('kurz');if(L.scrollWidth>L.clientWidth+1)O.classList.add('kurz');}
 if(s.classList.contains('kapitel-text')){var i=s.id.lastIndexOf('-');ORT={abk:s.id.slice(0,i),k:s.id.slice(i+1)};}
 else if(s.classList.contains('buch-text'))ORT={abk:s.id,k:null};else ORT={abk:null,k:null};}
function leiste(){var v=LEISTE.getBoundingClientRect().bottom>0;if(SCHWEBE.classList.contains('versteckt')!==v)SCHWEBE.classList.toggle('versteckt',v);}
function ruhig(){leiste();}
var spT;
window.addEventListener('scroll',function(){if(!plan){plan=true;setTimeout(function(){leiste();ort();},120);}clearTimeout(spT);spT=setTimeout(sichere,800);},{passive:true});

// Leseposition: Buch, Vers und Abstand vom oberen Rand; die Startseite bietet «Weiterlesen» an
function sichere(){var b=NACH[HIER];if(!b||!ORT.abk)return;var sec=$(ORT.k?ORT.abk+'-'+ORT.k:ORT.abk);if(!sec)return;
 var best=null,dy=sec.getBoundingClientRect().top;
 if(ORT.k){var alle=sec.querySelectorAll('sup.v[id],span.initiale[id]');
  for(var i=0;i<alle.length;i++){var t=alle[i].getBoundingClientRect().top;if(best&&t>48)break;best=alle[i];dy=t;}}
 var v=best?best.id.slice(best.id.lastIndexOf('-')+1):'';
 var p={d:b.datei,id:best?best.id:sec.id,dy:Math.round(dy),t:Date.now(),
  ort:ORT.k?(b.kap.length>1?kapname(b,ORT.k)+(v?','+v:''):b.name+(v?' '+v:'')):b.name};
 schreib(POS,p);schreib(POS+'-'+HIER,p);}
window.addEventListener('pagehide',sichere);
function weiterlesen(){var p=lies(POS+'-'+HIER),e=p&&$(p.id);if(!e)return;
 var setz=function(){e.scrollIntoView();window.scrollBy(0,e.getBoundingClientRect().top-p.dy);};
 setz();requestAnimationFrame(function(){requestAnimationFrame(setz);});setTimeout(function(){setz();ort();leiste();},260);}
var W=$('weiter'),WP=lies(POS);
if(W&&WP&&/^\w+\.html$/.test(WP.d)){W.href=WP.d+'?weiter';$('weiter-ort').textContent=WP.ort||'';W.hidden=false;}

// Navigator beim Öffnen auf das aktuelle Buch und Kapitel stellen
function navBereit(){ort();var rumpf=document.querySelector('#navi .blatt-rumpf');
 document.querySelectorAll('#navi details.buch').forEach(function(d){d.classList.toggle('aktuell',d.getAttribute('data-abk')===HIER);});
 var d=HIER&&document.querySelector('#navi details.buch[data-abk="'+HIER+'"]');
 if(d){d.open=true;if(ORT.k){var r=$('k-'+HIER+'-'+ORT.k);if(r)r.checked=true;}
  requestAnimationFrame(function(){rumpf.scrollTop+=d.getBoundingClientRect().top-rumpf.getBoundingClientRect().top-6;});}
 var q=document.querySelector('#navi input[name="q"]');if(q&&FEIN.matches)q.focus({preventScroll:true});}
// Kapitel der übrigen Bücher: ohne Skript ein Verweis auf das Kapitel, mit Skript zuerst das Versraster
document.addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('.kapitel.gitter>a[data-k]');if(!a)return;
 var d=a.closest('details.buch'),b=d&&NACH[d.getAttribute('data-abk')];if(!b)return;ev.preventDefault();var war=a.classList.contains('gew');
 d.querySelectorAll('.vp.js').forEach(function(x){x.remove();});d.querySelectorAll('a.gew').forEach(function(x){x.classList.remove('gew');});
 if(war)return;a.classList.add('gew');var k=+a.getAttribute('data-k'),vs=verse(b,k),ziel=b.datei+'#'+b.abk+'-'+k;
 var vp=el('div','vp offen js'),kp=el('div','vf-kopf'),l=el('a','vf-lesen',b.wort==='Psalm'?'Psalm lesen':'Kapitel lesen'),g=el('div','gitter verse');
 kp.appendChild(el('span','vf-titel',kapname(b,k)+' · '+vs.length+(vs.length===1?' Vers':' Verse')));l.href=ziel;kp.appendChild(l);vp.appendChild(kp);
 vs.forEach(function(v){var x=el('a',null,v);x.href=ziel+'-'+v;g.appendChild(x);});vp.appendChild(g);a.parentNode.insertBefore(vp,a.nextSibling);});

// Sprungziel hervorheben
function hebe(e){if(!e.matches('sup.v,span.initiale'))return;var sec=e.closest('.kapitel-text');if(!sec)return;
 if(!(window.CSS&&CSS.highlights&&window.Highlight))return;
 var alle=Array.prototype.slice.call(sec.querySelectorAll('sup.v[id],span.initiale[id]')),i=alle.indexOf(e),r=document.createRange();
 r.setStartBefore(e);if(alle[i+1])r.setEndBefore(alle[i+1]);else{var t=sec.querySelectorAll('p.prosa,p.poesie');r.setEndAfter(t[t.length-1]);}
 CSS.highlights.set('vers',new Highlight(r));clearTimeout(hebe.t);hebe.t=setTimeout(function(){CSS.highlights.delete('vers');},3200);}
var VORHER=null;document.addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('a[href="#navi"],a[href="#einst"],a[href="#zu"]');if(a)VORHER=window.pageYOffset;},true);
function hash(){var id=decodeURIComponent(location.hash.slice(1));POP.hidden=true;
 if(VORHER!==null&&(id==='navi'||id==='einst'||id==='zu')){window.scrollTo(0,VORHER);}VORHER=null;
 ruhig();if(id==='navi'){navBereit();return;}if(id==='einst'){merke();return;}if(!id||id==='zu')return;
 var e=$(id);if(!e)return;for(var d=e.closest('details');d;d=d.parentElement&&d.parentElement.closest('details'))d.open=true;
 hebe(e);requestAnimationFrame(ort);
 if(e.closest('main')){var nach=function(){e.scrollIntoView();};requestAnimationFrame(function(){requestAnimationFrame(nach);});setTimeout(nach,260);}}
window.addEventListener('hashchange',hash);
function geh(id){if(location.hash==='#'+id){var e=$(id);if(e){e.scrollIntoView();hash();}}else location.hash=id;}
function meldung(t){var m=$('meldung');m.textContent=t;m.hidden=false;clearTimeout(meldung.t);meldung.t=setTimeout(function(){m.hidden=true;},5000);}

// Stellensuche über alle Bücher; was keine Stelle ist, geht an die Wortsuche
function norm(s){return s.toLowerCase().replace(/[\s.]/g,'').replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue');}
var B={};BUE.forEach(function(b){[b.name,b.abk,b.kurz].forEach(function(n){B[norm(n)]=b.abk;});});
var X={'1mose':'Gen','2mose':'Ex','3mose':'Lev','4mose':'Num','5mose':'Dtn',psalm:'Ps',offb:'Offb',offenbarungdesjohannes:'Offb',hebraeerbrief:'Hebr',jakobusbrief:'Jak',judasbrief:'Jud',philemonbrief:'Phlm'};
for(var kx in X)if(NACH[X[kx]])B[kx]=X[kx];
function buchVon(t){var n=norm(t);if(B[n])return B[n];var z={};for(var k in B)if(k.indexOf(n)===0)z[B[k]]=1;var l=Object.keys(z);return l.length===1?l[0]:null;}
function finde(q){var m=q.trim().match(/^((?:[1-3]\s*\.?\s*)?[A-Za-zÄÖÜäöüß]+)\s*(?:(\d+)(?:\s*[,:.\s]\s*(\d+))?)?\s*$/);
 if(!m)return null;var abk=buchVon(m[1]);if(!abk)return null;var b=NACH[abk],k=m[2]&&String(+m[2]),v=m[3]&&String(+m[3]);
 if(b.kap.length===1&&k&&!v){v=k;k='1';}
 if(!k)return{b:b,id:abk};
 if(!b.kap[k-1])return{b:b,id:abk,hinweis:b.name+' hat '+b.kap.length+(b.wort==='Psalm'?' Psalmen.':' Kapitel.')};
 if(!v)return{b:b,id:abk+'-'+k};var vs=verse(b,k);if(vs.indexOf(v)>=0)return{b:b,id:abk+'-'+k+'-'+v};
 var max=Math.max.apply(null,vs.map(Number));
 if(+v>max)return{b:b,id:abk+'-'+k,hinweis:kapname(b,k)+' hat '+max+' Verse.'};
 for(var w=+v-1;w>0;w--)if(vs.indexOf(String(w))>=0)return{b:b,id:abk+'-'+k+'-'+w,hinweis:'Vers '+v+' steht nicht im übersetzten Text; die Fussnote zu Vers '+w+' nennt seinen Wortlaut.'};
 return{b:b,id:abk+'-'+k};}
function gehZu(r){if(r.b.abk===HIER){geh(r.id);if(r.hinweis)meldung(r.hinweis);return;}
 try{if(r.hinweis)sessionStorage.setItem('lyb-meldung',r.hinweis);}catch(x){}location.href=r.b.datei+'#'+r.id;}
document.querySelectorAll('form.stelle').forEach(function(F){var h=F.querySelector('.stelle-hinweis'),wort=F.classList.contains('wortsuche');
 F.q.addEventListener('input',function(){h.textContent='';});
 F.addEventListener('submit',function(ev){ev.preventDefault();var q=F.q.value.trim();if(!q)return;
  var r=(!wort||/\d/.test(q))&&finde(q);
  if(r){h.textContent='';F.q.blur();F.q.value='';gehZu(r);return;}
  if(q.replace(/[^A-Za-zÄÖÜäöüß]/g,'').length<2){h.textContent='Stelle nicht gefunden';return;}
  F.q.blur();if(T){history.replaceState(null,'','?q='+encodeURIComponent(q));location.hash==='#navi'&&location.replace('#zu');suche(q);}
  else location.href='suche.html?q='+encodeURIComponent(q);});});

// Wortsuche über die Textdateien der Bücher (text/Gen.txt …); der Service Worker speichert sie nach der ersten Suche
var AKZ={'ä':'a','ö':'o','ü':'u','à':'a','á':'a','â':'a','è':'e','é':'e','ê':'e','ë':'e','î':'i','ï':'i','ô':'o','û':'u','ç':'c'};
function grund(s){return s.toLowerCase().replace(/[äöüàáâèéêëîïôûç]/g,function(c){return AKZ[c];});}
function markiere(li,t,g,woerter){var r=[],pos=0;
 woerter.forEach(function(w){for(var p=g.indexOf(w);p>=0;p=g.indexOf(w,p+w.length))r.push([p,p+w.length]);});
 r.sort(function(x,y){return x[0]-y[0];}).forEach(function(x){if(x[0]<pos)return;
  li.appendChild(document.createTextNode(t.slice(pos,x[0])));li.appendChild(el('mark',null,t.slice(x[0],x[1])));pos=x[1];});
 li.appendChild(document.createTextNode(t.slice(pos)));}
var LAUF=0;
function suche(q){var lauf=++LAUF,woerter=grund(q).split(/\s+/).filter(Boolean),S=$('suchstand'),n=0,gezeigt=0,fehlt=0,MAX=500,i=0;
 var f=document.querySelector('form.wortsuche');if(f)f.q.value=q;T.textContent='';
 var holen=BUE.map(function(b){return fetch('text/'+b.datei.replace(/\.html$/,'.txt')).then(function(r){if(!r.ok)throw 0;return r.text();});});
 (function naechstes(){if(lauf!==LAUF)return;
  if(i>=BUE.length){S.textContent=(n?n+(n===1?' Vers':' Verse')+' mit «'+q+'»'+(n>gezeigt?'; die ersten '+gezeigt+' stehen hier.':'.'):'Kein Vers mit «'+q+'».')+
   (fehlt?' '+fehlt+(fehlt===1?' Buch ist':' Bücher sind')+' ohne Verbindung nicht durchsucht.':'');return;}
  var b=BUE[i];S.textContent='Durchsuche '+b.name+' …';
  holen[i].then(function(text){if(lauf!==LAUF)return;var liste=null,anz=0;
   text.split('\n').forEach(function(z){if(!z)return;var t=z.split('\t'),g=grund(t[2]);
    for(var j=0;j<woerter.length;j++)if(g.indexOf(woerter[j])<0)return;
    n++;anz++;if(gezeigt>=MAX)return;gezeigt++;
    if(!liste){var s=el('section','tr-buch');s.appendChild(el('h3',null,b.name));liste=el('ol','treffer');s.appendChild(liste);T.appendChild(s);}
    var li=el('li'),a=el('a',null,stelle(b,t[0],t[1]));a.href=b.datei+'#'+b.abk+'-'+t[0]+'-'+t[1];li.appendChild(a);
    markiere(li,t[2],g,woerter);liste.appendChild(li);});
   if(liste)liste.previousSibling.appendChild(el('span','tr-zahl',' · '+anz));i++;naechstes();},
  function(){fehlt++;i++;naechstes();});})();}

// Fussnoten als Fenster oder am Rand
function zeigeFussnote(a){var n=$(a.getAttribute('href').slice(1));if(!n)return;POP.innerHTML='';var kp=el('div','pop-kopf');
 kp.appendChild(el('span','pop-stelle',(n.dataset.stelle||'')+' · Fussnote '+a.textContent));
 var z=el('button','schliessen','×');z.type='button';z.setAttribute('aria-label','Fussnote schliessen');z.addEventListener('click',function(){POP.hidden=true;});kp.appendChild(z);
 var t=el('div','pop-text');t.innerHTML=n.innerHTML;var zm=t.querySelector('.zur-marke');if(zm)zm.remove();
 POP.appendChild(kp);POP.appendChild(t);POP.hidden=false;var schmal=window.innerWidth<700;POP.classList.toggle('blatt-unten',schmal);
 if(schmal){POP.style.left=POP.style.top=POP.style.width='';return;}
 var M=document.querySelector('main'),mr=M.getBoundingClientRect(),r=a.getBoundingClientRect();
 var w=Math.min(mr.width,window.innerWidth-16);POP.style.width=w+'px';POP.style.boxSizing='border-box';
 POP.style.left=(Math.max(8,mr.left)+window.pageXOffset)+'px';
 var top=r.bottom+8;if(top+POP.offsetHeight>window.innerHeight-8&&r.top-POP.offsetHeight-8>0)top=r.top-POP.offsetHeight-8;
 POP.style.top=(window.pageYOffset+top)+'px';}
document.addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('sup.fn a');if(!a)return;
 var f=wert('f');if(f==='fenster'||(f==='rand'&&!R.classList.contains('mit-rand'))){ev.preventDefault();zeigeFussnote(a);}});
document.addEventListener('pointerdown',function(ev){if(!POP.hidden&&!ev.target.closest('#pop')&&!ev.target.closest('sup.fn'))POP.hidden=true;});
function rand(){var M=document.querySelector('main').getBoundingClientRect();
 var an=wert('f')==='rand'&&M.right+28+16*15+16<=document.documentElement.clientWidth;R.classList.toggle('mit-rand',an);
 document.querySelectorAll('.randnote').forEach(function(x){x.remove();});if(!an)return;
 var links=document.querySelector('main').getBoundingClientRect().right+window.pageXOffset+28,y=window.pageYOffset,liste=[];
 document.querySelectorAll('section.kapitel-text').forEach(function(sec,si){sec.querySelectorAll('sup.fn a').forEach(function(a){
  var n=$(a.getAttribute('href').slice(1));if(n)liste.push({s:si,n:n,top:a.getBoundingClientRect().top+y-4});});});
 var frag=document.createDocumentFragment();
 liste.forEach(function(x){var d=el('div','randnote');d.innerHTML=x.n.innerHTML;d.style.left=links+'px';d.style.top=x.top+'px';x.d=d;frag.appendChild(d);});
 SEITE.appendChild(frag);liste.forEach(function(x){x.h=x.d.offsetHeight;});
 var unten=0;liste.forEach(function(x){var t=Math.max(x.top,unten);x.d.style.top=t+'px';unten=t+x.h+8;});}

// Tastatur
document.addEventListener('keydown',function(ev){
 if(ev.key==='Escape'){POP.hidden=true;if(location.hash==='#navi'||location.hash==='#einst')location.hash='zu';return;}
 var im=ev.target.closest&&ev.target.closest('input,textarea');
 if(!im&&!ev.metaKey&&!ev.ctrlKey&&!ev.altKey&&(ev.key==='/'||ev.key==='g')){ev.preventDefault();location.hash='navi';}});
var ft;if(document.fonts&&document.fonts.addEventListener)document.fonts.addEventListener('loadingdone',function(){clearTimeout(ft);ft=setTimeout(function(){if(R.classList.contains('mit-rand'))rand();},150);});
var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){kopf();rand();ort();},250);});

// Offline-Speicher (Service Worker); jedes Buch wird beim ersten Öffnen gespeichert, auf Wunsch alle auf einmal
var OK=$('offline-knopf');
function offlineStand(){var S=$('offline-stand');if(!S||!window.caches||!R.classList.contains('sw'))return;
 Promise.all(BUE.map(function(b){return caches.match(b.datei).then(function(r){return!!r;},function(){return false;});})).then(function(l){
  var n=l.filter(Boolean).length;S.textContent=n===BUE.length?'Alle '+n+' Bücher sind auf diesem Gerät gespeichert.':n+' von '+BUE.length+' Büchern sind auf diesem Gerät gespeichert.';});}
if(OK)OK.addEventListener('click',function(){var S=$('offline-stand'),liste=[],i=0;OK.disabled=true;
 BUE.forEach(function(b){liste.push([b.name,b.datei],[null,'text/'+b.datei.replace(/\.html$/,'.txt')]);});
 (function hole(){if(i>=liste.length){OK.disabled=false;offlineStand();return;}if(liste[i][0])S.textContent='Speichere '+liste[i][0]+' …';
  fetch(liste[i][1]).then(function(r){if(!r.ok)throw 0;return r.blob();}).then(function(){i++;hole();},
   function(){OK.disabled=false;S.textContent='Keine Verbindung. Später noch einmal versuchen.';});})();});
if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
 var hatte=!!navigator.serviceWorker.controller;if(hatte)R.classList.add('sw');
 navigator.serviceWorker.register('sw.js').catch(function(){});
 navigator.serviceWorker.addEventListener('controllerchange',function(){R.classList.add('sw');offlineStand();if(!hatte){hatte=true;return;}
  var m=$('meldung');m.textContent='';var a=el('a',null,'Eine neue Fassung ist geladen. Hier tippen, um sie zu öffnen.');
  a.href='#';a.style.color='inherit';a.onclick=function(e){e.preventDefault();location.reload();};m.appendChild(a);m.hidden=false;});}

if(location.hash==='#navi'||location.hash==='#einst')location.replace('#zu');
farbe();kopf();rand();ort();leiste();offlineStand();
if(location.hash)hash();
else if(/[?&]weiter/.test(location.search)){weiterlesen();history.replaceState(null,'',location.pathname);}
try{var mm=sessionStorage.getItem('lyb-meldung');if(mm){sessionStorage.removeItem('lyb-meldung');meldung(mm);}}catch(e){}
if(T){var q0=new URLSearchParams(location.search).get('q');if(q0)suche(q0);}
})();
