// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let menus;
let currentMenu = 'none';

let fileNameInput;

let DCForm;

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

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  menus = document.getElementsByClassName('menu');
  
  fileNameInput = document.getElementById('FileName');
  
  DCForm = document.getElementById('DCForm');
  
  gameWindow = document.getElementsByClassName('window')[0];
  
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
  
  // Data
  
  loadData();
  
  // Decay Chain
  
  DCForm.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    let isoStr = document.getElementById('DCIsoInput').value;
    let parent = NuDat[isoStr];
    
    if(parent === undefined) return;
    
    let DCTbl = document.getElementById('DCTbl');
    let isosCountElem = document.getElementById('DCIsosCount');
    
    let isos = new Set();
    let newIsos = new Set([parent]);
    
    while(newIsos.size > 0) {
      
      let tempIsos = new Set(newIsos);
      
      isos = isos.union(newIsos);
      newIsos.clear();
      
      isosCountElem.innerHTML = isos.size;
      
      for(const iso of tempIsos) {
        
        let modes = {};
        
        if(iso['levels'][0].hasOwnProperty('decayModes')) {
          
          modes = iso['levels'][0]['decayModes']['observed'];
          
        }
        
        for(const mode in modes){
          
          let Z = iso['z'];
          let N = iso['n'];
          
          let change = decayChange(modes[mode]['mode']);
          
          if(!(change[0] == 0 && change[1] == 0)) {
            let daughter = NuDat[ZNtoName(Z + change[0], N + change[1])];
            newIsos.add(daughter);
            
            //console.log(iso['name'] + ' ' + modes[mode]['mode'] + ' -> ' + daughter['name']);
          }
          
        }
        
      }
      
    }
    
    createDecayChain(isos, DCTbl);
    
  });
  
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
