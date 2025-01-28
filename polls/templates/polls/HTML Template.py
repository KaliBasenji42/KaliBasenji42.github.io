import os

# Variables

paths = []

location = '.'
ext = '.html'

templatePath = 'Template.html'
templateCont = []
template = []
start = '<!--Start-->\n'
end = '<!--End-->\n'

projectId = '<Project>'

# Getting Paths

print('\nGetting file paths:\n')

for root, directories, files in os.walk(location):
  
  for file in files:
    
    path = os.path.normpath(os.path.join(root, file))
    
    match = path[-len(ext):] == ext
    if path == templatePath: match = False
    
    if match:
      
      try: 
        
        with open(path, 'r+', encoding='utf-8', errors='ignore') as file: pass
        
      except: print('Unable to open "' + path + '" :/')
      else:
          
        paths.append(path)
        print('Added "' + path + '"')
        
      
    
  

# Reading Template

print('\nReading Template:\n')

try:
  
  with open(templatePath, 'r+', encoding='utf-8', errors='ignore') as file: templateCont = file.readlines()
  
except:
  
  print('Unable to open Template :/')
  
  exit()
  
else:
  
  add = False
  
  cont = []
  
  for line in templateCont:
    
    if line == start: add = True
    
    elif line == end:
      
      add = False
      
      template.append(cont)
      cont = []
      
    
    elif add: cont.append(line)
    
  
  for sect in template:
    
    print('Start')
    
    for line in sect: print(line, end='')
    
    print('End\n')
    
  

# Edit

if input('Enter "y" to continue: ') != 'y': exit()

print('\nWriting to Files:\n')

for path in paths:
  
  cont = []
  
  try:
    
    with open(path, 'r+', encoding='utf-8', errors='ignore') as file: cont = file.readlines()
    
  except: print('Unable to open "' + path + '" :/')
  else:
    
    addCont = True # If it should add content, not template
    
    newCont = []
    
    sect = 0
    
    for line in cont:
      
      # Find ProjectId
      
      # Start/End
      
      if line == end:
        
        newCont.append(line)
        
        addCont = True
        
      
      elif line == start:
        
        newCont.append(line)
        
        addCont = False
        
        newCont = newCont + template[sect]
        
        sect += 1
        
      
      elif addCont: newCont.append(line)
      
    
    with open(path, 'w', encoding='utf-8', errors='ignore') as file: file.writelines(newCont)
    
    print('Updated "' + path + '"')
    
  

input('\nquit: ')