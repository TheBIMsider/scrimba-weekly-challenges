// Stretch Goals
// More Advice
// Allow user to input a question
// Limit the number of times the ball can be asked

const adviceBtn = document.getElementById("adviceBtn");
const ball = document.getElementById("adviceEye");
const adviceDisplay = document.getElementById("adviceDisplay");
const advice = [
  "If you’re good at something, never do it for free.",
  "Do, or do not. There is no try.",
  "It’s what you do right now that makes a difference.",
  "Until you start believing in yourself, you ain't gonna have a life!",
  "Life does not stop and start at your convenience.",
  "You know what the trouble about real life is? There's no danger music.",
];
const color = [
  '#ABDEE6', '#CBAACB', '#FFFFB5', '#FFCCB6', '#F3B0C3',
  '#C6DBDA', '#FEE1E8', '#FED7C3', '#F6EAC2', '#ECD5E3',
  '#FCB9AA', '#FFDBCC', '#ECEAE4', '#A2E1DB', '#55CBCD',
]

let counterBallColor = 0;
//var to store length of colors Array
let ballColorCount = color.length;

// load all event listeners
loadEventListeners()
// Load all event listeners
function loadEventListeners () {
  // Change advice
  adviceBtn.addEventListener('click', changeAdvice)
  // Change  ball color event
  adviceBtn.addEventListener('click', changeBallColor)
}

// Change ball Color - Figures out which color to use next.
function changeBallColor () {
  counterBallColor += 1;
  let currentColor = counterBallColor % ballColorCount;
  nextColor = (currentColor + 1) % ballColorCount;
  ball.style.backgroundColor = (color[nextColor]);
}

// Change Advice 
function changeAdvice () {
  const randomAdvice = Math.floor(Math.random() * advice.length);
  adviceDisplay.innerHTML = (advice[randomAdvice]);
}