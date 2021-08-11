// Version 1, This version uses "random"  for all elements to change, but this does mean that sometimes you get the same font, or color or weight back to back.
//Clicking button will cycle through "randomly" all array options.

// When the button is clicked, the following things should change

// - font family (use array above)
// - font color (use array of colors)
// - font weight (use array of weights)
// - button color (match the font color)

// Define Vars
// var to get the id of "name" th change elements on (Pumpkin in this case)
const nameToBeBeautified = document.getElementById("name");
// var to get the id of button
const beautifyNameBtn = document.getElementById("beautifierBtn")
// var containing array of different fonts
const fontsArr = [
        "Impact,Charcoal,sans-serif",
        //"Brush Script MT, cursive", doesn't show different than Comic Sans on PC
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif",
        "Lucida Console, monospace",
        "Blippo, fantasy"
        ];
// var containing array of different colors
const fontsColorArr = [
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
        ];
// var containing array of different weights
const fontsWeightArr = [
        "100", "200", "300", 
        "400", "500", "600", 
        "700", "800", "900"
        ];

// load all event listeners
loadEventListeners()
// Load all event listeners
function loadEventListeners () {
    // Change font event
    beautifyNameBtn.addEventListener('click', changeFont)
    // Change  font color event
    beautifyNameBtn.addEventListener('click', changeFontColor)
    // Change font weight event
    beautifyNameBtn.addEventListener('click', changeFontWeight)
    // Change Beautify Name(BN)button color event
    beautifyNameBtn.addEventListener('click', changeBNButtonColor)
  }

// Change Font - Figures out which font to use next.
     function changeFont () {
         // var to generate a random number based on the length of fontsArr
         const random = Math.floor(Math.random() * fontsArr.length);
         //Change font type (family) to the font at the fontsArr index = random
         nameToBeBeautified.style.fontFamily = (fontsArr[random]);
         }

// Change Font Color - Figures out which color to use next.
    function changeFontColor () {
        // var to generate a random number based on the length of fontsColorArr
        const randomColor = Math.floor(Math.random() * fontsColorArr.length);
        //Change font color to the color at the fontsColorArr index = randomColor
        nameToBeBeautified.style.color = (fontsColorArr[randomColor]);
        }
        
// Change Font Weight - Figures out which weight to use next.
    function changeFontWeight () {
        // var to generate a random number based on the length of fontsWeightArr
        const randomWeight = Math.floor(Math.random() * fontsWeightArr.length);
        //Change font weight to the weight at the fontsWeightArr index = randomWeight
        nameToBeBeautified.style.fontWeight = (fontsWeightArr[randomWeight]);
        } 

// Change Button Color to Match Font Color
    function changeBNButtonColor () {
        beautifyNameBtn.style.backgroundColor = (nameToBeBeautified.style.color);
        } 