# KaliBasenji42's Website
# Copyright (C) 2025 KaliBasenji42

# This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; version 2 of the License.

# This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

# You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

# License: https://kalibasenji.xeroideas.org/LICENSE.md
# GPL v2: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
# KaliBasenji42's Github: https://github.com/KaliBasenji42

# Setup & Variables & Gemeration

import random

run = True
draw = []
drawPos = 0
drawsLeft = 2
selected = [0, 0, 0, 0]
inpStep = -1
inpStepKey = ['Horz 1 or Card 1', 'Vert 1 or Card 1',
              'Horz 2 or Card 2', 'Vert 2 or Card 2']
suitSymbol = True


    # Deck

cardSuits = ['♣', '♦', '♥', '♠']
cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K']

deck = []

for s in range(4):
    
    for v in range(13):
        
        deck.append(cardValues[v] + cardSuits[s])
        
    

    # Grid

grid = [ ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
         ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
         ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
         ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
         ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
         ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
         ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
         ['  ', '  ', '  ', '  ', '  ', '  ', '  '],
         ['  ', '  ', '  ', '  ', '  ', '  ', '  '] ]

gridPos = [ [0, 3],
            [1, 2], [1, 3],
            [2, 2], [2, 3], [2, 4],
            [3, 1], [3, 2], [3, 3], [3, 4],
            [4, 1], [4, 2], [4, 3], [4, 4], [4, 5],
            [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5],
            [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6] ]

for pos in gridPos:
    
    card = random.randint(0, len(deck)-1)
    
    grid[pos[0]][pos[1]] = deck[card]

    del deck[card]
    

    # Draw

while len(deck) > 0:
    
    card = random.randint(0, len(deck)-1)
    
    draw.append(deck[card])
    
    del deck[card]
    

draw.append('  ')
draw.insert(0, '  ')

grid[8][2] = draw[drawPos]
grid[8][4] = draw[drawPos + 1]

# Functions

def isIntInp(inp):
    
    out = False
    
    nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    
    for i in range(len(nums)):
        
        if nums[i] == inp: out = True
        
    
    return out
    

def isCardInp(inp):
    
    inp = inp.upper()
    
    cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K']
    
    cardSuits = ['C', 'D', 'H', 'S', '♣', '♦', '♥', '♠']
    
    isValue = False
    
    isSuit = False
    
    if len(inp) != 2:
        
        return False
        
    
    for value in range(len(cardValues)):
        
        if cardValues[value] == inp[0:1]: isValue = True
        
    
    for suit in range(len(cardSuits)):
        
        if cardSuits[suit] == inp[1:2]: isSuit = True
        
    
    return value and suit
    

def cardToCords(card):
    
    global grid
    
    cords = [0, 0]
    
    symSuits = ['♣', '♦', '♥', '♠']
    charSuits = ['C', 'D', 'H', 'S']
    
    symCard = card
    charCard = card
    
    for i in range(4):
        
        if symCard[1:2] == charSuits[i]:
            
            symCard = symCard[0:1] + symSuits[i]
            
        
        if charCard[1:2] == symSuits[i]:
            
            charCard = charCard[0:1] + charSuits[i]
            
        
    
    for x in range(7):
        
        for y in range(9):
            
            if symCard == grid[y][x] or charCard == grid[y][x]:
                
                cords = [x, y]
                
            
        
    
    return cords
    

def reset():
    
    global draw, drawPos, drawsLeft, selected, inpStep, deck, grid
    
    draw.clear()
    drawPos = 0
    drawsLeft = 2
    selected = [0, 0, 0, 0]
    inpStep = -1
    
    # Deck
    
    deck = []
    
    for s in range(4):
        
        for v in range(13):
            
            deck.append(cardValues[v] + cardSuits[s])
            
        
    
    # Grid
    
    for pos in gridPos:
        
        card = random.randint(0, len(deck)-1)
        
        grid[pos[0]][pos[1]] = deck[card]
        
        del deck[card]
        
    
    # Draw
    
    while len(deck) > 0:
        
        card = random.randint(0, len(deck)-1)
        
        draw.append(deck[card])
        
        del deck[card]
        
    
    draw.append('  ')
    draw.insert(0, '  ')
    
    grid[8][2] = draw[drawPos]
    grid[8][4] = draw[drawPos + 1]
    

