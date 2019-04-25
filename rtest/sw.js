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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

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
    "url": "3rdpartylicenses.txt",
    "revision": "6ab3cb8ee719ac52685d7492670e09f0"
  },
  {
    "url": "404.html",
    "revision": "c9047a05cb2b3fe36c151c1e55eb3660"
  },
  {
    "url": "es2015-polyfills.c5dd28b362270c767b34.js",
    "revision": "c9941a14e563309f6f023fb54ffe613a"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "2026348039f404cd08a2f96de6b68d91"
  },
  {
    "url": "main.db8f4e09819521460c77.js",
    "revision": "3adba9a069d7ddf96708a25f742599e9"
  },
  {
    "url": "polyfills.8bbb231b43165d65d357.js",
    "revision": "7bf9eddc22ddfc9c0a471fbeb72bf9b7"
  },
  {
    "url": "rts/3rdpartylicenses.txt",
    "revision": "6ab3cb8ee719ac52685d7492670e09f0"
  },
  {
    "url": "rts/404.html",
    "revision": "c9047a05cb2b3fe36c151c1e55eb3660"
  },
  {
    "url": "rts/es2015-polyfills.c5dd28b362270c767b34.js",
    "revision": "c9941a14e563309f6f023fb54ffe613a"
  },
  {
    "url": "rts/favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "rts/index.html",
    "revision": "d07cd2ecd02dfdea577e227fe1acd76d"
  },
  {
    "url": "rts/main.db8f4e09819521460c77.js",
    "revision": "3adba9a069d7ddf96708a25f742599e9"
  },
  {
    "url": "rts/polyfills.8bbb231b43165d65d357.js",
    "revision": "7bf9eddc22ddfc9c0a471fbeb72bf9b7"
  },
  {
    "url": "rts/runtime.26209474bfa8dc87a77c.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "rts/styles.3ff695c00d717f2d2a11.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "runtime.26209474bfa8dc87a77c.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "src/routtest/e2e/protractor.conf.js",
    "revision": "af3cc57b490b01d3f0eac7a158fc595c"
  },
  {
    "url": "src/routtest/src/app/app.component.html",
    "revision": "0ba729ff505d6a798eaf1e0ccba7554d"
  },
  {
    "url": "src/routtest/src/app/files/files.component.html",
    "revision": "4e6fe494329c1418b9d1be9ad886a899"
  },
  {
    "url": "src/routtest/src/app/rts/rts.component.html",
    "revision": "3dcdef5bf4a11ecfdd6b5143b448bf98"
  },
  {
    "url": "src/routtest/src/favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "src/routtest/src/index.html",
    "revision": "2afea7fd90e26a793f0f8914e69fda7a"
  },
  {
    "url": "src/routtest/src/karma.conf.js",
    "revision": "78da4c309e2060916ecb7195898c5cf0"
  },
  {
    "url": "styles.3ff695c00d717f2d2a11.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
