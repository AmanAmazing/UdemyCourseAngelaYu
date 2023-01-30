//getting random dice numbers 
const dice1 = Math.floor(Math.random()*6 +1);
const dice2 = Math.floor(Math.random()*6 +1);

// getting  the dice images for the players 
const player1img = "./images/dice"+dice1+".png"
const player2img = "./images/dice"+dice2+".png"

// setting the dice image for the players 
const diceImageSelector1 = document.querySelector(".img1");
const diceImageSelector2 = document.querySelector(".img2");
diceImageSelector1.setAttribute("src",player1img);
diceImageSelector2.setAttribute("src",player2img);

// checking who won 
function winnerchecker(number1,number2){
    mainHeading = document.querySelector(".main-heading")
    if (number1>number2){
        mainHeading.innerHTML = `<i class="fa-solid fa-flag-pennant"></i> Player 1 won`;         
    }else if(number2>number1){
        mainHeading.innerHTML =  `<i class="fa-solid fa-flag-pennant"></i> Player 2 won`; 
    }else{
        mainHeading.innerText =  "It was a draw"; 
    }
}

winnerchecker(dice1,dice2);



