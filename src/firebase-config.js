// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDJd9f1vTyqbsVZejhsIgOfMsK887D64k",
  authDomain: "house-listing-app-c64b5.firebaseapp.com",
  projectId: "house-listing-app-c64b5",
  storageBucket: "house-listing-app-c64b5.appspot.com",
  messagingSenderId: "681422669328",
  appId: "1:681422669328:web:59c0e8590469d57fe8ac95",
  measurementId: "G-70D5B13EC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();