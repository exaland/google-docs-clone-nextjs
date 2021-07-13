import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCsN25iX4SEHgKdaONU9zfTQw6bMhpmejA",
    authDomain: "docs-586f8.firebaseapp.com",
    projectId: "docs-586f8",
    storageBucket: "docs-586f8.appspot.com",
    messagingSenderId: "718771250565",
    appId: "1:718771250565:web:57e2037dc55bc658ff50ec"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();

export { db };