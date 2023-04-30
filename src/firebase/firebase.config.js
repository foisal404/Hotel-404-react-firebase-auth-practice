// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZgr1TaL5MnMopefjnJlp1hmbLz6GUBfM",
  authDomain: "react-firebase-auth-prac-66d8f.firebaseapp.com",
  projectId: "react-firebase-auth-prac-66d8f",
  storageBucket: "react-firebase-auth-prac-66d8f.appspot.com",
  messagingSenderId: "225470563916",
  appId: "1:225470563916:web:5c4466430b3a9240d0d6e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;