// Chapter-level retrieval over the tutorial manual.
// Used alongside deep-concept retrieval so the tutor can answer
// "chapter 11 samjh nahi aya" and similar questions.

import { manual } from "@/data/manual";
import type { Chapter } from "./types";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "of", "for", "and", "or", "in", "on", "at",
  "to", "from", "by", "with", "as", "this", "that", "what", "how", "why",
  "kya", "hai", "ka", "ki", "ke", "ko", "se", "mein", "yeh", "woh",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s+\-]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t));
}

interface ChapterIndex {
  ch: Chapter;
  primary: Set<string>;
  secondary: Set<string>;
}

let _cache: ChapterIndex[] | null = null;
function indexes(): ChapterIndex[] {
  if (_cache) return _cache;
  _cache = manual.chapters.map((ch) => {
    const primary = new Set([
      ...tokenize(ch.title),
      ...tokenize(ch.id.replace(/-/g, " ")),
    ]);
    const secondaryParts: string[] = [ch.summary, ch.intro ?? ""];
    for (const c of ch.concepts) {
      secondaryParts.push(c.title);
      if (c.tagline) secondaryParts.push(c.tagline);
    }
    return {
      ch,
      primary,
      secondary: new Set(tokenize(secondaryParts.join(" "))),
    };
  });
  return _cache;
}

/** Detect "chapter 11", "ch 11", "chap 11" etc. Returns chapter number or null. */
export function detectChapterMention(query: string): number | null {
  const m = /\b(?:chapter|chap|ch|cap)\s*\.?\s*(\d{1,2})\b/i.exec(query);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  return Number.isFinite(n) && n >= 1 && n <= manual.chapters.length ? n : null;
}

export interface ScoredChapter {
  chapter: Chapter;
  score: number;
}

/**
 * Score chapters against a query. If a chapter number is mentioned explicitly,
 * that chapter is forced first with a huge score.
 */
export function retrieveChapters(query: string, topK = 2): ScoredChapter[] {
  const idx = indexes();
  const tokens = tokenize(query);
  const explicit = detectChapterMention(query);

  const scored: ScoredChapter[] = idx.map(({ ch, primary, secondary }) => {
    let score = 0;
    for (const t of tokens) {
      if (primary.has(t)) score += 3;
      else if (secondary.has(t)) score += 1;
    }
    if (explicit && ch.number === explicit) score += 9999;
    return { chapter: ch, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

function fmt(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

/** Render a chapter into a compact context block for the LLM. */
export function chapterToContext(ch: Chapter): string {
  const lines: string[] = [];
  lines.push(`### CHAPTER ${ch.number}: ${ch.title}`);
  if (ch.startsAt != null) lines.push(`Starts at ${fmt(ch.startsAt)} in the video.`);
  lines.push(`Summary: ${ch.summary}`);
  if (ch.intro) lines.push(`Intro: ${ch.intro}`);
  if (ch.concepts.length) {
    lines.push("Concepts covered in this chapter:");
    for (const c of ch.concepts) {
      const ts = c.timestamp != null ? ` (${fmt(c.timestamp)})` : "";
      lines.push(`- ${c.title}${ts}`);
      if (c.tagline) lines.push(`  Tagline: ${c.tagline}`);
      if (c.whatItIs) lines.push(`  What: ${c.whatItIs}`);
      if (c.whyHere) lines.push(`  Why here: ${c.whyHere}`);
      if (c.recipe?.length) {
        lines.push(`  Recipe:`);
        c.recipe.forEach((r, i) => lines.push(`    ${i + 1}. ${r}`));
      }
      if (c.pitfalls?.length) {
        lines.push(`  Pitfalls:`);
        for (const p of c.pitfalls) lines.push(`    - ${p}`);
      }
    }
  }
  return lines.join("\n");
}
