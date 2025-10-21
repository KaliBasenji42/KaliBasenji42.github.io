// Ensure These Variables are set before linking:
/*
let maxRScale = 4; // Max scale for radius (power)
let maxDScale = 7; // Max scale for distance (power)
let minRScale = -1; // Min scale for radius (power)
let minDScale = 0; // Min scale for distance (power)

let rightThres = 10 ** 5; // Section width (detection threshold for section nav, right)
let leftThres = 100; // detection threshold for section nav, left
let increment = rightThres / 2; // Space moved when changing section

let offset = 400; // How far everything is shifted over

let rScalePower = 3; // Initial radius scale
let rScale = 10 ** rScalePower;

let dScalePower = 4; // Initial distance scale
let dScale = 10 ** dScalePower;
*/
// System Variables

let section = 0; // Section number

let maxDist = 0; // Max scroll distance for last celestial

const positioning = []; // Array for storing rendering values
const celestials = []; // Array for storing a Celestial's element
const orbitals = []; // Array for storing a Celestial's Orbit's element

let rDisp = document.getElementById('rDisp'); // Display elem for Radius scale
let dDisp = document.getElementById('dDisp'); // Display elem for Distance scale

let ODBox = document.getElementsByClassName('ODBox')[0]; // Scroll container

let cropCont = document.createElement('div'); // Container to create scroll section
cropCont.style.height = '400px';
cropCont.style.overflow = 'hidden';
cropCont.style.position = 'absolute';
ODBox.appendChild(cropCont);

let rightSign = document.createElement('div'); // Right section navigation
rightSign.innerHTML = '<b>Enter Next Section</b>';
rightSign.className = 'ODBSign';
rightSign.style.left = '' + (rightThres) + 'px';
rightSign.style.backgroundImage = 'linear-gradient(to right, rgba(196, 196, 255, 0.75), rgba(0, 0, 0, 0))';
ODBox.appendChild(rightSign);

let leftSign = document.createElement('div'); // Left section navigation
leftSign.innerHTML = '<b>Enter Prev Section</b>';
leftSign.className = 'ODBSign';
leftSign.style.textAlign = 'right';
leftSign.style.backgroundImage = 'linear-gradient(to left, rgba(196, 196, 255, 0.75), rgba(0, 0, 0, 0))';
leftSign.style.display = 'none';
ODBox.appendChild(leftSign);

output = document.getElementById('output'); // Elem for displaying position

// Functions

function ODBoxScrollTo(object) { // Function for scrolling to a celestial
  
  let pos = Math.max(celestials[object].style.left.slice(0, -2));
  
  section += -1 * Math.floor(pos / increment);
  
  if(pos > (leftThres * 4)) section += 1;
  
  section = Math.min(section, 0);
  
  render(false);
  
  pos = Math.max(celestials[object].style.left.slice(0, -2), leftSign.offsetLeft + leftSign.offsetWidth, 0);
  
  ODBox.scrollTo({left: pos});
  
  let dist = '' + Math.floor((ODBox.scrollLeft + (section * increment * -1) - offset) * dScale);
  
  output.innerHTML = 'Scroll: ' + ODBox.scrollLeft + '<br>Section: ' + section + '<br>Distance: ' + dist + ' km';
  
}

function ODBoxScrollToPx(pos, smooth) { // Function for scrolling to a pixel position
  
  section = -1 * Math.floor(pos / increment);
  
  section = Math.min(section, 0);
  
  render(smooth);
  
  if(ODBox.scrollLeft < (leftThres * 4)) section += 1;
  if(ODBox.scrollLeft > rightThres - (leftThres * 4)) section += -1;
  
  section = Math.min(section, 0);
  
  render(smooth)
  
  pos = pos + (increment * section);
  
  ODBox.scrollTo({left: pos});
  
  let dist = '' + Math.floor((ODBox.scrollLeft + (section * increment * -1) - offset) * dScale);
  
  output.innerHTML = 'Scroll: ' + ODBox.scrollLeft + '<br>Section: ' + section + '<br>Distance: ' + dist + ' km';
  
}

function rScaleSub() { // Subtract from radius scale (for button)
  
  if(rScalePower < maxRScale) {
    
    rScalePower += 1;
    rScale = 10 ** rScalePower;
    
  }
  
  render(true);
  
}

function rScaleAdd() { // Add to radius scale (for button)
  
  if(rScalePower > minRScale) {
    
    rScalePower -= 1;
    rScale = 10 ** rScalePower;
    
  }
  
  render(true);
  
}

function dScaleSub() { // Subtract from distance scale (for button)
  
  if(dScalePower < maxDScale) {
    
    dScalePower += 1;
    dScale = 10 ** dScalePower;
    
  }
  
  render(true);
  
}

function dScaleAdd() { // Add to distance scale (for button)
  
  if(dScalePower > minDScale) {
    
    dScalePower -= 1;
    dScale = 10 ** dScalePower;
    
  }
  
  render(true);
  
}

