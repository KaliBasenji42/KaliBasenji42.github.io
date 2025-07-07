// Variables

let NuDat = {};

let decay = {
  dict: {
    // [Z, N] for each decay mode
    'B-': [1, -1],
    'β⁻': [1, -1],
    'N': [0, -1],
    '2N': [0, -2],
    'B-N': [1, -2],
    'P': [-1, 0],
    'B-A': [-1, -3],
    'B-2N': [1, -3],
    'B-3N': [1, -4],
    '2P': [-2, 0],
    'EC': [-1, 1],
    'B+': [-1, 1],
    'EC+B+': [-1, 1],
    'A': [-2, -2],
    'B-4N': [1, -5],
    'ECA': [-3, -1],
    'ECP': [-2, 1],
    'EC2P': [-3, 1],
    'EC3P': [-4, 1],
    'ECAP': [-4, -1],
    '3P': [-3, 0],
    '2B-': [2, -2],
    '14C': [-6, -8],
    '24NE': [-10, -14],
    '20O': [-8, -12],
    '20NE': [-10, -10],
    'NE': [-10, -10],
    '25NE': [-10, -15],
    '28MG': [-12, -16],
    '22NE': [-10, -12],
    'MG': [-12, -12]
  },
  selectedIso: '',
  parents: {}
};

// Function

function loadNuDat() {
  
  let nuDatStatOutput = document.getElementById('NuDatStat');
  
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

// Decay Functions

function listDecayModes(all) {
  // all: Log all
  
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
  
  for(key in decay['dict']) {
    if(key == mode) return decay['dict'][mode];
  }

  return [0, 0];
  
}

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
    if(((red * 0.3) + (green * 0.59) + (blue * 0.11)) < 128) {
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
        DCIso.style.borderColor = 'rgb(240, 240 , 240)';
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
        elemParent.style.borderColor = 'rgb(0, 0, 240)';
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
        
        elemDaughter.style.borderColor = 'rgb(0, 240, 0)';
        elemDaughter.title = 'Daughter: ' + modeInfo;
        
        elemTitle += modes[mode]['mode'] + ', ';
        
        let Z = elemDaughter.Z;
        let N = elemDaughter.N;
        
        tblDaughters.innerHTML += '<tr><td>' + ZNtoName(Z, N) + ': ' + Z + 'z, ' + N + 'n</td><td>' + modeInfo + '</td></tr>';
        
      }
      
      // Self
      
      elem.style.borderColor = 'rgb(240, 0, 0)';
      elem.title = elemTitle.slice(0, -2);

      let Z = elem.Z;
      let N = elem.N;
      
      tblSelected.innerHTML += '<tr><td>' + ZNtoName(Z, N) + ': ' + Z + 'z, ' + N + 'n' + elem.title.slice('Selected'.length) + '</td></tr>';
      
    });
    
  }
  
}
