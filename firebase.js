// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvsiNR8qK1M6wpJNtuA_esI-XqqIhWPto",
  authDomain: "brewer-d47a2.firebaseapp.com",
  projectId: "brewer-d47a2",
  storageBucket: "brewer-d47a2.firebasestorage.app",
  messagingSenderId: "937870356763",
  appId: "1:937870356763:web:0a10255e8bce615f3863be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);