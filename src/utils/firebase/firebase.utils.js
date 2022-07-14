import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBJMyqlJ2ncn8roGRg_X26JZa8smHf1VU",
  authDomain: "health-app-c7439.firebaseapp.com",
  projectId: "health-app-c7439",
  storageBucket: "health-app-c7439.appspot.com",
  messagingSenderId: "204029680665",
  appId: "1:204029680665:web:2d0e95caa2983fd659de88",
  measurementId: "G-6PKK54ZZ62",
};

//const analytics = getAnalytics(firebaseApp);
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createNewUserWithEmailAndPass = async (userToCreate) => {
  return await createUserWithEmailAndPassword(
    auth,
    userToCreate.email,
    userToCreate.password
  );
};

export const signInAuthUserWithEmailAndPassword = async (userToSignIn) => {
  if (!userToSignIn.email || !userToSignIn.password) return;
  return await signInWithEmailAndPassword(
    auth,
    userToSignIn.email,
    userToSignIn.password
  );
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log("SignOut Error: ", error);
      // An error happened.
    });
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
