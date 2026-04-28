import type { CoreConcept } from "@/lib/core-types";
import { RichText } from "./RichText";

export function CoreConceptCard({ concept }: { concept: CoreConcept }) {
  return (
    <article id={`core-${concept.id}`} className="py-12 border-t border-rule first:border-t-0 first:pt-0">
      <header className="mb-5">
        <h3 className="font-serif text-[1.85rem] leading-tight tracking-[-0.01em] text-ink">
          {concept.title}
        </h3>
        {concept.tagline && (
          <p className="mt-1.5 text-ink-muted text-[15px] italic font-sans">
            {concept.tagline}
          </p>
        )}
      </header>

      {concept.shortcuts && concept.shortcuts.length > 0 && (
        <dl className="mb-6 grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-6 gap-y-1.5 hairline-t hairline-b py-4">
          {concept.shortcuts.map((s, i) => (
            <div key={i} className="contents">
              <dt className="font-mono text-[12px] text-ink whitespace-nowrap">
                <kbd className="kbd">{s.keys}</kbd>
              </dt>
              <dd className="text-[14px] text-ink-muted font-sans">{s.meaning}</dd>
            </div>
          ))}
        </dl>
      )}

      {concept.visual && (
        <figure className="mb-6 px-4 py-6 hairline-t hairline-b text-ink-muted">
          {concept.visual.svg ? (
            <div
              className="w-full max-w-[560px] mx-auto [&_svg]:w-full [&_svg]:h-auto"
              dangerouslySetInnerHTML={{ __html: concept.visual.svg }}
              role="img"
              aria-label={concept.visual.alt}
            />
          ) : null}
          {concept.visual.caption && (
            <figcaption className="text-center text-[11.5px] font-sans text-ink-faint mt-3 italic">
              {concept.visual.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="prose-reader text-[15.5px] space-y-4 max-w-[62ch]">
        {concept.body.map((p, i) => (
          <p key={i}>
            <RichText>{p}</RichText>
          </p>
        ))}
      </div>

      {concept.pitfalls && concept.pitfalls.length > 0 && (
        <div className="mt-6 pt-5 hairline-t">
          <div className="text-[11px] uppercase tracking-[0.14em] text-ink-faint mb-3 font-sans font-medium">
            Watch out
          </div>
          <ul className="space-y-2.5 list-none pl-0 max-w-[62ch]">
            {concept.pitfalls.map((p, i) => (
              <li key={i} className="flex gap-4 text-[14.5px] font-sans">
                <span className="text-ink-faint pt-[2px] select-none">※</span>
                <span className="flex-1">
                  <RichText>{p}</RichText>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
