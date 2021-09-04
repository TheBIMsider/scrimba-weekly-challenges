//// Stretch Goals
//// More Advice
//// Allow user to input a question
//// Limit the number of times the ball can be asked

const adviceBtn = document.getElementById("adviceBtn");
const adviceBall = document.getElementById("adviceEye");
const adviceDisplay = document.getElementById("adviceDisplay");
const questionInput = document.getElementById("question-input");
const message = document.querySelector(".message")
const advice = [
  "If you’re good at something, never do it for free.",
  "Do, or do not. There is no try.",
  "It’s what you do right now that makes a difference.",
  "Until you start believing in yourself, you ain't gonna have a life!",
  "Life does not stop and start at your convenience.",
  "You know what the trouble about real life is? There's no danger music.",
  "The ability to speak does not make you intelligent.",
  "Never tell me the odds.",
  "In my experience there is no such thing as luck.",
  "A bird in had make it hard to blow your nose",
  "With great power comes great responsibility.",
  "Believe you can and you're halfway there.",
  "Inconceivable!",
  "Your path you must decide.",
  "If all else fails, Google it!",
];
const ballColor = [
  '#ABDEE6', '#CBAACB', '#FFFFB5', '#FFCCB6', '#F3B0C3',
  '#C6DBDA', '#FEE1E8', '#FED7C3', '#F6EAC2', '#ECD5E3',
  '#FCB9AA', '#FFDBCC', '#ECEAE4', '#A2E1DB', '#55CBCD',
]

let counterBallColor = 0;
let ballColorCount = ballColor.length;
let counterAdvice = 0;
let adviceCount = advice.length;
let questionsLeft = 3;

// load all event listeners
loadEventListeners()
function loadEventListeners () {
  // Change advice
  adviceBtn.addEventListener('click', changeAdvice)
  // Change  ball color event
  adviceBtn.addEventListener('click', changeBallColor)
  // Questions left
  adviceBtn.addEventListener('click', adviceQuestions)
}

// Change ball Color
function changeBallColor () {
  counterBallColor += 1;
  let currentColor = counterBallColor % ballColorCount;
  nextColor = (currentColor + 1) % ballColorCount;
  adviceBall.style.backgroundColor = (ballColor[nextColor]);
}

// Change Advice 
function changeAdvice () {
  counterAdvice += 1;
  let currentAdvice = counterAdvice % adviceCount;
  nextAdvice = (currentAdvice + 1) % adviceCount;
  adviceDisplay.innerHTML = (advice[nextAdvice]);
}

//questions left
function adviceQuestions () {
  questionsLeft -= 1;

  if(questionsLeft <= 0){
    // out of questions
    setMessage(`No questions left, come back again.`);
    questionInput.value =''
    questionInput.disabled = 'true';
    adviceBtn.disabled = 'true';

  } else {
    // Clear Input
    questionInput.value ='';
    // Tell user questions left
    setMessage(`${questionsLeft} questions left`);
  }
}

// Set message
function setMessage(msg){
  message.textContent = msg;
  message.style.color = "red";
}