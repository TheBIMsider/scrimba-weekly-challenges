// Version 2, no back to back repeats of "random" elements. 
// Clicking button will cycle through all array options then start back at beginning of array.
// Added 50% opacity to background color of button
// Added shadow to "Pumpkin" text and button
// Made button next match the family and weight for the "Pumpkin" text"

// When the button is clicked, the following things should change
    // - font family (use array above)
    // - font color (use array of colors)
    // - font weight (use array of weights)
    // - button color (match the font color)

// Define Vars
// var to get the id of "name" to change elements on (Pumpkin in this case)
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
        '#FF0000', '#32CD32', '#6A0DAD', '#00FFFF', 
        '#00FF00', '#800000', '#000080', '#FFAE42', 
        '#FF00FF', '#0000ff', '#FF6700', '#008080'
        //"red", "lime", "purple", "aqua", 
        //"green", "maroon", "navy", "yellow orange", 
        //"fuchsia", "blue", "neon orange", "teal"
        ];
// var containing array of different weights
const fontsWeightArr = [
        "100", "500", "900", 
        "700", "200", "600", 
        "400", "800", "300"
        ];
//counter for the nextFont function to determine the next font
let counterFont = 0;
//var to store length of fonts Array
let fontCount = fontsArr.length;
//counter for the nextColor function to determine the next color
let counterColor = 0;
//var to store length of colors Array
let colorCount = fontsColorArr.length;
//counter for the nextWeight function to determine the next font weight
let counterWeight = 0;
//var to store length of font weights Array
let weightCount = fontsWeightArr.length;

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
    beautifyNameBtn.addEventListener('click', changeBNButton)
  }

// Change Font - Figures out which font to use next.
     function changeFont () {
         //Increment the counter (or restart at 1)
         counterFont += 1;
         //Current font array index number is equal to counter.
         let currentFont = counterFont % fontCount;
         //The next font is the font at array index is equal to counter + 1
         nextFont = (currentFont + 1) % fontCount;
         //Change font type (family) to the font at the fontsArr index = nextFont
         nameToBeBeautified.style.fontFamily = fontsArr[nextFont];
         }

// Change Font Color - Figures out which color to use next.
    function changeFontColor () {
        //Increment the counter (or restart at 1)
        counterColor += 1;
        //Current color array index number is equal to counter.
        let currentColor = counterColor % colorCount;
        //The next color is the color at array index is equal to counter + 1
        nextColor = (currentColor + 1) % colorCount;
        //Change font color to the color at the fontsColorArr index = nextColor
        nameToBeBeautified.style.color = (fontsColorArr[nextColor]);
        // function to change hex to RGBA so can change opacity of button background color
        // opacity set yo .5 (50%)
        // thanks Stack Overflow: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb (One-line functional HEX to RGBA).
        function hexToRGBA(hex, opacity) {
            return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : .5).join(',') + ')';
            }
            //Var to collect the current HEX color so ti can be change to an RGBA color
            let rgbaColor = (fontsColorArr[nextColor]);
            //Change the button background color to match the "Pumpkin" font color, but with 50% opacity
            beautifyNameBtn.style.backgroundColor = (hexToRGBA(rgbaColor));
        }
        
// Change Font Weight - Figures out which weight to use next.
    function changeFontWeight () {
        //Increment the counter (or restart at 1)
        counterWeight += 1;
        //Current weight array index number is equal to counter.
        let currentWeight = counterWeight % weightCount;
        //The next font weight is the font weight at array index is equal to counter + 1
        nextWeight = (currentWeight + 1) % weightCount;
        //Change font weight to the weight at the fontsWeightArr index = nextWeight
        nameToBeBeautified.style.fontWeight = (fontsWeightArr[nextWeight]);
        } 

// Change Button font to Match Font Family & Weight
    function changeBNButton () {
        // change button font family
        beautifyNameBtn.style.fontFamily = (nameToBeBeautified.style.fontFamily);
        // change button font weight
        beautifyNameBtn.style.fontWeight = (nameToBeBeautified.style.fontWeight);
        } 