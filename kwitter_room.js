
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDU4dCQBy_UNFLTwTzOfXQX6u8MkGTM2Ws",
    authDomain: "kwitter-cc9eb.firebaseapp.com",
    databaseURL: "https://kwitter-cc9eb.firebaseio.com",
    projectId: "kwitter-cc9eb",
    storageBucket: "kwitter-cc9eb.appspot.com",
    messagingSenderId: "552687953304",
    appId: "1:552687953304:web:782b19c869797bf94db7ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redrictToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();