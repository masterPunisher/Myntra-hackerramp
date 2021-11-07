import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDAimWfA892AFLKrID0nBSqmcp1xvP4G1Q",
    authDomain: "myntra-hackerramp-5a155.firebaseapp.com",
    projectId: "myntra-hackerramp-5a155",
    storageBucket: "myntra-hackerramp-5a155.appspot.com",
    messagingSenderId: "414333797086",
    appId: "1:414333797086:web:0a0e53243933347232784f",
    measurementId: "G-GG2BMYQ8JH"
  };
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
  var db=firebase.firestore();
  export {storage,db};