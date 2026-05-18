// ============================================================
//  PAKISTAN APP — Service Worker (sw.js)
//  Kaam: App ko offline karna + fast loading
// ============================================================

var CACHE_NAME = 'pakistan-app-v3';

var CACHE_FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './icon-192.png',
  './icon-512.png'
];

// ── INSTALL: Sab files phone mein save karo ─────────────────
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return Promise.all(
        CACHE_FILES.map(function (url) {
          return cache.add(url).catch(function () {
            // Agar koi file na mile to skip karo, error mat do
          });
        })
      );
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE: Purani cache delete karo ──────────────────────
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) {
          return key !== CACHE_NAME;
        }).map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// ── FETCH: Pehle cache se do, nahi to internet se lo ────────
self.addEventListener('fetch', function (event) {

  // Sirf http aur https handle karo
  // chrome-extension ya dusri URLs ko bilkul skip karo
  if (!event.request.url.startsWith('http://') &&
      !event.request.url.startsWith('https://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      // Cache mein mila to cache se do
      if (cachedResponse) {
        return cachedResponse;
      }
      // Nahi mila to internet se lo aur cache mein save karo
      return fetch(event.request).then(function (networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          var responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(function () {
        // Internet bhi nahi to index.html do (offline page)
        return caches.match('./index.html');
      });
    })
  );
});
