// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB-JWvW06tmxyA2lk_KNWRO576H1HUqAE",
  authDomain: "app-30020.firebaseapp.com",
  projectId: "app-30020",
  storageBucket: "app-30020.appspot.com",
  messagingSenderId: "644903091478",
  appId: "1:644903091478:web:014a68eabbb44bcd532437"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = app.firestore()