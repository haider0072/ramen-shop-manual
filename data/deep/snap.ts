import type { DeepConcept } from "@/lib/deep-types";

export const snapConcept: DeepConcept = {
  id: "snap",
  group: "transforms",
  title: { en: "Snapping (during transforms)", ur: "Snapping (transforms ke time)" },
  tagline: {
    en: "Make moves stick to grid points, vertices, faces, or surfaces. Modeling-by-eyeball turns into modeling-by-magnet.",
    ur: "Moves ko grid points, vertices, faces, ya surfaces pe stick karwao. Eyeball modeling magnet modeling ban jata.",
  },
  shortcuts: [
    { keys: "Magnet icon (header)", meaning: { en: "Permanently turns snap on/off.", ur: "Snap ko permanently on/off karta." } },
    { keys: "Ctrl (held during transform)", meaning: { en: "Temporarily enables snap. Lets go = back to normal.", ur: "Temporarily snap enable. Chhodte hi normal." } },
    { keys: "Shift + Tab", meaning: { en: "Toggle the magnet (same as clicking the icon).", ur: "Magnet toggle (icon click ke jaisa)." } },
  ],
  whatItIs: [
    {
      en: "Snap is a 'sticky behavior' applied to your transforms. With snap on, moving an object near a vertex pulls the object so its origin lands exactly on that vertex. The snap target type (vertex, edge, face, grid, etc.) decides what counts as a 'sticky point'.",
      ur: "Snap transforms par 'sticky behavior' hai. Snap on ke saath, ek object ko vertex ke paas move karo aur woh khichta hai taakay uska origin exactly us vertex par land kare. Snap target type (vertex, edge, face, grid, etc.) decide karta kya 'sticky point' counts.",
    },
    {
      en: "Two ways to use it: permanently on (header magnet icon, every transform snaps), or temporarily by holding `Ctrl` during a transform (most flexible).",
      ur: "Do tareeqe hain use karne ke: permanently on (header magnet icon, har transform snap karta), ya `Ctrl` hold karke transform ke dauran temporarily (sab se flexible).",
    },
  ],
  variants: {
    heading: { en: "Snap target options (next to magnet icon)", ur: "Snap target options (magnet icon ke saath)" },
    items: [
      {
        name: "Vertex",
        description: { en: "Snaps to the nearest vertex.", ur: "Sab se qareeb vertex pe snap." },
        when: { en: "Aligning two pieces of geometry exactly point-to-point.", ur: "Do geometry pieces ko exactly point-to-point align." },
      },
      {
        name: "Edge",
        description: { en: "Snaps to the nearest point along an edge (anywhere on the line).", ur: "Edge ke qareeb kisi point pe snap (line par kahin bhi)." },
        when: { en: "Placing something along a railing or beam, anywhere on the edge is fine.", ur: "Cheez ko railing ya beam ke saath place, edge par kahin bhi theek." },
      },
      {
        name: "Face",
        description: { en: "Snaps onto a face surface. Stick like a sticker on a wall.", ur: "Face ki surface pe snap. Wall pe sticker chipakne jaisa." },
        when: { en: "Placing decorations on a wall, items on a counter, anything that needs surface contact.", ur: "Wall pe decorations, counter pe items, jo surface contact chahiye." },
      },
      {
        name: "Face Project",
        description: { en: "Like Face but the object 'projects' onto the surface, conforming to its slope (good for stickers on curved walls).", ur: "Face jaisa lekin object 'projects' surface par, slope ke saath conform (curved walls par stickers)." },
        when: { en: "Decals on irregular surfaces, snowflakes settling on terrain.", ur: "Irregular surfaces par decals, snowflakes terrain par." },
      },
      {
        name: "Volume",
        description: { en: "Snaps to the inside of a volume.", ur: "Volume ke andar snap." },
        when: { en: "Niche, but useful for placing things 'into' a region rather than on its surface.", ur: "Niche, lekin region ke 'andar' (surface ki bajaye) cheezein rakhne ke liye useful." },
      },
      {
        name: "Edge Center",
        description: { en: "Snaps to the midpoint of an edge.", ur: "Edge ke midpoint pe snap." },
        when: { en: "Placing things at exact edge midpoints (joining two beams at their middles).", ur: "Cheezein exact edge midpoints par (do beams ko unke middles se join)." },
      },
      {
        name: "Edge Perpendicular",
        description: { en: "Snaps so the moved point is perpendicular to the target edge.", ur: "Snap is tarah ke moved point target edge ke perpendicular ho." },
      },
      {
        name: "Increment",
        description: { en: "Snaps to grid increments. The 'classic' snap if you remember software like Photoshop's snap-to-grid.", ur: "Grid increments pe snap. 'Classic' snap, Photoshop ke snap-to-grid jaisa." },
        when: { en: "Aligning to a clean grid for architecture or technical models.", ur: "Architecture ya technical models ke liye clean grid se align." },
      },
    ],
  },
  recipe: {
    heading: { en: "The 'place a sticker on a wall' snap recipe", ur: "'Wall pe sticker rakho' snap recipe" },
    steps: [
      { step: { en: "Header magnet icon → set snap target to 'Face'.", ur: "Header magnet icon, snap target 'Face' karo." } },
      { step: { en: "Enable 'Project Individual Elements' (so the object aligns to surface normal).", ur: "'Project Individual Elements' enable (taakay object surface normal se align ho)." } },
      { step: { en: "Select your sticker. Press `G`, hold `Ctrl`, drag onto the wall.", ur: "Sticker select. `G` press, `Ctrl` hold, wall par drag." } },
      { step: { en: "Sticker stuck to wall, oriented with its surface. Click to confirm.", ur: "Sticker wall pe stuck, surface ke saath oriented. Click se confirm." } },
    ],
  },
  pitfalls: [
    { en: "Permanent snap on: every move snaps somewhere, sometimes weirdly. Use Ctrl-temporary snap for predictability.", ur: "Permanent snap on: har move kahin snap karti, kabhi weirdly. Predictability ke liye Ctrl-temporary snap use karo." },
    { en: "Wrong snap target type. You set 'Vertex' but you wanted 'Face', your sticker keeps jumping to the nearest vertex of the wall.", ur: "Galat snap target type. 'Vertex' set kiya lekin 'Face' chahiye tha, tumhara sticker wall ke sab se qareeb vertex pe jump karta rehta." },
  ],
  related: [
    { id: "3d-cursor", note: { en: "Cursor snapping uses the same target system.", ur: "Cursor snapping same target system use karta." } },
    { id: "g-r-s", note: { en: "Snap is a transform modifier.", ur: "Snap ek transform modifier hai." } },
  ],
};
