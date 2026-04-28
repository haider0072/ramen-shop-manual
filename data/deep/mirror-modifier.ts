import type { DeepConcept } from "@/lib/deep-types";

export const mirrorModifierConcept: DeepConcept = {
  id: "mirror-modifier",
  group: "modifiers",
  title: { en: "Mirror Modifier", ur: "Mirror Modifier" },
  tagline: {
    en: "Model one side, get the other for free. Symmetrical objects only need half the work.",
    ur: "Aik side model karo, doosri free mil jati. Symmetrical objects ke liye sirf adha kaam.",
  },
  whatItIs: [
    {
      en: "The Mirror modifier reflects your mesh across an axis (X, Y, or Z) of the object's origin. You model the left side; the right side mirrors live. Move a vertex on the left, the right mirror moves with it.",
      ur: "Mirror modifier mesh ko object origin ke axis (X, Y, ya Z) ke across reflect karta. Tum left side model karte, right side live mirror hoti. Left ka vertex move, right ka mirror bhi move.",
    },
    {
      en: "Critical: the *origin* is the mirror plane. If your origin is in the wrong place, the mirror happens in the wrong place. Always set the origin where the symmetry axis should be (usually object center) before adding the modifier.",
      ur: "Critical: *origin* hi mirror plane hai. Origin galat jagah, mirror bhi galat jagah. Modifier add karne se pehle origin ko symmetry axis par set karo (aksar object center).",
    },
  ],
  whyItExists: [
    {
      en: "Most real things are symmetrical: characters, vehicles, furniture, props. Modeling both sides by hand means doing every edit twice and they're never perfectly identical. Mirror enforces perfect symmetry while halving your modeling time.",
      ur: "Aksar real cheezain symmetrical: characters, vehicles, furniture, props. Dono sides manually model = har edit do baar aur kabhi perfectly identical nahi. Mirror perfect symmetry enforce karta time aadha.",
    },
  ],
  variants: {
    heading: { en: "Mirror modifier settings", ur: "Mirror modifier settings" },
    items: [
      {
        name: "Axis (X / Y / Z)",
        description: { en: "Which axis to mirror across. Toggle multiple for symmetry on more than one axis (rare, but useful for star shapes).", ur: "Kis axis pe mirror. Multiple toggle one axis se zyada symmetry ke liye (rare, star shapes ke liye useful)." },
        when: { en: "X is most common (left/right symmetry). Y for front/back. Z for top/bottom.", ur: "X sab se common (left/right). Y front/back. Z top/bottom." },
      },
      {
        name: "Bisect",
        description: { en: "Cuts off any geometry on the 'wrong' side of the axis before mirroring. Prevents overlap if you accidentally model past the center line.", ur: "Mirror se pehle axis ki 'wrong' side ki geometry cut. Center line ke past accidentally model kiya to overlap prevent." },
      },
      {
        name: "Flip",
        description: { en: "Flips which side is the source vs. mirror. Used after Bisect if it cut the wrong half.", ur: "Source vs mirror side flip. Bisect ne galat half cut kiya to use." },
      },
      {
        name: "Mirror Object",
        description: { en: "Use a different object's origin as the mirror plane instead of self-origin. Useful for mirroring a hand around the spine of a character.", ur: "Self-origin ki bajaye doosre object ke origin ko mirror plane banao. Character ki spine ke around hand mirror karne ke liye useful." },
      },
      {
        name: "Clipping",
        description: { en: "Vertices on the mirror plane snap together and can't cross. Without it, you'd have a visible seam down the middle.", ur: "Mirror plane par vertices snap aur cross nahi. Iske baghair beech mein visible seam." },
        when: { en: "Always on for organic modeling. Off only when you intentionally want a gap at the mirror line.", ur: "Organic modeling ke liye hamesha on. Off sirf jab intentionally mirror line par gap chahiye." },
      },
      {
        name: "Merge (with threshold)",
        description: { en: "Vertices within the threshold distance of the mirror plane get merged into one. Prevents duplicates on the seam.", ur: "Mirror plane se threshold distance ke andar vertices merge ho jate. Seam par duplicates prevent." },
      },
      {
        name: "Mirror U / V",
        description: { en: "Also mirrors the UV coordinates so the mirrored half uses the flipped texture region. Essential for textured symmetric models.", ur: "UV coordinates bhi mirror, taake mirrored half flipped texture region use kare. Textured symmetric models ke liye essential." },
      },
    ],
  },
  recipe: {
    heading: { en: "Mirroring a character body", ur: "Character body mirror karna" },
    steps: [
      { step: { en: "Select your half-mesh in Object Mode. Set origin to center: `Object → Set Origin → Origin to 3D Cursor` (with cursor at world center).", ur: "Object Mode mein half-mesh select. Origin center par: `Object → Set Origin → Origin to 3D Cursor` (cursor world center par)." } },
      { step: { en: "Add Modifier → Mirror.", ur: "Add Modifier → Mirror." } },
      { step: { en: "Default X axis works for left/right symmetry. Enable Clipping and Merge.", ur: "Default X axis left/right symmetry ke liye. Clipping aur Merge enable." } },
      { step: { en: "Enter Edit Mode and continue modeling. Both halves update live.", ur: "Edit Mode mein aao aur model karo. Dono halves live update." } },
      { step: { en: "When done with symmetry work, Apply the modifier so you can break symmetry for asymmetric details.", ur: "Symmetry kaam khatam hone par modifier Apply, taake asymmetric details ke liye symmetry break ho sake." } },
    ],
  },
  pitfalls: [
    { en: "Origin in the wrong place: mirror lands in the wrong location. Always set origin to symmetry axis first.", ur: "Origin galat jagah: mirror galat location par. Pehle origin symmetry axis par set." },
    { en: "Mirroring a mesh that already crosses the center line: you get overlapping geometry. Enable Bisect to cut, or delete the wrong half manually first.", ur: "Aisi mesh mirror jo pehle se center line cross karti: overlapping geometry. Bisect enable ya manually wrong half delete." },
    { en: "Forgetting to apply scale before mirroring. Non-uniform scale makes the mirror lopsided.", ur: "Mirror se pehle apply scale bhulna. Non-uniform scale mirror lopsided." },
    { en: "Clipping off when you needed it on: tiny gaps at the seam that don't show in viewport but cause shading errors.", ur: "Clipping off honi chahiye thi on: seam par tiny gaps jo viewport mein nahi dikhti lekin shading errors." },
  ],
  related: [
    { id: "origin-point", note: { en: "Origin defines the mirror plane.", ur: "Origin mirror plane define karta." } },
    { id: "apply-scale", note: { en: "Apply scale before mirror to avoid distortion.", ur: "Mirror se pehle apply scale taake distortion na ho." } },
    { id: "modifier-stack", note: { en: "Mirror usually sits early in the stack.", ur: "Mirror aksar stack mein early hota." } },
  ],
};
