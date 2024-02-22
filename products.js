import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetings={
    databaseURL:"https://gmach-da21b-default-rtdb.europe-west1.firebasedatabase.app/",
}


const app=initializeApp(appSetings);
const database=getDatabase(app);
const itemInDB=ref(database, "items");

const addProductButtonEl=document.getElementById("addProductButton");


addProductButtonEl.addEventListener("click",function(){
    location.href="./addProduct.html";
});


