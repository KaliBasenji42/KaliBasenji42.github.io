// Variables and Constants

let calcTable = {}; // Holds more data for each item

let settings = { // Default settings
  'maxCalcIter': 100, // Number of calculations before throwing error
  'NumInpDgts': 3, // Number of digits allowed for number inputs
  'zeroIsComplete': true, // Do not count unaffected items in complete %
  'reuseBypro': true, // Should reuse byproduct to discount demand
  'greaterColor': '#00ffff', // Color of cells greater than 0
  'lessColor': '#ff0000', // Color of cells less than 0
  'drawCalcTbl': false, // Wether to auto render Calc. Table
  'powerConsFunc': 'sat', // Function used to calculate power consumption (positive)
  'powerConsCust': '', // Uses eval(), "input" as input/buildings
  'powerProdFunc': 'line', // Function used to calculate power production (negative)
  'powerProdCust': '', // Uses eval(), "input" as input/buildings
};

let powerEquations = { // eval()'ed equations for calculating power usage
  'sat': 'baseMW * (sloopMult ** 2) * (clock ** clockPowerExp)',
  'line': 'baseMW * sloopMult * clock',
  'ceil': 'baseMW * sloopMult * Math.ceil(clock)',
  'custCons': settings.powerConsCust,
  'custProd': settings.powerConsProd,
}

let unresolved = new Set; // Set of the names of all unresolved items
let solving = new Set; // Set of the names of all the items being resolved
let iterations = 0; // Number of calculation iterations

let statusKey = {
  'resolved': '✅',
  'solving': '🔄',
  'waiting': '⏸️',
}

let highlightSheet = new CSSStyleSheet();
document.adoptedStyleSheets.push(highlightSheet);
highlightSheet.replace(
  '.greater {background-color: ' + settings.greaterColor + ' !important;}' +
  '.less {background-color: ' + settings.lessColor + ' !important;}'
);

const clockPowerExp = Math.log(2.5) / Math.log(2); // Exponential satisfactory uses for (over)clocking

let calculating = false; // Is calculating (to prevent spam)

// Elements
// Globally declared here, defined on DOM load

let toolbar; // Toolbar
let greyout; // Menu Grey-Out
let Xs; // Menu Xs
let menuBttns; // Toolbar Buttons
let toolSubmit; // Toolbar Submit
let toolStatus; // Status

let saveForm; // Save Form
let loadList; // Load List
let loadOut; // Load Status Output
let uploadForm; // Upload Form
let downloadLink; // Upload Link
let settingsForm; // Settings Form

let MITbl; // Main Interface Table
let MIEditItemForm; // Main Interface Edit Item Form
let MIEditCatForm; // Main Interface Edit Category Form

let RecTbl; // Recipe Table
let RecEditForm; // Recipe Edit Form

let BPAPTbl; // Buildings, Power, & Awesome Poimts Table
let BPAPEditForm; // Buildings, Power, & Awesome Points Edit Building Form
let awesomeTbl; // Awesome Points Tbl

let CTTble; // Calc Table (Each Items demand of Each Item)

// Math/Calc Functions

function powerInd(baseMW, clock, sloopMult) { // Power for individual MW buildings
  if(baseMW >= 0) return eval(powerEquations[settings.powerConsFunc]);
  else return eval(powerEquations[settings.powerProdFunc]);
}

function power(buildings, baseMW, maxClock, sloopMult) { // Function for calculating power usage
  
  return (
    Math.floor(buildings) * powerInd(baseMW, maxClock, sloopMult) + // Whole buildings
    powerInd(baseMW, maxClock * (buildings - Math.floor(buildings)), sloopMult) // Remainder
  );
  
}

async function calculate() { // Calculate items
  
  // Prevent Spam
  
  if(calculating) return
  
  calculating = true;
  
  // Reset
  
  iterations = 0;
  
  unresolved.clear();
  
  calcTable = {};
  
  // Each Item (Init)
  
  for(let item in items) {
    
    unresolved.add(item); // Add to unresolved
    
    // Get Values
    
    let itemRow = document.querySelector('#MITbl > #' + item.replaceAll(' ', '_'));
    
    items[item].complete = itemRow.querySelector('#completeInp').checked;
    items[item].inpDemand = parseFloat(itemRow.querySelector('#inpDemandInp').value);
    items[item].maxClock = parseFloat(itemRow.querySelector('#maxClockingInp').value / 100);
    items[item].sloopMult = parseFloat(itemRow.querySelector('#sloopMultInp').value);
    items[item].recipe = itemRow.querySelector('#recipeInp').value;
    
    // Reset Calc
    
    items[item].calc = 0;
    items[item].calcDemand = 0;
    items[item].byproduct = 0;
    
    // Calc Table
    
    calcTable[item] = {};
    
  }
  
  // Reset Buildings
  
  for(let buildingKey in buildings) {
    
    let building = buildings[buildingKey]; // Building
    
    building['Total'] = 0;
    building['Total MW'] = 0;
    building['Max Total MW'] = 0;
    building['Min Total MW'] = 0;
    
  }
  
  // While unresolved / Demand
  
  while(unresolved.size > 0) {
    
    // Iterations
    
    iterations ++;
    
    if(iterations % settings.maxCalcIter == 0 && iterations > 0) {
      if(!window.confirm('' + iterations + ' iterations. Continue?')) return
    }
    
    // Waiting Status
    
    for(let item in items) {
      items[item].status = 'waiting';
    }
    
    // Move Items Unresolved --> Solving
    
    solving.clear();
    
    unresolved.forEach((itemKey) => {
      solving.add(itemKey);
      items[itemKey].status = 'solving';
    });
    
    unresolved.clear();
    
    // Solving Loop
    
    solving.forEach((itemKey) => {
      
      let item = items[itemKey];
      
      // Update
      
      item.calc = 0;
      item.calcDemand = 0;
      item.byproduct = 0;
      
      for(const [key, value] of Object.entries(calcTable[itemKey])) { // Sum
        if(typeof value === "number") {
          if(settings.reuseBypro) item.calc += value;
          else {
            if(value > 0) item.calcDemand += value;
            else item.byproduct += -value;
          }
        }
      }
      
      if(settings.reuseBypro) {
        if(item.calc < 0) item.byproduct = -item.calc;
        else item.calcDemand = item.calc;
      }
      
      // Variables
      
      let recipe = item.recipes[item.recipe];
      let demand = item.inpDemand + item.calcDemand;
      
      // Each Recipe Item
      
      for(let itemIn in recipe.in) { // In
        
        let itemDemand = (demand * recipe.in[itemIn].amount) / (recipe.out * item.sloopMult); // Demand
        
        if(itemDemand != 0) {
          unresolved.add(recipe.in[itemIn].item); // Add to Unresolved
          calcTable[recipe.in[itemIn].item][itemKey + ' - Input ' + itemIn] = itemDemand; // Add to calcTable
        }
        
      }
      
      for(let itemBypro in recipe.bypro) { // Bypro
        
        let itemDemand = - (demand * recipe.bypro[itemBypro].amount) / (recipe.out * item.sloopMult); // Bypro
        
        if(itemDemand != 0) {
          unresolved.add(recipe.bypro[itemBypro].item); // Add to Unresolved
          calcTable[recipe.bypro[itemBypro].item][itemKey + ' - Bypro ' + itemBypro] = itemDemand; // Add to calcTable
        }
        
      }
      
    });
    
  }
  
  // Ind. Item Calculations
  
  for(let itemKey in items) {
    
    let item = items[itemKey]; // Item
    let recipe = item.recipes[item.recipe]; // Item's Recipe
    let building = buildings[recipe.building]; // Item's Building
    
    item.status = 'resolved'; // Resolved
    
    // Buildings
    
    item.buildings = (item.calcDemand + item.inpDemand) / (item.sloopMult * item.maxClock * recipe.out);
    
    // Power
    
    item.power = power(item.buildings, building['Average MW'], item.maxClock, item.sloopMult);
    item.powerMax = power(item.buildings, building['Max MW'], item.maxClock, item.sloopMult);
    item.powerMin = power(item.buildings, building['Min MW'], item.maxClock, item.sloopMult);
    
    // Awesome Points
    
    item.awesomePtsInp = item.inpDemand * item.awesomePts;
    item.awesomePtsBypro = item.byproduct * item.awesomePts;
    
    // Buildings
    
    for(let buildingKey in buildings) {
      
      let building = buildings[buildingKey]; // Building
      
      if(buildingKey == recipe.building) { // Match
        building['Total'] += Math.ceil(item.buildings);
        building['Total MW'] += item.power;
        building['Max Total MW'] += item.powerMax;
        building['Min Total MW'] += item.powerMin;
      }
      
    }
    
  }
  
  calculating = false; // Prevent Spam
  
}

// Rendering Functions

function textColor(BGColor) { // Returns best (contrast) text color
  // BGColor: background color in hex
  
  let red = parseInt(BGColor.slice(1, 3), 16);
  let green = parseInt(BGColor.slice(3, 5), 16);
  let blue = parseInt(BGColor.slice(5, 7), 16);
  
  if(((red * 0.299) + (green * 0.587) + (blue * 0.114)) < 128) {
    return '#FFFFFF'
  }
  
  return '#000000'
  
}

function sortRows(obj) { // Sorts object based on position data (for rendering rows)
  
  let array = []; // Array to be sorted
  
  for(let key in obj) { // Add [key, pos] pair to array
    array.push([key, obj[key]['pos']]);
  }
  
  array.sort(function(a, b){return a[1] - b[1]}); // Sort array
  
  return array // Return
  
}

function filtCategory(obj, category) { // Filt items based on category (for sorting)
  
  let out = {}; // Object to be returned
  
  for(let key in obj) { // Add 'key': {'pos': pos} object to out
    if(obj[key]['category'] == category) out[key] = {'pos': obj[key]['pos']};
  }
  
  return out // Return
  
}

