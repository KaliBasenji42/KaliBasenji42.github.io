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

function decayChange(mode) {
  
  // Returns [Z, N] change
  
  if(mode == 'B-' || mode == 'β⁻') {
    return [1, -1];
  }
  
  if(mode == 'N') {
    return [0, -1];
  }
  
  if(mode == '2N') {
    return [0, -2];
  }
  
  if(mode == 'B-N') {
    return [1, -2];
  }
  
  if(mode == 'P') {
    return [-1, 0];
  }
  
  if(mode == 'B-A') {
    return [-1, -3];
  }
  
  if(mode == 'B-2N') {
    return [1, -3];
  }
  
  if(mode == 'B-3N') {
    return [1, -4];
  }
  
  if(mode == '2P') {
    return [-2, 0];
  }
  
  if(mode == 'EC' || mode == 'B+' || mode == 'EC+B+') {
    return [-1, 1];
  }
  
  if(mode == 'A') {
    return [-2, -2];
  }
  
  if(mode == 'B-4N') {
    return [1, -5];
  }
  
  if(mode == 'ECA') {
    return [-3, -1];
  }
  
  if(mode == 'ECP') {
    return [-2, 1];
  }
  
  if(mode == 'EC2P') {
    return [-3, 1];
  }
  
  if(mode == 'EC3P') {
    return [-4, 1];
  }
  
  if(mode == 'ECAP') {
    return [-4, -1];
  }
  
  if(mode == '3P') {
    return [-3, 0];
  }
  
  if(mode == '2B-') {
    return [2, -2];
  }
  
  if(mode == '14C') {
    return [-6, -8];
  }
  
  if(mode == '24NE') {
    return [-10, -14];
  }
  
  if(mode == '20O') {
    return [-8, -12];
  }
  
  if(mode == '20NE' || mode == 'NE') {
    return [-10, -10];
  }
  
  if(mode == '25NE') {
    return [-10, -15];
  }
  
  if(mode == '28MG') {
    return [-12, -16];
  }
  
  if(mode == '22NE') {
    return [-10, -12];
  }
  
  if(mode == 'MG') {
    return [-12, -12];
  }
  
  return [0, 0];
  
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
      
      for(const iso of tempIsos) {
        
        let modes = {};
        
        if(iso['levels'][0].hasOwnProperty('decayModes')) {
          
          modes = iso['levels'][0]['decayModes']['observed'];
          
        }
        
        for(const mode in modes){
          
          let Z = iso['z'];
          let N = iso['n'];
          
          let change = decayChange(modes[mode]['mode']);
          
          console.log(change);
          
          if(change != [0, 0]) {
            let daughter = NuDat[ZNtoName(Z + change[0], N + change[1])];
            newIsos.add(daughter);
            
            //console.log(iso['name'] + ' ' + modes[mode]['mode'] + ' -> ' + daughter['name']);
          }
          
        }
        
      }
      
    }
    
    console.log(isos);
    
  });
  
});

document.addEventListener('keyup', function() {
  
  if(event.key == 'Escape') closeMenus();
  
  if(event.key == 'f' || event.key == 'F') openMenu('MenuSave');
  
});