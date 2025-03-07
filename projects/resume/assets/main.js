
// Variables

const sections = ["Edu", "Other Org", "Exp", "Prj"];

const classes = [["<b>All Courses Average</b>", 0.96776], 
                 ["<b class='gen'>[School 1]</b>", 0.97], 
                 ["Engineering II", 0.97], 
                 ["Sustainable Energy I", 0.97], 
                 ["<b class='gen'>[School 2]</b>", 0.96626667], 
                 ["English", 1.01], 
                 ["Trig / Math Analysis", 0.9637], 
                 ["Modern World History", 0.9251]];

let setElems = document.getElementsByClassName('set');
let setData = localStorage.getItem('Resume - Set Data');

// Basic Functions

function cutStrAtStr(str, cutAt) {
  
  for (let i = 0; i < str.length + cutAt.length; i++) {
    
    let testStr = str.slice(i, i + cutAt.length);
    
    if (testStr == cutAt) {
      
      return str.slice(0, i);
      
    }
    
  }
  
}

// Generate

function generateTOC(TOCID) {
  
  for (let i = 0; i < sections.length; i++) {
    
    let title = cutStrAtStr(document.getElementById(sections[i] + " ttl").innerHTML, " <span>")
    
    document.getElementById(TOCID).innerHTML += "<li><a href='#" + sections[i] + " ttl'>" + title + "</a></li>"
    
  }
  
}

function generateGT(ID, classes) {
  
  let percent = -1;
  let letter = "N";
  
  document.getElementById(ID).innerHTML = "<tr>" + 
      "<th style='width: 40%;'>Name</th>" + 
      "<th style='width: 20%;'>%</th>" + 
      "<th style='width: 20%;'>Letter</th>" + 
    "</tr>";
  
  for (let i = 0; i < classes.length; i ++) {
    
    percent = classes[i][1] * 100;
    
    if (percent >= 89.5) { letter = "A"; }
    else if (percent >= 79.5) { letter = "B"; }
    else if (percent >= 69.5) { letter = "C"; }
    else if (percent >= 59.5) { letter = "D"; }
    else { letter = "F"; }
    
    document.getElementById(ID).innerHTML += "<tr>" + 
        "<td>" + classes[i][0] + "</td>" + 
        "<td>" + percent.toString() + "% </td>" + 
        "<td style='text-align: center;'>" + letter + "</td>" + 
      "</tr>";
   
  }
  
}

// Tool Functions

function expndOrClps(ID, bttnID) {
  
  sect = document.getElementById(ID);
  bttn = document.getElementById(bttnID);
  height = "" + (sect.scrollHeight + 100) + "px";
  
  if (sect.style.maxHeight ==  height || sect.style.maxHeight == "") {
    
    sect.style.maxHeight = "0px";
    bttn.style.transform = "rotate(270deg)";
    
  }
  else {
    
    sect.style.maxHeight = height;
    bttn.style.transform = "rotate(0deg)";
    
  }
  
}

function printFormat() {
  
  document.getElementById("tools").style.display = "none";
  document.getElementById("SideBar").style.overflow = "visible";
  
  expandAll();
  
  let links = document.getElementsByTagName("a");
  
  for (i = 0; i < links.length; i++) {
    
    links[i].style.color = "rgb(0, 0, 0)";
    links[i].style.textDecoration = "none";
    
  }
  
  window.print()
  
  window.location.replace("./")
  
}

function collapseAll() {
  
  for (let i = 0; i < sections.length; i++) {
    
    document.getElementById(sections[i]).style.maxHeight = "0px";
    
    document.getElementById(sections[i] + " bttn").style.transform = "rotate(270deg)";
    
  }
  
}

function expandAll() {
  
  for (let i = 0; i < sections.length; i++) {
    
    sect = document.getElementById(sections[i]);
    
    sect.style.maxHeight = "" + (sect.scrollHeight + 100) + "px";
    
    document.getElementById(sections[i] + " bttn").style.transform = "rotate(0deg)";
    
  }
  
}

// Set Data

function set(string) {
  
  let list = [];
  let seg = '';
  let char = '';
  
  for(let i = 0; i < string.length; i ++) {
    
    char = string.slice(i, i + 1);
    
    if(char == ';') {
      list.push(seg);
      seg = '';
    }
    
    else seg = seg + char;
    
  }
  
  console.log('Setting:');
  
  console.log(list);
  
  for(let i = 0; i < setElems.length; i ++) {

    let elem = setElems[i];

    for(let i = 0; i < list.length; i ++) {
      
      if(list[i].startsWith(elem.innerHTML)) {
        let cont = list[i].slice(elem.innerHTML.length);
        
        isEmail = elem.innerHTML.startsWith('[Email');
        elem.innerHTML = cont;
        if(isEmail) {
          elem.href = 'mailto:' + cont;
        }
      }
      
    }
    
  }
  
}

function saveSetData() {
  try{
    localStorage.setItem('Resume - Set Data', setData);
    console.log('Saving:');
    console.log(setData);
  }
  catch(err){
    window.alert('Saving Error:\n' + err + '\n\nYou may need to remove data.');
  }
}

function removeSetData() {
  localStorage.removeItem('Resume - Set Data');
  console.log('Removed');
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  if(setData !== null) set(setData);
  
  let form = document.getElementById('setForm');
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    setData = document.getElementById('setText').value;
    set(setData);
  });

});
