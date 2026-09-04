// Nuclear Variables

const avogadro = 6.02214076 * ( 10 ** 23 ); // Avogadro's Number
const C = 299792458 // Speed of Light (m/s)

// Data

let decayData = {};
let modesData = {};

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

async function loadData() {
  
  let dataStatOutput = document.getElementById('dataStat');
  
  dataStatOutput.innerHTML = '🔄'; // Loading Status
  
  // Fetch files
  
  let decayFile = await fetch('assets/data/decay.json');
  let modesFile = await fetch('assets/data/modes.json');
  
  if(!decayFile.ok || !modesFile.ok) {
    dataStatOutput.innerHTML = '⚠️ Response Not OK'; // Status
    throw new Error('Response: ' + response.statusText); // Log Error
  }
  
  // Parse Files
  
  decayData = await decayFile.json();
  modesData = await modesFile.json();
  
  dataStatOutput.innerHTML = '✅'; // Status
  
}

function ZNtoName(Z, N) {
  
  for(const iso in decayData) { // Each isotope
    
    if(decayData[iso]['z'] == Z && decayData[iso]['n'] == N) { // If z & n match
      return iso; // Return isotope name
    }
    
  }
  
}

// Basic Math Functions

function gramsToAtoms(grams, aMass) {
  
  return ( grams / aMass ) * avogadro;
  
}

function atomsToGrams(atoms, aMass) {
  
  return ( atoms / avogadro ) * aMass;
  
}

function gramsToJoules(grams) {
  
  return ( grams / 1000 ) * ( C ** 2 );
  
}

function roundTo(num, decimals) {
  
  return Math.round(num * 10 ** decimals) / 10 ** decimals;
  
}

// Decay Functions

function decayChange(mode) {
  
  // Returns [Z, N] change
  
  for(key in modesData) { // Each decay mode
    if(key == mode) return modesData[mode]; // Return if match
  }

  return [0, 0]; // Base case
  
}

// List Functions

function listKeys(verbose=false) {
  // details: Log first shown value
  
  let list = new Set();
  
  for(const iso in decayData) {
    
    for(const key in decayData[iso]) {
      
      if(verbose && !list.has(key)) {
        console.log(iso + ': ' + key + ': ');
        console.log(decayData[iso][key]);
      }
      
      list.add(key);
      
    }
    
  }
  
  return list
  
}

function listDecayModes(verbose=false) {
  
  let list = new Set();
  
  for(const iso in decayData) { // Each isotope
  
    try {
      
      let modes = []; // Base case
      
      modes = decayData[iso]['decayModes']; // Set
      
      let modeList = []; // List of modes for duplicate test
      
      for(const mode in modes) { // Each mode
        
        list.add(modes[mode]['mode']); // Add
        
        if(verbose) console.log( // Verbose
          '"' + modes[mode]['mode'] + '" in "' + iso + '"'
        );
        
        modeList.push(modes[mode]['mode']); // Add mode to modeModes
        
      }
      
      if((new Set(modeList)).size !== modeList.length && verbose) { // Duplicates
        console.log('Duplicate in "' + iso + '"')
      }
      
    }
    
    catch {}
    
  }
  
  return list
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
});
