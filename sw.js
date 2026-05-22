var CACHE_NAME = 'pakistan-app-v16';

var CACHE_FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './auto-update.js',
  './clock.js',
  './weather.js',
  './currency.js',
  './quiz.js',
  './cricket.js',
  './news.js',
  './timeline.js',
  './gallery.js',
  './map.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.all(
        CACHE_FILES.map(function(url) {
          return cache.add(url).catch(function() {});
        })
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  if (!event.request.url.startsWith('http://') &&
      !event.request.url.startsWith('https://')) return;

  var url = event.request.url;
  var isAPI = url.indexOf('wttr.in') > -1 ||
              url.indexOf('jsdelivr.net') > -1 ||
              url.indexOf('currency-api') > -1 ||
              url.indexOf('wikipedia.org') > -1 ||
              url.indexOf('cricapi.com') > -1 ||
              url.indexOf('rss2json.com') > -1 ||
              url.indexOf('openstreetmap.org') > -1 ||
              url.indexOf('unpkg.com') > -1;

  if (isAPI) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return new Response('{}', { headers: { 'Content-Type': 'application/json' } });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200) return response;
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(function() {
        return caches.match('./index.html');
      });
    })
  );
});
