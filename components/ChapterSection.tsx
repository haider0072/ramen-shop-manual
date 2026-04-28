"use client";

import type { Chapter } from "@/lib/types";
import { ConceptBlock } from "./ConceptBlock";
import { RichText } from "./RichText";
import { formatTimestamp, usePlayer } from "./PlayerProvider";

export function ChapterSection({ chapter }: { chapter: Chapter }) {
  const { seek } = usePlayer();
  const num = String(chapter.number).padStart(2, "0");

  return (
    <section
      id={`chapter-${chapter.id}`}
      className="py-20 border-t border-rule first:border-t-0 first:pt-8"
    >
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4 text-[11px] uppercase tracking-[0.18em] text-ink-faint font-sans font-medium">
          <span>Chapter {num}</span>
          <span className="w-6 h-px bg-rule-strong" />
          {chapter.startsAt !== undefined && (
            <button
              onClick={() => seek(chapter.startsAt!)}
              className="hover:text-accent transition-colors"
            >
              {formatTimestamp(chapter.startsAt)}
            </button>
          )}
        </div>
        <h2 className="font-serif text-[2.5rem] md:text-[3rem] leading-[1.05] tracking-[-0.02em] text-ink mb-4">
          {chapter.title}
        </h2>
        <p className="prose-reader text-ink-muted max-w-[58ch] text-[1.05rem]">
          {chapter.summary}
        </p>
      </header>

      {chapter.intro && (
        <div className="prose-reader max-w-[58ch] mb-6 text-[17px]">
          <p>
            <RichText>{chapter.intro}</RichText>
          </p>
        </div>
      )}

      {chapter.status === "stub" ? (
        <div className="mt-10 pt-8 hairline-t">
          <p className="font-sans text-sm text-ink-muted">
            Yeh chapter abhi authored nahi hua. Chapter 11 (Chair) ko reference
            ke taur pe parho, agar quality theek lage, baaki chapters bhi
            isi structure mein likhe jaayenge.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {chapter.concepts.map((c, i) => (
            <ConceptBlock key={c.title} concept={c} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
