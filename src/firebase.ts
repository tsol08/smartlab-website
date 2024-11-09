import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxaiT8kQijY0ExFLhMV8WamEmIKL8SG0I",
  authDomain: "smartlab-website-d51a9.firebaseapp.com",
  projectId: "smartlab-website-d51a9",
  storageBucket: "smartlab-website-d51a9.firebasestorage.app",
  messagingSenderId: "1049522423033",
  appId: "1:1049522423033:web:30c373c7a3c5c308380e28",
  measurementId: "G-G21JC4416K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
