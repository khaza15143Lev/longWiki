---
title: "Longitudinal Cracking of Jointed Plain Concrete Pavements in Louisiana: Field Investigation and Numerical Simulation"
category: source
tags: [longitudinal-cracking, widened-slab, tied-shoulder, slab-geometry, ABAQUS, MEPDG, empirical-model]
sources: [xiao-wu-2018-louisiana-longitudinal-cracking]
created: 2026-05-03
updated: 2026-05-03
author: "Xiao, Danny X.; Wu, Zhong"
published: 2018-07-24
doi: "10.1016/j.ijprt.2018.07.004"
scanned: false
---

# Longitudinal Cracking of Jointed Plain Concrete Pavements in Louisiana: Field Investigation and Numerical Simulation

**Journal** International Journal of Pavement Research and Technology, Vol. 11, pp. 417–426  
**Sponsor** Louisiana DOTD, FHWA (LTRC Project 124P)

## Overview

Comprehensive field and numerical study demonstrating that longitudinal cracking is more prominent than transverse cracking in Louisiana JPCP — a distress type NOT currently predicted by AASHTO Pavement ME. Establishes that widened slabs and tied concrete shoulders, while reducing transverse cracking, significantly increase longitudinal cracking potential. Develops first empirical prediction model for longitudinal cracking.

## Key Claims

1. **Longitudinal cracking exceeds transverse cracking** — Survey of 67.5 miles (43 projects, avg age 20.3 years) showed longitudinal cracking consistently higher than transverse cracking regardless of pavement age. IRI dramatically increased for roads >30 years ([[xiao-wu-2018-louisiana-longitudinal-cracking]], pp. 418-419, Fig. 2).

2. **Widened slabs increase longitudinal cracking** — Widening from 13 ft to 15 ft:
   - Transverse cracking: reduced from 40.9 to 6.7 ft/mi (84% reduction)
   - Longitudinal cracking: increased from 174 to 520 ft/mi (199% increase)
   - Critical fatigue damage location shifts from longitudinal edge to transverse joint ([[xiao-wu-2018-louisiana-longitudinal-cracking]], pp. 421-422, Fig. 5).

3. **Tied concrete shoulders increase longitudinal cracking** — Compared to curb sections:
   - Transverse cracking: reduced from 40.9 to 6.8 ft/mi
   - Longitudinal cracking: increased from 174 to 825 ft/mi (374% increase)
   - Concrete shoulders change length/width ratio, creating critical tensile stress at right wheel path ([[xiao-wu-2018-louisiana-longitudinal-cracking]], pp. 421-422).

4. **Slab geometry controls cracking orientation** — Longitudinal Cracking Ratio (LCR) = σCx/σCy (transverse/longitudinal critical tensile stress). LCR > 1.0 indicates definite longitudinal cracking. 127 of 288 FE cases showed longitudinal cracking potential ([[xiao-wu-2018-louisiana-longitudinal-cracking]], pp. 422-423).

5. **FE simulation findings** (ABAQUS, 288 cases):
   - Widened slab (12→15 ft): longitudinal cracking cases increased from 25 to 47
   - Tied concrete shoulder: 55 cases with longitudinal cracking likelihood
   - Tandem/tridem axles at transverse joints increase longitudinal cracking potential
   - Thinner slabs (8 in.) develop more longitudinal cracking than thicker (12 in.)
   - Less temperature gradient (warm regions) causes more longitudinal cracking ([[xiao-wu-2018-louisiana-longitudinal-cracking]], pp. 423-424, Fig. 6).

6. **Construction problems confirmed** — Inadequate longitudinal joint forming (plastic inserter method replaced by saw-cut/seal in 2000s) and inadequate base support identified as causes for premature localized cracking. One project: 86% slabs with longitudinal cracks, 4,163 ft/mi ([[xiao-wu-2018-louisiana-longitudinal-cracking]], pp. 420-421).

7. **Empirical prediction model developed**:
   ```
   log10(LC) = b0 + b1·TI + b2·L + b3·W + b4·(LW/D²) + b5·Shoulder + b6·Mr + b7·h·∛EBS
   ```
   - R² = 0.5423 (n = 35); LC = longitudinal cracking (ft/mi)
   - TI = Traffic Index (AADTT × directional × lane distribution × age)
   - Positive coefficients: W (width), Shoulder (tied concrete), TI (traffic)
   - Negative coefficients: L (length), Mr (subgrade modulus), h·∛EBS (base stiffness) ([[xiao-wu-2018-louisiana-longitudinal-cracking]], pp. 424-425).

## Notable Quotes

- "Currently longitudinal cracking is not considered in pavement design. However, experience in Louisiana found that longitudinal cracking was more prominent than transverse cracking for jointed concrete pavements." (p. 425)
- "Practically widened slab and tied shoulder have been proved to effectively reduce transverse and corner cracking, but the negative effect on longitudinal cracking potential needs to be carefully investigated and addressed." (p. 425)
- "This study shows the necessity and possibility of developing a longitudinal cracking model for jointed concrete pavements." (p. 424)

## Figures

- **Fig. 2, p. 419** — Cracking length and IRI by pavement age (longitudinal > transverse at all ages)
- **Fig. 5, p. 421** — Cracking grouped by slab width and shoulder type (key tradeoff visualization)
- **Fig. 6, pp. 423** — Influence factors on longitudinal cracking potential (6 subfigures)
- **Fig. 7, p. 424** — Predicted vs. measured longitudinal cracking (R² = 0.54)

## Connections to Existing Wiki

- Directly challenges current design practice: AASHTO Pavement ME does NOT predict longitudinal cracking for JPCP
- Widened slab findings contradict [[ardani-et-al-2003-colorado]] conclusion that 14-ft slabs are not a factor — Colorado studied construction-related cracking, Louisiana studied geometry-induced fatigue
- Builds on Hiller & Roesler (2002) *(not yet ingested)* and [[uddin-et-al-trr-1482]] using ABAQUS for 3D FE analysis
- Empirical model connects to [[probabilistic-crack-model]] (Saraf & McCullough) for crack prediction
- Tied shoulder tradeoff relevant to [[longitudinal-joint-separation]] and [[tie-bars]] concepts
- References NCHRP 1-51 (slab/underlying layer interaction into MEPDG)

## Related

[[longitudinal-cracking]]
[[widened-slab]]
[[slab-geometry]]
[[uddin-et-al-trr-1482]]
