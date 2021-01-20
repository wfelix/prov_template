importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: ''
});

const initMessaging = firebase.messaging();


console.log('initMessaging',initMessaging);
