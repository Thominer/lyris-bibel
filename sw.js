// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-a057e0a732bc';
const DATEIEN = {"1Joh.html": "ac7c396842b3", "1Kor.html": "9b3ab6e93853", "1Petr.html": "08a4c129708b", "1Thess.html": "763d20561fe5", "1Tim.html": "9ebe145e083b", "2Joh.html": "5f6a4529cd72", "2Kor.html": "1be419c46de4", "2Petr.html": "6867d7ca9d2a", "2Thess.html": "03f7a41ea544", "2Tim.html": "769024775206", "3Joh.html": "1fee1f0619dd", "Apg.html": "b2d673258a13", "Dtn.html": "bb45394a7dcc", "Eph.html": "f205cf71ac89", "Ex.html": "69d1dc01888d", "Gal.html": "7645c6421a6d", "Gen.html": "3abedd0aa5b4", "Hebr.html": "4201d882cbed", "Jak.html": "e462bcc3a230", "Jes.html": "78dc5c0a534a", "Joh.html": "5b07805f7253", "Jud.html": "d9afe09127fa", "Koh.html": "e5d244574297", "Kol.html": "57d1e86ba964", "Lev.html": "fa2e79c4fb58", "Lk.html": "77f586aa0227", "Mk.html": "313a93b807ca", "Mt.html": "b7686ed5acf4", "Num.html": "61a4cfb45343", "Offb.html": "d437488f1fb8", "Phil.html": "69c60c91c455", "Phlm.html": "1d889ed5fbf3", "Ps.html": "eeb7fe6eb56e", "Roem.html": "d3c436864d16", "Rut.html": "ea4f013d8c07", "Tit.html": "bfb2425d5a75", "anhang.html": "67ff5f3366da", "app.js": "3c9dc13404e7", "apple-touch-icon.png": "d7c41eecfbf3", "favicon-32.png": "3986c4fcca73", "icon-192.png": "703ce34be7f5", "icon-512.png": "1cbd19d7a22a", "icon-maskable-512.png": "cda739b1a781", "index.html": "24897b286193", "manifest.webmanifest": "5d4da87684a0", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "stil.css": "f8e003ea94a9", "suche.html": "ab61bdb3b6b3", "text/1Joh.txt": "caa7315e8e02", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "46da6b010b13", "text/2Joh.txt": "9142a12e76b1", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Apg.txt": "a6b526cbd730", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Ex.txt": "65111e64a506", "text/Gal.txt": "5d219900705e", "text/Gen.txt": "9006e01723af", "text/Hebr.txt": "23ce5a4cc70d", "text/Jak.txt": "ad266f677e30", "text/Jes.txt": "2bf61d829425", "text/Joh.txt": "f4ca69672ee0", "text/Jud.txt": "24d5a1b6966d", "text/Koh.txt": "49a257e15405", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "fe7fdbb9b78f", "text/Lk.txt": "49667532595f", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Num.txt": "f3243b0ce126", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "51be71dd7c8a", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Tit.txt": "23fabf825165", "verzeichnis.js": "42f4159f6fd4", "vorwort.html": "5c1091a8aef6"};
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
