// Function

async function embedCont(embedPath, elemSel = '#embedContainer') {
  
  let file = await fetch(embedPath); // Fetch raw file
  //console.log(file);
  
  if(!file.ok) { // Error fetching file
    document.querySelector(elemSel).innerHTML = '⚠️ Error Fetching File';
    return;
  }
  
  let text = await file.text(); // Raw --> Text
  //console.log(text);
  
  document.querySelector(elemSel).innerHTML = text;
  
};
