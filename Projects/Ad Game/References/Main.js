// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let gameWindow;
let mouse;

// Functions



// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  gameWindow = document.getElementsByClassName('window')[0];
  mouse = document.getElementById('mouse');
  
  // Key Press
  
  gameWindow.addEventListener('mouseenter', function() {active = true;});
  gameWindow.addEventListener('mouseleave', function() {active = false;});
  
  document.addEventListener('keyup', function(event) {
    
    
    
  });
  
  gameWindow.addEventListener('mousemove', function(event) {
    
    windowRect = gameWindow.getClientRects()[0];
    mouseRect = mouse.getClientRects()[0];
    
    x = event.clientX - windowRect.left - (mouseRect.width / 2);
    y = event.clientY - windowRect.top - (mouseRect.height / 2);
    
    mouse.style.left = x + 'px';
    mouse.style.top = y + 'px';
    
  });
  
});