function render(smooth) { // Function for setting celestials' styles
  // Smooth: boolean for wether to animate transition
  
  rDisp.innerHTML = '1 Radius px = ' + rScale + ' km';
  dDisp.innerHTML = '1 Distance px = ' + dScale + ' km';
  
  for(let i = 0; i < celestials.length; i++) {
    
    let radius = positioning[i][0];
    let orbRadius = positioning[i][1];
    let xOffset = positioning[i][2];
    let fontSize = positioning[i][3];
    
    radius = radius / rScale;
    orbRadius = orbRadius / dScale;
    xOffset = xOffset / dScale;
    
    let x = orbRadius + xOffset + offset + (section * increment);
    let y = 200;
    let xOrb = xOffset + offset + (section * increment);
    
    celestials[i].style.lineHeight = '' + (radius * 2) + 'px';
    celestials[i].style.fontSize = '' + radius * fontSize + 'px';
    celestials[i].style.width = '' + (radius * 2) + 'px';
    celestials[i].style.height = '' + (radius * 2) + 'px';
    celestials[i].style.borderRadius = '' + radius + 'px';
    celestials[i].style.left = '' + (x - radius) + 'px';
    celestials[i].style.top = '' + (y - radius) + 'px';
    celestials[i].style.transition = `left 1s, 
                                      top 1s, 
                                      width 1s, 
                                      height 1s, 
                                      border-radius 1s, 
                                      font-size 1s, 
                                      line-height 1s`;
    
    orbitals[i].style.width = '' + ((orbRadius * 2) - 2) + 'px';
    orbitals[i].style.height = '' + ((orbRadius * 2) - 2) + 'px';
    orbitals[i].style.borderRadius = '' + ((orbRadius * 2) - 2) + 'px';
    orbitals[i].style.left = '' + (xOrb - (orbRadius)) + 'px';
    orbitals[i].style.top = '' + (y - (orbRadius)) + 'px';
    orbitals[i].style.transition = `left 1s, 
                                    top 1s, 
                                    width 1s, 
                                    height 1s, 
                                    border-radius 1s`;
    
    if(smooth == false) {
      
      celestials[i].style.transition = '';
      orbitals[i].style.transition = '';      
      
    }
    
    orbitals[i].style.display = 'block';
    if(orbRadius < 5) orbitals[i].style.display = 'none';
    
    celestials[i].style.display = 'block';
    
    if(i == 0) maxDist = x + radius;
    
    maxDist = Math.max(maxDist, x + radius, xOrb + orbRadius);
    
  }
  
  createScrollNav();
  
  let cropContWidth = Math.min(maxDist, rightThres + screen.width)
  
  cropCont.style.width = '' + cropContWidth + 'px';
  
  leftSign.style.display = 'none';
  if(section != 0) leftSign.style.display = 'block';
  
  leftSign.style.right = '' + (-leftThres) + 'px';
  
  rightSign.style.display = 'none';
  if(rightSign.style.left.slice(0, -2) < maxDist) rightSign.style.display = 'block';
  
  leftSign.style.width = '' + screen.width + 'px';
  rightSign.style.width = '' + screen.width + 'px';
  
  if(maxDist < (leftThres * 4)) {
    
    let pos = (section * increment * -1) + maxDist;
    
    ODBoxScrollToPx(pos, smooth);
    
  }
  
}

function createCelestial(radius, orbRadius, xOffset, sym, colour, fontColour, fontSize) {
  
  positioning.push([radius, orbRadius, xOffset, fontSize]);
  
  let x = orbRadius + xOffset + offset + (section * increment);
  let y = 200;
  let xOrb = xOffset + offset + (section * increment);
  
  let orbStyle = 'position: absolute;' +
                 'border-style: solid;' +
                 'border-width: 2px;' +
                 'border-color: rgb(128, 128, 128);'
  
  let celStyle = 'text-align: center;' +
                 'color:' + fontColour + ';' +
                 'position: absolute;' +
                 'background-color:' + colour + ';'
  
  let orb = document.createElement('div');
  cropCont.appendChild(orb);
  orb.style = orbStyle;
  orbitals.push(orb);
  
  let cel = document.createElement('div');
  cropCont.appendChild(cel);
  cel.style = celStyle;
  cel.innerHTML = sym;
  celestials.push(cel);
  
}

function createScrollNav() {
  
  let bar = document.getElementById('scrollNavBar');
  
  bar.innerHTML = '';
  
  for(let i = 0; i < celestials.length; i++) {
    
    HTMLStr = '<button type="button" onclick="ODBoxScrollTo(' + i + ')" class="nav">' +
              celestials[i].innerHTML + '</button';
    
    bar.innerHTML += HTMLStr;
    
  }
  
}

// Event Listener (Infinite Scroll)

ODBox.addEventListener('scroll', function() {
  
  let dist = '' + Math.floor((ODBox.scrollLeft + (section * increment * -1) - offset) * dScale);
  
  output.innerHTML = 'Scroll: ' + ODBox.scrollLeft + '<br>Section: ' + section + '<br>Distance: ' + dist + ' km';
  
  if(ODBox.scrollLeft > rightThres) {
    
    ODBox.scrollLeft = increment;
    
    section += -1;
    
    render(false);
    
  }
  
  if(ODBox.scrollLeft < leftThres && section != 0) {
    
    ODBox.scrollLeft = increment + leftThres;
    
    section += 1;
    
    render(false);
    
  }
  
});