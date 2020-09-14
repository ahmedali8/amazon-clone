import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCN6Lbq-O2jZl9DCIKNQxfeeMYQwr_CJxU",
    authDomain: "clone-590aa.firebaseapp.com",
    databaseURL: "https://clone-590aa.firebaseio.com",
    projectId: "clone-590aa",
    storageBucket: "clone-590aa.appspot.com",
    messagingSenderId: "389155937706",
    appId: "1:389155937706:web:5d31542d6652a567df1fd3",
    measurementId: "G-8XTFPLQJW1"
};

// initializing firebase instance
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };