// Bilingual content types. EN = friendly, casual English. UR = Roman Urdu.

export type Lang = "en" | "ur";

export interface T {
  en: string;
  ur: string;
}

/** Helper: short bilingual constructor */
export const t = (en: string, ur: string): T => ({ en, ur });

export const LANG_KEY = "manual-lang";
