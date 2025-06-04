// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

const control = {
  run: true,
  startTime: 0, // Start time, to find elapsed time (to find ticks)
  tickLength: 16, // Length of a tick
  ticks: 0, // Number of ticks passed
  
  FPSElem: null,
  lastFrame: 0,
  now: 0,
  
  onMenu: true,
  menuElem: null,
  startElem: null,
  startRect: null
};

const gameWindow = {
  elem: null, 
  rect: null
};

const info = {
  elem: null,
  rect: null,
  
  lives: 5,
  deathCooldownMax: 300,
  deathCooldown: 0,
  profiles: null,
  emptyProf: null,
  
  energy: 0,
  maxEnergy: 1000,
  energyElem: null,
  energyBarElem: null,
  
  level: 0,
  levelElem: null,
  
  pauseElem: null
}

const levelData = [
  [1,'none']
];

const mouse = {
  
  elem: null,
  rect: null,
  
  pos: 400,
  vel: 0,
  maxVel: 8,
  
  target: 0,
  useMouse: false,
  
  keys: ['d', 'a'],
  keyStates: [0, 0],
  keyVel: [0, 0],
  holdVel: 2,
  //Right, Left
  
  move: function() {
    
    if(this.useMouse) this.mouse();
    else this.key();
    
    this.vel = Math.max(-this.maxVel, this.vel);
    this.vel = Math.min(this.maxVel, this.vel);
    this.vel = Math.round(this.vel * 100) / 100;
    
    this.pos += this.vel;
    
    this.pos = Math.max(0, this.pos);
    this.pos = Math.min(gameWindow.rect.width - mouse.rect.width, this.pos);
    this.pos = Math.round(this.pos * 10) / 10;
    
    this.elem.style.left = this.pos + 'px';
    
  },
  
  mouse: function() {
    
    let x = Math.round(this.target - gameWindow.rect.left - (this.rect.width / 2))
    
    let vel = x - this.pos;
    vel = Math.min(this.maxVel, vel);
    
    this.vel = vel;
    
  },
  
  key: function() {
  
    for(let i = 0; i < this.keyStates.length; i++) {
      
      if(this.keyStates[i] == 1) {
        if(this.keyVel[i] < this.maxVel * this.holdVel) {
          this.keyVel[i]++;
        }
      }
      
      else if(this.keyVel[i] > 0) this.keyVel[i]--;
      
    }
    
    this.vel = (this.keyVel[0] - this.keyVel[1]) / this.holdVel;
    
  },
  
  setKey: function(up, down) {
    
    for(let i = 0; i < this.keys.length; i++) {
      
      if(this.keys[i] == up.toLowerCase()) this.keyStates[i] = 0;
      if(this.keys[i] == down.toLowerCase()) this.keyStates[i] = 1;
      
    }
    
  }
  
};

// Classes

let cursors = [];

class cursor {
  
  constructor() {
    
    if(info.energy < info.maxEnergy) {
      
      this.elem = document.createElement('img');
      gameWindow.elem.appendChild(this.elem);
      
      this.elem.className = 'cursor';
      this.elem.src = 'assets/images/cursor.png';
      
      this.elem.style.left = 'calc(' + mouse.elem.style.left + ' + ' + ' 10px)'; // 10 = 16 - 6, 16 = mouseWidth / 2, 6 = thisWidth / 2
      this.elem.style.top = (600-32) + 'px'; // Window Height - Mouse Height
      
      this.rect;
      
      this.hit = false;
      
      cursors.push(this);
      
      info.energy += 50;
      
    }
    
  }
  
  main() {
    
    // Rect
    
    this.rect = this.elem.getClientRects()[0];
    
    // Start
    
    if(control.onMenu && collide(control.startRect, this.rect)) {
      
      control.menuElem.style.display = 'none';
      control.onMenu = false;
      
      info.level = 1;
      
      start();
      
    }
    
    // Move
    
    this.elem.style.top = 'calc(' + this.elem.style.top + ' - ' + ' 12px)';
    
    return parseInt(this.elem.style.top.slice(5)) < 48;
    
  }
  
}

let adConts = [];

class adCont {
  
  constructor(top) {
  
    this.elem = document.createElement('div');
    gameWindow.elem.appendChild(this.elem);
    
    this.elem.className = 'adCont';
    
    this.elem.style.left = '0px';
    this.elem.style.top = (top + 48) + 'px'; // 48 = InfoBar Height
    
    for(let i = 0; i < 8; i++) {
      
      let newAd = new ad();
      this.elem.appendChild(newAd.elem);
      
    }
    
    adConts.push(this);
    
  }
  
  main() {
    
    this.elem.style.top = 'calc(' + this.elem.style.top + ' - ' + ' 12px)';
    
    return parseInt(this.elem.style.top.slice(5)) < 0;
    
  }
  
}

let ads = [];

class ad {
  
  constructor() {
  
    this.elem = document.createElement('img');
    gameWindow.elem.appendChild(this.elem);
    
    this.elem.className = 'cursor';
    this.elem.src = 'assets/images/cursor.png';
    
    this.elem.style.left = 'calc(' + mouse.elem.style.left + ' + ' + ' 10px)'; // 10 = 16 - 6, 16 = mouseWidth / 2, 6 = thisWidth / 2
    this.elem.style.top = (600-32) + 'px'; // Window Height - Mouse Height
    
    ads.push(this);
    
  }
  
  main() {
    
    this.elem.style.top = 'calc(' + this.elem.style.top + ' - ' + ' 12px)';
    
    return parseInt(this.elem.style.top.slice(5)) < 0;
    
  }
  
}

