// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

warningPath = 'warning.json';

let warnRotate = 30;
let warn;
let boomRotate = 300;
let boom;

let LSCalcForm;
let LSCalcTbl;
let LSValues;
let LSStats;
let calculating = false;

// Functions

function numForm(num) { // Takes int and returns str with commas
  
  let numStr = '' + num;
  let out = '';
  
  for(let i = 0; i < numStr.length; i++) {
    
    pos = numStr.length - i - 1;
    add = i % 3 == 0 && i != 0;
    
    if(add) out = ',' + out;
    
    out = numStr[pos] + out;
    
  }
  
  return out;
  
}

// localStorage

function clearData() { // Clears localStorage
  
  if(window.confirm('Clear All Data?')) {
    
    localStorage.clear();
    
    outputData(getUsage());
    
  }
  
}

function removeData(key) { // Removes a specific localStorage key pair
  
  if(window.confirm('Remove "' + key + '"?')) {
    
    localStorage.removeItem(key);
    
    outputData(getUsage());
    
  }
  
}

function getUsage() { // Return bytes in localStorage as int
  
  let usage = 0;
  
  for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
      let item = localStorage.getItem(key); // LS Item
      usage += item.length + key.length; // Add
    }
  }
  
  return usage;
  
}

function outputData(usage) { // Render localStorage graphics
  
  // Variables
  
  let barElem = document.getElementById('dataBar');
  let textElem = document.getElementById('data');
  let DTElem = document.getElementById('DT');
  let DTSect = document.getElementById('DT Sect');
  let warn = document.getElementById('warn');
  let boom = document.getElementById('boom');
  let how = document.getElementById('how');
  let fourtytwo = document.getElementById('fourtytwo');
  let bomb = document.getElementById('bomb');
  
  let quotaStr = localStorage.getItem('LSQuota'); // Saved
  
  if(typeof(quotaStr) !== 'string') quota = 5 * 1024 * 1024; // Default
  else quota = parseInt(quotaStr); // Saved
  
  DTElem.innerHTML = `
    <tr>
      <th style="width: 25%;">Key</th>
      <th style="width: 75%;">Data</th>
      <th style="width: 6rem;">Delete</th>
    </tr>
    `
  
  // Table Loop
  
  for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
      item = localStorage.getItem(key);
      
      let rowElem = document.createElement('tr');
      DTElem.appendChild(rowElem);
      
      let keyElem = document.createElement('td');
      keyElem.innerText = key;
      rowElem.appendChild(keyElem);
      
      let dataElem = document.createElement('td');
      dataElem.innerText = '' + item;
      rowElem.appendChild(dataElem);
      
      let remElem = document.createElement('td');
      rowElem.appendChild(remElem);
      
      let remBttnElem = document.createElement('button');
      remBttnElem.innerText = '❌';
      remBttnElem.className = 'dataBttn'
      remBttnElem.title = 'Remove';
      remBttnElem.onclick = function() {removeData(key);}
      remElem.appendChild(remBttnElem);
      
    }
  }
  
  // Sect
  
  if(DTSect.style.maxHeight !=  "0px") {
    DTSect.style.maxHeight = "" + (DTSect.scrollHeight + 100) + "px";
  }
  
  // Bar & Text
  
  frac = usage/quota;
  percent = frac * 100;
  
  red = (frac * 2) * 255;
  green =  (2 - (frac * 2)) * 255;
  color = 'rgb(' + red + ',' + green + ',0)';
  
  textElem.innerHTML = '' + numForm(usage) + 
                       ' Bytes / ' + numForm(quota) + 
                       ' Bytes (' + percent.toPrecision(4) + '%)';
  
  barElem.style.width = '' + Math.abs(percent) + '%';
  barElem.style.backgroundColor = color;
  
  // Warning
  
  if(frac >= 0.85) {
    warn.style.display = 'block';
    warn.style.rotate = '0deg';
  }
  else warn.style.display = 'none';
  
  if(frac > 1) boom.style.display = 'block';
  else boom.style.display = 'none';
  
  if(frac < 0) {
    how.style.display = 'block';
    barElem.style.left = '' + percent + '%';
  }
  else {
    how.style.display = 'none';
    barElem.style.left = '0';
  }
  
  if(Math.floor(percent) == 42) {
    fourtytwo.style.display = 'block';
  }
  else fourtytwo.style.display = 'none';
  
  if(frac >= 0.99) {
    bomb.style.display = 'block';
  }
  else bomb.style.display = 'none';
  
}

async function LSRender() { // Render in-between LSCalc()
  
  // Variables
  
  let tenK = document.querySelector('#LSCalcTbl > * > #tenK');
  let hundred = document.querySelector('#LSCalcTbl > * > #hundred');
  let one = document.querySelector('#LSCalcTbl > * > #one');
  let total = document.querySelector('#LSCalcTbl > * > #total');
  let elems = [tenK, hundred, one, total];
  
  // Wait
  
  await new Promise(resolve => setTimeout(resolve, 0));
  await new Promise(resolve => requestAnimationFrame(resolve));
  
  // Set
  
  for(let i = 0; i < elems.length; i++) {
    elems[i].querySelector('.status').innerText = LSStats[i];
    elems[i].querySelector('.value').innerText = LSValues[i];
  }
  
  total.querySelector('.value').innerText = '' + LSValues[3] + ' B';
  
}

