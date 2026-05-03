---
title: "Failure Prediction of Skewed Jointed Plain Concrete Pavements Using 3D FE Analysis"
category: source
tags: [skewed-joints, 3d-fea, nonlinear-temperature-gradient, fatigue-analysis, subgrade-stiffness, ansys]
sources: [dere-asgari-sotelino-archer-2006-skewed-jpcp]
created: 2026-05-03
updated: 2026-05-03
author: "Dere, Yunus; Asgari, Alireza; Sotelino, Elisa D.; Archer, Graham C."
published: 2006-09-06
doi: "10.1016/j.engfailanal.2005.07.001"
scanned: false
---

# Failure Prediction of Skewed Jointed Plain Concrete Pavements Using 3D FE Analysis

**Journal** Engineering Failure Analysis 13, pp. 898–913  
**Sponsor** Joint Transportation Research Program, Indiana Department of Transportation (SPR-2643)

## Overview

Investigates premature transverse cracking in skewed JPCP sections on State Route 49 in Valparaiso, Indiana, using 3D finite element analysis (ANSYS). Demonstrates that combined thermal and wheel loading with nonlinear temperature gradients predicts both crack location and ~4-year design life matching observed field performance.

## Key Claims

1. **Nonlinear gradients critical** — Nonlinear temperature distribution increases tensile stresses by 80% at slab top and decreases compressive stresses by 53% at bottom compared to linear gradient assumption ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], pp. 906).

2. **Cracks perpendicular to traffic, not joints** — Despite 15° skewed joints, ~70% of observed cracks oriented perpendicular to lane direction. Principal stress directions under combined loading coincide with longitudinal traffic direction ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], pp. 899, 912).

3. **Subgrade stiffness effect reverses under combined loading** — Thermal loading alone: stiffer subgrade → higher tensile stresses. Combined thermal + wheel: softer subgrade → higher tensile stresses. Increase from thermal to combined loading was 34% for soft clay vs. 21% for stiff clay ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], pp. 907-908).

4. **Shrinkage strains amplify stresses** — Initial shrinkage simulated as equivalent -5°C top surface temperature change increased maximum tensile stress by 20% (thermal only) and 23% (combined loading) ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], pp. 910-911).

5. **Fatigue prediction matches field performance** — PCA fatigue equation: SR = 3400/4482 = 0.76 → N = 376 cycles. Assuming severe conditions occur once per season, design life ≈ 4 years, matching observed 3-4 year premature failure ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], pp. 911-912).

6. **Longer slabs more susceptible** — 5.49m (18ft) and 5.79m (19ft) slabs more likely to crack than 3.66m (12ft) and 3.96m (13ft) slabs ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], p. 900).

7. **Joint opening and rotation** — Negative temperature gradients cause upward curling and joint opening. Maximum differential rotation at skewed joint: 0.048° without traffic, 0.014° with traffic loads ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], pp. 909-910).

## Notable Quotes

- "Interestingly, the pavements generally cracked perpendicularly to the direction of traffic, not parallel to the joints." (p. 899)

- "The FE analysis indicates that under thermal and wheel loading, the principal stresses are oriented in the direction of traffic. This would indicate a transverse orientation of cracking." (p. 912)

## Connections to Existing Wiki

- Uses 3D FEA approach similar to [[uddin-et-al-trr-1482]] (ABAQUS) but with ANSYS and skewed joint geometry
- Nonlinear temperature gradient findings extend [[lim-tayabji-2005-early-age-longitudinal-cracking]] linear gradient analysis
- Shrinkage strain modeling relates to [[tayabji-trr-1062]] construction-related cracking mechanisms
- Subgrade stiffness effects connect to [[janda-1935-wisconsin-highway-13]] (frost heave in clay soils) and [[probabilistic-crack-model]] (support variability)
- PCA fatigue equation relates to [[probabilistic-crack-model]] (both predict cracking likelihood from stress ratios)
- Skewed joints contrast with standard perpendicular joints in [[ardani-et-al-2003-colorado]]

## Related

[[uddin-et-al-trr-1482]]
[[lim-tayabji-2005-early-age-longitudinal-cracking]]
[[nonlinear-temperature-gradient]]
[[pca-fatigue-equation]]
[[skewed-joints]]
