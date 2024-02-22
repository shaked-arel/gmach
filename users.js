
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetings={
    databaseURL:"https://gmach-da21b-default-rtdb.europe-west1.firebasedatabase.app/",
}


const app=initializeApp(appSetings);
const database=getDatabase(app);
const usersInDB=ref(database, "users");
const AddUserList= document.getElementById("usersList")

onValue(usersInDB,function(snapshot){
    resetUsersList()
    let eventsArray=Object.entries(snapshot.val());
    for(let i=0; i<eventsArray.length;i++){
        let currentEvent=eventsArray[i];
        let currentEventId=currentEvent[0];
        let currentEventVal=currentEvent[1];
        addToUsersList(currentEventId,currentEventVal,i+1)
    }
    

});

function resetUsersList(){
    AddUserList.innerHTML=""
}

function addToUsersList(id, val,index){

    let newElem=document.createElement("tr");
    let th =document.createElement("th");
    let tdName =document.createElement("td");
    let tdPhone =document.createElement("td");
    let tdAddress =document.createElement("td");
   // let tdLink=document.createElement("td");
   // let link = document.createElement("a");
   // link.href="./order.html";
   // link.innerHTML="order";
    tdName.innerHTML=val['name'];
    tdPhone.innerHTML=val['phone'];
    tdAddress.innerHTML=val['address'];
    th.scope="row";
    th.innerHTML=index;
   // tdLink.appendChild(link);
    newElem.appendChild(th);
    newElem.appendChild(tdName);
    newElem.appendChild(tdPhone);
    newElem.appendChild(tdAddress);
    //newElem.appendChild(tdLink);
    
    AddUserList.appendChild(newElem);

}