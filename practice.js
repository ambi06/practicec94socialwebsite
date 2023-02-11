// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDWh7zfRBbE4Z_jtU7InnxYQJX-0SEoVgg",
  authDomain: "tictactoe-47fed.firebaseapp.com",
  databaseURL: "https://tictactoe-47fed-default-rtdb.firebaseio.com",
  projectId: "tictactoe-47fed",
  storageBucket: "tictactoe-47fed.appspot.com",
  messagingSenderId: "974672026225",
  appId: "1:974672026225:web:c731c75814a77c5ab419d0"
};
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

