import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
  apiKey: 'AIzaSyCY2HqlwXbAucbjjRNrC7kXXPyBuuxHZQk',
  authDomain: 'ecomerce-db-30d01.firebaseapp.com',
  databaseURL: 'https://ecomerce-db-30d01.firebaseio.com',
  projectId: 'ecomerce-db-30d01',
  storageBucket: 'ecomerce-db-30d01.appspot.com',
  messagingSenderId: '1012540718933',
  appId: '1:1012540718933:web:f0286443cd0782380179dc',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
