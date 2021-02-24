
 var firebaseConfig = {
      apiKey: "AIzaSyAx-dvSC39iHpCnbx6iBHptNajp3Bj2eUo",
      authDomain: "kwitter-768d1.firebaseapp.com",
      databaseURL: "https://kwitter-768d1.firebaseio.com",
      projectId: "kwitter-768d1",
      storageBucket: "kwitter-768d1.appspot.com",
      messagingSenderId: "486377316586",
      appId: "1:486377316586:web:d4c52e8c7f5fdb50d3b793"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE

    user_name = localStorage.getItem("UserName");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name  + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose :"Adding Roomname"});

      localStorage.setItem("roomname", room_name);

      window.location = "kwitter_page.html";
    }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Roomname = " + Room_names);

        row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";

        document.getElementById("output").innerHTML += row;
        //End code
        });});}

  getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Roomname", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index(1).html";
}
