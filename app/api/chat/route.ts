import { NextRequest } from "next/server";
import { deepConcepts } from "@/data/deep";
import { retrieve, conceptToContext } from "@/lib/retrieval";
import { locateContext } from "@/lib/video-locator";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  lang?: "en" | "ur";
  currentConceptId?: string | null;
  currentVideoTime?: number | null;
}

const SYSTEM_PROMPT_RU = `Tum aik Blender tutor ho jo Polygon Runway ka "Ramen Shop" tutorial seekh rahe student ki madad karte ho.

Rules:
- Hamesha casual Roman Urdu mein jawab do (chill dost wali tone, jaisay user likh raha hai).
- Em-dash (—) NEVER use karo. Comma ya period use karo.
- Jawab short aur actionable rakho. Long lectures mat do.
- Jab tak user pooch na le tab tak full recipe mat dump karo.
- Jab tum kisi concept ko refer karte ho jo CONTEXT mein given hai, uski id ko backticks mein mention karo (e.g., \`bevel-modifier\`) takkay user khud bhi padh sake.
- Agar question CONTEXT mein cover nahi to honestly bolo "yeh CONTEXT mein nahi, general knowledge se bata raha hun" aur jawab do.
- Code, shortcuts, file names ko backticks ya kbd format mein wrap karo.
- Agar VIDEO POSITION block diya hua hai, to user us pal video mein wahi cheez dekh raha. Apna jawab usi context mein do (e.g., "tum jo abhi dekh rahe ho, woh X hai...").

Tumhare paas niche relevant Blender concepts ka knowledge base hai. Pehlay ussay padho, phir jawab do.`;

const SYSTEM_PROMPT_EN = `You are a Blender tutor helping a student learn the Polygon Runway "Ramen Shop" tutorial.

Rules:
- Reply in casual friendly English (no formal lecture tone).
- NEVER use em-dashes (—). Use commas or periods.
- Keep answers short and actionable. No long lectures.
- Don't dump full recipes unless asked.
- When you reference a concept that exists in CONTEXT, mention its id in backticks (e.g., \`bevel-modifier\`) so the user can look it up.
- If the question isn't covered in CONTEXT, say so honestly: "this isn't in the context, answering from general knowledge" and answer.
- Wrap code, shortcuts, file names in backticks.
- If a VIDEO POSITION block is provided, the user is currently watching that part of the tutorial. Answer in that context (e.g., "what you're seeing right now is X, and...").

Below is a knowledge base of relevant Blender concepts. Read it first, then answer.`;

function buildContext(query: string, currentConceptId: string | null): string {
  const top = retrieve(query, deepConcepts, { topK: 5, currentId: currentConceptId });
  if (top.length === 0) return "(no specific concept matched, answer from general Blender knowledge)";
  const blocks = top
    .map(({ id }) => deepConcepts.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => conceptToContext(c));
  return blocks.join("\n\n---\n\n");
}

function trimHistory(messages: ChatMessage[], maxTurns = 6): ChatMessage[] {
  // Keep the most recent N messages (user+assistant alternating).
  if (messages.length <= maxTurns) return messages;
  return messages.slice(-maxTurns);
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "OPENROUTER_API_KEY not set" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: ChatRequest;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages = trimHistory(body.messages ?? []);
  const lang = body.lang === "en" ? "en" : "ur";
  const currentConceptId = body.currentConceptId ?? null;
  const currentVideoTime = typeof body.currentVideoTime === "number" ? body.currentVideoTime : null;
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const query = lastUser?.content ?? "";

  if (!query.trim()) {
    return new Response(JSON.stringify({ error: "Empty query" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const conceptContext = buildContext(query, currentConceptId);
  const videoContext = currentVideoTime != null ? locateContext(currentVideoTime) : "";
  const systemPrompt =
    (lang === "en" ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_RU) +
    (videoContext ? "\n\nVIDEO POSITION:\n" + videoContext : "") +
    "\n\nCONTEXT:\n" +
    conceptContext;

  const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://ramen-shop-manual.vercel.app",
      "X-Title": "Ramen Shop Manual",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      stream: true,
      temperature: 0.4,
      max_tokens: 800,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text();
    return new Response(JSON.stringify({ error: "Upstream error", detail: text }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Re-emit the SSE stream as-is (OpenRouter already returns OpenAI-compatible SSE).
  return new Response(upstream.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
