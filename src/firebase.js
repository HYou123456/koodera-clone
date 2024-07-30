// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore';
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Corrected import for Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCNzZohkRRBcamNB968UDW6i3kdq_hdm8",
  authDomain: "kodeera-5044a.firebaseapp.com",
  projectId: "kodeera-5044a",
  storageBucket: "kodeera-5044a.appspot.com",
  messagingSenderId: "959979273556",
  appId: "1:959979273556:web:fe4a800b6c34ad1ede9cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Corrected to use getFirestore with app instance

export { db };