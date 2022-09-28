let shipmentDetail=JSON.parse(localStorage.getItem("shipment"))
function myfunc(){
    let name=document.getElementById("name").value;
    let address=document.getElementById("address").value;
    let number=document.getElementById("number").value;
    let obj={
        name:name,
        address:address,
        number:number,
    }
   
    let one=document.getElementById("one").checked;
    let two=document.getElementById("two").checked;
    let three=document.getElementById("three").checked;
    let four=document.getElementById("four").checked;
    let five=document.getElementById("five").checked;
    if(obj.name!=""&&obj.address!=""&&obj.number!=""){
        if(one==true||two==true||three==true||four==true||five==true){
            window.location.href="review.html"
            localStorage.setItem("shipment",JSON.stringify(obj))          
            return;
        }
        else{
            alert("Please select payment method");
        }
        return
    }
    else{
        alert("Please fill shipment detail");
    }
}