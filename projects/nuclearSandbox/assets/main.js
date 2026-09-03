// Nuclear Variables

let decayData = {};

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

const avogadro = 6.02214076 * ( 10 ** 23 ); // Avogadro's Number
const C = 299792458 // Speed of Light (m/s)

// Classes

class material { // Material Class
  
  constructor(grams, content, temp = 20) {
    
    this.grams = grams; // Grams
    this.content = content; // Content object in form:
    // { "isoName": fraction, "235U": 0.42 }
    
    this.temp = temp; // Temperature
    
  }
  
  async decay(step) {
    
    let emissions = {} // All particle emissions in form:
    // { "type": [amount, joules], "2B-": [42, 3.14] }
    
    for(let i; i < iterations; i++) {
      
      
      
    }
    
  }
  
}

// Data Functions

async function loadDecayData() {
  
  let decayDataStatOutput = document.getElementById('decayDataStat');
  
  decayDataStatOutput.innerHTML = '🔄'; // Loading Status
  
  let file = await fetch('assets/data/decay.json'); // Fetch file
  
  if(!file.ok) {
    decayDataStatOutput.innerHTML = '⚠️ Response Not OK'; // Status
    throw new Error('Response: ' + response.statusText); // Log Error
  }
  
  decayData = await file.json(); // Set
  
  decayDataStatOutput.innerHTML = '✅'; // Status
  
}

function ZNtoName(Z, N) {
  
  for(const iso in decayData) {
    
    if(decayData[iso]['z'] == Z && decayData[iso]['n'] == N) return decayData[iso]['name'];
    
  }
  
}

function listKeys(details) {
  // details: Log first shown value
  
  let list = new Set();
  
  for(const iso in decayData) {
    
    for(const key in decayData[iso]) {
      
      if(details && !list.has(key)) {
        console.log(iso + ': ' + key + ': ');
        console.log(decayData[iso][key]);
      }
      
      list.add(key);
      
    }
    
  }
  
  return list
  
}

function listLevelKeys() {
  
  let list = new Set();
  
  for(const iso in decayData) {
    
    for(const level in decayData[iso].levels) {
      
      for(const key in decayData[iso].levels[level]) {
        
        list.add(key);
        
      }
      
    }
    
  }
  
  return list
  
}

// Basic Math Functions

function gramsToAtoms(grams, aMass) {
  
  return ( grams / aMass ) * avogadro;
  
}

function atomsToGrams(atoms, aMass) {
  
  return ( atoms / avogadro ) * aMass
  
}

function gramsToJoules(grams) {
  
  return ( grams / 1000 ) * ( C ** 2 )
  
}

// Decay Functions

function listDecayModes(all) {
  // all: Log all
  
  let list = new Set();
  
  for(const iso in decayData) {
    
    for(const level in decayData[iso]['levels']) {
      
      try {
        
        let modes = {};
        
        modes = decayData[iso]['levels'][level]['decayModes']['observed'];
        
        for(const mode in modes) {
          list.add(modes[mode]['mode']);
          if(all) console.log(
            '"' + modes[mode]['mode'] + '" in "' + decayData[iso]['name'] + '"'
          );
        }
        
      }
      
      catch {}
      
    }
    
  }
  
  return list
  
}

function listDecayTables() {
  
  for(const iso in decayData) {
    
    let text = iso + ':\n'; // Text to log
    
    let modes = {}; // All decay modes
    let total = 0; // Total
    
    try {
      
      modes = decayData[iso]['levels'][0]['decayModes']['observed'];
      
      for(const mode in modes) {
        text += '"' + (modes[mode]['mode'] + '": ' + modes[mode]['value'] + '%\n'); // Mode
        total += modes[mode]['value']; // Total
      }
      
    }
    
    catch {}
    
    text += ('Total: ' + total + '%'); // Total
    
    if(Math.abs(total - 100) > 0.01 && total != 0) { // Abnormal total
      text += '\nAbnormal Total!';
    }
    
    console.log(text); //Log
    
  }
  
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
