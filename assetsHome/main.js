// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let warnRotate = 30;
let warn;
let boomRotate = 300;
let boom;

// Functions

function numForm(num) {
  
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

// Data

function clearData() {
  
  if(window.confirm('Clear All Data?')) {
    
    localStorage.clear();
    
    outputData(getUsage());
    
  }
  
}

function removeData(key) {
  
  if(window.confirm('Remove "' + key + '"?')) {
    
    localStorage.removeItem(key);
    
    outputData(getUsage());
    
  }
  
}

function getUsage() {
  
  let usage = 0;
  
  for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
      item = localStorage.getItem(key);
      
      usage += item.length;
    }
  }
  
  return usage;
  
}

function outputData(usage) {
  
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
  
  let quota = 5 * 1024 * 1024;
  
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

// Events

document.addEventListener('DOMContentLoaded', function () {
  
  // Data
  
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
  
});
