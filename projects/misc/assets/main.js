// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  
  <div class="navigation">
    
    <a class="nav" title="W/w" href="./">Home</a>
    
  </div>
  
  `;

const chapters = ['poems.html', 'null.html'];

const chapterNames = ['Poems', '████'];

for(let i = 0; i < chapterNames.length; i++) chapterNames[i] = (i + 1) + ' | ' + chapterNames[i];

// Events

document.addEventListener('keypress', function() {
  shortcut("w", "W", "./");
});
