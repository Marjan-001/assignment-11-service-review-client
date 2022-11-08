// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArryv_jHP6qI5Gy4NajcPaUrIH_JBK8rk",
    authDomain: "assignment-11-personal-stylist.firebaseapp.com",
    projectId: "assignment-11-personal-stylist",
    storageBucket: "assignment-11-personal-stylist.appspot.com",
    messagingSenderId: "377305993794",
    appId: "1:377305993794:web:392ccd7255a36404e3d3db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;