function renderToolbar() { // Render Toolbar
  
  // Variables
  
  let toolbar = document.getElementById('toolbar');
  
  let length = 0;
  
  let complete = 0;
  let power = 0;
  let awesomePts = 0;
  
  // Get Values
  
  for(let key in items) {
    
    let item = items[key];
    
    if((item['calcDemand'] + item['inpDemand'] != 0) || !settings.zeroIsComplete) length ++;
    if(item['complete']) complete++;
    power += item['power'];
    awesomePts += item['awesomePtsInp'] + item['awesomePtsBypro'];
    
  }
  
  // Set
  
  toolbar.querySelector('#percentComplete').innerText = '' + ((complete / length) * 100).toPrecision(6) + '%';
  toolbar.querySelector('#power').innerText = '' + (power).toPrecision(6) + ' MW';
  toolbar.querySelector('#awesomePts').innerText = '' + (awesomePts).toPrecision(6) + ' Pts.';
  
}

function renderMI() { // Render Main Interface
  
  // Variables
  
  MITbl = document.getElementById('MITbl');
  
  let cats = sortRows(categories); // Sorted categories
  
  // Reset
  
  MITbl.innerHTML = '';
  
  // Column Headers
  
  let headRow = document.createElement('tr'); // Create table row for column headers
  MITbl.appendChild(headRow); // Append row
  
  headRow.innerHTML = `
    <th style="background-color: rgb(192, 128, 128);" title="Category">Cat.</th>
    <th style="background-color: rgb(128, 128, 128);" title="Item Name">Item</th>
    <th style="background-color: rgb(128, 255, 192);" title="Calculation Status">Status</th>
    <th style="background-color: rgb(128, 192, 192);" title="Is Complete (Input)">Complete</th>
    <th style="background-color: rgb(128, 128, 255);" title="Input Demand" class="wideTH">Inp. Demand</th>
    <th style="background-color: rgb(192, 192, 192);" title="Calculated Value" class="wideTH">Calc</th>
    <th style="background-color: rgb(128, 225, 128);" title="Calculated Demand" class="wideTH">Calc. Demand</th>
    <th style="background-color: rgb(255, 192, 128);" title="Total Demand" class="wideTH">Demand</th>
    <th style="background-color: rgb(255, 255, 128);" title="Byproduct" class="wideTH">Bypro.</th>
    <th style="background-color: rgb(128, 192, 255);" title="Max Overclocking for Buildings" class="wideTH">Max Clocking (%)</th>
    <th style="background-color: rgb(255, 128, 128);" title="Somersloop Multiplication" class="wideTH">Sloop Mult.</th>
    <th style="background-color: rgb(192, 128, 192);" title="Number of Buildings (Decimal)" class="wideTH">Buildings</th>
    <th style="background-color: rgb(255, 128, 192);" title="Selected Recipe" class="wideTH">Recipe</th>
    <th style="background-color: rgb(255, 255, 192);" title="Average MW" class="wideTH">Power</th>
    <th style="background-color: rgb(255, 255, 192);" title="Maximum MW" class="wideTH">Power Max</th>
    <th style="background-color: rgb(255, 255, 192);" title="Minimum MW" class="wideTH">Power Min</th>
    <th style="background-color: rgb(255, 192, 192);" title="Awesome Points per Item" class="wideTH">Awe. Pts. Key</th>
    <th style="background-color: rgb(255, 192, 192);" title="Awesome Points from Input Demand" class="wideTH">A.P. InpDemand</th>
    <th style="background-color: rgb(255, 192, 192);" title="Awesome Points from Byproduct" class="wideTH">A.P. Bypro.</th>
  `; // Labels/Headers of each column
  
  for(let cat of cats) { // For each category
    
    let catItems = sortRows(filtCategory(items, cat[0])); // Sorted items, filtered by category
    // (Array)
    
    let catRow = document.createElement('tr'); // Create table row for category
    MITbl.appendChild(catRow); // Append row
    
    let catHead = document.createElement('th'); // Create table header
    catRow.appendChild(catHead); // Append header
    catHead.className = 'catHead'; // Class
    catHead.rowSpan = (catItems.length + 1); // rowSpan
    catHead.innerHTML = '<div><div>' + cat[0] + '</div></div>'; // innerHTML
    catHead.style.backgroundColor = categories[cat[0]]['color']; // BG Color
    catHead.style.color = textColor(categories[cat[0]]['color']); // Text Color
    catHead.title = 'Pos: ' + categories[cat[0]].pos;
    
    for(let catItem of catItems) { // For each item name
      
      let item = items[catItem[0]]; // Item object
      
      let itemRow = document.createElement('tr'); // Create table row for items
      MITbl.appendChild(itemRow); // Append row
      itemRow.id = catItem[0].replaceAll(' ', '_'); // Set Row ID to item name
      
      // Header
      
      let itemHead = document.createElement('th'); // Create item header
      itemRow.appendChild(itemHead); // Append header
      itemHead.innerText = catItem[0]; // innerText
      itemHead.style.backgroundColor = item['color']; // BG Color
      itemHead.style.color = textColor(item['color']); // Text Color
      itemHead.title = 'Pos: ' + item.pos;
      
      // Each column/td
      
      let statusTD = document.createElement('td'); // Declare
      itemRow.appendChild(statusTD); // Append
      statusTD.id = 'status'; // Set ID
      statusTD.style.backgroundColor = 'rgb(192, 255, 224)'; // BG Color
      statusTD.style.textAlign = 'center'; // Center Text
      statusTD.innerText = statusKey[item['status']] // Status
      statusTD.title = item['status'] // Title
      
      let completeTD = document.createElement('td'); // Declare
      itemRow.appendChild(completeTD); // Append
      completeTD.id = 'complete'; // Set ID
      completeTD.style.backgroundColor = 'rgb(192, 224, 224)'; // Color
      completeTD.style.textAlign = 'center'; // Center Text
      let completeInp = document.createElement('input'); // Declare form inp
      completeTD.appendChild(completeInp); // Append inp
      completeInp.id = 'completeInp'; // Set ID inp
      completeInp.type = 'checkbox'; // Type = checkbox
      completeInp.checked = item['complete']; // Item complete
      
      let inpDemandTD = document.createElement('td'); // Declare
      itemRow.appendChild(inpDemandTD); // Append
      inpDemandTD.id = 'inpDemand'; // Set ID
      inpDemandTD.style.backgroundColor = 'rgb(192, 192, 255)'; // Color
      let inpDemandInp = document.createElement('input'); // Declare form inp
      inpDemandTD.appendChild(inpDemandInp); // Append inp
      inpDemandInp.id = 'inpDemandInp'; // Set ID inp
      inpDemandInp.type = 'number'; // Type = number
      inpDemandInp.className = 'numInp'; // Class
      inpDemandInp.value = item['inpDemand']; // Item inpDemand
      
      let calcTD = document.createElement('td'); // Declare
      itemRow.appendChild(calcTD); // Append
      calcTD.id = 'calc'; // Set ID
      calcTD.style.backgroundColor = 'rgb(224, 224, 224)'; // Color
      calcTD.innerText = item['calc'].toPrecision(10); // Item calc
      if(item['calc'] > 0) calcTD.className = 'greater'; // If greater than 0, class
      if(item['calc'] < 0) calcTD.className = 'less'; // If less than 0, class
      
      let calcDemandTD = document.createElement('td'); // Declare
      itemRow.appendChild(calcDemandTD); // Append
      calcDemandTD.id = 'calcDemand'; // Set ID
      calcDemandTD.style.backgroundColor = 'rgb(192, 225, 192)'; // Color
      calcDemandTD.innerText = item['calcDemand'].toPrecision(10); // Item calcDemand
      if(item['calcDemand'] > 0) calcDemandTD.className = 'greater'; // If greater than 0, class
      if(item['calcDemand'] < 0) calcDemandTD.className = 'less'; // If less than 0, class
      
      let demandTD = document.createElement('td'); // Declare
      itemRow.appendChild(demandTD); // Append
      demandTD.id = 'demand'; // Set ID
      demandTD.style.backgroundColor = 'rgb(255, 224, 192)'; // Color
      demandTD.innerText = (item['inpDemand'] + item['calcDemand']).toPrecision(10); // Item inpDemand + calcDemand
      if(item['inpDemand'] + item['calcDemand'] > 0) demandTD.className = 'greater'; // If greater than 0, class
      if(item['inpDemand'] + item['calcDemand'] < 0) demandTD.className = 'less'; // If less than 0, class
      
      let byproTD = document.createElement('td'); // Declare
      itemRow.appendChild(byproTD); // Append
      byproTD.id = 'bypro'; // Set ID
      byproTD.style.backgroundColor = 'rgb(255, 255, 192)'; // Color
      byproTD.innerText = item['byproduct'].toPrecision(10); // Item byproduct
      if(item['byproduct'] > 0) byproTD.className = 'greater'; // If greater than 0, class
      if(item['byproduct'] < 0) byproTD.className = 'less'; // If less than 0, class
      
      let maxClockingTD = document.createElement('td'); // Declare
      itemRow.appendChild(maxClockingTD); // Append
      maxClockingTD.id = 'maxClocking'; // Set ID
      maxClockingTD.style.backgroundColor = 'rgb(192, 224, 255)'; // Color
      let maxClockingInp = document.createElement('input'); // Declare form inp
      maxClockingTD.appendChild(maxClockingInp); // Append inp
      maxClockingInp.id = 'maxClockingInp'; // Set ID inp
      maxClockingInp.type = 'number'; // Type = number
      maxClockingInp.className = 'numInp'; // Class
      maxClockingInp.value = item['maxClock'] * 100; // Item maxClocking
      
      let sloopMultTD = document.createElement('td'); // Declare
      itemRow.appendChild(sloopMultTD); // Append
      sloopMultTD.id = 'sloopMult'; // Set ID
      sloopMultTD.style.backgroundColor = 'rgb(255, 192, 192)'; // Color
      let sloopMultInp = document.createElement('input'); // Declare form inp
      sloopMultTD.appendChild(sloopMultInp); // Append inp
      sloopMultInp.id = 'sloopMultInp'; // Set ID inp
      sloopMultInp.type = 'number'; // Type = number
      sloopMultInp.className = 'numInp'; // Class
      sloopMultInp.value = item['sloopMult']; // Item sloopMult
      
      let buildingsTD = document.createElement('td'); // Declare
      itemRow.appendChild(buildingsTD); // Append
      buildingsTD.id = 'buildings'; // Set ID
      buildingsTD.style.backgroundColor = 'rgb(224, 192, 224)'; // Color
      buildingsTD.innerText = item['buildings'].toPrecision(10); // Item buildings
      if(item['buildings'] > 0) buildingsTD.className = 'greater'; // If greater than 0, class
      if(item['buildings'] < 0) buildingsTD.className = 'less'; // If less than 0, class
      
      let recipeTD = document.createElement('td'); // Declare
      itemRow.appendChild(recipeTD); // Append
      recipeTD.id = 'recipe'; // Set ID
      recipeTD.style.backgroundColor = 'rgb(255, 192, 224)'; // Color
      let recipeInp = document.createElement('select'); // Declare form inp
      recipeTD.appendChild(recipeInp); // Append inp
      recipeInp.id = 'recipeInp'; // Set ID inp
      recipeInp.className = 'numInp'; // Class
      for(let recipe in item['recipes']) {
        let option = document.createElement('option'); // Declare
        recipeInp.appendChild(option); // Append
        option.value = recipe; // Set value as recipe
        option.innerText = recipe; // Set innerText as recipe
        if(recipe == item['recipe']) option.selected = true; // Item recipe (selected recipe)
      }
      
      let powerTD = document.createElement('td'); // Declare
      itemRow.appendChild(powerTD); // Append
      powerTD.id = 'power'; // Set ID
      powerTD.style.backgroundColor = 'rgb(255, 255, 224)'; // Color
      powerTD.innerText = item['power'].toPrecision(10); // Item power
      if(item['power'] > 0) powerTD.className = 'greater'; // If greater than 0, class
      if(item['power'] < 0) powerTD.className = 'less'; // If less than 0, class
      
      let powerMaxTD = document.createElement('td'); // Declare
      itemRow.appendChild(powerMaxTD); // Append
      powerMaxTD.id = 'powerMax'; // Set ID
      powerMaxTD.style.backgroundColor = 'rgb(255, 255, 224)'; // Color
      powerMaxTD.innerText = item['powerMax'].toPrecision(10); // Item power max
      if(item['powerMax'] > 0) powerMaxTD.className = 'greater'; // If greater than 0, class
      if(item['powerMax'] < 0) powerMaxTD.className = 'less'; // If less than 0, class
      
      let powerMinTD = document.createElement('td'); // Declare
      itemRow.appendChild(powerMinTD); // Append
      powerMinTD.id = 'powerMin'; // Set ID
      powerMinTD.style.backgroundColor = 'rgb(255, 255, 224)'; // Color
      powerMinTD.innerText = item['powerMin'].toPrecision(10); // Item power max
      if(item['powerMin'] > 0) powerMinTD.className = 'greater'; // If greater than 0, class
      if(item['powerMin'] < 0) powerMinTD.className = 'less'; // If less than 0, class
      
      let awesomePtsTD = document.createElement('td'); // Declare
      itemRow.appendChild(awesomePtsTD); // Append
      awesomePtsTD.id = 'awesomePts'; // Set ID
      awesomePtsTD.style.backgroundColor = 'rgb(255, 224, 224)'; // Color
      awesomePtsTD.innerText = item['awesomePts']; // Item awesome points
      
      let awesomePtsInpTD = document.createElement('td'); // Declare
      itemRow.appendChild(awesomePtsInpTD); // Append
      awesomePtsInpTD.id = 'awesomePtsInp'; // Set ID
      awesomePtsInpTD.style.backgroundColor = 'rgb(255, 224, 224)'; // Color
      awesomePtsInpTD.innerText = item['awesomePtsInp'].toPrecision(10); // Item awesome points input demand
      if(item['awesomePtsInp'] > 0) awesomePtsInpTD.className = 'greater'; // If greater than 0, class
      if(item['awesomePtsInp'] < 0) awesomePtsInpTD.className = 'less'; // If less than 0, class
      
      let awesomePtsByproTD = document.createElement('td'); // Declare
      itemRow.appendChild(awesomePtsByproTD); // Append
      awesomePtsByproTD.id = 'awesomePtsBypro'; // Set ID
      awesomePtsByproTD.style.backgroundColor = 'rgb(255, 224, 224)'; // Color
      awesomePtsByproTD.innerText = item['awesomePtsBypro'].toPrecision(10); // Item awesome points byproduct
      if(item['awesomePtsBypro'] > 0) awesomePtsByproTD.className = 'greater'; // If greater than 0, class
      if(item['awesomePtsBypro'] < 0) awesomePtsByproTD.className = 'less'; // If less than 0, class
      
    }
    
  }
  
}

