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
      price.innerText=`₹ ${Price}`;
      let seeMore=document.createElement("button");
      seeMore.setAttribute("id","seemoreBtn")
      seeMore.innerText="See more"
      seeMore.addEventListener("click",function(){
        myfunc({imageUrl,title,Price})
      })

      divP.append(price,seeMore)
      div.append(image,Title,rent,divP)
      container.append(div);
    });
  }

  
  // let arr=[1,2,3,4,5,6,7,8,9,10]
  let arr1=[];
    for(let i=0;i<3;i++){
      arr1.push(data[i])
    }
    appendData(arr1)
   let i=2;

  let nextdiv = () => {
    if(i===data.length-3){
      return;      
    }
    ++i;
    arr1.shift();
    arr1.push(data[i]);
    appendData(arr1)
    console.log(i);
  };
  
  let prewdiv=()=>{
    --i;
    
    if(i===0){
      return;
    }
    console.log(i);
    arr1.unshift(data[i]);
    // console.log(i-1);
    arr1.pop()
    i--;
    appendData(arr1)
    console.log(i);
  }
  

  document.getElementById("nextdiv").addEventListener("click",nextdiv)
  document.getElementById("prewdiv").addEventListener("click",prewdiv)
  function product (i,t,p){
    this.image=i;
    this.title=t;
    this.price=p;
  }
  
    function myfunc({imageUrl,title,Price}){
      window.location.href="product.html"
      let x=new product(imageUrl,title,Price);
      localStorage.setItem("product",JSON.stringify(x));
    }