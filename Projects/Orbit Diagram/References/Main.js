// Variables and Constants

const headHTML = `
  <meta charset = "utf-8">
  <meta name = "viewport" content = "width=device-width">
  <link href = "../../Global Ref/MainStyle.css" rel = "stylesheet" type = "text/css" />
  <link href = "References/MainStyle.css" rel = "stylesheet" type = "text/css" />
  <link rel = "icon" href = "References/Icon.png">
  `;

const bodyHTML = `
  
  `;

// Functions

// Events

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style = "animation-name: load;" + 
                                         "animation-duration: 0.75s;";
  loadSpin();
});
