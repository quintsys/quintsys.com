var CACHE_NAME = 'qsys-cache-v1';
var body = document.getElementsByTagName('body')[0];
var urlsToCache = body.dataset.cached;

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});