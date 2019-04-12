importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "d50fc0c06753160b42a0458f1833c548"
  },
  {
    "url": "LANDSCAPE.svg",
    "revision": "bc27598562d0e5f3dc79344550403961"
  },
  {
    "url": "PWA.png",
    "revision": "e8cddfa25575486b116b57385f12ec6b"
  },
  {
    "url": "Snowman.gif",
    "revision": "c5abb891b969b2bf456ddd1785e9e4a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
