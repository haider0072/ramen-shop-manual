"use client";

import { CORE_GROUPS, type CoreConcept, type CoreGroup } from "@/lib/core-types";
import { useEffect, useState } from "react";

interface Props {
  concepts: CoreConcept[];
}

export function CoreSidebar({ concepts }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elems = concepts
      .map((c) => document.getElementById(`core-${c.id}`))
      .filter((e): e is HTMLElement => e !== null);
    if (elems.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id.replace(/^core-/, ""));
        }
      },
      { rootMargin: "-88px 0px -60% 0px", threshold: 0 },
    );
    elems.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [concepts]);

  return (
    <nav className="sticky top-[88px] h-[calc(100vh-88px)] overflow-y-auto py-10 pr-4">
      <div className="text-[11px] uppercase tracking-[0.16em] text-ink-faint mb-5 font-sans font-medium">
        Core concepts
      </div>
      <div className="space-y-7">
        {CORE_GROUPS.map((g: CoreGroup) => {
          const items = concepts.filter((c) => c.group === g.id);
          if (items.length === 0) return null;
          return (
            <div key={g.id}>
              <div className="text-[11px] uppercase tracking-[0.12em] text-ink-faint mb-2 font-sans">
                {g.label}
              </div>
              <ol className="space-y-px">
                {items.map((c) => {
                  const isActive = c.id === activeId;
                  return (
                    <li key={c.id}>
                      <a
                        href={`#core-${c.id}`}
                        className={`group relative block py-1.5 pr-2 pl-3 text-[13px] leading-snug transition-colors ${
                          isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                        }`}
                      >
                        <span
                          className={`absolute left-0 top-2 bottom-2 w-px transition-colors ${
                            isActive ? "bg-accent" : "bg-transparent"
                          }`}
                        />
                        {c.title}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
