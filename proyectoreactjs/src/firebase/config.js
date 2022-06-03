// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwKitE7IJek5pkr8_xNw1x6raaccvTcWs",
  authDomain: "proyectoreactch.firebaseapp.com",
  projectId: "proyectoreactch",
  storageBucket: "proyectoreactch.appspot.com",
  messagingSenderId: "852128186436",
  appId: "1:852128186436:web:fc0094cd2378148c0a7c11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp () {
    return app
}