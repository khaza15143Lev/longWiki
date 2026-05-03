---
title: "Analytical Technique to Mitigate Early-Age Longitudinal Cracking in Jointed Concrete Pavements"
category: source
tags: [early-age-cracking, JSLAB, temperature-gradient, maturity-method, interface-friction, paving-width]
sources: [lim-tayabji-2005-early-age-longitudinal-cracking]
created: 2026-05-03
updated: 2026-05-03
author: "Lim, Seungwook; Tayabji, Shiraz D."
published: 2005-08-18
doi: ""
scanned: false
---

# Analytical Technique to Mitigate Early-Age Longitudinal Cracking in Jointed Concrete Pavements

**Publication** 8th International Conference on Concrete Pavements, Colorado Springs, pp. 1322-1341  
**Sponsor** American Concrete Pavement Association (ACPA), CTL Group

## Overview

Presents an analytical approach using JSLAB finite element analysis and maturity method to predict early-age longitudinal cracking potential in JPCP. Develops graphical stress charts for 3,072 construction condition combinations to compare restrained stresses against early-age concrete strength development.

## Key Claims

1. **Critical cracking period is first night after placement** — Nighttime low ambient temperature forces slab top cooler while bottom remains hot from hydration heat. Maximum temperature gradient coincides with lowest concrete strength ([[lim-tayabji-2005-early-age-longitudinal-cracking]], pp. 1323-1324).

2. **Two restraint stress types combine** — Axial (frictional) tensile stress increases linearly from free edge; bending (curling) stress from temperature gradient. Total restrained stress = direct summation of both ([[lim-tayabji-2005-early-age-longitudinal-cracking]], pp. 1327-1328).

3. **Paving width is critical factor**:
   - 12-ft wide slabs: stress stays low for all conditions; longitudinal cracking unlikely even with delayed saw-cut
   - 26-ft wide slabs: critically high stress with temperature gradient > -2°F/in; use of wider lanes or delayed longitudinal joint sawing may be unacceptable ([[lim-tayabji-2005-early-age-longitudinal-cracking]], pp. 1330-1331).

4. **Friction coefficient matters** — σf = (γc × f × W)/2. Values range from 1.0 (natural subgrade) to 15.0 (lean concrete, cement treated). Critical stress conditions do not develop for f < 2. Paving widths < 24 ft safe for f < 2 ([[lim-tayabji-2005-early-age-longitudinal-cracking]], pp. 1328, 1337).

5. **Maturity method for strength prediction** — Time-Temperature Factor (TTF): M(t) = Σ(Ta-T0)Δt. High-strength concrete at 24 hrs: 420 psi flexural, E = 2.3×10⁶ psi. Low-strength concrete at 24 hrs: 180 psi flexural, E = 1.3×10⁶ psi ([[lim-tayabji-2005-early-age-longitudinal-cracking]], pp. 1334-1335).

6. **Five risk factors identified**:
   - High temperature gradient (first night, poor curing)
   - Rough, bonded, or locked slab-base interface
   - Delay in joint sawing in multiple-lane construction
   - High coefficient of thermal expansion (gravel aggregates)
   - Slower rate of strength development ([[lim-tayabji-2005-early-age-longitudinal-cracking]], p. 1340)

7. **Low-strength concrete at greater risk** — Cracking potential persists beyond 24-48 hours; temperature gradient > 3.0°F/in creates critical condition at later ages. High-strength concrete has safety margin by 24 hours ([[lim-tayabji-2005-early-age-longitudinal-cracking]], pp. 1336-1337).

## Notable Quotes

- "For routine pavement construction with well prepared and protected base surfaces and normal ambient temperature conditions, the potential for early-age longitudinal cracking is not considerable, even if for full width (e.g., 26 ft) paving. However, if the exceptional temperature condition is expected, it may be prudent to delay paving, considering night-time paving or partial width (lane at a time) paving." (p. 1340)

## Connections to Existing Wiki

- Uses [[jslab]] (same program from [[ozbeki-et-al-trr-1043]]) for curling/warping analysis
- Extends [[tayabji-trr-1062]] findings on construction-related cracking to early-age thermal stresses
- Maturity method connects to [[probabilistic-crack-model]] (both predict cracking likelihood from material properties)
- Temperature gradient findings relate to [[xiao-wu-2018-louisiana-longitudinal-cracking]] (less gradient in warm regions causes more longitudinal cracking)
- Gravel aggregate CTE finding connects to [[saraf]] (river gravel vs. limestone aggregate variability)
- Sponsored by ACPA, same organization referenced in [[chen-2014-longitudinal-joint-repairs]]

## Related

[[jslab]]
[[tayabji]]
[[temperature-gradient]]
[[maturity-method]]
[[xiao-wu-2018-louisiana-longitudinal-cracking]]
