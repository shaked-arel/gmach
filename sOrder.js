import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
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
const AddEventList= document.getElementById("productsInOrder")


var url=window.location.href;
if(url.includes("?id=")){
    var index=url.indexOf("?id=")
    var id=url.substring(index+4,);
    const eventInDB=ref(database, "events/"+id);
    onValue(eventInDB, (snapshot) => {
        
        let order=snapshot.val();
        let h1=document.getElementById("orderH1");
        h1.innerHTML= order["occasion"]+" ל"+order["costumer-name"];
        let products=Object.entries(order["products"]);
        console.log(products);
        resetEventsList()
       // let eventsArray=Object.entries(snapshot.val());
    for(let i=0; i<products.length;i++){
        let currentEvent=products[i];
        let currentEventId=currentEvent[0];
        let currentEventVal=currentEvent[1];
        addToProductsList(currentEventId,currentEventVal,i+1)
    }
        
    })}

function resetEventsList(){
        AddEventList.innerHTML=""
    }
    
function addToProductsList(id, val,index){
    
       
        let newElem=document.createElement("tr");
        let th =document.createElement("th");
        let tdProductId =document.createElement("td");
        let tdProductName =document.createElement("td");
        let tdamount =document.createElement("td");
        
        const itemsInDB=ref(database,"items/"+id);
        onValue(itemsInDB, (snapshot) => {
        
            let item=snapshot.val();
            tdProductName.innerHTML= item["name"]
        });

        tdProductId.innerHTML=id;
        tdamount.innerHTML=val;
        
        
        th.innerHTML=index;
        
        newElem.appendChild(th);
        newElem.appendChild(tdProductId);
        newElem.appendChild(tdProductName);
        newElem.appendChild(tdamount);
        
        
        AddEventList.appendChild(newElem);
    
    }