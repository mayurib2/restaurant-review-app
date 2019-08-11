const CACHE_NAME = 'reviews-cache-v2';
const urlsToCache = [
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
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];
/** Install Service Worker */

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});
/**
* Activation of service worker
*/
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('reviews-') &&
          cacheName != CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

/**
* Fetch for offline use
*/

self.addEventListener('fetch', (event) => {
  // Respond with an entry from the cache if one is present
  // Else, fetch from the network
  event.respondWith(
    caches.match(event.request)
    .then((response) =>{
      if(response) return response;
      return fetch(event.request);
    })
    .catch((error) => {
      console.log(error);
      return;
    })
  );
});
