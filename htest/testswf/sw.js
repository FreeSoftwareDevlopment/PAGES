var htmlc = '<body><title>Sharkbyte SW Test</title><style>body {color: blue; background-color: black;}</style><h1>Sharkbyte</h1><p><a href="../..">Main</a><hr>serviceWorker works</p></body>';
self.addEventListener('fetch', event => {
  console.log('event ', event.request);
  if(event.request.url.endsWith('/shark')){
    event.respondWith(
      new Response(htmlc, {
        headers: {'Content-Type': 'text/html'}
      }));
}

});/*
event.respondWith(
  new Response(htmlc, {
    headers: {'Content-Type': 'text/html'}
  }));
*/
