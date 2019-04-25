self.addEventListener('fetch', event => {
  console.log('event ', event.request);
  if(event.request.url.endsWith('/shark')){
  event.respondWith(
  new Response("<body><title>Sharkbyte</title><style>body {color: blue; background-color: black;}</style><h1>Sharkbyte</h1></body>", {
    headers: {'Content-Type': 'text/html'}
  }));
}});
