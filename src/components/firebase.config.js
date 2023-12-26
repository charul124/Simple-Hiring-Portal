// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-hjBsbnozBUpa_0ikDQBDHFSIuoSo_PI",
  authDomain: "job-portal-9e2ae.firebaseapp.com",
  projectId: "job-portal-9e2ae",
  storageBucket: "job-portal-9e2ae.appspot.com",
  messagingSenderId: "755677621177",
  appId: "1:755677621177:web:71fa5b178545db11176468",
  measurementId: "G-N2PDL7KTLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export {db};
