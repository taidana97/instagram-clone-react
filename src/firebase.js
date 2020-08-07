import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBR5sUZ_fJ7VpKOtsWnyIBmp5jXlldB8zQ",
  authDomain: "instagram-clone-react-5a054.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-5a054.firebaseio.com",
  projectId: "instagram-clone-react-5a054",
  storageBucket: "instagram-clone-react-5a054.appspot.com",
  messagingSenderId: "591672418146",
  appId: "1:591672418146:web:e14777b2595bf4d549163b",
  measurementId: "G-VH5DWRXLJK",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
