// document.getElementById("count").innerText=5

// initialise count as 0
// listen as button is clicked
// increment the value of count as each button is pressed
//reflect the value in html in #count id
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0 

function Increment(){
    // console.log("Button was clicked")
    count +=1
    countEl.innerText=count
    
}

function save(){
    // console.log(count)
    // alert(count+" Passengers saved to console")
    let entries = count+" - "
    saveEl.textContent +=entries
    count = 0
    countEl.textContent =count
}