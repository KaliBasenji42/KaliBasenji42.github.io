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
  
  document.addEventListener('mousemove', function(event) {
    
    windowRect = gameWindow.getClientRects()[0];
    mouseRect = mouse.getClientRects()[0];
    
    x = event.clientX - windowRect.left - (mouseRect.width / 2);
    y = event.clientY - windowRect.top - (mouseRect.height / 2);
    
    x = Math.max(0, x);
    x = Math.min(windowRect.width - mouseRect.width, x);
    
    y = Math.max(48, y);
    y = Math.min(windowRect.height - mouseRect.height, y);
    
    mouse.style.left = x + 'px';
    mouse.style.top = y + 'px';
    
    console.log('(' + event.clientX + ', ' + event.clientY + ')');
    
  });
  
});
