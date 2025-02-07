// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  
  <div class="navigation">
    
    <a class="nav" title="W/w" href="./">Home</a>
    
  </div>
  
  `;

const chapters = ['1.html', '2.html', '3.html', '4.html', '5.html', 'reflect.html'];

const chapterNames = ['BSA', 'PC', 'Backpacking', 'Nuclear & Quantum', 'Coding', 'Reflection'];

for(let i = 0; i < chapterNames.length; i++) chapterNames[i] = (i + 1) + ' | ' + chapterNames[i];

// Events

document.addEventListener('keypress', function() {
  shortcut("w", "W", "./");
});
