// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let time = new Date();

let update = true;
let mult = 1;
let offset = 0;

const start = Date.now();

let id = setInterval(animate, 10);

let docBody = document.getElementById("body");
let title = document.getElementById("title");

// Functions

function delay(millis){
  
  let now = Date.now();
  let end = Date.now() + millis;
  
  while(now < end) now = Date.now();
  
}

function generateFace(radius, offset, hours, unit, face, mult = 1){
  
  while(hours > 24) {
    hours = hours / 24;
    mult = mult * 24;
  }
  
  for(let i = 0; i < 5 * hours; i++){
    
    let ang = ((i / (5 * hours) ) * (2 * Math.PI)) - (Math.PI / 2);
    
    let posX = (Math.cos(ang) + 1) * (radius)
    let posY = (Math.sin(ang) + 1) * (radius)
    
    let char = '&#x25AA';
    
    if(i % 5 < 0.01) char = ((i / 5) % hours) * mult;
    if(i == 0) {
      if(char - Math.round(char) > 0.01) char = 0;
      else char = Math.round(hours * mult);
    }
    
    let tick = document.createElement('div');
    tick.style = 'position: absolute; width: 2em; height: 2em; text-align: center; line-height: 2em; left:' + (posX + offset) + unit + '; top:' + (posY + offset) + unit + ';';
    tick.innerHTML = char;
    face.appendChild(tick);
    
  }
  
}

function analog(){
  
  let second = time.getSeconds();
  let minute = time.getMinutes() + (second / 60);
  let hour = time.getHours() + (minute / 60);
  
  let secondHand = document.getElementById("second");
  let minuteHand = document.getElementById("minute");
  let hourHand = document.getElementById("hour");
  
  let secondDeg = (second * 6) - 90
  let minuteDeg = (minute * 6) - 90
  let hourDeg = (hour * 30) - 90
  
  secondHand.style.transform = 'rotate(' + (secondDeg + 0.01) + 'deg)';
  minuteHand.style.transform = 'rotate(' + (minuteDeg + 0.01) + 'deg)';
  hourHand.style.transform = 'rotate(' + (hourDeg + 0.01) + 'deg)';
  
}

function digital(){
  
  let digital = document.getElementById("digital");
  let military = document.getElementById("military");
  
  let hour = time.getHours() % 12;
  if(hour == 0) hour = 12;
  if(hour < 10) hour = "0" + hour;
  
  let meridiem = "AM";
  if(time.getHours() >= 12) meridiem = "PM";
  
  let mHour = time.getHours();
  if(mHour < 10) mHour = "0" + mHour;
  
  let minute = time.getMinutes();
  if(minute < 10) minute = "0" + minute;
  
  let second = time.getSeconds();
  if(second < 10) second = "0" + second;
  
  digital.innerHTML = hour + ":" + minute + ":" + second + " " + meridiem;
  military.innerHTML = mHour + ":" + minute + ":" + second;
  
  ttlStr = hour + ":" + minute + " " + meridiem + " or Later";
  
  if(time.getTime() % 1000 <= 10) title.innerHTML = ttlStr;
  
}

function background(){
  
  let r = Math.floor((time.getSeconds() / 60) * 255);
  let g = Math.floor((time.getMinutes() / 60) * 255);
  let b = Math.floor((time.getHours() / 24) * 255);
  
  docBody.style.backgroundImage = 'none';
  docBody.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  
}

function animate(){
  if (false);
  else {
    if (update) {
      time = new Date();
      time.setTime((time.getTime() * mult) + offset);
    }
    analog();
    digital();
    background();
  }
}
