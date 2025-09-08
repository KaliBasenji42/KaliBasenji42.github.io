// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let items = { // Default item data
  'Iron Ore': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#cccccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Iron Ore (Limestone)': {out: 120, in: [{item: 'Limestone', amount: 240}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'Copper Ore': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#f6b26b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 3, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Copper Ore (Quartz)': {out: 120, in: [{item: 'Raw Quartz', amount: 100}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Copper Ore (Sulfur)': {out: 120, in: [{item: 'Sulfur', amount: 120}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'Caterium Ore': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#ffe599', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 7, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Caterium Ore (Copper)': {out: 120, in: [{item: 'Copper Ore', amount: 150}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Caterium Ore (Quartz)': {out: 120, in: [{item: 'Raw Quartz', amount: 120}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'Limestone': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#fce5cd', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Limestone (Sulfur)': {out: 120, in: [{item: 'Sulfur', amount: 20}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'Coal': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 3, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Coal (Iron)': {out: 120, in: [{item: 'Iron Ore', amount: 180}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Coal (Limestone)': {out: 120, in: [{item: 'Limestone', amount: 360}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Biocoal': {out: 45, in: [{item: 'Biomass', amount: 37.5}], bypro: [], building: 'Constructor'},
      'Charcoal': {out: 150, in: [{item: 'Wood', amount: 15}], bypro: [], building: 'Constructor'},
    }
  },
  'Raw Quartz': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#d5a6bd', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 15, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Raw Quartz (Bauxite)': {out: 120, in: [{item: 'Bauxite', amount: 100}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Raw Quartz (Coal)': {out: 120, in: [{item: 'Coal', amount: 240}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'Sulfur': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#f1c232', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 11, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Sulfur (Coal)': {out: 120, in: [{item: 'Coal', amount: 200}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Sulfur (Iron)': {out: 120, in: [{item: 'Iron Ore', amount: 300}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'Bauxite': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#dd7e6b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 8, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Bauxite (Caterium)': {out: 120, in: [{item: 'Caterium Ore', amount: 150}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Bauxite (Copper)': {out: 120, in: [{item: 'Copper Ore', amount: 180}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'Uranium': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#b6d7a8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 35, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Uranium Ore (Bauxite)': {out: 120, in: [{item: 'Bauxite', amount: 480}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'Water': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#7ab0d4', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Water Extractor': {out: 120, in: [], bypro: [], building: 'Water Extractor'},
      'Resource Well': {out: 650, in: [], bypro: [], building: 'Resource Well'},
      'Unpackage Water': {out: 120, in: [{item: 'Packaged Water', amount: 120}], bypro: [{item: 'Empty Canister', amount: 120}], building: 'Packager'},
    }
  },
  'Crude Oil': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#190019', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Oil Extractor - Impure': {out: 60, in: [], bypro: [], building: 'Oil Extractor'},
      'Oil Extractor - Normal': {out: 120, in: [], bypro: [], building: 'Oil Extractor'},
      'Oil Extractor - Pure': {out: 240, in: [], bypro: [], building: 'Oil Extractor'},
      'Resource Well': {out: 360, in: [], bypro: [], building: 'Resource Well'},
      'Unpackage Oil': {out: 60, in: [{item: 'Packaged Oil', amount: 60}], bypro: [{item: 'Empty Canister', amount: 60}], building: 'Packager'},
    }
  },
  'Nitrogen Gas': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 11, color: '#595959', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Resource Well': {out: 800, in: [], bypro: [], building: 'Resource Well'},
      'Unpackage Nitrogen Gas': {out: 240, in: [{item: 'Packaged Nitrogen Gas', amount: 60}], bypro: [{item: 'Empty Fluid Tank', amount: 60}], building: 'Packager'},
      'Nitrogen Gas (Bauxite)': {out: 120, in: [{item: 'Bauxite', amount: 100}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Nitrogen Gas (Caterium)': {out: 120, in: [{item: 'Caterium Ore', amount: 120}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
    }
  },
  'SAM': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 12, color: '#8e7cc3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 20, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Impure - Miner Mk. 1': {out: 30, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Normal - Miner Mk. 1': {out: 60, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Pure - Miner Mk. 1': {out: 120, in: [], bypro: [], building: 'Miner Mk. 1'},
      'Impure - Miner Mk. 2': {out: 60, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Normal - Miner Mk. 2': {out: 120, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Pure - Miner Mk. 2': {out: 240, in: [], bypro: [], building: 'Miner Mk. 2'},
      'Impure - Miner Mk. 3': {out: 120, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Normal - Miner Mk. 3': {out: 240, in: [], bypro: [], building: 'Miner Mk. 3'},
      'Pure - Miner Mk. 3': {out: 480, in: [], bypro: [], building: 'Miner Mk. 3'},
    }
  },
  'Excited Photonic Matter': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 13, color: '#76f5e8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Excited Photonic Matter', recipes: {
      'Excited Photonic Matter': {out: 200, in: [], bypro: [], building: 'Converter'}
    }
  },
  'Biomass': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 14, color: '#93c47d', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 12, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
    }
  },
  'Wood': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', pos: 15, color: '#fce5cd', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 30, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
    }
  },
  'Iron Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#b7b7b7', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Iron Ingot', recipes: {
      'Iron Ingot': {out: 30, in: [{item: 'Iron Ore', amount: 30}], bypro: [], building: 'Smelter'},
      'Basic Iron Ingot': {out: 50, in: [{item: 'Iron Ore', amount: 25}, {item: 'Limestone', amount: 40}], bypro: [], building: 'Foundry'},
      'Iron Alloy Ingot': {out: 75, in: [{item: 'Iron Ore', amount: 40}, {item: 'Copper Ore', amount: 10}], bypro: [], building: 'Foundry'},
      'Leached Iron Ingot': {out: 100, in: [{item: 'Iron Ore', amount: 50}, {item: 'Sulfuric Acid', amount: 10}], bypro: [], building: 'Refinery'},
      'Pure Iron Ingot': {out: 65, in: [{item: 'Iron Ore', amount: 35}, {item: 'Water', amount: 20}], bypro: [], building: 'Refinery'},
    }
  },
  'Copper Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#f6b26b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 6, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Copper Ingot', recipes: {
      'Copper Ingot': {out: 30, in: [{item: 'Iron Ore', amount: 30}], bypro: [], building: 'Smelter'},
      'Copper Alloy Ingot': {out: 100, in: [{item: 'Copper Ore', amount: 50}, {item: 'Iron Ore', amount: 50}], bypro: [], building: 'Foundry'},
      'Leached Copper Ingot': {out: 110, in: [{item: 'Copper Ore', amount: 45}, {item: 'Sulfuric Acid', amount: 25}], bypro: [], building: 'Refinery'},
      'Pure Copper Ingot': {out: 37.5, in: [{item: 'Copper Ore', amount: 15}, {item: 'Water', amount: 20}], bypro: [], building: 'Refinery'},
      'Tempered Copper Ingot': {out: 60, in: [{item: 'Copper Ore', amount: 25}, {item: 'Petroleum Coke', amount: 40}], bypro: [], building: 'Foundry'},
    }
  },
  'Caterium Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#ffe599', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 42, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Caterium Ingot', recipes: {
      'Caterium Ingot': {out: 15, in: [{item: 'Caterium Ore', amount: 45}], bypro: [], building: 'Smelter'},
      'Leached Caterium Ingot': {out: 36, in: [{item: 'Caterium Ore', amount: 54}, {item: 'Sulfuric Acid', amount: 30}], bypro: [], building: 'Refinery'},
      'Pure Caterium Ingot': {out: 12, in: [{item: 'Caterium Ore', amount: 24}, {item: 'Water', amount: 24}], bypro: [], building: 'Refinery'},
      'Tempered Caterium Ingot': {out: 22.5, in: [{item: 'Caterium Ore', amount: 45}, {item: 'Petroleum Coke', amount: 15}], bypro: [], building: 'Foundry'},
    }
  },
  'Steel Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 8, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Steel Ingot', recipes: {
      'Steel Ingot': {out: 45, in: [{item: 'Iron Ore', amount: 45}, {item: 'Coal', amount: 45}], bypro: [], building: 'Foundry'},
      'Coke Steel Ingot': {out: 100, in: [{item: 'Iron Ore', amount: 75}, {item: 'Petroleum Coke', amount: 75}], bypro: [], building: 'Foundry'},
      'Compacted Steel Ingot': {out: 10, in: [{item: 'Iron Ore', amount: 5}, {item: 'Compacted Coal', amount: 2.5}], bypro: [], building: 'Foundry'},
      'Solid Steel Ingot': {out: 60, in: [{item: 'Iron Ingot', amount: 40}, {item: 'Coal', amount: 40}], bypro: [], building: 'Foundry'},
    }
  },
  'Concrete': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#fce5cd', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 12, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Concrete', recipes: {
      'Concrete': {out: 15, in: [{item: 'Limestone', amount: 45}], bypro: [], building: 'Constructor'},
      'Fine Concrete': {out: 50, in: [{item: 'Limestone', amount: 60}, {item: 'Silica', amount: 15}], bypro: [], building: 'Assembler'},
      'Rubber Concrete': {out: 90, in: [{item: 'Limestone', amount: 100}, {item: 'Rubber', amount: 20}], bypro: [], building: 'Assembler'},
      'Wet Concrete': {out: 80, in: [{item: 'Limestone', amount: 120}, {item: 'Water', amount: 100}], bypro: [], building: 'Refinery'},
    }
  },
  'Silica': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#ead1dc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 20, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Silica', recipes: {
      'Silica': {out: 37.5, in: [{item: 'Raw Quartz', amount: 22.5}], bypro: [], building: 'Constructor'},
      'Cheap Silica': {out: 52.5, in: [{item: 'Raw Quartz', amount: 22.5}, {item: 'Limestone', amount: 37.5}], bypro: [], building: 'Assembler'},
      'Distilled Silica': {out: 270, in: [{item: 'Dissolved Silica', amount: 120}, {item: 'Limestone', amount: 50}, {item: 'Water', amount: 100}], bypro: [{item: 'Water', amount: 80}], building: 'Blender'},
      'Alumina Solution': {out: 50, in: [{item: 'Bauxite', amount: 120}, {item: 'Water', amount: 180}], bypro: [{item: 'Alumina Solution', amount: 120}], building: 'Refinery '},
    }
  },
  'Quartz Crystal': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#d9d2e9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 50, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Quartz Crystal', recipes: {
      'Quartz Crystal': {out: 22.5, in: [{item: 'Raw Quartz', amount: 37.5}], bypro: [], building: 'Constructor'},
      'Fused Quartz Crystal': {out: 54, in: [{item: 'Raw Quartz', amount: 75}, {item: 'Coal', amount: 36}], bypro: [], building: 'Foundry'},
      'Pure Quartz Crystal': {out: 52.5, in: [{item: 'Raw Quartz', amount: 67.5}, {item: 'Water', amount: 37.5}], bypro: [], building: 'Refinery'},
      'Quartz Purification': {out: 75, in: [{item: 'Raw Quartz', amount: 120}, {item: 'Nitric Acid', amount: 10}], bypro: [{item: 'Dissolved Silica', amount: 60}], building: 'Refinery'},
    }
  },
  'Copper Powder': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 72, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Copper Powder', recipes: {
      'Copper Powder': {out: 50, in: [{item: 'Copper Ingot', amount: 300}], bypro: [], building: 'Constructor'},
    }
  },
  'Compacted Coal': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 28, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Compacted Coal', recipes: {
      'Compacted Coal': {out: 25, in: [{item: 'Coal', amount: 25}, {item: 'Sulfur', amount: 25}], bypro: [], building: 'Assembler'},
    }
  },
  'Aluminum Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#d9d9d9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 131, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Aluminum Ingot', recipes: {
      'Aluminum Ingot': {out: 60, in: [{item: 'Aluminum Scrap', amount: 90}, {item: 'Silica', amount: 75}], bypro: [], building: 'Foundry'},
      'Pure Aluminum Ingot': {out: 30, in: [{item: 'Aluminum Scrap', amount: 60}], bypro: [], building: 'Smelter'},
    }
  },
  'Aluminum Scrap': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#cccccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 27, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Aluminum Scrap', recipes: {
      'Aluminum Scrap': {out: 360, in: [{item: 'Alumina Solution', amount: 240}, {item: 'Coal', amount: 120}], bypro: [{item: 'Water', amount: 120}], building: 'Refinery'},
      'Electrode Aluminum Scrap': {out: 300, in: [{item: 'Alumina Solution', amount: 180}, {item: 'Petroleum Coke', amount: 60}], bypro: [{item: 'Water', amount: 105}], building: 'Refinery'},
      'Instant Scrap': {out: 300, in: [{item: 'Bauxite', amount: 150}, {item: 'Coal', amount: 100}, {item: 'Sulfuric Acid', amount: 50}, {item: 'Water', amount: 60}], bypro: [{item: 'Water', amount: 50}], building: 'Blender'},
    }
  },
  'Diamonds': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 11, color: '#cfe2f3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 240, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Diamonds', recipes: {
      'Diamonds': {out: 30, in: [{item: 'Coal', amount: 600}], bypro: [], building: 'Particle Accelerator 1'},
      'Cloudy Diamonds': {out: 20, in: [{item: 'Coal', amount: 240}, {item: 'Limestone', amount: 480}], bypro: [], building: 'Particle Accelerator 1'},
      'Oil-Based Diamonds': {out: 40, in: [{item: 'Crude Oil', amount: 200}], bypro: [], building: 'Particle Accelerator 1'},
      'Petroleum Diamonds': {out: 30, in: [{item: 'Petroleum Coke', amount: 720}], bypro: [], building: 'Particle Accelerator 1'},
      'Pink Diamonds': {out: 15, in: [{item: 'Coal', amount: 120}, {item: 'Quartz Crystal', amount: 45}], bypro: [], building: 'Converter'},
      'Turbo Diamonds': {out: 60, in: [{item: 'Coal', amount: 600}, {item: 'Packaged Turbofuel', amount: 40}], bypro: [], building: 'Particle Accelerator 1'},
    }
  },
  'Reanimated SAM': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 12, color: '#b4a7d6', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 160, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Reanimated SAM', recipes: {
      'Reanimated SAM': {out: 30, in: [{item: 'SAM', amount: 120}], bypro: [], building: 'Constructor'},
    }
  },
  'Ficsite Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', pos: 13, color: '#e69138', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1936, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Ficsite Ingot (Aluminum)', recipes: {
      'Ficsite Ingot (Aluminum)': {out: 30, in: [{item: 'Reanimated SAM', amount: 60}, {item: 'Aluminum Ingot', amount: 120}], bypro: [], building: 'Converter'},
      'Ficsite Ingot (Caterium)': {out: 15, in: [{item: 'Reanimated SAM', amount: 45}, {item: 'Caterium Ingot', amount: 60}], bypro: [], building: 'Converter'},
      'Ficsite Ingot (Iron)': {out: 10, in: [{item: 'Reanimated SAM', amount: 40}, {item: 'Iron Ingot', amount: 240}], bypro: [], building: 'Converter'},
    }
  },
  'Iron Plate': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#cccccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 6, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Iron Plate', recipes: {
      'Iron Plate': {out: 20, in: [{item: 'Iron Ingot', amount: 30}], bypro: [], building: 'Constructor'},
      'Coated Iron Plate': {out: 75, in: [{item: 'Iron Ingot', amount: 37.5}, {item: 'Plastic', amount: 7.5}], bypro: [], building: 'Assembler'},
      'Steel Cast Plate': {out: 45, in: [{item: 'Iron Ingot', amount: 15}, {item: 'Steel Ingot', amount: 15}], bypro: [], building: 'Foundry'},
    }
  },
  'Iron Rod': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 4, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Iron Rod', recipes: {
      'Iron Rod': {out: 15, in: [{item: 'Iron Ingot', amount: 15}], bypro: [], building: 'Constructor'},
      'Aluminum Rod': {out: 52.5, in: [{item: 'Aluminum Ingot', amount: 7.5}], bypro: [], building: 'Constructor'},
      'Steel Rod': {out: 48, in: [{item: 'Steel Ingot', amount: 12}], bypro: [], building: 'Constructor'},
    }
  },
  'Screws': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#a4c2f4', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Screws', recipes: {
      'Screws': {out: 40, in: [{item: 'Iron Rod', amount: 10}], bypro: [], building: 'Constructor'},
      'Cast Screws': {out: 50, in: [{item: 'Iron Ingot', amount: 12.5}], bypro: [], building: 'Constructor'},
      'Steel Screws': {out: 260, in: [{item: 'Steel Beam', amount: 5}], bypro: [], building: 'Constructor'},
    }
  },
  'Reinforced Iron Plate': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#b7b7b7', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 120, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Reinforced Iron Plate', recipes: {
      'Reinforced Iron Plate': {out: 5, in: [{item: 'Iron Plate', amount: 30}, {item: 'Screws', amount: 60}], bypro: [], building: 'Assembler'},
      'Adhered Iron Plate': {out: 3.75, in: [{item: 'Iron Plate', amount: 11.25}, {item: 'Rubber', amount: 3.75}], bypro: [], building: 'Assembler'},
      'Bolted Iron Plate': {out: 15, in: [{item: 'Iron Plate', amount: 90}, {item: 'Screws', amount: 250}], bypro: [], building: 'Assembler'},
      'Stitched Iron Plate': {out: 5.625, in: [{item: 'Iron Plate', amount: 18.75}, {item: 'Wire', amount: 37.5}], bypro: [], building: 'Assembler'},
    }
  },
  'Modular Frame': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#cccccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 408, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Modular Frame', recipes: {
      'Modular Frame': {out: 2, in: [{item: 'Reinforced Iron Plate', amount: 3}, {item: 'Iron Rod', amount: 12}], bypro: [], building: 'Assembler'},
      'Bolted Frame': {out: 5, in: [{item: 'Reinforced Iron Plate', amount: 7.5}, {item: 'Screws', amount: 140}], bypro: [], building: 'Assembler'},
      'Steeled Frame': {out: 3, in: [{item: 'Reinforced Iron Plate', amount: 2}, {item: 'Steel Pipe', amount: 10}], bypro: [], building: 'Assembler'},
    }
  },
  'Copper Sheet': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#f6b26b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 24, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Copper Sheet', recipes: {
      'Copper Sheet': {out: 10, in: [{item: 'Copper Ingot', amount: 20}], bypro: [], building: 'Constructor'},
      'Steamed Copper Sheet': {out: 22.5, in: [{item: 'Copper Ingot', amount: 22.5}, {item: 'Water', amount: 22.5}], bypro: [], building: 'Refinery'},
    }
  },
  'Steel Pipe': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#666666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 24, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Steel Pipe', recipes: {
      'Steel Pipe': {out: 20, in: [{item: 'Steel Ingot', amount: 30}], bypro: [], building: 'Constructor'},
      'Iron Pipe': {out: 25, in: [{item: 'Iron Ingot', amount: 100}], bypro: [], building: 'Constructor'},
      'Molded Steel Pipe': {out: 50, in: [{item: 'Steel Ingot', amount: 50}, {item: 'Concrete', amount: 30}], bypro: [], building: 'Foundry'},
    }
  },
  'Steel Beam': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#dd7e6b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 64, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Steel Beam', recipes: {
      'Steel Beam': {out: 15, in: [{item: 'Steel Ingot', amount: 60}], bypro: [], building: 'Constructor'},
      'Aluminum Beam': {out: 22.5, in: [{item: 'Aluminum Ingot', amount: 22.5}], bypro: [], building: 'Constructor'},
      'Molded Beam': {out: 45, in: [{item: 'Steel Ingot', amount: 120}, {item: 'Concrete', amount: 80}], bypro: [], building: 'Foundry'},
    }
  },
  'Encased Industrial Beam': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#f4cccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 528, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Encased Industrial Beam', recipes: {
      'Encased Industrial Beam': {out: 6, in: [{item: 'Steel Beam', amount: 18}, {item: 'Concrete', amount: 36}], bypro: [], building: 'Assembler'},
      'Encased Industrial Pipe': {out: 4, in: [{item: 'Steel Pipe', amount: 24}, {item: 'Concrete', amount: 20}], bypro: [], building: 'Assembler'},
    }
  },
  'Heavy Modular Frame': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 10800, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Heavy Modular Frame', recipes: {
      'Heavy Modular Frame': {out: 2, in: [{item: 'Modular Frame', amount: 10}, {item: 'Steel Pipe', amount: 40}, {item: 'Encased Industrial Beam', amount: 10}, {item: 'Screws', amount: 240}], bypro: [], building: 'Manufacturer'},
      'Heavy Encased Frame': {out: 2.8125, in: [{item: 'Modular Frame', amount: 7.5}, {item: 'Steel Pipe', amount: 33.75}, {item: 'Encased Industrial Beam', amount: 9.375}, {item: 'Concrete', amount: 20.625}], bypro: [], building: 'Manufacturer'},
      'Heavy Flexible Frame': {out: 3.75, in: [{item: 'Modular Frame', amount: 18.75}, {item: 'Encased Industrial Beam', amount: 11.25}, {item: 'Rubber', amount: 75}, {item: 'Screws', amount: 390}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Fused Modular Frame': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 62840, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Fused Modular Frame', recipes: {
      'Fused Modular Frame': {out: 1.5, in: [{item: 'Heavy Modular Frame', amount: 1.5}, {item: 'Aluminum Casing', amount: 75}, {item: 'Nitrogen Gas', amount: 37.5}], bypro: [], building: 'Blender'},
      'Heat-Fused Frame': {out: 3, in: [{item: 'Heavy Modular Frame', amount: 3}, {item: 'Aluminum Ingot', amount: 150}, {item: 'Nitric Acid', amount: 24}, {item: 'Fuel', amount: 30}], bypro: [], building: 'Blender'},
    }
  },
  'Alclad Aluminum Sheet': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 11, color: '#d9d9d9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 266, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Alclad Aluminum Sheet', recipes: {
      'Alclad Aluminum Sheet': {out: 30, in: [{item: 'Aluminum Ingot', amount: 30}, {item: 'Copper Ingot', amount: 10}], bypro: [], building: 'Assembler'},
    }
  },
  'Aluminum Casing': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 12, color: '#cccccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 393, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Aluminum Casing', recipes: {
      'Aluminum Casing': {out: 60, in: [{item: 'Aluminum Ingot', amount: 90}], bypro: [], building: 'Constructor'},
      'Alclad Casing': {out: 112.5, in: [{item: 'Aluminum Ingot', amount: 150}, {item: 'Copper Ingot', amount: 75}], bypro: [], building: 'Assembler'},
    }
  },
  'Fabric': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 13, color: '#f3f3f3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 140, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Polyester Fabric', recipes: {
      'Polyester Fabric': {out: 30, in: [{item: 'Polymer Resin', amount: 30}, {item: 'Water', amount: 30}], bypro: [], building: 'Refiner'},
    }
  },
  'Ficsite Trigon': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', pos: 14, color: '#e69138', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1291, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Ficsite Trigon', recipes: {
      'Ficsite Trigon': {out: 30, in: [{item: 'Ficsite Ingot', amount: 10}], bypro: [], building: 'Constructor'},
    }
  },
  'Rotor': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#a4c2f4', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 140, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Rotor', recipes: {
      'Rotor': {out: 4, in: [{item: 'Iron Rod', amount: 20}, {item: 'Screws', amount: 100}], bypro: [], building: 'Assembler'},
      'Copper Rotor': {out: 11.25, in: [{item: 'Copper Sheet', amount: 22.5}, {item: 'Screws', amount: 195}], bypro: [], building: 'Assembler'},
      'Steel Rotor': {out: 5, in: [{item: 'Steel Pipe', amount: 10}, {item: 'Wire', amount: 30}], bypro: [], building: 'Assembler'},
    }
  },
  'Stator': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#ea9999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 240, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Stator', recipes: {
      'Stator': {out: 5, in: [{item: 'Steel Pipe', amount: 15}, {item: 'Wire', amount: 40}], bypro: [], building: 'Assembler'},
      'Quickwire Stator': {out: 8, in: [{item: 'Steel Pipe', amount: 16}, {item: 'Quickwire', amount: 60}], bypro: [], building: 'Assembler'},
    }
  },
  'Battery': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#b6d7a8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 465, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Battery', recipes: {
      'Battery': {out: 20, in: [{item: 'Sulfuric Acid', amount: 50}, {item: 'Alumina Solution', amount: 40}, {item: 'Aluminum Casing', amount: 20}], bypro: [{item: 'Water', amount: 30}], building: 'Blender'},
      'Classic Battery': {out: 30, in: [{item: 'Sulfur', amount: 45}, {item: 'Alclad Aluminum Sheet', amount: 52.5}, {item: 'Plastic', amount: 60}, {item: 'Wire', amount: 90}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Motor': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#b7b7b7', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1520, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Motor', recipes: {
      'Motor': {out: 5, in: [{item: 'Rotor', amount: 10}, {item: 'Stator', amount: 10}], bypro: [], building: 'Assembler'},
      'Electric Motor': {out: 7.5, in: [{item: 'Rotor', amount: 7.5}, {item: 'Electromagnetic Control Rod', amount: 3.75}], bypro: [], building: 'Assembler'},
      'Rigor Motor': {out: 7.5, in: [{item: 'Rotor', amount: 3.75}, {item: 'Stator', amount: 3.75}, {item: 'Crystal Oscillator', amount: 1.25}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Heat Sink': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#d9d9d9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2804, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Heat Sink', recipes: {
      'Heat Sink': {out: 7.5, in: [{item: 'Alclad Aluminum Sheet', amount: 37.5}, {item: 'Copper Sheet', amount: 22.5}], bypro: [], building: 'Assembler'},
      'Heat Exchanger': {out: 10, in: [{item: 'Aluminum Casing', amount: 30}, {item: 'Rubber', amount: 30}], bypro: [], building: 'Assembler'},
    }
  },
  'Cooling System': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 12006, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Cooling System', recipes: {
      'Cooling System': {out: 6, in: [{item: 'Heat Sink', amount: 12}, {item: 'Rubber', amount: 12}, {item: 'Water', amount: 30}, {item: 'Nitrogen Gas', amount: 150}], bypro: [], building: 'Blender'},
      'Cooling Device': {out: 5, in: [{item: 'Heat Sink', amount: 10}, {item: 'Motor', amount: 2.5}, {item: 'Nitrogen Gas', amount: 60}], bypro: [], building: 'Blender'},
    }
  },
  'Turbo Motor': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#ffe599', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 240496, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Turbo Motor', recipes: {
      'Turbo Motor': {out: 1.875, in: [{item: 'Cooling System', amount: 7.5}, {item: 'Radio Control Unit', amount: 3.75}, {item: 'Motor', amount: 7.5}, {item: 'Rubber', amount: 45}], bypro: [], building: 'Manufacturer'},
      'Turbo Electric Motor': {out: 2.8125, in: [{item: 'Radio Control Unit', amount: 8.4375}, {item: 'Motor', amount: 6.5625}, {item: 'Rubber', amount: 45}], bypro: [], building: 'Manufacturer'},
      'Turbo Pressure Motor': {out: 3.75, in: [{item: 'Motor', amount: 7.5}, {item: 'Pressure Conversion Cube', amount: 1.875}, {item: 'Packaged Nitrogen Gas', amount: 45}, {item: 'Stator', amount: 15}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Wire': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 6, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Wire', recipes: {
      'Wire': {out: 30, in: [{item: 'Copper Ingot', amount: 15}], bypro: [], building: 'Constructor'},
      'Caterium Wire': {out: 120, in: [{item: 'Caterium Ingot', amount: 15}], bypro: [], building: 'Constructor'},
      'Fused Wire': {out: 90, in: [{item: 'Copper Ingot', amount: 12}, {item: 'Caterium Ingot', amount: 3}], bypro: [], building: 'Assembler'},
      'Iron Wire': {out: 22.5, in: [{item: 'Iron Ingot', amount: 12.5}], bypro: [], building: 'Constructor'},
    }
  },
  'Cable': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 24, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Cable', recipes: {
      'Cable': {out: 30, in: [{item: 'Wire', amount: 60}], bypro: [], building: 'Constructor'},
      'Coated Cable': {out: 67.5, in: [{item: 'Wire', amount: 37.5}, {item: 'Heavy Oil Residue', amount: 15}], bypro: [], building: 'Refiner'},
      'Insulated Cable': {out: 100, in: [{item: 'Wire', amount: 45}, {item: 'Rubber', amount: 30}], bypro: [], building: 'Assembler'},
      'Quickwire Cable': {out: 27.5, in: [{item: 'Quickwire', amount: 7.5}, {item: 'Rubber', amount: 5}], bypro: [], building: 'Assembler'},
    }
  },
  'Quickwire': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#fff2cc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 17, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Quickwire', recipes: {
      'Quickwire': {out: 60, in: [{item: 'Caterium Ingot', amount: 12}], bypro: [], building: 'Constructor'},
      'Fused Quickwire': {out: 90, in: [{item: 'Caterium Ingot', amount: 7.5}, {item: 'Copper Ingot', amount: 37.5}], bypro: [], building: 'Assembler'},
    }
  },
  'Circuit Board': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#b6d7a8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 696, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Circuit Board', recipes: {
      'Circuit Board': {out: 7.5, in: [{item: 'Copper Sheet', amount: 15}, {item: 'Plastic', amount: 30}], bypro: [], building: 'Assembler'},
      'Caterium Circuit Board': {out: 8.75, in: [{item: 'Quickwire', amount: 37.5}, {item: 'Plastic', amount: 12.5}], bypro: [], building: 'Assembler'},
      'Electrode Circuit Board': {out: 5, in: [{item: 'Rubber', amount: 20}, {item: 'Petroleum Coke', amount: 40}], bypro: [], building: 'Assembler'},
      'Silicon Circuit Board': {out: 12.5, in: [{item: 'Copper Sheet', amount: 27.5}, {item: 'Silica', amount: 27.5}], bypro: [], building: 'Assembler'},
    }
  },
  'AI Limiter': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#a2c4c9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 920, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'AI Limiter', recipes: {
      'AI Limiter': {out: 5, in: [{item: 'Copper Sheet', amount: 25}, {item: 'Quickwire', amount: 100}], bypro: [], building: 'Assembler'},
      'Plastic AI Limiter': {out: 8, in: [{item: 'Quickwire', amount: 120}, {item: 'Plastic', amount: 28}], bypro: [], building: 'Assembler'},
    }
  },
  'High-Speed Connector': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#6aa84f', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 3776, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'High-Speed Connector', recipes: {
      'High-Speed Connector': {out: 3.75, in: [{item: 'Quickwire', amount: 210}, {item: 'Cable', amount: 37.5}, {item: 'Circuit Board', amount: 3.75}], bypro: [], building: 'Manufacturer'},
      'Silicon High-Speed Connector': {out: 3, in: [{item: 'Quickwire', amount: 90}, {item: 'Circuit Board', amount: 3}, {item: 'Silica', amount: 37.5}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Crystal Oscillator': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#d5a6bd', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 3072, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Crystal Oscillator', recipes: {
      'Crystal Oscillator': {out: 1, in: [{item: 'Quartz Crystal', amount: 18}, {item: 'Cable', amount: 14}, {item: 'Reinforced Iron Plate', amount: 2.5}], bypro: [], building: 'Manufacturer'},
      'Insulated Crystal Oscillator': {out: 1.875, in: [{item: 'Quartz Crystal', amount: 18.75}, {item: 'Rubber', amount: 13.125}, {item: 'AI Control Unit', amount: 1.875}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Computer': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 8352, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Computer', recipes: {
      'Computer': {out: 2.5, in: [{item: 'Circuit Board', amount: 10}, {item: 'Cable', amount: 20}, {item: 'Plastic', amount: 40}], bypro: [], building: 'Manufacturer'},
      'Caterium Computer': {out: 3.75, in: [{item: 'Circuit Board', amount: 15}, {item: 'Quickwire', amount: 52.5}, {item: 'Rubber', amount: 22.5}], bypro: [], building: 'Manufacturer'},
      'Crystal Computer': {out: (10 / 3), in: [{item: 'Circuit Board', amount: 5}, {item: 'Crystal Oscillator', amount: (5 / 2)}], bypro: [], building: 'Assembler'},
    }
  },
  'Supercomputer': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#f6b26b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 97352, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Supercomputer', recipes: {
      'Supercomputer': {out: 1.875, in: [{item: 'Computer', amount: 7.5}, {item: 'AI Limiter', amount: 3.75}, {item: 'High-Speed Connector', amount: 5.625}, {item: 'Plastic', amount: 52.5}], bypro: [], building: 'Manufacturer'},
      'OC Supercomputer': {out: 3, in: [{item: 'Radio Control Unit', amount: 6}, {item: 'Cooling System', amount: 6}], bypro: [], building: 'Assembler'},
      'Super-State Computer': {out: 2.4, in: [{item: 'Computer', amount: 7.2}, {item: 'Electromagnetic Control Rod', amount: 2.4}, {item: 'Battery', amount: 24}, {item: 'Wire', amount: 60}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Radio Control Unit': {category: 'Electronic', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#ffd966', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 32352, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Radio Control Unit', recipes: {
      'Radio Control Unit': {out: 2.5, in: [{item: 'Aluminum Casing', amount: 40}, {item: 'Crystal Oscillator', amount: 1.25}, {item: 'Computer', amount: 2.5}], bypro: [], building: 'Manufacturer'},
      'Radio Connection Unit': {out: 3.75, in: [{item: 'Heat Sink', amount: 15}, {item: 'High-Speed Connector', amount: 7.5}, {item: 'Quartz Crystal', amount: 45}], bypro: [], building: 'Manufacturer'},
      'Radio Control System': {out: 2.5, in: [{item: 'Aluminum Casing', amount: 90}, {item: 'Crystal Oscillator', amount: 1.5}, {item: 'Circuit Board', amount: 15}, {item: 'Rubber', amount: 45}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Plastic': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#a4c2f4', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 75, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Plastic', recipes: {
      'Plastic': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Heavy Oil Residue', amount: 10}], building: 'Refinery'},
      'Residual Plastic': {out: 20, in: [{item: 'Polymer Resin', amount: 60}, {item: 'Water', amount: 20}], bypro: [], building: 'Refinery'},
      'Recycled Plastic': {out: 60, in: [{item: 'Rubber', amount: 30}, {item: 'Fuel', amount: 30}], bypro: [], building: 'Refinery'},
    }
  },
  'Rubber': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#666666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 60, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Rubber', recipes: {
      'Rubber': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Heavy Oil Residue', amount: 20}], building: 'Refinery'},
      'Residual Rubber': {out: 20, in: [{item: 'Polymer Resin', amount: 40}, {item: 'Water', amount: 40}], bypro: [], building: 'Refinery'},
      'Recycled Rubber': {out: 60, in: [{item: 'Plastic', amount: 30}, {item: 'Fuel', amount: 30}], bypro: [], building: 'Refinery'},
    }
  },
  'Polymer Resin': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#6fa8dc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 12, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Polymer Resin', recipes: {
      'Polymer Resin': {out: 130, in: [{item: 'Crude Oil', amount: 60}], bypro: [{item: 'Heavy Oil Residue', amount: 20}], building: 'Refinery'},
      'Fuel': {out: 30, in: [{item: 'Crude Oil', amount: 60}], bypro: [{item: 'Fuel', amount: 40}], building: 'Refinery'},
      'Heavy Oil Residue': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Heavy Oil Residue', amount: 40}], building: 'Refinery'},
    }
  },
  'Petroleum Coke': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 20, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Petroleum Coke', recipes: {
      'Petroleum Coke': {out: 120, in: [{item: 'Heavy Oil Residue', amount: 40}], bypro: [], building: 'Refinery'},
    }
  },
  'Heavy Oil Residue': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#6d2d78', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Heavy Oil Residue', recipes: {
      'Heavy Oil Residue': {out: 40, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Polymer Resin', amount: 20}], building: 'Refinery'},
      'Unpackaged Heavy Oil Residue': {out: 20, in: [{item: 'Packaged Heavy Oil Residue', amount: 20}], bypro: [{item: 'Empty Canister', amount: 20}], building: 'Packager'},
      'Plastic': {out: 10, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Plastic', amount: 20}], building: 'Refinery'},
      'Rubber': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Rubber', amount: 20}], building: 'Refinery'},
      'Polymer Resin': {out: 20, in: [{item: 'Crude Oil', amount: 60}], bypro: [{item: 'Polymer Resin', amount: 130}], building: 'Refinery'},
    }
  },
  'Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#eb7d15', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Fuel', recipes: {
      'Fuel': {out: 40, in: [{item: 'Crude Oil', amount: 60}], bypro: [{item: 'Polymer Resin', amount: 30}], building: 'Refinery'},
      'Unpackaged Fuel': {out: 60, in: [{item: 'Packaged Fuel', amount: 60}], bypro: [{item: 'Empty Canister', amount: 60}], building: 'Packager'},
      'Residual Fuel': {out: 40, in: [{item: 'Heavy Oil Residue', amount: 60}], bypro: [], building: 'Refinery'},
      'Diluted Fuel': {out: 100, in: [{item: 'Heavy Oil Residue', amount: 50}, {item: 'Water', amount: 100}], bypro: [], building: 'Blender'},
    }
  },
  'Turbofuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#d4292e', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Turbofuel', recipes: {
      'Turbofuel': {out: 18.75, in: [{item: 'Fuel', amount: 22.5}, {item: 'Compacted Coal', amount: 15}], bypro: [], building: 'Refinery'},
      'Unpackaged Turbofuel': {out: 20, in: [{item: 'Packaged Turbofuel', amount: 20}], bypro: [{item: 'Empty Canister', amount: 20}], building: 'Packager'},
      'Turbo Heavy Fuel': {out: 30, in: [{item: 'Heavy Oil Residue', amount: 37.5}, {item: 'Compacted Coal', amount: 30}], bypro: [], building: 'Refinery'},
      'Turbo Blend Fuel': {out: 45, in: [{item: 'Fuel', amount: 15}, {item: 'Heavy Oil Residue', amount: 30}, {item: 'Sulfur', amount: 22.5}, {item: 'Petroleum Coke', amount: 22.5}], bypro: [], building: 'Blender'},
    }
  },
  'Rocket Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#bd251a', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Rocket Fuel', recipes: {
      'Rocket Fuel': {out: 100, in: [{item: 'Turbofuel', amount: 60}, {item: 'Nitric Acid', amount: 10}], bypro: [{item: 'Compacted Coal', amount: 10}], building: 'Blender'},
      'Unpackaged Rocket Fuel': {out: 120, in: [{item: 'Packaged Rocket Fuel', amount: 60}], bypro: [{item: 'Empty Fluid Tank', amount: 60}], building: 'Packager'},
      'Nitro Rocket Fuel': {out: 150, in: [{item: 'Fuel', amount: 100}, {item: 'Nitrogen Gas', amount: 10}], bypro: [{item: 'Compacted Coal', amount: 10}], building: 'Blender'},
    }
  },
  'Ionized Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#d55f1a', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Ionized Fuel', recipes: {
      'Ionized Fuel': {out: 40, in: [{item: 'Rocket Fuel', amount: 40}, {item: 'Power Shard', amount: 2.5}], bypro: [{item: 'Compacted Coal', amount: 5}], building: 'Refinery'},
      'Unpackaged Ionized Fuel': {out: 80, in: [{item: 'Packaged Rocket Fuel', amount: 40}], bypro: [{item: 'Empty Fluid Tank', amount: 40}], building: 'Packager'},
      'Dark-Ion Fuel': {out: 10, in: [{item: 'Packaged Rocket Fuel', amount: 240}, {item: 'Dark Matter Crystal', amount: 80}], bypro: [{item: 'Compacted Coal', amount: 40}], building: 'Converter'},
    }
  },
  'Packaged Oil': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#666666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 180, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Oil', recipes: {
      'Packaged Oil': {out: 30, in: [{item: 'Crude Oil', amount: 30}, {item: 'Empty Canister', amount: 30}], bypro: [], building: 'Packager'},
    }
  },
  'Packaged Heavy Oil Residue': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#8e7cc3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 180, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Heavy Oil Residue', recipes: {
      'Packaged Heavy Oil Residue': {out: 30, in: [{item: 'Heavy Oil Residue', amount: 30}, {item: 'Empty Canister', amount: 30}], bypro: [], building: 'Packager'},
    }
  },
  'Packaged Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 11, color: '#f6b26b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 270, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Fuel', recipes: {
      'Packaged Fuel': {out: 40, in: [{item: 'Fuel', amount: 40}, {item: 'Empty Canister', amount: 40}], bypro: [], building: 'Packager'},
      'Diluted Packaged Fuel': {out: 60, in: [{item: 'Heavy Oil Residue', amount: 30}, {item: 'Packaged Water', amount: 60}], bypro: [], building: 'Refinery'},
    }
  },
  'Packaged Turbofuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 12, color: '#e06666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 570, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Turbofuel', recipes: {
      'Packaged Turbofuel': {out: 20, in: [{item: 'Turbofuel', amount: 20}, {item: 'Empty Canister', amount: 20}], bypro: [], building: 'Packager'},
    }
  },
  'Packaged Rocket Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 13, color: '#cc0000', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1028, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Rocket Fuel', recipes: {
      'Packaged Rocket Fuel': {out: 60, in: [{item: 'Rocket Fuel', amount: 120}, {item: 'Empty Fluid Tank', amount: 60}], bypro: [], building: 'Packager'},
    }
  },
  'Packaged Ionized Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', pos: 14, color: '#ffd966', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 5246, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Ionized Fuel', recipes: {
      'Packaged Ionized Fuel': {out: 40, in: [{item: 'Ionized Fuel', amount: 80}, {item: 'Empty Fluid Tank', amount: 40}], bypro: [], building: 'Packager'},
    }
  },
  'Empty Canister': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#b7b7b7', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 60, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Empty Canister', recipes: {
      'Empty Canister': {out: 60, in: [{item: 'Plastic', amount: 30}], bypro: [], building: 'Constructor'},
      'Coated Iron Canister': {out: 60, in: [{item: 'Iron Plate', amount: 30}, {item: 'Copper Sheet', amount: 15}], bypro: [], building: 'Assembler'},
      'Steel Canister': {out: 40, in: [{item: 'Steel Ingot', amount: 40}], bypro: [], building: 'Constructor'},
    }
  },
  'Empty Fluid Tank': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#cccccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 170, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Empty Fluid Tank', recipes: {
      'Empty Fluid Tank': {out: 60, in: [{item: 'Aluminum Ingot', amount: 60}], bypro: [], building: 'Constructor'},
    }
  },
  'Alumina Solution': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#c1c1c1', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Alumina Solution', recipes: {
      'Alumina Solution': {out: 120, in: [{item: 'Bauxite', amount: 120}, {item: 'Water', amount: 180}], bypro: [{item: 'Silica', amount: 50}], building: 'Refinery'},
      'Unpackaged Alumina Solution': {out: 120, in: [{item: 'Packaged Alumina Solution', amount: 120}], bypro: [{item: 'Empty Canister', amount: 120}], building: 'Packager'},
      'Sloppy Alumina': {out: 240, in: [{item: 'Bauxite', amount: 200}, {item: 'Water', amount: 200}], bypro: [], building: 'Refinery'},
    }
  },
  'Sulfuric Acid': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#ffff00', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Sulfuric Acid', recipes: {
      'Sulfuric Acid': {out: 50, in: [{item: 'Sulfur', amount: 50}, {item: 'Water', amount: 50}], bypro: [], building: 'Refinery'},
      'Unpackaged Sulfuric Acid': {out: 60, in: [{item: 'Packaged Sulfuric Acid', amount: 60}], bypro: [{item: 'Empty Canister', amount: 60}], building: 'Packager'},
      'Encased Uranium Cell': {out: 10, in: [{item: 'Uranium', amount: 50}, {item: 'Concrete', amount: 15}, {item: 'Sulfuric Acid', amount: 40}], bypro: [{item: 'Encased Uranium Cell', amount: 25}], building: 'Blender'},
    }
  },
  'Nitric Acid': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#d9d9a2', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Nitric Acid', recipes: {
      'Nitric Acid': {out: 30, in: [{item: 'Nitrogen Gas', amount: 120}, {item: 'Water', amount: 30}, {item: 'Iron Plate', amount: 10}], bypro: [], building: 'Blender'},
      'Unpackaged Nitric Acid': {out: 20, in: [{item: 'Packaged Nitric Acid', amount: 20}], bypro: [{item: 'Empty Canister', amount: 20}], building: 'Packager'},
    }
  },
  'Dissolved Silica': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#e2beee', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Dissolved Silica', recipes: {
      'Dissolved Silica': {out: 60, in: [{item: 'Raw Quartz', amount: 120}, {item: 'Nitric Acid', amount: 10}], bypro: [{item: 'Quartz Crystal', amount: 75}], building: 'Refinery'},
    }
  },
  'Packaged Water': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#a4c2f4', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 130, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Water', recipes: {
      'Packaged Water': {out: 60, in: [{item: 'Water', amount: 60}, {item: 'Empty Canister', amount: 60}], bypro: [], building: 'Packager'},
    }
  },
  'Packaged Alumina Solution': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#d9d9d9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 160, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Alumina Solution', recipes: {
      'Packaged Alumina Solution': {out: 120, in: [{item: 'Alumina Solution', amount: 120}, {item: 'Empty Canister', amount: 120}], bypro: [], building: 'Packager'},
    }
  },
  'Packaged Sulfuric Acid': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#ffe599', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 152, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Sulfuric Acid', recipes: {
      'Packaged Sulfuric Acid': {out: 40, in: [{item: 'Sulfuric Acid', amount: 40}, {item: 'Empty Canister', amount: 40}], bypro: [], building: 'Packager'},
    }
  },
  'Packaged Nitric Acid': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#efefef', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 412, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Nitric Acid', recipes: {
      'Packaged Nitric Acid': {out: 30, in: [{item: 'Nitric Acid', amount: 30}, {item: 'Empty Fluid Tank', amount: 30}], bypro: [], building: 'Packager'},
    }
  },
  'Packaged Nitrogen Gas': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#ffffff', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 312, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Packaged Nitrogen Gas', recipes: {
      'Packaged Nitrogen Gas': {out: 60, in: [{item: 'Nitrogen Gas', amount: 240}, {item: 'Empty Fluid Tank', amount: 60}], bypro: [], building: 'Packager'},
    }
  },
  'Pressure Conversion Cube': {category: 'Fluid', complete: false, inpDemand: 0, status: 'resolved', pos: 11, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Pressure Conversion Cube', recipes: {
      'Pressure Conversion Cube': {out: 1, in: [{item: 'Fused Modular Frame', amount: 1}, {item: 'Radio Control Unit', amount: 2}], bypro: [], building: 'Assembler'},
    }
  },
  'Electromagnetic Control Rod': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#b7b7b7', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2560, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Electromagnetic Control Rod', recipes: {
      'Electromagnetic Control Rod': {out: 4, in: [{item: 'Stator', amount: 6}, {item: 'AI Limiter', amount: 4}], bypro: [], building: 'Assembler'},
    }
  },
  'Encased Uranium Cell': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#b6d7a8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 147, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Encased Uranium Cell', recipes: {
      'Encased Uranium Cell': {out: 25, in: [{item: 'Uranium', amount: 50}, {item: 'Concrete', amount: 15}, {item: 'Sulfuric Acid', amount: 40}], bypro: [{item: 'Sulfuric Acid', amount: 10}], building: 'Blender'},
      'Infused Uranium Cell': {out: 20, in: [{item: 'Uranium', amount: 25}, {item: 'Silica', amount: 15}, {item: 'Sulfur', amount: 25}, {item: 'Quickwire', amount: 75}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Non-Fissle Uranium': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#d9ead3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Non-Fissle Uranium', recipes: {
      'Non-Fissle Uranium': {out: 50, in: [{item: 'Uranium Waste', amount: 37.5}, {item: 'Silica', amount: 25}, {item: 'Nitric Acid', amount: 15}, {item: 'Sulfuric Acid', amount: 15}], bypro: [{item: 'Water', amount: 15}], building: 'Blender'},
      'Fertile Uranium': {out: 100, in: [{item: 'Uranium Waste', amount: 25}, {item: 'Uranium', amount: 25}, {item: 'Nitric Acid', amount: 15}, {item: 'Sulfuric Acid', amount: 25}], bypro: [{item: 'Water', amount: 40}], building: 'Blender'},
    }
  },
  'Plutonium Pellet': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#d0e0e3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Plutonium Pellet', recipes: {
      'Plutonium Pellet': {out: 30, in: [{item: 'Non-Fissle Uranium', amount: 100}, {item: 'Uranium Waste', amount: 25}], bypro: [], building: 'Particle Accelerator 1'},
    }
  },
  'Encased Plutonium Cell': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#a2c4c9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Encased Plutonium Cell', recipes: {
      'Encased Plutonium Cell': {out: 5, in: [{item: 'Plutonium Pellet', amount: 10}, {item: 'Concrete', amount: 20}], bypro: [], building: 'Assembler'},
      'Instant Plutonium Cell': {out: 10, in: [{item: 'Non-Fissle Uranium', amount: 75}, {item: 'Aluminum Casing', amount: 10}], bypro: [], building: 'Particle Accelerator 1'},
    }
  },
  'Ficsonium': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#ffe599', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Ficsonium', recipes: {
      'Ficsonium': {out: 10, in: [{item: 'Plutonium Waste', amount: 10}, {item: 'Singularity Cell', amount: 10}, {item: 'Dark Matter Residue', amount: 200}], bypro: [], building: 'Particle Accelerator 2'},
    }
  },
  'Uranium Fuel Rod': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#93c47d', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 43468, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Uranium Fuel Rod', recipes: {
      'Uranium Fuel Rod': {out: 0.4, in: [{item: 'Encased Uranium Cell', amount: 20}, {item: 'Encased Industrial Beam', amount: 1.2}, {item: 'Electromagnetic Control Rod', amount: 2}], bypro: [], building: 'Manufacturer'},
      'Uranium Fuel Unit': {out: 0.6, in: [{item: 'Encased Uranium Cell', amount: 20}, {item: 'Electromagnetic Control Rod', amount: 2}, {item: 'Crystal Oscillator', amount: 0.6}, {item: 'Rotor', amount: 2}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Plutonium Fuel Rod': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#9fc5e8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 153184, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Plutonium Fuel Rod', recipes: {
      'Plutonium Fuel Rod': {out: 0.25, in: [{item: 'Encased Plutonium Cell', amount: 7.5}, {item: 'Steel Beam', amount: 4.5}, {item: 'Electromagnetic Control Rod', amount: 1.5}, {item: 'Heat Sink', amount: 2.5}], bypro: [], building: 'Manufacturer'},
      'Plutonium Fuel Unit': {out: 0.5, in: [{item: 'Encased Plutonium Cell', amount: 10}, {item: 'Pressure Conversion Cube', amount: 0.5}], bypro: [], building: 'Assembler'},
    }
  },
  'Ficsonium Fuel Rod': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#ffd966', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Ficsonium Fuel Rod', recipes: {
      'Ficsonium Fuel Rod': {out: 2.5, in: [{item: 'Ficsonium', amount: 5}, {item: 'Electromagnetic Control Rod', amount: 5}, {item: 'Ficsite Trigon', amount: 100}, {item: 'Excited Photonic Matter', amount: 50}], bypro: [{item: 'Dark Matter Residue', amount: 50}], building: 'Quantum Encoder'},
    }
  },
  'Uranium Waste': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#6aa84f', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Uranium Waste', recipes: {
      'Uranium Waste': {out: 10, in: [{item: 'Uranium Fuel Rod', amount: 0.2}, {item: 'Water', amount: 240}], bypro: [], building: 'Nuclear Power Plant'},
    }
  },
  'Plutonium Waste': {category: 'Nuclear', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#a2c4c9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Plutonium Waste', recipes: {
      'Plutonium Waste': {out: 1, in: [{item: 'Plutonium Fuel Rod', amount: 0.1}, {item: 'Water', amount: 240}], bypro: [], building: 'Nuclear Power Plant'},
    }
  },
  'Time Crystal': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#cfe2f3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 960, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Time Crystal', recipes: {
      'Time Crystal': {out: 6, in: [{item: 'Diamonds', amount: 12}], bypro: [], building: 'Converter'},
    }
  },
  'SAM Fluctuator': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#f6b26b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1968, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'SAM Fluctuator', recipes: {
      'SAM Fluctuator': {out: 10, in: [{item: 'Reanimated SAM', amount: 60}, {item: 'Wire', amount: 50}, {item: 'Steel Pipe', amount: 30}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Dark Matter Residue': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#b4a7d6', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Dark Matter Residue', recipes: {
      'Dark Matter Residue': {out: 100, in: [{item: 'Reanimated SAM', amount: 50}], bypro: [], building: 'Converter'},
    }
  },
  'Dark Matter Crystal': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#8e7cc3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1780, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Dark Matter Crystal', recipes: {
      'Dark Matter Crystal': {out: 30, in: [{item: 'Diamonds', amount: 30}, {item: 'Dark Matter Residue', amount: 150}], bypro: [], building: 'Particle Accelerator 2'},
      'Dark Matter Crystallization': {out: 20, in: [{item: 'Dark Matter Residue', amount: 200}], bypro: [], building: 'Particle Accelerator 2'},
      'Dark Matter Trap': {out: 60, in: [{item: 'Time Crystal', amount: 30}, {item: 'Dark Matter Residue', amount: 150}], bypro: [], building: 'Particle Accelerator 2'},
    }
  },
  'Superposition Oscillator': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#cccccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 37292, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Superposition Oscillator', recipes: {
      'Superposition Oscillator': {out: 5, in: [{item: 'Dark Matter Crystal', amount: 30}, {item: 'Crystal Oscillator', amount: 5}, {item: 'Alclad Aluminum Sheet', amount: 45}, {item: 'Excited Photonic Matter', amount: 125}], bypro: [{item: 'Dark Matter Residue', amount: 125}], building: 'Quantum Encoder'},
    }
  },
  'Power Shard': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#9fc5e8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Power Shard', recipes: {
      'Power Shard': {out: 5, in: [{item: 'Time Crystal', amount: 10}, {item: 'Dark Matter Crystal', amount: 10}, {item: 'Quartz Crystal', amount: 60}, {item: 'Excited Photonic Matter', amount: 60}], bypro: [{item: 'Dark Matter Residue', amount: 60}], building: 'Quantum Encoder'},
    }
  },
  'Singularity Cell': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#fce5cd', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 114675, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Singularity Cell', recipes: {
      'Singularity Cell': {out: 10, in: [{item: 'Nuclear Pasta', amount: 1}, {item: 'Dark Matter Crystal', amount: 20}, {item: 'Iron Plate', amount: 100}, {item: 'Concrete', amount: 200}], bypro: [], building: 'Manfacture'},
    }
  },
  'Neural-Quantum Processor': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#3d85c6', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 248034, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Neural-Quantum Processor', recipes: {
      'Neural-Quantum Processor': {out: 3, in: [{item: 'Time Crystal', amount: 15}, {item: 'Supercomputer', amount: 3}, {item: 'Ficsite Trigon', amount: 45}, {item: 'Excited Photonic Matter', amount: 75}], bypro: [{item: 'Dark Matter Residue', amount: 75}], building: 'Quantum Encoder'},
    }
  },
  'Alien Power Matrix': {category: 'Quantum', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#ead1dc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 210, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Alien Power Matrix', recipes: {
      'Alien Power Matrix': {out: 2.5, in: [{item: 'SAM Fluctuator', amount: 12.5}, {item: 'Power Shard', amount: 7.5}, {item: 'Superposition Oscillator', amount: 7.5}, {item: 'Excited Photonic Matter', amount: 60}], bypro: [{item: 'Dark Matter Residue', amount: 60}], building: 'Quantum Encoder'},
    }
  },
  'Smart Plating': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#b7b7b7', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 520, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Smart Plating', recipes: {
      'Smart Plating': {out: 2, in: [{item: 'Reinforced Iron Plate', amount: 2}, {item: 'Rotor', amount: 2}], bypro: [], building: 'Assembler'},
      'Plastic Smart Plating': {out: 5, in: [{item: 'Reinforced Iron Plate', amount: 2}, {item: 'Rotor', amount: 2}, {item: 'Plastic', amount: 7.5}], bypro: [], building: 'Manfacture'},
    }
  },
  'Versatile Framework': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#e6b8af', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1176, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Versatile Framework', recipes: {
      'Versatile Framework': {out: 5, in: [{item: 'Modular Frame', amount: 2.5}, {item: 'Steel Beam', amount: 30}], bypro: [], building: 'Assembler'},
      'Flexable Framework': {out: 7.5, in: [{item: 'Modular Frame', amount: 3.75}, {item: 'Steel Beam', amount: 22.5}, {item: 'Rubber', amount: 30}], bypro: [], building: 'Manfacture'},
    }
  },
  'Automated Wiring': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1440, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Automated Wiring', recipes: {
      'Automated Wiring': {out: 2.5, in: [{item: 'Stator', amount: 2.5}, {item: 'Cable', amount: 50}], bypro: [], building: 'Assembler'},
      'Automated Speed Wiring': {out: 7.5, in: [{item: 'Stator', amount: 3.75}, {item: 'Wire', amount: 75}, {item: 'High-Speed Connector', amount: 1.875}], bypro: [], building: 'Manfacture'},
    }
  },
  'Modular Engine': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#ffe599', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 9960, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Modular Engine', recipes: {
      'Modular Engine': {out: 1, in: [{item: 'Smart Plating', amount: 2}, {item: 'Motor', amount: 2}, {item: 'Rubber', amount: 15}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Adaptive Control Unit': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 76368, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Adaptive Control Unit', recipes: {
      'Adaptive Control Unit': {out: 1, in: [{item: 'Automated Wiring', amount: 5}, {item: 'Circuit Board', amount: 5}, {item: 'Heavy Modular Frame', amount: 1}, {item: 'Computer', amount: 2}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Assemble Director System': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#b4a7d6', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 500176, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Assemble Director System', recipes: {
      'Assemble Director System': {out: 0.75, in: [{item: 'Adaptive Control Unit', amount: 1.5}, {item: 'Supercomputer', amount: 0.75}], bypro: [], building: 'Assembler'},
    }
  },
  'Magnetic Field Generator': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#b6d7a8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 11000, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Magnetic Field Generator', recipes: {
      'Magnetic Field Generator': {out: 1, in: [{item: 'Versatile Framework', amount: 2.5}, {item: 'Electromagnetic Control Rod', amount: 1}], bypro: [], building: 'Assembler'},
    }
  },
  'Thermal Propulsion Rocket': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#e06666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 728508, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Thermal Propulsion Rocket', recipes: {
      'Thermal Propulsion Rocket': {out: 1, in: [{item: 'Modular Engine', amount: 2.5}, {item: 'Turbo Motor', amount: 1}, {item: 'Cooling System', amount: 3}, {item: 'Fused Modular Frame', amount: 1}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Nuclear Pasta': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#a2c4c9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 538976, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Nuclear Pasta', recipes: {
      'Nuclear Pasta': {out: 0.5, in: [{item: 'Copper Powder', amount: 100}, {item: 'Pressure Convertion Cube', amount: 0.5}], bypro: [], building: 'Particle Accelerator 2'},
    }
  },
  'Biochemical Sculptor': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#ea9999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 301778, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Biochemical Sculptor', recipes: {
      'Biochemical Sculptor': {out: 2, in: [{item: 'Assemble Director System', amount: 0.5}, {item: 'Ficsite Trigon', amount: 40}, {item: 'Water', amount: 10}], bypro: [], building: 'Blender'},
    }
  },
  'Ballistic Warp Drive': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#f6b26b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2895334, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Ballistic Warp Drive', recipes: {
      'Ballistic Warp Drive': {out: 1, in: [{item: 'Thermal Propulsion Rocket', amount: 1}, {item: 'Singularity Cell', amount: 5}, {item: 'Superposition Oscillator', amount: 2}, {item: 'Dark Matter Crystal', amount: 40}], bypro: [], building: 'Manufacturer'},
    }
  },
  'AI Expansion Server': {category: 'Space Elevator', complete: false, inpDemand: 0, status: 'resolved', pos: 11, color: '#f4cccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 597652, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'AI Expansion Server', recipes: {
      'AI Expansion Server': {out: 4, in: [{item: 'Magnetic Field Generator', amount: 4}, {item: 'Neural-Quantum Processor', amount: 4}, {item: 'Superposition Oscillator', amount: 4}, {item: 'Excited Photonic Matter', amount: 100}], bypro: [{item: 'Dark Matter Residue', amount: 100}], building: 'Quantum Encoder'},
    }
  },
  'Black Powder': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#666666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 14, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Black Powder', recipes: {
      'Black Powder': {out: 30, in: [{item: 'Sulfur', amount: 15}, {item: 'Coal', amount: 15}], bypro: [], building: 'Assembler'},
      'Fine Black Powder': {out: 45, in: [{item: 'Sulfur', amount: 7.5}, {item: 'Compacted Coal', amount: 15}], bypro: [], building: 'Assembler'},
    }
  },
  'Smokeless Powder': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#d9d9d9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 58, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Smokeless Powder', recipes: {
      'Smokeless Powder': {out: 20, in: [{item: 'Black Powder', amount: 20}, {item: 'Heavy Oil Residue', amount: 10}], bypro: [], building: 'Refinery'},
    }
  },
  'Iron Rebar': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#b7b7b7', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 8, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Iron Rebar', recipes: {
      'Iron Rebar': {out: 15, in: [{item: 'Iron Rod', amount: 15}], bypro: [], building: 'Constructor'},
    }
  },
  'Stun Rebar': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#a4c2f4', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 186, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Stun Rebar', recipes: {
      'Stun Rebar': {out: 10, in: [{item: 'Iron Rebar', amount: 10}, {item: 'Quickwire', amount: 50}], bypro: [], building: 'Assembler'},
    }
  },
  'Shatter Rebar': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#b4a7d6', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 332, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Shatter Rebar', recipes: {
      'Shatter Rebar': {out: 5, in: [{item: 'Iron Rebar', amount: 10}, {item: 'Quartz Crystal', amount: 15}], bypro: [], building: 'Assembler'},
    }
  },
  'Explosive Rebar': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#ea9999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 360, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Explosive Rebar', recipes: {
      'Explosive Rebar': {out: 5, in: [{item: 'Iron Rebar', amount: 10}, {item: 'Smokeless Powder', amount: 10}, {item: 'Steel Pipe', amount: 10}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Rifle Ammo': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 25, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Rifle Ammo', recipes: {
      'Rifle Ammo': {out: 75, in: [{item: 'Smokeless Powder', amount: 10}, {item: 'Copper Sheet', amount: 15}], bypro: [], building: 'Assembler'},
    }
  },
  'Homing Rifle Ammo': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#999999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 855, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Homing Rifle Ammo', recipes: {
      'Homing Rifle Ammo': {out: 25, in: [{item: 'Rifle Ammo', amount: 50}, {item: 'High-Speed Connector', amount: 1}], bypro: [], building: 'Assembler'},
    }
  },
  'Turbo Rifle Ammo': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#ea9999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 120, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Turbo Rifle Ammo', recipes: {
      'Turbo Rifle Ammo': {out: 250, in: [{item: 'Rifle Ammo', amount: 125}, {item: 'Aluminum Casing', amount: 15}, {item: 'Packaged Turbofuel', amount: 15}], bypro: [], building: 'Manufacturer'},
      'Turbo Rifle Ammo (Blender)': {out: 250, in: [{item: 'Rifle Ammo', amount: 125}, {item: 'Aluminum Casing', amount: 15}, {item: 'Turbofuel', amount: 15}], bypro: [], building: 'Blender'},
    }
  },
  'Nobelisk': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#e06666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 152, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Nobelisk', recipes: {
      'Nobelisk': {out: 10, in: [{item: 'Black Powder', amount: 20}, {item: 'Steel Pipe', amount: 20}], bypro: [], building: 'Assembler'},
    }
  },
  'Gas Nobelisk': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#b6d7a8', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 544, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Gas Nobelisk', recipes: {
      'Gas Nobelisk': {out: 5, in: [{item: 'Nobelisk', amount: 5}, {item: 'Biomass', amount: 50}], bypro: [], building: 'Assembler'},
    }
  },
  'Pulse Nobelisk': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 11, color: '#a2c4c9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1533, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Pulse Nobelisk', recipes: {
      'Pulse Nobelisk': {out: 5, in: [{item: 'Nobelisk', amount: 5}, {item: 'Crystal Oscillator', amount: 1}], bypro: [], building: 'Assembler'},
    }
  },
  'Cluster Nobelisk': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 12, color: '#f9cb9c', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1376, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Cluster Nobelisk', recipes: {
      'Cluster Nobelisk': {out: 2.5, in: [{item: 'Nobelisk', amount: 7.5}, {item: 'Smokeless Powder', amount: 10}], bypro: [], building: 'Assembler'},
    }
  },
  'Nuke Nobelisk': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 13, color: '#93c47d', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 19600, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Nuke Nobelisk', recipes: {
      'Nuke Nobelisk': {out: 0.5, in: [{item: 'Nobelisk', amount: 2.5}, {item: 'Smokeless Powder', amount: 5}, {item: 'Encased Uranium Cell', amount: 10}, {item: 'AI Limiter', amount: 3}], bypro: [], building: 'Manufacurer'},
    }
  },
  'Gas Filter': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 14, color: '#666666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 608, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Gas Filter', recipes: {
      'Gas Filter': {out: 7.5, in: [{item: 'Fabric', amount: 15}, {item: 'Coal', amount: 30}, {item: 'Iron Plate', amount: 15}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Iodine-Infused Filter': {category: 'Weapons', complete: false, inpDemand: 0, status: 'resolved', pos: 15, color: '#f1c232', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2274, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Iodine-Infused Filter', recipes: {
      'Iodine-Infused Filter': {out: 3.75, in: [{item: 'Gas Filter', amount: 3.75}, {item: 'Quickwire', amount: 30}, {item: 'Aluminum Casing', amount: 3.75}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Gift': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 0, color: '#ffe599', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Gift', recipes: {
      'Gift': {out: 15, in: [], bypro: [], building: 'FICSMAS Tree'},
    }
  },
  'Candy Cane': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 1, color: '#f4cccc', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 6, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Candy Cane', recipes: {
      'Candy Cane': {out: 5, in: [{item: 'Gift', amount: 15}], bypro: [], building: 'Constructor'},
    }
  },
  'Actual Snow': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 2, color: '#ffffff', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 5, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Actual Snow', recipes: {
      'Actual Snow': {out: 10, in: [{item: 'Gift', amount: 25}], bypro: [], building: 'Constructor'},
    }
  },
  'Bow': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 3, color: '#ea9999', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 4, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Bow', recipes: {
      'Bow': {out: 5, in: [{item: 'Gift', amount: 10}], bypro: [], building: 'Constructor'},
    }
  },
  'Tree Branch': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 4, color: '#76a5af', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Tree Branch', recipes: {
      'Tree Branch': {out: 10, in: [{item: 'Gift', amount: 10}], bypro: [], building: 'Constructor'},
    }
  },
  'Red Ornament': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 5, color: '#e06666', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Red Ornament', recipes: {
      'Red Ornament': {out: 5, in: [{item: 'Gift', amount: 5}], bypro: [], building: 'Smelter'},
    }
  },
  'Blue Ornament': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 6, color: '#6d9eeb', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Blue Ornament', recipes: {
      'Blue Ornament': {out: 10, in: [{item: 'Gift', amount: 5}], bypro: [], building: 'Smelter'},
    }
  },
  'Copper Ornament': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 7, color: '#f6b26b', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 32, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Copper Ornament', recipes: {
      'Copper Ornament': {out: 5, in: [{item: 'Red Ornament', amount: 10}, {item: 'Copper Ingot', amount: 10}], bypro: [], building: 'Foundry'},
    }
  },
  'Iron Ornament': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 8, color: '#efefef', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 18, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Iron Ornament', recipes: {
      'Iron Ornament': {out: 5, in: [{item: 'Blue Ornament', amount: 15}, {item: 'Iron Ingot', amount: 15}], bypro: [], building: 'Foundry'},
    }
  },
  'Ornament Bundle': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 9, color: '#d9d9d9', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 100, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Ornament Bundle', recipes: {
      'Ornament Bundle': {out: 5, in: [{item: 'Iron Ornament', amount: 5}, {item: 'Copper Ornament', amount: 5}], bypro: [], building: 'Assembler'},
    }
  },
  'Wreath': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 10, color: '#93c47d', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 630, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Wreath', recipes: {
      'Wreath': {out: 2, in: [{item: 'Tree Branch', amount: 15}, {item: 'Ornament Bundle', amount: 6}], bypro: [], building: 'Assembler'},
    }
  },
  'Wonder Star': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 11, color: '#ffd966', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 6540, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Wonder Star', recipes: {
      'Wonder Star': {out: 1, in: [{item: 'Wreath', amount: 5}, {item: 'Candy Cane', amount: 20}], bypro: [], building: 'Assembler'},
    }
  },
  'Snowball': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 12, color: '#f3f3f3', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 30, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Snowball', recipes: {
      'Snowball': {out: 5, in: [{item: 'Actual Snow', amount: 15}], bypro: [], building: 'Constructor'},
    }
  },
  'Fancy Fireworks': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 13, color: '#b4a7d6', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 40, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Fancy Fireworks', recipes: {
      'Fancy Fireworks': {out: 2.5, in: [{item: 'Tree Branch', amount: 10}, {item: 'Bow', amount: 7.5}], bypro: [], building: 'Assembler'},
    }
  },
  'Sparkly Fireworks': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 14, color: '#b4a7d6', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 32, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Sparkly Fireworks', recipes: {
      'Sparkly Fireworks': {out: 2.5, in: [{item: 'Tree Branch', amount: 7.5}, {item: 'Actual Snow', amount: 15}], bypro: [], building: 'Assembler'},
    }
  },
  'Sweet Fireworks': {category: 'Ficsmas', complete: false, inpDemand: 0, status: 'resolved', pos: 15, color: '#b4a7d6', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 60, awesomePtsInp: 0, awesomePtsBypro: 0, power: 0, 
    recipe: 'Sweet Fireworks', recipes: {
      'Sweet Fireworks': {out: 2.5, in: [{item: 'Tree Branch', amount: 15}, {item: 'Candy Cane', amount: 7.5}], bypro: [], building: 'Assembler'},
    }
  },
};

