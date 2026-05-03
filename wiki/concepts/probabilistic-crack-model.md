---
title: "Probabilistic Crack Model"
category: concept
tags: [statistical-model, saw-cut-depth, longitudinal-cracking, crack-confinement]
sources: [saraf-mccullough-1986-sawcut-depth-probabilistic, ozbeki-et-al-trr-1043]
created: 2026-05-03
updated: 2026-05-03
---

# Probabilistic Crack Model

A statistical model developed by [[saraf]] and [[mccullough]] to predict the probability that longitudinal cracking will be confined within a saw-cut groove rather than forming away from it.

## Model Formulation

Per [[saraf-mccullough-1986-sawcut-depth-probabilistic]]:
- Cracking occurs along saw-cut section (x-x) when tensile strength ratio R = T1/T2 ≤ 1.0
- T1, T2 = tensile strengths at saw-cut vs. adjacent section
- R modeled as ratio of lognormally distributed variables: concrete tensile strength (t1, t2) and pavement thickness (D1, D2)
- ln R is normally distributed with mean RL and standard deviation σRL derived from component variances ([[saraf-mccullough-1986-sawcut-depth-probabilistic]], pp. 9–10, Eqs. 8–12)

## Key Parameters

- **Depth ratio (D1/D2)** — Ratio of remaining thickness at saw-cut to full slab thickness; lower ratio = deeper cut = higher probability of crack confinement
- **Standard deviation of tensile strength** — Measures construction quality variability; lower SD = more uniform concrete = better crack control
- **Aggregate type** — Affects tensile strength variability; limestone produced lower SD than river gravel

## Field Verification

- Project 1 (river gravel, TX-288): predicted 67%, observed 69%
- Project 2 (limestone, TX-288): predicted 91%, observed 99%
- For 90% crack confinement: river gravel needs 0.44D cut depth; limestone needs 0.39D ([[saraf-mccullough-1986-sawcut-depth-probabilistic]], pp. 10–12, Fig. 3)

## Practical Implications

Reducing construction variability (quartering standard deviations) can achieve same crack confinement with shallower saw-cuts, saving construction costs ([[saraf-mccullough-1986-sawcut-depth-probabilistic]], pp. 12–13).

## Related

[[saw-cut-depth]]
[[longitudinal-cracking]]
[[saraf-mccullough-1986-sawcut-depth-probabilistic]]
[[weakened-plane]]
