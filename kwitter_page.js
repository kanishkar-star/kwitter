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
//YOUR FIREBASE LINKS

user_name = localStorage.getItem("UserName");
room_name = localStorage.getItem("roomname");

function send(){
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id); 
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4 >" + name + "<img class='user_tick' src = 'tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>"+ message+"</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value = "+like+" onclick ='update_like(this.id)'> ";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function update_like(message_id){
      console.log("Clicked on like button :" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = parseInt(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      });
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index(1).html");
}