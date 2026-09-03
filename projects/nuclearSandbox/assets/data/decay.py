# Python file that converts ENDF GNDS data into JSON for decay data. Also produces Bateman Series (in a JSON)

# KaliBasenji42's Website
# Copyright (C) 2025 KaliBasenji42

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
import math
import logging

logging.basicConfig(
  level=logging.DEBUG,
  format='%(asctime)s | %(filename)s:%(lineno)s | %(levelname)s: %(message)s',
  filename='app.log'
)

# Variables

xmlDir = 'ENDF-B-VIII.1-GNDS/decay/'
outputPath = 'decay.json'

outDict = {} # Outputted data

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

# Read XMLs

for i in range(len(xmlPaths)): # Each file
  
  path = xmlPaths[i] # Path
  
  # Progress
  
  print('Progress: ' +
        str(round((i+1) / len(xmlPaths) * 100,2)) + 
        '%        \033[F'
  )
  
  # Try to process each file
  
  try:
    
    # Variables
    
    isotope = 'Err!' # Isotope ID/Symbol
    
    isoData = { # Isotope data dictionary
      'name': 'Err!',
      'symbol': 'Err!',
      'z': -1,
      'n': -1,
      'a': -1,
      'mass': -1,
      'halflife': 'Err!',
      'decayConstant': 'Err!',
      'decayModes': []
    }
    
    # Read file
    
    with open(xmlDir + path, 'r') as file: # Read file
      xmlData = file.read()
    
    data = xmltodict.parse(xmlData, force_list=True) # Dictionary data
    
    # Single Values
    
    try: # Chemical Element
      isoData['name'] = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['@name']
    except: # Baryon
      isoData['name'] = data['PoPs'][0]['baryons'][0]['baryon'][0]['@id'] + '?'
    # name
    
    try: # Chemical Element
      isoData['symbol'] = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['@symbol']
    except: # Baryon
      isoData['symbol'] = data['PoPs'][0]['baryons'][0]['baryon'][0]['@id']
    # symbol
        
    try: # Chemical Element
      isoData['z'] = int(data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['@Z'])
    except: # Baryon
      isoData['z'] = 0
    # z
    
    try: # Isotope
      isoData['a'] = int(data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['@A'])
    except: # Baryon
      isoData['a'] = 1
    # a
    
    try: # Isotope
      isoData['mass'] = float(data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['mass'][0]['double'][0]['@value'])
    except: # Baryon
      isoData['mass'] = float(data['PoPs'][0]['baryons'][0]['baryon'][0]['mass'][0]['double'][0]['@value'])
    # mass
    
    try: # Isotope Double
      isoData['halflife'] = float(data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['double'][0]['@value'])
    except:
      try: # Isotope String
        isoData['halflife'] = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['string'][0]['@value']
      except: 
        try: # Baryon Double
          isoData['halflife'] = float(data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['double'][0]['@value'])
        except: # Baryon String
          isoData['halflife'] = data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['string'][0]['@value']
    # halflife
    
    isoData['n'] = isoData['a'] - isoData['z'] # n
    
    if isoData['halflife'] == 'stable': isoData['decayConstant'] = 'stable'
    elif isoData['halflife'] == 0: isoData['decayConstant'] = 'inf'
    else: isoData['decayConstant'] = math.log(2) / isoData['halflife']
    # decayConstant
    
    isotope = str(isoData['a']) + isoData['symbol'] # isotope
    
    # Decay Modes
    
    decayModes = []
    
    try: # Isotope
      decayModes = data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['decayData'][0]['decayModes'][0]['decayMode']
    except:
      try: # Baryon
        decayModes = data['PoPs'][0]['baryons'][0]['baryon'][0]['decayData'][0]['decayModes'][0]['decayMode']
      except:
        try: # Isotope Stable
          data['PoPs'][0]['chemicalElements'][0]['chemicalElement'][0]['isotopes'][0]['isotope'][0]['nuclides'][0]['nuclide'][0]['nucleus'][0]['halflife'][0]['string']
        except: # Baryon Stable
          data['PoPs'][0]['baryons'][0]['baryon'][0]['halflife'][0]['string']
    
    
    for decayMode in decayModes: # For each decay mode
      
      isoData['decayModes'].append({
        'mode': decayMode['@mode'],
        'prob': float(decayMode['probability'][0]['double'][0]['@value'])
      })
      
    
    # Add to output
    
    outDict[isotope] = isoData
    
  except Exception as e:
    
    logging.exception(('Failed to process "' + path + '"'))
    

# Write JSON

with open(outputPath, 'w') as file:
    file.write(json.dumps(outDict, indent=2))
