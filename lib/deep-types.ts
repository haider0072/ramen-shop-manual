// Deep concept type. Encyclopedia-grade structure with full bilingual content.
// Designed so that one concept page covers everything you'd otherwise have to Google.

import type { T } from "./i18n";

export type Group =
  | "interface"
  | "geometry"
  | "transforms"
  | "modifiers"
  | "shading"
  | "lighting"
  | "animation"
  | "render";

export interface Shortcut {
  keys: string;
  meaning: T;
}

export interface Variant {
  /** Display name of the variant, kept stable across languages */
  name: string;
  /** Optional keys/menu path */
  keys?: string;
  /** What it does */
  description: T;
  /** When to reach for this variant specifically */
  when?: T;
}

export interface RelatedLink {
  /** id of another deep concept */
  id: string;
  /** Why it's related (one liner) */
  note: T;
}

export interface RecipeStep {
  step: T;
}

export interface DeepVisual {
  svg?: string;
  src?: string;
  alt: T;
  caption?: T;
}

export interface DeepConcept {
  id: string;
  group: Group;

  /** Short canonical title */
  title: T;
  /** One-liner shown under title and in indexes */
  tagline: T;

  /** Core shortcuts (most relevant 1-5) */
  shortcuts?: Shortcut[];

  /** "What it is" — paragraphs */
  whatItIs: T[];
  /** "Why it exists / what problem it solves" — paragraphs */
  whyItExists?: T[];
  /** "How it actually works under the hood" — optional deeper paragraphs */
  howItWorks?: T[];

  /** All variants, options, sub-modes. The big payoff section. */
  variants?: {
    /** Heading for the variants section, e.g., "Snap menu options" */
    heading: T;
    items: Variant[];
  };

  /** Step-by-step recipe (most useful first time) */
  recipe?: { heading?: T; steps: RecipeStep[] };

  /** Bullet pitfalls */
  pitfalls?: T[];

  /** Cross-links to other deep concepts */
  related?: RelatedLink[];

  /** Real-world / game dev / product design notes */
  realWorld?: T[];

  /** Optional visual */
  visual?: DeepVisual;
}

export interface DeepGroup {
  id: Group;
  label: T;
  description: T;
}

export const DEEP_GROUPS: DeepGroup[] = [
  {
    id: "interface",
    label: { en: "Interface & Modes", ur: "Interface aur Modes" },
    description: {
      en: "How Blender's window is laid out and when each mode comes into play.",
      ur: "Blender ki window kaise samajhni hai aur kab kaunsa mode use hota hai.",
    },
  },
  {
    id: "geometry",
    label: { en: "Geometry", ur: "Geometry" },
    description: {
      en: "Vertex, edge, face, mesh, object. The bedrock of everything else.",
      ur: "Vertex, edge, face, mesh, object. Sab cheez ki bunyad yahin hai.",
    },
  },
  {
    id: "transforms",
    label: { en: "Transforms & Pivots", ur: "Transforms aur Pivots" },
    description: {
      en: "Move, rotate, scale. Origin, 3D cursor, pivot. These decide where the action happens from.",
      ur: "Move, rotate, scale. Origin, 3D cursor, pivot. Yeh tay karte hain ke action kahan se hoga.",
    },
  },
  {
    id: "modifiers",
    label: { en: "Modifiers & Curves", ur: "Modifiers aur Curves" },
    description: {
      en: "Non-destructive layers. Bevel, subdivision, solidify, and curve geometry.",
      ur: "Non-destructive workflow. Bevel, subdivision, solidify, curve geometry.",
    },
  },
  {
    id: "shading",
    label: { en: "Materials & Shading", ur: "Materials aur Shading" },
    description: {
      en: "Principled BSDF, emission, nodes, color management.",
      ur: "Principled BSDF, emission, nodes, color management.",
    },
  },
  {
    id: "lighting",
    label: { en: "Lighting", ur: "Lighting" },
    description: {
      en: "Point, spot, area, sun. Picking the right kind for the job.",
      ur: "Point, spot, area, sun. Kaunsi roshni kab use ho.",
    },
  },
  {
    id: "animation",
    label: { en: "Animation", ur: "Animation" },
    description: {
      en: "Keyframes, timeline, graph editor, easing.",
      ur: "Keyframes, timeline, graph editor, easing.",
    },
  },
  {
    id: "render",
    label: { en: "Render Engines", ur: "Render Engines" },
    description: {
      en: "EEVEE vs Cycles, samples, denoising, output.",
      ur: "EEVEE vs Cycles, samples, denoising, output.",
    },
  },
];
