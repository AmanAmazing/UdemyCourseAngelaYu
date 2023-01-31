const buttonColours = ["red","blue","green","yellow"]
let gamePattern = []
let userClickedPattern = []
let gameStarted = false
let level = 0



function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
    animatePress(randomChosenColour)
    level ++ 
    $("h1").text(`Level ${level}`)
}


$(".btn").on("click",function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour)
})

function playSound(name){
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play()
}

function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed")
    setTimeout(function(){
        $(`#${currentColour}`).removeClass("pressed")
    },100)
}



$(document).keydown(function(){
    if (!gameStarted){
        $("h1").text(`Level ${level}`)
        nextSequence()
        gameStarted = true
    }
});