const CACHE_NAME = 'seoul-trip-v1';
const FILES = [
  '/',
  '/style.css',
  '/script.js',
  '/fonts/Caveat-Regular.ttf'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request);
    })
  );
});
