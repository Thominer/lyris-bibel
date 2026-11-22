// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-89e0918f54bb';
const DATEIEN = {"1Chr.html": "03cbd9def956", "1Joh.html": "c0bc0651d804", "1Koen.html": "9c9c8b0b04fd", "1Kor.html": "4b9b5eb463f5", "1Petr.html": "b64b78c9974d", "1Sam.html": "5a2292fcf34c", "1Thess.html": "d8c9b29f06a8", "1Tim.html": "50a61ccc7984", "2Chr.html": "be3cc96ac545", "2Joh.html": "601add18789f", "2Koen.html": "9e93fbc497b1", "2Kor.html": "c2590259ab18", "2Petr.html": "225af3c8281f", "2Sam.html": "863ea2d1a980", "2Thess.html": "1287893fad41", "2Tim.html": "6b0311ffa1b5", "3Joh.html": "09743643d8f6", "Am.html": "608ab2c9bd2a", "Apg.html": "de547cf3b5e1", "Dan.html": "b163f7a3d6ff", "Dtn.html": "0cdab82b404b", "Eph.html": "b776d02d92ce", "Ex.html": "60d18096153d", "Ez.html": "a88b876d013f", "Gal.html": "8f4a4add0218", "Gen.html": "3f3251f1009b", "Hab.html": "6a3602b02086", "Hag.html": "71074f1e51c6", "Hebr.html": "10e8b4557569", "Hi.html": "a9520d341acd", "Hld.html": "634622969eb8", "Hos.html": "fdb0291a8c2d", "Jak.html": "efaf87869514", "Jer.html": "052d081c4ff6", "Jes.html": "74815b963451", "Joel.html": "57f07723be7f", "Joh.html": "2616b95565cd", "Jona.html": "0222d1a0aaac", "Jos.html": "82a53fea1d92", "Jud.html": "c2fe38ddfb32", "Klgl.html": "50c87bde5296", "Koh.html": "cb2385af9c54", "Kol.html": "0bfddfaf8ddd", "Lev.html": "8eb27066f381", "Lk.html": "ce44e7dfbd3e", "Mal.html": "9b22841905f5", "Mi.html": "e5bc5025207e", "Mk.html": "4b649ccea2a2", "Mt.html": "440ba8c2f688", "Nah.html": "5f1ae3bfaf0e", "Num.html": "766097909a60", "Obd.html": "98c973d7fbee", "Offb.html": "0339043ce7e8", "Phil.html": "79c21f0e2145", "Phlm.html": "44766762fde5", "Ps.html": "efa1af27a8f2", "Ri.html": "08c550d7ea4a", "Roem.html": "74623112c3fc", "Rut.html": "d2ae566a20b1", "Sach.html": "7c396458f7b5", "Tit.html": "23c2d031b6e5", "Zef.html": "918b1d19a74a", "anhang.html": "7515b62e38c9", "app.js": "3c9dc13404e7", "apple-touch-icon.png": "181d82b10e02", "favicon.ico": "f781b9c6d787", "favicon.svg": "4443f742ba3d", "icon-192.png": "2ae7ab7993ef", "icon-512.png": "7e198510704d", "icon-maskable-192.png": "15f6c2d9b0d1", "icon-maskable-512.png": "3d905bd0009c", "index.html": "f8ccd250eaca", "manifest.webmanifest": "c232fad897c6", "name.svg": "e06a4d973e6f", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "signet.svg": "9fc7f60b8db6", "stil.css": "f9755256992f", "suche.html": "7e5bcd05194a", "text/1Chr.txt": "bbce8dbbe998", "text/1Joh.txt": "caa7315e8e02", "text/1Koen.txt": "ad9ae6a351b2", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Sam.txt": "69512439be4b", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "dad699161967", "text/2Chr.txt": "6a0e890fff13", "text/2Joh.txt": "9142a12e76b1", "text/2Koen.txt": "ac91787f346c", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Sam.txt": "2f297f2a13dc", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Am.txt": "568ffb7211ed", "text/Apg.txt": "a6b526cbd730", "text/Dan.txt": "92728517b228", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Ex.txt": "65111e64a506", "text/Ez.txt": "dab8a8c7400f", "text/Gal.txt": "c5abbe459000", "text/Gen.txt": "9006e01723af", "text/Hab.txt": "12ffaa0038a3", "text/Hag.txt": "1da1dfd1c3a0", "text/Hebr.txt": "23ce5a4cc70d", "text/Hi.txt": "1c8cd50d90c8", "text/Hld.txt": "534c98068408", "text/Hos.txt": "eab74d6b9c8c", "text/Jak.txt": "ad266f677e30", "text/Jer.txt": "daa13e1081ca", "text/Jes.txt": "2bf61d829425", "text/Joel.txt": "204ed77ee200", "text/Joh.txt": "f4ca69672ee0", "text/Jona.txt": "0f548cac62ae", "text/Jos.txt": "f2ac8ab6596d", "text/Jud.txt": "24d5a1b6966d", "text/Klgl.txt": "3afad3b4ed22", "text/Koh.txt": "49a257e15405", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "354e81351e4c", "text/Lk.txt": "1b7febf1824e", "text/Mal.txt": "47c94f2ce9db", "text/Mi.txt": "2bc1231b6404", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Nah.txt": "05375e6c6314", "text/Num.txt": "f3243b0ce126", "text/Obd.txt": "f090cdc3c907", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "bfb2c3f22a5c", "text/Ri.txt": "942f59ea8597", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Sach.txt": "941046c084b5", "text/Tit.txt": "892a3ab07efb", "text/Zef.txt": "e8f56fed05f0", "verzeichnis.js": "473a0912ad0d", "vorwort.html": "0528eaaa0f3a"};
const KERN = ["index.html", "vorwort.html", "anhang.html", "suche.html", "stil.css", "app.js", "verzeichnis.js", "manifest.webmanifest", "name.svg", "signet.svg", "favicon.svg", "schrift/cardo-greek-400-italic.woff2", "schrift/cardo-greek-400-normal.woff2", "schrift/cardo-greek-700-normal.woff2", "schrift/cardo-greek-ext-400-italic.woff2", "schrift/cardo-greek-ext-400-normal.woff2", "schrift/cardo-greek-ext-700-normal.woff2", "schrift/cardo-hebrew-400-italic.woff2", "schrift/cardo-hebrew-400-normal.woff2", "schrift/cardo-hebrew-700-normal.woff2", "schrift/cardo-latin-400-italic.woff2", "schrift/cardo-latin-400-normal.woff2", "schrift/cardo-latin-700-normal.woff2", "schrift/cardo-latin-ext-400-italic.woff2", "schrift/cardo-latin-ext-400-normal.woff2", "schrift/cardo-latin-ext-700-normal.woff2", "apple-touch-icon.png", "favicon.ico", "icon-192.png", "icon-512.png", "icon-maskable-192.png", "icon-maskable-512.png"];
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
