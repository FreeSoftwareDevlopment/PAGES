var CACHE_NAME = 'sharkpages'
var cads = [
          '/152.png',
          '/192.png',
          '/PWA.png',
          '/style.css',
          '/index.html',
          '/example-cached-site/',
          '/example-cached-site/index.html',
          '/example-cached-site/sw.js',
          '/what_can_you_do_with_css/index.html',
          '/what_can_you_do_with_css/',
          '/what_can_you_do_with_css/LANDSCAPE.svg',
          '/what_can_you_do_with_css/PWA.png',
          '/what_can_you_do_with_css/Snowman.gif',
          '/what_can_you_do_with_css/sw.js',
          '/'
];
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME);
    .then(function(cache){
      console.log("MAKING WEBPAGE FASTER");
      return cache.addAll(cads);
    })
  );
});
self.addEventListener('fetch', function(event){
	event.respondWith(
	   caches.match(event.request)
	   .then(function(response){
		   if(response){
			   return response;
		   }
		   return fetch(event.request),
	   });
	);
});