function renderRec() { // Render Recipes
  
  // Variables
  
  RecTbl = document.getElementById('RecTbl');
  
  let cats = sortRows(categories); // Sorted categories
  
  // Reset
  
  RecTbl.innerHTML = '';
  
  // Column Headers
  
  let headRow = document.createElement('tr'); // Create table row for column headers
  RecTbl.appendChild(headRow); // Append row
  
  headRow.innerHTML = `
    <th style="background-color: rgb(192, 128, 128);" title="Category">Cat.</th>
    <th style="background-color: rgb(128, 128, 128);" title="Item Name">Item</th>
    <th style="background-color: rgb(192, 192, 192);" title="Recipe Name">Recipe</th>
    <th style="background-color: rgb(192, 128, 255);" title="Output" class="wideTH">Out</th>
    <th style="background-color: rgb(255, 128, 128);" title="Input Item 1" class="wideTH">Input 1</th>
    <th style="background-color: rgb(255, 128, 128);" title="Input Amount 1" class="wideTH">Inp. Amount 1</th>
    <th style="background-color: rgb(255, 255, 128);" title="Input Item 2" class="wideTH">Input 2</th>
    <th style="background-color: rgb(255, 255, 128);" title="Input Amount 2" class="wideTH">Inp Amount 2</th>
    <th style="background-color: rgb(128, 255, 128);" title="Input Item 3" class="wideTH">Input 3</th>
    <th style="background-color: rgb(128, 255, 128);" title="Input Amount 3" class="wideTH">Inp. Amount 3</th>
    <th style="background-color: rgb(128, 128, 255);" title="Input Item 4" class="wideTH">Input 4</th>
    <th style="background-color: rgb(128, 128, 255);" title="Input Amount 4" class="wideTH">Inp. Amount 4</th>
    <th style="background-color: rgb(255, 128, 192);" title="Byproduct Item 1" class="wideTH">Bypro. 1</th>
    <th style="background-color: rgb(255, 128, 192);" title="Byproduct Amount 1" class="wideTH">Bypro. Amount 1</th>
    <th style="background-color: rgb(255, 192, 128);" title="Building" class="wideTH">Building</th>
  `; // Labels/Headers of each column
  
  for(let cat of cats) { // For each category
    
    let catItems = sortRows(filtCategory(items, cat[0])); // Sorted items, filtered by category
    // (Array)
    
    let catRow = document.createElement('tr'); // Create table row for category
    RecTbl.appendChild(catRow); // Append row
    
    let catHead = document.createElement('th'); // Create table header
    catRow.appendChild(catHead); // Append header
    catHead.className = 'catHead'; // Class
    catHead.innerHTML = '<div><div>' + cat[0] + '</div></div>'; // innerHTML
    catHead.style.backgroundColor = categories[cat[0]]['color']; // BG Color
    catHead.style.color = textColor(categories[cat[0]]['color']); // Text Color
    
    let catRowSpan = 1; // Initail rowspan, for catHead
    
    for(let catItem of catItems) { // For each item name
      
      let itemRowA = document.createElement('tr'); // Create table row for items
      RecTbl.appendChild(itemRowA); // Append row
      
      let item = items[catItem[0]]; // Item object
      
      // Headers
      
      let itemHead = document.createElement('th'); // Create item header
      itemRowA.appendChild(itemHead); // Append header
      itemHead.innerText = catItem[0]; // innerText
      itemHead.style.backgroundColor = item['color']; // BG Color
      itemHead.style.color = textColor(item['color']); // Text Color
      itemHead.rowSpan = Object.keys(item['recipes']).length + 1; // Item rowSpan
      
      catRowSpan += Object.keys(item['recipes']).length + 1; // Add to rowspan, for catHead
      
      for(let recipe in item['recipes']) {
        
        let itemRow = document.createElement('tr'); // Create table row for items
        RecTbl.appendChild(itemRow); // Append row
        
        let rec = item['recipes'][recipe]; // Recipe 
        //console.log(catItem[0] + ': ' + recipe);
        //console.log(rec);
        
        // Headers
        
        let recipeHead = document.createElement('th'); // Create recipe header
        itemRow.appendChild(recipeHead); // Append header
        recipeHead.innerText = recipe; // innerText
        recipeHead.style.backgroundColor = 'rgb(224, 224, 224)'; // BG Color
        
        // Each column/td
        
        let outTD = document.createElement('td'); // Declare
        itemRow.appendChild(outTD); // Append
        outTD.style.backgroundColor = 'rgb(224, 192, 255)'; // BG Color
        outTD.innerText = rec['out'].toPrecision(10); // Recipe output
        
        let inpItem1TD = document.createElement('td'); // Declare
        itemRow.appendChild(inpItem1TD); // Append
        inpItem1TD.style.backgroundColor = 'rgb(255, 192, 192)'; // BG Color
        inpItem1TD.style.textAlign = 'center'; // Center Text
        if(rec['in'].length > 0) { // If input item 1 exists
          inpItem1TD.innerText = rec['in'][0]['item']; // Recipe input item 1
          
          let childItem = items[rec['in'][0]['item']]; // Child item
          //console.log(childItem);
          if(childItem !== undefined) { // If color is defined
            inpItem1TD.style.backgroundColor = childItem['color']; // BG Color
            inpItem1TD.style.color = textColor(childItem['color']); // Text Color
          }
        }
        
        let inpAmount1TD = document.createElement('td'); // Declare
        itemRow.appendChild(inpAmount1TD); // Append
        inpAmount1TD.style.backgroundColor = 'rgb(255, 192, 192)'; // BG Color
        if(rec['in'].length > 0) { // If input amount 1 exists
          inpAmount1TD.innerText = rec['in'][0]['amount'].toPrecision(10); // Recipe input amount 1
        }
        
        let inpItem2TD = document.createElement('td'); // Declare
        itemRow.appendChild(inpItem2TD); // Append
        inpItem2TD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
        inpItem2TD.style.textAlign = 'center'; // Center Text
        if(rec['in'].length > 1) { // If input item 2 exists
          inpItem2TD.innerText = rec['in'][1]['item']; // Recipe input item 2
          
          let childItem = items[rec['in'][1]['item']]; // Child item
          //console.log(childItem);
          if(childItem !== undefined) { // If color is defined
            inpItem2TD.style.backgroundColor = childItem['color']; // BG Color
            inpItem2TD.style.color = textColor(childItem['color']); // Text Color
          }
        }
        
        let inpAmount2TD = document.createElement('td'); // Declare
        itemRow.appendChild(inpAmount2TD); // Append
        inpAmount2TD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
        if(rec['in'].length > 1) { // If input amount 2 exists
          inpAmount2TD.innerText = rec['in'][1]['amount'].toPrecision(10); // Recipe input amount 2
        }
        
        let inpItem3TD = document.createElement('td'); // Declare
        itemRow.appendChild(inpItem3TD); // Append
        inpItem3TD.style.backgroundColor = 'rgb(192, 255, 192)'; // BG Color
        inpItem3TD.style.textAlign = 'center'; // Center Text
        if(rec['in'].length > 2) { // If input item 3 exists
          inpItem3TD.innerText = rec['in'][2]['item']; // Recipe input item 3
          
          let childItem = items[rec['in'][2]['item']]; // Child item
          //console.log(childItem);
          if(childItem !== undefined) { // If color is defined
            inpItem3TD.style.backgroundColor = childItem['color']; // BG Color
            inpItem3TD.style.color = textColor(childItem['color']); // Text Color
          }
        }
        
        let inpAmount3TD = document.createElement('td'); // Declare
        itemRow.appendChild(inpAmount3TD); // Append
        inpAmount3TD.style.backgroundColor = 'rgb(192, 255, 192)'; // BG Color
        if(rec['in'].length > 2) { // If input amount 3 exists
          inpAmount3TD.innerText = rec['in'][2]['amount'].toPrecision(10); // Recipe input amount 3
        }
        
        let inpItem4TD = document.createElement('td'); // Declare
        itemRow.appendChild(inpItem4TD); // Append
        inpItem4TD.style.backgroundColor = 'rgb(192, 192, 255)'; // BG Color
        inpItem4TD.style.textAlign = 'center'; // Center Text
        if(rec['in'].length > 3) { // If input item 4 exists
          inpItem4TD.innerText = rec['in'][3]['item']; // Recipe input item 4
          
          let childItem = items[rec['in'][3]['item']]; // Child item
          //console.log(childItem);
          if(childItem !== undefined) { // If color is defined
            inpItem4TD.style.backgroundColor = childItem['color']; // BG Color
            inpItem4TD.style.color = textColor(childItem['color']); // Text Color
          }
        }
        
        let inpAmount4TD = document.createElement('td'); // Declare
        itemRow.appendChild(inpAmount4TD); // Append
        inpAmount4TD.style.backgroundColor = 'rgb(192, 192, 255)'; // BG Color
        if(rec['in'].length > 3) { // If input amount 4 exists
          inpAmount4TD.innerText = rec['in'][3]['amount'].toPrecision(10); // Recipe input amount 4
        }
        
        let byproItem1TD = document.createElement('td'); // Declare
        itemRow.appendChild(byproItem1TD); // Append
        byproItem1TD.style.backgroundColor = 'rgb(255, 192, 224)'; // BG Color
        byproItem1TD.style.textAlign = 'center'; // Center Text
        if(rec['bypro'].length > 0) { // If bypro item 1 exists
          byproItem1TD.innerText = rec['bypro'][0]['item']; // Recipe bypro item 1
          
          let childItem = items[rec['bypro'][0]['item']]; // Child item
          //console.log(childItem);
          if(childItem !== undefined) { // If color is defined
            byproItem1TD.style.backgroundColor = childItem['color']; // BG Color
            byproItem1TD.style.color = textColor(childItem['color']); // Text Color
          }
        }
        
        let byproAmount1TD = document.createElement('td'); // Declare
        itemRow.appendChild(byproAmount1TD); // Append
        byproAmount1TD.style.backgroundColor = 'rgb(255, 192, 224)'; // BG Color
        if(rec['bypro'].length > 0) { // If input bypro 1 exists
          byproAmount1TD.innerText = rec['bypro'][0]['amount'].toPrecision(10); // Recipe bypro amount 1
        }
        
        let buildingTD = document.createElement('td'); // Declare
        itemRow.appendChild(buildingTD); // Append
        buildingTD.style.backgroundColor = 'rgb(255, 224, 192)'; // BG Color
        buildingTD.innerText = rec['building']; // Recipe building
        
      }
      
    }
    
    catHead.rowSpan = catRowSpan; // rowSpan for catHead
    
  }
  
}

