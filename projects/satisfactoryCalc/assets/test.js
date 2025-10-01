// File for Testing

// Check References

let buildingsRefs = new Set(); // Name of each building referenced
let itemsRefs = new Set(); // Name of each item referenced

for(let itemKey in items) {
  
  let item = items[itemKey];
  
  for(let recipeKey in item.recipes) {
    
    let recipe = item.recipes[recipeKey];
    
    // Building
    
    buildingsRefs.add(recipe.building);
    
    let buildingIsListed = false;
    
    for(let buildingKey in buildings) {
      if(recipe.building == buildingKey) buildingIsListed = true;
    }
    
    if(!buildingIsListed) {
      console.log('Building not listed: ' + itemKey + ': ' + recipeKey + ': ' + recipe.building);
    }
    
    // In
    
    for(let inItem of recipe.in) {
      
      itemsRefs.add(inItem.item);
      
      let itemIsListed = false;
      
      for(let itemKey in items) {
        if(inItem.item == itemKey) itemIsListed = true;
      }
      
      if(!itemIsListed) {
        console.log('Item not listed: ' + itemKey + ': ' + recipeKey + ': in: ' + inItem.item);
      }
      
    }
    
    // Bypro
    
    for(let byproItem of recipe.bypro) {
      
      itemsRefs.add(byproItem.item);
      
      let itemIsListed = false;
      
      for(let itemKey in items) {
        if(byproItem.item == itemKey) itemIsListed = true;
      }
      
      if(!itemIsListed) {
        console.log('Item not listed: ' + itemKey + ': ' + recipeKey + ': bypro: ' + byproItem.item);
      }
      
    }
    
  }
  
}