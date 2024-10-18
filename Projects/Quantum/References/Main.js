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
    
    <a class="nav" title="W/w" href="index.html">Home</a>
    
  </div>
  
  `;

const chapters = ['Particles.html', 'Quarks.html', 'Electrons.html', 'Neutrinos.html', 'Higgs.html', 'Forces.html', 'Strong.html', 'Weak.html', 'EM.html', 'Gravity.html', 'String.html', 'Entanglement.html', 'Collapse.html'];

const chapterNames = ['Particles', 'Quarks', 'Electrons', 'Neutrinos', 'Higgs', 'Forces', 'Strong Nuclear Force', 'Weak Nuclear Force', 'Electromagnetic Force', 'Gravity', 'String Theory', 'Entanglement', 'Collapse']

// Functions

// Events

document.addEventListener('keypress', function() {
  shortcut("w", "W", "index.html");
});

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style = "animation-name: load;" + 
                                         "animation-duration: 0.75s;";
  loadSpin();
});
