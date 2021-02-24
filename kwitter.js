function addUser(){
    add_user = document.getElementById("user_name").value;

    localStorage.setItem("UserName", add_user);

    window.location = "kwitter_room.html"
}