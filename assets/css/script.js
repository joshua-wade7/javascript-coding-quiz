//Variable Declarations
//Create my object of quiz questions first and then move on to other variables.

var questions = [
  {
    title:
      "When attaching an event listener to a submission form, which event listener would you use to capture the users input?",

    choices: ["Click", "Hover", "Submit", "Keypress"],

    answer: "Submit",
  },
  {
    title: "What type of property is to the left of '.' in dot notation?",

    choices: ["Array", "Object", "Method", "Function"],

    answer: "Object",
  },

  // title3:

  // choices3:

  // answer3:

  // title4:

  // choices4:

  // answer4:

  // title5:

  // choices5:

  // answer5:
];

// console.log(questions.choices2[3]);

var displayQuestion = document.querySelector(".questions");
var startBtn = document.querySelector(".startgame");
var firstBtn = document.querySelector("#button1");
var secondBtn = document.querySelector("#button2");
var thirdBtn = document.querySelector("#button3");
var fourthBtn = document.querySelector("#button4");
var timeRemaing = document.querySelector(".timer");
var startSection = document.querySelector(".start-quiz");
var playSection = document.querySelector(".play-game");
var scoreSection = document.querySelector(".score-page");
// var questionAsked = [];
// var userChoice = [];

var questionCounter = 0;
// var correctCount = 0;
// var incorrectCount = 0;
var timer = 80;
// var incMessage;
// var corMessage;

//add functions here.
// function init() {}

function startGame() {
  timer = 80;
  questionCounter = 0;
  questionsAsked = questions[questionCounter];
  // console.log(questionsAsked);
  displayQuestion.textContent = questionsAsked.title;

  startSection.classList.add("hide");

  playSection.classList.remove("hide");

  for (var i = 0; i < questionsAsked.choices.length; i++) {
    var btn = document.getElementById(i);
    btn.addEventListener("click", answerClick);
    btn.textContent = questionsAsked.choices[i];
  }

  // var correctAnswer = questions.answer1; //pretty sure we want this in the playGame() but cannot seem to think of what to place here instead.  Will update later.
  // if (userChoice === correctAnswer);
  // {
  //   corMessage.textContent = "Correct!";
  // } else {
  //     incMessage.textContent = "Incorrect";
  //     timer--;
  // };
  // }
}
function answerClick(event) {
  var userInput = event.target.textContent;
  if (userInput === questionsAsked.answer) {
    console.log("Correct!");
  } else {
    console.log("Wrong");
    timer -= 10;
  }
  questionCounter++;
  if (questionCounter === questions.length) {
    endGame(); //just console.log for now.
  } else {
    nextQuestion(); //will be similar to startGame() minus line 78
  }
  // console.log(userInput);
  // console.log(answerClick());
}

function nextQuestion() {
  timer = "";
  questionsAsked = questions[questionCounter];
  displayQuestion.textContent = questionsAsked.title; //How do I get the second question to display here?
  console.log(questionsAsked.title);
}

function endGame() {}
// function playGame() {}

// function timer() {}

// function score() {}

//add event listeners down here.
startBtn.addEventListener("click", startGame);
