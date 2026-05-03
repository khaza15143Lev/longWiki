---
title: "ILLI-SLAB"
category: concept
tags: [FEA, software, pavement-analysis]
sources: [heath-roesler-2000-top-down-cracking-FSHCC]
created: 2026-05-03
updated: 2026-05-03
---

# ILLI-SLAB

Finite element analysis program developed at the University of Illinois for modeling jointed concrete pavements under traffic and environmental loading.

## Capabilities

ILLI-SLAB models concrete slabs on Winkler or elastic foundation, incorporating joint load transfer, curling and warping stresses, and traffic loading. It was used in the Palmdale FSHCC test sections to analyze top-down cracking mechanisms under combined environmental and traffic loads.

## Key Applications

- [[heath-roesler-2000-top-down-cracking-FSHCC]] used ILLI-SLAB to analyze corner loading vs. midslab edge loading, finding corner loading creates stresses 40% higher than midslab edge cases
- [[ozbeki-et-al-trr-1043]] developed earlier joint evaluation methodology that informed ILLI-SLAB's load transfer modeling

## Design Implications

ILLI-SLAB provides more accurate stress prediction than closed-form solutions by incorporating nonlinear temperature gradients, joint geometry, and foundation support conditions. It has been superseded by more advanced 3D FEA tools (ABAQUS, EverFE) but remains validated for specific use cases.

## Related

[[jslab]]
[[corner-loading]]
