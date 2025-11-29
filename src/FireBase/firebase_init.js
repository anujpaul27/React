// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Iuofxk_WGdyUGWXV02isbb98Xs_D24M",
  authDomain: "simple-firebase-56a7c.firebaseapp.com",
  projectId: "simple-firebase-56a7c",
  storageBucket: "simple-firebase-56a7c.firebasestorage.app",
  messagingSenderId: "175595352490",
  appId: "1:175595352490:web:2eef7817d7e7924df13bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth