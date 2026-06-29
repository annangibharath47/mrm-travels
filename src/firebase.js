import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNiGRgcOePsN8ZyDBSD2vDMWHANqBCWTg",
  authDomain: "mrm-travels.firebaseapp.com",
  projectId: "mrm-travels",
  storageBucket: "mrm-travels.firebasestorage.app",
  messagingSenderId: "676329137506",
  appId: "1:676329137506:web:734883ea29351b8968b83b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);