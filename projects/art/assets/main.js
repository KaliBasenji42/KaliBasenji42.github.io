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
    zoomElem.style.display = 'none'
    return
  }
  
  zoomElem.style.display = 'block' // Show zoom
  
  zoomImg.src = URL // Set image URL
  zoomLink.href = URL // Set link URL
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  zoomElem = document.getElementById('zoom') // Get zoom element
  zoomImg = document.querySelector('#zoom > img') // Get zoom image
  zoomLink = document.querySelector('#zoom > a') // Get zoom image
  
  let images = document.querySelectorAll('.cont > img'); // Get image elements
  
  for(const image of images) { // For each image
    image.onclick = () => {zoom(image.src)}; // Onclick
  }
  
});

document.addEventListener('keydown', function() {
  
  if(event.key == 'Escape') zoom(''); // Zoom Escape
  
});
