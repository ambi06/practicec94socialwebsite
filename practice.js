const firebaseConfig = {
  apiKey: "AIzaSyD6hAxWiv8WCsL8S9HR9HCM7sjsSdXcs-I",
  authDomain: "test2-3e043.firebaseapp.com",
  databaseURL: "https://test2-3e043-default-rtdb.firebaseio.com",
  projectId: "test2-3e043",
  storageBucket: "test2-3e043.appspot.com",
  messagingSenderId: "634878779297",
  appId: "1:634878779297:web:8c54617cfd5e3103ee75e0"
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
