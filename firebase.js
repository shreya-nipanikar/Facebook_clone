import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMOjVUZbdVcf7hKR4aqvjih2RZVbxbZmI",
  authDomain: "facebook-clone-7473a.firebaseapp.com",
  projectId: "facebook-clone-7473a",
  storageBucket: "facebook-clone-7473a.appspot.com",
  messagingSenderId: "970122561526",
  appId: "1:970122561526:web:053d631c2965a2b92029d7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
