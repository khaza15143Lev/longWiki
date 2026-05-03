---
title: "Longitudinal Cracking in JPCP — Mechanisms, Evidence, and Design Implications"
category: analysis
tags: [longitudinal-cracking, top-down-cracking, widened-slab, construction-practices, environmental-loading, synthesis]
sources: [ardani-et-al-2003-colorado, chen-2014-longitudinal-joint-repairs, dere-asgari-sotelino-archer-2006-skewed-jpcp, desantis-roesler-2022-stabilized-support-layers, heath-roesler-2000-top-down-cracking-FSHCC, janda-1935-wisconsin-highway-13, kaya-et-al-2019-widened-jpcp-longitudinal-cracking, lim-tayabji-2005-early-age-longitudinal-cracking, mateos-harvey-2021-early-age-premature-cracking, ozbeki-et-al-trr-1043, quan-et-al-2014-built-in-curling, rao-abdualla-sufian-2024-dowel-tie-bar-cracking, saboori-et-al-2021-pavement-me-calibration, saraf-mccullough-1986-sawcut-depth-probabilistic, seo-kim-2013-dowel-longitudinal-cracking, tayabji-trr-1062, uddin-et-al-trr-1482, xiao-wu-2018-louisiana-longitudinal-cracking, xu-cebon-2017-lttp-cracking-analysis, yang-et-al-2020-widened-concrete-pavements]
created: 2026-05-03
updated: 2026-05-03
---

# Longitudinal Cracking in JPCP — Mechanisms, Evidence, and Design Implications

Comprehensive analysis synthesizing 20 sources (1935–2024) on longitudinal cracking in jointed plain concrete pavements (JPCP). This analysis traces the evolution of understanding from the earliest documented case in 1935 through modern 3D FEA and forensic investigations, identifying five distinct cracking mechanisms, the unresolved widened slab debate, and critical gaps in mechanistic-empirical design.

## 1. Five Distinct Longitudinal Cracking Mechanisms

The literature reveals five mechanisms that initiate longitudinal cracking, each with different triggers, timing, and spatial patterns. These mechanisms are not mutually exclusive and often interact.

### 1.1 Top-Down Cracking from Environmental Loading

**Most prevalent mechanism.** Cracks initiate at the slab surface, typically 0.6–1.2 m (2–4 ft) from the longitudinal edge, and propagate downward. First definitively documented by [[heath-roesler-2000-top-down-cracking-FSHCC]] in Palmdale, California FSHCC test sections, where 37 of 74 slabs cracked under environmental loading before any traffic. Cores confirmed cracking began at the top and propagated downward.

**Mechanism:** Differential drying shrinkage between the exposed top surface and subbase-restricted bottom creates a moisture gradient. The top contracts more than the bottom, causing slab curling and tensile stresses at the surface. Nighttime negative temperature gradients (cooler top, warmer bottom) amplify these stresses. After 2 months, strains at slab tops increased significantly while bottoms remained constant, confirming differential drying as the primary driver, not thermal contraction.

**Slab length dependence:** [[heath-roesler-2000-top-down-cracking-FSHCC]] found 5.8 m (19 ft) slabs cracked while 4.0 m (13 ft) slabs remained intact. Maximum stress for longer slabs was ~13% greater than flexural strength (5.14 MPa); shorter slabs experienced 23% lower stress. This explains why longer joint spacings are more vulnerable.

**Validation:** [[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]] and [[yang-et-al-2020-widened-concrete-pavements]] confirmed the same top-down pattern in Iowa widened JPCP, with cracks consistently initiating 0.6–1.2 m from the edge. [[quan-et-al-2014-built-in-curling]] validated the mechanism through LTPP data, showing summer daytime paving locks in positive built-in curling that shifts in-situ temperature profiles, making the surface more susceptible to tensile stress.

### 1.2 Dowel-Induced Cracking from Vertical Translation

Cracks initiate at transverse joints due to dowel bars installed above mid-depth. First identified by [[seo-kim-2013-dowel-longitudinal-cracking]] through field observation and 3D FEA (ABAQUS) in Korean expressways.

**Mechanism:** When a slab curls upward under negative temperature gradient, dowels installed above mid-depth create localized transverse tensile stress concentrations at their location. Properly installed mid-depth dowels do not induce longitudinal cracking. Cracks occur before traffic opening and propagate through cement (not aggregate), confirming early-age environmental loading as the cause.

