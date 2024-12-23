// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  
  <div class="navigation">
    
    <a class="nav" title="Q/q" href="index.html">Home</a>
    <a class="nav" title="W/w" href="TOC.html">Table of Contents</a>
    <a class="nav" title="E/e" href="Ideas.html">Ideas</a>
    
  </div>
  
  `;

const chapters = ['1.html'];

const chapterNames = ['&#9608&#9608&#9608&#9608'];

for(let i = 0; i < chapters.length; i++) chapterNames.push('Story ' + (i + 1) + ' | ' + chapterNames[i]);

// Events

document.addEventListener('keypress', function() {
  shortcut("q", "Q", "index.html");
  shortcut("w", "W", "TOC.html");
  shortcut("e", "E", "Ideas.html");
});
