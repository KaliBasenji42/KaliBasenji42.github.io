// Variables and Constants

const head = document.getElementsByTagName("head");

const body = document.getElementsByTagName("body");

let timeout;

// Functions

function redirect(href) {
  window.location.href = href;
}

function load(href) {
  
  document.querySelector('body').style = "animation-name: unload;" + 
                                         "animation-duration: 0.5s;";
  
  timeout = setTimeout(redirect, 500, href);
  
}

function shortcut(key, altKey, href) {
  
  keyPressed = event.key == key || event.key == altKey
  
  current = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  
  if(keyPressed && href != current) window.location.href = href;
  
}

function expndOrClps(ID, bttnID) {
  
  sect = document.getElementById(ID);
  bttn = document.getElementById(bttnID);
  height = "" + (sect.scrollHeight + 100) + "px";
  
  if(sect.style.maxHeight ==  "0px") {
    
    sect.style.maxHeight = height;
    bttn.style.transform = "rotate(0deg)";
    
  }
  else {
    
    sect.style.maxHeight = "0px";
    bttn.style.transform = "rotate(270deg)";
    
  }
  
}

function expand(ID, bttnID) {
  
  sect = document.getElementById(ID);
  bttn = document.getElementById(bttnID);
  height = "" + (sect.scrollHeight + 100) + "px";
  
  sect.style.maxHeight = height;
  bttn.style.transform = "rotate(0deg)";
  
}

function collapse(ID, bttnID) {
  
  sect = document.getElementById(ID);
  bttn = document.getElementById(bttnID);
  height = "" + (sect.scrollHeight + 100) + "px";
  
  sect.style.maxHeight = "0px";
  bttn.style.transform = "rotate(270deg)";
  
}

function collapseAll() {
  
  let sections = document.getElementsByClassName('sect');
  let sectBttns = document.getElementsByClassName('sectBttn');
  
  for(let i = 0; i < sections.length; i++) {
    
    sections[i].style.maxHeight = "0px";
    sectBttns[i].style.transform = "rotate(270deg)";
    
  }
  
}

function expandAll() {
  
  let sections = document.getElementsByClassName('sect');
  let sectBttns = document.getElementsByClassName('sectBttn');
  
  for(let i = 0; i < sections.length; i++) {
    
    sections[i].style.maxHeight = "" + (sections[i].scrollHeight + 100) + "px";
    sectBttns[i].style.transform = "rotate(0deg)";
    
  }
  
}

// Set Elements

if(typeof headHTML !== 'undefined') for(let i = 0; i < head.length; i++) head[i].innerHTML += headHTML;

if(typeof bodyHTML !== 'undefined') for(let i = 0; i < body.length; i++) body[i].innerHTML += bodyHTML;

// Events

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('body').style = "animation-name: load;" +
                                         "animation-duration: 1s;";
  fun.load();
});

// Theme

let themeSheet = new CSSStyleSheet();
document.adoptedStyleSheets.push(themeSheet);