let buildings = { // Default building data
  'Miner 1': {
    'Average MW': 5,
    'Max MW': 5,
    'Min MW': 5,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 0,
    color: '#b7b7b7',
  },
  'Miner 2': {
    'Average MW': 15,
    'Max MW': 15,
    'Min MW': 15,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 1,
    color: '#cccccc',
  },
  'Miner 3': {
    'Average MW': 45,
    'Max MW': 45,
    'Min MW': 45,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 2,
    color: '#d9d9d9',
  },
  'Resource Well': {
    'Average MW': 150,
    'Max MW': 150,
    'Min MW': 150,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 3,
    color: '#e06666',
  },
  'Water Extractor': {
    'Average MW': 20,
    'Max MW': 20,
    'Min MW': 20,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 4,
    color: '#7ab0d4',
  },
  'Oil Extractor': {
    'Average MW': 40,
    'Max MW': 40,
    'Min MW': 40,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 5,
    color: '#190019',
  },
  'Constructor': {
    'Average MW': 4,
    'Max MW': 4,
    'Min MW': 4,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 6,
    color: '#93c47d',
  },
  'Assembler': {
    'Average MW': 15,
    'Max MW': 15,
    'Min MW': 15,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 7,
    color: '#6aa84f',
  },
  'Manufacturer': {
    'Average MW': 55,
    'Max MW': 55,
    'Min MW': 55,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 8,
    color: '#38761d',
  },
  'Smelter': {
    'Average MW': 4,
    'Max MW': 4,
    'Min MW': 4,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 8,
    color: '#f6b26b',
  },
  'Foundry': {
    'Average MW': 16,
    'Max MW': 16,
    'Min MW': 16,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 9,
    color: '#e69138',
  },
  'Refinery': {
    'Average MW': 30,
    'Max MW': 30,
    'Min MW': 30,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 10,
    color: '#8e7cc3',
  },
  'Blender': {
    'Average MW': 75,
    'Max MW': 75,
    'Min MW': 75,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 11,
    color: '#674ea7',
  },
  'Particle Accelerator 1': {
    'Average MW': 500,
    'Max MW': 750,
    'Min MW': 250,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 12,
    color: '#76a5af',
  },
  'Particle Accelerator 2': {
    'Average MW': 1000,
    'Max MW': 1500,
    'Min MW': 500,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 13,
    color: '#45818e',
  },
  'Packager': {
    'Average MW': 10,
    'Max MW': 10,
    'Min MW': 10,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 14,
    color: '#b7b7b7',
  },
  'Nuclear Power': {
    'Average MW': -2500,
    'Max MW': -2500,
    'Min MW': -2500,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 15,
    color: '#ffe599',
  },
  'Quantum Encoder': {
    'Average MW': 1000,
    'Max MW': 2000,
    'Min MW': 0,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 16,
    color: '#c27ba0',
  },
  'Converter': {
    'Average MW': 250,
    'Max MW': 400,
    'Min MW': 100,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 17,
    color: '#a64d79',
  },
  'FICSMAS Tree': {
    'Average MW': 0,
    'Max MW': 0,
    'Min MW': 0,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 18,
    color: '#80c0a0',
  },
};

