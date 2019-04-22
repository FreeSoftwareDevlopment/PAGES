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
    "url": "152.png",
    "revision": "2b36db9b86bd1e18e469711783989bd3"
  },
  {
    "url": "192.png",
    "revision": "ff13446a01972e9b64d60d54a7a1308c"
  },
  {
    "url": "3rdpartylicenses.txt",
    "revision": "2c949fe0011db9e97caee976d471b1dd"
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
    "revision": "8ed4015090595da3f846fe4c9bfa4bcc"
  },
  {
    "url": "main.64d4f799e37c878a9192.js",
    "revision": "650bcb34f66eeba399dbf4780bde82b3"
  },
  {
    "url": "manifest.json",
    "revision": "02f59adf136693c156e0d4dadc9dfdaa"
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
    "url": "styles.88e585f11b7d68c30474.css",
    "revision": "9dc2f5e99799a12d5325f0c175693cf3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
