var timeLeft = 75;
var score = timeLeft;

var questionArr = [
    {
        "question": "Commonly used data types do NOT include:",
        "A1": "1. strings",
        "A2": "2. booleans",
        "A3": "3. alerts",
        "A4": "4. numbers",
        "answer": "3. alerts"
    },
    {
        "question": "The condition in an if/else statement is enclosed with ________.",
        "A1": "1. quotes",
        "A2": "2. curly brackets",
        "A3": "3. paranthesis",
        "A4": "4. square brackets",
        "answer": "3. paranthesis"
    }
]
var renderQuestion = function() {
    for (i = 0; i < questionArr.length; i--) {
        document.querySelector("h1").innerHTML = "Hello!";
    }

var countdown = function() {
    renderQuestion();
    setInterval(function(){
        if (timeLeft >= 0) {
        document.querySelector("#timer").innerHTML = "Timer: " + timeLeft;
        timeLeft--;
    }
    }, 1000);
};

document.querySelector("#start").addEventListener("click", countdown);