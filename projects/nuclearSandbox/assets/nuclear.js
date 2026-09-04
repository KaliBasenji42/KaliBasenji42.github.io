// Variables and Constants

let periodicTable; // Periodic Table element
let DCForm; // Decay Chain form element

// Data

let chemIsos; // Isotopes organized by chemical element

let decayChainData = { // Data for decay chain interaction
  "selectedIso": '',
  "parents": {}
};

let perTblData = { // Data for generating periodic table
  "form": [ // 2D array defining the shape/form the table takes when rendered
    // {#} = iso.z, b = blank, l = Lanthanides, a = Actinide
    [1, "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", 2],
    [3, 4, "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", 5, 6, 7, 8, 9, 10],
    [11, 12, "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, "l", 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, "a", 104, 105, 106, 107, 108, 109, 110, 111],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
    [0, "b", 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, "b"],
    ["b", "b", 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, "b"]
  ],
  "names": [], // List of all element names in order, index # has # protons
  "symbols": [], // List of all element symbols, same order as above
  "weights": [ // List of all element weights, same order as above
    1, 1.008, 4.0026, 6.94, 9.0122, 
    10.81, 12.011, 14.007, 15.999, 18.998, 
    20.18, 22.99, 24.305, 26.982, 28.085, 
    30.974, 32.06, 35.45, 39.948, 39.098, 
    40.078, 44.956, 47.867, 50.942, 51.996, 
    54.938, 55.845, 58.933, 58.693, 63.546, 
    65.38, 69.723, 72.63, 74.922, 78.971, 
    79.904, 83.798, 85.468, 87.62, 88.906, 
    91.224, 92.906, 95.95, 98, 101.07, 
    102.91, 106.42, 107.87, 112.41, 114.82, 
    118.71, 121.76, 172.6, 1126.9, 131.29, 
    132.91, 137.33, 138.91, 140.12, 140.91, 
    144.24, 145, 150.36, 151.96, 157.25, 
    158.93, 162.5, 164.93, 167.26, 168.93, 
    173.05, 174.97, 178.49, 180.95, 183.84, 
    186.21, 190.23, 192.22, 195.08, 196.97, 
    200.59, 204.38, 207.2, 208.98, 209, 
    210, 222, 223, 226, 227, 
    232.04, 231.04, 238.03, 237, 244, 
    243, 247, 247, 251, 252, 
    257, 258, 259, 266, 267, 
    268, 269, 270, 277, 278, 
    281, 282, 285, 286, 289, 
    290, 293, 294, 294
  ]
};

const unitKey = { // Object for resolving the unit of a value
  "mass": "AMU",
  "halflife": "Seconds",
  "decayConstant": "1/Seconds"
};

// Functions

function createPeriodicTable() { // Create Periodic Table for selection
  
  // Get Data
  
  chemIsos = {}; // Reset chemically organized isotopes
  perTblData.names = [] // Reset names
  perTblData.symbols = [] // Reset symbols
  
  for(const isoKey in decayData) { // Each isotope
    
    let iso = decayData[isoKey]; // Isotope
    
    if(!chemIsos[iso.z]) { // New element (new z value)
      
      chemIsos[iso.z] = []; // Create element list
      
      perTblData.names.push(iso.name) // Add Name
      
      perTblData.symbols.push(iso.symbol) // Add Symbol
      
    }
    
    chemIsos[iso.z].push(isoKey); // Add isotope to element list
    
  }
  
  // Table Form
  
  for(const row of perTblData.form) { // Each form row
    
    // tr
    
    let tr = document.createElement('tr');
    periodicTable.appendChild(tr);
    
    for(const column of row) { // Each form column
      
      // td
      
      let td = document.createElement('td');
      tr.appendChild(td);
      
      // types
      
      if(typeof(column) === 'number') {
        td.className = 'elem'
        td.id = 'z' + column;
        td.title = perTblData.names[column];
      }
      
      else if(column == 'b') {
        td.className = 'b';
      }
      
      else if(column == 'l') {
        td.id = 'l';
        td.innerText = '57-\n71';
      }
      else if(column == 'a') {
        td.id = 'a';
        td.innerText = '89-\n103';
      }
      
    }
    
  }
  
  // Add details based on chemIsos
  
  for(const elemKey in chemIsos) { // Each chemical element
    
    let isos = chemIsos[elemKey]; // Isotopes of similar element
    
    isos.sort((a, b) => {return parseInt(a) - parseInt(b)}); // Sort
    
    let td = periodicTable.querySelector('.elem#z' + elemKey); // Get td of elem z
    
    // Chemical Name
    
    td.innerText = perTblData.symbols[elemKey];
    
    // z
    
    td.innerHTML += '<div class="zNote">' + elemKey + '</div>';
    
    // Weight
    
    td.innerHTML += '<div class="wNote">' + perTblData.weights[elemKey] + '</div>';
    
    // Onclick
    
    td.onclick = () => {chemElemClick(elemKey)};
    
  }
  
}

function chemElemClick(z) { // Create Weight Table for selection
  
  let weightTable = document.querySelector('tr#weights'); // Get element
  
  weightTable.innerHTML = ''; // Clear
  
  for(const elem in chemIsos[z]) { // Each chemical element
    
    // Weight
    
    let weight = parseInt(chemIsos[z][elem]);
    
    // Error
    
    if(typeof(weight) !== 'number') {
      throw(new Error(chemIsos[z][elem] + ': Non-number weight'));
    }
    
    // Create td
    
    weightTable.innerHTML += '<td class="elem" onclick="weightIsoClick(\'' + chemIsos[z][elem] + '\')">' + weight + 
                             '<div class="wNote">n = ' + (weight - z) + '</div></td>';
    
  }
  
  expand('dataSect', 'dataBttn'); // Expand for new content
  
}

function weightIsoClick(iso) { // Create Levels Table for selection
  
  // Info
  
  let selInfo = document.querySelector('tbody#selInfo'); // Get element
  selInfo.innerHTML = `
    <tr><th>Value Name</th><th>Value</th><th>Unit</th></tr>
  `; // Reset
  
  selInfo.innerHTML += '<tr><td>Isotope (ID)</td><td>' + iso + '</td><td></td></tr>';
  // Add isotope name
  
  let keys = listKeys(); // Get each property
  
  keys.forEach((key) => {
    
    let isoObj = decayData[iso];
    
    // Values
    
    let value = '';
    let unit = '';
    
    if(isoObj.hasOwnProperty(key)) {
      
      value = isoObj[key]; // Get value
      
      if(unitKey.hasOwnProperty(key)) unit = unitKey[key]; // Get unit
      
      // Special Cases
      
      if(key == 'decayModes') value = isoObj[key].length; // If modes, get length not value
      
      if(key == 'z') key += ' (Protons)'; // Add notes
      if(key == 'n') key += ' (Neutrons)';
      if(key == 'a') key += ' (Atomic Mass)';
      
    }
    
    // Add tr
    
    selInfo.innerHTML += '<tr><td>' + key + 
                         '</td><td>' + value + 
                         '</td><td>' + unit + 
                         '</td></tr>';
    
  });
  
  // Decay Modes
  
  let selDecayModes = document.querySelector('tbody#selDecayModes'); // Get element
  selDecayModes.innerHTML = `
    <tr><th>Mode</th><th>Probability</th>
  `; // Reset

  // Observed
  
  for(const decayMode of decayData[iso].decayModes) {
    
    // Values
    
    mode = decayMode.mode;
    prob = decayMode.prob * 100;
    
    // Add tr
    
    selDecayModes.innerHTML += '<tr><td>' + mode + 
                                '</td><td>' + prob + 
                                '%</td></tr>';
    
  }
  
  expand('dataSect', 'dataBttn'); // Expand for new content
  
}

function createDecayChain(isos, tbl) {
  // isos: All isotopes referenced (set)
  // tbl: Table element embedded in container (rendering elem)
  
  // Reset
  
  tbl.innerHTML = '';
  decayChainData['selectedIso'] = '';
  decayChainData['parents'] = {};
  
  // Min and Max
  
  let minX = 1000;
  let minY = 1000;
  let maxX = -1000;
  let maxY = -1000;
  
  for(const iso of isos) {
    
    let Z = iso['z'];
    let N = iso['n'];
    
    let x = N;
    let y = Z;
    
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
    
  }
  
  // Variables
  
  let width = (maxX - minX);
  let height = (maxY - minY);
  
  // Generate Table
  
  for(let y = 0; y < height + 1; y++) { // Each row
    
    let tblRow = document.createElement('tr');
    tbl.appendChild(tblRow);
    
    for(let x = 0; x < width + 1; x++) { // Each column/iso
      let tblDat = document.createElement('td');
      tblDat.id = 'DCIso:' + x + ',' + y;
      decayChainData['parents'][tblDat.id] = [];
      tblDat.className = 'DCIso';
      tblRow.appendChild(tblDat);
    }
    
  }
  
  //console.log(decayChainData['parents']);
  
  // Iso Loop
  
  for(const iso of isos) {
    
    // Variables
    
    let Z = iso['z'];
    let N = iso['n'];
    
    let x = maxX - N;
    let y = maxY - Z;
    
    let modes = {}; // Mode for...
    modes = iso['decayModes'];
    
    for(let mode in modes) { // ...getting parents and daughters
      let decayDelta = decayChange(modes[mode]['mode']);
      
      if(decayDelta[0] == 0 && decayDelta[1] == 0) continue // Skip if no change
      
      let child = 'DCIso:' + (x - decayDelta[1]) + ',' + (y - decayDelta[0]);
      //console.log(child);
      
      decayChainData['parents'][child].push('DCIso:' + x + ',' + y);
    }
    
    let halflife = '?'; // Halflife
    halflife = iso['halflife'] + ' s';
    
    if(halflife.slice(0, 6) == 'stable') halflife = 'stable';
    
    if(halflife.length > 6) {
      let val = iso['halflife'];
      let valStr = val.toExponential(1);
      
      halflife = valStr + ' s';
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
    elem.halflife = halflife;
    
    elem.style.backgroundColor = color;
    elem.style.cursor = 'pointer';
    
    elem.style.color = textColor;
    elem.style.textAlign = "center";
    
    elem.innerHTML +=  iso['a'] + iso['symbol'] + 
      '<div style="font-size: 0.7rem;">' + 
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
      
      tblSelected.innerHTML = '<th colspan="2">Selected</th>';
      tblDaughters.innerHTML = '<th>Daughters</th><th>Mode</th><th>Prob.</th>';
      tblParents.innerHTML = '<th colspan="2">Parents</th>';
      
      // If already selected
      
      if(elem.id == decayChainData['selectedIso']) {
        decayChainData['selectedIso'] = '';
        return;
      }
      
      // Get elem
      
      decayChainData['selectedIso'] = elem.id;
      elemTitle = 'Selected: ';
      
      // Parents
      
      for(let parent of decayChainData['parents'][elem.id]) {
        
        let elemParent = document.getElementById(parent);
        elemParent.style.borderBottomColor = 'rgb(0, 0, 240)';
        elemParent.style.borderRightColor = 'rgb(0, 0, 240)';
        elemParent.style.borderLeftColor = 'rgb(240, 240, 0)';
        elemParent.style.borderTopColor = 'rgb(240, 240, 0)';
        elemParent.title = 'Parent';
        
        let Z = elemParent.Z;
        let N = elemParent.N;
        
        tblParents.innerHTML += '<tr><td>' + ZNtoName(Z, N) + ' (' + Z + 'z, ' + N + 'n)</td></tr>';
        
      }
      
      // Daughters
      
      for(let mode in modes) {
        
        let decayDelta = decayChange(modes[mode]['mode']);
        
        if(decayDelta[0] == 0 && decayDelta[1] == 0) continue // Skip if no change
        
        dx = x - decayDelta[1];
        dy = y - decayDelta[0];
        
        let elemDaughter = document.getElementById('DCIso:' + dx + ',' + dy);
        
        let modeInfo = 
          modes[mode]['mode'] + 
          ' (' + decayDelta[0] + 'z, ' + decayDelta[1] + 'n)';
        let modeProb = roundTo(modes[mode]['prob'] * 100, 4) + '%';
        
        elemDaughter.style.borderBottomColor = 'rgb(0, 240, 0)';
        elemDaughter.style.borderRightColor = 'rgb(0, 240, 0)';
        elemDaughter.style.borderLeftColor = 'rgb(240, 0, 240)';
        elemDaughter.style.borderTopColor = 'rgb(240, 0, 240)';
        elemDaughter.title = 'Daughter: ' + modeInfo;
        
        elemTitle += modes[mode]['mode'] + ' | ';
        
        let Z = elemDaughter.Z;
        let N = elemDaughter.N;
        
        tblDaughters.innerHTML += 
          '<tr><td>' + ZNtoName(Z, N) + ' (' + Z + 'z, ' + N + 'n)</td><td>' + modeInfo + '</td><td>' + 
          modeProb + '</td></tr>';
        
      }
      
      // Self
      
      elem.style.borderBottomColor = 'rgb(240, 0, 0)';
      elem.style.borderRightColor = 'rgb(240, 0, 0)';
      elem.style.borderLeftColor = 'rgb(0, 240, 240)';
      elem.style.borderTopColor = 'rgb(0, 240, 240)';
      elem.title = elemTitle.slice(0, -2);

      let Z = elem.Z;
      let N = elem.N;
      
      tblSelected.innerHTML += 
        '<tr><td>Name:</td><td>' + 
        ZNtoName(Z, N) + ' (' + Z + 'z, ' + N + 'n)</td></tr>' + 
        '<tr><td>Element:</td><td>' + 
        decayData[ZNtoName(Z, N)]['name'] + '</td></tr>' + 
        '<tr><td>Halflife:</td><td>' + 
        elem.halflife + '</td></tr>' + 
        '<tr><td>Decay Modes:</td><td>' + 
        elem.title.slice('Selected: '.length) + '</td></tr>';
      
    });
    
  }
  
}

