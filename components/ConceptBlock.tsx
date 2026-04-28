"use client";

import type { Concept } from "@/lib/types";
import { RichText } from "./RichText";
import { formatTimestamp, usePlayer } from "./PlayerProvider";

interface Props {
  concept: Concept;
  index: number;
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-8 gap-y-2 py-5 hairline-t">
      <div className="text-[11px] uppercase tracking-[0.14em] text-ink-faint pt-1 font-sans font-medium">
        {label}
      </div>
      <div className="prose-reader text-[15.5px]">{children}</div>
    </div>
  );
}

export function ConceptBlock({ concept, index }: Props) {
  const { seek } = usePlayer();
  const numStr = String(index + 1).padStart(2, "0");

  return (
    <article className="py-10">
      <header className="flex items-baseline gap-5 mb-6">
        <span className="font-mono text-xs text-ink-faint mt-2">{numStr}</span>
        <div className="flex-1">
          <h3 className="font-serif text-[1.65rem] leading-tight tracking-[-0.01em] text-ink">
            {concept.title}
          </h3>
          {concept.tagline && (
            <p className="prose-reader mt-1.5 text-ink-muted text-[15px] italic">
              <RichText>{concept.tagline}</RichText>
            </p>
          )}
          {concept.timestamp !== undefined && (
            <button
              onClick={() => seek(concept.timestamp!)}
              className="mt-3 inline-flex items-center gap-2 text-[12px] font-sans text-ink-muted hover:text-accent transition-colors group"
              aria-label={`Watch from ${formatTimestamp(concept.timestamp)}`}
            >
              <span className="inline-block w-3 h-3 border border-current rounded-full relative">
                <span className="absolute top-1/2 left-1/2 w-0 h-0 -translate-y-1/2 -translate-x-[1px] border-l-[4px] border-l-current border-y-[3px] border-y-transparent" />
              </span>
              Watch from {formatTimestamp(concept.timestamp)}
            </button>
          )}
        </div>
      </header>

      {concept.visual && (
        <figure className="mb-6 mt-2 px-4 py-6 hairline-t hairline-b text-ink-muted">
          {concept.visual.svg ? (
            <div
              className="w-full max-w-[640px] mx-auto [&_svg]:w-full [&_svg]:h-auto"
              dangerouslySetInnerHTML={{ __html: concept.visual.svg }}
              role="img"
              aria-label={concept.visual.alt}
            />
          ) : concept.visual.src ? (
            <img
              src={concept.visual.src}
              alt={concept.visual.alt}
              className="w-full max-w-[640px] mx-auto"
            />
          ) : null}
          {concept.visual.caption && (
            <figcaption className="text-center text-[11.5px] font-sans text-ink-faint mt-3 italic">
              {concept.visual.caption}
            </figcaption>
          )}
        </figure>
      )}

      <Section label="What it is">
        <RichText>{concept.whatItIs}</RichText>
      </Section>

      <Section label="Why here">
        <RichText>{concept.whyHere}</RichText>
      </Section>

      {concept.whyNotAlt && (
        <Section label="Why not the alt">
          <RichText>{concept.whyNotAlt}</RichText>
        </Section>
      )}

      {concept.figmaAnalogy && (
        <Section label="From Figma">
          <RichText>{concept.figmaAnalogy}</RichText>
        </Section>
      )}

      {concept.gameDevRelevance && (
        <Section label="For game dev">
          <RichText>{concept.gameDevRelevance}</RichText>
        </Section>
      )}

      {concept.recipe && concept.recipe.length > 0 && (
        <Section label="Recipe">
          <ol className="space-y-2.5 list-none counter-reset-recipe pl-0">
            {concept.recipe.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-xs text-ink-faint pt-[3px] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <RichText>{step}</RichText>
                </span>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {concept.pitfalls && concept.pitfalls.length > 0 && (
        <Section label="Watch out">
          <ul className="space-y-2.5 list-none pl-0">
            {concept.pitfalls.map((p, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-sans text-ink-faint pt-[2px] select-none">
                  ※
                </span>
                <span className="flex-1">
                  <RichText>{p}</RichText>
                </span>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </article>
  );
}
