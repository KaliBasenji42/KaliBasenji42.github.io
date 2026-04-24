// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `  
  `;

let zoomElem; // Zoom element
let zoomImg; // Zoom image
let zoomLink; // Zoom link

// Functions

function zoom(URL) { // Zoom on image (onclick)
  
  if(URL == '') { // If none, close
    zoomElem.style.visibility = 'hidden';
    zoomElem.style.opacity = '0';
    zoomImg.src = '';
    return
  }
  
  zoomElem.style.visibility = 'visible'; // Show zoom
  zoomElem.style.opacity = '1';
  
  // window.setTimeout(() => {zoomImg.src = URL}, 500); // Lag test
  zoomImg.src = URL; // Set image URL
  zoomLink.href = URL; // Set link URL
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Zoom
  
  zoomElem = document.getElementById('zoom'); // Get zoom element
  zoomImg = document.querySelector('#zoom > img'); // Get zoom image
  zoomLink = document.querySelector('#zoom > a'); // Get zoom image
  
  let images = document.querySelectorAll('.cont > img'); // Get image elements
  
  for(const image of images) { // For each image
    image.onclick = () => {zoom(image.src)}; // Onclick
  }
  
  // Cont
  
  let contLinks = document.querySelectorAll('.cont > .imgCont');
  // Link image/buttons in cont
  
  for(const link of contLinks) { // For each link
    link.onmouseover = () => { // Function on mouse over
      let rand = (Math.random() * 8) + 2; // Random num between 2 and 10
      rand = rand * ((Math.floor(Math.random() * 2) * 2) - 1); // Random +/-
      link.style.transform = "rotate(" + rand + "deg) scale(1.05)";
    };
    link.onmouseout = () => { // Function on mouse out
      link.style.transform = "rotate(0deg) scale(1)";
    }
  }
  
});

document.addEventListener('keydown', function() {
  
  if(event.key == 'Escape') zoom(''); // Zoom Escape
  
});
