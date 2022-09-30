

    
import nvbr from './components/nvbr.js';
document.querySelector("#nav_container").innerHTML = nvbr();
import auth from './components/auth.js';
    auth();

import { fitness } from "./fitness_data.js";

let cart_data = JSON.parse(localStorage.getItem("cart"))||[];
let append=()=>{
    console.log(fitness);

    let main=document.getElementById('container')
    main.innerHTML=null;
    fitness.forEach((el)=>{
        let div=document.createElement('div')
        let img=document.createElement('img')
        img.src=el.img;
        let h3=document.createElement('p')
        h3.innerText=el.name;
        let p=document.createElement('p')
        p.innerText=el.price;
        let btn=document.createElement('button')
        btn.innerText='Add to Cart'
        btn.addEventListener('click',()=>{
            addTocart(el);
        })
        
        div.append(img,h3,p,btn)
        main.append(div)
    })
}
append();

let addTocart = (el) => {
    cart_data.push(el);
    alert(`Product Added Successfully`);
    localStorage.setItem('cart',JSON.stringify(cart_data));
};

