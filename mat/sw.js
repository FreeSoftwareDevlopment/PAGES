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
    "revision": "928f03b6d48c1e1c33dd92e3ffa94770"
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
    "revision": "1485aae8a921a61f3ae7627e65317818"
  },
  {
    "url": "main.65721759469c66649375.js",
    "revision": "a671da7986ca002c4417a995b1118270"
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
    "url": "styles.24009be749156c23274c.css",
    "revision": "04c82951bbebddaa7c958042fc31a802"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
