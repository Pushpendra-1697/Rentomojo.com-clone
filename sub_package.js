import { bedroom_data,roomData,typeroom } from "./sub_packages_data.js";
import nvbr from './components/nvbr.js';
document.querySelector('#navbar').innerHTML=nvbr();
import auth from './components/auth.js';
    auth();
 
let renderDom = () =>{
    let cont = document.getElementById("sidebar2");
    cont.innerHTML=null;

    bedroom_data.forEach((el) => {

        let div = document.createElement("div");
        div.setAttribute("class","main_div");

        let div1 = document.createElement("div");
        div1.setAttribute("class","fis_div");

        let div2 = document.createElement("div");
        div2.setAttribute("class","sec_div");

        let div3 = document.createElement("div");
        div3.setAttribute("class","the_div");

        let img = document.createElement("img");
        img.src=el.img;

        let titl = document.createElement("h3");
        titl.innerText= el.name;

        let pr=document.createElement("p");
        pr.innerText=el.price

        let add_btn = document.createElement("button");
        add_btn.setAttribute("class","btn")
        add_btn.innerText="Add to Cart";
        add_btn.onclick=()=>{
            addcart(el);

        }
        div1.append(img);
        div2.append(titl);
        div3.append(pr,add_btn);
        div.append(div1,div2,div3);
        cont.append(div);
    });
};
renderDom();

let appendDom = () =>{
    let container = document.getElementById("containt");
    container.innerHTML=null;

    roomData.forEach(({ image,type,cont,value}) => {
        let div = document.createElement("div");
        div.setAttribute("class","first_div");
        let img = document.createElement("img");
        img.src= image;

        let p = document.createElement("p");
        p.innerText=type;

        let c = document.createElement("p");
        c.innerText=cont;

        div.append(img,p,c);
        container.append(div);

    });
};


let show = () => {
    let container1 =document.getElementById("container1");
    container1.innerHTML=null;
    typeroom.forEach(({imageurl_two,room,contity})=>{
        let div = document.createElement("div");
        div.setAttribute("class","first_div");
        let img = document.createElement("img");
        img.src= imageurl_two;
        let p = document.createElement("p");
        p.innerText=room;
        let c = document.createElement("p");
        c.innerText=contity;
        div.append(img,p,c);
        container1.append(div);
    })
};
appendDom();
show();

let data =JSON.parse(localStorage.getItem('cart')) ||[];
let addcart = (el) =>{
    data.push(el)
    alert(`Product Added Successfully`);
    localStorage.setItem('cart',JSON.stringify(data));
};