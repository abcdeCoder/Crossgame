// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBqK5RHQWjOWY2KZaCqD6txvNC2NpYJJ0o",
  authDomain: "game-6c092.firebaseapp.com",
  projectId: "game-6c092",
  storageBucket: "game-6c092.appspot.com",
  messagingSenderId: "1047151500153",
  appId: "1:1047151500153:web:7f8a8e179dea88b5cf6da8",
  measurementId: "G-0CHCEXDE08"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
