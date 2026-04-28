import type { DeepConcept } from "@/lib/deep-types";

export const xRayConcept: DeepConcept = {
  id: "x-ray",
  group: "interface",
  title: { en: "X-Ray View", ur: "X-Ray View" },
  tagline: {
    en: "See and select through the mesh. Without it, box-select only catches what's on the front; with it, the back gets picked too.",
    ur: "Mesh ke through dekho aur select karo. Iske baghair box-select sirf samne ki cheezein pakdta; iske saath back ki bhi.",
  },
  shortcuts: [
    { keys: "Alt + Z", meaning: { en: "Toggle X-Ray on/off in the active viewport.", ur: "Active viewport mein X-Ray on/off toggle." } },
    { keys: "Top-right viewport icon", meaning: { en: "Same as Alt+Z, with a slider to adjust transparency.", ur: "Alt+Z jaisa, transparency adjust karne ke liye slider ke saath." } },
  ],
  whatItIs: [
    {
      en: "X-Ray makes geometry semi-transparent. You can see vertices, edges, and faces on the far side of the mesh through the front. More importantly: selection tools (box, circle, lasso) start picking through-and-through instead of stopping at the front surface.",
      ur: "X-Ray geometry ko semi-transparent banata. Tum mesh ki far side ke vertices, edges, aur faces ko front se dekh sakte ho. Zyada important: selection tools (box, circle, lasso) through-and-through pick karne lagte hain, front surface par rukne ki bajaye.",
    },
    {
      en: "It's a viewport-only effect. Renders are unaffected. Toggle it whenever you need to grab vertices on the back of a mesh, or to see how multiple stacked objects relate.",
      ur: "Yeh sirf viewport effect hai. Renders affected nahi hote. Jab bhi mesh ke back ke vertices grab karne ho, ya multiple stacked objects ka relation dekhna ho, toggle karo.",
    },
  ],
  whyItExists: [
    {
      en: "Without x-ray, box-selecting feels broken. You drag a box around a cube to select 'all four corners' and only get the two front corners, the back ones are 'hidden' behind the front face. X-ray fixes this by letting selection see through.",
      ur: "X-ray ke baghair box-selecting broken lagti. Tum cube ke around box drag karte ho 'saare 4 corners' select karne ke liye aur sirf 2 front corners milte, back wale 'hidden' hote front face ke peechay. X-ray isko fix karta selection ko through dekhne de kar.",
    },
  ],
  recipe: {
    heading: { en: "When to toggle x-ray", ur: "X-ray kab toggle karna" },
    steps: [
      { step: { en: "**Selecting through a mesh**: turn x-ray on (`Alt+Z`), do your box/circle/lasso select, turn it off again. Habit.", ur: "**Mesh ke through select**: x-ray on (`Alt+Z`), apna box/circle/lasso select, off karo. Habit." } },
      { step: { en: "**Inspecting interior topology**: turn it on, orbit the camera. You can see how the inside of a closed mesh is structured.", ur: "**Interior topology inspect**: on karo, camera orbit karo. Closed mesh ka andar kaisa structured hai dekh sakte ho." } },
      { step: { en: "**Editing noodles or hidden geometry**: scenes with overlapping shapes (ramen noodles, internal cables) need x-ray to model precisely.", ur: "**Noodles ya hidden geometry edit**: overlapping shapes wali scenes (ramen noodles, internal cables) precisely model karne ke liye x-ray chahiye." } },
    ],
  },
  pitfalls: [
    { en: "Leaving x-ray on permanently. Most modeling looks weird in x-ray (everything ghostly). Toggle off when not actively box-selecting through.", ur: "X-ray permanently on chhodna. Aksar modeling x-ray mein weird lagti (sab ghostly). Active box-select ke baad off karo." },
    { en: "Toggling x-ray with `Z` (which switches *shading mode*, solid/material/rendered) instead of `Alt+Z` (x-ray). Different shortcuts, different effects.", ur: "X-ray ko `Z` se toggle karna (jo *shading mode* switch karta, solid/material/rendered) `Alt+Z` ki bajaye (x-ray). Different shortcuts, different effects." },
  ],
  related: [
    { id: "selection-modes", note: { en: "X-ray dramatically changes how box and lasso select work.", ur: "X-ray dramatically badalta hai box aur lasso select kaise kaam karte." } },
    { id: "shading-modes", note: { en: "Don't confuse with viewport shading toggle (Z).", ur: "Viewport shading toggle (Z) se confuse mat karo." } },
  ],
};
