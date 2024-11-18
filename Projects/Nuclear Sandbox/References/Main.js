// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let menus;
let currentMenu = 'none';

let fileNameInput;

let nuDatStatOutput;
let NuDat = {};
let DTForm;
let decayTree = {};

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

function loadData() {
  
  fetch('References/Data/NuDat.json')
    .then(response => {
      
      if(!response.ok) {
        
        nuDatStatOutput.innerHTML = '🛜⚠️';
        
        throw new Error('Response: ' + response.statusText);
        
      }
      
      return response.json();
      
    })
    .then(data => {
      
      NuDat = data;
      
      nuDatStatOutput.innerHTML = '✅';
      
    })
    .catch(error => {
      
      nuDatStatOutput.innerHTML = '⚠️';
      
      console.log(error);
      
    });
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems
  
  menus = document.getElementsByClassName('menu');
  
  fileNameInput = document.getElementById('FileName');
  
  nuDatStatOutput = document.getElementById('NuDatStat');
  
  DTForm = document.getElementById('DTForm');
  
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
  
  // Data
  
  loadData();
  
  // DT
  
  DTForm.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    let elemStr = document.getElementById('DTElemInput').value;
    let parent = NuDat[elemStr]['levels'][0];
    
    let field = document.getElementById('DTField');
    
    let elems = new Set();
    let newElems = new Set();
    
    newElems.add(parent);
    
    while(newElems.size > 0) {
      
      let tempElems = new Set(newElems);
      
      console.log(tempElems);
      
      elems = elems.union(newElems);
      newElems.clear();
      
      for(let i = 0; i < tempElems.size; i++) {
        
        let modes = tempElems[i];
        
        console.log(modes);
        
      }
      
    }
    
    console.log(elems);
    
  });
  
});

document.addEventListener('keyup', function() {
  
  if(event.key == 'Escape') closeMenus();
  
  if(event.key == 'f' || event.key == 'F') openMenu('MenuSave');
  
});