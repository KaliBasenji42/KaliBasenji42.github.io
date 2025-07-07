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
  
  loadNuDat();
  
  // Decay Chain
  
  DCForm.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    let isoStr = document.getElementById('DCIsoInput').value; // Grab input isotope
    let parent = NuDat[isoStr]; // Parent = input isotope in NuDat
    
    if(parent === undefined) return; // Return if input is not in NuDat
    
    let DCTbl = document.getElementById('DCTbl'); // Grab rendering table
    let isosCountElem = document.getElementById('DCIsosCount'); // Grab isotope count elem
    
    let isos = new Set(); // Init isos
    let newIsos = new Set([parent]); // init newIsos
    
    while(newIsos.size > 0) { // While newIsos is not empty (to get daughters all the way down)
      
      let tempIsos = new Set(newIsos); // Temporary set
      
      isos = isos.union(newIsos); // isos = isos + newIsos (Union)
      newIsos.clear(); // Clear newIsos
      
      isosCountElem.innerHTML = isos.size; // Update count
      
      for(const iso of tempIsos) { // Each iso in tempIsos
        
        let modes = {}; // init modes
        
        if(iso['levels'][0].hasOwnProperty('decayModes')) {
          
          modes = iso['levels'][0]['decayModes']['observed']; // Set modes to iso's modes
          
        }
        
        for(const mode in modes){ // For each decay mode
          
          let Z = iso['z']; // Set Z (# of protons)
          let N = iso['n']; // Set N (# of neutrons)
          
          let change = decayChange(modes[mode]['mode']); // Get change from mode
          
          if(!(change[0] == 0 && change[1] == 0)) { // If there was change
            let daughter = NuDat[ZNtoName(Z + change[0], N + change[1])]; // Get daughter
            newIsos.add(daughter); // Add daughter to newIsos
            
            //console.log(iso['name'] + ' ' + modes[mode]['mode'] + ' -> ' + daughter['name']);
          }
          
        }
        
      }
      
    }
    
    createDecayChain(isos, DCTbl); // Create chain
    
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
