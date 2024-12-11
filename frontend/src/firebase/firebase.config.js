// firebase.config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add this if you are using Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDw856I2XOiO8JTsEZcOsS5CDmlhVAn-A",
  authDomain: "aacha-one.firebaseapp.com",
  databaseURL: "https://aacha-one-default-rtdb.firebaseio.com",
  projectId: "aacha-one",
  storageBucket: "aacha-one.firebasestorage.app",
  messagingSenderId: "91275779426",
  appId: "1:91275779426:web:1ce5f93945980893b4a03b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service (if needed)
const auth = getAuth(app);

export { app, auth };
