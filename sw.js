// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-6061ad562fe3';
const DATEIEN = {"1Joh.html": "23781262e4e4", "1Koen.html": "0657a7284bb9", "1Kor.html": "31bdf91a27df", "1Petr.html": "36f48d76b56a", "1Sam.html": "906fc2b8d013", "1Thess.html": "5a6b4f0a4543", "1Tim.html": "b06568f4e445", "2Joh.html": "a406c1a51a26", "2Koen.html": "9067a6642a0c", "2Kor.html": "52a91091d6e7", "2Petr.html": "62fa0cbf673e", "2Sam.html": "c3e0415ceab5", "2Thess.html": "9f7fb36b66e9", "2Tim.html": "14fb80049f91", "3Joh.html": "875b43ed3e07", "Am.html": "0594f6788bf9", "Apg.html": "3cd5ae42593d", "Dan.html": "7c34a133c22e", "Dtn.html": "9c2d95c9f9b2", "Eph.html": "589250565aaa", "Ex.html": "8de344142078", "Ez.html": "eb86193513ad", "Gal.html": "77739d195728", "Gen.html": "ec5e7cadd6b3", "Hab.html": "e9780b02709c", "Hag.html": "458764f933d8", "Hebr.html": "e483ab7be6ad", "Hld.html": "8209d6369ff0", "Hos.html": "8a50171f79d0", "Jak.html": "340a247fefd9", "Jer.html": "d3120c755ef7", "Jes.html": "9241cd822700", "Joel.html": "bd86de5990ff", "Joh.html": "591ab2efb4c9", "Jona.html": "c7badc20a8e0", "Jos.html": "1161a93da9f5", "Jud.html": "dd679911dc61", "Klgl.html": "a0544ad1c6e7", "Koh.html": "52476ad7f991", "Kol.html": "63fde54c7abf", "Lev.html": "37df73ad9f32", "Lk.html": "08106fb1313b", "Mal.html": "4be9259e5622", "Mi.html": "293d35702fb0", "Mk.html": "e20d891ec90e", "Mt.html": "88b4bb7f71b8", "Nah.html": "f7b53411157f", "Num.html": "780460f78875", "Obd.html": "7cfb8d0a1c3e", "Offb.html": "18eb49831fa3", "Phil.html": "c3f1e637d579", "Phlm.html": "a2c4ee5dcc73", "Ps.html": "e52872d168f9", "Ri.html": "73899445eee0", "Roem.html": "b519ed00ed71", "Rut.html": "ee997e3d5368", "Sach.html": "37e74b39d9c2", "Tit.html": "d8a27f4f321c", "Zef.html": "385246217444", "anhang.html": "efe4a6ffbe35", "app.js": "3c9dc13404e7", "apple-touch-icon.png": "9128221f0fda", "favicon.ico": "ae6462979411", "favicon.svg": "485acf288bcd", "icon-192.png": "2d39aaa20f52", "icon-512.png": "4404fbd4aad9", "index.html": "21a730dfc9fc", "manifest.webmanifest": "53820433c0d0", "name.svg": "e06a4d973e6f", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "signet.svg": "485acf288bcd", "stil.css": "d8a09343c637", "suche.html": "fd47af8ba933", "text/1Joh.txt": "caa7315e8e02", "text/1Koen.txt": "ad9ae6a351b2", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Sam.txt": "69512439be4b", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "46da6b010b13", "text/2Joh.txt": "9142a12e76b1", "text/2Koen.txt": "ac91787f346c", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Sam.txt": "2f297f2a13dc", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Am.txt": "568ffb7211ed", "text/Apg.txt": "a6b526cbd730", "text/Dan.txt": "92728517b228", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Ex.txt": "65111e64a506", "text/Ez.txt": "dab8a8c7400f", "text/Gal.txt": "5d219900705e", "text/Gen.txt": "9006e01723af", "text/Hab.txt": "12ffaa0038a3", "text/Hag.txt": "1da1dfd1c3a0", "text/Hebr.txt": "23ce5a4cc70d", "text/Hld.txt": "534c98068408", "text/Hos.txt": "eab74d6b9c8c", "text/Jak.txt": "ad266f677e30", "text/Jer.txt": "daa13e1081ca", "text/Jes.txt": "2bf61d829425", "text/Joel.txt": "204ed77ee200", "text/Joh.txt": "f4ca69672ee0", "text/Jona.txt": "0f548cac62ae", "text/Jos.txt": "f2ac8ab6596d", "text/Jud.txt": "24d5a1b6966d", "text/Klgl.txt": "3afad3b4ed22", "text/Koh.txt": "49a257e15405", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "354e81351e4c", "text/Lk.txt": "1b7febf1824e", "text/Mal.txt": "47c94f2ce9db", "text/Mi.txt": "2bc1231b6404", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Nah.txt": "05375e6c6314", "text/Num.txt": "f3243b0ce126", "text/Obd.txt": "f090cdc3c907", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "d82b04ec8ac6", "text/Ri.txt": "942f59ea8597", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Sach.txt": "941046c084b5", "text/Tit.txt": "23fabf825165", "text/Zef.txt": "e8f56fed05f0", "verzeichnis.js": "fc019e01c9e7", "vorwort.html": "acfaf7fffa93"};
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
