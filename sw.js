//install service worker
self.addEventListener('install',evt => {
    console.log('service worker has been installed');
});
// activate service worker
self.addEventListener('activate',evt =>{
   console.log('service worker has been activated') ;
});

// fetch event
self.addEventListener('fetch',evt =>{
    console.log('fetch event',evt) ;
 });

self.addEventListener('push', e=> {
    console.log('push', e);
    var body;
    if (e.data) {
    body = e.data.text();
    } else {
    body = 'Push message no payload';
    }
    var options = {
    body: body,
    icon: 'img/img1.png',
    vibrate: [100, 50, 100],
    data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
    },
    actions: [
    {action: 'explore', title: 'Explore this new world',
    icon: 'img/img2.png'},
    {action: 'close', title: 'I don\'t want any of this',
    icon: 'img/img3.png'},
    ]
    };
    e.waitUntil(
    self.registration.showNotification('Push Notification', options)
    );
    });
    self.addEventListener('sync', function(event) {
        console.log("sync event", event);
        }
        );