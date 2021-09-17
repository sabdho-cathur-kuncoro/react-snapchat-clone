import firebase from 'firebase';
// import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDVkbYPQigGrHhH5klO2BgyJaMwdyRhwPY",
    authDomain: "snapchat-clone-7c3a8.firebaseapp.com",
    projectId: "snapchat-clone-7c3a8",
    storageBucket: "snapchat-clone-7c3a8.appspot.com",
    messagingSenderId: "593951720237",
    appId: "1:593951720237:web:a69e21a2036325e67a09a4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };