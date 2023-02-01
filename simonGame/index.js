const buttonColours = ["red","blue","green","yellow"]
let gamePattern = []
let userClickedPattern = []
let gameStarted = false
let level = 0


// starting the game with a keydown 
$(document).keydown(function(){
    if (!gameStarted){
        $("h1").text(`Level ${level}`)
        nextSequence()
        gameStarted = true
    }
});

// next sequence of the game 
function nextSequence(){
    userClickedPattern = [] //resets the buttons the user has clicked  
    level ++ 
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
    animatePress(randomChosenColour)
    $("h1").text(`Level ${level}`)
}

// detects button clicks 
$(".btn").on("click",function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length - 1)
})

// plays sound 
function playSound(name){
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play()
}
// animates the looks of the buttons 
function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed")
    setTimeout(function(){
        $(`#${currentColour}`).removeClass("pressed")
    },100)
}

// resets the game 
function startOver(){
    level = 0
    gamePattern = []
    gameStarted = false
}

// checking if the user inputs the correct answer 
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        
        if (userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000)
        }
    }else{
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        $("h1").text("Game over, Press any key to Restart")
        startOver()
    }
}
