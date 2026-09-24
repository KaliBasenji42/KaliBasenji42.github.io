// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `  
  `;

const maxPages = 10000; // Maximum number of pages for archive API
const urlHead = 'https://archive.org/details/'; // Leading part of file URL string

let form; // Form element
let outList; // Output list element
let downloadLink; // Download link element
let formRunning = false; // Wether the form is running/loading
let formAbort = false; // Wether to abort form loading

let IDs = []; // Array of IDs
let position = 0; // Position in list

// Functions

function randomDate(start, end) {
  // Takes 2 MS since epoch (integers) (1970-01-01 00:00:00)
  // Returns array "YYYY-MM-DD"
  // Inclusive
  
  let randomDay = Math.floor( (Math.random() * ((end - start) + 1)) ) + start;
  // Random day
  
  //console.log(randomDay); // Log
  
  return new Date(randomDay).toISOString().split('T')[0];
  // String in ISO format (date only)
  
}

function downloadURL(str) { // Creates txt blob from str
  
  let blob = new Blob([str], {type: 'text/plain'}); // Blob
  return URL.createObjectURL(blob); // Return URL
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  form = document.getElementById('form');
  outList = document.getElementById('outList');
  downloadLink = document.getElementById('downloadLink');
  
  // Form
  
  form.addEventListener("submit", async function(event) {
  
    // Pre Try
    
    event.preventDefault();
    
    if(formRunning) return; // Exit if already running
    formRunning = true; // Set running to true
    
    let out = document.getElementById('formOut'); // Form output
    out.innerHTML = '🔄 Loading'; // Set to loading
    
    // Main Try
    
    try {
      
      // Variables
      
      let query = document.getElementById('formQuery').value; // Query input
      
      let doRandomDate = document.getElementById('formDoRandDate').checked; // Wether to use random date
      let startRandDate = document.getElementById('formStartRandDate').valueAsNumber; // Start date MS
      let endRandDate = document.getElementById('formEndRandDate').valueAsNumber; // End date MS
      
      let number = document.getElementById('formNumber').value; // Number input
      
      let outFiles = document.getElementById('formOutFiles'); // Number of found files output
      
      if(number == '') { // No number specified
        throw new Error('"Number of Files" not specified'); // Throw error
      }
      
      // Fetch Number of Files Found
      
      let request = await fetch(
        'https://archive.org/advancedsearch.php?q=' +
        query +
        '&fl%5B%5D=identifier&rows=0&output=json'
      ); // Fetch
      
      if(!request.ok) { // Error handling
        throw new Error('Response not OK: ' + request.statusText); // Throw error
      }
      
      let json = await request.json(); // Parse file
      
      let numFound = json.response.numFound; // Number of total files
      
      out.innerHTML = '🔄 ' + numFound + ' files found...'; // Output
      outFiles.innerHTML = 'Files Found: ' + numFound;
      console.log('Files Found: ' + numFound); // Log
      
      if(numFound < number) { // Too little error
        throw new Error('Number of files requested exceeds number of files found')
      }
      
      if(numFound > maxPages && !doRandomDate) { // High amount (warning/confirm)
        let message = numFound + ' files found, continuing may take a while. Consider enabling Random Date. Continue?';
        if(!window.confirm(message)) { // Abort
          out.innerHTML = '❌ Aborted'; // Output
          formAbort = false; // Reset abort bool
          formRunning = false; // Set to not running
          return;
        }
      }
      
      // Fetch Data - Random Date
      
      if(doRandomDate) {
        
        console.log('Random Date');
        
        IDs = []; // Clear
        
        while(IDs.length < number) { // While requested files not met
          
          if(formAbort) { // Abort
            out.innerHTML = '❌ Aborted'; // Output
            formAbort = false; // Reset abort bool
            formRunning = false; // Set to not running
            return;
          }
          
          let date = randomDate(startRandDate, endRandDate); // Random date in range
          
          out.innerHTML = '🔄 ' + (IDs.length + 1) + ' of ' + number + '; Trying date ' + date + '...'; // Output
          console.log((IDs.length + 1) + ' of ' + number + '; Trying date ' + date); // Log
          
          let request = await fetch(
            'https://archive.org/advancedsearch.php?q=' +
            query + 
            ' AND date:' + date +
            '&fl%5B%5D=identifier&rows=*&output=json'
          ); // Fetch
          
          if(!request.ok) { // Error handling
            throw new Error('Response not OK: ' + request.statusText); // Throw error
          }
          
          let json = await request.json(); // Parse file
          
          if(json.response.numFound == 0) { // No files found
            console.log('No results for date, skipping'); // Log
            continue;
          }
          
          else { // No Error
              
            let randID = json.response.docs[
              Math.floor(Math.random() * json.response.docs.length)
            ].identifier; // Random ID
            
            //console.log(randID); // Log
            
            if(!IDs.includes(randID)) { // Not already included
              IDs.push(randID); // Add
            }
            
          }
          
        }
        
      }
      
      // Fetch Data - All
      
      else {
        
        console.log('All Files');
        
        out.innerHTML = '🔄 Fetching all files...'; // Output
        
        let request = await fetch(
          'https://archive.org/advancedsearch.php?q=' +
          query +
          '&fl%5B%5D=identifier&rows=*&output=json'
        ); // Fetch
        
        if(!request.ok) { // Error handling
          throw new Error('Response not OK: ' + request.statusText); // Throw error
        }
        
        let json = await request.json(); // Parse file
        
        //console.log(json.response.docs); // Log
        
        IDs = []; // Clear
        
        while(IDs.length < number) { // While requested files not met
          
          let randID = json.response.docs[
            Math.floor(Math.random() * json.response.docs.length)
          ].identifier; // Random ID
          
          //console.log(randID); // Log
          
          if(!IDs.includes(randID)) { // Not already included
            IDs.push(randID); // Add
          }
          
        }
        
      }
      
      // Outputs
      
      let outListHTML = ''; // Temporary string for outList HTML
      let downloadContent = ''; // Temporary string for download contents
      
      for(ID of IDs) { // Each ID
        outListHTML += '<li><a href="' + urlHead + ID + '" target="_blank" rel="opener external">' + ID + '</a></li>'; // Add to outList HTML
        downloadContent += urlHead + ID + '\n'; // Add to download content
      }
      
      outList.innerHTML = outListHTML; // Set HTML
      downloadLink.href = downloadURL(downloadContent); // Set link href
      
      out.innerHTML = '✅ Done'; // Status
      
    }
    catch(err) {
      out.innerHTML = '⚠️ ' + err; // Status
      
      console.log('Form Error:'); // Log error
      console.log(err);
    }
    
    formAbort = false; // Reset abort bool
    formRunning = false; // Set to not running
    
  });
  
});