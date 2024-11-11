
let hands =["Rock","Paper","Scissor"]

function getHand(){
    randomIndex=Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHand())

