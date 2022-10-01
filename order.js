let d=JSON.parse(localStorage.getItem("shipment"))

let x=document.getElementById("detail");
x.innerText=d.name+", "+"Address - "+d.address+", "+"phone - "+d.number


