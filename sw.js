importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.__precacheManifest = [
  {
    "url": "152.png",
    "revision": "63358f7c7d9e8da3da79751628be7446"
  },
  {
    "url": "192.png",
    "revision": "6a541f6afd8494b08326510f77c36fe3"
  },
  {
    "url": "example-cached-site/index.html",
    "revision": "e76d371fed9098386e666e89d4d6edb4"
  },
  {
    "url": "example-cached-site/main.css",
    "revision": "f07252cdedd55d2bf7f8d499f317dd29"
  },
  {
    "url": "example-cached-site/main.js",
    "revision": "f1a54bc31857599f7b3a5b441dcd3b05"
  },
  {
    "url": "example-cached-site/swtest/index.html",
    "revision": "cca12a55c9782c25381c7838b863a98e"
  },
  {
    "url": "index.html",
    "revision": "0576bcb3c068ac4f1b0073b5b13d4684"
  },
  {
    "url": "manifest.json",
    "revision": "3f74cdce369099c0ba0decff1799ec26"
  },
  {
    "url": "PWA.png",
    "revision": "e8cddfa25575486b116b57385f12ec6b"
  },
  {
    "url": "style.css",
    "revision": "92b623936d05c374b7df8adaab33bf33"
  },
  {
    "url": "what_can_you_do_with_css/index.html",
    "revision": "9ae4956d1966b67fc9ac336aa9dcb284"
  },
  {
    "url": "what_can_you_do_with_css/LANDSCAPE.svg",
    "revision": "f31af35b7f0cd93806ffac86d12accd3"
  },
  {
    "url": "what_can_you_do_with_css/PWA.png",
    "revision": "e8cddfa25575486b116b57385f12ec6b"
  },
  {
    "url": "what_can_you_do_with_css/Snowman.gif",
    "revision": "c5abb891b969b2bf456ddd1785e9e4a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
