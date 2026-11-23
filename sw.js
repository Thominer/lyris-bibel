// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-211bd4283999';
const DATEIEN = {"1Chr.html": "dd89374ebf84", "1Joh.html": "a92854940b6a", "1Koen.html": "4588c8e1916d", "1Kor.html": "6d9864ba47f9", "1Petr.html": "78331e62b131", "1Sam.html": "9b16a76d275c", "1Thess.html": "f5dc336fad3a", "1Tim.html": "bbe17121d434", "2Chr.html": "5c0fceebe4db", "2Joh.html": "6e3601f091b7", "2Koen.html": "85b844e5f19a", "2Kor.html": "ee5021f3b622", "2Petr.html": "67485990986a", "2Sam.html": "6df75cd115c9", "2Thess.html": "27d97aecfa42", "2Tim.html": "d0bff616e179", "3Joh.html": "59076a8010ee", "Am.html": "e727979c31e1", "Apg.html": "70c5802d8f1c", "Dan.html": "900890e0cde1", "Dtn.html": "bf46cdb2c447", "Eph.html": "dcc9e0b9c4ec", "Esr.html": "fa7b65cb8d26", "Est.html": "35347a3291a5", "Ex.html": "84e69c7ddaf7", "Ez.html": "e58c3d723d5f", "Gal.html": "35fa16388d7b", "Gen.html": "87324979011e", "Hab.html": "c3da0603d4ce", "Hag.html": "74caf5f82837", "Hebr.html": "c3283bc62760", "Hi.html": "59caec6e4951", "Hld.html": "9ad4bcc4e8ff", "Hos.html": "875d2997005d", "Jak.html": "cfc9631ceb5e", "Jer.html": "becb8eb2fd0c", "Jes.html": "7af7386b7250", "Joel.html": "195094af55c8", "Joh.html": "9f0709527dd6", "Jona.html": "58af9dfadead", "Jos.html": "bca13f029d8d", "Jud.html": "c05621209810", "Klgl.html": "5dc28891fa54", "Koh.html": "ddea546e2669", "Kol.html": "00f441f83970", "Lev.html": "d25fd923c057", "Lk.html": "0306fe18b69e", "Mal.html": "3ff6864e1c2e", "Mi.html": "9799dee43a1f", "Mk.html": "d89aaac7a6fd", "Mt.html": "4ad90284a64a", "Nah.html": "86263084e5ef", "Neh.html": "14ea4b0f2106", "Num.html": "3cf3a14edde1", "Obd.html": "971603170478", "Offb.html": "0bd74162a313", "Phil.html": "467da3689451", "Phlm.html": "581f73d46dfa", "Ps.html": "2374292d6ef6", "Ri.html": "b23a6aeecec3", "Roem.html": "f3dcb0827f31", "Rut.html": "af59bacdb500", "Sach.html": "a75b8576df65", "Spr.html": "381971587007", "Tit.html": "5c227be929ca", "Zef.html": "6f12a591c745", "anhang.html": "9f20b7691adc", "app.js": "3c9dc13404e7", "apple-touch-icon.png": "181d82b10e02", "favicon.ico": "f781b9c6d787", "favicon.svg": "4443f742ba3d", "icon-192.png": "2ae7ab7993ef", "icon-512.png": "7e198510704d", "icon-maskable-192.png": "15f6c2d9b0d1", "icon-maskable-512.png": "3d905bd0009c", "index.html": "44c4c77cfd17", "manifest.webmanifest": "e0f1ae59ab7f", "name.svg": "e06a4d973e6f", "schrift/alegreya-sans-latin-300-italic.woff2": "7dbfdddb5a6f", "schrift/alegreya-sans-latin-300-normal.woff2": "01a5660f4738", "schrift/alegreya-sans-latin-500-normal.woff2": "005c64e2da1b", "schrift/alegreya-sans-latin-ext-300-italic.woff2": "8f5074272e15", "schrift/alegreya-sans-latin-ext-300-normal.woff2": "f6c5107998a9", "schrift/alegreya-sans-latin-ext-500-normal.woff2": "bdb8ca23655c", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "schrift/cormorant-garamond-latin-300-italic.woff2": "faa68c1a1394", "schrift/cormorant-garamond-latin-300-normal.woff2": "0693b254f956", "schrift/cormorant-garamond-latin-500-normal.woff2": "c20b57f6f4e8", "schrift/cormorant-garamond-latin-ext-300-italic.woff2": "6f4880f8de1e", "schrift/cormorant-garamond-latin-ext-300-normal.woff2": "8a725bfe0bd6", "schrift/cormorant-garamond-latin-ext-500-normal.woff2": "3546a0201aaf", "schrift/inter-latin-200-italic.woff2": "caf4236f7032", "schrift/inter-latin-200-normal.woff2": "18c82a74bf81", "schrift/inter-latin-500-normal.woff2": "6b66c741bf8b", "schrift/inter-latin-ext-200-italic.woff2": "95f651ff2a42", "schrift/inter-latin-ext-200-normal.woff2": "5faf504778dd", "schrift/inter-latin-ext-500-normal.woff2": "9dca915ff8b6", "schrift/jost-latin-200-italic.woff2": "08e8c1115741", "schrift/jost-latin-200-normal.woff2": "1041fa9b69d2", "schrift/jost-latin-500-normal.woff2": "bd6ec6c623e1", "schrift/jost-latin-ext-200-italic.woff2": "b1c6d013895d", "schrift/jost-latin-ext-200-normal.woff2": "33c9081bd70b", "schrift/jost-latin-ext-500-normal.woff2": "085770535df3", "schrift/spectral-latin-200-italic.woff2": "e30ff88085ac", "schrift/spectral-latin-200-normal.woff2": "5e861bdb6a46", "schrift/spectral-latin-500-normal.woff2": "df8445200231", "schrift/spectral-latin-ext-200-italic.woff2": "b95df79df08c", "schrift/spectral-latin-ext-200-normal.woff2": "e24f1d663ced", "schrift/spectral-latin-ext-500-normal.woff2": "8cac2ecc6de6", "signet.svg": "9fc7f60b8db6", "stil.css": "cd1e05598da6", "suche.html": "445121d486de", "text/1Chr.txt": "bbce8dbbe998", "text/1Joh.txt": "caa7315e8e02", "text/1Koen.txt": "ad9ae6a351b2", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Sam.txt": "69512439be4b", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "dad699161967", "text/2Chr.txt": "6a0e890fff13", "text/2Joh.txt": "9142a12e76b1", "text/2Koen.txt": "ac91787f346c", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Sam.txt": "2f297f2a13dc", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Am.txt": "568ffb7211ed", "text/Apg.txt": "a6b526cbd730", "text/Dan.txt": "92728517b228", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Esr.txt": "d64c2645f461", "text/Est.txt": "a21e7f6521bf", "text/Ex.txt": "65111e64a506", "text/Ez.txt": "dab8a8c7400f", "text/Gal.txt": "c5abbe459000", "text/Gen.txt": "9006e01723af", "text/Hab.txt": "12ffaa0038a3", "text/Hag.txt": "1da1dfd1c3a0", "text/Hebr.txt": "23ce5a4cc70d", "text/Hi.txt": "1c8cd50d90c8", "text/Hld.txt": "534c98068408", "text/Hos.txt": "eab74d6b9c8c", "text/Jak.txt": "ad266f677e30", "text/Jer.txt": "daa13e1081ca", "text/Jes.txt": "2bf61d829425", "text/Joel.txt": "204ed77ee200", "text/Joh.txt": "f4ca69672ee0", "text/Jona.txt": "0f548cac62ae", "text/Jos.txt": "f2ac8ab6596d", "text/Jud.txt": "24d5a1b6966d", "text/Klgl.txt": "3afad3b4ed22", "text/Koh.txt": "49a257e15405", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "354e81351e4c", "text/Lk.txt": "1b7febf1824e", "text/Mal.txt": "47c94f2ce9db", "text/Mi.txt": "2bc1231b6404", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Nah.txt": "05375e6c6314", "text/Neh.txt": "81502ae43c6b", "text/Num.txt": "f3243b0ce126", "text/Obd.txt": "f090cdc3c907", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "bfb2c3f22a5c", "text/Ri.txt": "942f59ea8597", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Sach.txt": "941046c084b5", "text/Spr.txt": "ae7b44c6fe59", "text/Tit.txt": "892a3ab07efb", "text/Zef.txt": "e8f56fed05f0", "verzeichnis.js": "0311e77937c2", "vorwort.html": "1fcc555e049d"};
const KERN = ["index.html", "vorwort.html", "anhang.html", "suche.html", "stil.css", "app.js", "verzeichnis.js", "manifest.webmanifest", "name.svg", "signet.svg", "favicon.svg", "schrift/cardo-greek-400-italic.woff2", "schrift/cardo-greek-400-normal.woff2", "schrift/cardo-greek-700-normal.woff2", "schrift/cardo-greek-ext-400-italic.woff2", "schrift/cardo-greek-ext-400-normal.woff2", "schrift/cardo-greek-ext-700-normal.woff2", "schrift/cardo-hebrew-400-italic.woff2", "schrift/cardo-hebrew-400-normal.woff2", "schrift/cardo-hebrew-700-normal.woff2", "schrift/cardo-latin-400-italic.woff2", "schrift/cardo-latin-400-normal.woff2", "schrift/cardo-latin-700-normal.woff2", "schrift/cardo-latin-ext-400-italic.woff2", "schrift/cardo-latin-ext-400-normal.woff2", "schrift/cardo-latin-ext-700-normal.woff2", "apple-touch-icon.png", "favicon.ico", "icon-192.png", "icon-512.png", "icon-maskable-192.png", "icon-maskable-512.png"];
const SUMME = 'x-lyb-summe';
const BASIS = new URL(self.registration.scope);
const voll = p => new URL(p, BASIS).href;
const OFFLINE = '<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
  '<meta name="color-scheme" content="light dark"><title>Offline · LYRIS-BIBEL</title><style>body{font-family:Georgia,serif;max-width:32rem;' +
  'margin:3rem auto;padding:0 1.2rem;line-height:1.55;color:#1d1b19;background:#fbf9f5}a{color:#6e5c53}h1{font-weight:normal}' +
  '@media (prefers-color-scheme:dark){body{color:#e6e0d6;background:#1c1a17}a{color:#bda782}}</style>' +
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
