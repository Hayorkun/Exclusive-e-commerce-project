// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAHXoDMmtiRa4arP9n3HLuh2EPaJTBCPQ",
  authDomain: "exclusive-e07eb.firebaseapp.com",
  projectId: "exclusive-e07eb",
  storageBucket: "exclusive-e07eb.firebasestorage.app",
  messagingSenderId: "663448763850",
  appId: "1:663448763850:web:c223a98c83da47937e2333",
  measurementId: "G-5GS3CRN5J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);