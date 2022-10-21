//selector
let items=document.querySelector("#items");
let qty=document.querySelector("#qty");
let btn=document.querySelector("#btn");
let form=document.querySelector("#inputform");
let row=document.querySelector("#row");
let total=document.querySelector("#total")

// if(localStorage.getItem("row"))
// {
//     row.innerHTML=localStorage.getItem("row");
// }

//function

function calculate(){
    let costs=document.querySelectorAll(".cost");
    total.innerText=[...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
}

function del(event){
    if(confirm('Are you sure want to delete?'))
    {
        event.target.parentElement.parentElement.parentElement.remove();
        // localStorage.setItem("row",row.innerHTML);
        calculate();
    }
  
}

//data from product array 

products.forEach((product)=>{
    // let newOption=document.createElement("option");//html tag name
    let newOption=new Option(product.name,product.id);//(text,value,defaultSelected)
    items.append(newOption);
    // console.log(product);
})

//button 
form.addEventListener("submit",(e)=>{
 e.preventDefault();

 let currentproduct=products.find(product=>product.id==items.value);
 let cost=currentproduct.price*qty.valueAsNumber;
 let newTr=document.createElement("tr");

//       newTr.innerHTML=` <td>
// //                         <button class=" btn btn-sm btn-danger del-btn" onclick="del(event)"><i class=" bi bi-trash3"></i></button>                       
// //                          </td>
                     newTr.innerHTML= `  <td>${currentproduct.name}
                        <span class=" small p-0 text-danger del-btn" onclick="del(event)">Delete</span>                              </td>
                        <td class=" text-end">${currentproduct.price}</td>
                        <td class=" text-end">${qty.valueAsNumber}</td>
                        <td class=" text-end cost">${cost}</td>`;
  row.append(newTr);
//   localStorage.setItem("row",row.innerHTML);
//   qty.value=items.value=null;
  form.reset();

  calculate();
})

