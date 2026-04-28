import type { DeepConcept } from "@/lib/deep-types";

export const shadingModesConcept: DeepConcept = {
  id: "shading-modes",
  group: "interface",
  title: { en: "Viewport Shading Modes", ur: "Viewport Shading Modes" },
  tagline: {
    en: "Four levels of detail your viewport can render in real-time. Pick the right one for the task and your laptop fans calm down.",
    ur: "Char levels of detail jo tumhari viewport real-time render kar sakti. Sahi level pick karo aur laptop fans shanti mein chalein.",
  },
  shortcuts: [
    { keys: "Z", meaning: { en: "Pie menu of shading modes.", ur: "Shading modes ka pie menu." } },
    { keys: "Top-right viewport icons", meaning: { en: "Four sphere icons, one per mode.", ur: "Char sphere icons, har mode ke liye ek." } },
  ],
  whatItIs: [
    {
      en: "Blender's viewport can show your scene at four levels of fidelity: Wireframe (just lines), Solid (gray shading, fast), Material Preview (decent material colors with HDRI lighting), and Rendered (full render quality with your scene's actual lights). Each is faster the simpler it is.",
      ur: "Blender ki viewport tumhari scene ko 4 fidelity levels par show kar sakti: Wireframe (sirf lines), Solid (gray shading, fast), Material Preview (decent material colors HDRI lighting ke saath), aur Rendered (full render quality tumhari scene ki actual lights ke saath). Jitna simple, utna fast.",
    },
    {
      en: "Most modeling happens in Solid mode (lightweight, all-gray, focuses you on shape). Switch to Material Preview when you start applying materials. Switch to Rendered when you're tuning lights or fog. Don't sit in Rendered all day, it'll cook your GPU.",
      ur: "Aksar modeling Solid mode mein hoti (lightweight, all-gray, shape par focus). Material Preview pe switch jab tum materials apply karne lago. Rendered pe switch jab lights ya fog tune kar rahe ho. Sara din Rendered mein mat baitho, GPU pak jayegi.",
    },
  ],
  variants: {
    heading: { en: "All four modes", ur: "Saare 4 modes" },
    items: [
      {
        name: "Wireframe",
        description: { en: "Just edges, no faces filled in. Fastest. You see through the mesh.", ur: "Sirf edges, faces fill nahi. Fastest. Mesh ke through dekhte ho." },
        when: { en: "Inspecting topology, working with retopology over a sculpt.", ur: "Topology inspect, sculpt ke upar retopology kaam." },
      },
      {
        name: "Solid",
        description: { en: "Faces filled with a gray, slightly shaded color. Lighting is fake (a single overhead 'studio' light). The default.", ur: "Faces gray, slightly shaded color se filled. Lighting fake (single overhead 'studio' light). Default." },
        when: { en: "All shape work. Modeling, layout, blocking out scenes. Fastest of the 'see your model' modes.", ur: "Saara shape work. Modeling, layout, scenes blocking out. 'Apna model dekho' modes mein sab se fast." },
      },
      {
        name: "Material Preview",
        description: { en: "Materials show their colors and roughness, but lighting is faked from an HDRI image (in viewport settings). Looks decent without setting up real lights.", ur: "Materials apne colors aur roughness dikhate, lekin lighting HDRI image se fake (viewport settings mein). Decent dikhta bina real lights setup kiye." },
        when: { en: "Applying materials, picking colors, sanity-checking shaders before final render.", ur: "Materials apply, colors pick, shaders sanity-check final render se pehle." },
      },
      {
        name: "Rendered",
        description: { en: "Full real render in the viewport. Uses Cycles or EEVEE engine. Your actual lights and shadows. Slow.", ur: "Full real render viewport mein. Cycles ya EEVEE engine. Tumhari actual lights aur shadows. Slow." },
        when: { en: "Final lighting tweaks, checking volume scattering, getting render-accurate previews.", ur: "Final lighting tweaks, volume scattering check, render-accurate previews." },
      },
    ],
  },
  pitfalls: [
    { en: "Confusing `Z` (shading mode pie menu) with `Alt+Z` (x-ray). Two different things, similar shortcuts.", ur: "`Z` (shading mode pie menu) ko `Alt+Z` (x-ray) se confuse karna. Do alag cheezein, similar shortcuts." },
    { en: "Staying in Rendered mode while modeling. Slow updates, high GPU heat, distracting noise from low Cycles samples.", ur: "Modeling ke time Rendered mode mein rehna. Slow updates, GPU heat, low Cycles samples ka distracting noise." },
  ],
  related: [
    { id: "eevee-vs-cycles", note: { en: "Rendered mode runs whichever engine your scene uses.", ur: "Rendered mode jis engine ka scene use karta woh chalata." } },
  ],
};
