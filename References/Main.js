// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

// Data

function clearData() {
  
  if(window.confirm('Clear All Data?')) {
    
    localStorage.clear();
    
  }
  
}

function outputData() {
  
  let barElem = document.getElementsByClassName('dataBar')[0];
  let textElem = document.getElementById('data');
  let DTElem = document.getElementById('DT');
  
  DTElem.innerHTML = `
    <tr>
      <th style="width: 25%;">Key</th>
      <th style="width: 75%;">Data</th>
    </tr>
    `
  
  let bytes = 0
  
  for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
        item = localStorage.getItem(key);
        
        bytes += item.length;
        
        let rowElem = document.createElement('tr');
        DTElem.appendChild(rowElem);
        
        let keyElem = document.createElement('td');
        keyElem.innerText = key;
        rowElem.appendChild(keyElem);
        
        let dataElem = document.createElement('td');
        dataElem.innerText = '' + item;
        rowElem.appendChild(dataElem);
    }
  }
  
  frac = bytes/5000000;
  percent = frac * 100;
  
  red = (frac * 2) * 255;
  green =  (2 - (frac * 2)) * 255;
  color = 'rgb(' + red + ',' + green + ',0)';
  
  textElem.innerHTML = '' + (bytes / 1000) + ' KB / 5000 KB (' + Math.floor(percent) + '%)';
  
  barElem.style.width = '' + percent + '%';
  barElem.style.backgroundColor = color;
  
}

// Events

document.addEventListener('DOMContentLoaded', function (event) {
  
  outputData();
  
  document.querySelector('body').style = "animation-name: load;" +
                                         "animation-duration: 0.75s;";
    loadSpin();
});
