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
    "revision": "2c949fe0011db9e97caee976d471b1dd"
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
    "revision": "79dfd14542b3934ad939d55a1faeccd3"
  },
  {
    "url": "main.ec6d42b9dea3254ea11f.js",
    "revision": "181d89c12392afa0370b64f316be370a"
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
    "url": "styles.3ff695c00d717f2d2a11.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
