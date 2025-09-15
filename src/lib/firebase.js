// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUgH1CH5o6vHo5wMgeUgHAKKIUWgmVtao",
  authDomain: "e-learning-35aa2.firebaseapp.com",
  projectId: "e-learning-35aa2",
  storageBucket: "e-learning-35aa2.firebasestorage.app",
  messagingSenderId: "964443659733",
  appId: "1:964443659733:web:40b05999b373cd3315315c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);    
