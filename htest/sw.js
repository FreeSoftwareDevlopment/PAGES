/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/152.png",
    "revision": "2b36db9b86bd1e18e469711783989bd3"
  },
  {
    "url": "assets/192.png",
    "revision": "ff13446a01972e9b64d60d54a7a1308c"
  },
  {
    "url": "assets/icon.png",
    "revision": "8161039731731209c63a91828707e42f"
  },
  {
    "url": "es2015-polyfills.c5dd28b362270c767b34.js",
    "revision": "c9941a14e563309f6f023fb54ffe613a"
  },
  {
    "url": "index.html",
    "revision": "dcc1af50f5af4cbc93a2da39dcc0d699"
  },
  {
    "url": "main.64d4f799e37c878a9192.js",
    "revision": "650bcb34f66eeba399dbf4780bde82b3"
  },
  {
    "url": "polyfills.8bbb231b43165d65d357.js",
    "revision": "7bf9eddc22ddfc9c0a471fbeb72bf9b7"
  },
  {
    "url": "runtime.26209474bfa8dc87a77c.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "src/e2e/protractor.conf.js",
    "revision": "af3cc57b490b01d3f0eac7a158fc595c"
  },
  {
    "url": "src/src/app/app.component.html",
    "revision": "930cfcaa6b41d3678ba1b26bf5519b31"
  },
  {
    "url": "src/src/assets/icon.png",
    "revision": "8161039731731209c63a91828707e42f"
  },
  {
    "url": "src/src/index.html",
    "revision": "d04b25c04ed4eaf3b8d647a9ef1fb29c"
  },
  {
    "url": "src/src/karma.conf.js",
    "revision": "160c3b2634025b79f8c206ee16c32044"
  },
  {
    "url": "testswf/index.html",
    "revision": "52c9da6f797a0eda056a2d60f20710ed"
  },
  {
    "url": "testswf/shark/index.html",
    "revision": "d0376c5ad08ab281b08537b612315041"
  },
  {
    "url": "workbox-config.js",
    "revision": "c5ef4183e5dee5df3523e3bfa6957eab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
