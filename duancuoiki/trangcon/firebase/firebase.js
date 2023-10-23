import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDip5qjXnROB0KLsNbLcrWFLOMHQZKqj4c",
    authDomain: "demodb-b5e5a.firebaseapp.com",
    databaseURL: "https://demodb-b5e5a-default-rtdb.firebaseio.com",
    projectId: "demodb-b5e5a",
    storageBucket: "demodb-b5e5a.appspot.com",
    messagingSenderId: "131467246266",
    appId: "1:131467246266:web:a7ec63848d60fb749f2083",
    measurementId: "G-DZ8F803BBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
export{auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,sendPasswordResetEmail}