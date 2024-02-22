import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetings={
    databaseURL:"https://gmach-da21b-default-rtdb.europe-west1.firebasedatabase.app/",
}

const app=initializeApp(appSetings);
const database=getDatabase(app);
const itemInDB=ref(database, "items");

//const addButtonEl=document.getElementById("add-button");
const ItemsList = document.getElementById("items_list"); 
//const inputField=document.getElementById("input-field");

/*addButtonEl.addEventListener("click", function(){
    var item=inputField.value;
    push(itemInDB,item);
    resetInputField() 
   // addToShopList(item);
    
    
})*/

onValue(itemInDB,function(snapshot){
  
    resetShoppingList()
    if(snapshot.exists()){
    
    let productsArray= Object.entries(snapshot.val())
    for(let i=0; i<productsArray.length;i++){
        let currentProduct=productsArray[i]
        let currentProductId=currentProduct[0]
        let currentProductVal=currentProduct[1]
        addToShopList(currentProductId,currentProductVal)
    }
}
else{
    ItemsList.innerHTML+=`No items here... yet`;
   
}
    
    //console.log(productsArray)
})

function resetShoppingList(){
    ItemsList.innerHTML=""
}

function addToShopList(productId, productVal){
   // ShoppingList.innerHTML+=`<li id="${productId}">${productVal}</li>`;
   
   let newEl= document.createElement("li")
   let div1 = document.createElement("div")
   div1.className='card'
   div1.style="width: 18rem;"
   let image= document.createElement("img")
   image.src=productVal.picture
   image.className="card-img-top"
   image.alt=`${productVal.name}`
   let div2=document.createElement("div")
   div2.className="card-body"
   let h5=document.createElement("h5")
   h5.className="card-title"
   h5.innerHTML=productVal.name
   let p= document.createElement("p")
   p.className="card-text"
   p.innerHTML=productVal.description
   let a= document.createElement("a")
   a.href=""
   a.className="btn btn-primary"
   a.innerHTML="Go somewhere"
   div2.appendChild(h5)
   div2.appendChild(p)
   div2.appendChild(a)
   div1.appendChild(image)
   div1.appendChild(div2)
   newEl.appendChild(div1)
   newEl.addEventListener("click",function (){
    var url= "./sProduct.html?id="+productId;
    console.log(url);
    location.href="./sProduct.html?id="+productId;
   })
   

    ItemsList.append(newEl)  
}


function resetInputField(){
    inputField.value="";
}
 