let themeStyleSheetStrings = {
  'default': `
body {
  color: rgb(0, 0, 0);
  background-color: rgb(224, 160, 244);
  background-image:
    linear-gradient(135deg, rgb(224, 192, 255), rgb(224, 128, 244)),
    linear-gradient(90deg, rgb(224, 192, 255), rgb(224, 128, 244));
}

table {
  color: rgb(0, 0, 0);
  background-color: rgb(224, 224, 224);
}

a {color: rgb(0, 96, 0);}
a:hover {color: rgb(0, 128, 0);}
  `,
  'dark': `
body {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  background-image: 
    linear-gradient(135deg, rgb(0, 0, 0) 20%, rgb(0, 0, 32), rgb(32, 0, 32)),
    linear-gradient(90deg, rgb(0, 0, 0) 20%, rgb(0, 0, 32), rgb(32, 0, 32));
}

table {
  color: rgb(225, 225, 225);
  background-color: rgb(32, 32, 32) !important;
}

a {color: rgb(64, 192, 64);}
a:hover {color: rgb(64, 240, 64);}
  `,
  'light': `
body {
  color: rgb(0, 0, 0);
  background-color: rgb(240, 240, 240);
  background-image: 
    linear-gradient(135deg, rgb(240, 240, 240) 20%, rgb(255, 255, 240), rgb(255, 240, 240)),
    linear-gradient(90deg, rgb(240, 240, 240) 20%, rgb(255, 255, 240), rgb(255, 240, 240));
}

table {
  color: rgb(0, 0, 0);
  background-color: rgb(224, 224, 224);
}

a {color: rgb(0, 96, 0);}
a:hover {color: rgb(0, 128, 0);}
  `,
    'pride': `
body {
  color: rgb(0, 0, 0);
  background-color: rgb(240, 240, 240);
  background-image: 
    linear-gradient(135deg,
      rgb(255, 255, 255),
      rgb(255, 240, 240),
      rgb(240, 240, 255),
      rgb(240, 224, 224),
      rgb(224, 224, 224),
      rgb(255, 224, 224),
      rgb(255, 240, 224),
      rgb(255, 255, 224),
      rgb(224, 255, 224),
      rgb(224, 224, 255),
      rgb(240, 224, 255)
    ),
    linear-gradient(90deg,
      rgb(255, 255, 255),
      rgb(255, 240, 240),
      rgb(240, 240, 255),
      rgb(240, 224, 224),
      rgb(224, 224, 224),
      rgb(255, 224, 224),
      rgb(255, 240, 224),
      rgb(255, 255, 224),
      rgb(224, 255, 224),
      rgb(224, 224, 255),
      rgb(240, 224, 255)
    );
}

table {
  color: rgb(0, 0, 0);
  background-color: rgb(224, 224, 224);
}

a {color: rgb(0, 96, 0);}
a:hover {color: rgb(0, 128, 0);}
  `
};

function updateTheme() {
  
  let theme = localStorage.getItem('theme');
  
  themeSheet.replace(
    themeStyleSheetStrings[theme]
  );
  
}

function nextTheme(add) {
  
  // Variables
  
  let themeKeys = Object.keys(themeStyleSheetStrings);
  
  let currentTheme = localStorage.getItem('theme');
  let currentPos = themeKeys.indexOf(currentTheme);
  if(currentPos == -1) currentPos = 0;
  
  let themeButton = document.getElementById('themeButton');
  
  // Update Theme
  
  currentPos = (currentPos + add) % themeKeys.length;
  
  try {
    localStorage.setItem('theme', themeKeys[currentPos]);
    themeButton.innerText = '◪';
  }
  catch {
    themeButton.innerText = '⚠️';
    themeButton.title = 'localStorage Quota Full!';
    return
  }
  
  updateTheme();
  
  // Update themeButton Title
  
  let titleStr = 'Change Theme:\n';
  
  for(let i = 0; i < themeKeys.length; i++) {
    
    if(i == currentPos) titleStr += '✅ ';
    else titleStr += '⚫ ';
    
    titleStr += themeKeys[i] + '\n';
    
  }
  
  themeButton.title = titleStr;
  
}

updateTheme();

setTimeout(nextTheme, 10, 0);

// Warning

let warning = {}; // Declare warning object

