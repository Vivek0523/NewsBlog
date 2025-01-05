import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxhw3KMT1xCy4u8sAOWUyrYaEODkAfh_A",
  authDomain: "newsblog-c01b0.firebaseapp.com",
  projectId: "newsblog-c01b0",
  storageBucket: "newsblog-c01b0.firebasestorage.app",
  messagingSenderId: "704494215236",
  appId: "1:704494215236:web:67404994d460d5d9109c11",
  measurementId: "G-SZ7882X2H7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export { app, auth };
