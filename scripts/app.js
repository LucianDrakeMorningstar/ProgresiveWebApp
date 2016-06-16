/**
 * Created by Mr.Java on 6/15/2016.
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() { console.log('Service Worker Registered'); });
}
