// create two variables firstCard and secondCard and set their values to random num between 2-11

let firstCard = 5
let secondCard =20
let sum =firstCard+secondCard
let hasBlackJack =false
let isAlive =true
let messege =""
let messegeEl=document.querySelector("#messege");
let sumEl =document.getElementById("sum")

function startGame(){
    if(sum<=20){
        messege="Do you want to draw a new card?😊"
    }
    else if(sum===21){
        messege="Woohoo! You have got the black jack!🥳"
        hasBlackJack = true
    }
    else{
        messege="You are out of the game😭"
        isAlive =false
    }
    console.log(messege)
    console.log("has blackjack:"+hasBlackJack)
    console.log("Is alive:"+isAlive)
    messegeEl.textContent=messege 
sumEl.textContent="Sum:"+sum

}  