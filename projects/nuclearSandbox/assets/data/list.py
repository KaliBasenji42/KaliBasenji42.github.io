# Python file that reads ENDF GNDS data and lists all values of a type.

# KaliBasenji42's Website
# Copyright (C) 2026 KaliBasenji42

# This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; version 2 of the License.

# This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

# You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

# License: https://kalibasenji.xeroideas.org/LICENSE.md
# GPL v2: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
# KaliBasenji42's Github: https://github.com/KaliBasenji42

# Imports

import xmltodict
import json
import os
import logging

logging.basicConfig(
  level=logging.DEBUG,
  format='%(asctime)s | %(filename)s:%(lineno)s | %(levelname)s: %(message)s',
  filename='app.log'
)

# Variables

run = True # Main loop control

xmlDir = 'ENDF-B-VIII.1-GNDS/decay/' # Path to directory

outArr = [] # Output array

xmlPathsAll = os.listdir(xmlDir) # All paths in directory
xmlPaths = []
excludePaths = ['m1', 'm2', 'm3', 'm4']

mode = '' # Default mode
modes = [ # Accepted modes
  'name', 'symbol', 'z', 'a', 'n', 
  'mass', 'mass-unit', 'hl', 'hl-unit', 'decay-modes', 'decay-prob'
]

# Exclude List

for path in xmlPathsAll:
  
  add = True # Should add
  
  for value in excludePaths:
    if path.find(value) > -1: # Found
      add = False # Don't add
  
  if add: xmlPaths.append(path) # Add if it should
  

xmlPaths.sort() # Sort

# Functions

