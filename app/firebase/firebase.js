import firebase, { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appId: "app-id",
//   measurementId: "G-measurement-id",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA6ZFGlGtEHb-8rm17orxESq59irilRXWA",
  authDomain: "mybasket-db076.firebaseapp.com",
  projectId: "mybasket-db076",
  storageBucket: "mybasket-db076.appspot.com",
  messagingSenderId: "761066081947",
  appId: "1:761066081947:web:4f52c5cebe774ca71a403e",
  measurementId: "G-LMRG5C450M",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);
export const storage = getStorage(app);
