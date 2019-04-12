importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.__precacheManifest = [
  {
    "url": "example-cached-site/index.html",
    "revision": "3f84e35ded2fb63a9e8eb5a864ee7a35"
  },
  {
    "url": "example-cached-site/main.css",
    "revision": "f07252cdedd55d2bf7f8d499f317dd29"
  },
  {
    "url": "example-cached-site/swtest/index.html",
    "revision": "cca12a55c9782c25381c7838b863a98e"
  },
  {
    "url": "index.html",
    "revision": "1a3e15636bccf42a44f1397656fa6839"
  },
  {
    "url": "PWA.png",
    "revision": "e8cddfa25575486b116b57385f12ec6b"
  },
  {
    "url": "style.css",
    "revision": "92b623936d05c374b7df8adaab33bf33"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
