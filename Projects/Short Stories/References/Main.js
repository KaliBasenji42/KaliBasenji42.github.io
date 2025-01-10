// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  
  <div class="navigation">
    
    <a class="nav" title="Q/q" href="index.html">Home</a>
    <a class="nav" title="E/e" href="Ideas.html">Ideas</a>
    
  </div>
  
  `;

const chapters = ['1.html'];

const chapterNames = ['&#9608&#9608&#9608&#9608'];

for(let i = 0; i < chapterNames.length; i++) chapterNames[i] = chapterNames[i] + ' | ' + 'Short Story ' + (i + 1);

// Events

document.addEventListener('keypress', function() {
  shortcut("q", "Q", "index.html");
  shortcut("e", "E", "Ideas.html");
});
