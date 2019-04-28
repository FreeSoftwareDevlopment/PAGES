function gets(getti, id){
    const request = new XMLHttpRequest();
      var req = getti;
      request.open("GET",req);
      request.addEventListener('load', function(event) {
         if (request.status >= 200 && request.status < 300) {
            console.log(request.responseText);
            document.getElementById(id).innerHTML= (request.responseText);
         } else {
            console.warn(request.statusText, request.responseText);
         }
      });
      request.send();
}
/*
gets("./content.html");
'uscontent'*/