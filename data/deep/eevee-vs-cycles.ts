import type { DeepConcept } from "@/lib/deep-types";

export const eeveeVsCyclesConcept: DeepConcept = {
  id: "eevee-vs-cycles",
  group: "render",
  title: { en: "EEVEE vs Cycles", ur: "EEVEE vs Cycles" },
  tagline: {
    en: "Two renderers built into Blender. EEVEE is fast and approximate; Cycles is slow and accurate. Pick based on what the shot needs.",
    ur: "Blender mein do renderers built-in. EEVEE fast aur approximate; Cycles slow aur accurate. Shot ki zaroorat ke hisaab se pick karo.",
  },
  whatItIs: [
    {
      en: "Blender ships with two render engines that produce the final pixel output. Switching between them is one click in Render Properties → Render Engine. Both can render the same scene; the visual results and rendering speed differ.",
      ur: "Blender do render engines ke saath ship hota jo final pixel output produce karte. Render Properties → Render Engine se ek click mein switch. Dono same scene render kar sakte; visual results aur speed alag.",
    },
    {
      en: "**EEVEE** is a real-time rasterizer (like a game engine). It uses screen-space tricks to fake reflections, shadows, indirect lighting. Pros: fast (often real-time in viewport, seconds per frame). Cons: less accurate, especially for glass, fog, refraction.",
      ur: "**EEVEE** real-time rasterizer hai (game engine jaisa). Reflections, shadows, indirect lighting ko fake karne ke liye screen-space tricks. Pros: fast (aksar viewport mein real-time, seconds per frame). Cons: less accurate, especially glass, fog, refraction ke liye.",
    },
    {
      en: "**Cycles** is a path tracer. It simulates light rays bouncing through the scene, accurately accounting for reflections, refractions, indirect bounces. Pros: photorealistic. Cons: slow (minutes to hours per frame depending on samples).",
      ur: "**Cycles** path tracer hai. Light rays scene ke through bounce karte yeh simulate karta, reflections, refractions, indirect bounces ka accurate account. Pros: photorealistic. Cons: slow (minutes se hours per frame samples par depend).",
    },
  ],
  variants: {
    heading: { en: "When to use which", ur: "Kab konsa use karna" },
    items: [
      {
        name: "EEVEE",
        description: { en: "Fast iteration. Stylized renders that don't need physical accuracy. Real-time previews. Animation tests.", ur: "Fast iteration. Stylized renders jo physical accuracy nahi chahte. Real-time previews. Animation tests." },
        when: { en: "Quick drafts. Cartoon-style work. When budget/time forbids Cycles.", ur: "Quick drafts. Cartoon-style work. Jab budget/time Cycles allow nahi karta." },
      },
      {
        name: "Cycles",
        description: { en: "Photorealism. Anything with glass, fog, refraction, complex global illumination, accurate shadows.", ur: "Photorealism. Glass, fog, refraction, complex global illumination, accurate shadows wali kuch bhi." },
        when: { en: "Final production renders. Cinematic shots. Tutorial-style polished output. Anything you'd put in a portfolio.", ur: "Final production renders. Cinematic shots. Tutorial-style polished output. Portfolio mein daalne wala kuch bhi." },
      },
    ],
  },
  recipe: {
    heading: { en: "Switching engines", ur: "Engines switch karna" },
    steps: [
      { step: { en: "Properties → Render (camera icon).", ur: "Properties → Render (camera icon)." } },
      { step: { en: "Top dropdown: Render Engine. Pick EEVEE Next or Cycles.", ur: "Top dropdown: Render Engine. EEVEE Next ya Cycles pick." } },
      { step: { en: "For Cycles: Device dropdown → 'GPU Compute' if you have a supported GPU.", ur: "Cycles ke liye: Device dropdown → 'GPU Compute' agar supported GPU hai." } },
      { step: { en: "Sampling section: viewport samples (low for fast preview), render samples (higher for final).", ur: "Sampling section: viewport samples (fast preview ke liye low), render samples (final ke liye higher)." } },
      { step: { en: "Enable Denoise (in Sampling section) for cleaner renders at lower sample counts.", ur: "Sampling section mein Denoise enable cleaner renders ke liye lower sample counts par." } },
    ],
  },
  pitfalls: [
    { en: "Building scenes in EEVEE then switching to Cycles for final render and seeing everything look slightly different. Materials behave differently between engines, especially glass and emission. Always preview in target engine.", ur: "EEVEE mein scenes build phir Cycles switch karke final render aur sab thoda different lagta. Materials engines ke darmiyan alag behave karte, especially glass aur emission. Hamesha target engine mein preview." },
    { en: "Using Cycles in viewport at high samples while modeling. GPU melts, viewport lags. Drop viewport samples to 4-8 while working; only crank up for final preview.", ur: "Modeling karte time Cycles viewport high samples par. GPU melt, viewport lag. Working time viewport samples 4-8 drop; final preview ke liye crank up." },
    { en: "Cycles renders showing 'fireflies' (random bright pixels) at low sample counts. Bump samples or enable denoiser.", ur: "Cycles renders low sample counts par 'fireflies' (random bright pixels) dikhate. Samples bump ya denoiser enable." },
  ],
  related: [
    { id: "samples-denoising", note: { en: "Cycles tuning is mostly about samples and denoising.", ur: "Cycles tuning aksar samples aur denoising par." } },
    { id: "shading-modes", note: { en: "Rendered viewport mode uses whichever engine you set.", ur: "Rendered viewport mode jo engine set hai woh use karta." } },
    { id: "volumetric-fog", note: { en: "Volumetrics work better in Cycles.", ur: "Volumetrics Cycles mein better." } },
  ],
};
