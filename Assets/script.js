// Selects elements
var timeEl = document.querySelector(".timertext");
var mainEl = document.querySelector("main");
var startButton = document.querySelector(".start");

var secondsLeft = 5;

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
    }, 500);
}

// Function to show game over text, player's initals and score
function endgame() {
    timeEl.textContent = "0";
    mainEl.innerHTML = "";
    var textE1 = document.createElement("h1");
    textE1.textContent = "Game is over.";
    mainEl.appendChild(textE1);

  }
  
// Attach event listener to start button to call setTime function on click
startButton.addEventListener("click", setTime);