self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('sharkshtest').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/es2015-polyfills.c5dd28b362270c767b34.js',
       '/main.64d4f799e37c878a9192.js',
       '/manifest.json',
       '/polyfills.8bbb231b43165d65d357.js',
       '/runtime.26209474bfa8dc87a77c.js',
       '/styles.88e585f11b7d68c30474.css',
       '/assets/152.png',
       '/assets/192.png',
       '/assets/icon.png'
     ]);
   })
 );
});
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });
   
