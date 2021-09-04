
let hasblackjack = false;
let isAlive = false;
let cards = [];
let message = "";
let sum = 0;
let sumEl =document.getElementById("sum");
let cardsEL = document.getElementById("cards");

let gameOver = false;
 
let player = {
    name: "Aditya", chips:145
}

document.getElementById("player-el").textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13 + 1);
    
    if (randomNumber === 1){
        return 11;
    }
    else if (randomNumber > 10){
        return 10;
    }
    else{
        return randomNumber;
    }
}

function startgame(){
    if(isAlive===false ){
    isAlive = true;
    cards = [];

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    
    
    renderGame();
    }
    
    else{
        document.getElementById("message").textContent = "The Game has already begun. Select New Cards."
    }
}
function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw out a new card?";
    }
    
    else if (sum === 21){
        message = "Congratualations! You've got a BlackJack!";
        hasblackjack = true;
    
    }
    
    else{
        message = "You are out of the game!";
        isAlive = false;
        
        
    }
    
    document.getElementById("message").textContent = message;
    sumEl.textContent= "Sum: " + sum;
    
    cardsEL.textContent ="Cards: ";
    for(let i = 0; i < cards.length; i +=1){
        cardsEL.textContent += " " + cards[i];
    }
    
}

function newCards(){
   
   if(isAlive ===true && hasblackjack === false )
   {
    let newCard = getRandomCard();
   
    sum += newCard;
    cards.push(newCard);
    renderGame();
   }

   else{
       document.getElementById("message").textContent = "Click on 'Start Game' button "
   }
    

}

