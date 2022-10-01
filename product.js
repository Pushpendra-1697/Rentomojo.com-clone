import nvbr from './components/nvbr.js';
document.querySelector('#navbar').innerHTML=nvbr();
import auth from './components/auth.js';
    auth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let y=JSON.parse(localStorage.getItem("product"))||{};



let image=document.createElement("img");
image.src=y.image;
document.getElementById("first").append(image)




document.getElementById("title").innerText=y.title;


let h1=document.querySelector("h1");
h1.innerText=y.price
let amount=y.price;

let s=document.getElementById("shan");
let d="Delivery date : ";
let p=new Date();
let month = months[p.getMonth()];
let year=p.getFullYear();
let date=p.getDate();

s.innerText=d+date+" "+month+" "+year


let h2=document.getElementById("total");
document.getElementById("quan").addEventListener("input",function(){
    myfunc()
})
document.getElementById("book").addEventListener("click",function(){
    myfun()
})

function myfunc(){
    let quantity=document.getElementById("quan").value; 
    if(quantity <= 0){
        return;
    }      
    h2.innerText=amount*Number(quantity);
}
function myfun(){
    if(h2.innerText==0){
        alert ("please select Months");
        return;
    }
    else{
        window.location.href="payment.html"
    }
}