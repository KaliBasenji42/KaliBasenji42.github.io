
async function loadEuler() { // Async Function for loading Euler's Number data
  
  // Fetch's
  
  let configFile = await fetch('projects/piCalc/config.json'); // Fetch config
  let saveFile = await fetch('projects/piCalc/save.json'); // Fetch save
  
  // Try
  
  try {
    
    // Load JSON data
    
    const config = await configFile.json();
    const save = await saveFile.json();
    
    // Query Elements
    
    let iterationElem = document.querySelector('#eulerTable #iterations');
    let stableDigitsElem = document.querySelector('#eulerTable #stableDigits');
    let digitBufferElem = document.querySelector('#eulerTable #digitBuffer');
    let digitThresholdElem = document.querySelector('#digitThreshold');
    let eulerDecElem = document.querySelector('#eulerDec');
    let numeratorElem = document.querySelector('#eulerFracSect #numerator');
    let denominatorElem = document.querySelector('#eulerFracSect #denominator');
    
    // Set Numbers
    
    iterationElem.innerHTML = numForm(save['tick']);
    stableDigitsElem.innerHTML = numForm(save['stableDigits']);
    digitBufferElem.innerHTML = config['digitBuffer'];
    digitThresholdElem.innerHTML = config['stabilityThreshold'];
    
    numeratorElem.innerHTML = numForm(save['numerator']);
    denominatorElem.innerHTML = numForm(save['denominator']);
    
    // Generate Colored Decimal
    
    let index = 0; // Index
    let digitStabilities = save['digitStabilities'];
    let eulerDecStr = '';
    
    for(let char of save['decimal']) {
      
      //break;
      
      if(char == '.') {
        eulerDecStr += '.'
      }
      
      else {
        
        let stability = digitStabilities[index];
        let hueVal;
        
        if(stability == 0) hueVal = 'rgb(0,255,255)'; // Cyan
        else {
          x = 2 * 255; // Green
          x -= (stability / config['stabilityThreshold']) * (2 * 255); // Stability 0-1 * Green (Green - Red)
          hueVal = hue(x);
        }
        
        eulerDecStr += 
          '<span style="color: ' + hueVal + '">' + char + '</span>';
        
        index ++;
        
      }
      
    }
    
    eulerDecElem.innerHTML = eulerDecStr;
    
  }
  
  catch(error) {
    
    console.log('Loading Error - Euler\'s Number:');
    console.log(error);
    
  }
  
}

loadEuler(); // Call

// Other Functions

function hue(x, fMin = 0, fMax = 255) { // Returns hue color
  
  // Variables
  
  let fRange = fMax - fMin; // Function range
  
  // RGB
  
  /*
  Based off of:
  f(x) = -| ( ( x + n r ) % 6r ) -3r | + 2r + m
    where: 
      "n" depends on wether its red, green, or blue:
        red: -3
        green: 1
        blue: -1
      "r" is range ( max - min )
      "m" is min
  f(x) is clamped to min and max: max( min( f(x), max ), min ) 
  */
  
  let red = x - ( 3 * fRange ); // Subtract 3 Range
  red = mod(red, ( 6 * fRange )); // Mod 6 Range
  red = red - ( 3 * fRange ); // Subtract 3 Range
  red = -Math.abs(red); // - abs
  red = red + ( 2 * fRange ); // Add 2 Range
  red = red + fMin; // Add min
  red = Math.min( red, fMax ); // min
  red = Math.max( red, fMin ); // max
  
  let green = x + ( fRange ); // Add 1 Range
  green = mod(green, ( 6 * fRange )); // Mod 6 Range
  green = green - ( 3 * fRange ); // Subtract 3 Range
  green = -Math.abs(green); // - abs
  green = green + ( 2 * fRange ); // Add 2 Range
  green = green + fMin; // Add min
  green = Math.min( green, fMax ); // min
  green = Math.max( green, fMin ); // max
  
  let blue = x - ( fRange ); // Subtract 1 Range
  blue = mod(blue, ( 6 * fRange )); // Mod 6 Range
  blue = blue - ( 3 * fRange ); // Subtract 3 Range
  blue = -Math.abs(blue); // - abs
  blue = blue + ( 2 * fRange ); // Add 2 Range
  blue = blue + fMin; // Add min
  blue = Math.min( blue, fMax ); // min
  blue = Math.max( blue, fMin ); // max
  
  // Return
  
  return 'rgb(' + red + ',' + green + ',' + blue + ')'
  
}

function mod(dividend, divisor) { // Modulo function that is like Python's (positive)
  return ((dividend % divisor) + divisor) % divisor;
}