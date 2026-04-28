import type { DeepConcept } from "@/lib/deep-types";

// Interface
import { objectEditModeConcept } from "./object-edit-mode";
import { selectionModesConcept } from "./selection-modes";
import { cursor3DConcept } from "./3d-cursor";
import { nPanelConcept } from "./n-panel";
import { outlinerConcept } from "./outliner";
import { localViewConcept } from "./local-view";
import { xRayConcept } from "./x-ray";
import { shadingModesConcept } from "./shading-modes";

// Geometry
import { vertexEdgeFaceConcept } from "./vertex-edge-face";
import { loopConcept } from "./loop";
import { meshVsObjectConcept } from "./mesh-vs-object";
import { originPointConcept } from "./origin-point";
import { normalsConcept } from "./normals";
import { mergeConcept } from "./merge";
import { extrudeConcept } from "./extrude";
import { insetConcept } from "./inset";
import { loopCutConcept } from "./loop-cut";

// Transforms
import { grsConcept } from "./g-r-s";
import { axisLockExcludeConcept } from "./axis-lock-exclude";
import { pivotPointConcept } from "./pivot-point";
import { snapConcept } from "./snap";
import { applyScaleConcept } from "./apply-scale";
import { proportionalEditConcept } from "./proportional-edit";

// Modifiers
import { modifierStackConcept } from "./modifier-stack";
import { bevelModifierConcept } from "./bevel-modifier";
import { subdivisionSurfaceConcept } from "./subdivision-surface";
import { solidifyConcept } from "./solidify";
import { curvesAndBevelDepthConcept } from "./curves-and-bevel-depth";

// Shading
import { principledBSDFConcept } from "./principled-bsdf";
import { emissionShaderConcept } from "./emission-shader";
import { materialSlotsConcept } from "./material-slots";

// Lighting
import { lightTypesConcept } from "./light-types";
import { volumetricFogConcept } from "./volumetric-fog";

// Animation
import { keyframesConcept } from "./keyframes";
import { parentEmptyConcept } from "./parent-empty";

// Render
import { eeveeVsCyclesConcept } from "./eevee-vs-cycles";
import { samplesDenoisingConcept } from "./samples-denoising";

export const deepConcepts: DeepConcept[] = [
  // Interface
  objectEditModeConcept,
  selectionModesConcept,
  cursor3DConcept,
  nPanelConcept,
  outlinerConcept,
  localViewConcept,
  xRayConcept,
  shadingModesConcept,

  // Geometry
  vertexEdgeFaceConcept,
  loopConcept,
  meshVsObjectConcept,
  originPointConcept,
  normalsConcept,
  mergeConcept,
  extrudeConcept,
  insetConcept,
  loopCutConcept,

  // Transforms
  grsConcept,
  axisLockExcludeConcept,
  pivotPointConcept,
  snapConcept,
  applyScaleConcept,
  proportionalEditConcept,

  // Modifiers
  modifierStackConcept,
  bevelModifierConcept,
  subdivisionSurfaceConcept,
  solidifyConcept,
  curvesAndBevelDepthConcept,

  // Shading
  principledBSDFConcept,
  emissionShaderConcept,
  materialSlotsConcept,

  // Lighting
  lightTypesConcept,
  volumetricFogConcept,

  // Animation
  keyframesConcept,
  parentEmptyConcept,

  // Render
  eeveeVsCyclesConcept,
  samplesDenoisingConcept,
];
