// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-55e207c5065b';
const DATEIEN = {"1Joh.html": "d6f8a6070114", "1Kor.html": "0ad888760eea", "1Petr.html": "f8bba217e858", "1Thess.html": "ce0ffb00ebe9", "1Tim.html": "0b0119c6683a", "2Joh.html": "dcfc36b025bc", "2Kor.html": "359e801334dd", "2Petr.html": "57a55a080b8d", "2Thess.html": "830d1c8a3032", "2Tim.html": "496e298a80a5", "3Joh.html": "f1db1389d1e6", "Apg.html": "54a38f99a5ba", "Dan.html": "49ad79b9a5b1", "Dtn.html": "2e121cafa4f3", "Eph.html": "30ef695417e2", "Ex.html": "7824c3bab8cc", "Gal.html": "65d406b82df6", "Gen.html": "d3791e72f8ec", "Hebr.html": "5620a6225126", "Jak.html": "31943032eba6", "Jes.html": "0d07b9a774e6", "Joh.html": "2090395f9a3e", "Jud.html": "0fb63c2cfd7e", "Koh.html": "3d159dda87cb", "Kol.html": "79d2f466014c", "Lev.html": "a989fa30ac00", "Lk.html": "1eade2739df4", "Mk.html": "d227743e4fe1", "Mt.html": "5cde8f2e3fa2", "Num.html": "975d5bb5db11", "Offb.html": "af0daeeb69ca", "Phil.html": "8d6f2840953a", "Phlm.html": "a03bd86eb2be", "Ps.html": "c6eee2977d47", "Roem.html": "3167622163ba", "Rut.html": "4738005c6469", "Sach.html": "a058e4d1df0e", "Tit.html": "66781e13bb23", "anhang.html": "4046011bf4a0", "app.js": "3c9dc13404e7", "apple-touch-icon.png": "9128221f0fda", "favicon.ico": "ae6462979411", "favicon.svg": "485acf288bcd", "icon-192.png": "2d39aaa20f52", "icon-512.png": "4404fbd4aad9", "index.html": "8b55ddeee2a8", "manifest.webmanifest": "6337dd261b39", "name.svg": "e06a4d973e6f", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "signet.svg": "485acf288bcd", "stil.css": "d8a09343c637", "suche.html": "7e8c89660800", "text/1Joh.txt": "caa7315e8e02", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "46da6b010b13", "text/2Joh.txt": "9142a12e76b1", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Apg.txt": "a6b526cbd730", "text/Dan.txt": "92728517b228", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Ex.txt": "65111e64a506", "text/Gal.txt": "5d219900705e", "text/Gen.txt": "9006e01723af", "text/Hebr.txt": "23ce5a4cc70d", "text/Jak.txt": "ad266f677e30", "text/Jes.txt": "2bf61d829425", "text/Joh.txt": "f4ca69672ee0", "text/Jud.txt": "24d5a1b6966d", "text/Koh.txt": "49a257e15405", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "fe7fdbb9b78f", "text/Lk.txt": "49667532595f", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Num.txt": "f3243b0ce126", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "51be71dd7c8a", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Sach.txt": "941046c084b5", "text/Tit.txt": "23fabf825165", "verzeichnis.js": "9a6fc37a3283", "vorwort.html": "c05d6237b319"};
const KERN = ["index.html", "vorwort.html", "anhang.html", "suche.html", "stil.css", "app.js", "verzeichnis.js", "manifest.webmanifest", "name.svg", "signet.svg", "schrift/cardo-greek-400-italic.woff2", "schrift/cardo-greek-400-normal.woff2", "schrift/cardo-greek-700-normal.woff2", "schrift/cardo-greek-ext-400-italic.woff2", "schrift/cardo-greek-ext-400-normal.woff2", "schrift/cardo-greek-ext-700-normal.woff2", "schrift/cardo-hebrew-400-italic.woff2", "schrift/cardo-hebrew-400-normal.woff2", "schrift/cardo-hebrew-700-normal.woff2", "schrift/cardo-latin-400-italic.woff2", "schrift/cardo-latin-400-normal.woff2", "schrift/cardo-latin-700-normal.woff2", "schrift/cardo-latin-ext-400-italic.woff2", "schrift/cardo-latin-ext-400-normal.woff2", "schrift/cardo-latin-ext-700-normal.woff2", "apple-touch-icon.png", "favicon.ico", "favicon.svg", "icon-192.png", "icon-512.png"];
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
