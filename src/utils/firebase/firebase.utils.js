import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signOut,
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

// Initialize Firebase
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

// export const authListener = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(user);
//     } else {
//       // User is signed out
//     }
//   });
// };

export const signInAuthUserWithEmailAndPassword = async (userToSignIn) => {
  if (!userToSignIn.email || !userToSignIn.password) return;
  console.log(userToSignIn);
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
      // An error happened.
    });
};

// export const createNewUser = (newUser) => {
//   const usersDocument = doc(database, "users", newUser.email);
//   console.log(newUser);
//   setDoc(usersDocument, newUser);
// };

// .then((userCredential) => {
//   const user = userCredential.user;
//   console.log("Usuario creado: ", user.email);
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.log("Error: ", errorCode, errorMessage);
// });

// export const searchUser = async (userToSearch) => {
//   const docRef = doc(database, "users", userToSearch.email);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     console.log("No such document!");
//     return null;
//   }
// };