**Field evidence:** 6 of 400 joints (1.5%) showed longitudinal cracking; cores confirmed cracks at dowel locations with dowels installed far above mid-depth. Some cores showed horizontal delamination at dowel depth. [[rao-abdualla-sufian-2024-dowel-tie-bar-cracking]] extended this finding through MIRA scanning and coring at six sites in Wisconsin, Illinois, and Minnesota, finding delamination initiates at dowel depth and migrates upward to the surface, eventually causing spalling. Cracks extend several feet from joints even when no surface distress is visible.

**Critical insight from [[rao-abdualla-sufian-2024-dowel-tie-bar-cracking]]:** Early-age microcracking occurs when steel bars (5–10× stiffer than early-age concrete) restrain concrete movement during hydration. Restraint stresses exceed low early-age tensile strength, causing microscopic damage. Microcracks coalesce over time under repeated thermal/moisture/traffic loading into visible delamination. Cores further from joints show cracks passing through aggregate (propagation after concrete gained strength); cores closer to joints show cracks around aggregate (early-age cracking when concrete was weak).

### 1.3 Soil Voiding from Slab Curl Depressurization

Proposed by [[xu-cebon-2017-lttp-cracking-analysis]] through analysis of LTPP SPS-2 data. A distinct mechanism where slab curl depressurizes fine-grained soils in dry zones, creating voids beneath the slab that lead to cracking independent of traffic loading.

**Mechanism:** When a slab curls upward at edges, it creates negative pressure (suction) in the soil beneath the lifted area. In fine-grained soils and dry climates, this depressurization causes soil consolidation and void formation. The resulting loss of support leads to cracking. Two longitudinal crack patterns identified: (1) single long crack ~1 m from pavement edge adjacent to shoulder; (2) short crack near centerline of slab. Most initiate from slab transverse edges.

**Climate dependence:** Cracks occur earlier and are more severe in dry climatic zones compared to wet zones. In Arkansas (wet zone), edge pumping occurred as a result of cracking rather than vice versa. The mechanism involves interaction of slab curl, vehicle loading, and foundation soils with low cohesive strengths.

**Contrast with other mechanisms:** This mechanism is fundamentally different from [[lim-tayabji-2005-early-age-longitudinal-cracking]] (thermal/restraint cracking) and [[heath-roesler-2000-top-down-cracking-FSHCC]] (drying shrinkage). It requires coupled hygro-thermo-mechanical analysis rather than purely structural modeling.

### 1.4 Subbase Erosion and Loss of Support

Identified by [[desantis-roesler-2022-stabilized-support-layers]] through field surveys (FWD, MIRA, coring) and laboratory Hamburg Wheel-Tracking Device testing in Illinois. Loss of support from eroded stabilized subbases (HMA/PCC) leads to severe distress including longitudinal cracking that spans multiple slabs.

**Mechanism:** Water infiltrates through joints and cracks, carrying fine subbase particles out of the support layer. Stabilized subbases can erode catastrophically when drainage is inadequate, creating voids that eliminate slab support. Evidence of erosion found in poor drainage locations (underpasses, sag vertical curves) for pavements with PCC stabilized subbase. CAM II cement content affects erosion resistance — mixes with lower cement contents were more susceptible.

**Field evidence:** Longitudinal cracking from subbase erosion spans multiple slabs, distinguishing it from isolated top-down cracks. HMA stabilized subbases performed well across tested sections. Bonded concrete overlay over existing composite pavement (HMA over PCC) was erosion-susceptible, contributing to severe failures.

**Connection to soil voiding:** Both mechanisms involve loss of support, but subbase erosion is driven by water infiltration and particle transport, while soil voiding is driven by slab curl depressurization. [[xu-cebon-2017-lttp-cracking-analysis]] noted the two mechanisms can interact in poorly drained areas.

### 1.5 Construction-Induced Cracking (Saw-Cuts, Vibrator Trails, Tie Bar Failure)

Documented by [[ardani-et-al-2003-colorado]] in Colorado Region 1, with construction practices as the root cause. Two primary mechanisms:

**Shallow saw-cut depth:** Shoulder joint saw-cuts less than D/3 (12-ft slabs) or 0.4D (14-ft slabs) fail to create a [[weakened-plane]], forcing uncontrolled longitudinal cracking to relieve internal stresses. [[ozbeki-et-al-trr-1043]] (Saraf & McCullough) developed a probabilistic crack model confirming that saw-cut depth must account for aggregate type and material variability: limestone aggregate required 0.39D for 90% crack confinement; river gravel required 0.44D.

