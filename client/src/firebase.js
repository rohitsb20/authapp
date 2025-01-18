// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: "authapp-f53fc.firebaseapp.com",
  projectId: "authapp-f53fc",
  storageBucket: "authapp-f53fc.firebasestorage.app",
  messagingSenderId: "180885929008",
  appId: "1:180885929008:web:91e71b7669049646f901f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
