"use client";

import type { Chapter } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

interface Props {
  chapters: Chapter[];
}

export function MobileChapterBar({ chapters }: Props) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elems = chapters
      .map((c) => document.getElementById(`chapter-${c.id}`))
      .filter((e): e is HTMLElement => e !== null);
    if (elems.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id.replace(/^chapter-/, ""));
        }
      },
      { rootMargin: "-128px 0px -60% 0px", threshold: 0 },
    );
    elems.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [chapters]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const active = chapters.find((c) => c.id === activeId) ?? chapters[0];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-between w-full hairline-t hairline-b px-5 sm:px-8 py-3 bg-paper text-left text-ink"
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-[10.5px] text-ink-faint tabular-nums shrink-0">
            {String(active.number).padStart(2, "0")}
          </span>
          <span className="text-[13px] truncate font-sans">{active.title}</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.14em] text-ink-faint font-sans font-medium ml-3 shrink-0">
          Index
        </span>
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-paper"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
        >
          <div className="hairline-b h-[64px] flex items-center justify-between px-5 sm:px-8">
            <span className="text-[11px] uppercase tracking-[0.16em] text-ink-faint font-sans font-medium">
              Chapters
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-[12px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink font-sans font-medium"
            >
              Close
            </button>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-64px)] pb-10">
            <ol className="px-3 py-4">
              {chapters.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <li key={c.id}>
                    <a
                      href={`#chapter-${c.id}`}
                      onClick={() => setOpen(false)}
                      className={`group relative block py-2.5 pr-3 pl-4 text-[14px] leading-snug ${
                        isActive ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-3 bottom-3 w-px ${
                          isActive ? "bg-accent" : "bg-transparent"
                        }`}
                      />
                      <span className="font-mono text-[10.5px] text-ink-faint mr-3 tabular-nums">
                        {String(c.number).padStart(2, "0")}
                      </span>
                      {c.title}
                      {c.status === "stub" && (
                        <span className="ml-2 text-[10px] text-ink-faint italic">
                          draft
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
