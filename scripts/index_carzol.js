import {data,imgdata1} from "../components/data.js"
  let cont = document.getElementById("image");
  cont.src = imgdata1[0].url;

  let count = 1;
  let id;
  let func = (count) => {
    id = setInterval(() => {
      cont.src = imgdata1[count].url;
      if (count === imgdata1.length - 1) {
        count = 0;
      } else {
        count++;
      }
      //console.log(count);
    }, 3000);
  };
  func(count);

  let nextimg = () => {
    clearInterval(id);
    cont.src = imgdata1[count].url;
    if (count === imgdata1.length - 1) {
      count = 0;
    } else {
      count++;
    }
    func(count);
  };
  let previmg = () => {
    clearInterval(id);
    cont.src = imgdata1[count].url;
    if (count === 0) {
      count = imgdata1.length - 1;
    } else {
      count--;
    }
    func(count);
  };

  document.getElementById("next").addEventListener("click", nextimg);
  document.getElementById("prev").addEventListener("click", previmg);

  let container=document.getElementById("appedndCategory")

  let appendData=(data)=>{
    container.innerHTML=null;
    data.forEach(({imageUrl,title,Price}) => {
      let div=document.createElement("div");
      div.setAttribute("class","card");
      let image=document.createElement("img");
      image.src=imageUrl;
      let Title=document.createElement("p");
      Title.innerText=title;
      let rent=document.createElement("p");
      rent.setAttribute("id","rent")
      rent.innerText="Rent";
      let divP=document.createElement("div");
      divP.setAttribute("class","pBtn")

      let price=document.createElement("p");
      price.innerText=`₹ ${Price}/mo`;
      let seeMore=document.createElement("button");
      seeMore.setAttribute("id","seemoreBtn")
      seeMore.innerText="See more";

      divP.append(price,seeMore)
      div.append(image,Title,rent,divP);
      container.append(div);
    });
  }

  let arr1=[];
    for(let i=0;i<5;i++){
      arr1.push(data[i])
    }
    appendData(arr1)
   let i=5;

  let nextdiv = () => {
    if(i===data.length){
      return;      
    }
    ++i;
    arr1.shift();
    arr1.push(data[i]);
    appendData(arr1)
    //console.log(i);
  };
  
  let prewdiv=()=>{ 
    if(i===0){
      return;
    }
    i--;
    arr1.unshift(data[i]);
    arr1.pop()
    appendData(arr1)
   // console.log(i);
  }
  

  document.getElementById("nextdiv").addEventListener("click",nextdiv)
  document.getElementById("prewdiv").addEventListener("click",prewdiv)