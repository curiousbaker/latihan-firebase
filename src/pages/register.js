import React, { Component } from "react";
// import firebase from "../services/firebase";
// import { auth } from "../services/firebase";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

export default class Register extends Component {
  state = {};
  set = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };
  handleRegister = (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    if (!email || !password) return alert("Please insert missing credentials!");

    const firebaseConfig = {
      apiKey: "AIzaSyC21w5nSW12BURfdzxgwrbhAPGxKoJoJbE",
      authDomain: "latihan-firebase-27346.firebaseapp.com",
      projectId: "latihan-firebase-27346",
      storageBucket: "latihan-firebase-27346.appspot.com",
      messagingSenderId: "476599656155",
      appId: "1:476599656155:web:50fcbed3faebdb1b67f6fe",
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
    // auth.createUserWithEmailAndPassword(email, password);
  };
  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <input type="email" onChange={this.set("email")} />
        <input type="password" onChange={this.set("password")} />
        <input type="submit" />
      </form>
    );
  }
}
