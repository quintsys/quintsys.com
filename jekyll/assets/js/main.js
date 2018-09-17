if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    var body = document.getElementsByTagName('body')[0];
    navigator.serviceWorker.register(body.dataset.serviceWorker).then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}