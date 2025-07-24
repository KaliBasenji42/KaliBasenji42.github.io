// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  `;

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
      'Converter - Limestone': {out: 120, in: [{item: 'Limestone', amount: 240}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Raw Quartz': {out: 120, in: [{item: 'Raw Quartz', amount: 100}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Converter - Sulfur': {out: 120, in: [{item: 'Sulfur', amount: 120}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Copper Ore': {out: 120, in: [{item: 'Copper Ore', amount: 150}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Converter - Raw Quartz': {out: 120, in: [{item: 'Raw Quartz', amount: 120}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Sulfur': {out: 120, in: [{item: 'Sulfur', amount: 20}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Iron Ore': {out: 120, in: [{item: 'Iron Ore', amount: 180}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Converter - Limestone': {out: 120, in: [{item: 'Limestone', amount: 360}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Bauxite': {out: 120, in: [{item: 'Bauxite', amount: 100}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Converter - Coal': {out: 120, in: [{item: 'Coal', amount: 240}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Coal': {out: 120, in: [{item: 'Coal', amount: 200}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Converter - Iron Ore': {out: 120, in: [{item: 'Iron Ore', amount: 300}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Caterium Ore': {out: 120, in: [{item: 'Caterium Ore', amount: 150}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
      'Converter - Copper Ore': {out: 120, in: [{item: 'Copper Ore', amount: 180}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Bauxite': {out: 120, in: [{item: 'Bauxite', amount: 480}, {item: 'SAM', amount: 10}], bypro: [], building: 'Converter'},
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
      'Converter - Bauxite': {out: 120, in: [{item: 'Bauxite', amount: 100}, {item: 'SAM', amount: 10}], building: 'Converter'},
      'Converter - Caterium Ore': {out: 120, in: [{item: 'Caterium Ore', amount: 120}, {item: 'SAM', amount: 10}], building: 'Converter'},
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
    recipe: 'Default', recipes: {
      'Default': {out: 200, in: [], bypro: [], building: 'Converter'}
    }
  },
  'Biomass': {category: 'Raw', complete: false, inpDemand: 0, status: 'resolved', 
    calcDemand: 0, byproduct: 0, maxClock: 1, sloopMult: 1, buildings: 0, 
    recipe: 'Future Problem :3', recipes: {
      'Future Problem :3': {out: 1, in: [], bypro: [], building: 'The Void'},
    }
  },
  'Iron Ingot'
  'Copper Ingot'
  'Caterium Ingot'
  'Steel Ingot'
  'Concrete'
  'Silica'
  'Quartz Crystal'
  'Copper Powder'
  'Compacted Coal'
  'Aluminum Ingot'
  'Aluminum Scrap'
  'Diamonds'
  'Reanimated SAM'
  'Ficsite Ingot'
  'Iron Plate'
  'Iron Rod'
  'Screw'
  'Reinforced Iron Plate'
  'Modular Frame'
  'Copper Sheet'
  'Steel Pipe'
  'Steel Beam'
  'Encased Industrial Beam'
  'Heavy Modular Frame'
  'Fused Modular Frame'
  'Alclad Aluminum Sheet'
  'Aluminum Casing'
  'Fabric'
  'Ficsite Trigon'
  'Rotor'
  'Stator'
  'Battery'
  'Motor'
  'Heat Sink'
  'Cooling System'
  'Turbo Motor'
  'Wire'
  'Cable'
  'Quickwire'
  'Circuit Board'
  'AI Limiter'
  'High-Speed Connector'
  'Computer'
  'Supercomputer'
  'Radio Control Unit'
  'Crystal Oscillator'
  'Plastic'
  'Rubber'
  'Polymer Resin'
  'Petroleum Coke'
  'Heavy Oil Residue'
  'Fuel'
  'Turbofuel'
  'Rocket Fuel'
  'Ionized Fuel'
  'Packaged Oil'
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
