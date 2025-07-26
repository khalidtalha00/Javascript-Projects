const box=document.getElementById("box")
const nums=document.getElementById("number")
let randomNums


box.addEventListener('click',function(){
    randomNums=Math.floor((Math.random()*6)+1)
    console.log(randomNums)
    nums.textContent=randomNums

})

