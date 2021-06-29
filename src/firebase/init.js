import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//export firestone database
export default firebaseApp.firestore()
