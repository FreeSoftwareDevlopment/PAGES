importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.__precacheManifest = [
  {
    "url": "Build/UnityLoader.js",
    "revision": "3544178c924aac8c5129f2d974d60dd7"
  },
  {
    "url": "Build/WEB-GL.data.unityweb",
    "revision": "b97885604556cf979b35719c52f5d1fe"
  },
  {
    "url": "Build/WEB-GL.jpg",
    "revision": "1ed9d93b4fb7a510384431a801bce444"
  },
  {
    "url": "Build/WEB-GL.json",
    "revision": "6201e499f39adb5cfa437daff8769382"
  },
  {
    "url": "Build/WEB-GL.wasm.code.unityweb",
    "revision": "15b44d9ab4e997777bb1800a622576a2"
  },
  {
    "url": "Build/WEB-GL.wasm.framework.unityweb",
    "revision": "e72f93b110fcf931ddfa3e2056489ff2"
  },
  {
    "url": "index.html",
    "revision": "c1ab4f514ae836d0f8aadca05fd424c2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
