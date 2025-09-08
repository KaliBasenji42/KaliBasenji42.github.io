// Large Default Variables

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
  'The Void': {
    'Average MW': 0,
    'Max MW': 0,
    'Min MW': 0,
    'Total': 0,
    'Total MW': 0,
    'Max Total MW': 0,
    'Min Total MW': 0,
    pos: 19,
    color: '#404040',
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
