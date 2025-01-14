// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

// Classes

const control = {
  run: true,
  mspf: 50,
  interval: null,
  ticks: 0
};

const gameWindow = {
  elem: null, 
  rect: null
};

const mouse = {
  
  elem: null,
  rect: null,
  
  pos: [400,600],
  vel: [0,0],
  maxVel: 12,
  
  target: [0,0],
  useMouse: false,
  
  keys: [['d', 'D', 'ArrowRight'], ['a', 'A', 'ArrowLeft'], ['w', 'W', 'ArrowUp'], ['s', 'S', 'ArrowDown']],
  keyStates: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]], //Right, Left, Up, Down
  
  move: function() {
    
    this.vel = [Math.max(-this.maxVel, this.vel[0]), Math.max(-this.maxVel, this.vel[1])];
    this.vel = [Math.min(this.maxVel, this.vel[0]), Math.min(this.maxVel, this.vel[1])];
    this.vel = [Math.round(this.vel[0] * 100) / 100, Math.round(this.vel[1] * 100) / 100];
    
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    
    this.pos = [Math.max(0, this.pos[0]), Math.max(48, this.pos[1])]; // 48 From Toolbar Height
    this.pos = [Math.min(gameWindow.rect.width - mouse.rect.width, this.pos[0]), 
                Math.min(gameWindow.rect.height - mouse.rect.height, this.pos[1])];
    this.pos = [Math.round(this.pos[0]), Math.round(this.pos[1])];
    
    let x = this.pos[0];
    let y = this.pos[1];
    
    this.elem.style.left = x + 'px';
    this.elem.style.top = y + 'px';
    
  },
  
  mouse: function() {
    
    if(this.useMouse) {
      
      let x = Math.round(this.target[0] - gameWindow.rect.left - (this.rect.width / 2));
      let y = Math.round(this.target[1] - gameWindow.rect.top - (this.rect.height / 2));
      
      let dir = arctan(x - this.pos[0], y - this.pos[1]);
      let vel = dist(x, y, this.pos[0], this.pos[1]);
      vel = Math.min(this.maxVel, vel);
      
      this.vel = [vel * Math.cos(dir), vel * Math.sin(dir)];
      
    }
    
  },
  
  key: function(up, down) {
    
    if(!this.useMouse) {
      
      for(let i = 0; i < this.keys.length; i++) {
        
        for(let k = 0; k < this.keys[i].length; k++) {
          
          if(this.keys[i][k] == up) this.keyStates[i][k] = 0;
          if(this.keys[i][k] == down) this.keyStates[i][k] = 1;
          
        }
        
      }
      
      let keyDir = [0, 0, 0, 0]; //Right, Left, Up, Down
      
      for(let i = 0; i < this.keyStates.length; i++) {
        
        for(let k = 0; k < this.keyStates[i].length; k++) {
          
          if(this.keyStates[i][k] == 1) keyDir[i] = 1;
          
        }
        
      }
      
      mouse.vel[0] = (keyDir[0] - keyDir[1]) * mouse.maxVel;
      mouse.vel[1] = (keyDir[3] - keyDir[2]) * mouse.maxVel;
      
    }
    
  }
  
};

// Gameloop

function gameloop() {
  
  control.ticks++;
  
  // Un-Paused
  
  if(control.run) {
    
    // Get
    
    gameWindow.rect = gameWindow.elem.getClientRects()[0];
    mouse.rect = mouse.elem.getClientRects()[0];
    
    // Mouse
    
    mouse.mouse();
    mouse.move();
    
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

// Events

document.addEventListener('DOMContentLoaded', function() {
  
  // Elems & Variables
  
  gameWindow.elem = document.getElementsByClassName('window')[0];
  mouse.elem = document.getElementById('mouse');
  
  // Gameloop
  
  control.interval = window.setInterval(gameloop, control.run);
  
  // Keys
  
  document.addEventListener('keyup', function(event) {
    
    if(event.key == 'Escape') control.run = !control.run;
    
    console.log(event.key);
    
    if(control.run) {
      
      // Mouse
      
      mouse.key(event.key, 'nothing');
      
    }
    
  });
  
  document.addEventListener('keydown', function(event) {
    
    mouse.useMouse = false;
    mouse.vel = [0, 0];
    
    if(control.run) {
      
      // Mouse
      
      mouse.key('nothing', event.key);
      
    }
    
  });
  
  // Mouse
  
  document.addEventListener('mousemove', function(event) {
    
    if(control.run) {
      
      mouse.useMouse = true;
      mouse.target = [event.clientX, event.clientY];
      
    }
    
  });
  
});
