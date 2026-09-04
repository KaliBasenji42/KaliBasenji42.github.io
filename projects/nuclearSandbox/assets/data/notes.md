# Data

All raw data extracted from https://www.nndc.bnl.gov/endf-releases/  
on August 27th 2026.  

Citation: G.P.A. Nobre, R. Capote, M.T. Pigni, A. Trkov, C.M. Mattoon, D. Neudecker, D.A. Brown, M.B. Chadwick, A.C. Kahler, N.A. Kleedtke, M. Zerkle, A.I. Hawari, C.W. Chapman, N.C. Fleming, J.L. Wormald, K. Ramić, Y. Danon, N.A. Gibson, P. Brain, M.W. Paris, G.M. Hale, I.J. Thompson, D.P. Barry, I. Stetcu, W. Haeck, A.E. Lovell, M.R. Mumpower, G. Potel, K. Kravvaris, G. Noguere, J.D. McDonnell, A.D. Carlson, M. Dunn, T. Kawano, D. Wiarda, I. Al-Qasir, G. Arbanas, R. Arcilla, B. Beck, D. Bernard, R. Beyer, J.M. Brown, O. Cabellos, R.J. Casperson, Y. Cheng, E.V. Chimanski, R. Coles, M. Cornock, J. Cotchen, J.P.W. Crozier, D.E. Cullen, A. Daskalakis, M.-A. Descalle, D.D. DiJulio, P. Dimitriou, A.C. Dreyfuss, I. Durán, R. Ferrer, T. Gaines, V. Gillette, G. Gert, K.H. Guber, J.D. Haverkamp, M.W. Herman, J. Holmes, M. Hursin, N. Jisrawi, A.R. Junghans, K.J. Kelly, H.I. Kim, K.S. Kim, A.J. Koning, M. Koštál, B.K. Laramee, A. Lauer-Coles, L. Leal, H.Y. Lee, A.M. Lewis, J. Malec, J.I. Márquez Damián, W.J. Marshall, A. Mattera, G. Muhrer, A. Ney, W.E. Ormand, D.K. Parsons, C.M. Percher, V.G. Pronyaev, A. Qteish, S. Quaglioni, M. Rapp, J.J. Ressler, M. Rising, D. Rochman, P.K. Romano, D. Roubtsov, G. Schnabel, M. Schulc, G.J. Siemers, A.A. Sonzogni, P. Talou, J. Thompson, T.H. Trumbull, S.C. van der Marck, M. Vorabbi, C. Wemple, K.A. Wendt, M. White, R.Q. Wright, ENDF/B-VIII.1: Updated Nuclear Reaction Data Library for Science and Applications, Nuclear Data Sheets, Volume 210, 2026, Pages 1-224, ISSN 0090-3752, https://doi.org/10.1016/j.nds.2026.04.001. (https://www.sciencedirect.com/science/article/pii/S0090375226000268)  

# `modes.json`

Contains decay mode definitions/delta Z and N.  

```JSON
{
  "mode": [ΔZ, ΔN],
  "p": [-1, 0],
  "alpha": [-2, -2],
  ...
}
```

# `decay.json`

Contains basic chemical and decay data for each isotope.  

> Probabilities are not normalized, it should be normalized on calculation  

```JSON
{
  "42E": { // Isotope
    "name": "Eeee", // Element name
    "symbol": "E", // Element symbol
    "z": 20, // Protons
    "n": 22, // Neutrons
    "a": 42, // Mass (integer)
    "mass": 41.9999, // Mass in AMU
    "halflife": 4.2e-10, // Halflife in seconds
    "decay-constant": 1.6503504299e9, // Decay constant per seconds
    "decayModes": [
      {"mode": "alpha", "prob": 0.8}, // Decay mode, BR probability
      {"mode": "beta-", "prob": 0.1}, // Each mode declared explicitly
      {"mode": "beta-,alpha", "prob": 0.1} // Probabilities should add to 1
    ]
  },
  "64Ab": { // Isotope
    "name": "Abcd", // Element name
    "symbol": "Ab", // Element symbol
    "z": 32, // Protons
    "n": 32, // Neutrons
    "a": 64, // Mass (integer)
    "mass": 64.0001, // Mass in AMU
    "halflife": "stable", // Halflife in seconds
    "decay-constant": "stable", // Decay constant per seconds
    "decayModes": [
    ]
  },
  ...
}
```
