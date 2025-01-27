var i = 0;

function Umbriel() {
  
  const bttn = document.getElementById("Umbriel");
  
  if(i % 2 == 0) bttn.innerHTML = '<img src = "References/Umbriel1.png" alt = "Umbriel" width = "128" height = "128">';
    
  if(i % 2 == 1) bttn.innerHTML = '<img src = "References/Umbriel2.png" alt = "Umbriel" width = "128" height = "128">';
  
  i ++;
  
}