**Vibrator trails:** Malfunctioning paver vibrators (set too high or prolonged vibration at low paver speed) over-consolidate concrete, reducing air content and creating linear weakened planes along vibrator paths. Petrographic analysis by CTL showed cores from vibrator trails had consistently lower air content than cores taken 18 inches away in the center of the lane.

**Tie bar failure:** [[chen-2014-longitudinal-joint-repairs]] documented tie bar absence, corrosion, or rupturing at longitudinal construction joints as the root cause of longitudinal joint separation. LTE values below 40% consistently found at separated joints.

## 2. The Widened Slab Debate

The most contentious issue in the literature is whether widened slabs (14 ft or wider) inherently increase longitudinal cracking risk, or whether observed cracking is attributable to construction quality variability.

### 2.1 Evidence Supporting Width as Risk Factor

**Louisiana study ([[xiao-wu-2018-louisiana-longitudinal-cracking]]):** Survey of 67.5 miles (43 projects, avg age 20.3 years). Widening from 13 ft to 15 ft:
- Transverse cracking: reduced from 40.9 to 6.7 ft/mi (84% reduction)
- Longitudinal cracking: increased from 174 to 520 ft/mi (199% increase)

Tied concrete shoulders compared to curb sections:
- Longitudinal cracking: increased from 174 to 825 ft/mi (374% increase)

FE simulation (ABAQUS, 288 cases): widened slab (12→14 ft) increased longitudinal cracking cases from 25 to 47; tied concrete shoulder produced 55 cases with longitudinal cracking likelihood. Developed first empirical prediction model:

```
log10(LC) = b0 + b1·TI + b2·L + b3·W + b4·(LW/D²) + b5·Shoulder + b6·Mr + b7·h·∛EBS
```

R² = 0.5423 (n = 35). Positive coefficients for width (W), shoulder (tied concrete), and traffic (TI).

**California calibration ([[saboori-et-al-2021-pavement-me-calibration]]):** ~4600 lane-miles of PaveM database data from 446 projects. JPCP with widened concrete shoulders (WRF) do not perform well; statistical model predicts performance similar to flexible shoulders. This is because widened shoulders used to be constructed in 14 ft slabs, which are susceptible to longitudinal cracking.

**Iowa FEA ([[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]], [[yang-et-al-2020-widened-concrete-pavements]]):** Higher top-to-bottom tensile stress ratio and top tensile stress observed with widened slabs (4.3 m/14 ft) with partial-depth tied PCC shoulder compared to regular slabs (3.7 m/12 ft) with full-depth tied PCC shoulder.

### 2.2 Evidence Attributing Cracking to Construction Quality

**Colorado study ([[ardani-et-al-2003-colorado]]):** The study explicitly cleared 14-ft slab design as a contributing factor, validating CDOT's 1996 adoption based on LTPP SPS-2 research. Cracking attributed to shallow saw-cuts and vibrator trails.

**Wisconsin studies ([[mateos-harvey-2021-early-age-premature-cracking]]):** Colorado found lower cracking in 14-ft panels than 12–13-ft panels. Construction practices identified as the dominant variable.

**Mateos & Harvey synthesis ([[mateos-harvey-2021-early-age-premature-cracking]]):** "Mixed results: SPS-2 and Louisiana studies show increased longitudinal cracking with widened slabs; Colorado and Wisconsin studies attribute cracking to construction issues, not slab width."

### 2.3 Reconciliation

The evidence suggests both positions are partially correct. Widened slabs increase the distance from the free edge to the slab center, amplifying cumulative frictional restraint stresses ([[lim-tayabji-2005-early-age-longitudinal-cracking]]). However, this amplification only becomes critical when construction quality is poor (shallow saw-cuts, vibrator trails, inadequate curing, poor dowel alignment). In well-constructed pavements, widened slabs perform adequately; in poorly constructed pavements, the increased slab width amplifies the consequences of construction defects.

**Practical implication:** Width alone should not be disqualifying, but widened slabs require stricter construction quality control, particularly for saw-cut depth, curing, and dowel placement.

## 3. Critical Role of Nonlinear Temperature Gradients