def render(grid):
    
    print('')
    
    # X Pos
    
    print('    0   1   2   3   4   5   6')
    
    # Cards
    
    for yPos in range(9):
        
        row1 = str(yPos) + ' '
        row2 = '  '
        
        # Shift

        if yPos % 2 == 1:
            
            row1 = row1 + '  '
            row2 = row2 + '  '
            
        
        # Card
        
        for xPos in range(7):
            
            if grid[yPos][xPos] == '  ':
                
                row1 = row1 + '    '
                row2 = row2 + '    '
                
            else:
                
                row1 = row1 + '|' + grid[yPos][xPos][0:1] + '| '
                row2 = row2 + '|' + grid[yPos][xPos][1:2] + '| '
                
            
        
        # Print
        
        print(row1)
        print(row2)
        
    
    print('')
    

def free(grid, x, y):
    
    offset = -((y + 1) % 2)
    
    if y > 6 or (offset >= 0 and x >= 6):
        
        return True
        
    else:
        
        return (grid[y + 1][x + offset] == '  ' and grid[y + 1][x + offset + 1] == '  ')
        
    

def cardValue(val):
    
    global cardValues
    
    val = val[0:1]
    
    out = 0
    
    for i in range(13):
        
        if cardValues[i] == val:
            
            out = i + 1
            
        
    
    return out
    

# Title & Instructions

print('\n')
print('                    A    /\\   Pyramid   /\\    A                    ')
print('        _______/\\__/-\\__/--\\ Solitare: /--\\__/-\\__/\\_______        ')
print('')
print('This is program is licensed under the GPL v2 license')
print('')
print('Enter "q" to quit and "r" to reset.')
print('Enter the cordinates of the cards you wish to select (Horz, Vert)')
print('Or enter the card EX: "A♠", "a♠", "AS", "as", "aS"')
print('Enter "d" or "n" to foward the draw pile.')
print('Enter "?" for more info')
print('Note: 10s are represented as 0s, this includes inputs.')

render(grid)

# Main Loop

