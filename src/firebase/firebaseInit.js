import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCyOTSqiP04_Ajyivn_GTP02BoJ_Plyq2c",
    authDomain: "blog-55674.firebaseapp.com",
    projectId: "blog-55674",
    storageBucket: "blog-55674.appspot.com",
    messagingSenderId: "598413487302",
    appId: "1:598413487302:web:fae060e29b7763d5083bc7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { timestamp };
  export default firebaseApp.firestore();
