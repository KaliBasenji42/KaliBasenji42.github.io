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
  
  nuDatStatOutput.innerHTML = '🔄';
  
  fetch('References/Data/NuDat.json')
    .then(response => {
      
      if(!response.ok) {
        
        nuDatStatOutput.innerHTML = '⚠️ Response Not OK';
        
        throw new Error('Response: ' + response.statusText);
        
      }
      
      return response.json();
      
    })
    .then(data => {
      
      NuDat = data;
      
      nuDatStatOutput.innerHTML = '✅';
      
    })
    .catch(error => {
      
      nuDatStatOutput.innerHTML = '⚠️ Failed to Fetch';
      
      console.log(error);
      
    });
  
}

function ZNtoName(Z, N) {
  
  for(const iso in NuDat) {
    
    if(NuDat[iso]['z'] == Z && NuDat[iso]['n'] == N) return NuDat[iso]['name'];
    
  }
  
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
    
    let isoStr = document.getElementById('DTIsoInput').value;
    let parent = NuDat[isoStr];
    
    let field = document.getElementById('DTField');
    
    let isos = new Set();
    let newIsos = new Set([parent]);
    
    while(newIsos.size > 0) {
      
      let tempIsos = new Set(newIsos);
      
      isos = isos.union(newIsos);
      newIsos.clear();
      
      for(const value of tempIsos) {
        
        let modes = value['levels'][0]['decayModes']['observed'];
        
        console.log(modes);
        
      }
      
    }
    
    console.log(isos);
    
  });
  
});

document.addEventListener('keyup', function() {
  
  if(event.key == 'Escape') closeMenus();
  
  if(event.key == 'f' || event.key == 'F') openMenu('MenuSave');
  
});