// Variables and Constants

const wordComp = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

// Functions

function countWords(element) {
  
  let out = 0;
  
  let text = element.innerText + " ";
  
  for(let i = 0; i < text.length - 1; i++) {
    
    let char = text[i];
    let nextChar = text[i + 1];
    
    if(wordComp.includes(char) && wordComp.includes(nextChar) == false) out++;
    
  }
  
  return out;
  
}

function outputWC(element, mod) {
  
  wordCount = countWords(element) + mod;
  
  element.innerHTML += '<div class="WC">Word Count: ' + wordCount + '</div>';
  
  
}
