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
    title: "What type of property is to the left of the '.' in dot notation?",

    choices: ["Array", "Object", "Method", "Function"],

    answer: "Object",
  },
  {
    title: "What is the first step within DOM manipulation?",

    choices: [
      "Create an Element",
      "Append to Page",
      "Capture User Input",
      "TextContent",
    ],

    answer: "Create an Element",
  },
  {
    title: "How do we capture the users input within JavaScript?",

    choices: [".getItem()", ".add()", ".value", ".setAttribute()"],

    answer: ".value",
  },
  {
    title:
      "In this sequence of values '17', 'A', R, 3, which one will return a number when logged to the console?",

    choices: ["17", "A", "R", "3"],

    answer: "3",
  },
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
    console.log("Correct!"); //Need to figure out how to append this message to the page?
  } else {
    console.log("Wrong!");
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
  displayQuestion.textContent = questionsAsked.title; //How do I get the second question to display here? -> GOT IT!!
  // console.log(questionsAsked.title);
  // btn.textContent = questionsAsked.choices[i];

  for (var i = 0; i < questionsAsked.choices.length; i++) {
    var btn = document.getElementById(i);
    btn.addEventListener("click", answerClick);
    btn.textContent = questionsAsked.choices[i];
  }

  // console.log(questionsAsked.choices[i]);
  answerClick();
}

function endGame() {} //need to think through how the logic of this function would be stated JS lingo.

//Code listed below did not fire off the timer, what is not being targeted here that needs to be?
// function timer() {
//   var timerInterval = setInterval(function () {
//     timer--;
//     timeRemaining.textContent = timer;
//     if (timer === 0);
//     {
//       clearInterval(timerInterval);
//       sendTime();
//       console.log(timerInterval);
//       sendTime();
//     }
//   }, 1000);
// }

// function sendTime() {
//   timeRemaining.textContent = "";
// }

//add event listeners down here.
startBtn.addEventListener("click", startGame, timer);

// function playGame() {}
// function score() {}
