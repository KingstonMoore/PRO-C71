import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDFzYi0VLh1GiVVa_rFG_Zf1fniWZj9EDQ",
    authDomain: "e-ride-3f285.firebaseapp.com",
    projectId: "e-ride-3f285",
    storageBucket: "e-ride-3f285.appspot.com",
    messagingSenderId: "370409835811",
    appId: "1:370409835811:web:338bf0da38ad7fd93f1096"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
