// create two variables firstCard and secondCard and set their values to random num between 2-11


let cards =[]
let sum =0
let hasBlackJack =false
let isAlive =false
let messege =""
let messegeEl=document.querySelector("#messege");
let sumEl =document.getElementById("sum")
cardsEl =document.getElementById("cards")

function getRandomCard(){
    myCard=Math.floor(Math.random()*13)+1
    if(myCard===1){
        return 11
    }
    else if(myCard===11 || myCard===12 ||myCard===13){
        return 10
    }
    else{
    return myCard
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()
    cards =[firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function renderGame(){
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
    messegeEl.textContent=messege 
    for(let i=0;i<cards.length;i++){
    cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent="Sum:"+sum
}  

function newCard(){
let newCard =getRandomCard()
sum+=newCard
cards.push(newCard)
renderGame()
}