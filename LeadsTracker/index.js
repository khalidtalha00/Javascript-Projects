const InputButton=document.getElementById("input-btn")
const UlEl=document.getElementById("ul-el")

let leads =["www.awesomeleads.com","greatLeads.com","myleads.com"]

const inputEl =document.getElementById("input-el")



InputButton.addEventListener("click",function(){
    leads.push(inputEl.value)
    console.log(leads)
})

let listItems=""


for(let i=0;i<leads.length;i++){
   listItems+="<li>"+leads[i] +"</li>"
}

UlEl.innerHTML=listItems