function renderBPAP() { // Render Buildings, Power, & Awesome Points
  
  // Variables
  
  BPAPTbl = document.getElementById('BPAPTbl');
  
  // Reset
  
  BPAPTbl.innerHTML = '';
  
  // Column Headers
  
  let headRow = document.createElement('tr'); // Create table row for column headers
  BPAPTbl.appendChild(headRow); // Append row
  
  headRow.innerHTML = `
    <th style="background-color: rgb(128, 128, 128);" title="Building Name" class="wideTH">Building</th>
    <th style="background-color: rgb(255, 128, 128);" title="# of Buildings Needed" class="wideTH">Total</th>
    <th style="background-color: rgb(128, 255, 128);" title="Average Individual Building Type Power Usage" class="wideTH">Avrg. Ind. Power</th>
    <th style="background-color: rgb(128, 255, 128);" title="Max Individual Building Type Power Usage" class="wideTH">Max Ind. Power</th>
    <th style="background-color: rgb(128, 255, 128);" title="Min Individual Building Type Power Usage" class="wideTH">Min Ind. Power</th>
    <th style="background-color: rgb(255, 255, 128);" title="Power Usage by All Building Type" class="wideTH">Sub-Total Power</th>
    <th style="background-color: rgb(255, 255, 128);" title="Max Power Usage by All Building Type" class="wideTH">Max Sub-Total Power</th>
    <th style="background-color: rgb(255, 255, 128);" title="Min Power Usage by All Building Type" class="wideTH">Min Sub-Total Power</th>
  `; // Labels/Headers of each column
  
  // Each Total Value
  
  let totalTotal = 0;
  let totalPower = 0;
  let totalMaxPower = 0;
  let totalMinPower = 0;
  let totalTotalPower = 0;
  let totalMaxTotalPower = 0;
  let totalMinTotalPower = 0;
  
  let sortedBuildings = sortRows(buildings); // Sorted buildings
  // (Array)
  
  for(let sortedBuilding of sortedBuildings) { // For each building
    
    let building = buildings[sortedBuilding[0]]; // Building object
    
    let row = document.createElement('tr'); // Create table row for buildings
    BPAPTbl.appendChild(row); // Append row
    row.id = sortedBuilding[0].replaceAll(' ', '_'); // Set Row ID to building name
    
    // Header
    
    let head = document.createElement('th'); // Create building header
    row.appendChild(head); // Append header
    head.innerText = sortedBuilding[0]; // innerText
    head.style.backgroundColor = building['color']; // BG Color
    head.style.color = textColor(building['color']); // Text Color
    head.title = 'Pos: ' + building.pos;
    
    // Each column/td
    
    let totalTD = document.createElement('td'); // Declare
    row.appendChild(totalTD); // Append
    totalTD.id = 'total'; // Set ID
    totalTD.style.backgroundColor = 'rgb(255, 192, 192)'; // BG Color
    totalTD.innerText = building['Total']; // Total
    
    let powerTD = document.createElement('td'); // Declare
    row.appendChild(powerTD); // Append
    powerTD.id = 'power'; // Set ID
    powerTD.style.backgroundColor = 'rgb(192, 255, 192)'; // BG Color
    powerTD.innerText = building['Average MW']; // Average Power
    
    let maxPowerTD = document.createElement('td'); // Declare
    row.appendChild(maxPowerTD); // Append
    maxPowerTD.id = 'maxPower'; // Set ID
    maxPowerTD.style.backgroundColor = 'rgb(192, 255, 192)'; // BG Color
    maxPowerTD.innerText = building['Max MW']; // Max Power
    
    let minPowerTD = document.createElement('td'); // Declare
    row.appendChild(minPowerTD); // Append
    minPowerTD.id = 'minPower'; // Set ID
    minPowerTD.style.backgroundColor = 'rgb(192, 255, 192)'; // BG Color
    minPowerTD.innerText = building['Min MW']; // Min Power
    
    let powerTotalTD = document.createElement('td'); // Declare
    row.appendChild(powerTotalTD); // Append
    powerTotalTD.id = 'totalPower'; // Set ID
    powerTotalTD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
    powerTotalTD.innerText = building['Total MW'].toPrecision(10); // Total Power
    
    let maxTotalPowerTD = document.createElement('td'); // Declare
    row.appendChild(maxTotalPowerTD); // Append
    maxTotalPowerTD.id = 'maxTotalPower'; // Set ID
    maxTotalPowerTD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
    maxTotalPowerTD.innerText = building['Max Total MW'].toPrecision(10); // Max Total Power
    
    let minTotalPowerTD = document.createElement('td'); // Declare
    row.appendChild(minTotalPowerTD); // Append
    minTotalPowerTD.id = 'minTotalPower'; // Set ID
    minTotalPowerTD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
    minTotalPowerTD.innerText = building['Min Total MW'].toPrecision(10); // Min Total Power
    
    // Totals
    
    totalTotal += building['Total'];
    totalPower += building['Average MW'];
    totalMaxPower += building['Max MW'];
    totalMinPower += building['Min MW'];
    totalTotalPower += building['Total MW'];
    totalMaxTotalPower += building['Max Total MW'];
    totalMinTotalPower += building['Min Total MW'];
    
  }
  
  // Total / Last Row
  
  let row = document.createElement('tr'); // Create table row for buildings totala
  BPAPTbl.appendChild(row); // Append row
  row.id = 'Totals'; // Set Row ID
  row.style.fontWeight = 'bold'; // Bold
  
  // Header
  
  let head = document.createElement('th'); // Create totals header
  row.appendChild(head); // Append header
  head.innerText = 'Totals:'; // innerText
  head.style.backgroundColor = '#C0C0C0'; // BG Color
  head.style.color = textColor('#C0C0C0'); // Text Color
  
  // Each column/td
  
  let totalTD = document.createElement('td'); // Declare
  row.appendChild(totalTD); // Append
  totalTD.id = 'total'; // Set ID
  totalTD.style.backgroundColor = 'rgb(255, 192, 192)'; // BG Color
  totalTD.innerText = totalTotal; // Total
  
  let powerTD = document.createElement('td'); // Declare
  row.appendChild(powerTD); // Append
  powerTD.id = 'power'; // Set ID
  powerTD.style.backgroundColor = 'rgb(192, 255, 192)'; // BG Color
  powerTD.innerText = totalPower; // Total Power
  
  let maxPowerTD = document.createElement('td'); // Declare
  row.appendChild(maxPowerTD); // Append
  maxPowerTD.id = 'maxPower'; // Set ID
  maxPowerTD.style.backgroundColor = 'rgb(192, 255, 192)'; // BG Color
  maxPowerTD.innerText = totalMaxPower; // Max Power
  
  let minPowerTD = document.createElement('td'); // Declare
  row.appendChild(minPowerTD); // Append
  minPowerTD.id = 'minPower'; // Set ID
  minPowerTD.style.backgroundColor = 'rgb(192, 255, 192)'; // BG Color
  minPowerTD.innerText = totalMinPower; // Min Power
  
  let powerTotalTD = document.createElement('td'); // Declare
  row.appendChild(powerTotalTD); // Append
  powerTotalTD.id = 'totalPower'; // Set ID
  powerTotalTD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
  powerTotalTD.innerText = totalTotalPower.toPrecision(10); // Total Power
  
  let maxTotalPowerTD = document.createElement('td'); // Declare
  row.appendChild(maxTotalPowerTD); // Append
  maxTotalPowerTD.id = 'maxTotalPower'; // Set ID
  maxTotalPowerTD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
  maxTotalPowerTD.innerText = totalMaxTotalPower.toPrecision(10); // Max Total Power
  
  let minTotalPowerTD = document.createElement('td'); // Declare
  row.appendChild(minTotalPowerTD); // Append
  minTotalPowerTD.id = 'minTotalPower'; // Set ID
  minTotalPowerTD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
  minTotalPowerTD.innerText = totalMinTotalPower.toPrecision(10); // Min Total Power
  
  // Awesome Points
  
  // Variables
  
  awesomeTbl = document.getElementById('awesomeTbl');
  
  // Reset
  
  awesomeTbl.innerHTML = '';
  
  // Title
  
  let awesomeTitle = document.createElement('tr'); // Create awesome title
  awesomeTbl.appendChild(awesomeTitle); // Append title
  awesomeTitle.innerHTML = `
    <th style="background-color: rgb(255, 192, 128);" title="Awesome Points" colspan="3">Awesome Points</th>
  ` // Title TH
  
  // Column Headers
  
  let awesomeRow = document.createElement('tr'); // Create awesome row
  awesomeTbl.appendChild(awesomeRow); // Append row
  awesomeRow.innerHTML = `
    <th style="background-color: rgb(128, 128, 255);" title="Awesome Points from Input Demand" class="wideTH">Input Demand</th>
    <th style="background-color: rgb(255, 255, 128);" title="Awesome Points from Byproducts" class="wideTH">Byproducts</th>
    <th style="background-color: rgb(255, 128, 128);" title="Awesome Points from Both" class="wideTH">Total</th>
  ` // Labels/Headers of each column
  
  // Data Row
  
  let awesomeDataRow = document.createElement('tr'); // Create awesome data row
  awesomeTbl.appendChild(awesomeDataRow); // Append row
  awesomeDataRow.id = 'awesomeRow'; // set row ID
  
  // Data
  
  let awesomeInpDemand = 0;
  let awesomeByproduct = 0;
  
  for(let key in items) {
    
    let item = items[key];
    
    awesomeInpDemand += item['awesomePtsInp'];
    awesomeByproduct += item['awesomePtsBypro'];
    
  }
  
  let awesomeTotal = awesomeInpDemand + awesomeByproduct;
  
  // Each Data Point
  
  let awesomeInpDemandTD = document.createElement('td'); // Declare
  awesomeDataRow.appendChild(awesomeInpDemandTD); // Append
  awesomeInpDemandTD.id = 'inpDemand'; // Set ID
  awesomeInpDemandTD.style.backgroundColor = 'rgb(192, 192, 255)'; // BG Color
  awesomeInpDemandTD.innerText = awesomeInpDemand.toPrecision(10); // Demand
  
  let awesomeByproductTD = document.createElement('td'); // Declare
  awesomeDataRow.appendChild(awesomeByproductTD); // Append
  awesomeByproductTD.id = 'byproduct'; // Set ID
  awesomeByproductTD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
  awesomeByproductTD.innerText = awesomeByproduct.toPrecision(10); // Demand
  
  let awesomeTotalTD = document.createElement('td'); // Declare
  awesomeDataRow.appendChild(awesomeTotalTD); // Append
  awesomeTotalTD.id = 'total'; // Set ID
  awesomeTotalTD.style.backgroundColor = 'rgb(255, 192, 192)'; // BG Color
  awesomeTotalTD.innerText = awesomeTotal.toPrecision(10); // Demand
  
}

