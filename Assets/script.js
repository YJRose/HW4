// Selects elements
var timeEl = document.querySelector(".timertext");
var mainEl = document.getElementsByTagName("main");
var startButton = document.querySelector(".start")

var secondsLeft = 15;

function setTime(){
    // Sets interval in variable
    var timerInterval = setInterval(function(){
        secondsLeft --;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0){
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // call function
            endgame();
        }
    }, 1500);
}

// Function to show game over text, player's initals and score
function endgame() {
    timeEl.textContent = " ";
    var textE1 = document.createElement("h2");
    textE1.value = "Game is over.";
    mainEl.appendChild(textE1);
  
  }
  

startButton.addEventListener("click", setTime);