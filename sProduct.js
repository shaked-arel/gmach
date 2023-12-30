import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetings={
    databaseURL:"https://gmach-da21b-default-rtdb.europe-west1.firebasedatabase.app/",
}


const app=initializeApp(appSetings);
const database=getDatabase(app);
//const itemInDB=ref(database, "items");

var url=window.location.href;
if(url.includes("?id=")){
    var index=url.indexOf("?id=")
    var id=url.substring(index+4,);
    const itemInDB=ref(database, "items/"+id);
    onValue(itemInDB, (snapshot) => {
        console.log(snapshot.val());
        var productInfo=snapshot.val();
        var title= document.getElementById("p-name");
        title.innerHTML=productInfo.name;
        
        var photo= document.getElementById("main-photo");
        photo.src=productInfo.picture;
        
        var desc= document.getElementById("product-description");
        desc.innerHTML=productInfo.description;

      }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
      }); 
    }
    