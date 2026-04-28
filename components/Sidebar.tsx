"use client";

import type { Chapter } from "@/lib/types";
import { useActiveChapter } from "./PlayerProvider";

export function Sidebar({ chapters }: { chapters: Chapter[] }) {
  const ids = chapters.map((c) => c.id);
  const activeId = useActiveChapter(ids);

  return (
    <nav className="sticky top-[88px] h-[calc(100vh-88px)] overflow-y-auto py-10 pr-4">
      <div className="text-[11px] uppercase tracking-[0.16em] text-ink-faint mb-5 font-sans font-medium">
        Contents
      </div>
      <ol className="space-y-px">
        {chapters.map((c) => {
          const isActive = c.id === activeId;
          return (
            <li key={c.id}>
              <a
                href={`#chapter-${c.id}`}
                className={`group relative block py-1.5 pr-3 pl-4 text-[13.5px] leading-snug transition-colors ${
                  isActive
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                <span
                  className={`absolute left-0 top-2 bottom-2 w-px transition-colors ${
                    isActive ? "bg-accent" : "bg-transparent"
                  }`}
                />
                <span className="font-mono text-[10.5px] text-ink-faint mr-2 tabular-nums">
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
    </nav>
  );
}
