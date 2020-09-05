import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyDvNPEBg8v148l3b52UxLq4rgcU-9AG6zM",
    authDomain: "item-db-45a17.firebaseapp.com",
    databaseURL: "https://item-db-45a17.firebaseio.com",
    projectId: "item-db-45a17",
    storageBucket: "item-db-45a17.appspot.com",
    messagingSenderId: "742147396032",
    appId: "1:742147396032:web:bd948e5c4319570760f825",
    measurementId: "G-9QN8WFD0S6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firestore;