// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxTOPakM-lRnVhXDy4KHdWuXdF_KaOH1M",
  authDomain: "agenda-226d9.firebaseapp.com",
  projectId: "agenda-226d9",
  storageBucket: "agenda-226d9.appspot.com",
  messagingSenderId: "743589754891",
  appId: "1:743589754891:web:76e6fb789db38c28096f0e",
  measurementId: "G-BXFSTMT7RD"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );