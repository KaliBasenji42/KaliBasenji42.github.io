import os

# Variables

run = True

instructions = [
  'Input "quit" to quit',
  'Input "?" to reprint this',
  'Input "temp" to update template marked areas',
  'Input "django" to set up links to for Djando'
]

paths = []
exts = [
  '.html'
]

jsPaths = []
jsExts = [
  '.js'
]

location = '.'

# Template

templatePath = 'template.html'
templateCont = []
template = []
tempStart = '<!--Start-->\n'
tempEnd = '<!--End-->\n'

projectId = '{project}'
projectDepth = len('templates/site/') # What to cut off in front of Project

# Django

urlsPath = 'urls.py'
viewsPath = 'views.py'

urls = []

allowedAttributes = ['href', 'src']
allowedElements = ['a', 'img', 'link', 'script']

djangoInject = '# inject\n'
djangoInjectEnd = '# inject end\n'

# Simple Functions

def cutStringAt(string, char):
  
  for i in range(len(string)):
    
    if string[i] == char: return string[:i]
    
  
  return string
  

def remFile(string):
  
  for i in range(len(string)):
    
    if string[-i] == '/': return string[:-i]
    elif string[-i] == '\\': return string[:-i]
    
  
  return ''
  

# Complex Functions

def getPaths():
  
  print('Getting file paths:\n')
  
  for root, directories, files in os.walk(location):
    
    for file in files:
      
      path = os.path.normpath(os.path.join(root, file))
      
      # HTML
      
      match = False
      
      for ext in exts:
        if path[-len(ext):] == ext: match = True
      
      if path == templatePath: match = False
      
      if match:
        
        try: 
          
          with open(path, 'r+', encoding='utf-8', errors='ignore') as file: pass
          
        except: print('Unable to open "' + path + '" :/')
        else:
            
          paths.append(path)
          print('Added "' + path + '" to paths')
          
        
      
      # JS
      
      jsMatch = False
      
      for ext in jsExts:
        if path[-len(ext):] == ext: jsMatch = True
      
      if jsMatch:
        
        try: 
          
          with open(path, 'r+', encoding='utf-8', errors='ignore') as file: pass
          
        except: print('Unable to open "' + path + '" :/')
        else:
            
          jsPaths.append(path)
          print('Added "' + path + '" to jsPaths')
          
        
      
    
  

def readTemplate():
  
  print('Reading Template:\n')
  
  try:
    
    with open(templatePath, 'r+', encoding='utf-8', errors='ignore') as file: templateCont = file.readlines()
    
  except:
    
    print('Unable to open Template :/')
    
    return False # Fail
    
  else:
    
    add = False
    
    cont = []
    
    for line in templateCont:
      
      if line == tempStart: add = True
      
      elif line == tempEnd:
        
        add = False
        
        template.append(cont)
        cont = []
        
      
      elif add: cont.append(line)
      
    
    for sect in template:
      
      print('Start')
      
      for line in sect: print(line, end='')
      
      print('End')
      
    
  
  return True # Success
  

def templateEdit():
  
  if input('Enter "y" to continue: ') != 'y': return
  
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
        
        if line == tempEnd: # End of template section
          
          newCont.append(line)
          
          addCont = True
          
        
        elif line == tempStart: # Start of template section
          
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
      
    
  

def djangoUrls():
  
  print('Getting URLs:\n')
  
  for path in paths:
    
    cont = [] # Content of file before writing
    
    try:
      
      with open(path, 'r+', encoding='utf-8', errors='ignore') as file: cont = file.read()
      
    except:
      
      print('Unable to open "' + path + '" :/')
      
      return False # Fail
    
    else:
      
      isJs = False
      
      for ext in jsExts:
        if path[-len(ext):] == ext: isJs = True
      
      # js comment thing
      
      inElement = False # If in an allowedElements
      afterAttribute = False # If after an allowedAttributes
      inString = False # If in quotes
      
      url = ''
      
      for i in range(len(cont)): # Iterate characters in file
        
        # JS
        
        if isJs:
          
          pass
          # WIP
          
        
        # In Element
        
        if not inElement:
          for element in allowedElements:
            if i > len('<'+element):
              if cont[i-len('<'+element):i] == '<' + element: inElement = True
        
        # After Attribute
        
        if not afterAttribute and inElement:
          for attribute in allowedAttributes:
            if i > len(attribute):
              if cont[i-len(attribute):i] == attribute: afterAttribute = True
        
        # In String
        
        if inString and cont[i] == '"': # End
          
          inElement = False
          afterAttribute = False
          inString = False
          
          # Normalize & Add URL
          
          if len(url) >= len('https://'):
            if url[:len('https://')] == 'https://': break
          
          pathPos = remFile(path)
          
          normPath = os.path.normpath(os.path.join(pathPos, url))
          
          if normPath[:len('myapp')] == 'myapp': normPath = normPath[len('myapp/'):]
          
          if normPath.find('{project}') < 0:
            
            urls.append(normPath)
            
            print('Added "' + normPath + '"')
            
          
          url = ''
          
        
        elif afterAttribute and cont[i] == '"': inString = True # Start
        
        elif inString: url = url + cont[i] # In String: Add to URL
        
      
    
  
  return True # Success
  

def djangoSetFiles():
  
  if input('Enter "y" to continue: ') != 'y': return
  
  print('\nWriting to Files:\n')
  
  # urls
  
  urlsCont = [] # Content of file before writing
  
  try:
    
    with open(urlsPath, 'r+', encoding='utf-8', errors='ignore') as file: urlsCont = file.readlines()
    
  except: print('Unable to open "' + urlsPath + '" :/')
  
  else:
    
    newCont = [] # Content to be writen to file
    
    inject = False # Should inject
    
    for line in urlsCont:
      
      if line == djangoInject: 
        
        inject = True
        newCont.append(line)
        
        for i in range(len(urls)):
          
          newCont.append(
            '  path("' + urls[i] + '", views.injected' + str(i) + '),\n'
          )
          
        
      elif line == djangoInjectEnd: inject = False
      
      if not inject:
        
        newCont.append(line)
        
      
    
    # Write to file
    
    with open(urlsPath, 'w', encoding='utf-8', errors='ignore') as file: file.writelines(newCont)
    
    # Print
    
    print('Updated "' + urlsPath + '"')
    
  


# Pre Loop

getPaths()

print()

for string in instructions: print(string)

# Input Loop

while run:
  
  print()
  inp = input('Input: ').lower()
  print()
  
  if inp == 'quit': run = False
  
  elif inp == '?':
    for string in instructions: print(string)
  
  elif inp == 'temp':
    
    if readTemplate():
      print()
      templateEdit()
    
  
  elif inp == 'django':
    
    if djangoUrls():
      print()
      djangoSetFiles()
      urls = []
    
  
