var htmlc = '<body><title>Sharkbyte</title><style>body {color: blue; background-color: black;}</style><h1>Sharkbyte</h1><p><a href="../..">Main</a><hr>Super, der serviceWorker funktioniert</p></body>';
self.addEventListener('fetch', event => {
  console.log('event ', event.request);
  if(event.request.url.endsWith('/shark')){
  proxy(htmlc, {'Content-Type': 'text/html'});
}});
function proxy(htmlco, conte){
  event.respondWith(
  new Response(htmlco, {
    headers: conte
  }));
}
