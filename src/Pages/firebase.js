import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASyAOZP3MCI_3ar6c9ICWSqb67E7-LrMc",
  authDomain: "omega-pg-college.firebaseapp.com",
  projectId: "omega-pg-college",
  storageBucket: "omega-pg-college.firebasestorage.app",
  messagingSenderId: "661430654140",
  appId: "1:661430654140:web:1baac75200e914de226cb9",
  measurementId: "G-2G5HMHGC3Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
