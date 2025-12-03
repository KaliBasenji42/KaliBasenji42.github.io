// Nuclear Variables

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
    'SI': [-12, -12],
    'MG': [-12, -12],
    '34SI': [-12, -20],
  }
};

// Nuclear Function

async function loadNuDat() {
  
  let nuDatStatOutput = document.getElementById('NuDatStat');
  
  nuDatStatOutput.innerHTML = '🔄'; // Loading Status
  
  let file = await fetch('assets/data/NuDat.json'); // Fetch file
  
  if(!file.ok) {
    nuDatStatOutput.innerHTML = '⚠️ Response Not OK'; // Status
    throw new Error('Response: ' + response.statusText); // Log Error
  }
  
  NuDat = await file.json(); // Set
  
  nuDatStatOutput.innerHTML = '✅'; // Status
  
}

function ZNtoName(Z, N) {
  
  for(const iso in NuDat) {
    
    if(NuDat[iso]['z'] == Z && NuDat[iso]['n'] == N) return NuDat[iso]['name'];
    
  }
  
}

function listKeys(details) {
  // details: Log first shown value
  
  let list = new Set();
  
  for(const iso in NuDat) {
    
    for(const key in NuDat[iso]) {
      
      if(details && !list.has(key)) {
        console.log(iso + ': ' + key + ': ');
        console.log(NuDat[iso][key]);
      }
      
      list.add(key);
      
    }
    
  }
  
  return list
  
}

function listLevelKeys() {
  
  let list = new Set();
  
  for(const iso in NuDat) {
    
    for(const level in NuDat[iso].levels) {
      
      for(const key in NuDat[iso].levels[level]) {
        
        list.add(key);
        
      }
      
    }
    
  }
  
  return list
  
}

// Decay Functions

function listDecayModes(all) {
  // all: Log all
  
  let list = new Set();
  
  for(const iso in NuDat) {
    
    for(const level in NuDat[iso]['levels']) {
      
      try {
        
        let modes = {};
        
        modes = NuDat[iso]['levels'][level]['decayModes']['observed'];
        
        for(const mode in modes) {
          list.add(modes[mode]['mode']);
          if(all) console.log(modes[mode]['mode'] + ' in ' + NuDat[iso]['name']);
        }
        
      }
      
      catch {}
      
    }
    
  }
  
  return list
  
}

function decayChange(mode) {
  
  // Returns [Z, N] change
  
  for(key in decay['dict']) {
    if(key == mode) return decay['dict'][mode];
  }

  return [0, 0];
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
});
