import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD9xfESt-J0ULbBxOaaBQt1vvXO1CuiFUo",
  authDomain: "magicmirror-7a63a.firebaseapp.com",
  databaseURL: "https://magicmirror-7a63a.firebaseio.com",
  storageBucket: "magicmirror-7a63a.appspot.com",
  messagingSenderId: "365323638780"
};

firebase.initializeApp(config);

// Contants
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
