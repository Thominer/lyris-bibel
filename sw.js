// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-715f89bdd628';
const DATEIEN = {"1Joh.html": "140684981de1", "1Kor.html": "740c085e3950", "1Petr.html": "efa93df36054", "1Thess.html": "8f9f778aa2e9", "1Tim.html": "cd0ed6cf6ddd", "2Joh.html": "0c4394f047ef", "2Kor.html": "cbde07c8fc7c", "2Petr.html": "0d5b37fedff8", "2Thess.html": "fa37da5179fe", "2Tim.html": "6f3fab54a0eb", "3Joh.html": "2826c9c3e00a", "Apg.html": "ba80ba781c1a", "Dtn.html": "17c78e54b7e0", "Eph.html": "d385312a127f", "Ex.html": "9f9acf5ff0cf", "Gal.html": "98340e1d5f91", "Gen.html": "031cee11a2a1", "Hebr.html": "888337b8f346", "Jak.html": "617a9bbf2837", "Jes.html": "e9a5867b59d9", "Joh.html": "3cceba1f1f46", "Jud.html": "4b7debdd4a73", "Kol.html": "f0ada52b7106", "Lev.html": "9b1429dfbdf7", "Lk.html": "835c84472c41", "Mk.html": "d5aeb5dff55c", "Mt.html": "2c280ae002b0", "Num.html": "5da9ed3b6fea", "Offb.html": "a8b621448e90", "Phil.html": "7e4e200ce5d7", "Phlm.html": "b1b33d2409b2", "Ps.html": "572886f89f70", "Roem.html": "672b58710d59", "Rut.html": "9a7edfd052da", "Tit.html": "79a406bd9730", "anhang.html": "4874f10b1c2b", "app.js": "97bf22fc3c5e", "apple-touch-icon.png": "0e9302f8a978", "favicon-32.png": "97c6aaa18043", "icon-192.png": "23c892726e8f", "icon-512.png": "acc4d88c319c", "icon-maskable-512.png": "ebbb547d1beb", "index.html": "a7568a3259fe", "manifest.webmanifest": "501fc45449ef", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "stil.css": "ccd54f7459b7", "suche.html": "33de6a751196", "text/1Joh.txt": "caa7315e8e02", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "46da6b010b13", "text/2Joh.txt": "9142a12e76b1", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Apg.txt": "a6b526cbd730", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Ex.txt": "65111e64a506", "text/Gal.txt": "5d219900705e", "text/Gen.txt": "9006e01723af", "text/Hebr.txt": "23ce5a4cc70d", "text/Jak.txt": "ad266f677e30", "text/Jes.txt": "22fb807572cd", "text/Joh.txt": "f4ca69672ee0", "text/Jud.txt": "24d5a1b6966d", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "fe7fdbb9b78f", "text/Lk.txt": "49667532595f", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Num.txt": "f3243b0ce126", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "5fd30b6e5d5b", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Tit.txt": "23fabf825165", "verzeichnis.js": "e1bcc34aadc6", "vorwort.html": "2d058077f2e5"};
const KERN = ["index.html", "vorwort.html", "anhang.html", "suche.html", "stil.css", "app.js", "verzeichnis.js", "manifest.webmanifest", "schrift/cardo-greek-400-italic.woff2", "schrift/cardo-greek-400-normal.woff2", "schrift/cardo-greek-700-normal.woff2", "schrift/cardo-greek-ext-400-italic.woff2", "schrift/cardo-greek-ext-400-normal.woff2", "schrift/cardo-greek-ext-700-normal.woff2", "schrift/cardo-hebrew-400-italic.woff2", "schrift/cardo-hebrew-400-normal.woff2", "schrift/cardo-hebrew-700-normal.woff2", "schrift/cardo-latin-400-italic.woff2", "schrift/cardo-latin-400-normal.woff2", "schrift/cardo-latin-700-normal.woff2", "schrift/cardo-latin-ext-400-italic.woff2", "schrift/cardo-latin-ext-400-normal.woff2", "schrift/cardo-latin-ext-700-normal.woff2", "apple-touch-icon.png", "favicon-32.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png"];
const SUMME = 'x-lyb-summe';
const BASIS = new URL(self.registration.scope);
const voll = p => new URL(p, BASIS).href;
const OFFLINE = '<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
  '<meta name="color-scheme" content="light dark"><title>Offline · LYRIS-BIBEL</title><style>body{font-family:Georgia,serif;max-width:32rem;' +
  'margin:3rem auto;padding:0 1.2rem;line-height:1.55;color:#1d1b19;background:#fbf9f5}a{color:#7a3b2e}h1{font-weight:normal}' +
  '@media (prefers-color-scheme:dark){body{color:#e6e0d6;background:#1c1a17}a{color:#d39a82}}</style>' +
  '<h1>Noch nicht auf diesem Gerät</h1><p>Dieses Buch ist noch nicht offline gespeichert. Mit einer Verbindung lädt es ' +
  'beim Öffnen; in den Leseeinstellungen lassen sich alle Bücher auf einmal speichern.</p><p><a href="./">Zur Startseite</a></p>';

function mitSumme(res, p) {
  return res.blob().then(b => {
    const h = new Headers(res.headers);
    h.set(SUMME, DATEIEN[p]);
    return new Response(b, { status: res.status, statusText: res.statusText, headers: h });
  });
}
async function holen(c, p) {
  const r = await fetch(voll(p), { cache: 'no-cache' });
  if (!r.ok) throw new Error(p);
  await c.put(voll(p), await mitSumme(r, p));
}
self.addEventListener('install', e => e.waitUntil((async () => {
  const c = await caches.open(FASSUNG), alt = new Map();
  for (const n of await caches.keys()) {
    if (n === FASSUNG || !n.startsWith('lyb2-')) continue;
    const ac = await caches.open(n);
    for (const req of await ac.keys()) alt.set(req.url.slice(BASIS.href.length), await ac.match(req));
  }
  // was die vorige Fassung schon hat, unverändert übernehmen; Geändertes neu holen (ohne Netz die alte Fassung behalten)
  const nehmen = p => {
    const r = alt.get(p);
    if (r && r.headers.get(SUMME) === DATEIEN[p]) return c.put(voll(p), r);
    return holen(c, p).catch(x => { if (r) return c.put(voll(p), r); throw x; });
  };
  await Promise.all(KERN.map(nehmen));
  await Promise.all([...alt.keys()].filter(p => p in DATEIEN && !KERN.includes(p)).map(nehmen));
  await self.skipWaiting();
})()));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(k => Promise.all(k.filter(n => n !== FASSUNG && n.startsWith('lyb2-')).map(n => caches.delete(n))))
    .then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== BASIS.origin || !u.pathname.startsWith(BASIS.pathname)) return;
  const p = decodeURIComponent(u.pathname.slice(BASIS.pathname.length)) || 'index.html';
  if (!(p in DATEIEN)) return;
  e.respondWith(caches.open(FASSUNG).then(c => c.match(voll(p)).then(t => t || fetch(voll(p)).then(res => {
    if (res.ok) e.waitUntil(mitSumme(res.clone(), p).then(x => c.put(voll(p), x)));
    return res;
  }, () => r.mode === 'navigate'
    ? new Response(OFFLINE, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }) : Response.error()))));
});
