var timeLeft = 75;
var score = timeLeft;
var i = 0

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
    document.querySelector("p").remove();
    document.querySelector("#start").remove();
    document.querySelector("h1").innerHTML = questionArr[i].question;
    var btn1 = document.createElement("BUTTON"); 
    btn1.innerHTML = questionArr[i].A1;                 
    document.body.appendChild(btn1);
    var btn2 = document.createElement("BUTTON"); 
    btn2.innerHTML = questionArr[i].A2;                 
    document.body.appendChild(btn2);
    var btn3 = document.createElement("BUTTON"); 
    btn3.innerHTML = questionArr[i].A3;                 
    document.body.appendChild(btn3);
    var btn4 = document.createElement("BUTTON"); 
    btn4.innerHTML = questionArr[i].A4;                 
    document.body.appendChild(btn4); 
    return;
};
var evaluateAnswer = function() {
    console.log("Hello!");
    return;
};

var endQuiz = function() {

};

var countdown = function() {
    if (i < questionArr.length) {
    renderQuestion();
    i++;
    document.querySelector("button").addEventListener("click", evaluateAnswer);
    }
    else {
    endQuiz();
};

    setInterval(function(){
        if (timeLeft >= 0) {
        document.querySelector("#timer").innerHTML = "Timer: " + timeLeft;
        timeLeft--;
    }
    }, 1000);
};

document.querySelector("#start").addEventListener("click", countdown);