Traditional pavement design (AASHTO MEPDG) simplifies temperature distribution to a linear difference between top and bottom surfaces. This simplification significantly underestimates top-slab tensile stresses.

**[[dere-asgari-sotelino-archer-2006-skewed-jpcp]]:** Nonlinear temperature distribution increases tensile stresses by 80% at the slab top and decreases compressive stresses by 53% at the bottom compared to linear gradient assumption.

**[[quan-et-al-2014-built-in-curling]]:** Current AASHTO MEPDG simplifies built-in curling to temperature difference between top and bottom of slab. Actual nonlinear setting temperature profile means concrete cannot reach zero stress state. Positive setting gradient (locked into slab) shifts in-situ temperature profile in negative direction, making it easier for the concrete surface to experience tensile stress.

**[[heath-roesler-2000-top-down-cracking-FSHCC]]:** Highest concrete tensile stresses developed at the top of the slab under extreme negative temperature gradients (during night). Both shrinkage differential and nonlinear nighttime temperature gradients increase tensile stresses at the top.

**Design implication:** FEA models using linear temperature gradients significantly underestimate cracking risk. Accurate pavement design requires nonlinear gradient input, especially for skewed joints and widened slabs.

## 4. Early-Age Cracking Risk and Construction Timing

### 4.1 First Night After Placement is Critical

[[lim-tayabji-2005-early-age-longitudinal-cracking]] established that the critical cracking period is the first night after placement. Nighttime low ambient temperature forces the slab top cooler while the bottom remains hot from hydration heat. Maximum temperature gradient coincides with lowest concrete strength.

Two restraint stress types combine:
- Axial (frictional) tensile stress: σf = (γc × f × W)/2, increases linearly from free edge
- Bending (curling) stress from temperature gradient

Total restrained stress = direct summation of both.

### 4.2 Paving Width Threshold

- 12-ft wide slabs: stress stays low for all conditions; longitudinal cracking unlikely even with delayed saw-cut
- 26-ft wide slabs: critically high stress with temperature gradient > -2°F/in; use of wider lanes or delayed longitudinal joint sawing may be unacceptable
- Paving widths < 24 ft safe for friction coefficient f < 2

Friction coefficient values range from 1.0 (natural subgrade) to 15.0 (lean concrete, cement treated).

### 4.3 Late-Afternoon Paving Recommendation

[[yang-et-al-2020-widened-concrete-pavements]] observed a site constructed in late afternoon, where concrete set during nighttime and led to less built-in curling, only slightly exhibited longitudinal cracks. [[quan-et-al-2014-built-in-curling]] quantified that summer daytime paving creates maximum positive built-in curling, increasing both level and frequency of tensile stress on the top of PCC slab.

### 4.4 Five Risk Factors ([[lim-tayabji-2005-early-age-longitudinal-cracking]])

1. High temperature gradient (first night, poor curing)
2. Rough, bonded, or locked slab-base interface
3. Delay in joint sawing in multiple-lane construction
4. High coefficient of thermal expansion (gravel aggregates)
5. Slower rate of strength development

Low-strength concrete at greater risk — cracking potential persists beyond 24–48 hours. High-strength concrete has a safety margin by 24 hours.

## 5. Joint Geometry Effects

### 5.1 Skewed Joints

[[dere-asgari-sotelino-archer-2006-skewed-jpcp]] investigated premature cracking in skewed JPCP sections on State Route 49 in Valparaiso, Indiana. Despite 15° skewed joints, ~70% of observed cracks oriented perpendicular to the lane direction. Principal stress directions under combined loading coincide with the longitudinal traffic direction.

[[yang-et-al-2020-widened-concrete-pavements]] confirmed pavements with skewed joints are prone to longitudinal cracks compared to rectangular joints under all loading scenarios. Recommended avoiding skewed joints for widened JPCP with high truck traffic.

### 5.2 Subgrade Stiffness Reversal

[[dere-asgari-sotelino-archer-2006-skewed-jpcp]] found a counterintuitive result: thermal loading alone produces higher tensile stresses with stiffer subgrade, but combined thermal + wheel loading produces higher stresses with softer subgrade. The increase from thermal to combined loading was 34% for soft clay vs. 21% for stiff clay. This has implications for pavement design in regions with variable subgrade conditions.

## 6. Traffic Loading Interaction

While environmental loading initiates cracks, traffic loading accelerates propagation and determines service life impact.

