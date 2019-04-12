importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.addEventListener('fetch', event => {
  console.log('fetch', event.request);
  if(event.request.url.endsWith('/about')){
    event.respondWith(new Response('Programmed by Sharkbyteprojets (https://github.com/sharkbyteprojects)'))
  }
  if(event.request.url.endsWith('/swtest')){
    event.respondWith(new Response('Service Worker OK!'))
  }
});
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "72aa215a5b1c5c22bae40cdf40977693"
  },
  {
    "url": "main.css",
    "revision": "f07252cdedd55d2bf7f8d499f317dd29"
  },
  {
    "url": "main.js",
    "revision": "f1a54bc31857599f7b3a5b441dcd3b05"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
