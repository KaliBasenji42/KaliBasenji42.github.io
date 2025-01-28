import os

# Variables

paths = []

urlsPath = 'urls.py'
viewsPath = 'views.py'

location = 'templates'
ext = '.html'

urlsCont = [
  'from django.urls import path',
  'from . import views',
  'urlpatterns = ['
]
viewsCont = [
  'from django.shortcuts import render'
]

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
    
    try: 
      
      with open(path, 'r+', encoding='utf-8', errors='ignore') as file: pass
      
    except: print('Unable to open "' + path + '" :/')
    else:
        
      paths.append(path)
      print('Added "' + path + '"')
      
    
  

print('\n Generating Content:\n')

for path in paths:
  
  print(path[])
  
  urlsCont.append('path(\'' + path[] + '\'')
  

# Edit

if input('Enter "y" to write to files: ') != 'y': exit()

print('\nWriting to Files:\n')

try:
  
  with open(urlsPath, 'r+', encoding='utf-8', errors='ignore') as file: pass
  
except: print('Unable to open "' + urlsPath + '" :/')


input('\nquit: ')
