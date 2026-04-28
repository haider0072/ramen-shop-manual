"use client";

import type { DeepConcept } from "@/lib/deep-types";
import { BiText } from "./BiText";
import { useLang } from "./LangProvider";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.16em] text-ink-faint mb-3 font-sans font-medium">
      {children}
    </div>
  );
}

function Para({ value }: { value: { en: string; ur: string } }) {
  return (
    <p>
      <BiText value={value} />
    </p>
  );
}

export function DeepCard({ concept }: { concept: DeepConcept }) {
  const { lang } = useLang();

  return (
    <article id={`core-${concept.id}`} className="py-14 border-t border-rule first:border-t-0 first:pt-0 scroll-mt-24">
      <header className="mb-6">
        <h3 className="font-serif text-[2rem] sm:text-[2.25rem] leading-tight tracking-[-0.015em] text-ink">
          <BiText value={concept.title} />
        </h3>
        <p className="mt-2 text-ink-muted text-[15.5px] italic font-sans max-w-[62ch]">
          <BiText value={concept.tagline} />
        </p>
      </header>

      {concept.shortcuts && concept.shortcuts.length > 0 && (
        <dl className="mb-8 grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-6 gap-y-2 hairline-t hairline-b py-4">
          {concept.shortcuts.map((s, i) => (
            <div key={i} className="contents">
              <dt className="font-mono text-[12px] text-ink whitespace-nowrap">
                <kbd className="kbd">{s.keys}</kbd>
              </dt>
              <dd className="text-[14px] text-ink-muted font-sans">
                <BiText value={s.meaning} />
              </dd>
            </div>
          ))}
        </dl>
      )}

      {concept.visual && (
        <figure className="mb-8 px-4 py-6 hairline-t hairline-b text-ink-muted">
          {concept.visual.svg ? (
            <div
              className="w-full max-w-[640px] mx-auto [&_svg]:w-full [&_svg]:h-auto"
              dangerouslySetInnerHTML={{ __html: concept.visual.svg }}
              role="img"
              aria-label={concept.visual.alt[lang]}
            />
          ) : concept.visual.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={concept.visual.src} alt={concept.visual.alt[lang]} className="w-full max-w-[640px] mx-auto" />
          ) : null}
          {concept.visual.caption && (
            <figcaption className="text-center text-[11.5px] font-sans text-ink-faint mt-3 italic">
              <BiText value={concept.visual.caption} />
            </figcaption>
          )}
        </figure>
      )}

      <section className="mb-8 max-w-[64ch]">
        <SectionHeader>{lang === "en" ? "What it is" : "Yeh hai kya"}</SectionHeader>
        <div className="prose-reader text-[15.5px] space-y-3.5">
          {concept.whatItIs.map((p, i) => <Para key={i} value={p} />)}
        </div>
      </section>

      {concept.whyItExists && concept.whyItExists.length > 0 && (
        <section className="mb-8 max-w-[64ch]">
          <SectionHeader>{lang === "en" ? "Why it exists" : "Yeh banaya kyun gaya"}</SectionHeader>
          <div className="prose-reader text-[15.5px] space-y-3.5">
            {concept.whyItExists.map((p, i) => <Para key={i} value={p} />)}
          </div>
        </section>
      )}

      {concept.howItWorks && concept.howItWorks.length > 0 && (
        <section className="mb-8 max-w-[64ch]">
          <SectionHeader>{lang === "en" ? "How it works" : "Andar se kaise chalta hai"}</SectionHeader>
          <div className="prose-reader text-[15.5px] space-y-3.5">
            {concept.howItWorks.map((p, i) => <Para key={i} value={p} />)}
          </div>
        </section>
      )}

      {concept.variants && concept.variants.items.length > 0 && (
        <section className="mb-10">
          <SectionHeader>
            <BiText value={concept.variants.heading} />
          </SectionHeader>
          <ul className="space-y-5">
            {concept.variants.items.map((v, i) => (
              <li key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-8 gap-y-1 hairline-t pt-4">
                <div>
                  <div className="font-mono text-[13px] text-ink">{v.name}</div>
                  {v.keys && (
                    <div className="mt-1.5">
                      <kbd className="kbd">{v.keys}</kbd>
                    </div>
                  )}
                </div>
                <div className="prose-reader text-[15px] space-y-2 max-w-[58ch]">
                  <p><BiText value={v.description} /></p>
                  {v.when && (
                    <p className="text-ink-muted">
                      <em><BiText value={v.when} /></em>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {concept.recipe && concept.recipe.steps.length > 0 && (
        <section className="mb-8 max-w-[64ch]">
          <SectionHeader>
            {concept.recipe.heading ? <BiText value={concept.recipe.heading} /> : (lang === "en" ? "Recipe" : "Tareeqa")}
          </SectionHeader>
          <ol className="space-y-3">
            {concept.recipe.steps.map((s, i) => (
              <li key={i} className="flex gap-4 text-[15px] font-sans">
                <span className="font-mono text-[12px] text-ink-faint pt-[3px] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 prose-reader">
                  <BiText value={s.step} />
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {concept.pitfalls && concept.pitfalls.length > 0 && (
        <section className="mb-8 max-w-[64ch]">
          <SectionHeader>{lang === "en" ? "Watch out" : "Dhyan rakho"}</SectionHeader>
          <ul className="space-y-2.5 list-none pl-0">
            {concept.pitfalls.map((p, i) => (
              <li key={i} className="flex gap-4 text-[14.5px] font-sans">
                <span className="text-ink-faint pt-[2px] select-none">※</span>
                <span className="flex-1">
                  <BiText value={p} />
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {concept.realWorld && concept.realWorld.length > 0 && (
        <section className="mb-8 max-w-[64ch]">
          <SectionHeader>{lang === "en" ? "In the wild" : "Asal duniya mein"}</SectionHeader>
          <div className="prose-reader text-[15.5px] space-y-3.5">
            {concept.realWorld.map((p, i) => <Para key={i} value={p} />)}
          </div>
        </section>
      )}

      {concept.related && concept.related.length > 0 && (
        <section className="max-w-[64ch] hairline-t pt-5">
          <SectionHeader>{lang === "en" ? "Related" : "Yeh bhi parho"}</SectionHeader>
          <ul className="space-y-1.5">
            {concept.related.map((r, i) => (
              <li key={i} className="text-[14px] font-sans">
                <a href={`#core-${r.id}`} className="text-accent underline underline-offset-4">
                  {r.id}
                </a>
                <span className="text-ink-muted ml-2">
                  <BiText value={r.note} />
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
