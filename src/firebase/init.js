import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDX9izmGcmZSb0p_o_8rXRaNxVLHlQuGXc",
    authDomain: "smoothies-25f71.firebaseapp.com",
    databaseURL: "https://smoothies-25f71.firebaseio.com",
    projectId: "smoothies-25f71",
    storageBucket: "smoothies-25f71.appspot.com",
    messagingSenderId: "122225081645",
    appId: "1:122225081645:web:c21803459a42f4e225a7a4",
    measurementId: "G-Y1FF38XE9M"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//export firestone database
export default firebaseApp.firestore()