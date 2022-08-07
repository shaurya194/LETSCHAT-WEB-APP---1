// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB2SO9X6s6U9O3EAt_I3g9vxg3MHvV2z_Y",
      authDomain: "letschat-web-app---1-9dd71.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-9dd71-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-9dd71",
      storageBucket: "letschat-web-app---1-9dd71.appspot.com",
      messagingSenderId: "455063783691",
      appId: "1:455063783691:web:8b363b46b5778584733a0e"
    };
  
    
      user_name = localStorage.getItem("user_name");  
      document.getElementById("user_naame)").innerHTML = "Welcome "+user_name+"!";
   
    function add_room() {
room_name = document.getElementById("room_name").value;
localStorage.setItem("roomname", room_name);
window.Location="kwitter_room.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
