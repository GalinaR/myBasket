import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebaseConf from "./firebaseConf";

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service

const app = initializeApp(firebaseConf);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
