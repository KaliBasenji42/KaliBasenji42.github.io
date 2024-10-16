// Variables and Constants

const headHTML = `
  <meta charset = "utf-8">
  <meta name = "viewport" content = "width=device-width">
  <link href = "References/MainStyle.css" rel = "stylesheet" type = "text/css" />
  <link rel = "icon" href = "References/Icon.png">
  `;

const bodyHTML = `
  
  `;

const head = document.getElementsByTagName("head");

const body = document.getElementsByTagName("body");

let timeout;

// Functions

function delay(millis) {
  
  let now = Date.now();
  let end = Date.now() + millis;
  
  while(now < end) now = Date.now();
  
}

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

// Set Elements

for(let i = 0; i < head.length; i++) head[i].innerHTML += headHTML;

for(let i = 0; i < body.length; i++) body[i].innerHTML += bodyHTML;

// Events

document.addEventListener('keypress', function() {
  shortcut("q", "Q", "index.html");
  shortcut("w", "W", "TOC.html");
  shortcut("e", "E", "Notes.html");
  shortcut("A", "A", chapters[0]);
  shortcut("D", "D", chapters[chapters.length - 1]);
});

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style = "animation-name: load;" + 
                                         "animation-duration: 0.75s;";
  loadSpin();
});

// :P

document.addEventListener('keypress', function() {
  let key = event.keyCode || event.charCode;
  if(key == 33) window.alert('Hello!');
});

let elems = [];
let rotate = 0;
let run = true;
let trigger = '@';
let time = 5;

function loadSpin(){
  elems = document.getElementsByTagName('*');
  
  for(let i = 0; i < elems.length; i ++) elems[i].style.transition = 'rotate ' + time + 's linear';
}

function spin() {
  rotate += 180;
  
  for(let i = 0; i < elems.length; i ++) elems[i].style.rotate = '' + rotate + 'deg';
}

document.addEventListener('keypress', function() {
    if(event.key == trigger && run) {
        run = false;
        spin();
        window.setTimeout(spin, time * 1000);
        window.setTimeout(function runTrue(){
            run = true;
        }, time * 1000 * 2);
    }
});
