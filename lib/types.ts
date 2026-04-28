// ────────────────────────────────────────────────
// Content model for the Ramen Shop field manual
// ────────────────────────────────────────────────

export type RichText = string; // markdown-light: **bold**, *italic*, `code`, [text](url), <kbd>…</kbd>

export interface Concept {
  /** Short, scannable name. Lowercase except proper nouns. */
  title: string;
  /** Optional one-line tagline shown under the title. */
  tagline?: string;
  /** Approximate seconds into the source video where this concept is demonstrated. */
  timestamp?: number;
  /** What it is, 1–2 sentences, no fluff. */
  whatItIs: RichText;
  /** Why it was used in *this* scene specifically. */
  whyHere: RichText;
  /** Why this and not the alternative, naming the alternative + the trade-off. */
  whyNotAlt?: RichText;
  /** Bridge from product-design / Figma mental model. */
  figmaAnalogy?: RichText;
  /** Why this matters when you build your own game assets. */
  gameDevRelevance?: RichText;
  /** A quick "do this" recipe, expressed as ordered steps. */
  recipe?: RichText[];
  /** Pitfalls / common mistakes. */
  pitfalls?: RichText[];
  /** Optional inline SVG diagram or external image. Caption is plain text. */
  visual?: { svg?: string; src?: string; alt: string; caption?: string };
}

export interface Chapter {
  /** Stable slug used in URL fragment, e.g. "chair". */
  id: string;
  /** Chapter ordinal as displayed (1-indexed). */
  number: number;
  /** Concise title, noun phrase. */
  title: string;
  /** One-sentence summary; goes in the sidebar tooltip + chapter intro. */
  summary: string;
  /** Approximate start timestamp in source video, seconds. */
  startsAt?: number;
  /** Optional editorial intro paragraph(s). */
  intro?: RichText;
  /** The concepts taught in this chapter, in tutorial order. */
  concepts: Concept[];
  /** Whether the full content is authored. Used to render a quiet placeholder. */
  status: "complete" | "stub";
}

export interface Manual {
  videoId: string;
  title: string;
  chapters: Chapter[];
}
