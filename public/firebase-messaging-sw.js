importScripts("https://www.gstatic.com/firebasejs/9.6.7/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.7/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyA-hjBsbnozBUpa_0ikDQBDHFSIuoSo_PI",
  authDomain: "job-portal-9e2ae.firebaseapp.com",
  projectId: "job-portal-9e2ae",
  storageBucket: "job-portal-9e2ae.appspot.com",
  messagingSenderId: "755677621177",
  appId: "1:755677621177:web:71fa5b178545db11176468",
  measurementId: "G-N2PDL7KTLW",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload?.notification?.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
