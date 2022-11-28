var firebaseConfig = {
  apiKey: "AIzaSyA2mr6uDIdKmR1BTQQ4tb4dIloXQx2GLQE",
  authDomain: "kwitter-chat-web-app.firebaseapp.com",
  databaseURL: "https://kwitter-chat-web-app-default-rtdb.firebaseio.com",
  projectId: "kwitter-chat-web-app",
  storageBucket: "kwitter-chat-web-app.appspot.com",
  messagingSenderId: "168254413345",
  appId: "1:168254413345:web:6fe9acd1814e48bca52160"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name", user_name);
document.getElementById("user_name").innerHTML="Welcome   "+ user_name;
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}