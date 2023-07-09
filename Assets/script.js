// Selects elements
var timeEl = document.querySelector(".timertext");
var mainEl = document.querySelector("main");
var startButton = document.querySelector(".start");
var question = document.querySelector(".Quiz");
//var selection = document.querySelector(".selection");


var correctanswer = 0;
var incorrectanswer = 0;



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
    Q1();
}

//after click correct answer, go to next question
function correct(){
    correctanswer = 1;
    var textE1 = document.createElement("p");
    textE1.textContent = "Correct!";
    mainEl.appendChild(textE1);
    console.log("correct answer count =", correctanswer);
    setTimeout(Q2, 1000);
};

 
//after click wrong answer, go to next question
function incorrect(){
    incorrectanswer = 1;
    var textE1 = document.createElement("p");
    textE1.textContent = "Wrong!";
    mainEl.appendChild(textE1);
    console.log("incorrect answer count =",incorrectanswer);
    setTimeout(Q2, 1000);
};



// Function to show game over text, player's initals and score
function endgame() {
    timeEl.textContent = "0";
    mainEl.innerHTML = "";
    var textE2 = document.createElement("h1");
    textE2.textContent = "Game is over.";
    mainEl.appendChild(textE2);

  }
  

function Q1(){

    question.replaceChildren("Q1 : what selection is NOT primitive types of data in JavaScript?");
    var Button1 = document.createElement("button");
    Button1.innerHTML = "String";
    document.querySelector(".selection1").appendChild(Button1);
    var Button2 = document.createElement("button");
    Button2.innerHTML = "Array";
    document.querySelector(".selection2").appendChild(Button2);
    var Button3 = document.createElement("button");
    Button3.innerHTML = "Number";
    document.querySelector(".selection3").appendChild(Button3);

}

// Attach event listener to start button to call setTime function on click
startButton.addEventListener("click", setTime);
Button2.addEventListener("click", correct);
Button1.addEventListener("click", incorrect);
Button3.addEventListener("click", incorrect);

function Q2(){

    question.replaceChildren("Q2 : What is the programming language for the Web?");
    Button1.replaceChildren("JavaScript");
    Button2.replaceChildren("LavaScript");    Button3.replaceChildren("GavaScript");
    document.querySelector("main p").remove();
    Button2.addEventListener("click", incorrect);
    Button1.addEventListener("click", correct);
    Button3.addEventListener("click", incorrect);
}
