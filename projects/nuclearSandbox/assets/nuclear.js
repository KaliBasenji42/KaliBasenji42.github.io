// Variables and Constants

let DCForm;

// Functions

function createDecayChain(isos, tbl) {
  // isos: All isotopes referenced (set)
  // tbl: Table element embedded in container (rendering elem)
  
  // Reset
  
  tbl.innerHTML = '';
  decay['selectedIso'] = '';
  decay['parents'] = {};
  
  // Min and Max
  
  let minX = 1000;
  let minY = 1000;
  let maxX = -1000;
  let maxY = -1000;
  
  for(const isoMM of isos) {
    
    let Z = isoMM['z'];
    let N = isoMM['n'];
    
    let x = N;
    let y = Z;
    
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
    
  }
  
  // Vars
  
  let width = (maxX - minX);
  let height = (maxY - minY);
  
  // Gen. Tbl
  
  for(let y = 0; y < height + 1; y++) { // Each row
    
    let tblRow = document.createElement('tr');
    tbl.appendChild(tblRow);
    
    for(let x = 0; x < width + 1; x++) { // Each column/iso
      let tblDat = document.createElement('td');
      tblDat.id = 'DCIso:' + x + ',' + y;
      decay['parents'][tblDat.id] = [];
      tblDat.className = 'DCIso'
      tblRow.appendChild(tblDat);
    }
    
  }
  
  //console.log(decay['parents']);
  
  // Iso Loop
  
  for(const iso of isos) {
    
    // Vars
    
    let Z = iso['z'];
    let N = iso['n'];
    
    let x = maxX - N;
    let y = maxY - Z;
    
    let modes = {}; // Mode for...
    if(iso['levels'][0].hasOwnProperty('decayModes')) {
      modes = iso['levels'][0]['decayModes']['observed'];
      
      for(let mode in modes) { // ...getting parents and daughters
        let decayC = decayChange(modes[mode]['mode']);
        
        let child = 'DCIso:' + (x - decayC[1]) + ',' + (y - decayC[0]);
        //console.log(child);
        
        decay['parents'][child].push('DCIso:' + x + ',' + y);
      }
    }
    
    let halflife = '?'; // Halflife
    if(iso['levels'][0].hasOwnProperty('halflife')) {
      halflife = iso['levels'][0]['halflife']['value'] + iso['levels'][0]['halflife']['unit'];
    }
    
    if(halflife.slice(0, 6) == 'STABLE') halflife = 'STABLE';
    
    if(halflife.length > 6) {
      let val = iso['levels'][0]['halflife']['value'];
      let valStr = val.toExponential(1);
      
      halflife = valStr + iso['levels'][0]['halflife']['unit'];
    }
    
    let red = ((x % 8) / 8) * 255; // Color
    let blue = ((y % 8) / 8) * 255;
    let green = 255 - blue;
    if(width == 0) red = 128;
    let color = 'rgb(' + red + ',' + green + ',' + blue +')';
    
    let textColor = 'rgb(0,0,0)';
    if(((red * 0.299) + (green * 0.587) + (blue * 0.114)) < 128) {
      textColor = 'rgb(255,255,255)';
    }
    
    // Create iso elem
    
    let elem = document.getElementById('DCIso:' + x + ',' + y);
    
    elem.Z = Z;
    elem.N = N;
    
    elem.style.backgroundColor = color;
    elem.style.cursor = 'pointer';
    
    elem.style.color = textColor;
    elem.style.textAlign = "center";
    
    elem.innerHTML += iso['name'] + '<div style="font-size: 0.7rem;">' + 
      iso['z'] + 'z ' + iso['n'] + 'n<br>' + 
      halflife + '</div>';
    
    // Click
    
    elem.addEventListener('click', () => {
      
      // Grab info table elems
      
      let tblSelected = document.querySelector('#selected.tbl'); // Self
      let tblDaughters = document.querySelector('#daughters.tbl'); // Daughters
      let tblParents = document.querySelector('#parents.tbl'); // Parents
      
      // Reset
      
      for(let DCIso of document.getElementsByClassName('DCIso')) {
        DCIso.style.borderColor = 'rgba(240, 240, 240, 0)';
        DCIso.title = '';
      }
      
      tblSelected.innerHTML = '<th>Selected</th>';
      tblDaughters.innerHTML = '<th>Daughters</th><th>Info</th>';
      tblParents.innerHTML = '<th>Parents</th>';
      
      // If already selected
      
      if(elem.id == decay['selectedIso']) {
        decay['selectedIso'] = '';
        return;
      }
      
      // Get elem
      
      decay['selectedIso'] = elem.id;
      elemTitle = 'Selected: ';
      
      // Parents
      
      for(let parent of decay['parents'][elem.id]) {
        
        let elemParent = document.getElementById(parent);
        elemParent.style.borderBottomColor = 'rgb(0, 0, 240)';
        elemParent.style.borderRightColor = 'rgb(0, 0, 240)';
        elemParent.style.borderLeftColor = 'rgb(240, 240, 0)';
        elemParent.style.borderTopColor = 'rgb(240, 240, 0)';
        elemParent.title = 'Parent';
        
        let Z = elemParent.Z;
        let N = elemParent.N;
        
        tblParents.innerHTML += '<tr><td>' + ZNtoName(Z, N) + ': ' + Z + 'z, ' + N + 'n</td></tr>';
        
      }
      
      // Daughters
      
      for(let mode in modes) {
        
        let decayC = decayChange(modes[mode]['mode']);
        
        dx = x - decayC[1];
        dy = y - decayC[0];
        
        let elemDaughter = document.getElementById('DCIso:' + dx + ',' + dy);
        
        let modeInfo = modes[mode]['mode'] + 
          ' (' + decayC[0] + 'z, ' + decayC[1] + 'n): ' + 
          modes[mode]['value'] + '%'
        
        elemDaughter.style.borderBottomColor = 'rgb(0, 240, 0)';
        elemDaughter.style.borderRightColor = 'rgb(0, 240, 0)';
        elemDaughter.style.borderLeftColor = 'rgb(240, 0, 240)';
        elemDaughter.style.borderTopColor = 'rgb(240, 0, 240)';
        elemDaughter.title = 'Daughter: ' + modeInfo;
        
        elemTitle += modes[mode]['mode'] + ', ';
        
        let Z = elemDaughter.Z;
        let N = elemDaughter.N;
        
        tblDaughters.innerHTML += '<tr><td>' + ZNtoName(Z, N) + ': ' + Z + 'z, ' + N + 'n</td><td>' + modeInfo + '</td></tr>';
        
      }
      
      // Self
      
      elem.style.borderBottomColor = 'rgb(240, 0, 0)';
      elem.style.borderRightColor = 'rgb(240, 0, 0)';
      elem.style.borderLeftColor = 'rgb(0, 240, 240)';
      elem.style.borderTopColor = 'rgb(0, 240, 240)';
      elem.title = elemTitle.slice(0, -2);

      let Z = elem.Z;
      let N = elem.N;
      
      tblSelected.innerHTML += '<tr><td>' + ZNtoName(Z, N) + ': ' + Z + 'z, ' + N + 'n' + elem.title.slice('Selected'.length) + '</td></tr>';
      
    });
    
  }
  
}

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  DCForm = document.getElementById('DCForm');
  
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
  
});