
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {getDatabase,ref, push, child ,set ,onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


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

const signUpButton=document.getElementById("signUp");

signUpButton.addEventListener("click",function(){
    var email= document.getElementById("email").value;
    var password= document.getElementById("Password").value;
    var name= document.getElementById("name").value;
    var address= document.getElementById("address").value;
    var phone= document.getElementById("phone").value;
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  //  location="./index.html"
    var jsonUser={"name": name, "phone":phone,"email":email, "address":address};
    console.log(jsonUser);
    set(child(userInDB,user["uid"]),jsonUser);
    alert("hello "+name);
    location="./index.html"
    //  push(user["uid"],jsonUser);
   // push(child())
    // ...
  })
  .catch((error) => {
   // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

});