import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCTqErKzq6BjtjemMizSC2o_i7WIeIjVq0",
  authDomain: "todo-react-app-2022f.firebaseapp.com",
  databaseURL: "https://todo-react-app-2022f.firebaseio.com",
  projectId: "todo-react-app-2022f",
  storageBucket: "todo-react-app-2022f.appspot.com",
  messagingSenderId: "1000579524187",
  appId: "1:1000579524187:web:2d48b382259f5677aa017e",
  measurementId: "G-J1FTCZ632S",
});

const db = firebaseApp.firestore();
export { db };
