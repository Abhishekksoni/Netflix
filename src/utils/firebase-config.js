import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBva9qiBQ4h285mF2z_SPuFJZAbeLGr1Fk",
  authDomain: "netflix-project-dc38d.firebaseapp.com",
  projectId: "netflix-project-dc38d",
  storageBucket: "netflix-project-dc38d.appspot.com",
  messagingSenderId: "644842871146",
  appId: "1:644842871146:web:e6049773fb8983c293ed13",
  measurementId: "G-1TTFGYVEKK"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);