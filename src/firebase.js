import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyByKlPSkaWmEiNCJ4Kyde96YxLlst-WHBU",
  authDomain: "clone-8c9f9.firebaseapp.com",
  databaseURL: "https://clone-8c9f9.firebaseio.com",
  projectId: "clone-8c9f9",
  storageBucket: "clone-8c9f9.appspot.com",
  messagingSenderId: "698622670811",
  appId: "1:698622670811:web:08f57bddbede054a3e59fe",
  measurementId: "G-RR4WNZ3ZZX",
});

//const db = firebase.fireStore();
const auth = firebase.auth();

export { auth };
