  self.addEventListener('push', function(event) {
	  const payload = event.data.json();
	  const title = payload.title; 
	  const body = payload.body; 
	  const icon = '/img/favicon.png';
	  const vibrate = [500,110,500,110,500,110];
//	  var options = {
//		        body: body,
//		        icon: icon,
//		        badge: badge
//		    };
	  event.waitUntil(self.registration.showNotification(title,{body,icon}));//,options
  });
  
  self.addEventListener('notificationclick', function(event) { 
	  console.log(event.notification); 
	  event.waitUntil(self.clients.openWindow('https://urimelec.com'));
	  event.notification.close(); 
  });
  
