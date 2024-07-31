// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPb_qTJlEkIKoo9XWOWVhE6oczG9LX2g0",
  authDomain: "venezuela-game-beta.firebaseapp.com",
  projectId: "venezuela-game-beta",
  storageBucket: "venezuela-game-beta.appspot.com",
  messagingSenderId: "810896129746",
  appId: "1:810896129746:web:6ffa1350bdb6f05b15370b",
  measurementId: "G-B4PNGN5TEV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
