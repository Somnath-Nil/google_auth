// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Mqvxcl-KfI_Xe11r8aTnCnPHipX3NlA",
  authDomain: "auth-yt-4317b.firebaseapp.com",
  projectId: "auth-yt-4317b",
  storageBucket: "auth-yt-4317b.appspot.com",
  messagingSenderId: "532183280623",
  appId: "1:532183280623:web:47aad09e2f1861cb83a41a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);