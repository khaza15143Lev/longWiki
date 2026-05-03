---
title: "Three-Dimensional Finite-Element Analysis of Jointed Concrete Pavement with Discontinuities"
category: source
tags: [finite-element, ABAQUS, FWD, cracking, backcalculation, dynamic-analysis]
sources: [uddin-et-al-trr-1482]
created: 2026-05-03
updated: 2026-05-03
author: "Uddin, Waheed; Hackett, Robert M.; Joseph, Ajith; Pan, Zhou; Crawley, Alfred B."
published: 1995-01-01
doi: ""
scanned: false
---

# Three-Dimensional Finite-Element Analysis of Jointed Concrete Pavement with Discontinuities

**Publication** Transportation Research Record 1482  
**Sponsor** Mississippi Department of Transportation, FHWA

## Overview

Demonstrates use of ABAQUS finite-element code for three-dimensional dynamic analysis of jointed plain concrete pavement (JPCP) with transverse joints, dowel bars, and cracks. Backcalculates layer moduli by matching simulated FWD deflections to field measurements on US Highway 78 in Mississippi. Shows significant improvement over traditional multilayered linear static analysis.

## Key Claims

1. **Dynamic FE analysis superior to static layered elastic** — Traditional backcalculation assumes linear elastic behavior and infinite dimensions, violating conditions in deteriorated pavements with cracks and nonlinear subgrade. ABAQUS dynamic analysis accounts for discontinuities, contact mechanics, and time-dependent loading ([[uddin-et-al-trr-1482]], pp. 26-27).

2. **Crack modeling with gap elements** — Cracks modeled as two independent surfaces linked by unidirectional gap elements with friction coefficient simulating aggregate interlock. Critical gap width: 0.25 mm (0.01 in.) where friction coefficient effect on surface deflection becomes significant; used friction coefficient of 0.5 ([[uddin-et-al-trr-1482]], pp. 30-31).

3. **Modulus reduction from cracking quantified** — Backcalculated moduli for US-78 Marshall County sections:
   - Uncracked: concrete = 3,494 ksi, CTB = 680 ksi, subgrade = 24.4 ksi
   - Cracked concrete only: concrete = 1,850 ksi (47% reduction)
   - Cracked concrete + CTB: concrete = 1,850 ksi, CTB = 300 ksi (56% reduction) ([[uddin-et-al-trr-1482]], Table 2)

4. **Dowel bars modeled with beam + gap elements** — One end fixed, other end free to slide for thermal movement; body-to-body contact interaction between dowel and concrete. 18-in. long, 1.25-in. diameter, 12-in. spacing, E = 30,000 ksi ([[uddin-et-al-trr-1482]], pp. 28-29).

5. **Field validation on US-78** — Nine test sections evaluated with GPR, thermographic survey, coring, FWD, and Dynaftect. ABAQUS dynamic deflections matched measured FWD deflections for uncracked (Fig. 4), cracked concrete (Fig. 5), and cracked concrete+base (Fig. 6) conditions ([[uddin-et-al-trr-1482]], pp. 27-31).

6. **7,546-element model on Cray Y-MP** — Quarter-symmetric model: 40-ft subgrade depth, 30-ft slab length, 10-ft outside shoulder. CPU time ~200 sec per run ([[uddin-et-al-trr-1482]], pp. 27-28).

## Notable Quotes

- "Advances in high-speed, high-capacity computational simulation have provided a capability of modeling with extreme accuracy the response of physical systems that are distinguished by discontinuities and highly nonlinear behavior. Jointed concrete pavements certainly fall within this category." (p. 32)
- "Lower backcalculated modulus values are to be expected for cracked pavements, compared with those backcalculated for uncracked pavements. In this study, procedures for quantifying this knowledge are demonstrated." (p. 32)

## Figures

- **Fig. 1, p. 27** — Typical concrete pavement discontinuities (longitudinal joints, transverse joints, joint deterioration)
- **Fig. 2, p. 28** — Three-dimensional view of finite-element mesh (7,546 elements)
- **Fig. 3, p. 29** — Plan view and cross section of transverse joint with dowel bars
- **Fig. 4, p. 30** — ABAQUS vs. FWD deflections for uncracked pavement (Slab E3)
- **Fig. 5, p. 31** — ABAQUS vs. FWD deflections for cracked concrete (Slab F3)
- **Fig. 6, p. 31** — ABAQUS vs. FWD deflections for cracked concrete + CTB (Slab G1)

## Connections to Existing Wiki

- Extends finite-element pavement analysis lineage from [[jslab]] (static, 2D slab model) to ABAQUS (dynamic, 3D, crack modeling)
- Backcalculated modulus reduction from cracking provides quantitative basis for understanding why [[longitudinal-cracking]] and other distress types accelerate pavement deterioration
- Gap element modeling of aggregate interlock connects to [[load-transfer]] mechanisms beyond dowels
- FWD-based evaluation methodology relates to NDT approaches discussed in [[ozbeki-et-al-trr-1043]]

## Related

[[jslab]]
[[load-transfer]]
[[longitudinal-cracking]]
[[ozbeki-et-al-trr-1043]]
