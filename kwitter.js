function adduser(){
    user_name=document.getElementById("user_name").value
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}

function addroom(){
    room_name=document.getElementById("room_name").value;

    firebaseConfig.databaseURL().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room-name",room_name);

    window.location= "kwitter_room.html";
}

function redrictToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}