async function LSCalc(clear = true) { // Calculate LS Quota
  // Clear: true: clear local storage key pair used, false: fill localStorage
  
  // Prevent Spam
  
  if(calculating) return
  
  calculating = true;
  
  // Variables
  
  LSStats = ['⏸️ Waiting', '⏸️ Waiting', '⏸️ Waiting', '🔄 Adding'];
  LSValues = [0, 0, 0, 0];
  
  let LSInp = document.querySelector('#LSCalcForm > #LSInp');
  
  // Size Variables
  
  let sizeStr = '';
  
  let sizeStrs = ['', '', ''];
  
  for(let i = 0; i < 10000; i++) sizeStrs[0] += 'A';
  for(let i = 0; i < 100; i++) sizeStrs[1] += 'B';
  sizeStrs[2] += 'C';
  
  // Initial
  
  await LSRender();
  
  // Each Increment
  
  for(let i = 0; i < 3; i++) {
    
    LSStats[i] = '🔄 Adding'; // Loading Status
    
    while(LSStats[i] != '✅ Done') { // While not done
      
      LSValues[i]++; // Add to Iteration
      
      try {
        
        localStorage.setItem('LSCalc', sizeStr + sizeStrs[i]); // Set
        
        sizeStr = sizeStr + sizeStrs[i]; // Add if passed
        
      }
      catch { LSStats[i] = '✅ Done'; } // If error, done
      
      LSValues[3] = getUsage(); // Get Usage
      
      await LSRender(); // Render
      
    }
    
  }
  
  // Done
  
  sizeStr = ''; // Reset long str (may help clear mem)
  
  LSStats[3] = '✅ Done';
  
  LSInp.value = getUsage(); // Set Form Input
  
  if(clear) localStorage.removeItem('LSCalc'); // Clear
  
  await LSRender();
  
  outputData(getUsage());
  
  calculating = false;
  
}

function LSExport() {
  
  // Variables
  
  let downloadLink = document.getElementById('LSDownload');
  
  let json = {};
  
  // Export Object
  
  for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
      let item = localStorage.getItem(key); // LS Item
      json[key] = item; // Set
    }
  }
  
  // URL
  
  let jsonStr = JSON.stringify(json, null, 2); // Stringy 😋
  
  let blob = new Blob([jsonStr], {type: 'application/json'}); // Blob
  
  let url = URL.createObjectURL(blob); // URL
  
  downloadLink.href = url; // Set href
  
}

// Events

document.addEventListener('DOMContentLoaded', function () {
  
  // localStorage
  
  outputData(getUsage());
  
  warn = document.getElementById('warn');
  boom = document.getElementById('boom');
  
  setInterval(function() {
    warnRotate = warnRotate * -1;
    if(frac >= 0.95) warn.style.rotate = '' + warnRotate + 'deg';
  }, 1100);
  
  boom.style.rotate = '' + boomRotate + 'deg';
  setInterval(function() {
    boomRotate = boomRotate * -1;
    boom.style.rotate = '' + boomRotate + 'deg';
    boom.style.opacity = '1';
  }, 5100);
  
  // localStorage Quota Form
  
  LSCalcTbl = document.getElementById('LSCalcTbl');
  LSCalcForm = document.getElementById('LSCalcForm');
  
  LSCalcForm.onsubmit = (() => {
    
    event.preventDefault();
    
    // Variables
    
    let value = LSCalcForm.querySelector('#LSInp').value;
    let output = LSCalcForm.querySelector('output');
    
    // Set
    
    try{
      if(value == '') throw(new Error('Empty Value'));
      
      localStorage.setItem('LSQuota', value); // Save
      output.innerText = '✅ Set'; // Output
      outputData(getUsage()); // Re-Render
    }
    catch(error) {
      output.innerText = '⚠️ ' + error; // Output
      
      console.log('Saving Error:'); // Log
      console.log(error);
    }
    
  });
  
  // localStorage Import Form
  
  LSImp = document.getElementById('LSImp');
  LSImpForm = document.getElementById('LSImpForm');
  
  LSImpForm.onsubmit = (() => {
    
    event.preventDefault();
    
    // Variables
    
    let file = LSImpForm.querySelector('#LSImp').files[0];
    let output = LSImpForm.querySelector('output');
    
    // Read File
    
    if(file) { // If file exists
      
      if(file.type == 'application/json') { // If file is JSON
        
        output.innerHTML = '🔄 Processing';
        
        const reader = new FileReader();
        
        reader.onload = function(event) { // Read file
          
          const json = event.target.result;
          
          try {
            
            const index = JSON.parse(json); // Create object
            
            for(let key in index) localStorage.setItem(key, index[key]);
            
            output.innerHTML = '✅ Loaded';
            
            // Output
            
            outputData(getUsage());
            
            updateTheme();
            
          }
          
          catch(error) {
            
            output.innerHTML = '⚠️ ' + error;
            
            console.log('Import Error:');
            console.log(error);
            
          }
          
        }
        
        reader.readAsText(file);
        
      }
      
      else output.innerText = '⚠️ Wrong Type';
      
    }
    
    else output.innerText = '❌ No File';
    
  });
  
});
