---
title: "Overview"
category: synthesis
tags: [PCCP, longitudinal-cracking, synthesis]
sources: [ardani-et-al-2003-colorado, chen-2014-longitudinal-joint-repairs, dere-asgari-sotelino-archer-2006-skewed-jpcp, desantis-roesler-2022-stabilized-support-layers, heath-roesler-2000-top-down-cracking-FSHCC, janda-1935-wisconsin-highway-13, kaya-et-al-2019-widened-jpcp-longitudinal-cracking, lim-tayabji-2005-early-age-longitudinal-cracking, mateos-harvey-2021-early-age-premature-cracking, ozbeki-et-al-trr-1043, quan-et-al-2014-built-in-curling, rao-abdualla-sufian-2024-dowel-tie-bar-cracking, saboori-et-al-2021-pavement-me-calibration, saraf-mccullough-1986-sawcut-depth-probabilistic, seo-kim-2013-dowel-longitudinal-cracking, tayabji-trr-1062, uddin-et-al-trr-1482, xiao-wu-2018-louisiana-longitudinal-cracking, xu-cebon-2017-lttp-cracking-analysis, yang-et-al-2020-widened-concrete-pavements]
created: 2026-05-03
updated: 2026-05-03
---

# Overview

High-level synthesis of the knowledge base on premature longitudinal cracking in jointed plain concrete pavements (JPCP).

## Current Knowledge

The wiki contains 20 sources spanning 1935–2024, documenting premature longitudinal cracking across diverse climates, subgrades, and construction practices (see [[longitudinal-cracking-case-studies]] for a full project inventory). The consensus is that longitudinal cracking is a multifactorial distress involving construction practices, environmental gradients, slab geometry, and traffic loading.

### Primary Mechanisms

1. **Top-Down Cracking**: Multiple studies ([[heath-roesler-2000-top-down-cracking-FSHCC]], [[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]]) confirm that longitudinal cracks initiate at the slab surface, typically 0.6–1.2 m from the longitudinal edge, and propagate downward. This contradicts traditional bottom-up fatigue models.

2. **Dowel & Tie Bar Mechanisms**: Vertical dowel translation ([[seo-kim-2013-dowel-longitudinal-cracking]]) and subsurface delamination at dowel depth ([[rao-abdualla-sufian-2024-dowel-tie-bar-cracking]]) create localized tensile stresses that initiate cracking pre-traffic. Misaligned dowels ([[tayabji-trr-1062]]) and tie bar failures ([[chen-2014-longitudinal-joint-repairs]]) compromise load transfer and trigger joint separation.

3. **Built-In Curling & Nonlinear Gradients**: Daytime/summer paving locks in positive built-in curling ([[quan-et-al-2014-built-in-curling]]). Nonlinear temperature gradients increase top-slab tensile stresses by ~80% compared to linear assumptions ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]]).

4. **Soil Voiding**: Slab curl depressurizes fine-grained soils in dry zones, creating voids beneath the slab and leading to cracking independent of traffic loads ([[xu-cebon-2017-lttp-cracking-analysis]]).

5. **Subbase Erosion**: Loss of support from eroded stabilized subbases (HMA/PCC) directly correlates with longitudinal cracking in areas with poor drainage ([[desantis-roesler-2022-stabilized-support-layers]]).

### Construction Practices

- **Saw-Cut Depth**: Shallow saw-cuts at shoulder joints (< D/3 for 12-ft slabs) fail to create a [[weakened-plane]], forcing uncontrolled cracking ([[ardani-et-al-2003-colorado]]). A probabilistic crack model confirms saw-cut depth requirements vary by aggregate type: limestone requires 0.39D for 90% confinement, river gravel requires 0.44D ([[saraf-mccullough-1986-sawcut-depth-probabilistic]]).
- **Vibrator Trails**: Over-consolidation from malfunctioning paver vibrators reduces air content and creates linear weakened planes ([[ardani-et-al-2003-colorado]]).
- **Early-Age Risk**: First-night cracking is driven by paving width; widths <24 ft show minimal risk ([[lim-tayabji-2005-early-age-longitudinal-cracking]]). Late-afternoon paving significantly reduces early-age cracking risk ([[yang-et-al-2020-widened-concrete-pavements]]).

### Widened Slab Debate

- **SPS-2 / Louisiana**: Widened slabs (14–20 ft) with tied shoulders increase longitudinal cracking by 199–374% compared to 12-ft reference slabs ([[xiao-wu-2018-louisiana-longitudinal-cracking]], [[saboori-et-al-2021-pavement-me-calibration]]).
- **Colorado / Wisconsin**: Longitudinal cracking in widened slabs is attributed to poor construction quality (saw-cut depth, vibrator trails, drainage) rather than width alone ([[ardani-et-al-2003-colorado]], [[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]], [[mateos-harvey-2021-early-age-premature-cracking]]).
- **Pavement ME**: AASHTOWare Pavement ME does not predict longitudinal cracking for JPCP, indicating a gap in mechanistic-empirical design ([[saboori-et-al-2021-pavement-me-calibration]], [[mateos-harvey-2021-early-age-premature-cracking]]).

### Joint Geometry & Skew

- **Skewed Joints**: Skewed transverse joints increase longitudinal cracking potential compared to rectangular joints. Nonlinear gradients exacerbate this effect ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], [[yang-et-al-2020-widened-concrete-pavements]]).
- **Critical Load Position**: 4-axle trucks with closely spaced rear axles are the most critical traffic configuration for longitudinal cracking initiation ([[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]]).

### Historical Context

The earliest documented case (1935) identifies [[frost-heave]] on Colby silt-loam subgrades as the mechanism for longitudinal cracking on Wisconsin Highway 13 ([[janda-1935-wisconsin-highway-13]]).

### Repair & Rehabilitation

- **Slot Stitching**: Most cost-effective repair for longitudinal joint separation; outperforms dowel retrofit in long-term performance ([[chen-2014-longitudinal-joint-repairs]]).
- **ACPA Framework**: Trigger/variant framework provides decision trees for diagnosing dowel and tie bar-associated cracking [[rao-abdualla-sufian-2024-dowel-tie-bar-cracking]].

## Key Findings

- 14-ft wide slab design is NOT inherently a contributing factor; construction quality is the dominant variable
- Top-down cracking is the dominant propagation mode; environmental curling and drying shrinkage drive initiation
- Nonlinear temperature gradients are critical for accurate FEA stress prediction
- Late-afternoon paving and controlled curing reduce early-age longitudinal cracking risk
- Stabilized subbases (HMA/PCC) can fail catastrophically via erosion, bypassing traditional drainage design assumptions
- AASHTOWare Pavement ME cannot predict longitudinal cracking for JPCP; empirical calibration is required

## Gaps and Questions

- Pavement ME lacks a longitudinal cracking prediction model for JPCP
- Economic analysis of specification changes (e.g., saw-cut depth monitoring) is limited
- Widened slab debate remains unresolved: is width itself a risk factor, or only a proxy for construction variability?
- Long-term performance of slot stitching vs. dowel retrofit needs extended monitoring
- Climate change impacts on drying shrinkage and subbase erosion are not modeled

## Related

[[longitudinal-cracking]]
[[top-down-cracking]]
[[widened-slab]]
[[built-in-curling]]
[[dowel-bars]]
[[weakened-plane]]
[[frost-heave]]
[[jslab]]
[[probabilistic-crack-model]]
[[longitudinal-cracking-mechanisms-synthesis]]
[[longitudinal-cracking-case-studies]]
