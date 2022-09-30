import { bedroom_data,roomData,typeroom } from "./sub_packages_data.js";
import nvbr from './components/nvbr.js';
document.querySelector('#navbar').innerHTML=nvbr();
import auth from './components/auth.js';
    auth();


let renderDom = () =>{
    let cont = document.getElementById("sidebar2");
    cont.innerHTML=null;

    bedroom_data.forEach(({imageurl,title,price,id,value}) => {

        let div = document.createElement("div");
        div.setAttribute("class","main_div");

        let img = document.createElement("img");
        img.src=imageurl;

        let titl = document.createElement("h3");
        titl.innerText=title;

        let pr=document.createElement("p");
        pr.innerText=price

        div.append(img,title,price);
        cont.append(div);



    })

};

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
}
appendDom();
show();
//renderDom();