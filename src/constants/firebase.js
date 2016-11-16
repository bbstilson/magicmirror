import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD9xfESt-J0ULbBxOaaBQt1vvXO1CuiFUo",
  authDomain: "magicmirror-7a63a.firebaseapp.com",
  databaseURL: "https://magicmirror-7a63a.firebaseio.com",
  storageBucket: "magicmirror-7a63a.appspot.com",
  messagingSenderId: "365323638780"
};

firebase.initializeApp(config);

// Contants
const ref = firebase.database().ref();
const firebaseAuth = firebase.auth;

const GITHUB = 'GITHUB';
const GOOGLE = "GOOGLE";

export function auth (provider = GITHUB) {
  switch(provider) {
    case GITHUB:
      console.log('Trying to login with Github');
      return firebaseAuth().signInWithPopup(new firebase.auth.GithubAuthProvider());
    case GOOGLE:
      console.warn('Trying to login with Google');
      return;
      // return firebaseAuth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    default:
      return {};
  }
}

export function unauth () {
  return firebaseAuth().signout();
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user);
}
