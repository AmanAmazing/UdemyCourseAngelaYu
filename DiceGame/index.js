//generating random Dice number between 1 and 6  
function randomDice(){
return Math.floor(Math.random()*6 +1)
}



//getting random dice numbers 
const dice1 = randomDice();
const dice2 = randomDice();

// comparing dice numbers 
function diceCheck(number1,number2){
    if (number1 === number2){
        return true;
    }
    else{
        return false;
    }
}

// storing result
const result = diceCheck(dice1,dice2);



// fetching the image selector 
diceImage1 = document.querySelector("img1");
diceImage2 = document.querySelector("img2");
diceImage1.setAttribute("src",`"./images/dice${dice1}.png"`)
