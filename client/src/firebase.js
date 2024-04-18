// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "true-estate-16afc.firebaseapp.com",
  projectId: "true-estate-16afc",
  storageBucket: "true-estate-16afc.appspot.com",
  messagingSenderId: "124498711473",
  appId: "1:124498711473:web:7785ee78fa6781fd086390",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
