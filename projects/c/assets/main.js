// Variables

texts = [ // Different texts
`Crazy?!
I was crazy once.
They locked me in a room.
A round room.
A round rubber room.
A round rubber room with rats.
Round rats.
Round rubber rats.
Round rubber rats with wheels.
Round wheels.
Round rubber wheels.
Round rubber wheels that went *eek eek eek*.
It drove me crazy.`,
`Crazy?!
I was crazy once
They locked me in a *round* room
And they only fed me bagles
Bagles are round
The sun is round
The sun is yellow
Bannas are yellow
Bannas have spots
Old people have spots
Old people live *long* lives
Life?
Thats my favorite cereal
I once bought a box of cereal for $10
$10?
Thats crazy!`
]

textIndex = 0; // Current text
textBuffer = 4; // Buffer lines

let crazySheet = new CSSStyleSheet(); // Style sheet for text
document.adoptedStyleSheets.push(crazySheet);

// Functions

function randomMovement(elem, margin) {
  
  elem.style.left = '' + Math.random() * (100 - margin) + '%';
  elem.style.top = '' + Math.random() * (100 - margin) + '%';
  elem.style.rotate = '' + Math.random() * (360 * 4) + 'deg';
  
  elem.style.transform = 'scale(' + (Math.random() + 0.5) + ',' + (Math.random() + 0.5) + ')';
  
} 

function iterateText() {
  
  // Iterate
  
  textIndex = (textIndex + 1) % texts.length;
  
  // Variables
  
  textElem = document.getElementById('crazyTxt'); // Element
  
  textArr = texts[textIndex].split('\n'); // Text as array
  textLen = textArr.length; // Length of text
  styleLen = (textLen * 1.5); // Number for style movement
  
  // Set elem text
  
  text = texts[textIndex]; // OG text
  
  for(let i = 0; i < textBuffer; i++) { // Add buffer
    text += '\n' + textArr[i];
  }
  
  textElem.innerText = text; // Set
  
  // Style
  
  crazySheet.replace(
    '@keyframes crazy {' +
    '  from {top: 0}' +
    '  to {top: -' + styleLen + 'em}' +
    '}'
  );
  
}

// Event Listener

document.addEventListener('DOMContentLoaded', function () {
  
  // Variables
  
  let ratI = document.querySelector('#i.rat');
  
  // Interval
  
  let interval = setInterval(randomMovement, 2000, ratI, 5);
  
});