// Test Functions

async function testData() {
  
  try {
    
    // Each Chemical Element / Periodic Table
    
    for(let z = 0; z < Object.keys(chemIsos).length; z++) {
      await new Promise(resolve => setTimeout(resolve, 0));
      chemElemClick(z);
      if(checkAbnormalText()) console.log('Abnormal Text at: Periodic Table: ' + z);
    }
    
    // Each Weight / Isotope
    
    for(const iso in decayData) {
      await new Promise(resolve => setTimeout(resolve, 0));
      weightIsoClick(iso);
      if(checkAbnormalText()) console.log('Abnormal Text at: Weight: ' + iso);
    }
    
  }
  catch(err) {
    console.log(err);
  }
  
  console.log('Done!');
  
}

function checkAbnormalText() {
  
  let targets = ['undefined', 'object'];
  
  for(const target of targets) {
    if(window.find(target)) return true
  }
  
  return false
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  periodicTable = document.querySelector('tbody#periodic');
  
  DCForm = document.getElementById('DCForm');
  
  // Load Data
  
  loadData().then(async () => {
    // Post Data Load
    createPeriodicTable();
    expandAll();
  });
  
  // Decay Chain
  
  DCForm.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    let isoStr = document.getElementById('DCIsoInput').value; // Grab input isotope
    let parent = decayData[isoStr]; // Parent = input isotope in decayData
    
    if(parent === undefined) return; // Return if input is not in decayData
    
    let DCTbl = document.getElementById('DCTbl'); // Grab rendering table
    let isosCountElem = document.getElementById('DCIsosCount'); // Grab isotope count elem
    
    let isos = new Set(); // All isotopes in chain
    let newIsos = new Set([parent]); // New isotopes to process
    
    while(newIsos.size > 0) { // While newIsos is not empty (to get daughters all the way down)
      
      let tempIsos = new Set(newIsos); // Temporary set
      
      isos = isos.union(newIsos); // isos = isos + newIsos (Union)
      newIsos.clear(); // Clear newIsos
      
      isosCountElem.innerHTML = isos.size; // Update count
      
      for(const iso of tempIsos) { // Each iso in tempIsos
        
        let modes = []; // init modes
        
        modes = iso['decayModes']; // Set modes to iso's modes
        
        for(const mode in modes){ // For each decay mode
          
          let Z = iso['z']; // Set Z (# of protons)
          let N = iso['n']; // Set N (# of neutrons)
          
          let change = decayChange(modes[mode]['mode']); // Get change from mode
          
          if(!(change[0] == 0 && change[1] == 0)) { // If there was change
            let daughter = decayData[ZNtoName(Z + change[0], N + change[1])]; // Get daughter
            newIsos.add(daughter); // Add daughter to newIsos
            
            //console.log(iso['name'] + ' ' + modes[mode]['mode'] + ' -> ' + daughter['name']);
          }
          
        }
        
      }
      
    }
    
    createDecayChain(isos, DCTbl); // Create chain
    
  });
  
});