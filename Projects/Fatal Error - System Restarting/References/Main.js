// Variables and Constants

const headHTML = `
  <meta charset = "utf-8">
  <meta name = "viewport" content = "width=device-width">
  <link href = "../../Global Ref/MainStyle.css" rel = "stylesheet" type = "text/css" />
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

const chapters = ['1.html', '2.html', '3.html'];

const chapterNames = [];

for(let i = 0; i < chapters.length; i++) chapterNames.push('Chapter ' + (i + 1) + ' - Fatal Error / System Restarting');

// Events

document.addEventListener('keypress', function() {
  shortcut("q", "Q", "index.html");
  shortcut("w", "W", "TOC.html");
  shortcut("e", "E", "Notes.html");
});

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style = "animation-name: load;" + 
                                         "animation-duration: 0.75s;";
  loadSpin();
});
