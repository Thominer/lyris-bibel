// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-647dda5cf4ef';
const DATEIEN = {"1Chr.html": "44dde2d1a5e5", "1Joh.html": "a2c2b32c8d36", "1Koen.html": "1f763afa8868", "1Kor.html": "35fdebd0dbd4", "1Petr.html": "9327e8220a32", "1Sam.html": "e4270590b333", "1Thess.html": "5882bdef525f", "1Tim.html": "c870f632dd91", "2Chr.html": "4d9fc5b0b366", "2Joh.html": "c10858e305bd", "2Koen.html": "adca0abb785a", "2Kor.html": "6fbb0ca28fc8", "2Petr.html": "c6393388b5db", "2Sam.html": "97972c2ceed7", "2Thess.html": "8fdda0de60fc", "2Tim.html": "58288047b5e6", "3Joh.html": "c3da317e8aac", "Am.html": "85eb6b159882", "Apg.html": "f2c334e91748", "Dan.html": "660cbcbf3215", "Dtn.html": "6ccca9448a81", "Eph.html": "7081357fa9c2", "Ex.html": "d4ad68715436", "Ez.html": "a7c4f5876c50", "Gal.html": "4ede7185df61", "Gen.html": "ace946fef28c", "Hab.html": "7c6d5ec4fdd5", "Hag.html": "88ec63d83f61", "Hebr.html": "0c64e09a8129", "Hi.html": "b034243f7689", "Hld.html": "aab834b438bc", "Hos.html": "ad6735b6cd77", "Jak.html": "e40630a2b90d", "Jer.html": "56f8f97ffcad", "Jes.html": "7c1d281819dd", "Joel.html": "e78fb3e56f9b", "Joh.html": "724a577e8493", "Jona.html": "3225d7ab9ec8", "Jos.html": "b17f8363337c", "Jud.html": "b7b6007b4907", "Klgl.html": "02fc0a269c33", "Koh.html": "47e482e27800", "Kol.html": "ebe610d75f7e", "Lev.html": "fde001566ace", "Lk.html": "b64c88e40286", "Mal.html": "944e11b19836", "Mi.html": "e72ba33c59c0", "Mk.html": "8f744e17cefe", "Mt.html": "8cc0900396d7", "Nah.html": "ce9debbcd4af", "Num.html": "5cafd96ee8b3", "Obd.html": "c96a88b663f9", "Offb.html": "49b536c2a440", "Phil.html": "8152e5c17901", "Phlm.html": "04f869f47cdf", "Ps.html": "c839d9811d76", "Ri.html": "2bdaa01b3de3", "Roem.html": "0815da3ffdc5", "Rut.html": "6e3bf860fce5", "Sach.html": "0fa64ea44ae9", "Spr.html": "7e1a293b695b", "Tit.html": "b47745a72795", "Zef.html": "1c3002f79a4f", "anhang.html": "11ffdf0630ee", "app.js": "3c9dc13404e7", "apple-touch-icon.png": "181d82b10e02", "favicon.ico": "f781b9c6d787", "favicon.svg": "4443f742ba3d", "icon-192.png": "2ae7ab7993ef", "icon-512.png": "7e198510704d", "icon-maskable-192.png": "15f6c2d9b0d1", "icon-maskable-512.png": "3d905bd0009c", "index.html": "dea8cb684c20", "manifest.webmanifest": "85fb5a40ef7f", "name.svg": "e06a4d973e6f", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "signet.svg": "9fc7f60b8db6", "stil.css": "f9755256992f", "suche.html": "409c58d13cf7", "text/1Chr.txt": "bbce8dbbe998", "text/1Joh.txt": "caa7315e8e02", "text/1Koen.txt": "ad9ae6a351b2", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Sam.txt": "69512439be4b", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "dad699161967", "text/2Chr.txt": "6a0e890fff13", "text/2Joh.txt": "9142a12e76b1", "text/2Koen.txt": "ac91787f346c", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Sam.txt": "2f297f2a13dc", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Am.txt": "568ffb7211ed", "text/Apg.txt": "a6b526cbd730", "text/Dan.txt": "92728517b228", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Ex.txt": "65111e64a506", "text/Ez.txt": "dab8a8c7400f", "text/Gal.txt": "c5abbe459000", "text/Gen.txt": "9006e01723af", "text/Hab.txt": "12ffaa0038a3", "text/Hag.txt": "1da1dfd1c3a0", "text/Hebr.txt": "23ce5a4cc70d", "text/Hi.txt": "1c8cd50d90c8", "text/Hld.txt": "534c98068408", "text/Hos.txt": "eab74d6b9c8c", "text/Jak.txt": "ad266f677e30", "text/Jer.txt": "daa13e1081ca", "text/Jes.txt": "2bf61d829425", "text/Joel.txt": "204ed77ee200", "text/Joh.txt": "f4ca69672ee0", "text/Jona.txt": "0f548cac62ae", "text/Jos.txt": "f2ac8ab6596d", "text/Jud.txt": "24d5a1b6966d", "text/Klgl.txt": "3afad3b4ed22", "text/Koh.txt": "49a257e15405", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "354e81351e4c", "text/Lk.txt": "1b7febf1824e", "text/Mal.txt": "47c94f2ce9db", "text/Mi.txt": "2bc1231b6404", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Nah.txt": "05375e6c6314", "text/Num.txt": "f3243b0ce126", "text/Obd.txt": "f090cdc3c907", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "bfb2c3f22a5c", "text/Ri.txt": "942f59ea8597", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Sach.txt": "941046c084b5", "text/Spr.txt": "ae7b44c6fe59", "text/Tit.txt": "892a3ab07efb", "text/Zef.txt": "e8f56fed05f0", "verzeichnis.js": "2f95109b1e80", "vorwort.html": "e88f1c632935"};
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
