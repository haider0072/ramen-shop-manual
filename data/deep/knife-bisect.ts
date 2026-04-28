import type { DeepConcept } from "@/lib/deep-types";

export const knifeBisectConcept: DeepConcept = {
  id: "knife-bisect",
  group: "geometry",
  title: { en: "Knife & Bisect", ur: "Knife & Bisect" },
  tagline: {
    en: "Two ways to cut a mesh: Knife for freehand custom cuts, Bisect for clean planar slices.",
    ur: "Mesh cut karne ke do tareeqe: Knife freehand custom cuts, Bisect clean planar slices.",
  },
  shortcuts: [
    { keys: "K", meaning: { en: "Activate Knife tool in Edit Mode.", ur: "Edit Mode mein Knife tool activate." } },
    { keys: "Z (during knife)", meaning: { en: "Toggle 'cut through' so the knife also cuts back faces.", ur: "'Cut through' toggle taake back faces bhi cut hon." } },
    { keys: "C (during knife)", meaning: { en: "Constrain to angle increments (45 degree steps).", ur: "Angle increments par constrain (45 degree steps)." } },
    { keys: "Enter / Space", meaning: { en: "Confirm the knife cuts.", ur: "Knife cuts confirm." } },
    { keys: "Esc / Right-click", meaning: { en: "Cancel knife operation.", ur: "Knife operation cancel." } },
  ],
  whatItIs: [
    {
      en: "**Knife (`K`)** is a freehand cutting tool. You click points across the mesh; Blender cuts edges through them. Used for adding custom topology, slicing arbitrary shapes, marking detail lines.",
      ur: "**Knife (`K`)** freehand cutting tool. Tum mesh par points click karte; Blender un mein se edges cut. Custom topology, arbitrary shapes slice, detail lines mark karne ke liye.",
    },
    {
      en: "**Bisect (Mesh menu → Bisect)** is a clean planar slice. You drag a line and Blender cuts the mesh perfectly along that plane. Optionally fills the cut and removes one side.",
      ur: "**Bisect (Mesh menu → Bisect)** clean planar slice. Tum line drag karte aur Blender mesh ko us plane ke saath perfectly cut. Optionally cut fill aur aik side remove.",
    },
  ],
  variants: {
    heading: { en: "Knife and Bisect options", ur: "Knife aur Bisect options" },
    items: [
      {
        name: "Knife: Cut Through (Z)",
        description: { en: "Cuts back faces too, not just front. Used to slice all the way through a closed shape.", ur: "Back faces bhi cut, sirf front nahi. Closed shape ke poora cross cut ke liye." },
      },
      {
        name: "Knife: Snap to Midpoint",
        description: { en: "Hold `Shift` while clicking on an edge to snap the cut point to the edge's midpoint.", ur: "Edge par click karte hue `Shift` hold cut point ko edge ke midpoint par snap." },
      },
      {
        name: "Knife: Ignore Snap",
        description: { en: "Hold `Ctrl` to disable snapping during knife. Useful for free placement.", ur: "Knife ke dauran `Ctrl` snap disable. Free placement ke liye useful." },
      },
      {
        name: "Bisect: Clear Inner / Outer",
        description: { en: "After bisecting, optionally delete the geometry on one side of the cut. Half a sphere from a full sphere in one click.", ur: "Bisect ke baad cut ki aik side ki geometry optionally delete. Full sphere se aadha sphere aik click mein." },
      },
      {
        name: "Bisect: Fill",
        description: { en: "Adds a face along the cut plane to seal the result. Without it, the slice leaves an open hole.", ur: "Cut plane ke saath face add karke result seal. Iske baghair slice open hole chhorta." },
      },
      {
        name: "Bisect: Plane Point / Plane Normal",
        description: { en: "Numerical inputs for the cut plane in the operator panel (bottom-left). Used for precision slicing.", ur: "Operator panel (bottom-left) mein cut plane ke numerical inputs. Precision slicing ke liye." },
      },
    ],
  },
  recipe: {
    heading: { en: "Common cuts", ur: "Common cuts" },
    steps: [
      { step: { en: "**Custom panel line**: `K`, click along the path you want, double-click or `Enter` to confirm.", ur: "**Custom panel line**: `K`, jis path par chahiye click karo, double-click ya `Enter`." } },
      { step: { en: "**Half a sphere**: Add UV Sphere → Edit Mode → Select All → Mesh → Bisect → drag along the equator → enable Fill and Clear Inner in operator panel.", ur: "**Aadha sphere**: UV Sphere add → Edit Mode → Select All → Mesh → Bisect → equator par drag → operator panel mein Fill aur Clear Inner enable." } },
      { step: { en: "**Slice off a corner**: Edit Mode → select the corner faces → `K` and click the corner edges to define the cut.", ur: "**Corner slice**: Edit Mode → corner faces select → `K` aur corner edges click cut define." } },
    ],
  },
  pitfalls: [
    { en: "Knife creates triangles and n-gons easily. Plan the cut so it lands on existing vertices when possible.", ur: "Knife asaani se triangles aur n-gons banata. Cut plan karo taake possible ho to existing vertices par lande." },
    { en: "Bisect without 'Fill': result is open at the cut. Boolean and shading break on open meshes.", ur: "Bisect bina 'Fill': cut par open. Boolean aur shading open meshes par break." },
    { en: "Knife missed a face because Cut Through was off: cut went around the visible side only. Press `Z` mid-cut to enable.", ur: "Knife ne face miss kar diya kyunki Cut Through off: cut sirf visible side. `Z` cut ke beech mein enable." },
  ],
  related: [
    { id: "loop-cut", note: { en: "Loop cut adds clean ringed cuts; knife adds custom freehand cuts.", ur: "Loop cut clean ringed cuts; knife custom freehand." } },
    { id: "vertex-edge-face", note: { en: "Cuts can leave behind n-gons that need cleaning.", ur: "Cuts n-gons chhor sakte jo clean karne hote." } },
  ],
};