async function loadWarning(warningJSONPath = '../../warning.json') {
  // Get data from 'warning.json'
  
  let file = await fetch(warningJSONPath); // Fetch
  
  if(!file.ok) {
    throw new Error('Warning Fetch Response: ' + response.statusText); // Throw Error
  }
  
  let fileObj = await file.json(); // Get JSON object
  
  for(const key in fileObj) warning[key] = fileObj[key]; // Set warning to JSON
  
  // Logic / Variables
  
  warning.show = false;
  const nowMS = Date.now(); // Current time in milliseconds
  let nextDates = [];
  
  for(const pattern of warning.repeatPatterns) { // All repeat patterns
    
    if(!pattern.active) continue; // Ignore if inactive
    
    // Push Date to nextDates
    
    nextDates.push({
      MS: warning.nextDatePattern(pattern, new Date(nowMS)).getTime(), // Date in MS
      note: pattern.note,
      dur: pattern.dur
    });
    
  }
  
  for(const setDate of warning.setDates) { // All set dates
    
    const MS = new Date(setDate.date).getTime();
    
    if(MS - nowMS > 0) { // Push Date to nextDates
      nextDates.push({
        MS: MS, // Date in MS
        note: setDate.note,
        dur: setDate.dur
      });
    }
    
  }
  
  nextDates = nextDates.sort(function(a, b){return b.MS - a.MS}); // Sort
  // Sorted such closest dates are iterated last (take final say)
  
  //console.log(nextDates);
  
  for(const date of nextDates) { // Each next date in order
    
    if(date.MS - nowMS > date.dur) continue; // Continue if out of range
    
    warning.show = true;
    warning.timeMS = date.MS;
    warning.note = date.note;
    
  }
  
  if(!warning.show) return; // Return if none in range
  
  // Other Declarations
  
  warning.expand = false;
  
  warning.container = document.createElement('div');
  warning.container.id = 'warnContainer';
  if(document.querySelector('#homeWarnContainer')) {
    document.querySelector('#homeWarnContainer').appendChild(warning.container);
  }
  else {
    document.querySelector('body').appendChild(warning.container);
  }
  
  warning.elem = document.createElement('div');
  warning.container.appendChild(warning.elem);
  warning.elem.className = 'warn';
  
  warning.cont = document.createElement('div');
  warning.elem.appendChild(warning.cont);
  
  warning.button = document.createElement('button');
  warning.elem.appendChild(warning.button);
  warning.button.onclick = warning.toggle;
  warning.button.innerHTML = '❗>';
  
  // Rendering
  
  warning.renderInterval = setInterval(warning.render, 100);
  
}

warning.render = function() { // Update warning
  
  let time = new Date(warning.timeMS).toString();
  
  let secondsTill = Math.floor((warning.timeMS - Date.now()) / 1000);
  let hours = Math.floor(secondsTill / (3600));
  secondsTill += - (hours * 3600)
  let minutes = Math.floor((secondsTill) / 60);
  secondsTill += - (minutes * 60);
  let seconds = Math.floor(secondsTill);
  
  let timeTill = '' + hours + ':';
  if(minutes < 10) timeTill += '0';
  timeTill += minutes + ':';
  if(seconds < 10) timeTill += '0';
  timeTill += seconds;
  
  warning.cont.innerHTML = '<b>Warning:</b><br>Effective: ' + time;
  warning.cont.innerHTML += '<br>In: ' + timeTill;
  if(warning.note != "") warning.cont.innerHTML += '<br>Reason: ' + warning.note;
  
};

warning.toggle = function() { // Toggle expand
  
  warning.expand = !warning.expand;
  
  if(warning.expand) {
    warning.cont.style.maxWidth = '80vw';
    warning.cont.style.maxHeight = '80vh';
    warning.button.innerHTML = '<'
    warning.elem.style.right = '0rem';
  }
  else {
    warning.cont.style.maxWidth = '0';
    warning.cont.style.maxHeight = '1rem';
    warning.button.innerHTML = '❗>';
    warning.elem.style.right = 'calc(100% - 0.5rem)';
  }
  
};

warning.nextDatePattern = function(pattern, now) {
  // Returns date that matches pattern & is directly after current time
  
  // Initial Time
  
  const recent = new Date(Date.now() - (24 * 60 * 60 * 1000));
  //console.log(recent);
  
  const nextDate = new Date(
    '' +
    recent.getFullYear() + '-' +
    (recent.getMonth() + 1) + '-' +
    recent.getDate() + ' ' +
    pattern.time[0] + ':' +
    pattern.time[1] + ':' +
    pattern.time[2] + ' ' +
    pattern.zone
  );
  
  // Match
  
  let match = false; // Matches
  let DoMMatch = false; // Day of Month Matches
  let DoWMatch = false; // Day of Week Matches
  
  for(let i = 0; true; i++) { // Loop
    
    if(i > 10000) { // Match too far out
      console.log('Could not find reasonable date for Warning Pattern: ');
      console.log(pattern);
      return new Date(0);
    }
    
    // Logic / Match
    
    DoMMatch = pattern.dayOfMonth == '*' || pattern.dayOfMonth == nextDate.getDate();
    DoWMatch = pattern.dayOfWeek == '*' || pattern.dayOfWeek == nextDate.getDay();
    
    match = DoMMatch && DoWMatch && now.getTime() < nextDate.getTime();
    
    //console.log(nextDate);
    //console.log(match);
    
    if(match) break;
    
    // Increment
    
    nextDate.setDate(nextDate.getDate() + 1);
    
  }
  
  return nextDate;
  
}

