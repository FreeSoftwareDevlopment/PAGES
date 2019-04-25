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
    "url": "manifest.json",
    "revision": "96d22dcf09704856323f233477951f1b"
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
    "url": "src/angular.json",
    "revision": "25bde56b40af5fa8f76244557e321b78"
  },
  {
    "url": "src/e2e/protractor.conf.js",
    "revision": "af3cc57b490b01d3f0eac7a158fc595c"
  },
  {
    "url": "src/e2e/tsconfig.e2e.json",
    "revision": "75fe943f8d0d56f383f7166f3de48700"
  },
  {
    "url": "src/package-lock.json",
    "revision": "6061cd0582f634a2bbdfe286f9ff4128"
  },
  {
    "url": "src/package.json",
    "revision": "0ef9848c6c93339ee4e0f0e4bec07df7"
  },
  {
    "url": "src/src/app/app.component.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "url": "src/src/styles.css",
    "revision": "516ff0f3ec242d8cac6c880878166108"
  },
  {
    "url": "src/src/tsconfig.app.json",
    "revision": "7b28dcba28159a67908d09a08e201c15"
  },
  {
    "url": "src/src/tsconfig.spec.json",
    "revision": "4709c740bba06f6a698d53b256b4fca8"
  },
  {
    "url": "src/src/tslint.json",
    "revision": "41bc41460b24c185914dcde3938c0154"
  },
  {
    "url": "src/tsconfig.json",
    "revision": "8d4df70f6fd26e73977092eb458b783c"
  },
  {
    "url": "src/tslint.json",
    "revision": "d76f686c8c410c454cfd7074a9653009"
  },
  {
    "url": "styles.88e585f11b7d68c30474.css",
    "revision": "d816a627015711d0c2dc4f67b13630b4"
  },
  {
    "url": "testswf/index.html",
    "revision": "52c9da6f797a0eda056a2d60f20710ed"
  },
  {
    "url": "testswf/shark/index.html",
    "revision": "d0376c5ad08ab281b08537b612315041"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
