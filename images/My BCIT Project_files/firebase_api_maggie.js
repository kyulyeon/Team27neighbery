//---------------------------------------------------
// replace the lines below with your own "firebaseConfig"
// key value pairs
//--------------------------------------------------- 

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDrZPuxHXrKEB6Gt0d7CTt6mclOIA6fQ2A",
    authDomain: "march02-demo.firebaseapp.com",
    projectId: "march02-demo",
    storageBucket: "march02-demo.appspot.com",
    messagingSenderId: "552001327696",
    appId: "1:552001327696:web:4388983eb292a435d8b755"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to database
const db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();
