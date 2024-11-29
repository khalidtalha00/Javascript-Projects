const InputButton=document.getElementById("input-btn")
const UlEl=document.getElementById("ul-el")

let leads =[]

const inputEl =document.getElementById("input-el")



InputButton.addEventListener("click",function(){
    leads.push(inputEl.value)
    renderLeads()
    inputEl.value=""

})

function renderLeads(){
let listItems=""
for(let i=0;i<leads.length;i++){
   listItems+=`
   <li>
    <a  target='_blank' href='${leads[i]}'>
        ${leads[i]}
    </a>
    </li>
    `
    
}

UlEl.innerHTML=listItems
}



