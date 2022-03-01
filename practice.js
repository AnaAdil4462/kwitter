const firebaseConfig = {
    apiKey: "AIzaSyAwRmHUV4juvQTi_Br1jTmWlT4SZuyiugs",
    authDomain: "kwitter-51ac2.firebaseapp.com",
    databaseURL: "https://kwitter-51ac2-default-rtdb.firebaseio.com",
    projectId: "kwitter-51ac2",
    storageBucket: "kwitter-51ac2.appspot.com",
    messagingSenderId: "722433891841",
    appId: "1:722433891841:web:a36ca966f1dc1bcc89ea00"
  };
  
  
 firebase.initializeApp(firebaseConfig);
function addUser(){

user_name=document.getElementById("user_name").value 
firebase.database().ref("/").child(user_name).update({

purpose:"adding user"

}) ;


}





