import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBR9Ud3R--SavyNTxhFfo9eWiRajKJzY0E",
  authDomain: "chat-da53d.firebaseapp.com",
  projectId: "chat-da53d",
  storageBucket: "chat-da53d.appspot.com",
  messagingSenderId: "1046520913233",
  appId: "1:1046520913233:web:1dd767fa9f9855ff518770",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