function renderCT() { // Render Calc Table
  
  // Variables
  
  CTTble = document.getElementById('CTTbl');
  
  let cats = sortRows(categories); // Sorted categories
  let itemList = []; // Items to conserve order
  
  // Reset
  
  CTTble.innerHTML = '';
  
  // Column Headers
  
  let headRow = document.createElement('tr'); // Create table row for column headers
  let subHeadRow = document.createElement('tr'); // Create table row for column sub headers
  CTTble.appendChild(headRow); // Append rows
  CTTble.appendChild(subHeadRow);
  
  // Labels/Headers of each column
  
  headRow.innerHTML = `
    <th style="background-color: rgb(192, 128, 128);" rowspan="2" title="Category">Cat.</th>
    <th style="background-color: rgb(128, 128, 128);" rowspan="2" title="Item Name">Item</th>
  `; 
  
  subHeadRow.innerHTML = '';
  
  for(let itemKey in items) {
    
    itemList.push(itemKey); // itemList
    let item = items[itemKey]; // item
    
    headRow.innerHTML += '<th colspan="2" style="background-color: ' + 
                         item.color + '; color:' + textColor(item.color) + ';">' + itemKey + '</th>';
    
    subHeadRow.innerHTML += `
      <th style="background-color: rgb(255, 128, 128);" class="thinTH">Input</th>
      <th style="background-color: rgb(128, 128, 255);" class="thinTH">Bypro</th>
    `;
    
  }
  
  for(let cat of cats) { // For each category
    
    let catItems = sortRows(filtCategory(items, cat[0])); // Sorted items, filtered by category
    // (Array)
    
    let catRow = document.createElement('tr'); // Create table row for category
    CTTble.appendChild(catRow); // Append row
    
    let catHead = document.createElement('th'); // Create table header
    catRow.appendChild(catHead); // Append header
    catHead.className = 'catHead'; // Class
    catHead.rowSpan = (catItems.length + 1); // rowSpan
    catHead.innerHTML = '<div><div>' + cat[0] + '</div></div>'; // innerHTML
    catHead.style.backgroundColor = categories[cat[0]]['color']; // BG Color
    catHead.style.color = textColor(categories[cat[0]]['color']); // Text Color
    catHead.title = 'Pos: ' + categories[cat[0]].pos;
    
    for(let catItem of catItems) { // For each item name
      
      let item = items[catItem[0]]; // Item object
      
      let itemRow = document.createElement('tr'); // Create table row for items
      CTTble.appendChild(itemRow); // Append row
      itemRow.id = catItem[0].replaceAll(' ', '_'); // Set Row ID to item name
      
      // Header
      
      let itemHead = document.createElement('th'); // Create item header
      itemRow.appendChild(itemHead); // Append header
      itemHead.innerText = catItem[0]; // innerText
      itemHead.style.backgroundColor = item['color']; // BG Color
      itemHead.style.color = textColor(item['color']); // Text Color
      itemHead.title = 'Pos: ' + item.pos;
      
      // Each column/td
      
      for(let listItem of itemList) {
        
        let calcItem = calcTable[catItem[0]]; // item's calcTable 
        
        // Input
        
        let inpTD = document.createElement('td'); // Declare
        itemRow.appendChild(inpTD); // Append
        inpTD.style.backgroundColor = 'rgb(255, 192, 192)'; // BG Color
        inpTD.innerText = '0'; // Set
        
        // Bypro
        
        let byproTD = document.createElement('td'); // Declare
        itemRow.appendChild(byproTD); // Append
        byproTD.style.backgroundColor = 'rgb(192, 192, 255)'; // BG Color
        byproTD.innerText = '0'; // Set
        
        for(let CIItemKey in calcItem) {
          
          let req = calcItem[CIItemKey]; // Requested amount
          let keyPair = CIItemKey.split(' - '); // Source Item, Input # / Bypro #
          //console.log(keyPair);
          
          // Input
          
          if(keyPair[1].includes('Input') && keyPair[0] == listItem) {
            inpTD.innerText = req.toPrecision(10); // Set
            if(req > 0) inpTD.className = 'greater'; // Greater
            else inpTD.className = 'less'; // Less
          }
          
          // Bypro
          
          if(keyPair[1].includes('Bypro') && keyPair[0] == listItem) {
            byproTD.innerText = req.toPrecision(10); // Set
            if(req > 0) byproTD.className = 'greater'; // Greater
            else byproTD.className = 'less'; // Less
          }
          
        }
        
      }
      
    }
    
  }
  
}

