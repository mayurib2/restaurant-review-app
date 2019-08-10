let staticCacheName = 'reviews-cache-v4';

/** Install Service Worker */

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll([
        '/',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'css/styles.css',
        'data/restaurants.json',
        'index.html',
        'restaurant.html',
        'sw.js',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js']);
    })
);

  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((cacheName) => {
            return cacheName.startsWith('reviews-') &&
                   cacheName != staticCacheName;
          }).map((cacheName) => {
            return cache.delete(cacheName);
          })
        );
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    // Respond with an entry from the cache if one is present
    // Else, fetch from the network
    event.respondWith(
      caches.match(event.request).then((response) =>{
        if(response) return response;
        return fetch(event.request);
      }).catch((error) => {
          console.log(error);
          return;
      }));
    })
});
