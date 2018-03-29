
navigator.serviceWorker.register('./sw.js')
.then(function(registration){
  console.log('Excellent, registered with Scope:', registration.scope);
});
