// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyyNXlFZmFV9S9hjnr9TROeof8kTwYC7I",
  authDomain: "react-projects-54bfe.firebaseapp.com",
  projectId: "react-projects-54bfe",
  storageBucket: "react-projects-54bfe.appspot.com",
  messagingSenderId: "751221179564",
  appId: "1:751221179564:web:b9380fc746316752548b09"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );