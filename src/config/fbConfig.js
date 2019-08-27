import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBJn4ICRl7vUqztHuBWtl3jg9p1RjOGPZc",
  authDomain: "net-ninja-phuchau.firebaseapp.com",
  databaseURL: "https://net-ninja-phuchau.firebaseio.com",
  projectId: "net-ninja-phuchau",
  storageBucket: "net-ninja-phuchau.appspot.com",
  messagingSenderId: "1086277124140"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
