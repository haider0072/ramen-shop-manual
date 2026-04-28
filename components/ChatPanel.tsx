"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";
import { getCached, setCached } from "@/lib/chat-cache";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "chat-history-v1";
const MAX_HISTORY = 12;

function loadHistory(): Msg[] {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Msg[];
  } catch {
    return [];
  }
}

function saveHistory(messages: Msg[]) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_HISTORY)));
  } catch {}
}

function detectCurrentConcept(): string | null {
  if (typeof window === "undefined") return null;
  if (!window.location.pathname.startsWith("/core")) return null;
  // Find the concept article whose top is closest to (but above) the active band.
  const articles = Array.from(document.querySelectorAll<HTMLElement>("article[id^='core-']"));
  let active: string | null = null;
  for (const a of articles) {
    const top = a.getBoundingClientRect().top;
    if (top - 140 <= 0) {
      active = a.id.replace(/^core-/, "");
    } else {
      break;
    }
  }
  return active;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ChatPanel({ open, onClose }: Props) {
  const { lang } = useLang();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setMessages(loadHistory());
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, streaming]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function send() {
    const q = input.trim();
    if (!q || streaming) return;

    const conceptId = detectCurrentConcept();
    setError(null);
    setInput("");

    const userMsg: Msg = { role: "user", content: q };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);

    // Cache check
    const cached = await getCached(q, lang, conceptId);
    if (cached) {
      const finalHistory = [...newHistory, { role: "assistant" as const, content: cached + "\n\n_(cached)_" }];
      setMessages(finalHistory);
      saveHistory(finalHistory);
      return;
    }

    setStreaming(true);
    setMessages([...newHistory, { role: "assistant", content: "" }]);

    const ac = new AbortController();
    abortRef.current = ac;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newHistory,
          lang,
          currentConceptId: conceptId,
        }),
        signal: ac.signal,
      });

      if (!res.ok || !res.body) {
        const txt = await res.text().catch(() => "");
        throw new Error(`API error ${res.status}: ${txt.slice(0, 200)}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            const delta = json?.choices?.[0]?.delta?.content ?? "";
            if (delta) {
              acc += delta;
              setMessages((curr) => {
                const next = [...curr];
                next[next.length - 1] = { role: "assistant", content: acc };
                return next;
              });
            }
          } catch {
            // ignore malformed chunks
          }
        }
      }

      const finalHistory = [...newHistory, { role: "assistant" as const, content: acc }];
      saveHistory(finalHistory);
      if (acc) await setCached(q, lang, conceptId, acc);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      setError(msg);
      setMessages((curr) => {
        const next = [...curr];
        if (next.length > 0 && next[next.length - 1].role === "assistant" && !next[next.length - 1].content) {
          next.pop();
        }
        return next;
      });
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }

  function clearChat() {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    saveHistory([]);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end pointer-events-none">
      <div
        className="absolute inset-0 bg-paper/40 backdrop-blur-[2px] pointer-events-auto"
        onClick={onClose}
        aria-hidden
      />
      <aside className="relative pointer-events-auto w-full sm:w-[440px] h-full bg-paper hairline-l flex flex-col">
        <header className="flex items-center justify-between px-5 h-[56px] hairline-b">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[12px] uppercase tracking-[0.14em] font-sans font-medium text-ink">
              {lang === "en" ? "Tutor" : "Tutor"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="text-[11px] uppercase tracking-[0.12em] text-ink-muted hover:text-ink px-2 py-1"
              >
                {lang === "en" ? "Clear" : "Clear"}
              </button>
            )}
            <button
              onClick={onClose}
              className="text-ink-muted hover:text-ink p-1.5"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
          {messages.length === 0 && !streaming && (
            <div className="text-[13px] text-ink-muted leading-relaxed font-sans">
              {lang === "en" ? (
                <>
                  Ask anything about the tutorial or Blender. The tutor knows
                  all 56 deep concepts and pulls in whatever's most relevant.
                  <br />
                  <br />
                  Try: <em>&quot;bevel use kab karna chahiye?&quot;</em> or{" "}
                  <em>&quot;normals flip kaise theek karun&quot;</em>.
                </>
              ) : (
                <>
                  Tutorial ya Blender ke baray mein kuch bhi pucho. Tutor ko
                  saare 56 deep concepts ka pata hai aur jo relevant hai woh
                  pull karta hai.
                  <br />
                  <br />
                  Try: <em>&quot;bevel use kab karna chahiye?&quot;</em> ya{" "}
                  <em>&quot;normals flip kaise theek karun&quot;</em>.
                </>
              )}
            </div>
          )}
          {messages.map((m, i) => (
            <ChatBubble key={i} role={m.role} content={m.content} streaming={streaming && i === messages.length - 1 && m.role === "assistant"} />
          ))}
          {error && (
            <div className="text-[12px] text-red-600 dark:text-red-400 font-mono whitespace-pre-wrap">
              {error}
            </div>
          )}
        </div>

        <form
          className="hairline-t px-4 py-3"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder={lang === "en" ? "Ask something..." : "Kuch pucho..."}
              rows={1}
              className="flex-1 resize-none bg-transparent text-[14px] text-ink placeholder:text-ink-faint outline-none py-2 px-2.5 rounded-sm border border-rule focus:border-ink-muted leading-snug max-h-32 font-sans"
              disabled={streaming}
            />
            <button
              type="submit"
              disabled={streaming || !input.trim()}
              className="text-[12px] uppercase tracking-[0.12em] font-sans font-medium px-3 h-9 rounded-sm bg-ink text-paper disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
            >
              {streaming ? "..." : "Send"}
            </button>
          </div>
          <p className="text-[10.5px] text-ink-faint font-sans mt-1.5 px-1">
            {lang === "en"
              ? "Gemini 2.5 Flash · context-aware · cached"
              : "Gemini 2.5 Flash · context-aware · cached"}
          </p>
        </form>
      </aside>
    </div>
  );
}

function ChatBubble({ role, content, streaming }: { role: "user" | "assistant"; content: string; streaming: boolean }) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] bg-kbd-bg/70 rounded-md px-3.5 py-2.5 text-[14px] leading-relaxed text-ink whitespace-pre-wrap">
          {content}
        </div>
      </div>
    );
  }
  return (
    <div className="text-[14px] leading-relaxed text-ink whitespace-pre-wrap">
      {renderAssistant(content)}
      {streaming && <span className="inline-block w-1.5 h-3.5 bg-ink-muted ml-0.5 align-text-bottom animate-pulse" />}
    </div>
  );
}

// Light markdown render: backticks for code, **bold**, links to /core#core-id when concept id mentioned in backticks.
function renderAssistant(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const re = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(<span key={key++}>{text.slice(last, m.index)}</span>);
    const tok = m[0];
    if (tok.startsWith("`")) {
      const inner = tok.slice(1, -1);
      // Concept id heuristic: lowercase + dash, exists in our deep set?
      if (/^[a-z0-9-]+$/.test(inner) && inner.includes("-")) {
        parts.push(
          <a key={key++} href={`/core#core-${inner}`} className="font-mono text-[0.92em] text-accent underline underline-offset-4 decoration-dotted">
            {inner}
          </a>,
        );
      } else {
        parts.push(
          <code key={key++} className="font-mono text-[0.92em] text-ink bg-kbd-bg/60 px-1 py-px rounded-sm">
            {inner}
          </code>,
        );
      }
    } else if (tok.startsWith("**")) {
      parts.push(
        <strong key={key++} className="text-ink">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else if (tok.startsWith("[")) {
      const linkM = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok);
      if (linkM) {
        parts.push(
          <a key={key++} href={linkM[2]} className="text-accent underline underline-offset-4">
            {linkM[1]}
          </a>,
        );
      }
    }
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(<span key={key++}>{text.slice(last)}</span>);
  return <>{parts}</>;
}
