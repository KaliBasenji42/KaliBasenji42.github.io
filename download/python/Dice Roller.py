# KaliBasenji42's Website
# Copyright (C) 2025 KaliBasenji42

# This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; version 2 of the License.

# This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

# You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

# License: https://kalibasenji.xeroideas.org/LICENSE.md
# GPL v2: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
# KaliBasenji42's Github: https://github.com/KaliBasenji42

import random

# Variables

run = True

# Functions

def strToArray(string):
  
  out = []
  
  var = ''
  
  div = ' '
  
  string = string + div
  
  for i in range(len(string)):
    
    if string[i-len(div):i] == div:
      
      var = var[:-len(div)]
      
      out.append(var)
      
      var = ''
      
    
    var += string[i]
    
  
  var = var[:-len(div)]
  
  out.append(var)
  
  return out
  

def strToInt(string):
  
  numStr = ''
  
  for i in range(len(string)):
    
    if string[i].isnumeric(): numStr = numStr + string[i]
    
  
  if len(numStr) == 0: return 0
  
  if string[0] == '-': return -1 * int(numStr)
  else: return int(numStr)
  

def roll(inp):
  
  # Variables
  
  total = 0
  
  rolls = 0
  faces = 0
  
  # Split
  
  for i in range(len(inp)):
    
    if inp[i] == 'd':
      
      rolls = strToInt(inp[0:i])
      faces = strToInt(inp[i+1:])
      
      break
      
    
  
  if rolls < 1 or faces < 1:
    
    print('Sub Total: 0')
    
    return 0
    
  
  # Loop
  
  for i in range(rolls):
    
    roll = random.randint(1, faces)
    
    print('d' + str(faces) + ' #' + str(i+1) + ': ' + str(roll))
    
    total += roll
    
  
  # Print and Return
  
  print('')
  print('Sub Total: ' + str(total))
  
  return total
  

# Before Loop

print('This is program is licensed under the GPL v2 license\n')
print('Input "quit" to quit')
print('Input number of dice, "d" then type')
print('  Ex: 6d4 if 6 4 sided dies')
print('  Use spaces to roll multiple')
print('  Add "+" to add an amount')
print('    Seperate with space')
print('    "+-" to subtract')

# Main Loop

while run:
  
  print('')
  
  inp = input('Input: ')
  
  # Quit
  
  if inp == 'quit': run = False
  
  # Input
  
  else:
    
    total = 0
    
    inpArray = strToArray(inp)
    
    for item in inpArray:
      
      if len(item) > 0: 
        
        # Add
        
        if item[0] == '+':
          
          print('')
          
          add = strToInt(item[1:])
          
          print('Add: ' + str(add))
          
          total += add
          
        
        # Roll
        
        else:
          
          print('')
          
          total += roll(item)
          
        
      
    
    print('')
    
    print('Total: ' + str(total))
    
  
