// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let menus;

let currentMenu = 'none';

let fileNameInput;

// Functions

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

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems
  
  menus = document.getElementsByClassName('menu');
  
  fileNameInput = document.getElementById('FileName');
  
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
    menuXImg.src = 'References/Images/X.png';
    menuXImg.title = '[ESC]';
    
  }
  
});

document.addEventListener('keyup', function() {
  
  if(event.key == 'Escape') closeMenus();
  
  if(event.key == 'f' || event.key == 'F') openMenu('MenuSave');
  
});