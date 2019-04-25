self.addEventListener('fetch', event => {
  console.log('event ', event.request);
  if(event.request.url.endsWith('/shark')){
  event.respondWith(
  new Response("<h1></h1>", {
    headers: {'Content-Type': 'text/html'}
  });
}});
