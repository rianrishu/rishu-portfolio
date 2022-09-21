// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO7KBgfu4WzS7Gx7P1fC18zz3KAyJuNOQ",
  authDomain: "rishu-anand.firebaseapp.com",
  projectId: "rishu-anand",
  storageBucket: "rishu-anand.appspot.com",
  messagingSenderId: "10590825939",
  appId: "1:10590825939:web:485207901c15c50c71d326",
  measurementId: "G-HD8ZV107L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;