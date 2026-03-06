# `NuDat.json`

All the raw extracted data from https://www.nndc.bnl.gov/nudat/.  

# `decayModeStructure.json`

## "modes"

NuDat.json sometimes defines the same decay mode with a different name.  
This object points all names to one decay mode name.  

## "children"

A decay mode's "children" decay modes (direct children/not grand children).  
Is used to calculate the actual, normalized branch probabilities.  
For example, B- probability would be the probability of B-, minus (2B- + B-A + B-N) probabilities (not including the children of those: B-2N, B-3N, B-4N).  

Note, this is checked by ensuring that the sum of the children are not greater than its own value. A value is flagged if it would be negative.