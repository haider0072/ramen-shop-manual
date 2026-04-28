// Tiny localStorage cache for chat answers. Hash of (lang + currentConceptId + question)
// → final assistant text. 24h TTL. Reduces cost on repeat questions.

const TTL_MS = 24 * 60 * 60 * 1000;
const PREFIX = "chat-cache-v1:";

async function hash(input: string): Promise<string> {
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const data = new TextEncoder().encode(input);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf))
      .slice(0, 12)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }
  // Fallback (very weak), only triggers in old browsers
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) | 0;
  return h.toString(16);
}

export async function getCached(
  question: string,
  lang: string,
  conceptId: string | null,
): Promise<string | null> {
  if (typeof localStorage === "undefined") return null;
  const key = PREFIX + (await hash(`${lang}|${conceptId ?? ""}|${question}`));
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const obj = JSON.parse(raw) as { t: number; v: string };
    if (Date.now() - obj.t > TTL_MS) {
      localStorage.removeItem(key);
      return null;
    }
    return obj.v;
  } catch {
    return null;
  }
}

export async function setCached(
  question: string,
  lang: string,
  conceptId: string | null,
  value: string,
): Promise<void> {
  if (typeof localStorage === "undefined") return;
  const key = PREFIX + (await hash(`${lang}|${conceptId ?? ""}|${question}`));
  try {
    localStorage.setItem(key, JSON.stringify({ t: Date.now(), v: value }));
  } catch {
    // Quota exceeded or disabled; silently ignore.
  }
}
