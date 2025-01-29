// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  
  <div class="navigation">
    
    <a class="nav" title="W/w" href="./">Home</a>
    
  </div>
  
  `;

const chapters = ['Particles.html', 'Quarks.html', 'Electrons.html', 'Neutrinos.html', 'Higgs.html', 'Forces.html', 'Strong.html', 'Weak.html', 'EM.html', 'Gravity.html', 'String.html', 'Entanglement.html', 'Collapse.html'];

const chapterNames = ['Particles', 'Quarks', 'Electrons', 'Neutrinos', 'Higgs', 'Forces', 'Strong Nuclear Force', 'Weak Nuclear Force', 'Electromagnetic Force', 'Gravity', 'String Theory', 'Entanglement', 'Collapse']

// Functions

// Events

document.addEventListener('keypress', function() {
  shortcut("w", "W", "./");
});
