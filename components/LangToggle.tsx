"use client";

import { useLang } from "./LangProvider";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center gap-px rounded-sm hairline-t hairline-b border border-rule overflow-hidden text-[11px] font-sans font-medium uppercase tracking-[0.12em]">
      <button
        onClick={() => setLang("ur")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "ur" ? "text-ink bg-kbd-bg" : "text-ink-muted hover:text-ink"
        }`}
        aria-pressed={lang === "ur"}
      >
        RU
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "en" ? "text-ink bg-kbd-bg" : "text-ink-muted hover:text-ink"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
