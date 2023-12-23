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
  return getToken(messaging, { vapidKey: "BJ4_TYZ9aLuXE4YZxgESgKKxu9FoOCs-4TxEcu4Rg-4i4x7GOLKsec2_P9z8xZmPFMVCZGRo-dJXMhp4o1eZHjU" }).then((currentToken) => {
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
