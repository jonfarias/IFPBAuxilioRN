import firebase, { database } from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyBXjO3EquK7ROUEaPsaCXE7SCqHFEhuoi0",
  authDomain: "ifpbauxilio.firebaseapp.com",
  databaseURL: "https://ifpbauxilio-default-rtdb.firebaseio.com",
  projectId: "ifpbauxilio",
  storageBucket: "ifpbauxilio.appspot.com",
  messagingSenderId: "597065982172",
  appId: "1:597065982172:web:b3f55658b8c592e4579419",
  measurementId: "G-560K33QBSR"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
