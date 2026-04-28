// Lightweight keyword retrieval over deep concepts. No embeddings, no API calls.
// Builds a static searchable corpus from titles + taglines + variant names + shortcuts,
// scores user queries by token overlap with simple TF/IDF-ish weighting,
// returns the top-K concept IDs to inject into the LLM context.

import type { DeepConcept } from "./deep-types";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "of", "for", "and", "or", "but", "in", "on", "at", "to", "from", "by",
  "with", "as", "this", "that", "these", "those", "it", "its", "i", "you",
  "we", "they", "what", "how", "why", "when", "where", "do", "does", "did",
  "can", "could", "should", "would", "kya", "hai", "ka", "ki", "ke", "ko",
  "se", "mein", "par", "yeh", "woh", "main", "tum", "aur", "ya", "lekin",
  "kaise", "kahan", "kab", "kyun", "kyu",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s+\-]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t));
}

interface ConceptIndex {
  id: string;
  // Heavily-weighted tokens (title, group, tagline)
  primary: Set<string>;
  // Medium-weighted tokens (variant names, shortcut keys, related ids)
  secondary: Set<string>;
}

function buildIndex(concept: DeepConcept): ConceptIndex {
  const primaryText = [
    concept.title.en,
    concept.title.ur,
    concept.tagline.en,
    concept.tagline.ur,
    concept.id.replace(/-/g, " "),
    concept.group,
  ].join(" ");

  const secondaryParts: string[] = [];
  if (concept.shortcuts) {
    for (const s of concept.shortcuts) {
      secondaryParts.push(s.keys);
      secondaryParts.push(s.meaning.en);
    }
  }
  if (concept.variants) {
    secondaryParts.push(concept.variants.heading.en);
    for (const v of concept.variants.items) {
      secondaryParts.push(v.name);
      if (v.keys) secondaryParts.push(v.keys);
    }
  }
  if (concept.related) {
    for (const r of concept.related) {
      secondaryParts.push(r.id.replace(/-/g, " "));
    }
  }

  return {
    id: concept.id,
    primary: new Set(tokenize(primaryText)),
    secondary: new Set(tokenize(secondaryParts.join(" "))),
  };
}

let _cache: ConceptIndex[] | null = null;
function indexes(concepts: DeepConcept[]): ConceptIndex[] {
  if (_cache && _cache.length === concepts.length) return _cache;
  _cache = concepts.map(buildIndex);
  return _cache;
}

export interface ScoredConcept {
  id: string;
  score: number;
}

/**
 * Score every concept against a query, return top-K above a small threshold.
 * Boost: a concept whose id matches `currentId` gets +999 (always first).
 */
export function retrieve(
  query: string,
  concepts: DeepConcept[],
  options: { topK?: number; currentId?: string | null } = {},
): ScoredConcept[] {
  const { topK = 5, currentId = null } = options;
  const idx = indexes(concepts);
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0 && !currentId) return [];

  const scored: ScoredConcept[] = idx.map((c) => {
    let score = 0;
    for (const t of queryTokens) {
      if (c.primary.has(t)) score += 3;
      else if (c.secondary.has(t)) score += 1;
      // Partial match (substring) for compound words like "subsurf" → "subdivision"
      else {
        for (const p of c.primary) {
          if (p.includes(t) || t.includes(p)) {
            score += 0.5;
            break;
          }
        }
      }
    }
    if (currentId && c.id === currentId) score += 999;
    return { id: c.id, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

/**
 * Render a single concept down to a compact context block for the LLM.
 * Strips bilingual duplication: emits English text only (the model translates as needed).
 */
export function conceptToContext(concept: DeepConcept): string {
  const lines: string[] = [];
  lines.push(`### ${concept.title.en} (id: ${concept.id}, group: ${concept.group})`);
  lines.push(`Tagline: ${concept.tagline.en}`);
  if (concept.shortcuts?.length) {
    lines.push("Shortcuts:");
    for (const s of concept.shortcuts) {
      lines.push(`- ${s.keys}: ${s.meaning.en}`);
    }
  }
  lines.push("What it is:");
  for (const w of concept.whatItIs) lines.push(`- ${w.en}`);
  if (concept.whyItExists) {
    lines.push("Why it exists:");
    for (const w of concept.whyItExists) lines.push(`- ${w.en}`);
  }
  if (concept.howItWorks) {
    lines.push("How it works:");
    for (const w of concept.howItWorks) lines.push(`- ${w.en}`);
  }
  if (concept.variants) {
    lines.push(`Variants (${concept.variants.heading.en}):`);
    for (const v of concept.variants.items) {
      const keys = v.keys ? ` [${v.keys}]` : "";
      lines.push(`- ${v.name}${keys}: ${v.description.en}`);
      if (v.when) lines.push(`  When: ${v.when.en}`);
    }
  }
  if (concept.recipe) {
    lines.push(`Recipe${concept.recipe.heading ? ` (${concept.recipe.heading.en})` : ""}:`);
    concept.recipe.steps.forEach((s, i) => lines.push(`${i + 1}. ${s.step.en}`));
  }
  if (concept.pitfalls?.length) {
    lines.push("Pitfalls:");
    for (const p of concept.pitfalls) lines.push(`- ${p.en}`);
  }
  if (concept.realWorld?.length) {
    lines.push("Real world:");
    for (const r of concept.realWorld) lines.push(`- ${r.en}`);
  }
  return lines.join("\n");
}
