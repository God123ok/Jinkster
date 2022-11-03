
const firebaseConfig = {
    apiKey: "AIzaSyDOIMxKP70OMzkKPnQdNjTYJcWUYy-OQJI",
    authDomain: "jinkster-a3cec.firebaseapp.com",
    databaseURL: "https://jinkster-a3cec-default-rtdb.firebaseio.com",
    projectId: "jinkster-a3cec",
    storageBucket: "jinkster-a3cec.appspot.com",
    messagingSenderId: "963394470294",
    appId: "1:963394470294:web:16f2d478fc07d8e9475db7",
    measurementId: "G-HHFBZ41T27"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
     purpose : "adding user"
    });
}