// Load default path, if 'warningPath' is not defined
if(typeof warningPath !== 'undefined') loadWarning(warningPath);
else loadWarning();

// :P

let fun = {}; // Fun object

fun.key = `
1 - Hello
2 - Spin
3 - Random
# - Repeated Random
4 - Random+
$ - Repeated Random+
5 - BG Color
6 - Toggle Explosions (Press 'b')
`;

fun.elems = []; // Effected elements
fun.trigger1 = '$'; // First trigger
fun.triggered1 = false;
fun.trigger2 = '@'; // Second trigger
fun.triggered2 = false;
fun.mouseX = 0; // Mouse Position
fun.mouseY = 0;

fun.load = function() { // Select effected elements
  fun.elems = document.querySelectorAll('body *');
}

fun.spinRotate = 0; // Initial degrees

fun.spinSheet = new CSSStyleSheet ();
fun.spinSheet.replace(`
body * {
  transition: rotate 5s linear;
}
`); // Spin Style Sheet

fun.spin = function() {
  
  console.log('Spin!'); // Log
  
  fun.spinRotate += 180; // Add 180 deg
  
  for(let i = 0; i < fun.elems.length; i++) { // For each element...
    fun.elems[i].style.rotate = '' + fun.spinRotate + 'deg'; // ...set style
  }
  
}

fun.randomScale = 100; // Max pixel movement
fun.randomFirst = true; // First call?

fun.randomSheet = new CSSStyleSheet ();
fun.randomSheet.replace(`
body * {
  position: relative;
  transition: left 2s linear, top 2s linear;
  left: 0;
  top: 0;
}
`); // Random Style Sheet

fun.random = function(first = false) {
  // first: Is first call, should set left and top to 0
  
  console.log('Random!'); // Log
  
  for(let i = 0; i < fun.elems.length; i++) { // For each element
    
    let elem = fun.elems[i]; // Element
    
    // Get Current
    
    let left = parseInt('0' + elem.style.left);
    let top = parseInt('0' + elem.style.top);
    
    // Add Random
    
    left += (Math.floor(Math.random() * fun.randomScale) * 2) - fun.randomScale;
    top += (Math.floor(Math.random() * fun.randomScale) * 2) - fun.randomScale;
    
    // First
    
    if(first) {
      left = 0;
      top = 0;
    }
    
    // Set Style
    
    elem.style.left = '' + left + 'px';
    elem.style.top = '' + top + 'px';
    
  }
  
}

fun.randomPlusScale = 100; // Max pixel movement
fun.randomPlusScaleDeg = 90; // Max degree movement
fun.randomPlusFirst = true; // First call?

fun.randomPlusSheet = new CSSStyleSheet ();
fun.randomPlusSheet.replace(`
body * {
  position: relative;
  transition: left 2s linear, top 2s linear, rotate 2s;
  left: 0;
  top: 0;
  rotate: 0;
}
`); // Random Plus Style Sheet

fun.randomPlus = function(first = false) {
  // first: Is first call, should set left and top to 0
  
  console.log('Random+!'); // Log
  
  for(let i = 0; i < fun.elems.length; i++) { // For each element
    
    let elem = fun.elems[i]; // Element
    
    // Get Current
    
    let left = parseInt('0' + elem.style.left);
    let top = parseInt('0' + elem.style.top);
    let rotate = parseInt('0' + elem.style.rotate);
    
    // Add Random
    
    left += (Math.floor(Math.random() * fun.randomPlusScale) * 2) - fun.randomPlusScale;
    top += (Math.floor(Math.random() * fun.randomPlusScale) * 2) - fun.randomPlusScale;
    rotate += (Math.floor(Math.random() * fun.randomPlusScaleDeg) * 2) - fun.randomPlusScaleDeg;
    
    // First
    
    if(first) {
      left = 0;
      top = 0;
      rotate = 0;
    }
    
    // Set Style
    
    elem.style.left = '' + left + 'px';
    elem.style.top = '' + top + 'px';
    elem.style.rotate = '' + rotate + 'deg';
    
  }
  
}

