import type { DeepConcept } from "@/lib/deep-types";

export const insetConcept: DeepConcept = {
  id: "inset",
  group: "geometry",
  title: { en: "Inset Faces (I key)", ur: "Inset Faces (I key)" },
  tagline: {
    en: "Shrink a face inward to create a smaller face inside it. The setup move for almost every recessed detail in modeling.",
    ur: "Face ko andar shrink karke uske andar ek choti face banao. Aksar recessed details ke liye setup move.",
  },
  shortcuts: [
    { keys: "I", meaning: { en: "Standard inset. Selected faces all inset together.", ur: "Standard inset. Saari selected faces ek saath inset." } },
    { keys: "I I (twice)", meaning: { en: "Inset Individual, each selected face insets in itself.", ur: "Inset Individual, har selected face apne aap mein inset." } },
    { keys: "Shift + I", meaning: { en: "Inset Individual (alternate, same as pressing I twice).", ur: "Inset Individual (alternate, I do baar press karne jaisa)." } },
  ],
  whatItIs: [
    {
      en: "Inset takes a selected face and creates a smaller face inside it, sharing the original face's plane. The space between the original perimeter and the new inner face is filled with new quad faces. Visual result: a 'frame' around an inner panel.",
      ur: "Inset selected face leta hai aur uske andar ek choti face banata hai, original face ka same plane share karte hue. Original perimeter aur nayi inner face ke darmiyan space new quad faces se fill hoti. Visual result: ek 'frame' inner panel ke around.",
    },
    {
      en: "Inset is almost always followed by extrude. Inset creates the inner face; extrude pushes it inward (recessed) or outward (raised). Together they're how you build window frames, sunken panels, raised buttons, sign borders, anything 'flat with a recessed/raised middle'.",
      ur: "Inset ke baad aksar extrude hota. Inset inner face banata; extrude use inward (recessed) ya outward (raised) push karta. Saath mein yeh window frames, sunken panels, raised buttons, sign borders, kuch bhi 'flat with recessed/raised middle' banane ka tareeqa hain.",
    },
  ],
  variants: {
    heading: { en: "Inset variants", ur: "Inset ke variants" },
    items: [
      {
        name: "Inset Region (I)",
        description: { en: "Default. All selected faces inset together as one connected region. Touching faces share edges in the inset.", ur: "Default. Saari selected faces ek connected region ki tarah inset. Touching faces inset mein edges share karti." },
        when: { en: "When you want a single 'frame' around a group of faces (e.g., the entire front of a building gets one inset).", ur: "Jab ek group of faces ke around ek 'frame' chahiye (e.g., poori building ki front ko ek inset)." },
      },
      {
        name: "Inset Individual (I I)",
        description: { en: "Each selected face insets *separately*. No shared edges. You get N small insets instead of one big one.", ur: "Har selected face *alag* inset. Koi shared edges nahi. Tumhe N choti insets milti hain ek bari ki bajaye." },
        when: { en: "Multiple windows on a building, each needing its own frame. Tile patterns where each tile is a separate inset.", ur: "Building par multiple windows, har ek ka apna frame. Tile patterns jahan har tile alag inset." },
      },
    ],
  },
  recipe: {
    heading: { en: "Inset → extrude pattern (most common)", ur: "Inset → extrude pattern (sab se common)" },
    steps: [
      { step: { en: "Face select (`3`). Pick the face that needs a recessed detail.", ur: "Face select (`3`). Jis face mein recessed detail chahiye uske select." } },
      { step: { en: "Press `I`, drag inward. New smaller face appears, surrounded by 4 frame faces. Click to confirm.", ur: "`I` press, andar drag. Nayi choti face appear, 4 frame faces se ghiri. Click se confirm." } },
      { step: { en: "Inner face stays selected. Press `E` then drag inward (negative direction relative to the face's normal). The inner face recedes into the mesh.", ur: "Inner face selected reh jati. `E` press karke andar drag (face ke normal ke relative negative direction). Inner face mesh ke andar recede." } },
      { step: { en: "Done. You now have a recessed panel, a window-like detail.", ur: "Done. Ab tumhare paas recessed panel hai, window jaisi detail." } },
    ],
  },
  pitfalls: [
    { en: "Inset depth too large, the inner face crosses outside the outer perimeter and creates self-intersecting geometry. Drag less, or hold Ctrl during inset for clamping.", ur: "Inset depth bohot bara, inner face baahar perimeter ko paar kar ke self-intersecting geometry banati. Kam drag karo, ya inset ke time Ctrl hold karo clamping ke liye." },
    { en: "Press `I` when you meant `Shift+I`. Single inset on a multi-face selection joins them; if you wanted each face independent, press I twice quickly.", ur: "`I` press karna jab `Shift+I` ka matlab tha. Multi-face selection par single inset unhe join kar deta; agar har face independent chahiye thi to I jaldi do baar press karo." },
    { en: "Forgetting to extrude after inset, leaving a flat 'frame' with no depth. Looks weird in shading. Almost always inset → extrude.", ur: "Inset ke baad extrude karna bhulna, ek flat 'frame' bina depth ke. Shading mein weird lagta. Aksar inset → extrude saath chalte hain." },
  ],
  related: [
    { id: "extrude", note: { en: "Inset's natural follow-up.", ur: "Inset ka natural follow-up." } },
    { id: "vertex-edge-face", note: { en: "Inset works on faces only.", ur: "Inset sirf faces par chalta." } },
  ],
};