let categories = { // Default category data
  'Raw': {pos: 0, color: '#e6b8af'},
  'Mineral / Ingot': {pos: 1, color: '#ead1dc'},
  'Standard Part': {pos: 2, color: '#b7b7b7'},
  'Industrial': {pos: 3, color: '#f6b26b'},
  'Electronic': {pos: 4, color: '#93c47d'},
  'Oil': {pos: 5, color: '#666666'},
  'Fluid': {pos: 6, color: '#ffe599'},
  'Nuclear': {pos: 7, color: '#a2c4c9'},
  'Quantum': {pos: 8, color: '#d5a6bd'},
  'Space Elevator': {pos: 9, color: '#b4a7d6'},
  'Weapons': {pos: 10, color: '#ea9999'},
  'Ficsmas': {pos: 11, color: '#e06666'},
}

let calcTable = {}; // Holds more data for each item

let settings = { // Default settings
  'maxCalcIter': 100, // Number of calculations before throwing error
  'NumInpDgts': 3, // Number of digits allowed for number inputs
};

let unresolved = new Set; // Set of the names of all unresolved items
let solving = new Set; // Set of the names of all the items being resolved

// Elements

let toolbar; // Toolbar
let greyout; // Menu Grey-Out
let Xs; // Menu Xs
let menuBttns; // Toolbar Buttons
let toolSubmit; // Toolbar Submit