async function renderFuncs() { // Render Everything
  
  // Individual Render Functions
  
  renderToolbar();
  renderMI();
  renderRec();
  renderBPAP();
  if(settings.drawCalcTbl) renderCT();
  
  // Other
  
  applySettings(); // Apply settings to rendered stuff
  
}

async function render() { // Render Everything
  
  // Status Rendering
  
  toolStatus = document.querySelector('#toolbar > #status');
  toolStatus.innerText = '🖌️';
  
  await new Promise(resolve => setTimeout(resolve, 0));
  await new Promise(resolve => requestAnimationFrame(resolve));
  
  // Render
  
  await renderFuncs();
  
  // Status Done
  
  toolStatus.innerText = '✅';
  
}

// Button Functions

function closeAllMenus() { // Close the menu
  
  greyout.style.display = 'none';
  
  for(let child of greyout.children) {
    child.style.display = 'none';
  }
  
}

function applySettings() {
  
  let numInps = document.querySelectorAll('.numInp'); // Get NumInpDgts
  
  for(let inp of numInps) { // Apply NumInpDgts
    inp.step = '' + (10 ** (-1 * settings.NumInpDgts));
  }
  
  highlightSheet.replace( // Greater and Less CSS
    '.greater {background-color: ' + settings.greaterColor + ' !important;}' +
    '.less {background-color: ' + settings.lessColor + ' !important;}'
  );
  
}

function loadSave(saveName) {
  
  
  loadOut.innerHTML = '🔄 Processing';
  
  let json = localStorage.getItem('SatisfactoryCalc - Save:' + saveName);
  
  try {
    
    const index = JSON.parse(json); // Create object
    
    items = index['items'];
    categories = index['categories'];
    buildings = index['buildings'];
    
    loadOut.innerHTML = '✅ Loaded';
    
  }
  
  catch(error) {
    
    loadOut.innerHTML = '⚠️ Processing Error';
    
    console.log('Processing Error:');
    console.log(error);
    
  }
  
  render();
  
}

function removeSave(saveName) {
  
  loadOut.innerHTML = '🔄 Processing';
  
  if(!window.confirm('Remove "' + saveName + '"?')) return
  
  try {
    
    localStorage.removeItem('SatisfactoryCalc - Save:' + saveName);
    
    loadOut.innerHTML = '✅ Removed';
    
  }
  
  catch(error) {
    
    loadOut.innerHTML = '⚠️ Processing Error';
    
    console.log('Processing Error:');
    console.log(error);
    
  }
  
  renderLoadList();
  
}

function renderLoadList() { // Render Saves into LoadList
  
  let saveNames = []; // Save Names
  
  for(let key in localStorage) { // Loop through localStorage
    
    if(key.slice(0,'SatisfactoryCalc - Save:'.length) == 'SatisfactoryCalc - Save:') {
      saveNames.push(key.slice('SatisfactoryCalc - Save:'.length));
    } // Add if SatCalc Save
    
  }
  
  saveNames.sort(); // Sort
  
  loadList.innerHTML = ''; // Clear
  
  for(let saveName of saveNames) { // Add Each
    
    let listItem = document.createElement('div'); // Declare
    loadList.appendChild(listItem); // Append
    listItem.innerHTML = saveName; // Save Name
    listItem.innerHTML += ` <button onclick="loadSave('` + saveName + `')">Load</button>`; // Load Button
    listItem.innerHTML += ` <button onclick="removeSave('` + saveName + `')">Remove</button>`; // Remove Button
    
  }
  
}

async function calculateBttn () {
  
  // Status Calculating
  
  toolStatus = document.querySelector('#toolbar > #status');
  toolStatus.innerText = '🔄';
  
  await new Promise(resolve => setTimeout(resolve, 0));
  await new Promise(resolve => requestAnimationFrame(resolve));
  
  // Calculate
  
  await calculate();
  
  // Status Rendering
  
  toolStatus.innerText = '🖌️';
  
  await new Promise(resolve => setTimeout(resolve, 0));
  await new Promise(resolve => requestAnimationFrame(resolve));
  
  // Render
  
  await renderFuncs();
  
  // Status Done
  
  toolStatus.innerText = '✅';
  
}

function checkAll(check = true) {
  
  for(let item in items) items[item].complete = check;
  
  render();
  
}

// Event Listener

