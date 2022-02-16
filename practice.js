var firebaseConfig = {
    apiKey: "AIzaSyBCo-VElXZ0XPLWKs9-4R9BOccaWm2c59Q",
    authDomain: "kwitter-app-b3235.firebaseapp.com",
    databaseURL: "https://kwitter-app-b3235-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-b3235",
    storageBucket: "kwitter-app-b3235.appspot.com",
    messagingSenderId: "771371849258",
    appId: "1:771371849258:web:846a9ceb774f347041d553",
    measurementId: "G-XBFYK25W6V"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}