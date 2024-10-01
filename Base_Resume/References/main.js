
// Variables

const sections = ["Edu", "Other Org", "Exp", "Prj"];

const classes = [["<b>All Courses Average</b>", 0.96776], 
                 ["<b>Warren Tech</b>", 0.97], 
                 ["WT: Engineering II", 0.97], 
                 ["WT: Sustainable Energy I", 0.97], 
                 ["<b>Green Mountain</b>", 0.96626667], 
                 ["English", 1.01], 
                 ["Trig / Math Analysis", 0.9637], 
                 ["Modern World History", 0.9251]];

// Basic Functions


function cutStrAtStr(str, cutAt) {
  
  for (let i = 0; i < str.length + cutAt.length; i++) {
    
    let testStr = str.slice(i, i + cutAt.length);
    
    if (testStr == cutAt) {
      
      return str.slice(0, i);
      
    }
    
  }
  
}


// onClick


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
  document.getElementById("Side Bar").style.overflow = "visible";
  
  expandAll();
  
  let links = document.getElementsByTagName("a");
  
  for (i = 0; i < links.length; i++) {
    
    links[i].style.color = "rgb(0, 0, 0)";
    links[i].style.textDecoration = "none";
    
  }
  
  let buttons = document.getElementsByTagName("button");
  
  for (i = 0; i < buttons.length; i++) {
    
    buttons[i].style.display = "none";
    
  }
  
  let body = document.getElementsByTagName("body");
  
  for (let i = 0; i < body.length; i++) {
    
    body[i].style.marginLeft = "1em";
    
  }
  
  window.print()
  
  window.location.replace("index.html")
  
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