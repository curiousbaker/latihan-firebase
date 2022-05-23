// import * as firebase from "firebase/app";
// import "firebase/auth";
// // import "firebase/storage";

// export default firebase.initializeApp({
//   apiKey: "AIzaSyC21w5nSW12BURfdzxgwrbhAPGxKoJoJbE",
//   authDomain: "latihan-firebase-27346.firebaseapp.com",
//   projectId: "latihan-firebase-27346",
//   storageBucket: "latihan-firebase-27346.appspot.com",
//   messagingSenderId: "476599656155",
//   appId: "1:476599656155:web:50fcbed3faebdb1b67f6fe",
// });

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC21w5nSW12BURfdzxgwrbhAPGxKoJoJbE",
  authDomain: "latihan-firebase-27346.firebaseapp.com",
  projectId: "latihan-firebase-27346",
  storageBucket: "latihan-firebase-27346.appspot.com",
  messagingSenderId: "476599656155",
  appId: "1:476599656155:web:50fcbed3faebdb1b67f6fe",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth };
// export default db;
