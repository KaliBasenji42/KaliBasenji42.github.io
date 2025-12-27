// Functions

function randomMovement(elem, margin) {
  
  elem.style.left = '' + Math.random() * (100 - margin) + '%';
  elem.style.top = '' + Math.random() * (100 - margin) + '%';
  elem.style.rotate = '' + Math.random() * (360 * 4) + 'deg';
  
  elem.style.transform = 'scale(' + (Math.random() + 0.5) + ',' + (Math.random() + 0.5) + ')';
  
} 

// Event Listener

document.addEventListener('DOMContentLoaded', function () {
  
  // Variables
  
  let ratI = document.querySelector('#i.rat');
  
  // Interval
  
  let interval = setInterval(randomMovement, 2000, ratI, 5);
  
});