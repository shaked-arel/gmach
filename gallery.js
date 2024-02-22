import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetings={
    databaseURL:"https://gmach-da21b-default-rtdb.europe-west1.firebasedatabase.app/",
}


const app=initializeApp(appSetings);
const database=getDatabase(app);
const eventTypes=ref(database, "eventType");
const gallery= document.getElementById("gal");

onValue(eventTypes,function(snapshot){

    var types= snapshot.val();
    let array_types= Object.entries(snapshot.val())
    types.forEach(type => {
        console.log(type);
        let newEl= document.createElement("div");
        newEl.className="col";
        let div=document.createElement("div");
        div.className="card shadow-sm";
        let image=document.createElement("img");
        image.className="bd-placeholder-img card-img-top";
        image.width="100%";
        image.height="225";
        image.src="./images/flowers.jpeg";
        let div2=document.createElement("div");
        div2.className="card-body";
        let h1=document.createElement("h1");
        h1.className="card-text";
        h1.innerHTML=type;
        div2.appendChild(h1);
        div.appendChild(image);
        div.appendChild(div2);
        newEl.appendChild(div);
        newEl.addEventListener("click",function (){
            
         //   var url= "./sGal.html?id="+productId;
          //  console.log(url);
            location.href="./sGallery.html"//?id="+productId;
           });
        gallery.append(newEl);
        
    });
});