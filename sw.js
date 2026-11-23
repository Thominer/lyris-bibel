// LYRIS-BIBEL, App, die Buch für Buch lädt: Offline-Speicher. Jede Fassung hat eine eigene Kennung, jede Datei
// ihre Prüfsumme; eine neue Fassung übernimmt unveränderte Bücher und holt nur geänderte neu.
const FASSUNG = 'lyb2-2f4de1ab2d6d';
const DATEIEN = {"1Chr.html": "855f8ec643f5", "1Joh.html": "c8aa2d2e4904", "1Koen.html": "1beece6cfd27", "1Kor.html": "69ec7b711b3a", "1Petr.html": "b334b77b38e9", "1Sam.html": "a5cde4c80eaf", "1Thess.html": "dfc9f9b2441f", "1Tim.html": "6961aa923dee", "2Chr.html": "c026c6da6af0", "2Joh.html": "fc4b2ffcf5f2", "2Koen.html": "8ba3458514c7", "2Kor.html": "d3bdce79c73f", "2Petr.html": "cd69b3b29b82", "2Sam.html": "a335297ff235", "2Thess.html": "fc257e419dae", "2Tim.html": "002492cd29a5", "3Joh.html": "f366fb10597f", "Am.html": "b826187852c2", "Apg.html": "87aed2d3f881", "Dan.html": "dd249363f8a0", "Dtn.html": "cdb3c9252cd2", "Eph.html": "003d309e460c", "Esr.html": "45986787be24", "Est.html": "0c89a85dbe24", "Ex.html": "81f25fb8e04a", "Ez.html": "7fd218776d57", "Gal.html": "e270b445b30a", "Gen.html": "13fcbb0eef05", "Hab.html": "a38eab235f37", "Hag.html": "6004d497cd70", "Hebr.html": "8ac552c1606c", "Hi.html": "d77cd4841639", "Hld.html": "43f5768d349c", "Hos.html": "a6839e93e489", "Jak.html": "eb9fa9b87231", "Jer.html": "d09a1f8a92a8", "Jes.html": "3c4bc7592ddd", "Joel.html": "eed292ab0847", "Joh.html": "2130d3fde535", "Jona.html": "514b653fae8e", "Jos.html": "4f650786694c", "Jud.html": "9adb25db3664", "Klgl.html": "8dd9f5e75890", "Koh.html": "a7e5b265e798", "Kol.html": "b9842fdb72f9", "Lev.html": "5c18c8318700", "Lk.html": "00b7a245b8df", "Mal.html": "69785db0a918", "Mi.html": "4fc57271b4a0", "Mk.html": "56fc4842838f", "Mt.html": "51ab68c7508c", "Nah.html": "b01626297af9", "Neh.html": "05d551e6922b", "Num.html": "33ec9c2900b8", "Obd.html": "031293f74a9f", "Offb.html": "9b5015f6e39b", "Phil.html": "b758fe9fbffa", "Phlm.html": "7827c8385339", "Ps.html": "6c5aab370e20", "Ri.html": "8fe004b5ef5c", "Roem.html": "4a9d79de388a", "Rut.html": "b0289a99bd2c", "Sach.html": "ce58eca5052f", "Spr.html": "8b2ef043d8df", "Tit.html": "1d6bcf2a7df8", "Zef.html": "e78f56938109", "anhang.html": "d4f798163952", "app.js": "3c9dc13404e7", "apple-touch-icon.png": "181d82b10e02", "favicon.ico": "f781b9c6d787", "favicon.svg": "4443f742ba3d", "icon-192.png": "2ae7ab7993ef", "icon-512.png": "7e198510704d", "icon-maskable-192.png": "15f6c2d9b0d1", "icon-maskable-512.png": "3d905bd0009c", "index.html": "58be46e9b180", "manifest.webmanifest": "e0f1ae59ab7f", "name.svg": "e06a4d973e6f", "schrift/alegreya-sans-latin-400-italic.woff2": "385d736d0ab7", "schrift/alegreya-sans-latin-400-normal.woff2": "123cd4a1e139", "schrift/alegreya-sans-latin-700-normal.woff2": "403b09118b4c", "schrift/alegreya-sans-latin-ext-400-italic.woff2": "fe502f59a0b6", "schrift/alegreya-sans-latin-ext-400-normal.woff2": "0b02ba71b0c5", "schrift/alegreya-sans-latin-ext-700-normal.woff2": "1d21b0dc841b", "schrift/cardo-greek-400-italic.woff2": "00f9a237aec7", "schrift/cardo-greek-400-normal.woff2": "e024be2ca2ae", "schrift/cardo-greek-700-normal.woff2": "053020284af7", "schrift/cardo-greek-ext-400-italic.woff2": "5500b8e1e93a", "schrift/cardo-greek-ext-400-normal.woff2": "a332229305e9", "schrift/cardo-greek-ext-700-normal.woff2": "21bd93e5506e", "schrift/cardo-hebrew-400-italic.woff2": "d9460f0ef991", "schrift/cardo-hebrew-400-normal.woff2": "6740dcbba264", "schrift/cardo-hebrew-700-normal.woff2": "a2fb677088f1", "schrift/cardo-latin-400-italic.woff2": "ddf3188b81ae", "schrift/cardo-latin-400-normal.woff2": "f8279aea4fbf", "schrift/cardo-latin-700-normal.woff2": "93710491c416", "schrift/cardo-latin-ext-400-italic.woff2": "d691c63dec57", "schrift/cardo-latin-ext-400-normal.woff2": "d99f59711905", "schrift/cardo-latin-ext-700-normal.woff2": "6f43c06915f9", "schrift/cormorant-garamond-latin-500-italic.woff2": "b61f1c3b81a7", "schrift/cormorant-garamond-latin-500-normal.woff2": "c20b57f6f4e8", "schrift/cormorant-garamond-latin-700-normal.woff2": "22e0e8ec87c1", "schrift/cormorant-garamond-latin-ext-500-italic.woff2": "c3b3b710b86c", "schrift/cormorant-garamond-latin-ext-500-normal.woff2": "3546a0201aaf", "schrift/cormorant-garamond-latin-ext-700-normal.woff2": "b0954ffa7bf4", "schrift/inter-latin-400-italic.woff2": "3d353fb6713d", "schrift/inter-latin-400-normal.woff2": "68f645c6b6ff", "schrift/inter-latin-700-normal.woff2": "5197a7aeb224", "schrift/inter-latin-ext-400-italic.woff2": "83267cc709fb", "schrift/inter-latin-ext-400-normal.woff2": "1bf1f83717a4", "schrift/inter-latin-ext-700-normal.woff2": "c8d5550678b9", "schrift/jost-latin-400-italic.woff2": "7bf50609f303", "schrift/jost-latin-400-normal.woff2": "a61b232f620b", "schrift/jost-latin-700-normal.woff2": "163b9913effd", "schrift/jost-latin-ext-400-italic.woff2": "4eae72ad00d5", "schrift/jost-latin-ext-400-normal.woff2": "0620006fedcb", "schrift/jost-latin-ext-700-normal.woff2": "1ecf8c63462c", "schrift/spectral-latin-400-italic.woff2": "58465a5d729e", "schrift/spectral-latin-400-normal.woff2": "d4877aefbcc2", "schrift/spectral-latin-700-normal.woff2": "44234f062bee", "schrift/spectral-latin-ext-400-italic.woff2": "870bd59c5b14", "schrift/spectral-latin-ext-400-normal.woff2": "a4e7b4b529fa", "schrift/spectral-latin-ext-700-normal.woff2": "2487be522452", "signet.svg": "9fc7f60b8db6", "stil.css": "df19c0fc1ca0", "suche.html": "0be88c2c9fdd", "text/1Chr.txt": "bbce8dbbe998", "text/1Joh.txt": "caa7315e8e02", "text/1Koen.txt": "ad9ae6a351b2", "text/1Kor.txt": "ad5eb4f3cb03", "text/1Petr.txt": "6a9ddaf68fea", "text/1Sam.txt": "69512439be4b", "text/1Thess.txt": "9747c3a3eef2", "text/1Tim.txt": "dad699161967", "text/2Chr.txt": "6a0e890fff13", "text/2Joh.txt": "9142a12e76b1", "text/2Koen.txt": "ac91787f346c", "text/2Kor.txt": "4993fdd852b6", "text/2Petr.txt": "da56a1e5aff9", "text/2Sam.txt": "2f297f2a13dc", "text/2Thess.txt": "80f0bd0c7886", "text/2Tim.txt": "1b9a1580ab57", "text/3Joh.txt": "87ce309118fc", "text/Am.txt": "568ffb7211ed", "text/Apg.txt": "a6b526cbd730", "text/Dan.txt": "92728517b228", "text/Dtn.txt": "a7c3613422f8", "text/Eph.txt": "f7b2a57adc83", "text/Esr.txt": "d64c2645f461", "text/Est.txt": "a21e7f6521bf", "text/Ex.txt": "65111e64a506", "text/Ez.txt": "dab8a8c7400f", "text/Gal.txt": "c5abbe459000", "text/Gen.txt": "9006e01723af", "text/Hab.txt": "12ffaa0038a3", "text/Hag.txt": "1da1dfd1c3a0", "text/Hebr.txt": "23ce5a4cc70d", "text/Hi.txt": "1c8cd50d90c8", "text/Hld.txt": "534c98068408", "text/Hos.txt": "eab74d6b9c8c", "text/Jak.txt": "ad266f677e30", "text/Jer.txt": "daa13e1081ca", "text/Jes.txt": "2bf61d829425", "text/Joel.txt": "204ed77ee200", "text/Joh.txt": "f4ca69672ee0", "text/Jona.txt": "0f548cac62ae", "text/Jos.txt": "f2ac8ab6596d", "text/Jud.txt": "24d5a1b6966d", "text/Klgl.txt": "3afad3b4ed22", "text/Koh.txt": "49a257e15405", "text/Kol.txt": "9e11997f53ea", "text/Lev.txt": "354e81351e4c", "text/Lk.txt": "1b7febf1824e", "text/Mal.txt": "47c94f2ce9db", "text/Mi.txt": "2bc1231b6404", "text/Mk.txt": "ec388d1758d2", "text/Mt.txt": "14dfc71d73e2", "text/Nah.txt": "05375e6c6314", "text/Neh.txt": "81502ae43c6b", "text/Num.txt": "f3243b0ce126", "text/Obd.txt": "f090cdc3c907", "text/Offb.txt": "b558aedeaa7c", "text/Phil.txt": "8c09ecefbbaf", "text/Phlm.txt": "2d5d4012f175", "text/Ps.txt": "bfb2c3f22a5c", "text/Ri.txt": "942f59ea8597", "text/Roem.txt": "ee50f530d1e6", "text/Rut.txt": "422730efe42b", "text/Sach.txt": "941046c084b5", "text/Spr.txt": "ae7b44c6fe59", "text/Tit.txt": "892a3ab07efb", "text/Zef.txt": "e8f56fed05f0", "verzeichnis.js": "0311e77937c2", "vorwort.html": "8e8697364f1b"};
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
