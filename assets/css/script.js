//Variable Declarations
//Create my object of quiz questions first and then move on to other variables.

var questions = {
  title1:
    "When attaching an event listener to a submission form, which event listener would you use to capture the users input?",

  choices1: ["Click", "Hover", "Submit", "Keypress"],

  answer1: "Submit",

  title2: "What type of property is to the left of '.' in dot notation?",

  choices2: ["Array", "Object", "Method", "Function"],

  answer2: "Object",

  // title3:

  // choices3:

  // answer3:

  // title4:

  // choices4:

  // answer4:

  // title5:

  // choices5:

  // answer5:
};

// console.log(questions.choices2[3]);

var displayQuestion = document.querySelector(".questions");
var startBtn = document.querySelector(".startgame");
var firstBtn = document.querySelector("#button1");
var secondBtn = document.querySelector("#button2");
var thirdBtn = document.querySelector("#button3");
var fourthBtn = document.querySelector("#button4");
var timeRemaing = document.querySelector(".timer");

var questionAsked = [];
var userChoice = [];

var questionCounter = "";
var correctCount = 0;
var incorrectCount = 0;
var timer = 80;
var incMessage;
var corMessage;

//add functions here.
// function init() {}

function startGame() {
  timer = 80;
  var correctAnswer = questions.answer1; //pretty sure we want this in the playGame() but cannot seem to think of what to place here instead.  Will update later.
  if (userChoice === correctAnswer);
  {
    corMessage.textContent = "Correct!";
    // } else {
    //     incMessage.textContent = "Incorrect";
    //     timer--;
    // };
  }
}

// function playGame() {}

// function timer() {}

// function score() {}

//add event listeners down here.
startBtn.addEventListener("click", function () {
  questionsAsked = questions.title1;
  displayQuestion.textContent = questionsAsked;
});
