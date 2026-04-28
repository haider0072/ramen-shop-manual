import type { Chapter } from "@/lib/types";

export const interiorLightChapter: Chapter = {
  id: "interior-light",
  number: 15,
  title: "Interior Lighting",
  summary:
    "Shop ke andar warm ambient point light, phir do dramatic spotlights symmetrically. Real-world ko mimic karne ka approach.",
  startsAt: 3340,
  status: "complete",
  intro:
    "Materials done, ab lighting. Tutorial author ka mantra: jahan real life mein light hoti, wahan light rakho. Andar ek soft point light, phir do focused spotlights. Yahin se scene 'render quality' lagne lagti hai.",
  concepts: [
    {
      title: "Point light shop ke andar",
      tagline: "Cursor reset, point light add, warm color, low strength.",
      timestamp: 3350,
      whatItIs:
        "`Shift+S → Cursor to World Origin` se cursor reset. `Shift+A → Light → Point` se point light add. `G Z` se shop ke roof ke neeche le jao. Properties (light icon) mein color warm orange (3200K equivalent), power 50-100W. Yeh ambient interior glow deta hai.",
      whyHere:
        "Point light har direction mein roshni nikalta hai, jo ambient lighting ke liye sahi hai. Soft warm color yeh suggest karta hai ke andar bulb hai.",
    },
    {
      title: "Do spotlights symmetric placement",
      tagline: "Ek spot, alt+D se mirror, opposite side. Drama add.",
      timestamp: 3420,
      whatItIs:
        "`Shift+A → Light → Spot` se spotlight add karo. Position adjust, niche point karo. Power 200-500W (spot lights point se zyada strong). Color warm. **Blend** value (cone edge softness) increase karo for soft falloff. **Spot Size** (cone angle) bhi adjust. Phir `Alt+D` se linked duplicate, `G X` se opposite side mein move. Symmetrical lighting ban gayi.",
      whyHere:
        "Symmetric drama interior scene mein 'cinematic' feel deta hai. Single light flat lagti hai, do focused lights depth aur shadow add karte hain.",
      recipe: [
        "`Shift+A → Light → Spot`. Light add hua.",
        "`G Z` se neeche karo, point spotlight ko target par.",
        "Properties → Power 250W approx.",
        "Color warm orange.",
        "Spot Size (cone width) angle adjust.",
        "Blend (edge softness) 0.5 around.",
        "`Alt+D` linked duplicate, `G X` opposite side.",
      ],
      pitfalls: [
        "Spotlights ko 'aim' karne ke liye `Ctrl+Numpad-0` press karke spot light ko 'view through' karte hain (jaise camera). Phir orbit karke direction adjust kar sakte ho. Yeh advanced trick lekin time bachata hai.",
      ],
    },
  ],
};