**Critical load position:** [[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]] identified the four-axle truck with closely spaced rear axles as the most critical configuration. When axle loads are on adjacent slabs, tensile stresses transfer to the critical slab, resulting in very high tensile stress accumulation around the top surface close to the transverse edge.

**[[heath-roesler-2000-top-down-cracking-FSHCC]]:** Corner loading creates stresses approximately 40% higher than midslab edge loading with positive temperature gradient and no shrinkage gradient. Load plus environmental stress analysis showed the critical failure location at the corner of the slab, not the midslab edge.

**Traffic volume correlation:** [[yang-et-al-2020-widened-concrete-pavements]] found sites subjected to higher truck traffic volume exhibited a more significant number of longitudinal cracks. However, [[xu-cebon-2017-lttp-cracking-analysis]] noted that in dry climates, cracking can occur independent of traffic due to soil voiding.

## 7. Shoulder Design and Load Transfer

### 7.1 Tied PCC Shoulders Outperform

[[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]]: Sites with tied PCC shoulder exhibited fewer longitudinal cracks than sites with HMA shoulders. HMA shoulder not tied to slabs, so no load transfer between slab and HMA shoulder; LTE of only 10% between shoulder and slab bases. Widened or regular slabs with HMA shoulders demonstrate similar behavior to no shoulder.

[[yang-et-al-2020-widened-concrete-pavements]]: Sites with tied PCC shoulders generally outperformed those with HMA and granular shoulders, even though tied PCC sites experienced relatively higher traffic volume. Recommended tied PCC shoulders for widened JPCP with high truck traffic.

### 7.2 Trade-off: Tied Shoulders Increase Longitudinal Cracking

[[xiao-wu-2018-louisiana-longitudinal-cracking]]: Tied concrete shoulders compared to curb sections increased longitudinal cracking from 174 to 825 ft/mi (374% increase). The shoulders change the length/width ratio, creating critical tensile stress at the right wheel path.

**Reconciliation:** Tied PCC shoulders reduce transverse cracking and improve load transfer, but the increased slab width and altered stress distribution increase longitudinal cracking potential. The net effect depends on construction quality, climate, and traffic.

## 8. Historical Evolution of Understanding

| Year | Source | Key Contribution |
|------|--------|-----------------|
| 1935 | [[janda-1935-wisconsin-highway-13]] | First documented longitudinal cracking mechanism: frost heave on Colby silt-loam |
| 1986 | [[tayabji-trr-1062]] | Dowel placement tolerances; locked joints cause cracking |
| 1986 | [[ozbeki-et-al-trr-1043]] | Probabilistic saw-cut depth model; JSLAB validation |
| 1995 | [[uddin-et-al-trr-1482]] | 3D FEA (ABAQUS) for discontinuity modeling |
| 2000 | [[heath-roesler-2000-top-down-cracking-FSHCC]] | Top-down cracking from environmental loading; drying shrinkage |
| 2003 | [[ardani-et-al-2003-colorado]] | Construction defects (saw-cuts, vibrators) as primary cause |
| 2005 | [[lim-tayabji-2005-early-age-longitudinal-cracking]] | First-night cracking risk; paving width thresholds |
| 2006 | [[dere-asgari-sotelino-archer-2006-skewed-jpcp]] | Nonlinear gradients increase stresses 80%; skewed joints |
| 2013 | [[seo-kim-2013-dowel-longitudinal-cracking]] | Vertical dowel translation causes cracking pre-traffic |
| 2014 | [[chen-2014-longitudinal-joint-repairs]] | Slot stitching most cost-effective repair |
| 2014 | [[quan-et-al-2014-built-in-curling]] | Summer paving locks in positive built-in curling |
| 2017 | [[xu-cebon-2017-lttp-cracking-analysis]] | Soil voiding mechanism from slab curl depressurization |
| 2018 | [[xiao-wu-2018-louisiana-longitudinal-cracking]] | Widened slabs increase longitudinal cracking 199–374% |
| 2019 | [[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]] | 4-axle truck critical; tied PCC shoulders outperform |
| 2020 | [[yang-et-al-2020-widened-concrete-pavements]] | Late-afternoon paving reduces cracking; skewed joints |
| 2021 | [[mateos-harvey-2021-early-age-premature-cracking]] | Construction practices primary cause; widened slab debate |
| 2021 | [[saboori-et-al-2021-pavement-me-calibration]] | Pavement ME cannot predict longitudinal cracking for JPCP |
| 2022 | [[desantis-roesler-2022-stabilized-support-layers]] | Subbase erosion causes longitudinal cracking |
| 2024 | [[rao-abdualla-sufian-2024-dowel-tie-bar-cracking]] | Delamination at dowel depth; ACPA trigger/variant framework |

