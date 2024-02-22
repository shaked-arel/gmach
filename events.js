
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetings={
    databaseURL:"https://gmach-da21b-default-rtdb.europe-west1.firebasedatabase.app/",
}


const app=initializeApp(appSetings);
const database=getDatabase(app);
const eventsInDB=ref(database, "events");
const AddEventList= document.getElementById("events")

onValue(eventsInDB,function(snapshot){
    resetEventsList()
   
    let eventsArray=Object.entries(snapshot.val());
    for(let i=0; i<eventsArray.length;i++){
        let currentEvent=eventsArray[i];
        let currentEventId=currentEvent[0];
        let currentEventVal=currentEvent[1];
        addToEventsList(currentEventId,currentEventVal,i+1)
    }
    

});

function resetEventsList(){
    AddEventList.innerHTML=""
}

function addToEventsList(id, val,index){

    /**
     * <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
     */
    let newElem=document.createElement("tr");
    let th =document.createElement("th");
    let tdName =document.createElement("td");
    let tdDate =document.createElement("td");
    let tdType =document.createElement("td");
    let tdLink=document.createElement("td");
    let link = document.createElement("a");
    let tdStatus=document.createElement("td");
    link.href="./sOrder.html?id="+id;
    link.innerHTML="order";
    tdName.innerHTML=val['costumer-name'];
    tdDate.innerHTML=val['day']+"."+val["month"]+"."+val["year"];
    tdType.innerHTML=val['occasion'];
    tdStatus.innerHTML=val['status'];
    th.scope="row";
    th.innerHTML=index;
    tdLink.appendChild(link);
    newElem.appendChild(th);
    newElem.appendChild(tdName);
    newElem.appendChild(tdDate);
    newElem.appendChild(tdType);
    newElem.appendChild(tdStatus);
    newElem.appendChild(tdLink);
    
    AddEventList.appendChild(newElem);

}