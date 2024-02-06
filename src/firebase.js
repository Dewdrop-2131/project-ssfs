import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
    apiKey: "AIzaSyDGJAikgLuyXsJOrDvoPTNXV5JuMpsPqXo",
    authDomain: "stellarscape-195b9.firebaseapp.com",
    projectId: "stellarscape-195b9",
    storageBucket: "stellarscape-195b9.appspot.com",
    messagingSenderId: "675073527842",
    appId: "1:675073527842:web:0bb35a27435300fa5cba7b",
    measurementId: "G-QVGR3BZ0J3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);