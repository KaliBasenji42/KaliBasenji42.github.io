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
  background-image: none;
  background-image: 
    linear-gradient(135deg, rgb(0, 0, 0) 60%, rgb(0, 0, 16), rgb(16, 0, 16)),
    linear-gradient(90deg, rgb(0, 0, 0) 60%, rgb(0, 0, 16), rgb(16, 0, 16));
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
  background-color: rgb(224, 224, 224);
  background-image: 
    linear-gradient(135deg, rgb(224, 224, 224) 60%, rgb(232, 232, 224), rgb(232, 224, 224)),
    linear-gradient(90deg, rgb(224, 224, 224) 60%, rgb(232, 232, 224), rgb(232, 224, 224));
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
  
  //console.log(nextDates);
  
  for(const date of nextDates) { // Each next date in order
    
    if(date.MS - nowMS > date.dur) continue; // Continue if out of range
    
    warning.show = true;
    warning.timeMS = date.MS;
    warning.note = date.note;
    
  }
  
  if(!warning.show) return; // Return if none shown
  
  // Other Declarations
  
  warning.expand = false;
  
  warning.elem = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(warning.elem);
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
  
  warning.cont.innerHTML = 'Warning for:<br>' + time;
  warning.cont.innerHTML += '<br>in ' + timeTill;
  if(warning.note != "") warning.cont.innerHTML += '<br>Note: ' + warning.note;
  
};

warning.toggle = function() { // Toggle expand
  
  warning.expand = !warning.expand;
  
  if(warning.expand) {
    warning.cont.style.maxWidth = '80vw';
    warning.cont.style.maxHeight = '80vh';
    warning.button.innerHTML = '<';
  }
  else {
    warning.cont.style.maxWidth = '0';
    warning.cont.style.maxHeight = '1rem';
    warning.button.innerHTML = '❗>';
  }
  
};

warning.nextDatePattern = function(pattern, now) {
  // Returns date that matches pattern & is directly after to now
  
  // Initial Time
  
  const nextDate = new Date(now.getTime());
  
  nextDate.setHours(pattern.time[0]);
  nextDate.setMinutes(pattern.time[1]);
  nextDate.setSeconds(pattern.time[2]);
  
  // Match
  
  let match = false;
  let DoMMatch = false;
  let DoWMatch = false;
  
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

let fun = {};

fun.elems = [];
fun.trigger1 = '$';
fun.triggered1 = false;
fun.trigger2 = '@';
fun.triggered2 = false;

fun.load = function() {
  fun.elems = document.querySelectorAll('body *');
}

fun.spinRotate = 0;
fun.spinRun = true;

fun.spin = function() {
  console.log('Spin!');
  
  fun.spinRotate += 180;
  
  for(let i = 0; i < fun.elems.length; i++) fun.elems[i].style.rotate = '' + fun.spinRotate + 'deg';
}

fun.random = function() {
  console.log('Random!');
  console.log('WIP :/');
  /*
  for(let i = 0; i < fun.elems.length; i++) {
    let elem = fun.elems[i];
    let rect = elem.getBoundingClientRect();
    
    if(rect) {
      console.log(rect.top);
      elem.style.top = '' + rect.top + 'px';
    }
    
    elem.style.position = 'fixed';
  }*/
}

document.addEventListener('keypress', function() {
  
  // 1 - Hello!
  
  if(event.key == '1' && fun.triggered2) {
    window.alert('Hello!');
  }
  
  // 2 - Spin
  
  if(event.key == '2' && fun.triggered2 && fun.spinRun) {
    fun.spinRun = false;
    fun.spin();
    window.setTimeout(fun.spin, 5 * 1000);
    window.setTimeout(function runTrue(){
        fun.spinRun = true;
    }, 5 * 1000 * 2);
  }
  
  // 3 - Random
  
  if(event.key == '3' && fun.triggered2) {
    fun.random();
  }
  
  // Trigger 2
  
  if(event.key == fun.trigger2 && fun.triggered1) fun.triggered2 = true;
  else fun.triggered2 = false;
  
  // Trigger 1
  
  if(event.key == fun.trigger1) fun.triggered1 = true;
  else fun.triggered1 = false;
  
});
