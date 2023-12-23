import { initializeApp } from "firebase/app";
import { getMessaging, onMessage,getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA-hjBsbnozBUpa_0ikDQBDHFSIuoSo_PI",
  authDomain: "job-portal-9e2ae.firebaseapp.com",
  projectId: "job-portal-9e2ae",
  storageBucket: "job-portal-9e2ae.appspot.com",
  messagingSenderId: "755677621177",
  appId: "1:755677621177:web:71fa5b178545db11176468",
  measurementId: "G-N2PDL7KTLW",
};

 initializeApp(firebaseConfig);

 const messaging = getMessaging();

 export const requestForToken = () =>{
  return getToken(messaging, { vapidKey: "BIsApj6pq6jUSVnyWh241ulhCRuUUpOSb5nOKmN1HnknQS0yt_E7PUl99JjQmO6sacT4wqY23fiISR64ydIwsqo" }).then((currentToken) => {
    if (currentToken) {
      console.log("Token client: ", currentToken);
    } else {
      console.log("no registration token available. Request permission to generate one.");
    }
  })
  .catch(err =>{
    console.log("error while register token", err);
  })
}

export const onMessageListener = ()=>{
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Onmessage Payload", payload)
      resolve(payload);
    });
  });
} 


// function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       const messaging = getMessaging(app);
//       getToken(messaging, {
//         vapidKey:
//           "BIsApj6pq6jUSVnyWh241ulhCRuUUpOSb5nOKmN1HnknQS0yt_E7PUl99JjQmO6sacT4wqY23fiISR64ydIwsqo",
//       }).then((currentToken) => {
//         if (currentToken) {
//           console.log("currentToken: ", currentToken);
//         } else {
//           console.log("can not get token");
//         }
//       });
//     } else {
//       console.log("Unable to get permission to notify.");
//     }
//   });
// }
// requestPermission();
