import type { DeepConcept } from "@/lib/deep-types";

export const proportionalEditConcept: DeepConcept = {
  id: "proportional-edit",
  group: "transforms",
  title: { en: "Proportional Editing (O)", ur: "Proportional Editing (O)" },
  tagline: {
    en: "Move one vertex; nearby vertices follow with a falloff. Like a magnet for organic deformation.",
    ur: "Ek vertex move; nearby vertices falloff ke saath follow. Organic deformation ka magnet jaisa.",
  },
  shortcuts: [
    { keys: "O", meaning: { en: "Toggle proportional editing on/off.", ur: "Proportional editing on/off toggle." } },
    { keys: "Mouse wheel during transform", meaning: { en: "Resize the falloff radius (the magnet's reach).", ur: "Falloff radius resize (magnet ki reach)." } },
  ],
  whatItIs: [
    {
      en: "With proportional editing on, when you grab a single vertex and move it, neighboring vertices within a 'falloff radius' move too, but less, the further they are. The result feels like pulling a piece of clay: the touched point moves the most, surrounding area follows softly.",
      ur: "Proportional editing on ke saath, jab tum ek single vertex grab karke move karte ho, 'falloff radius' ke andar neighboring vertices bhi move karte, lekin kam, jitne door utne kam. Result lagta clay piece pulling: touched point sab se zyada move, surrounding area softly follow karta.",
    },
    {
      en: "The radius (the falloff) is shown as a circle while you're transforming. Mouse-wheel scrolls during the operation resize it. Smaller = surgical local effect; larger = whole-region pulling.",
      ur: "Radius (falloff) transform ke time circle ki tarah dikhayi deti. Operation ke dauran mouse-wheel scroll se resize. Chhota = surgical local effect; bara = whole-region pulling.",
    },
  ],
  whyItExists: [
    {
      en: "Sometimes a model needs a smooth bulge or a soft dent, like making a plane look like the surface of an egg. Manually moving each vertex with a slight offset takes forever. Proportional edit applies a smooth falloff automatically. It's the closest thing to brush-based sculpting available without entering Sculpt Mode.",
      ur: "Kabhi model ko smooth bulge ya soft dent chahiye, plane ko egg ki surface jaisa banane jaisa. Har vertex ko slight offset se manually move karna ghantay leta. Proportional edit smooth falloff automatic apply karta. Yeh brush-based sculpting ke sab se qareeb hai bina Sculpt Mode mein gaye.",
    },
  ],
  variants: {
    heading: { en: "Falloff types (dropdown next to the icon)", ur: "Falloff types (icon ke saath dropdown)" },
    items: [
      {
        name: "Smooth",
        description: { en: "Default. Cubic falloff, strong near center, fading naturally outward.", ur: "Default. Cubic falloff, center par strong, naturally outward fade." },
        when: { en: "Most organic deformations. The 'safe' choice.", ur: "Aksar organic deformations. 'Safe' choice." },
      },
      {
        name: "Sphere",
        description: { en: "Stricter circular falloff. More uniform inside the radius, sharper drop at the edge.", ur: "Stricter circular falloff. Radius ke andar more uniform, edge pe sharper drop." },
      },
      {
        name: "Root",
        description: { en: "Falloff strong at center, drops quickly. Tighter than Smooth.", ur: "Center pe strong, jaldi drop. Smooth se tighter." },
      },
      {
        name: "Inverse Square",
        description: { en: "Mathematical inverse-square falloff. Very strong center, very fast drop.", ur: "Mathematical inverse-square falloff. Very strong center, very fast drop." },
      },
      {
        name: "Sharp",
        description: { en: "Almost no falloff, the radius behaves like a hard cutoff.", ur: "Almost no falloff, radius hard cutoff jaisa." },
      },
      {
        name: "Linear",
        description: { en: "Falloff drops linearly with distance.", ur: "Falloff distance ke saath linearly drop." },
      },
      {
        name: "Constant",
        description: { en: "Every vertex inside the radius moves the same amount as the touched one. Hard-edged behavior.", ur: "Radius ke andar har vertex utna hi move jitna touched, hard-edged behavior." },
      },
      {
        name: "Random",
        description: { en: "Adds noise, vertices in the radius move random amounts. Used for jitter, terrain, irregular surfaces.", ur: "Noise add karta, radius ke vertices random amounts move. Jitter, terrain, irregular surfaces ke liye." },
      },
    ],
  },
  recipe: {
    heading: { en: "Make a flat plane look like an egg shape", ur: "Flat plane ko egg shape jaisa banao" },
    steps: [
      { step: { en: "Add a circle (12-18 vertices). Edit Mode, vertex select.", ur: "Circle add karo (12-18 vertices). Edit Mode, vertex select." } },
      { step: { en: "Press `O` to enable proportional editing.", ur: "`O` press karke proportional editing on." } },
      { step: { en: "Pick one vertex on the side. `G Y` to move outward.", ur: "Side ka ek vertex pick. `G Y` se outward move." } },
      { step: { en: "Mouse-wheel up to enlarge falloff radius. Vertices around the picked one start following.", ur: "Mouse-wheel up se falloff radius enlarge. Picked one ke around vertices follow karne lagti." } },
      { step: { en: "Click to confirm. Result: stretched egg-like shape from a basic circle.", ur: "Click se confirm. Result: basic circle se stretched egg-like shape." } },
    ],
  },
  pitfalls: [
    { en: "Forgetting to turn it off after use. Next transform you do has unexpected falloff and you wonder why neighbors are moving with you.", ur: "Use ke baad off karna bhulna. Aglay transform mein unexpected falloff aur tum sochte neighbors kyun saath move kar rahe." },
    { en: "Falloff radius too large: the entire mesh shifts when you only wanted a local bulge. Watch the circle while transforming.", ur: "Falloff radius bohot bara: poori mesh shift jab sirf local bulge chahiye tha. Transform ke time circle dekhte raho." },
  ],
  related: [
    { id: "g-r-s", note: { en: "Proportional edit modifies how G/R/S behave.", ur: "Proportional edit G/R/S ke behavior ko modify karta." } },
    { id: "vertex-edge-face", note: { en: "Works at vertex level mostly.", ur: "Aksar vertex level pe chalta." } },
  ],
};
