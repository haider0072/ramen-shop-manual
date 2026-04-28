"use client";

// Bilingual text renderer. Picks language from context, runs through the
// markdown-light tokenizer (bold, italic, code, kbd, links).

import React from "react";
import { useLang } from "./LangProvider";
import type { T } from "@/lib/i18n";

type Token =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "italic"; value: string }
  | { type: "code"; value: string }
  | { type: "kbd"; value: string }
  | { type: "link"; text: string; href: string };

const PATTERNS: Array<{ re: RegExp; build: (m: RegExpExecArray) => Token }> = [
  { re: /<kbd>([^<]+)<\/kbd>/, build: (m) => ({ type: "kbd", value: m[1] }) },
  { re: /\*\*([^*]+)\*\*/, build: (m) => ({ type: "bold", value: m[1] }) },
  { re: /\*([^*]+)\*/, build: (m) => ({ type: "italic", value: m[1] }) },
  { re: /`([^`]+)`/, build: (m) => ({ type: "code", value: m[1] }) },
  { re: /\[([^\]]+)\]\(([^)]+)\)/, build: (m) => ({ type: "link", text: m[1], href: m[2] }) },
];

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let remaining = input;
  while (remaining.length > 0) {
    let earliest: { idx: number; len: number; token: Token } | null = null;
    for (const p of PATTERNS) {
      const m = p.re.exec(remaining);
      if (m && (earliest === null || m.index < earliest.idx)) {
        earliest = { idx: m.index, len: m[0].length, token: p.build(m) };
      }
    }
    if (earliest === null) {
      tokens.push({ type: "text", value: remaining });
      break;
    }
    if (earliest.idx > 0) tokens.push({ type: "text", value: remaining.slice(0, earliest.idx) });
    tokens.push(earliest.token);
    remaining = remaining.slice(earliest.idx + earliest.len);
  }
  return tokens;
}

export function BiText({ value }: { value: T }) {
  const { lang } = useLang();
  const str = value[lang] ?? value.ur ?? value.en ?? "";
  const tokens = tokenize(str);
  return (
    <>
      {tokens.map((t, i) => {
        switch (t.type) {
          case "text":
            return <React.Fragment key={i}>{t.value}</React.Fragment>;
          case "bold":
            return <strong key={i}>{t.value}</strong>;
          case "italic":
            return <em key={i}>{t.value}</em>;
          case "code":
            return (
              <code key={i} className="font-mono text-[0.92em] text-ink bg-kbd-bg/60 px-1 py-px rounded-sm">
                {t.value}
              </code>
            );
          case "kbd":
            return (
              <kbd key={i} className="kbd">
                {t.value}
              </kbd>
            );
          case "link":
            return (
              <a key={i} href={t.href} target={t.href.startsWith("/") ? undefined : "_blank"} rel="noreferrer">
                {t.text}
              </a>
            );
        }
      })}
    </>
  );
}
