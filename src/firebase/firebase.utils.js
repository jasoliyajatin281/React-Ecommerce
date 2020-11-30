import firebase from "firebase/app";
import "firebase/firestore"; //For the database
import "firebase/auth"; // For auth

const config = {
  apiKey: "AIzaSyDUqqJASDZWwQOhYAA7opjT_-KdtgatYPk",
  authDomain: "sai-fashion-db.firebaseapp.com",
  databaseURL: "https://sai-fashion-db.firebaseio.com",
  projectId: "sai-fashion-db",
  storageBucket: "sai-fashion-db.appspot.com",
  messagingSenderId: "331629271411",
  appId: "1:331629271411:web:023d58016801485e7b0d06",
  measurementId: "G-KR0L2R5881",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authetication utils
const provider = new firebase.auth.GoogleAuthProvider();

// Always trigger google pop up and sign in
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