fun.BGColorDelay = 50; // Delay based on element

fun.BGColorSheet = new CSSStyleSheet ();
fun.BGColorSheet.replace(`
body * {
  transition: background-color 1s;
}
`); // BG Color Style Sheet

fun.BGColor = function() {
  
  console.log('BG Color'); // Log
  
  for(let i = 0; i < fun.elems.length; i++) { // For each color
    
    let elem = fun.elems[i]; // Element
    
    // Red
    
    setTimeout(() => {
      elem.style.backgroundColor = 'rgb(255,0,0)';
    }, i * fun.BGColorDelay);
    
    // Yellow
    
    setTimeout(() => {
      elem.style.backgroundColor = 'rgb(255,255,0)';
    }, 1000 + i * fun.BGColorDelay);
    
    // Green
    
    setTimeout(() => {
      elem.style.backgroundColor = 'rgb(0,255,0)';
    }, 2000 + i * fun.BGColorDelay);
    
    // Cyan
    
    setTimeout(() => {
      elem.style.backgroundColor = 'rgb(0,255,255)';
    }, 3000 + i * fun.BGColorDelay);
    
    // Blue
    
    setTimeout(() => {
      elem.style.backgroundColor = 'rgb(0,0,255)';
    }, 4000 + i * fun.BGColorDelay);
    
    // Blue
    
    setTimeout(() => {
      elem.style.backgroundColor = 'rgb(255,0,255)';
    }, 5000 + i * fun.BGColorDelay);
    
  }
  
}

fun.explosionActive = false; // Whether it active
fun.explosionShakeScale = 4; // Max pixel movement
fun.explosionShakeScaleDeg = 0; // Max degree movement
fun.explosionSheet = new CSSStyleSheet ();
fun.explosionSheet.replace(`
body * {
  position: relative;
  transition: left 0.1s linear, top 0.1s linear, rotate 0.1s;
  left: 0;
  top: 0;
  rotate: 0;
}
`); // Explosion Style Sheet

fun.explosionStart = function() {
  console.log('Explosion Start'); // Log
  
  for(let i = 0; i < fun.elems.length; i++) { // For each element
    
    let elem = fun.elems[i]; // Element
    
    // Initial Values
    
    let left = 0;
    let top = 0;
    let rotate = 0;
    
    // Set Style
    
    elem.style.left = '' + left + 'px';
    elem.style.top = '' + top + 'px';
    elem.style.rotate = '' + rotate + 'deg';
    
  }
  
}

fun.explosionShake = function(reset = false) {
  
  for(let i = 0; i < fun.elems.length; i++) { // For each element
    
    let elem = fun.elems[i]; // Element
    
    // Get Current
    
    let left = parseInt('0' + elem.style.left);
    let top = parseInt('0' + elem.style.top);
    let rotate = parseInt('0' + elem.style.rotate);
    
    // Add Random
    
    left += (Math.floor(Math.random() * fun.explosionShakeScale) * 2) - fun.explosionShakeScale;
    top += (Math.floor(Math.random() * fun.explosionShakeScale) * 2) - fun.explosionShakeScale;
    rotate += (Math.floor(Math.random() * fun.explosionShakeScaleDeg) * 2) - fun.explosionShakeScaleDeg;
    
    // Reset
    
    if(reset) {
      left = 0;
      top = 0;
      rotate = 0;
    }
    
    // Set Style
    
    elem.style.left = '' + left + 'px';
    elem.style.top = '' + top + 'px';
    elem.style.rotate = '' + rotate + 'deg';
    
  }
  
}

