// Core foundational concepts. Things the tutorial assumes you know,
// or that recur across chapters and deserve a single canonical home.

import type { RichText } from "./types";

export interface CoreConcept {
  /** Stable slug used in URL fragment. */
  id: string;
  /** Display title. */
  title: string;
  /** Tutorial-agnostic plain explanation. */
  body: RichText[];
  /** Short tagline / one-liner shown in the index. */
  tagline?: string;
  /** Group it belongs to (used for sidebar grouping). */
  group:
    | "interface"
    | "geometry"
    | "transforms"
    | "modifiers"
    | "shading"
    | "lighting"
    | "animation"
    | "render";
  /** Common keystrokes or operations linked to this concept. */
  shortcuts?: { keys: string; meaning: string }[];
  /** Optional inline SVG diagram. */
  visual?: { svg?: string; alt: string; caption?: string };
  /** Common gotchas. */
  pitfalls?: RichText[];
}

export interface CoreGroup {
  id: CoreConcept["group"];
  label: string;
  description: string;
}

export const CORE_GROUPS: CoreGroup[] = [
  {
    id: "interface",
    label: "Interface & Modes",
    description:
      "Blender ki window kaise samajhni hai aur kab kaunsa mode use hota hai.",
  },
  {
    id: "geometry",
    label: "Geometry",
    description:
      "Vertex, edge, face, mesh, object. Sab cheez ki bunyad yahin hai.",
  },
  {
    id: "transforms",
    label: "Transforms & Pivots",
    description:
      "Move, rotate, scale. Origin, 3D cursor, pivot point. Yeh tay karte hain ke action kahan se hoga.",
  },
  {
    id: "modifiers",
    label: "Modifiers & Curves",
    description:
      "Non-destructive workflow. Bevel, subdivision, solidify, curve geometry.",
  },
  {
    id: "shading",
    label: "Materials & Shading",
    description:
      "Principled BSDF, emission, nodes, color management.",
  },
  {
    id: "lighting",
    label: "Lighting",
    description: "Point, spot, area, sun, world. Kaunsi roshni kab use ho.",
  },
  {
    id: "animation",
    label: "Animation",
    description: "Keyframes, timeline, graph editor, easing.",
  },
  {
    id: "render",
    label: "Render Engines",
    description: "EEVEE vs Cycles, samples, denoising, output.",
  },
];
