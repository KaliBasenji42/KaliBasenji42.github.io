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
  
  fetch('../../../../staticfiles/Nuclear Sandbox/Data/NuDat.json')
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

function createDecayChain(isos, canvas) {
  
  // Min and Max
  
  let minX = 1000;
  let minY = 1000;
  let maxX = -1000;
  let maxY = -1000;
  
  for(const isoMM of isos) {
    
    let Z = isoMM['z'];
    let N = isoMM['n'];
    
    let x = N - Z;
    let y = N + Z;
    
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
    
  }
  
  // Vars
  
  let ctx = canvas.getContext('2d');
  
  let width = (maxX - minX);
  let height = (maxY - minY);
  
  canvas.width = width * 16 * 6 + (16 * 3);
  canvas.height = height * 16 * 6 + (16 * 3);
  
  const grid = [];
  
  for(let y = 0; y < height * 2 + 1; y++) {
    let row = [];
    for(let x = 0; x < width * 2 + 1; x++) row[x] = [];
    grid[y] = row;
  }
  
  console.log('Grid: (' + width + ', ' + height + ')');
  
  const arrows = [];
  
  // Iso Loop
  
  for(const iso of isos) {
    
    // Vars
    
    let Z = iso['z'];
    let N = iso['n'];
    
    let x = (N - Z) - minX;
    let y = maxY - (N + Z);
    
    let modes = {};
    if(iso['levels'][0].hasOwnProperty('decayModes')) {
      modes = iso['levels'][0]['decayModes']['observed'];
    }
    
    let halflife = '?';
    if(iso['levels'][0].hasOwnProperty('halflife')) {
      halflife = iso['levels'][0]['halflife']['value'] + iso['levels'][0]['halflife']['unit'];
    }
    
    if(halflife.slice(0, 6) == 'STABLE') halflife = 'STABLE';
    
    if(halflife.length > 6) {
      let val = iso['levels'][0]['halflife']['value'];
      let valStr = val.toExponential(1);
      
      halflife = valStr + iso['levels'][0]['halflife']['unit'];
    }
    
    let red = ((x % 8) / 8) * 255;
    let blue = ((y % 8) / 8) * 255;
    let green = 255 - blue;
    if(width == 0) red = 128;
    let color = 'rgb(' + red + ',' + green + ',' + blue +')';
    
    let textColor = 'rgb(0,0,0)';
    if(((red * 0.3) + (green * 0.59) + (blue * 0.11)) < 128) {
      textColor = 'rgb(255,255,255)';
    }
    
    // Iso Draw
    
    ctx.fillStyle = color;
    ctx.fillRect(x * 16 * 6, y * 16 * 6, 16 * 3, 16 * 3);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    
    ctx.fillText(iso['name'], x * 16 * 6 + (16 * 1.5), y * 16 * 6 + 4);
    
    ctx.font = '10px Arial';
    
    ctx.fillText(iso['z'] + 'z ' + iso['n'] + 'n', 
                 x * 16 * 6 + (16 * 1.5), y * 16 * 6 + 20);
    ctx.fillText(halflife, x * 16 * 6 + (16 * 1.5), y * 16 * 6 + 36);
    
    console.log('(' + x + ', ' + y + ')');
    
    // Iso Grid
    
    grid[y*2][x*2].push({type:'block', elem:iso['name']});
    
    // Arrows
    
    for(const mode in modes) {
      
      let decay = decayChange(modes[mode]['mode']);
      
      let change = [
        decay[1] - decay[0],
        - decay[0] - decay[1]
      ];
      
      arrows.push({x1: x, y1: y, x2: x + change[0], 
                   y2: y + change[1], color: color});
      
    }
    
  }
  
  console.log('Grid:');
  console.log(grid);
  console.log('Arrows:');
  console.log(arrows);
  
  // Arrows
  
  for(const arrow in arrows) {
    
    // Vars
    
    ctx.strokeStyle = arrow['color'];
    ctx.lineWidth = 4;
    
    const pos = [arrow.x1, arrow.y1];
    
    let done = false;
    
    while(!done) {
      
      done = true;
      
    }
    
  }
  
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
    menuXImg.src = 'References/Images/X.png';
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
    
    let DCCanvas = document.getElementById('DCCanvas');
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
    
    createDecayChain(isos, DCCanvas);
    
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
