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
import { collectionsConcept } from "./collections";
import { appendLinkConcept } from "./append-link";
import { assetBrowserConcept } from "./asset-browser";
import { autoSaveConcept } from "./auto-save";

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
import { knifeBisectConcept } from "./knife-bisect";
import { vertexGroupsConcept } from "./vertex-groups";
import { edgeOperationsConcept } from "./edge-operations";

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
import { mirrorModifierConcept } from "./mirror-modifier";
import { arrayModifierConcept } from "./array-modifier";
import { booleanModifierConcept } from "./boolean-modifier";

// Shading
import { principledBSDFConcept } from "./principled-bsdf";
import { emissionShaderConcept } from "./emission-shader";
import { materialSlotsConcept } from "./material-slots";
import { shaderNodesConcept } from "./shader-nodes";
import { textureTypesConcept } from "./texture-types";
import { uvUnwrapConcept } from "./uv-unwrap";
import { worldHdriConcept } from "./world-hdri";
import { colorManagementConcept } from "./color-management";

// Lighting
import { lightTypesConcept } from "./light-types";
import { volumetricFogConcept } from "./volumetric-fog";

// Animation
import { keyframesConcept } from "./keyframes";
import { parentEmptyConcept } from "./parent-empty";
import { graphEditorConcept } from "./graph-editor";
import { driversConcept } from "./drivers";

// Render
import { eeveeVsCyclesConcept } from "./eevee-vs-cycles";
import { samplesDenoisingConcept } from "./samples-denoising";
import { cameraSettingsConcept } from "./camera-settings";
import { compositorConcept } from "./compositor";
import { outputSettingsConcept } from "./output-settings";

export const deepConcepts: DeepConcept[] = [
  // Interface
  objectEditModeConcept,
  selectionModesConcept,
  cursor3DConcept,
  nPanelConcept,
  outlinerConcept,
  collectionsConcept,
  localViewConcept,
  xRayConcept,
  shadingModesConcept,
  appendLinkConcept,
  assetBrowserConcept,
  autoSaveConcept,

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
  knifeBisectConcept,
  edgeOperationsConcept,
  vertexGroupsConcept,

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
  mirrorModifierConcept,
  arrayModifierConcept,
  booleanModifierConcept,
  curvesAndBevelDepthConcept,

  // Shading
  shaderNodesConcept,
  principledBSDFConcept,
  emissionShaderConcept,
  materialSlotsConcept,
  textureTypesConcept,
  uvUnwrapConcept,
  worldHdriConcept,
  colorManagementConcept,

  // Lighting
  lightTypesConcept,
  volumetricFogConcept,

  // Animation
  keyframesConcept,
  graphEditorConcept,
  driversConcept,
  parentEmptyConcept,

  // Render
  eeveeVsCyclesConcept,
  samplesDenoisingConcept,
  cameraSettingsConcept,
  compositorConcept,
  outputSettingsConcept,
];
