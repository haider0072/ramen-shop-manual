import type { DeepConcept } from "@/lib/deep-types";

export const worldHdriConcept: DeepConcept = {
  id: "world-hdri",
  group: "shading",
  title: { en: "World Shader & HDRI", ur: "World Shader & HDRI" },
  tagline: {
    en: "The background of your scene is its own shader. Plug in an HDRI image, and your whole scene gets photorealistic lighting for free.",
    ur: "Scene ka background apna shader. HDRI image plug karo, poora scene ko free mein photorealistic lighting.",
  },
  whatItIs: [
    {
      en: "The World shader controls what surrounds your scene: the sky, the ambient light, what reflects in shiny surfaces. By default it's a flat gray. With an HDRI it becomes a real-looking environment.",
      ur: "World shader scene ke surroundings control: sky, ambient light, shiny surfaces mein kya reflect. Default flat gray. HDRI ke saath real-looking environment.",
    },
    {
      en: "An **HDRI** (High Dynamic Range Image) is a 360 degree photo of a real place stored with extra brightness data. The bright spots (sun, lamps) are *much* brighter than the dim areas, just like real life. When used as a world background, it lights your scene exactly as that location would.",
      ur: "**HDRI** (High Dynamic Range Image) real jagah ki 360 degree photo extra brightness data ke saath. Bright spots (sun, lamps) dim se *bohot* brighter, real life jaisa. World background ke taur par use karo, scene us location ki tarah light hota.",
    },
  ],
  whyItExists: [
    {
      en: "Manually placing 20 lights to match the look of a sunny street is hard and rarely accurate. A street HDRI nails the lighting in one drag-and-drop because it captures the actual photons of that street. Industry standard for product viz, automotive, and any 'realistic' render.",
      ur: "Sunny street ke look ke liye manually 20 lights place karna mushkil aur rarely accurate. Street HDRI aik drag-and-drop mein lighting nail karta kyunki actual photons capture. Product viz, automotive, aur 'realistic' renders ka industry standard.",
    },
  ],
  variants: {
    heading: { en: "World shader components", ur: "World shader components" },
    items: [
      {
        name: "Background node",
        description: { en: "The default world shader. Has Color (the sky color) and Strength (intensity multiplier).", ur: "Default world shader. Color (sky color) aur Strength (intensity multiplier)." },
      },
      {
        name: "Environment Texture",
        description: { en: "Drop an HDRI here (`.exr` or `.hdr` file). Plug its Color into the Background node's Color. Done.", ur: "HDRI yahan dalo (`.exr` ya `.hdr`). Color → Background node ka Color. Ho gaya." },
      },
      {
        name: "Sky Texture",
        description: { en: "Procedural sky alternative. Set sun direction, atmosphere density, ground albedo. Live tweakable. No HDRI file needed.", ur: "Procedural sky alternative. Sun direction, atmosphere density, ground albedo set. Live tweakable. HDRI file ki zaroorat nahi." },
      },
      {
        name: "Mapping (rotate HDRI)",
        description: { en: "Insert a Mapping node between Texture Coordinate and Environment Texture to rotate the HDRI. Used to align the sun with your camera angle.", ur: "Texture Coordinate aur Environment Texture ke darmiyan Mapping node insert karke HDRI rotate. Sun ko camera angle ke saath align karne ke liye." },
      },
      {
        name: "Strength",
        description: { en: "Multiplier on world brightness. Increase if scene looks dim; decrease if it's blown out. Typical values: 0.5 to 3.", ur: "World brightness ka multiplier. Scene dim lage to barhao; blown out lage to ghatao. Typical: 0.5 se 3." },
      },
      {
        name: "Volumetrics (Volume socket)",
        description: { en: "Connect a Volume Scatter or Volume Absorption node here for global atmospheric haze (entire scene fogged).", ur: "Yahan Volume Scatter ya Volume Absorption connect karke global atmospheric haze (poora scene foggy)." },
      },
      {
        name: "Render Properties → Film → Transparent",
        description: { en: "Makes the world background transparent in renders so you can composite over it. The HDRI still lights the scene; it just doesn't show.", ur: "Renders mein world background transparent taake upar composite kar sako. HDRI scene light karta lekin dikhta nahi." },
      },
    ],
  },
  recipe: {
    heading: { en: "Lighting a scene with an HDRI", ur: "HDRI se scene light karna" },
    steps: [
      { step: { en: "Download a free HDRI from polyhaven.com (`.exr`, 4K is enough).", ur: "Free HDRI polyhaven.com se (`.exr`, 4K enough)." } },
      { step: { en: "Properties → World (red sphere icon). Click the dot next to Color → Environment Texture → Open the HDRI file.", ur: "Properties → World (red sphere icon). Color ke saath dot click → Environment Texture → HDRI file open." } },
      { step: { en: "Switch viewport to Rendered shading. Scene now lit by the HDRI.", ur: "Viewport Rendered shading. Scene ab HDRI se lit." } },
      { step: { en: "Add a Mapping node between Texture Coordinate and Environment Texture. Tweak Z rotation to point the sun where you want.", ur: "Texture Coordinate aur Environment Texture ke darmiyan Mapping node. Z rotation se sun jahan chahiye point." } },
      { step: { en: "If background distracts, enable Render → Film → Transparent.", ur: "Background distract kare to Render → Film → Transparent." } },
    ],
  },
  pitfalls: [
    { en: "HDRI looks low-res in renders: download a higher-resolution version (8K or 16K). 1K HDRIs are fine for lighting only, not for visible backgrounds.", ur: "HDRI renders mein low-res: higher-res download (8K ya 16K). 1K HDRIs sirf lighting ke liye theek, visible backgrounds ke liye nahi." },
    { en: "Scene too bright/dark: tweak Strength on the Background node, not the HDRI itself.", ur: "Scene bohot bright/dark: HDRI nahi, Background node par Strength tweak." },
    { en: "Reflections show the HDRI sky but the scene seems lit from a different angle: rotate the HDRI via Mapping node so the sun in the image matches the implied light direction.", ur: "Reflections HDRI sky dikhati lekin scene different angle se lit lagta: Mapping node se HDRI rotate karke image ka sun implied direction se match." },
  ],
  related: [
    { id: "light-types", note: { en: "HDRIs replace many manual lights.", ur: "HDRIs aksar manual lights replace." } },
    { id: "samples-denoising", note: { en: "HDRI lighting often needs more samples to converge.", ur: "HDRI lighting aksar zyada samples chahti." } },
  ],
};
