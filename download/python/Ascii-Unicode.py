# KaliBasenji42's Website
# Copyright (C) 2025 KaliBasenji42

# This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; version 2 of the License.

# This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

# You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

# License: https://kalibasenji.xeroideas.org/LICENSE.md
# GPL v2: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
# KaliBasenji42's Github: https://github.com/KaliBasenji42

import unicodedata

# Variables

run = True

search = []

searchMode = False
searchVal = 2

allChars = []

# Functions

def strContains(string, test):
    
    for i in range(len(string) - len(test) + 1):
        
        segment = string[i:i+len(test)]
        
        if segment.upper() == test.upper(): return True
        
    
    return False
    

def arrayContains(array, value):
    
    for item in array:
        
        if item == value: return True
        
    
    return False
    

def strToArray(string):
    
    out = []
    
    var = ''
    
    div = ', '
    
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
    

def codeToChar(code):
    
    char = chr(code)
    
    try: name = unicodedata.name(char)
    except: name = 'None'
    
    try: category = unicodedata.category(char)
    except: category = 'None'
    
    return [char, code, name, category]
    

def load(start, end):
    
    global allChars
    
    if start > end: return '\nStart greater then End'
    elif end > 1114111: return '\nEnd too great (max 1114111)'
    else: print('\nLoading...')
    
    allChars = []
    
    for i in range(start, end + 1):
        
        allChars.append(i)
        
    
    return '\nLoaded!'
    

def hasAnyTerm(char, value, terms):
    
    fullChar = codeToChar(char)
    
    for term in terms:
        
        if strContains(fullChar[value], term): return True
        
    
    return False
    

def hasAllTerms(char, value, terms):
    
    fullChar = codeToChar(char)
    
    for term in terms:
        
        if not(strContains(fullChar[value], term)): return False
        
    
    return True
    

def searchInclude(allChars, chars, value, terms):
    
    out = chars
    
    validChars = []
    
    for char in allChars:
        
        if hasAnyTerm(char, value, terms): out.append(char)
        
    
    out = list(set(out))
    
    return out
    

def searchExclude(chars, value, terms):
    
    out = []
    
    for char in chars:
        
        hasTerm = hasAnyTerm(char, value, terms)
        
        if not(hasTerm): out.append(char)
        
    
    return out
    

def searchFilter(chars, value, terms):
    
    out = []
    
    for char in chars:
        
        hasTerms = hasAllTerms(char, value, terms)
        
        if hasTerms: out.append(char)
        
    
    return out
    

# Before Loop

print('This is program is licensed under the GPL v2 license\n')
print('Input "quit" to quit')
print('Input single char to return decimal unicode')
print('Input number (longer than 1 digit) to return character')
print('Input "load" to load characters for search')
print('Input "search" to enter search mode')
print('input "back" to go back')

# Main Loop

while run:
    
    print('')
    
    inp = input('Input: ')
    
    print('')
    
    # Quit
    
    if inp == 'quit': run = False
    
    # Mode
    
    if inp == 'search':
        
        searchMode = True
        
        print('Input "name" or "cate" to switch Searched Value')
        print('Search types (input to search current search value):')
        print('  "inc" to include (adds char with any term)')
        print('  "exc" to exclude (removes char with any term)')
        print('  "filt" to filter (removes char without all terms)')
        print('When searching use ", " to seperate terms')
        print('input term "" for all, and "!" for none')
        print('input "out" to print Search items')
        
    
    if inp == 'back':
        
        searchMode = False
        
        print('Back to Code - Char')
        
    
    # Defualt Mode
    
    elif len(inp) == 1 and not(searchMode):
        
        try: print('Decimal Code: ' + str(ord(inp)))
        except: print('Decimal Code not found')
        
        try: print('Hex Code: ' + (str(hex(ord(inp))))[2:])
        except: print('Hex Code not found')
        
        try: print('Name: ' + unicodedata.name(inp))
        except: print('Name not found')
        
        try: print('Category: ' + unicodedata.category(inp))
        except: print('Category not found')
        
    elif len(inp) > 1 and inp.isnumeric() and not(searchMode):
        
        try: print('Character: ' + chr(int(inp)))
        except: print('Character not found')
        
        try: print('Name: ' + unicodedata.name(chr(int(inp))))
        except: print('Name not found')
        
        try: print('Category: ' + unicodedata.category(chr(int(inp))))
        except: print('Category not found')
        
    
    # Search Mode
    
    if inp == 'load':
        
        err = ''
        
        inpStart = input('Start: ')
        
        if not(inpStart.isnumeric()): err = '\nStart not +int'
        
        if err == '':
            
            inpEnd = input('End: ')
            
            if not(inpEnd.isnumeric()): err = '\nEnd not +int'
            
        
        if err == '': print(load(int(inpStart), int(inpEnd)))
        else: print(err)
        
    
    if searchMode:
        
        if inp == 'out':
            
            for char in search:
                
                fullChar = codeToChar(char)
                
                print(fullChar[0] + ': Dec.: ' + str(fullChar[1]) +
                      ', Name: ' + fullChar[2] + ', Category: ' + fullChar[3])
                
            
        
        if inp == 'name':
            
            searchVal = 2
            print('Changed Search Value to Name')
            
        
        if inp == 'cate':
            
            searchVal = 3
            print('Changed Search Value to Category')
            
        
        if inp == 'inc':
            
            termsInp = input('Terms: ')
            terms = strToArray(termsInp)
            
            search = searchInclude(allChars, search, searchVal, terms)
            
            print('\n' + str(len(search)) + ' chars in Search')
            
        
        if inp == 'exc':
            
            termsInp = input('Terms: ')
            terms = strToArray(termsInp)
            
            search = searchExclude(search, searchVal, terms)
            
            print('\n' + str(len(search)) + ' chars in Search')
            
        
        if inp == 'filt':
            
            termsInp = input('Terms: ')
            terms = strToArray(termsInp)
            
            search = searchFilter(search, searchVal, terms)
            
            print('\n' + str(len(search)) + ' chars in Search')
            
        
    
    # Other
    
    if inp == 'wall':
        
        codeInp = input('Code: ')
        
        if not codeInp.isnumeric(): print('Code not +int')
        elif int(codeInp) > 1114111: print('Code to great')
        else:
            
            char = chr(int(codeInp))
            string = '\n'
            
            for i in range(500):
                
                string += char
                
            
            print(string)
            
        
    
