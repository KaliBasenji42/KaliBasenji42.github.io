// Variables and Constants

const headHTML = `
  <meta charset = "utf-8">
  <meta name = "viewport" content = "width=device-width">
  <link href = "References/MainStyle.css" rel = "stylesheet" type = "text/css" />
  <link rel = "icon" href = "References/Icon.png">
  `;

const bodyHTML = `
  
  <div class="navigation">
    
    <a class="nav" title="Q/q" href="index.html">Home</a>
    <a class="nav" title="W/w" href="TOC.html">Table of Contents</a>
    <a class="nav" title="E/e" href="Notes.html">Story Notes</a>
    
  </div>
  
  `;

const head = document.getElementsByTagName("head");

const body = document.getElementsByTagName("body");

const chapters = ['1.html', '2.html', '3.html'];

let chapter = 0;

let timeout;

for(i = 0; i < chapters.length; i++) {
  
  let current = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  
  if(chapters[i] == current) chapter = i;
  
}

// Functions

function createNavArrows() {
  
  let prevIndex = chapter - 1;
  let nextIndex = chapter + 1;
  
  let first = '<a class="navArrow" title="First (A)" href="' + chapters[0] + '">&#10913</a>'
  let prev = '<a class="navArrow" title="Prev (a)" href="' + chapters[prevIndex] + '"><</a>'
  let next = '<a class="navArrow" title="Next (d)" href="' + chapters[nextIndex] + '">></a>'
  let last = '<a class="navArrow" title="Last (D)" href="' + chapters[chapters.length - 1] + '">&#10914</a>'
  
  if(prevIndex < 0) {
    first = '<div class="navArrow" title="[First Page]">&#10913</div>';
    prev = '<div class="navArrow" title="[First Page]"><</div>';
  }
  
  if(nextIndex >= chapters.length) {
    next = '<div class="navArrow" title="[Last Page]">></div>';
    last = '<div class="navArrow" title="[Last Page]">&#10914</div>';
  }
  
  let HTMLStr = '<div class="navigation">' + first + prev + next + last + '</div>';
  
  for(let i = 0; i < body.length; i++) {
    body[i].innerHTML += HTMLStr;
  }
  
  document.addEventListener('keypress', function() {
    if(event.key == "a" && chapter > 0) window.location = chapters[prevIndex];
    if(event.key == "d" && chapter < chapters.length - 1) window.location = chapters[nextIndex];
  });
  
}

function TOCList() {
  
  let HTMLStr = '<ul>';
  
  for(let i = 0; i < chapters.length; i++) {
    HTMLStr += '<li><a href="' + chapters[i] + '">Chapter ' + (i + 1) + '</li>';
  }
  
  HTMLStr += '</ul>';
  
  for(let i = 0; i < body.length; i++) {
    body[i].innerHTML += HTMLStr;
  }
  
}

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

function expndOrClps(ID, bttnID) {
  
  sect = document.getElementById(ID);
  bttn = document.getElementById(bttnID);
  height = "" + (sect.scrollHeight + 100) + "px";
  
  if (sect.style.maxHeight ==  height || sect.style.maxHeight == "") {
    
    sect.style.maxHeight = "0px";
    bttn.style.transform = "rotate(270deg)";
    
  }
  else {
    
    sect.style.maxHeight = height;
    bttn.style.transform = "rotate(0deg)";
    
  }
  
}

function remove(arrayA, arrayB){
  
  out = []

  let add = true;

  for(let a = 0; a < arrayA.length; a++){
    
    add = true;
    
    for(let b = 0; b < arrayB.length; b++) if(arrayA[a] == arrayB[b]) add = false;
    
    if(add) out.push(arrayA[a]);
    
  }
  
  return out;
  
}

// Set Elements

for(let i = 0; i < head.length; i++) head[i].innerHTML += headHTML + '<title>Chapter ' + (chapter + 1) + ' - Fatal Error / System Restarting</title>';

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
});

// :P

document.addEventListener('keypress', function() {
  let key = event.keyCode || event.charCode;
  if(key == 33) window.alert('Hello!');
});

let elems = document.getElementsByTagName('body')[0].children;
let rotate = 0;
let run = true;
let trigger = '@';
let time = 5;

for(let i = 0; i < elems.length; i ++) {
    elems[i].style.transition = 'rotate ' + time + 's linear';
}

function animate() {
    rotate += 180;
    
    for(let i = 0; i < elems.length; i ++) {
        elems[i].style.rotate = '' + rotate + 'deg';
    }
}

document.addEventListener('keypress', function() {
    if(event.key == trigger && run) {
        run = false;
        animate();
        window.setTimeout(animate, time * 1000);
        window.setTimeout(function runTrue(){
            run = true;
        }, time * 1000 * 2);
    }
});
