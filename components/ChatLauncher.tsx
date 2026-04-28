"use client";

import { useEffect, useState } from "react";
import { ChatPanel } from "./ChatPanel";
import { useLang } from "./LangProvider";

export function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K opens chat
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 h-10 rounded-sm bg-ink text-paper hairline-t shadow-sm hover:opacity-90 transition-opacity"
        aria-label="Open tutor"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 4.5C2 3.4 2.9 2.5 4 2.5h6c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2H6.5L4 12V9.5h0c-1.1 0-2-0.9-2-2v-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
        <span className="text-[12px] uppercase tracking-[0.14em] font-sans font-medium">
          {lang === "en" ? "Ask" : "Ask"}
        </span>
        <span className="text-[10px] font-mono text-paper/60 ml-1 hidden sm:inline">⌘K</span>
      </button>
      <ChatPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
