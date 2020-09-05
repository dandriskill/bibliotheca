import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBC832GvoAab2XnN2jiZBzPGskZP561XVk",
  authDomain: "bibliotheca-app.firebaseapp.com",
  databaseURL: "https://bibliotheca-app.firebaseio.com",
  projectId: "bibliotheca-app",
  storageBucket: "bibliotheca-app.appspot.com",
  messagingSenderId: "615048650116",
  appId: "1:615048650116:web:4683245cf0c2804ac011d1",
});

const db = firebaseApp.firestore();

export { db };