fun.explosion = function(xPos, yPos) {
  // first: Is first call, should set left and top to 0
  
  console.log('Explosion at: (' + xPos + ', ' + yPos + ')!'); // Log
  
  // Play Audio
  
  let rootDir = window.location.href.search('project') < 0; // Whether we are on the homepage
  //console.log('Homepage: ' + rootDir);
  
  let boom; // Boom audio
  let boomFile = 'assets/audio/boom.mp3'; // File Path
  if(Math.random() < 0.1) boomFile = 'assets/audio/meow.mp3'; // Goofy Boom (Rare)
  
  if(rootDir) boom = new Audio(boomFile);
  else boom = new Audio('../../' + boomFile);
  boom.play();
  
  // Create Explosion
  
  let explosionMarkElem = document.createElement('div'); // Soot mark
  explosionMarkElem.style = `
    position: absolute;
    overflow: hidden;
    z-index: -1;
    
    background-image: radial-gradient(circle, rgba(64, 64, 64, 1), rgba(64, 64, 64, 0) 50%);
    color: rgb(64, 64, 64);
    opacity: 0;
    
    width: 16rem;
    height: 16rem;
    border-radius: 8rem;
    
    line-height: 16rem;
    text-align: center;
    font-size: 8rem;
    
    transition: opacity 1s;
  `;
  explosionMarkElem.style.left = 'calc(' + xPos + 'px - 8rem)';
  explosionMarkElem.style.top = 'calc(' + yPos + 'px - 8rem)';
  explosionMarkElem.innerHTML = '✶'
  explosionMarkElem.style.rotate = '' + (Math.random() * 360) + 'deg';
  document.querySelector('body').appendChild(explosionMarkElem);
  window.setTimeout(() => { // Appear after later
    explosionMarkElem.style.opacity = '1';
  }, 500);
  
  let explosionFlashElem = document.createElement('div'); // Flash
  explosionFlashElem.style = `
    position: absolute;
    overflow: hidden;
    z-index: 1000;
    
    background-color: rgb(255, 255, 255);
    opacity: 0.5;
    
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    
    transition: transform 1s, opacity 1s;
  `;
  explosionFlashElem.style.left = 'calc(' + xPos + 'px - 0.5rem)';
  explosionFlashElem.style.top = 'calc(' + yPos + 'px - 0.5rem)';
  document.querySelector('body').appendChild(explosionFlashElem);
  window.setTimeout(() => { // Animation
    explosionFlashElem.style.transform = 'scale(1000)';
    explosionFlashElem.style.opacity = '0';
  }, 100);
  window.setTimeout(() => { // Remove
    explosionFlashElem.remove();
  }, 1500);
  
  let explosionSmokeElem = document.createElement('div'); // Smoke
  explosionSmokeElem.style = `
    position: absolute;
    overflow: hidden;
    
    background-color: rgb(255, 128, 0);
    opacity: 0.5;
    
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    
    transition-timing-function: ease-out;
    transition: background-color 3s, transform 3s, opacity 3s;
  `;
  explosionSmokeElem.style.left = 'calc(' + xPos + 'px - 0.5rem)';
  explosionSmokeElem.style.top = 'calc(' + yPos + 'px - 0.5rem)';
  document.querySelector('body').appendChild(explosionSmokeElem);
  window.setTimeout(() => { // Animation
    explosionSmokeElem.style.transform = 'scale(40)';
    explosionSmokeElem.style.opacity = '0';
    explosionSmokeElem.style.backgroundColor = 'rgb(0, 0, 0)';
  }, 100);
  window.setTimeout(() => { // Remove
    explosionSmokeElem.remove();
  }, 3500);
  
  let explosionEmojiElem = document.createElement('div'); // Emoji
  explosionEmojiElem.style = `
    position: absolute;
    overflow: hidden;
    
    opacity: 1;
    
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    rotate: 0deg;
    
    line-height: 4rem;
    text-align: center;
    font-size: 1rem;
    
    transition-timing-function: ease-out;
    transition: transform 3s, opacity 3s, rotate 3s;
  `;
  explosionEmojiElem.style.left = 'calc(' + xPos + 'px - 2rem)';
  explosionEmojiElem.style.top = 'calc(' + yPos + 'px - 2rem)';
  explosionEmojiElem.innerHTML = '💥'
  document.querySelector('body').appendChild(explosionEmojiElem);
  window.setTimeout(() => { // Animation
    explosionEmojiElem.style.transform = 'scale(20)';
    explosionEmojiElem.style.opacity = '0';
    explosionEmojiElem.style.rotate = '' + (Math.random() * 720 - 360) + 'deg';
  }, 100);
  window.setTimeout(() => { // Remove
    explosionEmojiElem.remove();
  }, 3500);
  
}

