// Variables and Constants

let periodicTable;
let chemElems; // Isotopes organized by z
const perTblForm = [ // {#} = iso.z, b = blank, l = Lanthanides, a = Actinide
  [1, 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 2],
  [3, 4, 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 5, 6, 7, 8, 9, 10],
  [11, 12, 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56, 'l', 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
  [87, 88, 'a', 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  [0, 'b', 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 'b'],
  ['b', 'b', 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 'b'],
];
const elemNames = {
  0: 'Neutronium', 1: 'Hydrogen', 2: 'Helium', 3: 'Lithium', 4: 'Beryllium',  
  5: 'Boron', 6: 'Carbon', 7: 'Nitrogen', 8: 'Oxygen', 9: 'Fluorine',  
  10: 'Neon', 11: 'Sodium', 12: 'Magnesium', 13: 'Aluminum', 14: 'Silicon', 
  15: 'Phosphorus', 16: 'Sulfur', 17: 'Chlorine', 18: 'Argon', 19: 'Potassium', 
  20: 'Calcium', 21: 'Scandium', 22: 'Titanium', 23: 'Vanadium', 24: 'Chromium', 
  25: 'Manganese', 26: 'Iron', 27: 'Cobalt', 28: 'Nickel', 29: 'Copper', 
  30: 'Zinc', 31: 'Gallium', 32: 'Germanium', 33: 'Arsenic', 34: 'Selenium', 
  35: 'Bromine', 36: 'Krypton', 37: 'Rubidium', 38: 'Strontium', 39: 'Yttrium', 
  40: 'Zirconium', 41: 'Niobium', 42: 'Molybdenum', 43: 'Technetium', 44: 'Ruthenium', 
  45: 'Rhodium', 46: 'Palladium', 47: 'Silver', 48: 'Cadmium', 49: 'Indium', 
  50: 'Tin', 51: 'Antimony', 52: 'Tellurium', 53: 'Iodine', 54: 'Xenon', 
  55: 'Caesium', 56: 'Barium', 57: 'Lanthanum', 58: 'Cerium', 59: 'Praseodymium', 
  60: 'Neodymium', 61: 'Promethium', 62: 'Samarium', 63: 'Europium', 64: 'Gadolinium', 
  65: 'Terbium', 66: 'Dysprosium', 67: 'Holmium', 68: 'Erbium', 69: 'Thulium', 
  70: 'Ytterbium', 71: 'Lutetium', 72: 'Hafnium', 73: 'Tantalum', 74: 'Tungsten', 
  75: 'Rhenium', 76: 'Osmium', 77: 'Iridium', 78: 'Platinum', 79: 'Gold', 
  80: 'Mercury', 81: 'Thallium', 82: 'Lead', 83: 'Bismuth', 84: 'Polonium', 
  85: 'Astatine', 86: 'Radon', 87: 'Francium', 88: 'Radium', 89: 'Actinium', 
  90: 'Thorium', 91: 'Protactinium', 92: 'Uranium', 93: 'Neptunium', 94: 'Plutonium', 
  95: 'Americium', 96: 'Curium', 97: 'Berkelium', 98: 'Californium', 99: 'Einsteinium', 
  100: 'Fermium', 101: 'Mendelevium', 102: 'Nobelium', 103: 'Lawrencium', 104: 'Rutherfordium', 
  105: 'Dubnium', 106: 'Seaborgium', 107: 'Bohrium', 108: 'Hassium', 109: 'Meitnerium', 
  110: 'Darmstadtium', 111: 'Roentgenium', 112: 'Copernicium', 113: 'Nihonium', 114: 'Flerovium', 
  115: 'Moscovium', 116: 'Livermorium', 117: 'Tennessine', 118: 'Oganesson', 
};
const elemWeights = {
  0: 1, 1: 1.008, 2: 4.0026, 3: 6.94, 4: 9.0122,  
  5: 10.81, 6: 12.011, 7: 14.007, 8: 15.999, 9: 18.998,  
  10: 20.180, 11: 22.990, 12: 24.305, 13: 26.982, 14: 28.085, 
  15: 30.974, 16: 32.06, 17: 35.45, 18: 39.948, 19: 39.098, 
  20: 40.078, 21: 44.956, 22: 47.867, 23: 50.942, 24: 51.996, 
  25: 54.938, 26: 55.845, 27: 58.933, 28: 58.693, 29: 63.546, 
  30: 65.38, 31: 69.723, 32: 72.630, 33: 74.922, 34: 78.971, 
  35: 79.904, 36: 83.798, 37: 85.468, 38: 87.62, 39: 88.906, 
  40: 91.224, 41: 92.906, 42: 95.95, 43: 98, 44: 101.07, 
  45: 102.91, 46: 106.42, 47: 107.87, 48: 112.41, 49: 114.82, 
  50: 118.71, 51: 121.76, 52: 172.60, 53: 1126.90, 54: 131.29, 
  55: 132.91, 56: 137.33, 57: 138.91, 58: 140.12, 59: 140.91, 
  60: 144.24, 61: 145, 62: 150.36, 63: 151.96, 64: 157.25, 
  65: 158.93, 66: 162.50, 67: 164.93, 68: 167.26, 69: 168.93, 
  70: 173.05, 71: 174.97, 72: 178.49, 73: 180.95, 74: 183.84, 
  75: 186.21, 76: 190.23, 77: 192.22, 78: 195.08, 79: 196.97, 
  80: 200.59, 81: 204.38, 82: 207.2, 83: 208.98, 84: 209, 
  85: 210, 86: 222, 87: 223, 88: 226, 89: 227, 
  90: 232.04, 91: 231.04, 92: 238.03, 93: 237, 94: 244, 
  95: 243, 96: 247, 97: 247, 98: 251, 99: 252, 
  100: 257, 101: 258, 102: 259, 103: 266, 104: 267, 
  105: 268, 106: 269, 107: 270, 108: 277, 109: 278, 
  110: 281, 111: 282, 112: 285, 113: 286, 114: 289, 
  115: 290, 116: 293, 117: 294, 118: 294, 
};

let DCForm;

decay.selectedIso = '';
decay.parents = {};

// Functions

function createPeriodicTable() { // Create Periodic Table for selection
  
  // Table Form
  
  for(const row of perTblForm) { // Each form row
    
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
        td.title = elemNames[column];
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
  
  chemElems = {}; // Isotopes organized by z
  
  for(const isoKey in NuDat) { // Each isotope
    
    let iso = NuDat[isoKey];
    
    if(!chemElems[iso.z]) chemElems[iso.z] = [];
    
    chemElems[iso.z].push(iso.name);
    
  }
  
  for(const elemKey in chemElems) { // Each chemical element
    
    let elems = chemElems[elemKey]; // Isotopes of similar element
    
    elems.sort((a, b) => {return parseInt(a) - parseInt(b)}); // Sort
    
    let td = periodicTable.querySelector('.elem#z' + elemKey); // td
    
    // Chemical Name
    
    let chemName = '';
    for(const letter of elems[0]) {
      if(isNaN(letter) || isNaN(parseInt(letter))) chemName = chemName + letter;
    }
    td.innerText = chemName;
    
    // z
    
    td.innerHTML += '<div class="zNote">' + elemKey + '</div>';
    
    // Weight
    
    td.innerHTML += '<div class="wNote">' + elemWeights[elemKey] + '</div>';
    
    // Onclick
    
    td.onclick = () => {chemElemClick(elemKey)};
    
  }
  
}

function chemElemClick(z) { // Create Weight Table for selection
  
  let weightTable = document.querySelector('tr#weights'); // Get element
  
  weightTable.innerHTML = ''; // Clear
  
  for(const elem in chemElems[z]) { // Each chemical element
    
    // Weight
    
    let weight = parseInt(chemElems[z][elem]);
    
    // Error
    
    if(typeof(weight) !== 'number') {
      throw(new Error(chemElems[z][elem] + ': Non-number weight'));
    }
    
    // Create td
    
    weightTable.innerHTML += '<td class="elem" onclick="weightIsoClick(\'' + chemElems[z][elem] + '\')">' + weight + 
                             '<div class="wNote">n = ' + (weight - z) + '</div></td>';
    
  }
  
  expand('dataSect', 'dataBttn'); // Expand for new content
  
}

function weightIsoClick(iso) { // Create Levels Table for selection
  
  // Levels Table
  
  let levelsTable = document.querySelector('tr#levels'); // Get element
  
  levelsTable.innerHTML = ''; // Clear
  
  for(const level in NuDat[iso].levels) { // Each level
    
    // Create td
    
    levelsTable.innerHTML += '<td class="elem" onclick="levelClick(\'' + iso + '\', ' + level + ')">' + level + '</td>';
    
  }
  
  // Info
  
  let selInfo = document.querySelector('tbody#selInfo'); // Get element
  selInfo.innerHTML = `
    <tr><th>Value Name</th><th>Value</th><th>Unit</th><th>Uncertainty</th></tr>
  `; // Reset
  
  let keys = listKeys();
  
  keys.forEach((key) => {
    
    let isoObj = NuDat[iso];
    
    // Values
    
    let value = '';
    let unit = '';
    let uncertainty = '';
    
    if(isoObj.hasOwnProperty(key)) {
      
      if(isoObj[key].hasOwnProperty('value')) value = isoObj[key].value;
      else value = isoObj[key];
      
      if(isoObj[key].hasOwnProperty('unit')) unit = isoObj[key].unit;
      
      if(isoObj[key].hasOwnProperty('uncertainty')) uncertainty = isoObj[key].uncertainty;
      
      // Special Cases
      
      if(key == 'levels') value = isoObj[key].length;
      
      if(key == 'z') key += ' (Protons)';
      if(key == 'n') key += ' (Neutrons)';
      if(key == 'a') key += ' (Atomic Mass)';
      
    }
    
    // Add tr
    
    selInfo.innerHTML += '<tr><td>' + key + 
                         '</td><td>' + value + 
                         '</td><td>' + unit + 
                         '</td><td>' + uncertainty + 
                         '</td></tr>';
    
  });
  
  expand('dataSect', 'dataBttn'); // Expand for new content
  
}

function levelClick(iso, level) {
  
  // Level Info
  
  let selLevelInfo = document.querySelector('tbody#selLevelInfo'); // Get element
  selLevelInfo.innerHTML = `
    <tr><th>Value Name</th><th>Value</th><th>Unit</th><th>Uncertainty</th></tr>
  `; // Reset
  
  let keys = listLevelKeys();
  
  keys.forEach((key) => {
    
    let levelObj = NuDat[iso].levels[level];
    
    // Values
    
    let value = '';
    let unit = '';
    let uncertainty = '';
    
    if(levelObj.hasOwnProperty(key)) {
      
      if(levelObj[key].hasOwnProperty('value')) value = levelObj[key].value;
      else value = levelObj[key];
      
      if(levelObj[key].hasOwnProperty('unit')) unit = levelObj[key].unit;
      
      if(levelObj[key].hasOwnProperty('uncertainty')) uncertainty = JSON.stringify(levelObj[key].uncertainty);
      
      // Special Cases
      
      if(key == 'decayModes') value = levelObj[key].observed.length + levelObj[key].predicted.length;
      
    }
    
    // Add tr
    
    selLevelInfo.innerHTML += '<tr><td>' + key + 
                              '</td><td>' + value + 
                              '</td><td>' + unit + 
                              '</td><td>' + uncertainty + 
                              '</td></tr>';
    
  });
  
  // Decay Modes
  
  let selDecayModes = document.querySelector('tbody#selDecayModes'); // Get element
  selDecayModes.innerHTML = `
    <tr><th colspan="4">Decay Modes</th></tr>
    <tr><th>Mode</th><th>Percent</th><th>Uncertainty</th><th>Observed/Predicted</th></tr>
  `; // Reset
  
  if(NuDat[iso].levels[level].hasOwnProperty('decayModes')) {
    
    // Observed
    
    for(const observed of NuDat[iso].levels[level].decayModes.observed) {
      
      if(observed.length < 1) break
      
      // Values
      
      let mode = '?';
      let value = '?';
      let uncertainty = '?';
      
      if(observed.hasOwnProperty('mode')) mode = observed.mode;
      if(observed.hasOwnProperty('value')) value = observed.value;
      if(observed.hasOwnProperty('uncertainty')) uncertainty = JSON.stringify(observed.uncertainty);
      
      // Add tr
      
      selDecayModes.innerHTML += '<tr><td>' + mode + 
                                 '</td><td>' + value + 
                                 '</td><td>' + uncertainty + 
                                 '</td><td>Observed</td></tr>';
      
    }
    
    // Predicted
    
    for(const predicted of NuDat[iso].levels[level].decayModes.predicted) {
      
      if(predicted.length < 1) break
      
      // Values
      
      let mode = '?';
      let value = '?';
      let uncertainty = '?';
      
      if(predicted.hasOwnProperty('mode')) mode = predicted.mode;
      if(predicted.hasOwnProperty('value')) value = predicted.value;
      if(predicted.hasOwnProperty('uncertainty')) uncertainty = JSON.stringify(predicted.uncertainty);
      
      // Add tr
      
      selDecayModes.innerHTML += '<tr><td>' + mode + 
                                 '</td><td>' + value + 
                                 '</td><td>' + uncertainty + 
                                 '</td><td>Predicted</td></tr>';
      
    }
    
  }
  
  expand('dataSect', 'dataBttn'); // Expand for new content
  
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
      tblDat.className = 'DCIso';
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
    elem.halflife = halflife;
    
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
      
      tblSelected.innerHTML += '<tr><td>' + ZNtoName(Z, N) + ': ' + Z + 'z, ' + N + 'n: ' + elem.halflife + elem.title.slice('Selected'.length) + '</td></tr>';
      
    });
    
  }
  
}

// Test Functions

async function testData() {
  
  try {
    
    // Each Chemical Element / Periodic Table
    
    for(let z = 0; z < Object.keys(chemElems).length; z++) {
      await new Promise(resolve => setTimeout(resolve, 0));
      chemElemClick(z);
      if(checkAbnormalText()) console.log('Abnormal Text at: Periodic Table: ' + z);
    }
    
    // Each Weight / Isotope
    
    for(const iso in NuDat) {
      await new Promise(resolve => setTimeout(resolve, 0));
      weightIsoClick(iso);
      if(checkAbnormalText()) console.log('Abnormal Text at: Weight: ' + iso);
      
      // Each Level
      
      for(const level in NuDat[iso].levels) {
        await new Promise(resolve => setTimeout(resolve, 0));
        levelClick(iso, level);
        if(checkAbnormalText()) console.log('Abnormal Text at: Level: ' + iso + ': ' + level);
      }
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
  
  loadNuDat().then(async () => {
    // Post Data Load
    createPeriodicTable();
    expandAll();
  });
  
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