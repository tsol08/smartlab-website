import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCswosRKTPXZVEGYgm-Gnhiqi7ts0av7t0",
  authDomain: "smartlab-website-df441.firebaseapp.com",
  projectId: "smartlab-website-df441",
  storageBucket: "smartlab-website-df441.firebasestorage.app",
  messagingSenderId: "995928828228",
  appId: "1:995928828228:web:8badedc306136af5504f11",
  measurementId: "G-H3NSQB32VJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
