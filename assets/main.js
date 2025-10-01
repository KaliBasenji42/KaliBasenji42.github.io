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

// Set Elements

for(let i = 0; i < head.length; i++) head[i].innerHTML += headHTML;

for(let i = 0; i < body.length; i++) body[i].innerHTML += bodyHTML;

// Events

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('body').style = "animation-name: load;" +
                                         "animation-duration: 1s;";
  loadSpin();
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
  
  localStorage.setItem('theme', themeKeys[currentPos]);
  
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

// Restart Warning

let restartTimeMS;
let restartNote = '';
let restartWarningElem;
let restartWarningCont
let restartWarningMinButton;
let restartWarningShow = false;

function updateRestartWarning() {

  let time = new Date(restartTimeMS).toString();
  
  let secondsTill = Math.floor((restartTimeMS - Date.now()) / 1000);
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
  
  restartWarningCont.innerHTML = 'Server will restart/be down:<br>' + time;
  restartWarningCont.innerHTML += '<br>in ' + timeTill;
  if(restartNote) restartWarningCont.innerHTML += '<br>Note: ' + restartNote;
  
}

function restartWarningToggleShow() {
  
  restartWarningShow = !restartWarningShow;
  
  if(restartWarningShow) {
    restartWarningCont.style.maxWidth = '80vw';
    restartWarningCont.style.maxHeight = '80vh';
    restartWarningMinButton.innerHTML = '<';
  }
  else {
    restartWarningCont.style.maxWidth = '0';
    restartWarningCont.style.maxHeight = '1rem';
    restartWarningMinButton.innerHTML = '❗>';
  }
  
}

async function restartWarning() {
  
  let file = await fetch('../../restartT.txt');
  
  if(!file.ok) return // Return if error
  
  let text = await file.text();
  text = text.split('\n');
  //console.log(text.split('\n'));
  
  if(text[0][0] == '!') return // Return if empty
  
  restartTimeMS = parseInt(text[0]);
  //console.log(restartTimeMS);
  
  restartNote = text[1];
  //console.log(restartNote);
  
  restartWarningElem = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(restartWarningElem);
  restartWarningElem.className = 'restartWarn';
  
  restartWarningCont = document.createElement('div');
  restartWarningElem.appendChild(restartWarningCont);
  
  restartWarningMinButton = document.createElement('button');
  restartWarningElem.appendChild(restartWarningMinButton);
  restartWarningMinButton.onclick = restartWarningToggleShow;
  restartWarningMinButton.innerHTML = '❗>';
  
  updateRestartWarning();
  let updateRestartWarningInt = setInterval(updateRestartWarning, 100);
  
}

restartWarning();

// :P

document.addEventListener('keypress', function() {
  let key = event.keyCode || event.charCode;
  if(key == 33) window.alert('Hello!');
});

let elems = [];
let rotate = 0;
let run = true;
let trigger = '@';

function loadSpin(){
  elems = document.getElementsByTagName('*');
}

function spin() {
  rotate += 180;
  
  for(let i = 0; i < elems.length; i ++) elems[i].style.rotate = '' + rotate + 'deg';
}

document.addEventListener('keypress', function() {
    if(event.key == trigger && run) {
        run = false;
        spin();
        window.setTimeout(spin, 5 * 1000);
        window.setTimeout(function runTrue(){
            run = true;
        }, 5 * 1000 * 2);
    }
});
