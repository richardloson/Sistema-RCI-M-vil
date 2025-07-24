self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('RCI-cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/splash.html',
        '/splash.css',
        '/manifest.json',
        '/icons/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});