// detecting button press
const numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        const clickedDrum =  this.innerHTML;
        makeSound(clickedDrum);
        buttonAnimation(clickedDrum);
    });
}

// detecting keypress
document.addEventListener("keydown",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//making sound

function makeSound(key){

    switch (key) {
    case "w":
        const tom1  = new Audio("./sounds/tom-1.mp3")
        tom1.play();               
        break;
    case "a":
        const tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        const tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        const tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        const kickBass = new Audio("./sounds/kick-bass.mp3");
        kickBass.play();
        break;
    case "k":
        const snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
    case "l":
        const crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;

    default:
        console.log(key)
        break;
    }
}

// animating the buttons when key or button is pressed 
function buttonAnimation(currentKey){
    const activeButton = document.querySelector(`.${currentKey}`)
    // now need to add the css styled .pressed class to that button
    activeButton.classList.add("pressed")
    // now need to remove the shadow added by the pessed class to finish the animation
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}

