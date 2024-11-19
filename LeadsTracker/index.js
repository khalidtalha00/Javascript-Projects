const InputButton=document.getElementById("input-btn")
let UlEl=document.getElementById("ul-el")

let leads =[]

let inputEl =document.getElementById("input-el")



InputButton.addEventListener("click",function(){
    console.log("Button clicked through event listener")


    leads.push(inputEl.value)
    console.log(leads)
    for(let i=0;i<leads.length;i++){
       UlEl.textContent=leads+leads[i]
    }
})


// let sampleLeads=['www','jdiwjijd','mdojwo']
// for(let i=0;i<sampleLeads.length;i++){
//     console.log(sampleLeads[i])
// }