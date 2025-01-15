// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

const control = {
  run: true,
  mspf: 16,
  interval: null,
  ticks: 0,
  
  debug: true,
  FPSElem: null,
  lastFrame: 0,
  now: 0
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
  energyBarElem: null
}

const mouse = {
  
  elem: null,
  rect: null,
  
  pos: [400,600],
  vel: [0,0],
  maxVel: 8,
  
  target: [0,0],
  useMouse: false,
  
  keys: ['d', 'a', 'w', 's',],
  keyStates: [0, 0, 0, 0],
  keyVel: [0, 0, 0, 0],
  holdVel: 2,
  //Right, Left, Up, Down
  
  move: function() {
    
    if(this.useMouse) this.mouse();
    else this.key();
    
    this.vel = [Math.max(-this.maxVel, this.vel[0]), Math.max(-this.maxVel, this.vel[1])];
    this.vel = [Math.min(this.maxVel, this.vel[0]), Math.min(this.maxVel, this.vel[1])];
    this.vel = [Math.round(this.vel[0] * 100) / 100, Math.round(this.vel[1] * 100) / 100];
    
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    
    this.pos = [Math.max(0, this.pos[0]), Math.max(info.rect.height, this.pos[1])];
    this.pos = [Math.min(gameWindow.rect.width - mouse.rect.width, this.pos[0]), 
                Math.min(gameWindow.rect.height - mouse.rect.height, this.pos[1])];
    this.pos = [Math.round(this.pos[0] * 10) / 10, Math.round(this.pos[1] * 10) / 10];
    
    let x = this.pos[0];
    let y = this.pos[1];
    
    this.elem.style.left = x + 'px';
    this.elem.style.top = y + 'px';
    
  },
  
  mouse: function() {
    
    let x = Math.round(this.target[0] - gameWindow.rect.left - (this.rect.width / 2));
    let y = Math.round(this.target[1] - gameWindow.rect.top - (this.rect.height / 2));
    
    let dir = arctan(x - this.pos[0], y - this.pos[1]);
    let vel = dist(x, y, this.pos[0], this.pos[1]);
    vel = Math.min(this.maxVel, vel);
    
    this.vel = [vel * Math.cos(dir), vel * Math.sin(dir)];
    
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
    
    this.vel[0] = (this.keyVel[0] - this.keyVel[1]) / this.holdVel;
    this.vel[1] = (this.keyVel[3] - this.keyVel[2]) / this.holdVel;
    
  },
  
  setKey: function(up, down) {
    
    for(let i = 0; i < this.keys.length; i++) {
      
      if(this.keys[i] == up.toLowerCase()) this.keyStates[i] = 0;
      if(this.keys[i] == down.toLowerCase()) this.keyStates[i] = 1;
      
    }
    
  }
  
};

// Classes

const cursors = [];

class cursor {
  
  constructor() {
    
    if(info.energy < info.maxEnergy) {
      
      this.elem = document.createElement('img');
      gameWindow.elem.appendChild(this.elem);
      
      this.elem.className = 'cursor';
      this.elem.src = 'References/Images/Cursor.png';
      
      this.elem.style.left = 'calc(' + mouse.elem.style.left + ' + ' + ' 10px)'; // 10 = 16 - 6, 16 = mouseWidth / 2, 6 = thisWidth / 2
      this.elem.style.top = mouse.elem.style.top;
      
      cursors.push(this);
      
      info.energy += 50;
      
    }
    
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
  
  if(control.debug && control.ticks % Math.floor(250 / control.mspf) == 0) {
    
    control.now = Date.now();
    control.FPSElem.innerText = 'FPS: ' + (Math.round(1000 / (control.now - control.lastFrame) * 100 * Math.floor(250 / control.mspf)) / 100);
    control.lastFrame = control.now;
    
  }
    
  // Un-Paused
  
  if(control.run) {
    
    // Get
    
    gameWindow.rect = gameWindow.elem.getClientRects()[0];
    mouse.rect = mouse.elem.getClientRects()[0];
    info.rect = info.elem.getClientRects()[0];
    
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
      if(rand < .10) info.emptyProf[0].innerHTML = '<img src="References/Images/CamProf.png">';
      
      info.emptyProf[0].className = 'profile';
    }
    
    if(info.energy > 0) info.energy--;
    
    info.energyElem = document.getElementById('energy');
    info.energyBarElem = document.getElementById('energyBar');
    
    let frac = info.energy / info.maxEnergy;
    
    red = (frac * 2) * 255;
    green =  (2 - (frac * 2)) * 255;
    color = 'rgb(' + red + ',' + green + ',0)';
    
    info.energyBarElem.style.width = (100 - (frac * 100)) + '%';
    info.energyBarElem.style.backgroundColor = 'rgb(' + red + ',' + green + ',0)';
    
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

function runClass(array) {
  
  for(let obj of array) {
    
    if(obj.main()) {
      
      if(obj.elem) obj.elem.remove();
      array.splice(array.indexOf(obj), 1);
      obj = null;
      
    }
    
  }
  
}

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  control.FPSElem = document.getElementById('FPS');
  gameWindow.elem = document.getElementsByClassName('window')[0];
  mouse.elem = document.getElementById('mouse');
  info.elem = document.getElementsByClassName('infoBar')[0];
  
  // Gameloop
  
  control.interval = window.setInterval(gameloop, control.mspf);
  
  // Keys
  
  document.addEventListener('keyup', function(event) {
    
    if(event.key == 'Escape') {
      
      control.run = !control.run;
      
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
    mouse.target = [event.clientX, event.clientY];
    
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
