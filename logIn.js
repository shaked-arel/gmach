
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {getDatabase,ref, push, child ,set ,onValue, remove,update} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyA06az7aLrNYrU4sJr3b-jNQSF9X_mYi_s",
  authDomain: "gmach-da21b.firebaseapp.com",
  databaseURL: "https://gmach-da21b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gmach-da21b",
  storageBucket: "gmach-da21b.appspot.com",
  messagingSenderId: "250198852290",
  appId: "1:250198852290:web:c90787a964cd5daf06b15b",
  measurementId: "G-R5W5V6V6PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
const userInDB=ref(database,"users");
const auth = getAuth(app);

const logInButton=document.getElementById("LogIn");

logInButton.addEventListener("click",function(){
    var email= document.getElementById("email").value;
    var password= document.getElementById("Password").value;
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const dt= new Date();
    update(ref(database,"users/"+user['uid']),{
      last_login:dt
    })
    
   // user
   console.log(user['uid']);
    alert("user loggen in")
   // location="./index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});

