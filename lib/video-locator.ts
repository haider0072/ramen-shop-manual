// Given a seconds timestamp into the tutorial video, find the nearest chapter
// and concept so the chat agent can ground its answer in what the user is watching.

import { manual } from "@/data/manual";
import type { Chapter, Concept } from "./types";

interface FlatPoint {
  seconds: number;
  chapter: Chapter;
  concept?: Concept;
}

let _flat: FlatPoint[] | null = null;
function flatten(): FlatPoint[] {
  if (_flat) return _flat;
  const points: FlatPoint[] = [];
  for (const ch of manual.chapters) {
    if (ch.startsAt != null) {
      points.push({ seconds: ch.startsAt, chapter: ch });
    }
    for (const c of ch.concepts) {
      if (c.timestamp != null) {
        points.push({ seconds: c.timestamp, chapter: ch, concept: c });
      }
    }
  }
  points.sort((a, b) => a.seconds - b.seconds);
  _flat = points;
  return points;
}

function fmt(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

/**
 * Locate the most recent chapter+concept the user has just passed.
 * Returns a compact text block ready to be injected into the LLM context.
 */
export function locateContext(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "";
  const points = flatten();
  if (points.length === 0) return "";

  // Find the latest point whose seconds <= current.
  let active: FlatPoint | null = null;
  for (const p of points) {
    if (p.seconds <= seconds) active = p;
    else break;
  }
  if (!active) active = points[0];

  const lines: string[] = [];
  lines.push(`User is currently at ${fmt(seconds)} in the tutorial video.`);
  lines.push(
    `Nearest section: Chapter ${active.chapter.number}, "${active.chapter.title}" (starts at ${fmt(active.chapter.startsAt ?? 0)}).`,
  );
  if (active.chapter.summary) {
    lines.push(`Chapter summary: ${active.chapter.summary}`);
  }
  if (active.concept) {
    lines.push(
      `Currently demonstrating: "${active.concept.title}" (at ${fmt(active.concept.timestamp ?? 0)}).`,
    );
    if (active.concept.tagline) lines.push(`Tagline: ${active.concept.tagline}`);
    if (active.concept.whatItIs) lines.push(`What it is: ${active.concept.whatItIs}`);
    if (active.concept.whyHere) lines.push(`Why used here: ${active.concept.whyHere}`);
  }
  return lines.join("\n");
}
