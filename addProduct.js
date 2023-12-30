import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetings={
    databaseURL:"https://gmach-da21b-default-rtdb.europe-west1.firebasedatabase.app/",
}


const app=initializeApp(appSetings);
const database=getDatabase(app);
const itemInDB=ref(database, "items");
const submitProductButtonEl=document.getElementById("submitProduct");


submitProductButtonEl.addEventListener("click",function(){
    var name= document.getElementById("name").value;
    var description= document.getElementById("description").value;
    var amount= document.getElementById("amount").value;
  //  var photo= document.getElementById("name").value;
  //  console.log(name+" - "+description+" - "+amount);
    var photo=document.getElementById("photo");
    var path= "";
    photo.onchange=function(){
        path=photo.files[0]
    }
    console.log(path);
    var jsonProduct={"name": name, "description":description,"amount":amount, "picture:":path};
    push(itemInDB,jsonProduct);
    alert("product added");
 //   location.href="./products.html";

})