document.addEventListener('keypress', function() {
  
  // h - Key/Help!
  
  if(event.key == 'h' && fun.triggered2) {
    
    window.alert(fun.key);
    
  }
  
  // 1 - Hello!
  
  if(event.key == '1' && fun.triggered2) {
    
    window.alert('Hello!\nTry pressing "$@" with different numbers :P\n"$@h" for key');
    
  }
  
  // 2 - Spin
  
  if(event.key == '2' && fun.triggered2) {
    
    document.adoptedStyleSheets.push(fun.spinSheet); // Add style sheet
    
    fun.spin(); // First 180
    window.setTimeout(fun.spin, 5 * 1000); // Last 180
    
    window.setTimeout(() => {
        fun.spinRunning = false; // Allow next trigger
        document.adoptedStyleSheets.pop(fun.spinSheet); // Remove style sheet
    }, 5 * 1000 * 2);
    
  }
  
  // 3 - Random
  
  if(event.key == '3' && fun.triggered2) {
    
    document.adoptedStyleSheets.push(fun.randomSheet); // Add style sheet
    
    if(fun.randomFirst) fun.random(true); // First call
    
    window.setTimeout(fun.random, 100); // Call
    
  }
  
  // 3 & Shift (#) - Repeated Random
  
  if(event.key == '#' && fun.triggered2) {
    
    document.adoptedStyleSheets.push(fun.randomSheet); // Add style sheet
    
    fun.random(true); // First call
    
    window.setInterval(fun.random, 2 * 1000); // Call
    
  }
  
  // 4 - Random+
  
  if(event.key == '4' && fun.triggered2) {
    
    document.adoptedStyleSheets.push(fun.randomPlusSheet); // Add style sheet
    
    if(fun.randomPlusFirst) fun.randomPlus(true); // First call
    
    window.setTimeout(fun.randomPlus, 100); // Call
    
  }
  
  // 4 & Shift ($) - Repeated Random+
  
  if(event.key == '$' && fun.triggered2) {
    
    document.adoptedStyleSheets.push(fun.randomPlusSheet); // Add style sheet
    
    fun.randomPlus(true); // First call
    
    window.setInterval(fun.randomPlus, 2 * 1000); // Call
    
  }
  
  // 5 - BG Color
  
  if(event.key == '5' && fun.triggered2) {
    
    document.adoptedStyleSheets.push(fun.BGColorSheet); // Add style sheet
    
    fun.BGColor(); // First call
    
    window.setInterval(fun.BGColor, 6 * 1000); // Repeated Call
    
  }
  
  // 6 - Explosions
  
  if(event.key == '6' && fun.triggered2) { // Setup
    
    document.adoptedStyleSheets.push(fun.randomPlusSheet); // Add style sheet
    
    fun.explosionActive = !fun.explosionActive; // Activate
    
    console.log('Explosions Active: ' + fun.explosionActive); // Log
    
    if(fun.explosionActive) fun.explosionStart(); // Start
    
  }
  
  if(event.key == 'b' && fun.explosionActive) { // Explosion
    
    fun.explosion(fun.mouseX, fun.mouseY); // Call
    
    // Shake
    
    let shakeInterval = window.setInterval(fun.explosionShake, 100); // Shake
    window.setTimeout(() => {
      clearInterval(shakeInterval);
      fun.explosionShake(true);
    }, 1000); // Stop
    
  }
  
  // Trigger 2
  
  if(event.key == fun.trigger2 && fun.triggered1) fun.triggered2 = true;
  else fun.triggered2 = false;
  
  // Trigger 1
  
  if(event.key == fun.trigger1) fun.triggered1 = true;
  else fun.triggered1 = false;
  
});

document.addEventListener('mousemove', function() {
  
  if(fun.explosionActive) {
    fun.mouseX = event.pageX;
    fun.mouseY = event.pageY;
  }
  
});