// Gameloop

function gameloop() {
  
  // Control
  
  control.ticks++;
  
  if(control.ticks % Math.floor(250 / control.mspf) == 0) {
    
    control.now = Date.now();
    control.FPSElem.innerText = 'FPS: ' + (Math.round(1000 / (control.now - control.lastFrame) * 100 * Math.floor(250 / control.mspf)) / 100);
    control.lastFrame = control.now;
    
  }
    
  // Un-Paused
  
  if(control.run) {
    
    // Get
    
    gameWindow.rect = gameWindow.elem.getClientRects()[0];
    mouse.rect = mouse.elem.getClientRects()[0];
    control.startRect = control.startElem.getClientRects()[0];
    
    // Mouse
    
    mouse.move();
    
    // Info
    
    info.profiles = document.getElementsByClassName('profile');
    info.emptyProf = document.getElementsByClassName('emptyProf');
    
    while(info.lives < info.profiles.length) {
      info.profiles[info.profiles.length - 1].className = 'emptyProf';
    }
    while(info.lives > info.profiles.length) {
      info.emptyProf[0].innerHTML = '👤';
      
      let rand = Math.random();
      
      if(rand < .30) info.emptyProf[0].innerHTML = '<img src="https://avatars.githubusercontent.com/u/176335627?v=4">';
      if(rand < .10) info.emptyProf[0].innerHTML = '<img src="assets/images/camProf.png">';
      
      info.emptyProf[0].className = 'profile';
    }
    
    if(info.energy > 0) info.energy--;
    
    let frac = info.energy / info.maxEnergy;
    
    red = (frac * 2) * 255;
    green =  (2 - (frac * 2)) * 255;
    color = 'rgb(' + red + ',' + green + ',0)';
    
    info.energyBarElem.style.width = (100 - (frac * 100)) + '%';
    info.energyBarElem.style.backgroundColor = 'rgb(' + red + ',' + green + ',0)';
    
    info.levelElem.innerText = 'Level: ' + info.level;
    
    // Cursors
    
    runClass(cursors);
    
  }
  
  // Paused
  
  else;
  
}

// Functions

function arctan(x, y) {
  
  if(Math.abs(x) < 0.0001) {
    
    if(y > 0) return Math.PI / 2;
    
    return (3 * Math.PI) / 2;
    
  }
  
  if(x >= 0) return Math.atan(y / x);
  
  return Math.atan(y / x) - Math.PI;
  
}

function dist(x1, y1, x2, y2) {
  
  return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
  
}

function collide(rect1, rect2) {
  
  let pos = [rect2.left, rect2.top]
  
  for(let i = 0; i < 4; i++) {
    
    if(i == 1) pos = [rect2.right, rect2.top];
    if(i == 2) pos = [rect2.right, rect2.bottom];
    if(i == 3) pos = [rect2.left, rect2.bottom];
    
    if((pos[0] >= rect1.left && pos[0] <= rect1.right) && 
    (pos[1] >= rect1.top && pos[1] <= rect1.bottom)) {
      return true;
    }
    
  }
  
  return false;
  
}

function runClass(array) {
  
  for(let obj of array) {
    
    if(obj.main()) {
      
      if(obj.elem) obj.elem.remove();
      array.splice(array.indexOf(obj), 1);
      obj = null;
      
    }
    
  }
  
}

function clear() {
  
  for(let obj of cursors) {
    if(obj.elem) obj.elem.remove();
    obj = null;
  }
  cursors = [];
  
  for(let obj of ads) {
    if(obj.elem) obj.elem.remove();
    obj = null;
  }
  ads = [];
  
  for(let obj of adConts) {
    if(obj.elem) obj.elem.remove();
    obj = null;
  }
  adConts = [];
  
  info.energy = 0;
  
}

function start() {
  
  clear();
  
  lvl = levelData[info.level - 1];
  
  for(let i = 0; i < lvl[0]; i++) {
    
    new adCont(-i * 100);
    
  }
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  control.FPSElem = document.getElementById('FPS');
  control.menuElem = document.getElementById('menu');
  control.startElem = document.getElementById('start');
  gameWindow.elem = document.getElementsByClassName('window')[0];
  mouse.elem = document.getElementById('mouse');
  info.elem = document.getElementsByClassName('infoBar')[0];
  info.energyElem = document.getElementById('energy');
  info.energyBarElem = document.getElementById('energyBar');
  info.levelElem = document.getElementById('level');
  info.pauseElem = document.getElementById('pause');
  
  // Gameloop
  
  control.interval = window.setInterval(gameloop, control.mspf);
  
  // Keys
  
  document.addEventListener('keyup', function(event) {
    
    if(event.key == 'Escape') {
      
      control.run = !control.run;
      
      if(control.run) info.pauseElem.style.display = 'none';
      else info.pauseElem.style.display = 'block';
      
    }
    
    mouse.setKey(event.key, 'nothing');
    
  });
  
  document.addEventListener('keydown', function(event) {
    
    if(event.key != ' ') mouse.useMouse = false;
    
    mouse.setKey('nothing', event.key);
    
    if(event.key == ' ' && control.run) new cursor();
    
  });
  
  // Mouse
  
  document.addEventListener('mousemove', function(event) {
    
    mouse.useMouse = true;
    mouse.target = event.clientX;
    
  });
  
  document.addEventListener('mousedown', function(event) {
    
    if(control.run) {
      
      if(event.button == 0) {
        
        event.preventDefault();
        
        new cursor();
        
      }
      
    }
    
  });
  
});
