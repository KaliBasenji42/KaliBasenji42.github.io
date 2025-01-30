import os

# Variables

paths = []

location = '.'
ext = '.html'

templatePath = 'template.html'
templateCont = []
template = []
start = '<!--Start-->\n'
end = '<!--End-->\n'

projectId = '<project>'
projectDepth = len('templates/site/') # What to cut off in front of Project

# Functions

def cutStringAt(string, char):
  
  for i in range(len(string)):
    
    if string[i] == char: return string[:i]
    
  
  return string
  

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
  
  cont = [] # Content of file before writing
  
  try:
    
    with open(path, 'r+', encoding='utf-8', errors='ignore') as file: cont = file.readlines()
    
  except: print('Unable to open "' + path + '" :/')
  
  else:
    
    addCont = True # If it should add content, not template section
    
    newCont = [] # Content to be writen to file
    
    sect = 0 # Template section
    
    project = cutStringAt(path[projectDepth:], '\\')
    
    # Start/End
    
    for line in cont:
      
      if line == end: # End of template section
        
        newCont.append(line)
        
        addCont = True
        
      
      elif line == start: # Start of template section
        
        newCont.append(line)
        
        addCont = False
        
        newCont = newCont + template[sect] # Add template content
        
        sect += 1 # Iterate
        
        # Ignore old HTML file content
        
      
      elif addCont: newCont.append(line)
      # ^^^ Add old HTML file content
      
    
    # Replace Project Id
    
    for i in range(len(newCont)):
      
      line = newCont[i].replace(projectId, project)
      newCont[i] = line
      
      
    
    # Write to file
    
    with open(path, 'w', encoding='utf-8', errors='ignore') as file: file.writelines(newCont)
    
    # Print
    
    print('Updated "' + path + '" as Project "' + project + '"')
    
  

input('\nquit: ')
