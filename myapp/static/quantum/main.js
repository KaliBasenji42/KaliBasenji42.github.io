// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  
  <div class="navigation">
    
    <a class="nav" title="W/w" href="./">Home</a>
    
  </div>
  
  `;

const chapters = ['particles.html', 'quarks.html', 'electrons.html', 'neutrinos.html', 'higgs.html', 'forces.html', 'strong.html', 'weak.html', 'EM.html', 'gravity.html', 'string.html', 'entanglement.html', 'collapse.html'];

const chapterNames = ['Particles', 'Quarks', 'Electrons', 'Neutrinos', 'Higgs', 'Forces', 'Strong Nuclear Force', 'Weak Nuclear Force', 'Electromagnetic Force', 'Gravity', 'String Theory', 'Entanglement', 'Collapse']

// Functions

// Events

document.addEventListener('keypress', function() {
  shortcut("w", "W", "./");
});
