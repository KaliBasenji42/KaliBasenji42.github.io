// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

let currentMenu = 'none';

let settings = {
  'Max Calculation Iterations': 100,
  'Number Input Digits': 3,
};

let items = { // Default item data
  'Iron Ore': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1, 
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
  'Copper Ore': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 3, 
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
  'Caterium Ore': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 7, 
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
  'Limestone': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2, 
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
  'Coal': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 3, 
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
      'Biocoal': {out: 45, in: [{item: 'Biomass', amount: 37.5}], building: 'Constructor'},
      'Charcoal': {out: 150, in: [{item: 'Wood', amount: 15}], building: 'Constructor'},
    }
  },
  'Raw Quartz': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 15, 
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
  'Sulfur': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 11, 
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
  'Bauxite': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 8, 
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
  'Uranium': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 35, 
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
  'Water': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Water Extractor': {out: 120, in: [], bypro: [], building: 'Water Extractor'},
      'Resource Well': {out: 650, in: [], bypro: [], building: 'Resource Well'},
      'Unpackage Water': {out: 120, in: [{item: 'Packaged Water', amount: 120}], bypro: [{item: 'Empty Canister', amount: 120}], building: 'Packager'},
    }
  },
  'Crude Oil': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Oil Extractor - Impure': {out: 60, in: [], bypro: [], building: 'Oil Extractor'},
      'Oil Extractor - Normal': {out: 120, in: [], bypro: [], building: 'Oil Extractor'},
      'Oil Extractor - Pure': {out: 240, in: [], bypro: [], building: 'Oil Extractor'},
      'Resource Well': {out: 360, in: [], bypro: [], building: 'Resource Well'},
      'Unpackage Oil': {out: 60, in: [{item: 'Packaged Oil', amount: 60}], bypro: [{item: 'Empty Canister', amount: 60}], building: 'Packager'},
    }
  },
  'Nitrogen Gas': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
      'Resource Well': {out: 800, in: [], bypro: [], building: 'Resource Well'},
      'Unpackage Nitrogen Gas': {out: 240, in: [{item: 'Packaged Nitrogen Gas', amount: 60}], bypro: [{item: 'Empty Fluid Tank', amount: 60}], building: 'Packager'},
      'Nitrogen Gas (Bauxite)': {out: 120, in: [{item: 'Bauxite', amount: 100}, {item: 'SAM', amount: 10}], building: 'Converter'},
      'Nitrogen Gas (Caterium)': {out: 120, in: [{item: 'Caterium Ore', amount: 120}, {item: 'SAM', amount: 10}], building: 'Converter'},
    }
  },
  'SAM': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 20, 
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
  'Excited Photonic Matter': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Excited Photonic Matter', recipes: {
      'Excited Photonic Matter': {out: 200, in: [], bypro: [], building: 'Converter'}
    }
  },
  'Biomass': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 12, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
    }
  },
  'Iron Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2, 
    recipe: 'Iron Ingot', recipes: {
      'Iron Ingot': {out: 30, in: [{item: 'Iron Ore', amount: 30}], bypro: [], building: 'Smelter'},
      'Basic Iron Ingot': {out: 50, in: [{item: 'Iron Ore', amount: 25}, {item: 'Limestone', amount: 40}], bypro: [], building: 'Foundry'},
      'Iron Alloy Ingot': {out: 75, in: [{item: 'Iron Ore', amount: 40}, {item: 'Copper Ore', amount: 10}], bypro: [], building: 'Foundry'},
      'Leached Iron Ingot': {out: 100, in: [{item: 'Iron Ore', amount: 50}, {item: 'Sulfuric Acid', amount: 10}], bypro: [], building: 'Refinery'},
      'Pure Iron Ingot': {out: 65, in: [{item: 'Iron Ore', amount: 35}, {item: 'Water', amount: 20}], bypro: [], building: 'Refinery'},
    }
  },
  'Copper Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 6, 
    recipe: 'Copper Ingot', recipes: {
      'Copper Ingot': {out: 30, in: [{item: 'Iron Ore', amount: 30}], bypro: [], building: 'Smelter'},
      'Copper Alloy Ingot': {out: 100, in: [{item: 'Copper Ore', amount: 50}, {item: 'Iron Ore', amount: 50}], bypro: [], building: 'Foundry'},
      'Leached Copper Ingot': {out: 110, in: [{item: 'Copper Ore', amount: 45}, {item: 'Sulfuric Acid', amount: 25}], bypro: [], building: 'Refinery'},
      'Pure Copper Ingot': {out: 37.5, in: [{item: 'Copper Ore', amount: 15}, {item: 'Water', amount: 20}], bypro: [], building: 'Refinery'},
      'Tempered Copper Ingot': {out: 60, in: [{item: 'Copper Ore', amount: 25}, {item: 'Petroleum Coke', amount: 40}], bypro: [], building: 'Foundry'},
    }
  },
  'Caterium Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 42, 
    recipe: 'Caterium Ingot', recipes: {
      'Caterium Ingot': {out: 15, in: [{item: 'Caterium Ore', amount: 45}], bypro: [], building: 'Smelter'},
      'Leached Caterium Ingot': {out: 36, in: [{item: 'Caterium Ore', amount: 54}, {item: 'Sulfuric Acid', amount: 30}], bypro: [], building: 'Refinery'},
      'Pure Caterium Ingot': {out: 12, in: [{item: 'Caterium Ore', amount: 24}, {item: 'Water', amount: 24}], bypro: [], building: 'Refinery'},
      'Tempered Caterium Ingot': {out: 22.5, in: [{item: 'Caterium Ore', amount: 45}, {item: 'Petroleum Coke', amount: 15}], bypro: [], building: 'Foundry'},
    }
  },
  'Steel Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 8, 
    recipe: 'Steel Ingot', recipes: {
      'Steel Ingot': {out: 45, in: [{item: 'Iron Ore', amount: 45}, {item: 'Coal', amount: 45}], bypro: [], building: 'Foundry'},
      'Coke Steel Ingot': {out: 100, in: [{item: 'Iron Ore', amount: 75}, {item: 'Petroleum Coke', amount: 75}], bypro: [], building: 'Foundry'},
      'Compacted Steel Ingot': {out: 10, in: [{item: 'Iron Ore', amount: 5}, {item: 'Compacted Coal', amount: 2.5}], bypro: [], building: 'Foundry'},
      'Solid Steel Ingot': {out: 60, in: [{item: 'Iron Ingot', amount: 40}, {item: 'Coal', amount: 40}], bypro: [], building: 'Foundry'},
    }
  },
  'Concrete': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 12, 
    recipe: 'Concrete', recipes: {
      'Concrete': {out: 15, in: [{item: 'Limestone', amount: 45}], bypro: [], building: 'Constructor'},
      'Fine Concrete': {out: 50, in: [{item: 'Limestone', amount: 60}, {item: 'Silica', amount: 15}], bypro: [], building: 'Assembler'},
      'Rubber Concrete': {out: 90, in: [{item: 'Limestone', amount: 100}, {item: 'Rubber', amount: 20}], bypro: [], building: 'Assembler'},
      'Wet Concrete': {out: 80, in: [{item: 'Limestone', amount: 120}, {item: 'Water', amount: 100}], bypro: [], building: 'Refinery'},
    }
  },
  'Silica': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 20, 
    recipe: 'Silica', recipes: {
      'Silica': {out: 37.5, in: [{item: 'Raw Quartz', amount: 22.5}], bypro: [], building: 'Constructor'},
      'Cheap Silica': {out: 52.5, in: [{item: 'Raw Quartz', amount: 22.5}, {item: 'Limestone', amount: 37.5}], bypro: [], building: 'Assembler'},
      'Distilled Silica': {out: 270, in: [{item: 'Dissolved Silica', amount: 120}, {item: 'Limestone', amount: 50}, {item: 'Water', amount: 100}], bypro: [{item: 'Water', amount: 80}], building: 'Blender'},
    }
  },
  'Quartz Crystal': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 50, 
    recipe: 'Quartz Crystal', recipes: {
      'Quartz Crystal': {out: 22.5, in: [{item: 'Raw Quartz', amount: 37.5}], bypro: [], building: 'Constructor'},
      'Fused Quartz Crystal': {out: 54, in: [{item: 'Raw Quartz', amount: 75}, {item: 'Coal', amount: 36}], bypro: [], building: 'Foundry'},
      'Pure Quartz Crystal': {out: 52.5, in: [{item: 'Raw Quartz', amount: 67.5}, {item: 'Water', amount: 37.5}], bypro: [], building: 'Refinery'},
      'Quartz Purification': {out: 75, in: [{item: 'Raw Quartz', amount: 120}, {item: 'Nitric Acid', amount: 10}], bypro: [{item: 'Dissolved Silica', amount: 60}], building: 'Refinery'},
    }
  },
  'Copper Powder': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 72, 
    recipe: 'Copper Powder', recipes: {
      'Copper Powder': {out: 50, in: [{item: 'Copper Ingot', amount: 300}], bypro: [], building: 'Constructor'},
    }
  },
  'Compacted Coal': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 28, 
    recipe: 'Compacted Coal', recipes: {
      'Compacted Coal': {out: 25, in: [{item: 'Coal', amount: 25}, {item: 'Sulfur', amount: 25}], bypro: [], building: 'Assembler'},
    }
  },
  'Aluminum Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 131, 
    recipe: 'Aluminum Ingot', recipes: {
      'Aluminum Ingot': {out: 60, in: [{item: 'Aluminum Scrap', amount: 90}, {item: 'Silica', amount: 75}], bypro: [], building: 'Foundry'},
      'Pure Aluminum Ingot': {out: 30, in: [{item: 'Aluminum Scrap', amount: 60}], bypro: [], building: 'Smelter'},
    }
  },
  'Aluminum Scrap': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 27, 
    recipe: 'Aluminum Scrap', recipes: {
      'Aluminum Scrap': {out: 360, in: [{item: 'Alumina Solution', amount: 240}, {item: 'Coal', amount: 120}], bypro: [{item: 'Water', amount: 120}], building: 'Refinery'},
      'Electrode Aluminum Scrap': {out: 300, in: [{item: 'Alumina Solution', amount: 180}, {item: 'Petroleum Coke', amount: 60}], bypro: [{item: 'Water', amount: 105}], building: 'Refinery'},
      'Instant Scrap': {out: 300, in: [{item: 'Bauxite', amount: 150}, {item: 'Coal', amount: 100}, {item: 'Sulfuric Acid', amount: 50}, {item: 'Water', amount: 60}], bypro: [{item: 'Water', amount: 50}], building: 'Blender'},
    }
  },
  'Diamonds': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 240, 
    recipe: 'Diamonds', recipes: {
      'Diamonds': {out: 30, in: [{item: 'Coal', amount: 600}], bypro: [], building: 'Particle Accelerator 1'},
      'Cloudy Diamonds': {out: 20, in: [{item: 'Coal', amount: 240}, {item: 'Limestone', amount: 480}], bypro: [], building: 'Particle Accelerator 1'},
      'Oil-Based Diamonds': {out: 40, in: [{item: 'Oil', amount: 200}], bypro: [], building: 'Particle Accelerator 1'},
      'Petroleum Diamonds': {out: 30, in: [{item: 'Petroleum Coke', amount: 720}], bypro: [], building: 'Particle Accelerator 1'},
      'Pink Diamonds': {out: 15, in: [{item: 'Coal', amount: 120}, {Item: 'Quartz Crystal', amount: 45}], bypro: [], building: 'Converter'},
      'Turbo Diamonds': {out: 60, in: [{item: 'Coal', amount: 600}, {item: 'Packaged Turbofuel'}], bypro: [], building: 'Particle Accelerator 1'},
    }
  },
  'Reanimated SAM': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 160, 
    recipe: 'Reanimated SAM', recipes: {
      'Reanimated SAM': {out: 30, in: [{item: 'SAM', amount: 120}], bypro: [], building: 'Constructor'},
    }
  },
  'Ficsite Ingot': {category: 'Mineral / Ingot', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1936, 
    recipe: 'Ficsite Ingot (Aluminum)', recipes: {
      'Ficsite Ingot (Aluminum)': {out: 30, in: [{item: 'Reanimated SAM', amount: 60}, {item: 'Aluminum Ingot', amount: 120}], bypro: [], building: 'Converter'},
      'Ficsite Ingot (Caterium)': {out: 15, in: [{item: 'Reanimated SAM', amount: 45}, {item: 'Caterium Ingot', amount: 60}], bypro: [], building: 'Converter'},
      'Ficsite Ingot (Iron)': {out: 10, in: [{item: 'Reanimated SAM', amount: 40}, {item: 'Iron Ingot', amount: 240}], bypro: [], building: 'Converter'},
    }
  },
  'Iron Plate': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 6, 
    recipe: 'Iron Plate', recipes: {
      'Iron Plate': {out: 20, in: [{item: 'Iron Ingot', amount: 30}], bypro: [], building: 'Constructor'},
      'Coated Iron Plate': {out: 75, in: [{item: 'Iron Ingot', amount: 37.5}, {item: 'Plastic', amount: 7.5}], bypro: [], building: 'Assembler'},
      'Steel Cast Plate': {out: 45, in: [{item: 'Iron Ingot', amount: 15}, {item: 'Steel Ingot', amount: 15}], bypro: [], building: 'Foundry'},
    }
  },
  'Iron Rod': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 4, 
    recipe: 'Iron Rod', recipes: {
      'Iron Rod': {out: 15, in: [{item: 'Iron Ingot', amount: 15}], bypro: [], building: 'Constructor'},
      'Aluminum Rod': {out: 52.5, in: [{item: 'Aluminum Ingot', amount: 7.5}], bypro: [], building: 'Constructor'},
      'Steel Rod': {out: 48, in: [{item: 'Steel Ingot', amount: 12}], bypro: [], building: 'Constructor'},
    }
  },
  'Screws': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2, 
    recipe: 'Screws', recipes: {
      'Screws': {out: 40, in: [{item: 'Iron Rod', amount: 10}], bypro: [], building: 'Constructor'},
      'Cast Screws': {out: 50, in: [{item: 'Iron Ingot', amount: 12.5}], bypro: [], building: 'Constructor'},
      'Steel Screws': {out: 260, in: [{item: 'Steel Beam', amount: 5}], bypro: [], building: 'Constructor'},
    }
  },
  'Reinforced Iron Plate': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 120, 
    recipe: 'Reinforced Iron Plate', recipes: {
      'Reinforced Iron Plate': {out: 5, in: [{item: 'Iron Plate', amount: 30}, {item: 'Screws', amount: 60}], bypro: [], building: 'Assembler'},
      'Adhered Iron Plate': {out: 3.75, in: [{item: 'Iron Plate', amount: 11.25}, {item: 'Rubber', amount: 3.75}], bypro: [], building: 'Assembler'},
      'Bolted Iron Plate': {out: 15, in: [{item: 'Iron Plate', amount: 90}, {item: 'Screws', amount: 250}], bypro: [], building: 'Assembler'},
      'Stitched Iron Plate': {out: 5.625, in: [{item: 'Iron Plate', amount: 18.75}, {item: 'Wire', amount: 37.5}], bypro: [], building: 'Assembler'},
    }
  },
  'Modular Frame': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 408, 
    recipe: 'Modular Frame', recipes: {
      'Modular Frame': {out: 2, in: [{item: 'Reinforced Iron Plate', amount: 3}, {item: 'Iron Rod', amount: 12}], bypro: [], building: 'Assembler'},
      'Bolted Frame': {out: 5, in: [{item: 'Reinforced Iron Plate', amount: 7.5}, {item: 'Screws', amount: 140}], bypro: [], building: 'Assembler'},
      'Steeled Frame': {out: 3, in: [{item: 'Reinforced Iron Plate', amount: 2}, {item: 'Steel Pipe', amount: 10}], bypro: [], building: 'Assembler'},
    }
  },
  'Copper Sheet': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 24, 
    recipe: 'Copper Sheet', recipes: {
      'Copper Sheet': {out: 10, in: [{item: 'Copper Ingot', amount: 20}], bypro: [], building: 'Constructor'},
      'Steamed Copper Sheet': {out: 22.5, in: [{item: 'Copper Ingot', amount: 22.5}, {item: 'Water', amount: 22.5}], bypro: [], building: 'Refinery'},
    }
  },
  'Steel Pipe': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 24, 
    recipe: 'Steel Pipe', recipes: {
      'Steel Pipe': {out: 20, in: [{item: 'Steel Ingot', amount: 30}], bypro: [], building: 'Constructor'},
      'Iron Pipe': {out: 25, in: [{item: 'Iron Ingot', amount: 100}], bypro: [], building: 'Constructor'},
      'Molded Steel Pipe': {out: 50, in: [{item: 'Steel Ingot', amount: 50}, {item: 'Concrete', amount: 30}], bypro: [], building: 'Foundry'},
    }
  },
  'Steel Beam': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 64, 
    recipe: 'Steel Beam', recipes: {
      'Steel Beam': {out: 15, in: [{item: 'Steel Ingot', amount: 60}], bypro: [], building: 'Constructor'},
      'Aluminum Beam': {out: 22.5, in: [{item: 'Aluminum Ingot', amount: 22.5}], bypro: [], building: 'Constructor'},
      'Molded Beam': {out: 45, in: [{item: 'Steel Ingot', amount: 120}, {item: 'Concrete', amount: 80}], bypro: [], building: 'Foundry'},
    }
  },
  'Encased Industrial Beam': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 528, 
    recipe: 'Encased Industrial Beam', recipes: {
      'Encased Industrial Beam': {out: 6, in: [{item: 'Steel Beam', amount: 18}, {item: 'Concrete', amount: 36}], bypro: [], building: 'Assembler'},
      'Encased Industrial Pipe': {out: 4, in: [{item: 'Steel Pipe', amount: 24}, {item: 'Concrete', amount: 20}], bypro: [], building: 'Assembler'},
    }
  },
  'Heavy Modular Frame': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 10800, 
    recipe: 'Heavy Modular Frame', recipes: {
      'Heavy Modular Frame': {out: 2, in: [{item: 'Modular Frame', amount: 10}, {item: 'Steel Pipe', amount: 40}, {item: 'Encased Industrial Beam', amount: 10}, {item: 'Screws', amount: 240}], bypro: [], building: 'Manufacturer'},
      'Heavy Encased Frame': {out: 2.8125, in: [{item: 'Modular Frame', amount: 7.5}, {item: 'Steel Pipe', amount: 33.75}, {item: 'Encased Industrial Beam', amount: 9.375}, {item: 'Concrete', amount: 20.625}], bypro: [], building: 'Manufacturer'},
      'Heavy Flexible Frame': {out: 3.75, in: [{item: 'Modular Frame', amount: 18.75}, {item: 'Encased Industrial Beam', amount: 11.25}, {item: 'Rubber', amount: 75}, {item: 'Screws', amount: 390}], bypro: [], building: 'Manufacturer'},
    }
  },
  'Fused Modular Frame': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 62840, 
    recipe: 'Fused Modular Frame', recipes: {
      'Fused Modular Frame': {out: 1.5, in: [{item: 'Heavy Modular Frame', amount: 1.5}, {item: 'Aluminum Casing', amount: 75}, {item: 'Nitrogen Gas', item: 37.5}], bypro: [], building: 'Blender'},
      'Heat-Fused Frame': {out: 3, in: [{item: 'Heavy Modular Frame', amount: 3}, {item: 'Aluminum Ingot', amount: 150}, {item: 'Nitric Acid', item: 24}, {item: 'Fuel', amount: 30}], bypro: [], building: 'Blender'},
    }
  },
  'Alclad Aluminum Sheet': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 266, 
    recipe: 'Alclad Aluminum Sheet', recipes: {
      'Alclad Aluminum Sheet': {out: 30, in: [{item: 'Aluminum', amount: 30}, {item: 'Copper Ingot', amount: 10}], bypro: [], building: 'Assembler'},
    }
  },
  'Aluminum Casing': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 393, 
    recipe: 'Aluminum Casing', recipes: {
      'Aluminum Casing': {out: 60, in: [{item: 'Aluminum Ingot', amount: 90}], bypro: [], building: 'Constructor'},
      'Alclad Casing': {out: 112.5, in: [{item: 'Aluminum Ingot', amount: 150}, {item: 'Copper Ingot', amount: 75}], bypro: [], building: 'Assembler'},
    }
  },
  'Fabric': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 140, 
    recipe: 'Polyester Fabric', recipes: {
      'Polyester Fabric': {out: 30, in: [{item: 'Polymer Resin', amount: 30}, {item: 'Water', amount: 30}], bypro: [], building: 'Refiner'},
    }
  },
  'Ficsite Trigon': {category: 'Standard Part', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1291, 
    recipe: 'Ficsite Trigon', recipes: {
      'Ficsite Trigon': {out: 30, in: [{item: 'Ficsite Ingot', amount: 10}], bypro: [], building: 'Constructor'},
    }
  },
  'Rotor': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 140, 
    recipe: 'Rotor', recipes: {
      'Rotor': {out: 4, in: [{item: 'Iron Rod', amount: 20}, {item: 'Screws', amount: 100}], bypro: [], building: 'Assembler'},
      'Copper Rotor': {out: 11.25, in: [{item: 'Copper Sheet', amount: 22.5}, {item: 'Screws', amount: 195}], bypro: [], building: 'Assembler'},
      'Steel Rotor': {out: 5, in: [{item: 'Steel Pipe', amount: 10}, {item: 'Wire', amount: 30}], bypro: [], building: 'Assembler'},
    }
  },
  'Stator': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 240, 
    recipe: 'Stator', recipes: {
      'Stator': {out: 5, in: [{item: 'Steel Pipe', amount: 15}, {item: 'Wire', amount: 40}], bypro: [], building: 'Assembler'},
      'Quickwire Stator': {out: 8, in: [{item: 'Steel Pipe', amount: 16}, {item: 'Quickwire', amount: 60}], bypro: [], building: 'Assembler'},
    }
  },
  'Battery': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 465, 
    recipe: 'Battery', recipes: {
      'Battery': {out: 20, in: [{item: 'Sulfuric Acid', amount: 50}, {item: 'Alumina Solution', amount: 40}, {item: 'Aluminum Casing', amount: 20}], bypro: [{item: 'Water', amount: 30}], building: 'Blender'},
      'Classic Battery': {out: 30, in: [{item: 'Sulfur', amount: 45}, {item: 'Alclad Aluminum Sheet', amount: 52.5}, {item: 'Plastic', amount: 60}, {item: 'Wire', amount: 90}], bypro: [], building: 'Manufacture'},
    }
  },
  'Motor': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 1520, 
    recipe: 'Motor', recipes: {
      'Motor': {out: 5, in: [{item: 'Rotor', amount: 10}, {item: 'Stator', amount: 10}], bypro: [], building: 'Assembler'},
      'Electric Motor': {out: 7.5, in: [{item: 'Rotor', amount: 7.5}, {item: 'Electromagnetic Control Rod', amount: 3.75}], bypro: [], building: 'Assembler'},
      'Rigor Motor': {out: 7.5, in: [{item: 'Rotor', amount: 3.75}, {item: 'Stator', amount: 3.75}, {item: 'Crystal Oscillator', item: 1.25}], bypro: [], building: 'Manufacture'},
    }
  },
  'Heat Sink': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 2804, 
    recipe: 'Heat Sink', recipes: {
      'Heat Sink': {out: 7.5, in: [{item: 'Alclad Aluminum Sheet', amount: 37.5}, {item: 'Copper Sheet', amount: 22.5}], bypro: [], building: 'Assembler'},
      'Heat Exchanger': {out: 10, in: [{item: 'Aluminum Casing', amount: 30}, {item: 'Rubber', amount: 30}], bypro: [], building: 'Assembler'},
    }
  },
  'Cooling System': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 12006, 
    recipe: 'Cooling System', recipes: {
      'Cooling System': {out: 6, in: [{item: 'Heat Sink', amount: 12}, {item: 'Rubber', amount: 12}, {item: 'Water', amount: 30}, {item: 'Nitrogen Gas', amount: 150}], bypro: [], building: 'Blender'},
      'Cooling Device': {out: 5, in: [{item: 'Heat Sink', amount: 10}, {item: 'Motor', amount: 2.5}, {item: 'Nitrogen Gas', amount: 60}], bypro: [], building: 'Blender'},
    }
  },
  'Turbo Motor': {category: 'Industrial', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 240496, 
    recipe: 'Turbo Motor', recipes: {
      'Turbo Motor': {out: 1.875, in: [{item: 'Cooling Device', amount: 7.5}, {item: 'Radio Control Unit', amount: 3.75}, {item: 'Motor', amount: 7.5}, {item: 'Rubber', amount: 45}], bypro: [], building: 'Manufacture'},
      'Turbo Electric Motor': {out: 2.8125, in: [{item: 'Radio Control Unit', amount: 8.4375}, {item: 'Motor', amount: 6.5625}, {item: 'Rubber', amount: 45}], bypro: [], building: 'Manufacture'},
      'Turbo Pressure Motor': {out: 3.75, in: [{item: 'Motor', amount: 7.5}, {item: 'Pressure Conversion Cube', amount: 1.875}, {item: 'Packaged Nitrogen Gas', amount: 45}, {item: 'Stator', amount: 15}], bypro: [], building: 'Manufacture'},
    }
  },
  'Wire': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 6, 
    recipe: 'Wire', recipes: {
      'Wire': {out: 30, in: [{item: 'Copper Ingot', amount: 15}], bypro: [], building: 'Constructor'},
      'Caterium Wire': {out: 120, in: [{item: 'Caterium Ingot', amount: 15}], bypro: [], building: 'Constructor'},
      'Fused Wire': {out: 90, in: [{item: 'Copper Ingot', amount: 12}, {item: 'Caterium Ingot', amount: 3}], bypro: [], building: 'Assembler'},
      'Iron Wire': {out: 22.5, in: [{item: 'Iron Ingot', amount: 12.5}], bypro: [], building: 'Constructor'},
    }
  },
  'Cable': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 24, 
    recipe: 'Cable', recipes: {
      'Cable': {out: 30, in: [{item: 'Wire', amount: 60}], bypro: [], building: 'Constructor'},
      'Coated Cable': {out: 67.5, in: [{item: 'Wire', amount: 37.5}, {item: 'Heavy Oil Residue', amount: 15}], bypro: [], building: 'Refiner'},
      'Insulated Cable': {out: 100, in: [{item: 'Wire', amount: 45}, {item: 'Rubber', amount: 30}], bypro: [], building: 'Assembler'},
      'Quickwire Cable': {out: 27.5, in: [{item: 'Quickwire', amount: 7.5}, {item: 'Rubber', amount: 5}], bypro: [], building: 'Assembler'},
    }
  },
  'Quickwire': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 17, 
    recipe: 'Quickwire', recipes: {
      'Quickwire': {out: 60, in: [{item: 'Caterium Ingot', amount: 12}], bypro: [], building: 'Constructor'},
      'Fused Quickwire': {out: 90, in: [{item: 'Caterium Ingot', amount: 7.5}, {item: 'Copper Ingot', amount: 37.5}], bypro: [], building: 'Assembler'},
    }
  },
  'Circuit Board': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 696, 
    recipe: 'Circuit Board', recipes: {
      'Circuit Board': {out: 7.5, in: [{item: 'Copper Sheet', amount: 15}, {item: 'Plastic', amount: 30}], bypro: [], building: 'Assembler'},
      'Caterium Circuit Board': {out: 8.75, in: [{item: 'Quickwire', amount: 37.5}, {item: 'Plastic', amount: 12.5}], bypro: [], building: 'Assembler'},
      'Electrode Circuit Board': {out: 5, in: [{item: 'Rubber', amount: 20}, {item: 'Petroleum Coke', amount: 40}], bypro: [], building: 'Assembler'},
      'Silicon Circuit Board': {out: 12.5, in: [{item: 'Copper Sheet', amount: 27.5}, {item: 'Silica', amount: 27.5}], bypro: [], building: 'Assembler'},
    }
  },
  'AI Limiter': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 920, 
    recipe: 'AI Limiter', recipes: {
      'AI Limiter': {out: 5, in: [{item: 'Copper Sheet', amount: 25}, {item: 'Quickwire', amount: 100}], bypro: [], building: 'Assembler'},
      'Plastic AI Limiter': {out: 8, in: [{item: 'Quickwire', amount: 120}, {item: 'Plastic', amount: 28}], bypro: [], building: 'Assembler'},
    }
  },
  'High-Speed Connector': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 3776, 
    recipe: 'High-Speed Connector', recipes: {
      'High-Speed Connector': {out: 3.75, in: [{item: 'Quickwire', amount: 210}, {item: 'Cable', amount: 37.5}, {item: 'Circuit Board', item: 3.75}], bypro: [], building: 'Manufacture'},
      'Silicon High-Speed Connector': {out: 3, in: [{item: 'Quickwire', amount: 90}, {item: 'Circuit Board', item: 3}, {item: 'Silica', amount: 37.5}], bypro: [], building: 'Manufacture'},
    }
  },
  'Crystal Oscillator': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 3072, 
    recipe: 'Crystal Oscillator', recipes: {
      'Crystal Oscillator': {out: 1, in: [{item: 'Quartz Crystal', amount: 18}, {item: 'Cable', amount: 14}, {item: 'Reinforced Iron Plate', amount: 2.5}], bypro: [], building: 'Manufacture'},
      'Insulated Crystal Oscillator': {out: 1.875, in: [{item: 'Quartz Crystal', amount: 18.75}, {item: 'Rubber', amount: 13.125}, {item: 'AI Control Unit', amount: 1.875}], bypro: [], building: 'Manufacture'},
    }
  },
  'Computer': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 8352, 
    recipe: 'Computer', recipes: {
      'Computer': {out: 2.5, in: [{item: 'Circuit Board', amount: 10}, {item: 'Cable', amount: 20}, {item: 'Plastic', amount: 40}], bypro: [], building: 'Manufacture'},
      'Caterium Computer': {out: 3.75, in: [{item: 'Circuit Board', amount: 15}, {item: 'Quickwire', amount: 52.5}, {item: 'Rubber', amount: 22.5}], bypro: [], building: 'Manufacture'},
      'Crystal Computer': {out: (10 / 3), in: [{item: 'Circuit Board', amount: 5}, {item: 'Crystal Oscillator', amount: (5 / 2)}], bypro: [], building: 'Assembler'},
    }
  },
  'Supercomputer': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 97352, 
    recipe: 'Supercomputer', recipes: {
      'Supercomputer': {out: 1.875, in: [{item: 'Computer', amount: 7.5}, {item: 'AI Limiter', amount: 3.75}, {item: 'High-Speed Connector', amount: 5.625}, {item: 'Plastic', amount: 52.5}], bypro: [], building: 'Manufacture'},
      'OC Supercomputer': {out: 3, in: [{item: 'Radio Control Unit', amount: 6}, {item: 'Cooling System', amount: 6}], bypro: [], building: 'Assembler'},
      'Super-State Computer': {out: 2.4, in: [{item: 'Computer', amount: 7.2}, {item: 'Electromagnetic Control Rod', amount: 2.4}, {item: 'Battery', amount: 24}, {item: 'Wire', amount: 60}], bypro: [], building: 'Manufacture'},
    }
  },
  'Radio Control Unit': {category: 'Electric', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 32352, 
    recipe: 'Radio Control Unit', recipes: {
      'Radio Control Unit': {out: 2.5, in: [{item: 'Aluminum Casing', amount: 40}, {item: 'Crystal Oscillator', amount: 1.25}, {item: 'Computer', amount: 2.5}], bypro: [], building: 'Manufacture'},
      'Radio Connection Unit': {out: 3.75, in: [{item: 'Heat Sink', amount: 15}, {item: 'High-Speed Connector', amount: 7.5}, {item: 'Quartz Crystal', amount: 45}], bypro: [], building: 'Manufacture'},
      'Radio Control System': {out: 2.5, in: [{item: 'Aluminum Casing', amount: 90}, {item: 'Crystal Oscillator', amount: 1.5}, {item: 'Circuit Board', amount: 15}, {item: 'Rubber', amount: 45}], bypro: [], building: 'Manufacture'},
    }
  },
  'Plastic': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 75, 
    recipe: 'Plastic', recipes: {
      'Plastic': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Heavy Oil Residue', amount: 10}], building: 'Refinery'},
      'Residual Plastic': {out: 20, in: [{item: 'Polymer Resin', amount: 60}, {item: 'Water', amount: 20}], bypro: [], building: 'Refinery'},
      'Recycled Plastic': {out: 60, in: [{item: 'Rubber', amount: 30}, {item: 'Fuel', amount: 30}], bypro: [], building: 'Refinery'},
    }
  },
  'Rubber': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 60, 
    recipe: 'Rubber', recipes: {
      'Rubber': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Heavy Oil Residue', amount: 20}], building: 'Refinery'},
      'Residual Rubber': {out: 20, in: [{item: 'Polymer Resin', amount: 40}, {item: 'Water', amount: 40}], bypro: [], building: 'Refinery'},
      'Recycled Rubber': {out: 60, in: [{item: 'Plastic', amount: 30}, {item: 'Fuel', amount: 30}], bypro: [], building: 'Refinery'},
    }
  },
  'Polymer Resin': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 12, 
    recipe: 'Polymer Resin', recipes: {
      'Polymer Resin': {out: 130, in: [{item: 'Crude Oil', amount: 60}], bypro: [{item: 'Heavy Oil Residue', amount: 20}], building: 'Refinery'},
      'Fuel': {out: 30, in: [{item: 'Crude Oil', amount: 60}], bypro: [{item: 'Fuel', amount: 40}], building: 'Refinery'},
      'Heavy Oil Residue': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Heavy Oil Residue', amount: 40}], building: 'Refinery'},
    }
  },
  'Petroleum Coke': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 20, 
    recipe: 'Petroleum Coke', recipes: {
      'Petroleum Coke': {out: 120, in: [{item: 'Heavy Oil Residue', amount: 40}], bypro: [], building: 'Refinery'},
    }
  },
  'Heavy Oil Residue': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Heavy Oil Residue', recipes: {
      'Heavy Oil Residue': {out: 40, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Polymer Resin', amount: 20}], building: 'Refinery'},
      'Unpackaged Heavy Oil Residue': {out: 20, in: [{item: 'Packaged Heavy Oil Residue', amount: 20}], bypro: [{item: 'Empty Canister', amount: 20}], building: 'Packager'},
      'Plastic': {out: 10, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Plastic', amount: 20}], building: 'Refinery'},
      'Rubber': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Rubber', amount: 20}], building: 'Refinery'},
      'Polymer Resin': {out: 20, in: [{item: 'Crude Oil', amount: 60}], bypro: [{item: 'Polymer Resin', amount: 130}], building: 'Refinery'},
    }
  },
  'Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Fuel', recipes: {
      'Fuel': {out: 40, in: [{item: 'Crude Oil', amount: 60}], bypro: [{item: 'Polymer Resin', amount: 30}], building: 'Refinery'},
      'Unpackaged Fuel': {out: 60, in: [{item: 'Packaged Fuel', amount: 60}], bypro: [{item: 'Empty Canister', amount: 60}], building: 'Packager'},
      'Residual Fuel': {out: 40, in: [{item: 'Heavy Oil Residue', amount: 60}], bypro: [], building: 'Refinery'},
      'Diluted Fuel': {out: 100, in: [{item: 'Heavy Oil Residue', amount: 50}, {item: 'Water', amount: 100}], bypro: [], building: 'Blender'},
    }
  },
  'Turbofuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Turbofuel', recipes: {
      'Turbofuel': {out: 18.75, in: [{item: 'Fuel', amount: 22.5}, {item: 'Compacted Coal', amount: 15}], bypro: [], building: 'Refinery'},
      'Unpackaged Turbofuel': {out: 20, in: [{item: 'Packaged Turbofuel', amount: 20}], bypro: [{item: 'Empty Canister', amount: 20}], building: 'Packager'},
      'Turbo Heavy Fuel': {out: 30, in: [{item: 'Heavy Oil Residue', amount: 37.5}, {item: 'Compacted Coal', amount: 30}], bypro: [], building: 'Refinery'},
      'Turbo Blend Fuel': {out: 45, in: [{item: 'Fuel', amount: 15}, {item: 'Heavy Oil Residue', amount: 30}, {item: 'Sulfur', amount: 22.5}, {item: 'Petroleum Coke', amount: 22.5}], bypro: [], building: 'Blender'},
    }
  },
  'Rocket Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Rocket Fuel', recipes: {
      'Rocket Fuel': {out: 100, in: [{item: 'Turbofuel', amount: 60}, {item: 'Nitric Acid', amount: 10}], bypro: [{item: 'Compacted Coal', amount: 10}], building: 'Blender'},
      'Unpackaged Rocket Fuel': {out: 120, in: [{item: 'Packaged Rocket Fuel', amount: 60}], bypro: [{item: 'Empty Fluid Tank', amount: 60}], building: 'Packager'},
      'Nitro Rocket Fuel': {out: 150, in: [{item: 'Fuel', amount: 100}, {item: 'Nitrogen Gas', amount: 10}], bypro: [{item: 'Compacted Coal', amount: 10}], building: 'Blender'},
    }
  },
  'Ionized Fuel': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Ionized Fuel', recipes: {
      'Ionized Fuel': {out: 40, in: [{item: 'Rocket Fuel', amount: 40}, {item: 'Power Shard', amount: 2.5}], bypro: [{item: 'Compacted Coal', amount: 5}], building: 'Refinery'},
      'Unpackaged Ionized Fuel': {out: 80, in: [{item: 'Packaged Rocket Fuel', amount: 40}], bypro: [{item: 'Empty Fluid Tank', amount: 40}], building: 'Packager'},
      'Dark-Ion Fuel': {out: 10, in: [{item: 'Packaged Rocket Fuel', amount: 240}, {item: 'Dark Matter Crystal', amount: 80}], bypro: [{item: 'Compacted Coal', amount: 40}], building: 'Converter'},
    }
  },
  'Packaged Oil': {category: 'Oil', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, awesomePts: 0, 
    recipe: 'Plastic', recipes: {
      'Plastic': {out: 20, in: [{item: 'Crude Oil', amount: 30}], bypro: [{item: 'Heavy Oil Residue', amount: 10}], building: 'Refinery'},
    }
  },
  'Packaged Oil Residue'
  'Packaged Fuel'
  'Packaged Turbofuel'
  'Packaged Rocket Fuel'
  'Packaged Ionized Fuel'
  'Empty Canister'
  'Empty Fluid Tank'
  'Alumina Solution'
  'Sulfuric Acid'
  'Nitric Acid'
  'Dissolved Silica'
  'Packaged Water'
  'Packaged Alumina Solution'
  'Packaged Sulfuric Acid'
  'Packaged Nitric Acid'
  'Packaged Nitrogen Gas'
  'Pressure Conversion Cube'
  'Electromagnetic Control Rod'
  'Encased Uranium Cell'
  'Non-Fissle Uranium'
  'Plutonium Pellet'
  'Encased Plutonium Cell'
  'Ficsonium'
  'Uranium Fuel Rod'
  'Plutonium Fuel Rod'
  'Ficsonium Fuel Rod'
  'Uranium Waste'
  'Plutonium Waste'
  'Time Crystal'
  'SAM Fluctuator'
  'Dark Matter Residue'
  'Dark Matter Crystal'
  'Superposition Oscillator'
  'Power Shard'
  'Singularity Cell'
  'Neural-Quantum Processor'
  'Alien Power Matrix'
  'Smart Plating'
  'Versatile Framework'
  'Automated Wiring'
  'Modular Engine'
  'Adaptive Control Unit'
  'Assemble Director System'
  'Magnetic Field Generator'
  'Thermal Propulsion Rocket'
  'Nuclear Pasta'
  'Biochemical Sculptor'
  'AI Expansion Server'
  'Ballistic Warp Drive'
  'Black Powder'
  'Smokeless Powder'
  'Iron Rebar'
  'Stun Rebar'
  'Shatter Rebar'
  'Explosive Rebar'
  'Rifle Ammo'
  'Homing Rifle Ammo'
  'Turbo Rifle Ammo'
  'Nobelisk'
  'Gas Nobelisk'
  'Pulse Nobelisk'
  'Cluster Nobelisk'
  'Nuke Nobelisk'
  'Gas Filter'
  'Iodine Infused Filter'
  'Gift'
  'Candy Cane'
  'Actual Snow'
  'Bow'
  'Tree Branch'
  'Red Ornament'
  'Blue Ornament'
  'Copper Ornament'
  'Iron Ornament'
  'Ornament Bundle'
  'Decoration'
  'Wonder Star'
  'Snowball'
  'Fancy Firework'
  'Sparkly Firework'
  'Sweet Firework'
};

let calcTable = {};

let buildings = {
  
};

let unresolved = new Set;

let solving = new Set;

// Functions