document.addEventListener('DOMContentLoaded', function() { // DOM Loaded
  
  // Status
  
  toolStatus = document.querySelector('#toolbar > #status');
  toolStatus.title = 'Status:\n🖌️ = Rendering\n🔄 = Calculating\n✅ = Done';
  
  // Rendering
  
  render().then(expandAll);
  
  // Menus
  
  toolbar = document.getElementById('toolbar');
  greyout = document.getElementById('menuGreyout');
  Xs = document.getElementsByClassName('X');
  menuBttns = document.getElementsByClassName('menuBttn');
  
  for(let child of menuBttns) { // Loop to auto create onclick for menus
    
    let id = child.id;
    let menu = document.querySelector('#menuGreyout > #' + id);
    
    child.addEventListener('click', function() {
      closeAllMenus(); // Clear (incase  another menu is open)
      greyout.style.display = 'block';
      menu.style.display = 'block';
    });
  }
  
  for(let child of Xs) { // Loop to auto create onclick for Xs
    
    child.addEventListener('click', function() {
      closeAllMenus();
    });
  }
  
  // Toolbar Submit
  
  toolSubmit = document.querySelector('#toolbar > #submit');
  
  toolSubmit.addEventListener('click', calculateBttn);
  
  // Load
  
  loadList = document.getElementById('loadList');
  loadOut = document.getElementById('loadOut')
  
  renderLoadList();
  
  // Save
  
  saveForm = document.getElementById('saveForm');
  
  saveForm.addEventListener('submit', function() {
    
    event.preventDefault();
    
    // Variables
    
    let saveName = document.getElementById('saveName').value;
    let saveOut = document.getElementById('saveOut');
    
    let exists = false;
    
    // Exists
    
    for(let key in localStorage){
      if('SatisfactoryCalc - Save:' + saveName == key) {
        exists = true;
        break
      }
    }
    
    if(exists) {
      if(!window.confirm('Overwrite "' + saveName + '"?')) return
    }
    
    // Save
    
    saveOut.innerText = '🔄 Processing'
    
    let saveStr = JSON.stringify({ // Str to Save
      'items': items,
      'categories': categories,
      'buildings': buildings,
    });
    
    try {
      let items;
      localStorage.setItem('SatisfactoryCalc - Save:' + saveName, saveStr);
      saveOut.innerText = '✅ Saved (' + saveStr.length + ' bytes)';
    }
    catch(err) {
      console.log('localStorage Saving Error (Save "' + saveName + '"):');
      console.log(err);
      saveOut.innerText = '⚠️ ' + err;
    }
    
    renderLoadList();
    
  });
  
  // Upload
  
  uploadForm = document.getElementById('uploadForm');
  
  uploadForm.addEventListener('submit', function() {
    
    event.preventDefault();
    
    // Variables and Constants
    
    let file = document.getElementById('uploadFile').files[0];
    let fileOut = document.getElementById('uploadOut');
    
    // Read File
    
    if(file) { // If file exists
      
      if(file.type == 'application/json') { // If file is JSON
        
        fileOut.innerHTML = '🔄 Processing';
        
        const reader = new FileReader();
        
        reader.onload = function(event) { // Read file
          
          const json = event.target.result;
          
          try {
            
            const index = JSON.parse(json); // Create object
            
            items = index['items'];
            categories = index['categories'];
            buildings = index['buildings'];
            
            //console.log(items);
            //console.log(buildings);
            
            fileOut.innerHTML = '✅ Loaded';
            
            render();
            
          }
          
          catch(error) {
            
            fileOut.innerHTML = '⚠️ Processing Error';
            
            console.log('Processing Error:');
            console.log(error);
            
          }
          
        }
        
        reader.readAsText(file);
        
      }
      
      else fileOut.innerText = '⚠️ Wrong Type';
      
    }
    
    else fileOut.innerText = '❌ No File';
    
  });
  
  // Download
  
  downloadLink = document.getElementById('downloadLink');
  let downloadBttn = document.querySelector('#toolbar > #download');
  
  downloadBttn.addEventListener('click', function() {
    
    let json = { // Create object
      'items': items,
      'categories': categories,
      'buildings': buildings,
    };
    
    let jsonStr = JSON.stringify(json, null, 2); // Stringy 😋
    
    let blob = new Blob([jsonStr], {type: 'application/json'}); // Blob
    
    let url = URL.createObjectURL(blob); // URL
    
    downloadLink.innerText = url; // Set text
    downloadLink.href = url; // Set href
    
  });
  
  // Load Settings
  
  try {
    let localStorageSettings = localStorage.getItem('SatisfactoryCalc - Settings');
    if(localStorageSettings === null) throw('Does not exist in localStorage, taking default');
    settings = JSON.parse(localStorageSettings);
    
    powerEquations.custCons = settings.powerConsCust; // Set custom power consumption
    powerEquations.custProd = settings.powerProdCust; // Set custom power consumption
  }
  catch(err) {
    console.log('localStorage Loading Error (Settings):');
    console.log(err);
  }
  
  // Settings
  
  settingsForm = document.getElementById('settingsForm');
  
  for(let key in settings) { // Load current
    let inpElem = document.getElementById(key);
    if(inpElem.type == 'checkbox') inpElem.checked = settings[key];
    else inpElem.value = settings[key];
  }
  
  settingsForm.addEventListener('submit', function() {
    
    event.preventDefault();
    
    for(let key in settings) { // Set
      let inpElem = document.getElementById(key);
      if(inpElem.type == 'checkbox') settings[key] = inpElem.checked;
      else settings[key] = inpElem.value;
    }
    
    // Apply, Save, Close
    
    powerEquations.custCons = settings.powerConsCust; // Set custom power consumption
    powerEquations.custProd = settings.powerProdCust; // Set custom power consumption
    
    applySettings();
    
    try {
      localStorage.setItem('SatisfactoryCalc - Settings', JSON.stringify(settings));
      closeAllMenus();
    }
    catch(err) {
      console.log('localStorage Saving Error (Settings):\n');
      console.log(err);
      settingsForm.querySelector('output').innerText = '⚠️ Applied, but not saved';
    }
    
  });
  
  // Edit Item
  
  MIEditItemForm = document.getElementById('MIEditItemForm');
  
  MIEditItemForm.addEventListener('submit', function() {
    
    event.preventDefault();
    
    // Out
    
    let out = document.querySelector('#MIEditItemForm > #out');
    out.innerText = '🔄';
    
    // Variables
    
    let itemName = document.querySelector('#MIEditItemForm > #itemName').value;
    let add = document.querySelector('#MIEditItemForm > #itemAddCheck').checked;
    let remove = document.querySelector('#MIEditItemForm > #itemRemoveCheck').checked;
    let movePos = document.querySelector('#MIEditItemForm > #itemMovePos').checked;
    
    let category = document.querySelector('#MIEditItemForm > #itemCategory').value;
    let pos = parseInt(document.querySelector('#MIEditItemForm > #itemPos').value);
    let color = document.querySelector('#MIEditItemForm > #itemColor').value;
    let awesomePts = parseInt(document.querySelector('#MIEditItemForm > #awesomePts').value);
    
    let exists = false;
    let catExists = false;
    let posTaken = false;
    let catItems = filtCategory(items, category);
    
    // Item & Category Exists
    
    if(items[itemName]) exists = true;
    
    if(categories[category]) catExists = true;
    
    // Pos Taken
    
    for(let key in catItems) {
      if(items[key].pos == pos) {
        posTaken = true;
        break
      }
    }
    
    // Error
    
    if(itemName.includes('_')) {
      out.innerText = '⚠️ Illegal Character "_"';
      return
    }
    
    if(add && remove) {
      out.innerText = '⚠️ Both "Add" and "Remove" where selected';
      return
    }
    
    if(add && exists) {
      out.innerText = '⚠️ Already exists';
      return
    }
    
    if(!add && !exists) {
      out.innerText = '⚠️ Does not exist';
      return
    }
    
    if(!catExists && !remove) {
      out.innerText = '⚠️ Category does not exist';
      return
    }
    
    // Remove
    
    if(remove) {
      delete items[itemName];
      out.innerText = '✅ Removed';
      render();
      return
    }
    
    // Add
    
    if(add) {
      
      // Move pos
      
      if(posTaken && movePos) {
        for(let key in catItems) {
          if(items[key]['pos'] >= pos) items[key]['pos'] += 1;
        }
      }
      
      // Add
      
      items[itemName] = {
        'category': category, 'complete': false, 'inpDemand': 0, 'status': 'resolved', 'pos': pos, 'color': color, 
        'calcDemand': 0, 'calc': 0, 'byproduct': 0, 'maxClock': 1, 'sloopMult': 1, 'buildings': 0, 
        'awesomePts': awesomePts, 'awesomePtsInp': 0, 'awesomePtsBypro': 0, 'power': 0, 'powerMax': 0, 'powerMin': 0, 
        recipe: 'None', recipes: {} 
      };
      
      // Out
      
      if(posTaken && movePos) {
        for(let key in filtCategory(items, category)) {
          //console.log(key + ': ' + items[key]['pos']);
        }
      }
      
      out.innerText = '✅ Added';
      render();
      return
      
    }
    
    // Edit
    
    if(true) { // (If for orginization)
      
      // Move pos
      
      let OGPos = items[itemName]['pos']; // Original Position
      
      if(posTaken && movePos) {
        for(let key in catItems) {
          if(items[key]['pos'] >= pos && items[key]['pos'] < OGPos) {
            items[key]['pos'] += 1;
          }
          if(items[key]['pos'] <= pos && items[key]['pos'] > OGPos) {
            items[key]['pos'] += -1;
          }
        }
      }
      
      // Edit
      
      items[itemName]['category'] = category;
      items[itemName]['pos'] = pos;
      items[itemName]['color'] = color;
      items[itemName]['awesomePts'] = awesomePts;
      
      // Out
      
      if(posTaken && movePos) {
        for(let key in filtCategory(items, category)) {
          //console.log(key + ': ' + items[key]['pos']);
        }
      }
      
      out.innerText = '✅ Edited';
      render();
      return
      
    }
    
  });
  
  // Edit Item Load Defaults
  
  let MIEditItemFormLoadDefault = document.querySelector('#MIEditItemForm > #loadDefault');
  
  MIEditItemFormLoadDefault.addEventListener('click', function() {
    
    let out = document.querySelector('#MIEditItemForm > #LDOut'); // Out
    
    // Item Exists
    
    let itemName = document.querySelector('#MIEditItemForm > #itemName').value;
    let exists = false;
    
    if(items[itemName]) exists = true;
    
    if(!exists) {
      out.innerText = '⚠️ Does not exist';
      return
    }
    
    // Set
    
    document.querySelector('#MIEditItemForm > #itemCategory').value = items[itemName].category;
    document.querySelector('#MIEditItemForm > #itemPos').value = items[itemName].pos;
    document.querySelector('#MIEditItemForm > #itemColor').value = items[itemName].color;
    document.querySelector('#MIEditItemForm > #awesomePts').value = items[itemName].awesomePts;
    
    out.innerText = '✅ Loaded';
    
  });
  
  // Edit Category
  
  MIEditCatForm = document.getElementById('MIEditCatForm');
  
  MIEditCatForm.addEventListener('submit', function() {
    
    event.preventDefault();
    
    // Out
    
    let out = document.querySelector('#MIEditCatForm > #out');
    out.innerText = '🔄';
    
    // Variables
    
    let catName = document.querySelector('#MIEditCatForm > #catName').value;
    let add = document.querySelector('#MIEditCatForm > #catAddCheck').checked;
    let remove = document.querySelector('#MIEditCatForm > #catRemoveCheck').checked;
    let movePos = document.querySelector('#MIEditCatForm > #catMovePos').checked;
    let pos = parseInt(document.querySelector('#MIEditCatForm > #catPos').value);
    let color = document.querySelector('#MIEditCatForm > #catColor').value;
    
    let exists = false;
    let posTaken = false;
    
    // Category Exists
    
    if(categories[catName]) exists = true;
    
    // Pos Taken
    
    for(let key in categories) {
      if(categories[key].pos == pos) {
        posTaken = true;
        break
      }
    }
    
    // Error
    
    if(add && remove) {
      out.innerText = '⚠️ Both "Add" and "Remove" where selected';
      return
    }
    
    if(add && exists) {
      out.innerText = '⚠️ Already exists';
      return
    }
    
    if(!add && !exists) {
      out.innerText = '⚠️ Does not exist';
      return
    }
    
    // Remove
    
    if(remove) {
      delete categories[catName];
      out.innerText = '✅ Removed';
      render();
      return
    }
    
    // Add
    
    if(add) {
      
      // Move pos
      
      if(posTaken && movePos) {
        for(let key in categories) {
          if(categories[key]['pos'] >= pos) categories[key]['pos'] += 1;
        }
      }
      
      // Add
      
      categories[catName] = {
        'pos': pos, 
        'color': color, 
      };
      
      // Out
      
      if(posTaken && movePos) {
        for(let key in categories) {
          //console.log(key + ': ' + categories[key]['pos']);
        }
      }
      
      out.innerText = '✅ Added';
      render();
      return
      
    }
    
    // Edit
    
    if(true) { // (If for orginization)
      
      // Move pos
      
      let OGPos = categories[catName]['pos']; // Original Position
      
      if(posTaken && movePos) {
        for(let key in categories) {
          if(categories[key]['pos'] >= pos && categories[key]['pos'] < OGPos) {
            categories[key]['pos'] += 1;
          }
          if(categories[key]['pos'] <= pos && categories[key]['pos'] > OGPos) {
            categories[key]['pos'] += -1;
          }
        }
      }
      
      // Edit
      
      categories[catName]['pos'] = pos;
      categories[catName]['color'] = color;
      
      // Out
      
      if(posTaken && movePos) {
        for(let key in categories) {
          //console.log(key + ': ' + categories[key]['pos']);
        }
      }
      
      out.innerText = '✅ Edited';
      render();
      return
      
    }
    
  });
  
  // Edit Category Load Defaults
  
  let MIEditCatFormLoadDefault = document.querySelector('#MIEditCatForm > #loadDefault');
  
  MIEditCatFormLoadDefault.addEventListener('click', function() {
    
    let out = document.querySelector('#MIEditCatForm > #LDOut'); // Out
    
    // Item Exists
    
    let catName = document.querySelector('#MIEditCatForm > #catName').value;
    let exists = false;
    
    if(categories[catName]) exists = true;
    
    if(!exists) {
      out.innerText = '⚠️ Does not exist';
      return
    }
    
    // Set
    
    document.querySelector('#MIEditCatForm > #catPos').value = categories[catName].pos;
    document.querySelector('#MIEditCatForm > #catColor').value = categories[catName].color;
    
    out.innerText = '✅ Loaded';
    
  });
  
  // Edit Recipe
  
  RecEditForm = document.getElementById('RecEditForm');
  
  RecEditForm.addEventListener('submit', function() {
    
    event.preventDefault();
    
    // Out
    
    let out = document.querySelector('#RecEditForm > #out');
    out.innerText = '🔄';
    
    // Variables
    
    let itemName = document.querySelector('#RecEditForm > #itemName').value;
    let recName = document.querySelector('#RecEditForm > #recName').value;
    let add = document.querySelector('#RecEditForm > #recAddCheck').checked;
    let remove = document.querySelector('#RecEditForm > #recRemoveCheck').checked;
    
    let outAmnt = parseInt(document.querySelector('#RecEditForm > #outAmnt').value);
    let building = document.querySelector('#RecEditForm > #building').value;
    let numInp = parseInt(document.querySelector('#RecEditForm > #numInp').value);
    let numBypro = parseInt(document.querySelector('#RecEditForm > #numBypro').value);
    
    let inpItems = [
      document.querySelector('#RecEditForm > #inpItem1').value, 
      document.querySelector('#RecEditForm > #inpItem2').value, 
      document.querySelector('#RecEditForm > #inpItem3').value, 
      document.querySelector('#RecEditForm > #inpItem4').value, 
    ];
    
    let inpAmnts = [
      parseInt(document.querySelector('#RecEditForm > #inpAmnt1').value), 
      parseInt(document.querySelector('#RecEditForm > #inpAmnt2').value), 
      parseInt(document.querySelector('#RecEditForm > #inpAmnt3').value), 
      parseInt(document.querySelector('#RecEditForm > #inpAmnt4').value), 
    ];
    
    let byproItems = [
      document.querySelector('#RecEditForm > #byproItem1').value, 
    ];
    
    let byproAmnts = [
      parseInt(document.querySelector('#RecEditForm > #byproAmnt1').value), 
    ];
    
    let exists = false;
    
    // Rec Exists
    
    if(items[itemName]) {
      if(items[itemName]['recipes'][recName]) exists = true;
    }
    
    // Error
    
    if(add && remove) {
      out.innerText = '⚠️ Both "Add" and "Remove" where selected';
      return
    }
    
    if(add && exists) {
      out.innerText = '⚠️ Already exists';
      return
    }
    
    if(!add && !exists) {
      out.innerText = '⚠️ Does not exist';
      return
    }
    
    // Remove
    
    if(remove) {
      delete items[itemName]['recipes'][recName];
      out.innerText = '✅ Removed';
      render();
      return
    }
    
    // Add
    
    if(add) {
      
      // Add
      
      items[itemName]['recipes'][recName] = {
        'out': outAmnt, 
        'in': [], 
        'bypro': [], 
        'building': building, 
      };
      
      // Items
      
      for(let i = 0; i < numInp; i++) {
        items[itemName]['recipes'][recName]['in'].push({'item': inpItems[i], 'amount': inpAmnts[i]});
      }
      
      // Bypros
      
      for(let i = 0; i < numBypro; i++) {
        items[itemName]['recipes'][recName]['bypro'].push({'item': byproItems[i], 'amount': byproAmnts[i]});
      }
      
      // Out
      
      out.innerText = '✅ Added';
      render();
      return
      
    }
    
    // Edit
    
    if(true) { // (If for orginization)
      
      // Edit
      
      items[itemName]['recipes'][recName] = {
        'out': outAmnt, 
        'in': [], 
        'bypro': [], 
        'building': building, 
      };
      
      // Items
      
      for(let i = 0; i < numInp; i++) {
        items[itemName]['recipes'][recName]['in'].push({'item': inpItems[i], 'amount': inpAmnts[i]});
      }
      
      // Bypros
      
      for(let i = 0; i < numBypro; i++) {
        items[itemName]['recipes'][recName]['bypro'].push({'item': byproItems[i], 'amount': byproAmnts[i]});
      }
      
      // Out
      
      out.innerText = '✅ Edited';
      render();
      return
      
    }
    
  });
  
  // Edit Recipe Load Defaults
  
  let RecEditFormLoadDefault = document.querySelector('#RecEditForm > #loadDefault');
  
  RecEditFormLoadDefault.addEventListener('click', function() {
    
    let out = document.querySelector('#RecEditForm > #LDOut'); // Out
    
    // Rec Exists
    
    let itemName = document.querySelector('#RecEditForm > #itemName').value;
    let recName = document.querySelector('#RecEditForm > #recName').value;
    let exists = false;
    
    if(items[itemName]) {
      if(items[itemName]['recipes'][recName]) exists = true;
    }
    
    if(!exists) {
      out.innerText = '⚠️ Does not exist';
      return
    }
    
    // Variables
    
    let numInp = items[itemName]['recipes'][recName].in.length;
    let numBypro = items[itemName]['recipes'][recName].bypro.length;
    
    let inpItems = [
      document.querySelector('#RecEditForm > #inpItem1'), 
      document.querySelector('#RecEditForm > #inpItem2'), 
      document.querySelector('#RecEditForm > #inpItem3'), 
      document.querySelector('#RecEditForm > #inpItem4'), 
    ];
    
    let inpAmnts = [
      document.querySelector('#RecEditForm > #inpAmnt1'), 
      document.querySelector('#RecEditForm > #inpAmnt2'), 
      document.querySelector('#RecEditForm > #inpAmnt3'), 
      document.querySelector('#RecEditForm > #inpAmnt4'), 
    ];
    
    let byproItems = [
      document.querySelector('#RecEditForm > #byproItem1'), 
    ];
    
    let byproAmnts = [
      document.querySelector('#RecEditForm > #byproAmnt1'), 
    ];
    
    // Set
    
    document.querySelector('#RecEditForm > #outAmnt').value = items[itemName]['recipes'][recName].out;
    document.querySelector('#RecEditForm > #building').value = items[itemName]['recipes'][recName].building;
    document.querySelector('#RecEditForm > #numInp').value = numInp;
    document.querySelector('#RecEditForm > #numBypro').value = numBypro;
    
    for(let i = 0; i < numInp; i++) { // Items
      inpItems[i].value = items[itemName]['recipes'][recName]['in'][i].item;
      inpAmnts[i].value = items[itemName]['recipes'][recName]['in'][i].amount;
    }
    
    for(let i = 0; i < numBypro; i++) { // Bypros
      byproItems[i].value = items[itemName]['recipes'][recName]['bypro'][i].item;
      byproAmnts[i].value = items[itemName]['recipes'][recName]['bypro'][i].amount;
    }
    
    out.innerText = '✅ Loaded';
    
  });
  
  // Edit Item
  
  BPAPEditForm = document.getElementById('BPAPEditForm');
  
  BPAPEditForm.addEventListener('submit', function() {
    
    event.preventDefault();
    
    // Out
    
    let out = document.querySelector('#BPAPEditForm > #out');
    out.innerText = '🔄';
    
    // Variables
    
    let buildingName = document.querySelector('#BPAPEditForm > #buildingName').value;
    let add = document.querySelector('#BPAPEditForm > #BPAPAddCheck').checked;
    let remove = document.querySelector('#BPAPEditForm > #BPAPRemoveCheck').checked;
    let movePos = document.querySelector('#BPAPEditForm > #BPAPMovePos').checked;
    
    let pos = parseInt(document.querySelector('#BPAPEditForm > #BPAPPos').value);
    let color = document.querySelector('#BPAPEditForm > #BPAPColor').value;
    let avrgPower = parseInt(document.querySelector('#BPAPEditForm > #avrgPower').value);
    let maxPower = parseInt(document.querySelector('#BPAPEditForm > #maxPower').value);
    let minPower = parseInt(document.querySelector('#BPAPEditForm > #minPower').value);
    
    let exists = false;
    let posTaken = false;
    
    // Building Exists
    
    if(buildings[buildingName]) exists = true;
    
    // Pos Taken
    
    for(let key in buildings) {
      if(buildings[key].pos == pos) {
        posTaken = true;
        break
      }
    }
    
    // Error
    
    if(buildingName.includes('_')) {
      out.innerText = '⚠️ Illegal Character "_"';
      return
    }
    
    if(add && remove) {
      out.innerText = '⚠️ Both "Add" and "Remove" where selected';
      return
    }
    
    if(add && exists) {
      out.innerText = '⚠️ Already exists';
      return
    }
    
    if(!add && !exists) {
      out.innerText = '⚠️ Does not exist';
      return
    }
    
    // Remove
    
    if(remove) {
      delete buildings[buildingName];
      out.innerText = '✅ Removed';
      render();
      return
    }
    
    // Add
    
    if(add) {
      
      // Move pos
      
      if(posTaken && movePos) {
        for(let key in buildings) {
          if(buildings[key]['pos'] >= pos) buildings[key]['pos'] += 1;
        }
      }
      
      // Add
      
      buildings[buildingName] = {
        'Average MW': avrgPower,
        'Max MW': maxPower,
        'Min MW': minPower,
        'Total': 0,
        'Total MW': 0,
        'Max Total MW': 0,
        'Min Total MW': 0,
        'pos': pos,
        'color': color,
      };
      
      // Out
      
      out.innerText = '✅ Added';
      render();
      return
      
    }
    
    // Edit
    
    if(true) { // (If for orginization)
      
      // Move pos
      
      let OGPos = buildings[buildingName]['pos']; // Original Position
      
      if(posTaken && movePos) {
        for(let key in buildings) {
          if(buildings[key]['pos'] >= pos && buildings[key]['pos'] < OGPos) {
            buildings[key]['pos'] += 1;
          }
          if(buildings[key]['pos'] <= pos && buildings[key]['pos'] > OGPos) {
            buildings[key]['pos'] += -1;
          }
        }
      }
      
      // Edit
      
      buildings[buildingName]['Average MW'] = avrgPower;
      buildings[buildingName]['Max MW'] = maxPower;
      buildings[buildingName]['Min MW'] = minPower;
      buildings[buildingName]['pos'] = pos;
      buildings[buildingName]['color'] = color;
      
      // Out
      
      out.innerText = '✅ Edited';
      render();
      return
      
    }
    
  });
  
  // Edit BPAP Load Defaults
  
  let BPAPEditFormLoadDefault = document.querySelector('#BPAPEditForm > #loadDefault');
  
  BPAPEditFormLoadDefault.addEventListener('click', function() {
    
    let out = document.querySelector('#BPAPEditForm > #LDOut'); // Out
    
    // Item Exists
    
    let buildingName = document.querySelector('#BPAPEditForm > #buildingName').value;
    let exists = false;
    
    if(buildings[buildingName]) exists = true;
    
    if(!exists) {
      out.innerText = '⚠️ Does not exist';
      return
    }
    
    // Set
    
    document.querySelector('#BPAPEditForm > #BPAPPos').value = buildings[buildingName].pos;
    document.querySelector('#BPAPEditForm > #BPAPColor').value = buildings[buildingName].color;
    document.querySelector('#BPAPEditForm > #avrgPower').value = buildings[buildingName]['Average MW'];
    document.querySelector('#BPAPEditForm > #maxPower').value = buildings[buildingName]['Max MW'];
    document.querySelector('#BPAPEditForm > #minPower').value = buildings[buildingName]['Min MW'];
    
    out.innerText = '✅ Loaded';
    
  });
  
  // Calc Table
  
  CTTble = document.getElementById('CTTble');
  
});

document.addEventListener('keydown', function() { // Keydown
  
  if(event.key === 'Escape' || event.key === 'Esc') closeAllMenus(); // Escape menus
  
});
