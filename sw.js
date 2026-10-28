const SHELL = 'paktang-shell-1.0', TILES = 'paktang-tiles';
const PRE = [
  "./Paktang%20Web%20App.dc.html",
  "./index.html",
  "./support.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./ds/saraly/tokens/colors.css",
  "./ds/saraly/tokens/typography.css",
  "./ds/saraly/tokens/spacing.css",
  "./ds/saraly/tokens/effects.css",
  "./ds/saraly/styles.css",
  "./ds/saraly/ds_bundle.js",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "https://unpkg.com/dexie@4.0.8/dist/dexie.min.js"
];
self.addEventListener('install', e => { e.waitUntil(caches.open(SHELL).then(c => Promise.allSettled(PRE.map(u => c.add(u))))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== TILES).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (/tile\.(opentopomap|openstreetmap)\.org$|^server\.arcgisonline\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(TILES).then(c => c.match(req.url).then(m => m || fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req.url, r.clone()); return r; }))));
    return;
  }
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { caches.open(SHELL).then(c => c.put(req, r.clone())); return r; }).catch(() => caches.match(req, { ignoreSearch: true }).then(m => m || caches.match(PRE[0]))));
    return;
  }
  e.respondWith(caches.match(req).then(m => {
    const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') caches.open(SHELL).then(c => c.put(req, r.clone())); return r; }).catch(() => m);
    return m || net;
  }));
});
