import type { DeepConcept } from "@/lib/deep-types";

export const axisLockExcludeConcept: DeepConcept = {
  id: "axis-lock-exclude",
  group: "transforms",
  title: { en: "Axis Lock & Exclude (X/Y/Z and Shift+X/Y/Z)", ur: "Axis Lock aur Exclude (X/Y/Z aur Shift+X/Y/Z)" },
  tagline: {
    en: "Tell a transform exactly which axis to use, or which one to leave alone. The single shortcut family that makes Blender's keyboard feel surgical.",
    ur: "Transform ko batao exactly konsi axis use kare, ya konsi chhod de. Yeh ek shortcut family Blender keyboard ko surgical feel deti hai.",
  },
  shortcuts: [
    { keys: "G/R/S then X / Y / Z", meaning: { en: "Lock to that single axis (world).", ur: "Us single axis pe lock (world)." } },
    { keys: "G/R/S then X X / Y Y / Z Z", meaning: { en: "Lock to that single axis (local, the object's own).", ur: "Us single axis pe lock (local, object ka apna)." } },
    { keys: "G/R/S then Shift + X / Y / Z", meaning: { en: "Exclude that axis. Free movement in the other two.", ur: "Us axis ko exclude. Baki do mein free movement." } },
  ],
  whatItIs: [
    {
      en: "After starting a transform with `G`, `R`, or `S`, you can press an axis letter to *constrain* the transform to that axis. `G` then `Z` means 'I'm only moving up or down'. The mouse can move freely but only the Z component of its motion is applied.",
      ur: "`G`, `R`, ya `S` se transform start karne ke baad, axis letter press karke tum transform ko us axis pe *constrain* kar sakte ho. `G` phir `Z` ka matlab 'mai sirf upar ya neeche move kar raha'. Mouse freely move kar sakta lekin sirf Z component apply hota.",
    },
    {
      en: "Add `Shift` before the axis letter and you get the *opposite*: that axis is *excluded*. `G` then `Shift+Z` means 'move freely in X and Y, but stay at the same height.' Two completely different behaviors that feel symmetric once you internalize them.",
      ur: "Axis letter se pehle `Shift` add karo aur *ulta* milta: us axis ko *exclude* kar do. `G` phir `Shift+Z` ka matlab 'X aur Y mein freely move karo, lekin same height pe raho.' Do completely different behaviors jo symmetric feel karte ek baar internalize ho jaye.",
    },
  ],
  whyItExists: [
    {
      en: "Free 3D mouse-drag is hard to align with axes. You think you're moving 'forward' but actually you're moving forward-and-slightly-down. Axis lock removes that ambiguity. Architecture, level layout, and any precise modeling needs this.",
      ur: "Free 3D mouse-drag axes ke saath align karna mushkil. Tum sochte 'forward move kar raha' lekin actually forward-and-slightly-down. Axis lock yeh ambiguity hata deta. Architecture, level layout, aur precise modeling sab ko yeh chahiye.",
    },
  ],
  variants: {
    heading: { en: "Single-tap vs double-tap (world vs local)", ur: "Single-tap vs double-tap (world vs local)" },
    items: [
      {
        name: "Single tap: world axis",
        description: { en: "World X is the global red axis, world Y is green, world Z is blue (up). These don't change no matter how the object is rotated.", ur: "World X global red axis, world Y green, world Z blue (up). Yeh nahi badalte chahe object kaisa bhi rotate ho." },
        when: { en: "Most modeling. World axes match the scene's coordinate system, so 'up' is up regardless of which object you're touching.", ur: "Aksar modeling. World axes scene ke coordinate system ke saath match, 'up' is up chahe konsa object touch karo." },
      },
      {
        name: "Double tap: local axis",
        description: { en: "Local axes belong to the object. If you've rotated the object 45°, its local X tilts 45° from world X. Useful when 'forward' for the object is not 'forward' for the world.", ur: "Local axes object ke. Agar tumne object 45° rotate kiya, uska local X world X se 45° tilted. Useful jab object ka 'forward' world ka 'forward' nahi." },
        when: { en: "Posing rotated parts. A propeller's local Z is its spin axis even when the plane is banking.", ur: "Rotated parts pose karna. Propeller ka local Z uski spin axis hai chahe plane bank kar raha ho." },
      },
    ],
  },
  recipe: {
    heading: { en: "Common axis combos", ur: "Aam axis combos" },
    steps: [
      { step: { en: "**G Z** + drag, move strictly up/down.", ur: "**G Z** + drag, strictly upar/neeche move." } },
      { step: { en: "**G Shift Z** + drag, move on the ground plane (X and Y), Z locked.", ur: "**G Shift Z** + drag, ground plane (X aur Y) pe move, Z locked." } },
      { step: { en: "**R X X 90**, rotate 90° around the object's *own* X axis.", ur: "**R X X 90** object ke *apne* X axis pe 90° rotate." } },
      { step: { en: "**S Shift Z 0**, flatten the selection in Z (collapses everything to the same Z plane).", ur: "**S Shift Z 0** Z mein selection flatten (sab same Z plane par)." } },
    ],
  },
  pitfalls: [
    { en: "Pressing the axis letter *before* G/R/S, does nothing. The order matters: action first, axis second.", ur: "Axis letter G/R/S se *pehle* press karna, kuch nahi hota. Order matter karta: action pehle, axis baad mein." },
    { en: "Local vs world confusion. If your move feels 'wrong direction', try double-tapping the axis letter. Often local is what you wanted.", ur: "Local vs world confusion. Move 'galat direction' lage to axis letter double-tap karke try karo. Aksar local hi chahiye tha." },
  ],
  related: [
    { id: "g-r-s", note: { en: "The base transforms axis lock applies to.", ur: "Base transforms jin par axis lock apply hota." } },
    { id: "snap", note: { en: "Snap also works during axis-locked transforms.", ur: "Axis-locked transforms ke time bhi snap kaam karta." } },
  ],
};
