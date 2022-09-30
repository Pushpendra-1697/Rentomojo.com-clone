import { packages_data , apartment_data } from "./packages_data.js";

let renderDom = () => {
    let cont = document.getElementById("container");
    cont.innerHTML = null;

    packages_data.forEach(({
        imageurl_one,imageurl_two,room,contity,id
    }) => {
        let div = document.createElement("div");
        div.setAttribute("class","main_div")
        div.onclick = () => {
          goto(id);
        }

        let div1 = document.createElement("div");
        div1.setAttribute("class","first_div");
        

        let img = document.createElement("img");
        img.src=imageurl_one;

        let div2 = document.createElement("div");
        div2.setAttribute("class","second_div");

        let above_div = document.createElement("div");
        above_div.setAttribute("class","above");

        let icon_div = document.createElement("div");
        let pack_div = document.createElement("div");


        let img2 = document.createElement("img");
        img2.src = imageurl_two;

        let h4 = document.createElement("h4");
        h4.innerText=room;

        let p =document.createElement("p");
        p.innerText=contity;
        
        div1.append(img);
        icon_div.append(img2);
        pack_div.append(h4,p);
        above_div.append(icon_div,pack_div);
        div2.append(above_div);
        div.append(div1,div2);
        cont.append(div);

    })
};

let appendDom = () => {
    let cont = document.getElementById("container_2");
    cont.innerHTML=null;

    apartment_data.forEach(({
        imageurl_one,imageurl_two,room,contity,id
    }) => {
        let div = document.createElement("div");
        div.setAttribute("class","main_div")
        div.onclick = () => {
          goto(id);
        }

        let div1 = document.createElement("div");
        div1.setAttribute("class","first_div");
        

        let img = document.createElement("img");
        img.src=imageurl_one;

        let div2 = document.createElement("div");
        div2.setAttribute("class","second_div");

        let above_div = document.createElement("div");
        above_div.setAttribute("class","above");

        let icon_div = document.createElement("div");
        let pack_div = document.createElement("div");


        let img2 = document.createElement("img");
        img2.src = imageurl_two;

        let h4 = document.createElement("h4");
        h4.innerText=room;

        let p =document.createElement("p");
        p.innerText=contity;
        
        div1.append(img);
        icon_div.append(img2);
        pack_div.append(h4,p);
        above_div.append(icon_div,pack_div);
        div2.append(above_div);
        div.append(div1,div2);
        cont.append(div);

    })

   
}


let goto = (id) => {
    window.location.href="sub_package.html"
}





renderDom();
appendDom();