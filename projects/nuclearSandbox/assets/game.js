// Variables and Constants

let menus;
let currentMenu = 'none';

let fileNameInput;

let gameWindow;
let active = true;

// Game Functions

function closeMenus() {
  
  for(let i = 0; i < menus.length; i++) {
    
    menus[i].style.display = 'none';
    
  }
  
  currentMenu = 'none';
  
}

function openMenu(ID) {
  
  closeMenus();
  
  document.getElementById(ID).style.display = 'block';
  
  currentMenu = ID;
  
}

function saveFile() {
  
  input = fileNameInput.value;
  
  console.log('Save: ' + input);
  
}

function openFile() {
  
  input = fileNameInput.value;
  
  console.log('Open: ' + input);
  
}

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  menus = document.getElementsByClassName('menu');
  
  fileNameInput = document.getElementById('FileName');
  
  gameWindow = document.getElementsByClassName('window')[0];
  
  // Load Data
  
  loadNuDat();
  
  // Menu
  
  for(let i = 0; i < menus.length; i++) {
    
    // X
    
    let menuX = document.createElement('button');
    menus[i].appendChild(menuX);
    menuX.className = 'bttn menuX';
    menuX.onclick = function() {closeMenus();}
    
    let menuXImg = document.createElement('img');
    menuX.appendChild(menuXImg);
    menuXImg.className = 'bttnImg';
    menuXImg.src = 'assets/images/X.png';
    menuXImg.title = '[ESC]';
    
  }
  
  // Key Press
  
  gameWindow.addEventListener('mouseenter', function() {active = true;});
  gameWindow.addEventListener('mouseleave', function() {active = false;});
  
  document.addEventListener('keyup', function(event) {
    
    if(active) {
      
      if(event.key == 'Escape') closeMenus();
      
      if(event.key == 'f' || event.key == 'F') openMenu('MenuSave');
      
    }
    
  });
  
});