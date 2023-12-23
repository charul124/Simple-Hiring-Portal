import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyA-hjBsbnozBUpa_0ikDQBDHFSIuoSo_PI",
  authDomain: "job-portal-9e2ae.firebaseapp.com",
  projectId: "job-portal-9e2ae",
  storageBucket: "job-portal-9e2ae.appspot.com",
  messagingSenderId: "755677621177",
  appId: "1:755677621177:web:71fa5b178545db11176468",
  measurementId: "G-N2PDL7KTLW",
};

async function requestPermission() {
  try {
    console.log("Requesting permission...");
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);

      const currentToken = await getToken(messaging, {
        vapidKey:
          "BIUxWje2gR6LZfNNZW38hE91ppauV3HUkQjRG6am564JAKevoRR2qgmC3jnjYDsf3unU2MoYZT6Mb1Xuibp_21o",
      });

      if (currentToken) {
        console.log("Current Token:", currentToken);
      } else {
        console.log("Unable to get token.");
      }
    } else {
      console.log("Unable to get permission to notify.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

requestPermission();

