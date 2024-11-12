// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

// Data

function clearData() {
  
  if(window.confirm('Clear All Data?')) {
    
    localStorage.clear();
    
    outputData();
    
  }
  
}

function removeData(key) {
  
  if(window.confirm('Remove "' + key + '"?')) {
    
    localStorage.removeItem(key);
    
    outputData();
    
  }
  
}

function outputData() {
  
  // Variables
  
  let barElem = document.getElementsByClassName('dataBar')[0];
  let textElem = document.getElementById('data');
  let DTElem = document.getElementById('DT');
  let DTSect = document.getElementById('DT Sect');
  let boom = document.getElementsByClassName('BOOM')[0];
  
  DTElem.innerHTML = `
    <tr>
      <th style="width: 25%;">Key</th>
      <th style="width: 75%;">Data</th>
      <th style="width: 6rem;">Delete</th>
    </tr>
    `
  
  let bytes = 0
  
  // Item Loop
  
  for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
        item = localStorage.getItem(key);
        
        bytes += item.length;
        
        // Table
        
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
        //remBttnElem.style = 'text-align: center; cursor: pointer;';
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
  
  frac = bytes/5000000;
  percent = frac * 100;
  
  red = (frac * 2) * 255;
  green =  (2 - (frac * 2)) * 255;
  color = 'rgb(' + red + ',' + green + ',0)';
  
  textElem.innerHTML = '' + (bytes / 1000) + ' KB / 5000 KB (' + Math.floor(percent) + '%)';
  
  barElem.style.width = '' + percent + '%';
  barElem.style.backgroundColor = color;
  
  if(frac > 1) boom.style.display = 'block';
  else boom.style.display = 'none';
  
}

// Events

document.addEventListener('DOMContentLoaded', function (event) {
  
  outputData();
  
  document.querySelector('body').style = "animation-name: load;" +
                                         "animation-duration: 0.75s;";
    loadSpin();
});