## 9. Gaps in Current Design Practice

### 9.1 AASHTOWare Pavement ME Cannot Predict Longitudinal Cracking

Both [[saboori-et-al-2021-pavement-me-calibration]] and [[mateos-harvey-2021-early-age-premature-cracking]] confirm that AASHTOWare Pavement ME does not predict longitudinal cracking for JPCP. This is a critical gap, as longitudinal cracking is more prevalent than transverse cracking in many jurisdictions ([[xiao-wu-2018-louisiana-longitudinal-cracking]]).

### 9.2 Nonlinear Temperature Gradients Not Modeled

Current design tools assume linear temperature gradients, underestimating top-slab tensile stresses by ~80% ([[dere-asgari-sotelino-archer-2006-skewed-jpcp]], [[quan-et-al-2014-built-in-curling]]).

### 9.3 Soil Voiding and Subbase Erosion Not Coupled

Existing models treat support as uniform or use Winkler springs with constant k-value. Neither [[xu-cebon-2017-lttp-cracking-analysis]] (soil voiding) nor [[desantis-roesler-2022-stabilized-support-layers]] (subbase erosion) mechanisms are represented in mechanistic-empirical design.

### 9.4 Early-Age Construction Risk Not Quantified

[[lim-tayabji-2005-early-age-longitudinal-cracking]] and [[mateos-harvey-2021-early-age-premature-cracking]] identify construction practices as the dominant variable, but no design tool quantifies the risk of specific construction decisions (paving time, saw-cut depth, curing method) on long-term cracking performance.

## 10. Design Recommendations Synthesized from Evidence

Based on the 19 sources analyzed, the following recommendations emerge:

1. **Limit joint spacing to ≤4.0 m (13 ft)** in environments with high drying shrinkage potential ([[heath-roesler-2000-top-down-cracking-FSHCC]])
2. **Pave in late afternoon** to allow concrete to set during cooler nighttime conditions ([[yang-et-al-2020-widened-concrete-pavements]], [[quan-et-al-2014-built-in-curling]])
3. **Ensure saw-cut depth ≥ D/3** for 12-ft slabs and ≥ 0.4D for 14-ft slabs; adjust for aggregate type ([[ardani-et-al-2003-colorado]], [[ozbeki-et-al-trr-1043]])
4. **Install dowels at mid-depth** to prevent vertical translation-induced cracking ([[seo-kim-2013-dowel-longitudinal-cracking]])
5. **Use tied PCC shoulders** for widened JPCP with high truck traffic; avoid HMA and granular shoulders ([[kaya-et-al-2019-widened-jpcp-longitudinal-cracking]], [[yang-et-al-2020-widened-concrete-pavements]])
6. **Avoid skewed joints** in widened JPCP with high truck traffic ([[yang-et-al-2020-widened-concrete-pavements]], [[dere-asgari-sotelino-archer-2006-skewed-jpcp]])
7. **Provide adequate drainage** to prevent subbase erosion, especially in underpasses and sag vertical curves ([[desantis-roesler-2022-stabilized-support-layers]])
8. **Monitor vibrator frequency** and ensure proper air content to prevent vibrator trails ([[ardani-et-al-2003-colorado]])
9. **Use high-strength concrete** for early-age cracking resistance; low-strength concrete remains vulnerable beyond 24–48 hours ([[lim-tayabji-2005-early-age-longitudinal-cracking]])
10. **Limit widened slab width to ≤4.30 m (14 ft)** with tied PCC shoulder for high truck traffic applications ([[yang-et-al-2020-widened-concrete-pavements]])

## Related

[[longitudinal-cracking]]
[[top-down-cracking]]
[[widened-slab]]
[[built-in-curling]]
[[dowel-bars]]
[[construction-practices]]
[[nonlinear-temperature-gradient]]
[[soil-voiding]]
[[subbase-erosion]]
[[early-age-cracking]]
[[skewed-joints]]
[[tied-concrete-shoulder]]
[[longitudinal-cracking-case-studies]]
