import type { DeepConcept } from "@/lib/deep-types";

export const localViewConcept: DeepConcept = {
  id: "local-view",
  group: "interface",
  title: { en: "Local View", ur: "Local View" },
  tagline: {
    en: "Isolate one object (or one face) and hide everything else from the viewport. A focus mode for when the scene is busy.",
    ur: "Ek object (ya face) isolate karo aur baki sab viewport se hide karo. Focus mode jab scene busy ho.",
  },
  shortcuts: [
    { keys: "/  (numpad)", meaning: { en: "Toggle local view on the current selection.", ur: "Current selection par local view toggle." } },
  ],
  whatItIs: [
    {
      en: "Press `/` (numpad) with something selected and the viewport instantly hides everything else. Only what you had selected remains visible. Press `/` again to bring everything back. The 3D camera framing also adjusts so the isolated object fills the view.",
      ur: "Kuch select karke `/` (numpad) press karo aur viewport instantly baki sab hide. Sirf jo selected tha woh visible. `/` dobara press se sab wapas. 3D camera framing bhi adjust hoti taakay isolated object view fill kare.",
    },
    {
      en: "Local view also works in Edit Mode. Select a few faces, press `/`, and only those faces and their immediate neighbors stay visible. Useful for poking at one corner of a complex mesh without distraction.",
      ur: "Local view Edit Mode mein bhi chalti. Kuch faces select, `/` press, aur sirf woh faces aur unke immediate neighbors visible. Complex mesh ke ek corner par bina distraction kaam karne ke liye useful.",
    },
  ],
  whyItExists: [
    {
      en: "Modeling at 50% zoom while a complex scene swirls around you is mentally taxing. Local view gives your eyes a single subject to focus on. The brain stops parallel-processing the rest of the scene and you work faster.",
      ur: "50% zoom par modeling karna jab complex scene around swirl ho rahi mentally taxing hai. Local view aankhon ko ek subject focus karne deti. Brain rest of the scene ko parallel-process karna band karta aur tum fast kaam karte ho.",
    },
  ],
  recipe: {
    steps: [
      { step: { en: "Select an object (or several).", ur: "Ek object select karo (ya kai)." } },
      { step: { en: "Press `/` (numpad). Everything else fades from view.", ur: "`/` (numpad) press. Baki sab view se gayab." } },
      { step: { en: "Work freely. Add modifiers, sculpt, anything.", ur: "Freely kaam karo. Modifiers add, sculpt, kuch bhi." } },
      { step: { en: "Press `/` again to exit local view. The full scene returns.", ur: "`/` dobara se local view exit. Full scene wapas." } },
    ],
  },
  pitfalls: [
    { en: "If you don't have a numpad, you need to bind '/' to a regular key in Preferences → Input → 3D View → Local View Toggle. Or enable 'Emulate Numpad' in Preferences.", ur: "Numpad nahi hai to '/' ko regular key par bind karna parta Preferences → Input → 3D View → Local View Toggle. Ya 'Emulate Numpad' Preferences mein on karo." },
    { en: "Adding a new object while in local view: it spawns in local view too, so it might seem 'invisible' to you back in normal view (it's there, just need to bring it in via Outliner).", ur: "Local view mein naya object add: yeh bhi local view mein spawn, normal view mein wapas aane par 'invisible' lag sakta (wahan hai, Outliner se laana parega)." },
  ],
  related: [
    { id: "x-ray", note: { en: "Different focus tool, x-ray for transparency, local view for isolation.", ur: "Different focus tool, x-ray transparency ke liye, local view isolation ke liye." } },
  ],
};
