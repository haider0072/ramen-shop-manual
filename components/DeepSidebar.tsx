"use client";

import { DEEP_GROUPS, type DeepConcept } from "@/lib/deep-types";
import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";

export function DeepSidebar({ concepts }: { concepts: DeepConcept[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const { lang } = useLang();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = concepts.map((c) => c.id);
    // Offset matches sticky header (64px) + a bit of breathing room.
    const OFFSET = 120;

    const computeActive = () => {
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(`core-${id}`);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - OFFSET <= 0) {
          current = id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    computeActive();
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        computeActive();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [concepts]);

  return (
    <nav className="sticky top-[88px] h-[calc(100vh-88px)] overflow-y-auto py-10 pr-4">
      <div className="text-[11px] uppercase tracking-[0.16em] text-ink-faint mb-5 font-sans font-medium">
        {lang === "en" ? "Core concepts" : "Core concepts"}
      </div>
      <div className="space-y-7">
        {DEEP_GROUPS.map((g) => {
          const items = concepts.filter((c) => c.group === g.id);
          if (items.length === 0) return null;
          return (
            <div key={g.id}>
              <div className="text-[11px] uppercase tracking-[0.12em] text-ink-faint mb-2 font-sans">
                {g.label[lang]}
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
                        {c.title[lang]}
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