let settingsForm; // Settings Form
let uploadForm; // Upload Form
let downloadLink; // Upload Link

let MITbl; // Main Interface Table
let MIEditItemForm; // Main Interface Edit Item Form
let MIEditCatForm; // Main Interface Edit Category Form

let RecTbl; // Recipe Table
let RecEditForm; // Recipe Edit Form

let BPAPTbl; // Buildings, Power, & Awesome Poimts Table
let BPAPEditForm; // Buildings, Power, & Awesome Points Edit Building Form
let awesomeTbl; // Awesome Points Tbl

// Math/Calc Functions

function calculate() { // Calculate items
  
  // Add to unresolved
  
  for(let item in items) {
    unresolved.add(item);
  }
  
  // While unresolved
  
  while(unresolved.length > 0) {
    
    // WIP
    
  }
  
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
  
  for(key in obj) { // Add [key, pos] pair to array
    array.push([key, obj[key]['pos']]);
  }
  
  array.sort(function(a, b){return a[1] - b[1]}); // Sort array
  
  return array // Return
  
}

function filtCategory(obj, category) { // Filt items based on category (for sorting)
  
  let out = {}; // Object to be returned
  
  for(key in obj) { // Add 'key': {'pos': pos} object to out
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
  
  for(key in items) {
    
    let item = items[key];
    length ++;
    
    if(item['complete']) complete++;
    power += item['power'];
    awesomePts += item['awesomePtsInp'] + item['awesomePtsBypro'];
    
  }
  
  // Set
  
  toolbar.getElementById('percentComplete').innerText = '' + (complete / length).toPrecision(4) + '%';
  toolbar.getElementById('power').innerText = '' + (power).toPrecision(4) + ' MW';
  toolbar.getElementById('awesomePts').innerText = '' + (awesomePts).toPrecision(4) + ' Pts.';
  
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
    <th style="background-color: rgb(128, 225, 128);" title="Calculated Demand" class="wideTH">Calc. Demand</th>
    <th style="background-color: rgb(255, 192, 128);" title="Total Demand" class="wideTH">Demand</th>
    <th style="background-color: rgb(255, 255, 128);" title="Byproduct" class="wideTH">Bypro.</th>
    <th style="background-color: rgb(128, 192, 255);" title="Max Overclocking for Buildings" class="wideTH">Max Clocking (%)</th>
    <th style="background-color: rgb(255, 128, 128);" title="Somersloop Multiplication" class="wideTH">Sloop Mult.</th>
    <th style="background-color: rgb(192, 128, 192);" title="Number of Buildings (Decimal)" class="wideTH">Buildings</th>
    <th style="background-color: rgb(255, 128, 192);" title="Selected Recipe" class="wideTH">Recipe</th>
    <th style="background-color: rgb(255, 255, 192);" title="Power" class="wideTH">Power</th>
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
      itemRow.id = catItem[0]; // Set Row ID to item name
      
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
      statusTD.innerText = '🔄' // Initial Status (Loading)
      statusTD.title = 'Awaiting Input...' // Title
      
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
      buildingsTD.id = 'bypro'; // Set ID
      buildingsTD.style.backgroundColor = 'rgb(224, 192, 224)'; // Color
      buildingsTD.innerText = item['buildings'].toPrecision(10); // Item buildings
      if(item['buildings'] > 0) buildingsTD.className = 'greater'; // If greater than 0, class
      if(item['buildings'] < 0) buildingsTD.className = 'less'; // If less than 0, class
      
      let recipeTD = document.createElement('td'); // Declare
      itemRow.appendChild(recipeTD); // Append
      recipeTD.id = 'bypro'; // Set ID
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
      powerTD.id = 'bypro'; // Set ID
      powerTD.style.backgroundColor = 'rgb(255, 255, 224)'; // Color
      powerTD.innerText = item['power'].toPrecision(10); // Item power
      if(item['power'] > 0) powerTD.className = 'greater'; // If greater than 0, class
      if(item['power'] < 0) powerTD.className = 'less'; // If less than 0, class
      
      let awesomePtsTD = document.createElement('td'); // Declare
      itemRow.appendChild(awesomePtsTD); // Append
      awesomePtsTD.id = 'awesomePts'; // Set ID
      awesomePtsTD.style.backgroundColor = 'rgb(255, 224, 224)'; // Color
      awesomePtsTD.innerText = item['awesomePts']; // Item awesome points
      
      let awesomePtsInpTD = document.createElement('td'); // Declare
      itemRow.appendChild(awesomePtsInpTD); // Append
      awesomePtsInpTD.id = 'bypro'; // Set ID
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
    row.id = sortedBuilding[0]; // Set Row ID to building name
    
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
  
  for(key in items) {
    
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
  awesomeInpDemandTD.innerText = awesomeInpDemand; // Demand
  
  let awesomeByproductTD = document.createElement('td'); // Declare
  awesomeDataRow.appendChild(awesomeByproductTD); // Append
  awesomeByproductTD.id = 'byproduct'; // Set ID
  awesomeByproductTD.style.backgroundColor = 'rgb(255, 255, 192)'; // BG Color
  awesomeByproductTD.innerText = awesomeByproduct; // Demand
  
  let awesomeTotalTD = document.createElement('td'); // Declare
  awesomeDataRow.appendChild(awesomeTotalTD); // Append
  awesomeTotalTD.id = 'total'; // Set ID
  awesomeTotalTD.style.backgroundColor = 'rgb(255, 192, 192)'; // BG Color
  awesomeTotalTD.innerText = awesomeTotal; // Demand
  
}

function render() { // Render Everything
  
  // Individual Render Functions
  
  renderMI();
  renderRec();
  renderBPAP();
  
  // Other
  
  expandAll(); // Expand Sections (After Render)
  applySettings(); // Apply settings to rendered stuff
  
}

// Button Functions

function closeAllMenus() { // Close the menu
  
  greyout.style.display = 'none';
  
  for(let child of greyout.children) {
    child.style.display = 'none';
  }
  
}

function applySettings() {
  
  let numInps = document.querySelectorAll('.numInp');
  
  for(let inp of numInps) {
    inp.step = '' + (10 ** (-1 * settings['NumInpDgts']));
  }
  
}

// Event Listner

document.addEventListener('DOMContentLoaded', function() { // DOM Loaded
  
  // Rendering
  
  render();
  
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
  
  toolSubmit.addEventListener('click', calculate);
  
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
            buildings = index['buildings'];
            
            //console.log(items);
            //console.log(buildings);
            
            fileOut.innerHTML = '✅ Loaded';
            
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
    
    let json = { // Creat object
      'items': items,
      'buildings': buildings,
    };
    
    let jsonStr = JSON.stringify(json); // Stringy 😋
    
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
  }
  catch(err) {
    console.log('localStorage Loading Error (Settings):\n' + err);
  }
  
  // Settings
  
  settingsForm = document.getElementById('settingsForm');
  
  for(let key in settings) { // Load current
    document.getElementById(key).value = settings[key];
  }
  
  settingsForm.addEventListener('submit', function() {
    
    event.preventDefault();
    
    for(let key in settings) { // Set
      settings[key] = document.getElementById(key).value;
    }
    
    // Apply, Save, Close
    
    applySettings();
    
    try {
      localStorage.setItem('SatisfactoryCalc - Settings', JSON.stringify(settings));
    }
    catch(err) {
      console.log('localStorage Saving Error (Settings):\n' + err);
    }
    
    closeAllMenus();
    
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
        'calcDemand': 0, 'byproduct': 0, 'maxClock': 1, 'sloopMult': 1, 'buildings': 0, 'awesomePts': awesomePts, 'awesomePtsInp': 0, 'awesomePtsBypro': 0, power: 0, 
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
  
});

document.addEventListener('keydown', function() { // Keydown
  
  if(event.key === 'Escape' || event.key === 'Esc') closeAllMenus(); // Escape menus
  
});
