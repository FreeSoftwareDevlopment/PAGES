var htmlc = '<body><title>Sharkbyte</title><style>body {color: blue; background-color: black;}</style><h1>Sharkbyte</h1><p><a href="../..">Main</a><hr>Super, der serviceWorker funktioniert</p></body>';
self.addEventListener('fetch', event => {
  console.log('event ', event.request);
  if(event.request.url.endsWith('/shark')){
    event.respondWith(
    new Response(htmlc, {
      headers: {'Content-Type': 'text/html'}
    }));
}if(event.request.url.endsWith('/style.css')){event.respondWith(
new Response("body{color: blue; background-color: black;}", {
  headers: {'Content-Type': 'text/css'}
}));}});
