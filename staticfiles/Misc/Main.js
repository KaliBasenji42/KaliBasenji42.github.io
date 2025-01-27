// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  
  <div class="navigation">
    
    <a class="nav" title="Q/q" href="index.html">Home</a>
    
  </div>
  
  `;

const chapters = ['Start.html', 'Eureka.html'];

const chapterNames = ['Fire', 'Publication ██42'];

for(let i = 0; i < chapterNames.length; i++) chapterNames[i] = (i + 1) + ' | ' + chapterNames[i];

// Events

document.addEventListener('keypress', function() {
  shortcut("q", "Q", "index.html");
  shortcut("e", "E", "Ideas.html");
});
