# KaliBasenji42's Website
# Copyright (C) 2025 KaliBasenji42

# This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; version 2 of the License.

# This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

# You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

# License: https://kalibasenji.xeroideas.org/LICENSE.md
# GPL v2: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
# KaliBasenji42's Github: https://github.com/KaliBasenji42

# Pre-Setup

import math
import time

# Functions

def render(x, y):
    
    out = ''
    
    grid = [ ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ,
             ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ' , '  ' , '  ','  ','  ','  ','  ','  ','  ','  ','  ','  '] ]
    
    grid[y + 10][x + 10] = '()'
    
    out += '+--------------------||--------------------+\n'
    
    row = ''
    
    for a in range(21):
        
        row  = ''
        
        for b in range(21):
            
            row = row + grid[a][b]
            
        
        if a == 10:
            
            row = '=' + row + '=\n'
            
        else:
            
            row = '|' + row + '|\n'
            
        
        out += row
        
    
    out += '+--------------------||--------------------+\n'
    
    return out
    

# Variables

t = 0

printStr = ''

# Instructions & Input

print('This is program is licensed under the GPL v2 license\n')
print('Input Variables')
delayInp = input('delay (seconds / frames): ')
gravityInp = input('Gravity: ')
bouncyInp = input('Bouncy (0 to 1): ')
xInp = input('x position (-10 to 10): ')
yInp = input('y position (-10 to 10): ')
vxInp = input('x velocity: ')
vyInp = input('y velocity: ')

delay = float(delayInp)
gravity = float(gravityInp)
bouncy = float(bouncyInp)
x = float(xInp)
y = float(yInp)
vx = float(vxInp)
vy = float(vyInp)

# Main Loop

while True:
    
    # Clear
    
    printStr = ''
    
    print("\033[H\033[J", end="")
    
    # Info
    
    t += 1
    
    printStr += 't: ' + str(t) + '\n'
    
    printStr += 'x: ' + str(x) + '\n'
    printStr += 'y: ' + str(y) + '\n'
    printStr += 'vx: ' + str(vx) + '\n'
    printStr += 'vy: ' + str(vy) + '\n'
    
    # Render
    
    printStr += render(round(x), round(y))
    
    time.sleep(delay)
    
    print(printStr)
    
    # Velocity
    
    x = round(x + vx, 3)
    y = round(y + vy, 3)
    
    # Walls
    
    if x > 10:
        
        x = 10
        vx = round(-abs(vx) * bouncy, 3)
        
    if x < -10:
        
        x = -10
        vx = round(abs(vx) * bouncy, 3)
        
    if y > 10:
        
        y = 10
        vy = round(-abs(vy) * bouncy, 3)
        
    if y < -10:
        
        y = -10
        vy = round(abs(vy) * bouncy, 3)
        
    
    # Gravity
    
    vy = round(vy + gravity, 3)
    
