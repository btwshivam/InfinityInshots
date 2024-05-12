// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "infinityinshots.firebaseapp.com",
  projectId: "infinityinshots",
  storageBucket: "infinityinshots.appspot.com",
  messagingSenderId: "40373111943",
  appId: "1:40373111943:web:35e3530202e870630cfc22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);