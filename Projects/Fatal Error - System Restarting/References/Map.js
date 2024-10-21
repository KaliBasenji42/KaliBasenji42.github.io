// Variables and Constants

let map = document.getElementById('map');

let mapScale = 4;

const areas = [['Nix', 'rect', 0, 0, 128, 10],
               ['Magna', 'rect', 36, 28, 128, 60],
               ['Parvus', 'circle', 20, 48, 16],
               ['Mons', 'circle', 15.5, 20.5, 10.5],
               ['Mare', 'rect', 28, 10, 128, 28],
               ['?', 'circle', 4.5, 31, 4.5]];

// Functions

function drawRect(name, x1, y1, x2, y2) {
  
  x1 = x1 * mapScale;
  y1 = y1 * mapScale;
  x2 = x2 * mapScale;
  y2 = y2 * mapScale;
  
  let area = document.createElement('div');
  map.appendChild(area);
  
  area.style.position = 'absolute';
  area.className = 'mapArea';
  
  area.style.left = '' + x1 + 'px';
  area.style.top = '' + y1 + 'px';
  area.style.width = '' + (x2 - x1) + 'px';
  area.style.height = '' + (y2 - y1) + 'px';
  
  area.title = name;
  
}

function drawCircle(name, x1, y1, r) {
  
  x1 = x1 * mapScale;
  y1 = y1 * mapScale;
  r = r * mapScale;
  
  let area = document.createElement('div');
  map.appendChild(area);
  
  area.style.position = 'absolute';
  area.className = 'mapArea';
  
  area.style.borderRadius = '' + r + 'px';
  area.style.left = '' + (x1 - r) + 'px';
  area.style.top = '' + (y1 - r) + 'px';
  area.style.width = '' + (2 * r) + 'px';
  area.style.height = '' + (2 * r) + 'px';
  
  area.title = name;
  
}

function showAreas() {
  
  let areas = document.getElementsByClassName('mapArea');
  
  for (let i = 0; i < areas.length; i ++) {
    areas[i].style.backgroundColor = 'rgba(255, ' +
                                     (256 * (i / areas.length)) +
                                     ', 0, .5)';
  }
  
}

function hideAreas() {
  
  let areas = document.getElementsByClassName('mapArea');
  
  for (let i = 0; i < areas.length; i ++) {
    areas[i].style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
  
}

// Loop / Output

for(let i = 0; i < areas.length; i++) {
  
  if(areas[i][1] == 'rect') drawRect(areas[i][0], areas[i][2], areas[i][3], areas[i][4], areas[i][5]);
  if(areas[i][1] == 'circle') drawCircle(areas[i][0], areas[i][2], areas[i][3], areas[i][4]);
  
}
