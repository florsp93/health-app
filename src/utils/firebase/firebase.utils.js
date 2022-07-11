import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";

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

const database = getFirestore();

export const createNewUser = (newUser) => {
  const usersDocument = doc(database, "users", newUser.email);
  console.log(newUser);
  setDoc(usersDocument, newUser);
};

export const searchUser = async (user) => {
  const usersColection = collection(database, "users");

  const usersColectionSnap = await getDocs(usersColection);

  if (usersColectionSnap) {
    const colectionData = usersColectionSnap.data();
    console.log("document data: ", colectionData);
  } else {
    console.log("no existe doc");
  }
};
