// Function

async function embedCont(embedPath) {
  
  let file = await fetch(embedPath); // Fetch raw file
  //console.log(file);
  
  if(!file.ok) { // Error fetching file
    document.getElementById('embedContainer').innerHTML = '⚠️ Error Fetching File';
    return;
  }
  
  let text = await file.text(); // Raw --> Text
  //console.log(text);
  
  document.getElementById('embedContainer').innerHTML = text;
  
};
