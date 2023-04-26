// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTnv5SIN6ZYtn55lFGzUUQe_MO9oFA7IQ",
  authDomain: "minhabula-b319a.firebaseapp.com",
  projectId: "minhabula-b319a",
  storageBucket: "minhabula-b319a.appspot.com",
  messagingSenderId: "938311729309",
  appId: "1:938311729309:web:8bee0efcd894fc3a1e1474",
  measurementId: "G-KKRBE2S8M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };