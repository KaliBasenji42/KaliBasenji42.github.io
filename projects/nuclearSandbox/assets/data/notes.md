# General

All raw data extracted from https://www.nndc.bnl.gov/endf-releases/  
on March 6th 2026 (06-03-2026).  

# `decay.json`

Contains basic chemical and decay data for each isotope.  

```JSON
{
  "42E": {
    "z": 20, // Protons
    "n": 22, // Neutrons
    "mass": 41.9999, // Mass in AMU
    "halflife": 4.2e-10, // Halflife in seconds
    "decayModes": [
      {"Mode": "A", "value": 0.8}, // Decay mode, chance
      {"Mode": "B-", "value": 0.1}, // Each mode declared explicitly
      {"Mode": "B-A", "value": 0.1} // Probabilities should add to 1
    ]
  },
  "64A": {
    "z": 32, // Protons
    "n": 32, // Neutrons
    "mass": 64.0001, // Mass in AMU
    "halflife": "STABLE", // Halflife in seconds
    "decayModes": [
    ]
  }
}
```