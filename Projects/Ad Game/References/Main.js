// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let gameWindow;

// Functions



// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  gameWindow = document.getElementsByClassName('window')[0];
  
  // Key Press
  
  gameWindow.addEventListener('mouseenter', function() {active = true;});
  gameWindow.addEventListener('mouseleave', function() {active = false;});
  
  document.addEventListener('keyup', function(event) {
    
    if(active) {
      
      
      
    }
    
  });
  
});
