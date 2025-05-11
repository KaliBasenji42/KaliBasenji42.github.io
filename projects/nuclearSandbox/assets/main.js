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
let DCForm;
let decayTree = {};

let gameWindow;
let active = true;

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
  
  fetch('assets/data/NuDat.json')
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

function listDecayModes(all) {
  
  let list = new Set();
  
  for(const iso in NuDat) {
    
    try {
      
      let modes = {};
      
      modes = NuDat[iso]['levels'][0]['decayModes']['observed'];
      
      for(const mode in modes) {
        list.add(modes[mode]['mode']);
        if(all) console.log(modes[mode]['mode'] + ' in ' + NuDat[iso]['name']);
      }
      
    }
    
    catch {}
    
  }
  
  console.log(list);
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  menus = document.getElementsByClassName('menu');
  
  fileNameInput = document.getElementById('FileName');
  
  nuDatStatOutput = document.getElementById('NuDatStat');
  
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
  
  // DC
  
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
