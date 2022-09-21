import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_4kBmOdlE1nqhk4MtE2rpXm3TqX0Q8Q8",
    authDomain: "myolx-54450.firebaseapp.com",
    projectId: "myolx-54450",
    storageBucket: "myolx-54450.appspot.com",
    messagingSenderId: "175703956699",
    appId: "1:175703956699:web:6fc91b571874ce5101c0fe",
    measurementId: "G-CT074Z07ZK"
  };

 export default firebase.initializeApp(firebaseConfig)