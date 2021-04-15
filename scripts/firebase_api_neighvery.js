
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC1v5ZmSuoYws9I8SX7rnbZUDCVCRLtj4g",
  authDomain: "neighvery.firebaseapp.com",
  projectId: "neighvery",
  storageBucket: "neighvery.appspot.com",
  messagingSenderId: "667260903003",
  appId: "1:667260903003:web:a333214b89005dcb51a97e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize the firebase UI widget using firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
const db = firebase.firestore();



