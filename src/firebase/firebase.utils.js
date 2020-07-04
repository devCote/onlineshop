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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
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
