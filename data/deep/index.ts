import type { DeepConcept } from "@/lib/deep-types";

import { objectEditModeConcept } from "./object-edit-mode";
import { selectionModesConcept } from "./selection-modes";
import { cursor3DConcept } from "./3d-cursor";

import { originPointConcept } from "./origin-point";
import { normalsConcept } from "./normals";
import { mergeConcept } from "./merge";

import { pivotPointConcept } from "./pivot-point";

// Order = display order on the /core page.
// Grouped roughly by concept.group, but order within each group also matters.
export const deepConcepts: DeepConcept[] = [
  // Interface
  objectEditModeConcept,
  selectionModesConcept,
  cursor3DConcept,

  // Geometry
  originPointConcept,
  normalsConcept,
  mergeConcept,

  // Transforms
  pivotPointConcept,
];
