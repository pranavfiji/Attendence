 import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDf7XF046-dnSaOZ6u1fMVAES9jsaHuNDc",
    authDomain: "attendence-taker-37cd9.firebaseapp.com",
    databaseURL: "https://attendence-taker-37cd9-default-rtdb.firebaseio.com",
    projectId: "attendence-taker-37cd9",
    storageBucket: "attendence-taker-37cd9.appspot.com",
    messagingSenderId: "505198575942",
    appId: "1:505198575942:web:84e6e478b53765a707a547"
  };
  // Initialize Firebase
    var app=firebase.initializeApp(firebaseConfig);
export default app.database();

 