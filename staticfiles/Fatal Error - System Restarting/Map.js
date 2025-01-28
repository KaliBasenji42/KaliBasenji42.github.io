// Variables and Constants

let map = document.getElementById('map');
let umbrielRef = document.getElementById('UmbrielRef');

const mapAreas = [['Nix', 'rect', 0, 0, 128, 10], // 'Name', 'type', ... args
                  ['Magna', 'rect', 36, 28, 128, 60],
                  ['Parvus', 'circle', 20, 48, 16],
                  ['Mons', 'circle', 15.5, 20.5, 10.5],
                  ['Mare', 'rect', 28, 10, 128, 28],
                  ['Disiunctus', 'circle', 4.5, 31, 4.5],
                  ['◮<br>N', 'label', 1, 56, 'rgb(128,0,0)', 16, 14],
                  ['* Aurum', 'label', 40, 40, 'rgb(192,0,0)', 10, 10]];

const umbrielAreas = [['Boop!', 'rect', 44, 13, 48, 16],
                      ['Anklet', 'rect', 77, 49, 83, 51],
                      ['Hiking Stick', 'rect', 90, 26, 94, 55],
                      ['Side<br>Base', 'label', 16, 55, 'rgb(64,0,64)', 16, 16],
                      ['Front<br>Base', 'label', 41, 55, 'rgb(64,0,64)', 16, 16],
                      ['Side<br>Full', 'label', 75, 55, 'rgb(64,0,64)', 16, 16]];

// Functions

function drawRect(surf, scale, name, x1, y1, x2, y2) {
  
  x1 = x1 * scale;
  y1 = y1 * scale;
  x2 = x2 * scale;
  y2 = y2 * scale;
  
  let area = document.createElement('div');
  surf.appendChild(area);
  
  area.style.position = 'absolute';
  area.className = 'mapArea';
  
  area.style.left = '' + x1 + 'px';
  area.style.top = '' + y1 + 'px';
  area.style.width = '' + (x2 - x1) + 'px';
  area.style.height = '' + (y2 - y1) + 'px';
  
  area.title = name;
  
}

function drawCircle(surf, scale, name, x1, y1, r) {
  
  x1 = x1 * scale;
  y1 = y1 * scale;
  r = r * scale;
  
  let area = document.createElement('div');
  surf.appendChild(area);
  
  area.style.position = 'absolute';
  area.className = 'mapArea';
  
  area.style.borderRadius = '' + r + 'px';
  area.style.left = '' + (x1 - r) + 'px';
  area.style.top = '' + (y1 - r) + 'px';
  area.style.width = '' + (2 * r) + 'px';
  area.style.height = '' + (2 * r) + 'px';
  
  area.title = name;
  
}

function drawLabel(surf, scale, name, x1, y1, color, size, height) {
  
  x1 = x1 * scale;
  y1 = y1 * scale;
  
  let label = document.createElement('div');
  surf.appendChild(label);
  
  label.style.position = 'absolute';
  label.style.zIndex = '1';
  label.style.textAlign = 'center';
  
  label.style.left = '' + x1 + 'px';
  label.style.top = '' + y1 + 'px';
  label.style.color = color;
  label.style.fontSize = '' + size + 'px';
  label.style.lineHeight = '' + height + 'px';
  
  label.innerHTML = name;
  
}

function showAreas() {
  
  let areas = document.getElementsByClassName('mapArea');
  
  for(let i = 0; i < areas.length; i ++) {
    areas[i].style.backgroundImage = `radial-gradient( 
                                      ellipse at 0% 0%,
                                      rgba(255, 0, 0, 0.5), 
                                      rgba(0, 255, 0, 0.5))`;
  }
  
}

function hideAreas() {
  
  let areas = document.getElementsByClassName('mapArea');
  
  for(let i = 0; i < areas.length; i ++) {
    areas[i].style.backgroundImage = 'none';
  }
  
}

function renderMap(surf, scale, areas) {
  
  for(let i = 0; i < areas.length; i++) {
    
    if(areas[i][1] == 'rect') drawRect(surf, scale, areas[i][0], areas[i][2], areas[i][3], areas[i][4], areas[i][5]);
    else if(areas[i][1] == 'circle') drawCircle(surf, scale, areas[i][0], areas[i][2], areas[i][3], areas[i][4]);
    else if(areas[i][1] == 'label') drawLabel(surf, scale, areas[i][0], areas[i][2], areas[i][3], areas[i][4], areas[i][5], areas[i][6]);
    
  }
  
}

// Renders

renderMap(map, 4, mapAreas);
renderMap(umbrielRef, 4, umbrielAreas);
