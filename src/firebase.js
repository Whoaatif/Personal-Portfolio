import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwzVthlyvoLIC35BW-d2xbUP3IsX1EXLc",
  authDomain: "personal-portfolio-b0313.firebaseapp.com",
  projectId: "personal-portfolio-b0313",
  storageBucket: "personal-portfolio-b0313.appspot.com",
  messagingSenderId: "917003069927",
  appId: "1:917003069927:web:1db266a5ee87e615943542",
  measurementId: "G-QRDYN42FS9"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();