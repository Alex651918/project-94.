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
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}