def readFiles(mode):
  
  global outArr
  
  outArr = [] # Reset
  
  for i in range(len(xmlPaths)): # Each file
    
    path = xmlPaths[i] # Path
    
    # Progress
    
    print('Progress: ' +
          str(round((i+1) / len(xmlPaths) * 100,2)) + 
          '%        \033[F'
    )
    
    try:
      
      with open(xmlDir + path, 'r') as file: # Read file
        xmlData = file.read()
      
      data = xmltodict.parse(xmlData, force_list=True) # Dictionary data
      
      value = 'Err!' # Default value
      single = True # Is single value
      
      # Ifs
      
      if mode == 'name':
        
        try: # Chemical Element
          value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['@name']
        except: # Baryon
          value = data['PoPs'][0]['baryons'][0]['baryon'][0]['@id'] + '?'
        
      
      elif mode == 'symbol':
        
        try: # Chemical Element
          value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['@symbol']
        except: # Baryon
          value = data['PoPs'][0]['baryons'][0]['baryon'][0]['@id'] + '?'
        
      
      elif mode == 'z':
        
        try: # Chemical Element
          value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['@Z']
        except: # Baryon
          value =  '0?(' + data['PoPs'][0]['baryons'][0]['baryon'][0]['@id'] + ')'
        
      
      elif mode == 'a':
        
        try: # Isotope
          value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['@A']
        except: # Baryon
          value = '1?(' + data['PoPs'][0]['baryons'][0]['baryon'][0]['@id'] + ')'
        
      
      elif mode == 'n':
        
        try: # Isotope
          value = int(data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['@A']) - int(data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['@Z'])
        except: # Baryon
          value = '1?(' + data['PoPs'][0]['baryons'][0]['baryon'][0]['@id'] + ')'
        
      
      elif mode == 'mass':
        
        try: # Isotope
          value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['mass'][0]['double'][0]['@value']
        except: # Baryon
          value = data['PoPs'][0]['baryons'][0]['baryon'][0]['mass'][0]['double'][0]['@value']
        
      
      elif mode == 'mass-unit':
        
        try: # Isotope
          value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['mass'][0]['double'][0]['@unit']
        except: # Baryon
          value = data['PoPs'][0]['baryons'][0]['baryon'][0]['mass'][0]['double'][0]['@unit']
        
      
      elif mode == 'hl':
        
        try: # Isotope Double
          value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['double'][0]['@value']
        except:
          try: # Isotope String
            value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['string'][0]['@value']
          except: 
            try: # Baryon Double
              value = data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['double'][0]['@value']
            except: # Baryon String
              value = data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['string'][0]['@value']
        
      
      elif mode == 'hl-unit':
        
        try: # Isotope Double
          value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['double'][0]['@unit']
        except:
          try: # Isotope String
            value = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['string'][0]['@unit']
          except: 
            try: # Baryon Double
              value = data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['double'][0]['@unit']
            except: # Baryon String
              value = data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['string'][0]['@unit']
        
      
      # Multiple
      
      elif mode == 'decay-modes':
        
        # Variables
        
        single = False # Skip single add
        
        decayModes = [] # List of decay modes
        
        noModes = False # Wether the isotope has no decay modes
        
        # Try to get data
        
        try: # Isotope
          decayModes = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['decayData'][0]['decayModes'][0]['decayMode']
        except:
          try: # Baryon
            decayModes = data['PoPs'][0]['baryons'][0]['baryon'][0]['decayData'][0]['decayModes'][0]['decayMode']
          except:
            try: # Isotope Stable
              noModes = True
              decayModes = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['string']
            except: # Baryon Stable
              noModes = True
              decayModes = data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['string']
        
        # List for Loop
        
        for decayMode in decayModes:
          
          # Get value
          
          if noModes: value = decayMode['@value'] + '?' # No decay modes, get halflife
          else: value = decayMode['@mode'] # Get mode
          
          # Add
          
          value = '"' + str(value) + '"' # Ensure its a string
          
          if value not in outArr: # Not in array
            outArr.append(value) # Add to array
          
          # Log
          
          target = '"SF"'
          #if value == target: logging.info('Decay mode ' + value + ' found in ' + path)
          
        
      
      elif mode == 'decay-prob':
        
        # Variables
        
        decayModes = [] # List of decay modes
        
        noModes = False # Wether the isotope has no decay modes
        
        totalProb = 0.0 # Total probability
        
        # Try to get data
        
        try: # Isotope
          decayModes = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['decayData'][0]['decayModes'][0]['decayMode']
        except:
          try: # Baryon
            decayModes = data['PoPs'][0]['baryons'][0]['baryon'][0]['decayData'][0]['decayModes'][0]['decayMode']
          except:
            try: # Isotope Stable
              noModes = True
              decayModes = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['string']
            except: # Baryon Stable
              noModes = True
              decayModes = data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['string']
        
        # Get Value
        
        if not noModes:
          for decayMode in decayModes:
            totalProb += float(decayMode['probability'][0]['double'][0]['@value']) # Add prob
        
        value = str(round(totalProb,8))
        
        if noModes: value = decayModes[0]['@value'] + '?' # No decay modes, get halflife
        
        # Log
        
        target = round(1.0,8)
        #if round(totalProb,8) != target and not noModes: logging.info('Decay Prob. ' + str(round(totalProb,8)) + ' found in ' + path)
        
      
      # Add if single
      
      if single:
        
        value = str(value) # Ensure its a string
        
        if value not in outArr: # Not in array
          outArr.append(value) # Add to array
        
      
    except Exception as e:
      
      logging.exception(('Failed to process "' + xmlDir + path + '"'))
      
    


# Pre-Loop

print('Enter "quit" to quit')
print('Modes: ' + str(modes))

# Main Loop

while run:
  
  # Input
  
  mode = '' # Reset
  
  print('')
  while mode not in modes:
    
    mode = input('Mode: ').lower() # Get and set to mode
    
    if mode == 'quit':
      run = False
      break
    
  
  if mode in modes: # Skip if invalid
    
    print('')
    
    # Read Files
    
    readFiles(mode) # Call
    
    # Print Output
    
    print('\n\nOut:\n')
    
    for item in outArr: # Print
      print(str(item) + ', ', end='')
    
    outArr = [] # Reset
    
    print('')
    
  