while run:
    
    inp = input(inpStepKey[inpStep + 1] + ': ').lower()
    
    # Info
    
    if inp == '?':
        
        print('')
        print('    Inputs:')
        print('')
        print('Enter "q" to quit and "r" to reset.')
        print('Enter the cordinates of the cards you wish to select (Horz, Vert)')
        print('Or enter the card EX: "A♠", "a♠", "AS", "as", "aS"')
        print('Enter "d" or "n" to foward the draw pile.')
        print('Enter "?" for more info')
        print('Note: 10s are represented as 0s, this includes inputs.')
        print('')
        print('    Debug:')
        print('')
        print('Enter "suit" if the suit symbols are miss sized.*')
        print('Enter "render" to render.')
        print('*You must reset ("r") for it to take affect.')
        print('')
        print('    Values:')
        print('')
        print('drawPos: ' + str(drawPos))
        print('Draws Left: ' + str(drawsLeft))
        print('inpStep: ' + str(inpStep))
        print('')
        print('    Arrays:')
        print('')
        print('selected:')
        print(selected)
        print('')
        print('draw:')
        print('Enter "draw" to view, do not cheat')
        print('')
        print('grid:')
        print(grid)
        print('')
        
    
    if inp == 'draw':
        
        print('')
        print('draw:')
        print(draw)
        print('')
    
    # Debug    
    
    if inp == 'suit':
        
        if suitSymbol:
            
            cardSuits = ['C', 'D', 'H', 'S']
            
        
        if not(suitSymbol):
            
            cardSuits = ['♣', '♦', '♥', '♠']
            
        
        suitSymbol = not(suitSymbol)
        
        print('suits: ' + str(cardSuits))
        
    
    if inp == 'render':
        
        render(grid)
        
    
    # Quit & Reset
    
    if inp == 'q':
        
        run = False
        
    
    if inp == 'r':
        
        reset()
        
        render(grid)
        
    
    # Foward Draw
    
    if inp == 'd' or inp == 'n':
        
        drawPos += 1
        
        selected = [0, 0, 0, 0]
        
        inpStep = 0
        
        # Reset
        
        if drawPos == len(draw) - 1:
            
            if drawsLeft > 0:
                
                drawPos = 0
                
                drawsLeft += -1
                
                print('')
                print('Draws Left: ' + str(drawsLeft))
                
            
            else:
                
                print('')
                print('Out of draws, press r to reset')
                
                drawPos = len(draw) - 2
                
            
        
        # Print
        
        print('')
        print(str((len(draw) - drawPos) - 2) + ' Left')
        
        # Render
        
        grid[8][2] = draw[drawPos]
        grid[8][4] = draw[drawPos + 1]
        
        render(grid)
        
    
    # Selection
    
    if isIntInp(inp) or isCardInp(inp):
        
        # Cordinate
        
        if isIntInp(inp):
            
            intInp = int(inp)
            
            inpStep += 1
            
            selected[inpStep] = intInp
            
            x1 = selected[0]
            y1 = selected[1]
            x2 = selected[2]
            y2 = selected[3]
            
            if x1 > 6:
                
                x1 = 6
                
            
            if x2 > 6:
                
                x2 = 6
                
            
        
        # Card
        
        if isCardInp(inp):
            
            inp = inp.upper()
            
            cords = cardToCords(inp)
            
            if cords == [0, 0]:
                
                print('Not on Screen')
                
            
            else:
                
                if inpStep == -1 or inpStep == 0:
                    
                    inpStep = 1
                    
                    selected[0] = cords[0]
                    selected[1] = cords[1]
                    
                
                elif inpStep == 1 or inpStep == 2:
                    
                    inpStep = 3
                    
                    selected[2] = cords[0]
                    selected[3] = cords[1]
                    
                
                x1 = selected[0]
                y1 = selected[1]
                x2 = selected[2]
                y2 = selected[3]
                
                print('Selected: ' + str(selected))
                
            
        
        # King
        
        if inpStep == 1 and cardValue(grid[y1][x1]) == 13 and free(grid, x1, y1):
            
            grid[y1][x1] = '  '
            
            # Draw
            
            if y1 == 8:
                
                if x1 == 2:
                    
                    draw.pop(drawPos)
                    
                    drawPos += -1
                    
                
                if x1 == 4:
                    
                    draw.pop(drawPos + 1)
                    
                
                # Print
                
                print('')
                print(str((len(draw) - drawPos) - 2) + ' Left')
                print('')
                
            
            grid[8][2] = draw[drawPos]
            grid[8][4] = draw[drawPos + 1]
            
            # Render & Reset
            
            render(grid)
            
            selected = [0, 0, 0, 0]
            x1 = 0
            y1 = 0
            x2 = 0
            y2 = 0
            
            inpStep = -1
            
        
        # 2 Cards
        
        if (inpStep == 3 and
        free(grid, x1, y1) and free(grid, x2, y2) and
        cardValue(grid[y1][x1]) + cardValue(grid[y2][x2]) == 13):
            
            grid[y1][x1] = '  '
            grid[y2][x2] = '  '
            
            # Draw
            
            if y1 == 8:
                
                if x1 == 2:
                    
                    draw.pop(drawPos)
                    
                    drawPos += -1
                    
                
                if x1 == 4:
                    
                    draw.pop(drawPos + 1)
                    
                
                # Print
                
                print('')
                print(str((len(draw) - drawPos) - 2) + ' Left')
                print('')
                
            
            if y2 == 8:
                
                if x2 == 2:
                    
                    draw.pop(drawPos)
                    
                    drawPos += -1
                    
                
                if x2 == 4:
                    
                    draw.pop(drawPos + 1)
                    
                
                # Print
                
                print('')
                print(str((len(draw) - drawPos) - 2) + ' Left')
                print('')
                
            
            grid[8][2] = draw[drawPos]
            grid[8][4] = draw[drawPos + 1]
            
            # Render & Reset
            
            render(grid)
            
            selected = [0, 0, 0, 0]
            x1 = 0
            y1 = 0
            x2 = 0
            y2 = 0
            
            inpStep = -1
            
        
        # Invalid
        
        elif inpStep == 3:
            
            print('')
            print('Invalid')
            print('')
            
            selected = [0, 0, 0, 0]
            x1 = 0
            y1 = 0
            x2 = 0
            y2 = 0
            
            inpStep = -1
            
        
        # Win
        
        if grid[0][3] == '  ':
            
            print('')
            print('You Win!')
            print('')
            
            reset()
            
            render(grid)
            
        
    
