// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-1e6748f564f7';
const DATEIEN = {"1Chr.html": "49c148a15f37", "1Joh.html": "bba64cf67c4d", "1Koen.html": "d342941c20b8", "1Kor.html": "94d70223995d", "1Petr.html": "2b81dfaf8469", "1Sam.html": "20e1f754c45b", "1Thess.html": "f6a0c59f0864", "1Tim.html": "9efe0d47f4be", "2Chr.html": "68d0976522a4", "2Joh.html": "9b5aecd38a5b", "2Koen.html": "5e7690c8059b", "2Kor.html": "343a012605ec", "2Petr.html": "6a9ef579dd49", "2Sam.html": "4aa7a7222091", "2Thess.html": "ba03b47782cf", "2Tim.html": "c9562648b42e", "3Joh.html": "5452c2bb05db", "Am.html": "3b291b99130a", "Apg.html": "12fd0383080b", "Dan.html": "fa38cc30395c", "Dtn.html": "8658b0b732c3", "Eph.html": "8534379dc876", "Esr.html": "1a61dd75d403", "Est.html": "e9f877f2490f", "Ex.html": "c73ba929b74e", "Ez.html": "ef9d95bbcd17", "Gal.html": "2514e24cf8da", "Gen.html": "82a14c778c7c", "Hab.html": "f81034672c92", "Hag.html": "e89cb6ed668c", "Hebr.html": "8424793ffa5a", "Hi.html": "07dd5ead70ca", "Hld.html": "1259be08c3ff", "Hos.html": "50d21b7a7a72", "Jak.html": "842718fad587", "Jer.html": "63aa933ef71a", "Jes.html": "8b98402fab20", "Joel.html": "e5daeec06daf", "Joh.html": "66c49d672cb4", "Jona.html": "62d781c34741", "Jos.html": "0497e2b4e94c", "Jud.html": "a9b99dbcfd98", "Klgl.html": "506c9161a530", "Koh.html": "c05f086c49e9", "Kol.html": "61c35ccb11a2", "Lev.html": "3032eae032df", "Lk.html": "b5e3dc5e19f8", "Mal.html": "9f4e0fa5e320", "Mi.html": "4f3cce279859", "Mk.html": "820f4af527e4", "Mt.html": "9cda60150182", "Nah.html": "0c158ce106e6", "Neh.html": "0add4f763acd", "Num.html": "0904a4e87390", "Obd.html": "b17b241c6b30", "Offb.html": "586a43f41b10", "Phil.html": "7481a4b5c325", "Phlm.html": "1da1304847d0", "Ps.html": "3f016989c20f", "Ri.html": "64e5126b995c", "Roem.html": "5c2822067419", "Rut.html": "69656707e890", "Sach.html": "be6cc63c9adb", "Spr.html": "3f23a2d79476", "Tit.html": "c014c5ff2254", "Zef.html": "1599cae7b989", "anhang.html": "f763d45ca4f5", "app.js": "3c9dc13404e7", "apple-touch-icon.png": "181d82b10e02", "favicon.ico": "f781b9c6d787", "favicon.svg": "4443f742ba3d", "icon-192.png": "2ae7ab7993ef", "icon-512.png": "7e198510704d", "icon-maskable-192.png": "15f6c2d9b0d1", "icon-maskable-512.png": "3d905bd0009c", "index.html": "9bd22fe2b0e1", "manifest.webmanifest": "e0f1ae59ab7f", "name.svg": "e06a4d973e6f", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "signet.svg": "9fc7f60b8db6", "stil.css": "f9755256992f", "suche.html": "700f41d1ca00", "text/1Chr.txt": "bbce8dbbe998", "text/1Joh.txt": "caa7315e8e02", "text/1Koen.txt": "ad9ae6a351b2", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Sam.txt": "69512439be4b", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "dad699161967", "text/2Chr.txt": "6a0e890fff13", "text/2Joh.txt": "9142a12e76b1", "text/2Koen.txt": "ac91787f346c", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Sam.txt": "2f297f2a13dc", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Am.txt": "568ffb7211ed", "text/Apg.txt": "a6b526cbd730", "text/Dan.txt": "92728517b228", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Esr.txt": "d64c2645f461", "text/Est.txt": "a21e7f6521bf", "text/Ex.txt": "65111e64a506", "text/Ez.txt": "dab8a8c7400f", "text/Gal.txt": "c5abbe459000", "text/Gen.txt": "9006e01723af", "text/Hab.txt": "12ffaa0038a3", "text/Hag.txt": "1da1dfd1c3a0", "text/Hebr.txt": "23ce5a4cc70d", "text/Hi.txt": "1c8cd50d90c8", "text/Hld.txt": "534c98068408", "text/Hos.txt": "eab74d6b9c8c", "text/Jak.txt": "ad266f677e30", "text/Jer.txt": "daa13e1081ca", "text/Jes.txt": "2bf61d829425", "text/Joel.txt": "204ed77ee200", "text/Joh.txt": "f4ca69672ee0", "text/Jona.txt": "0f548cac62ae", "text/Jos.txt": "f2ac8ab6596d", "text/Jud.txt": "24d5a1b6966d", "text/Klgl.txt": "3afad3b4ed22", "text/Koh.txt": "49a257e15405", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "354e81351e4c", "text/Lk.txt": "1b7febf1824e", "text/Mal.txt": "47c94f2ce9db", "text/Mi.txt": "2bc1231b6404", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Nah.txt": "05375e6c6314", "text/Neh.txt": "81502ae43c6b", "text/Num.txt": "f3243b0ce126", "text/Obd.txt": "f090cdc3c907", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "bfb2c3f22a5c", "text/Ri.txt": "942f59ea8597", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Sach.txt": "941046c084b5", "text/Spr.txt": "ae7b44c6fe59", "text/Tit.txt": "892a3ab07efb", "text/Zef.txt": "e8f56fed05f0", "verzeichnis.js": "0311e77937c2", "vorwort.html": "d0efe10f3b11"};
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
