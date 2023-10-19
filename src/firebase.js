// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN3OPjl1bIwg1pzpSsBD-WdUBMK5kf-jw",
  authDomain: "iwec-locofy.firebaseapp.com",
  projectId: "iwec-locofy",
  storageBucket: "iwec-locofy.appspot.com",
  messagingSenderId: "978124213464",
  appId: "1:978124213464:web:184c5c0b5878e74a4a9bad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithGoogle = async () => {
  try {
    return signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log("Error:", error);
  }
};
