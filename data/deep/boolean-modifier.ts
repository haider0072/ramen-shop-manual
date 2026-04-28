import type { DeepConcept } from "@/lib/deep-types";

export const booleanModifierConcept: DeepConcept = {
  id: "boolean-modifier",
  group: "modifiers",
  title: { en: "Boolean Modifier", ur: "Boolean Modifier" },
  tagline: {
    en: "Cut, combine, or intersect two meshes. The fastest way to drill a hole, slice a piece, or fuse shapes.",
    ur: "Do meshes ko cut, combine, ya intersect. Hole drill, piece slice, ya shapes fuse karne ka sab se fast tareeqa.",
  },
  whatItIs: [
    {
      en: "Boolean uses a 'cutter' object to perform a set operation on your mesh: subtract (cut a hole), union (merge into one), or intersect (keep only the overlap). The cutter is usually hidden after use.",
      ur: "Boolean 'cutter' object use karke mesh par set operation: subtract (hole cut), union (aik mein merge), ya intersect (sirf overlap rakho). Cutter aksar use ke baad hide.",
    },
    {
      en: "Two solver options: **Fast** (older, fragile, fast) and **Exact** (default, slower, robust). Exact handles overlapping coplanar faces, self-intersections, and weird topology that Fast chokes on.",
      ur: "Do solver options: **Fast** (purana, fragile, fast) aur **Exact** (default, slow, robust). Exact overlapping coplanar faces, self-intersections, aur weird topology handle karta jo Fast par toot jate.",
    },
  ],
  variants: {
    heading: { en: "Boolean operation modes", ur: "Boolean operation modes" },
    items: [
      {
        name: "Difference",
        description: { en: "Subtract the cutter from the target. Mesh = Target minus Cutter. Used for drilling holes and cutting slots.", ur: "Cutter ko target se subtract. Mesh = Target minus Cutter. Holes drill aur slots cut karne ke liye." },
      },
      {
        name: "Union",
        description: { en: "Merge target and cutter into one watertight mesh. Used for combining hard-surface parts cleanly.", ur: "Target aur cutter ko aik watertight mesh mein merge. Hard-surface parts cleanly combine." },
      },
      {
        name: "Intersect",
        description: { en: "Keep only the volume both meshes share. Used for masking shapes (cookie cutter style).", ur: "Sirf woh volume rakho jo dono meshes share. Shapes mask karne ke liye (cookie cutter style)." },
      },
      {
        name: "Solver, Exact",
        description: { en: "Default. Robust, handles overlapping geometry and bad topology. Slower on dense meshes.", ur: "Default. Robust, overlapping geometry aur bad topology handle. Dense meshes par slow." },
      },
      {
        name: "Solver, Fast",
        description: { en: "Older solver. Faster but fails on coplanar faces and self-intersections. Use only when Exact is too slow.", ur: "Purana solver. Fast lekin coplanar faces aur self-intersections par fail. Sirf jab Exact bohot slow ho." },
      },
      {
        name: "Self Intersection",
        description: { en: "Lets the solver clean up a mesh that intersects itself. Required for many real-world cutters.", ur: "Solver ko aisi mesh clean karne deta jo apne aap mein intersect. Aksar real-world cutters ke liye required." },
      },
      {
        name: "Hole Tolerant",
        description: { en: "Helps when the result has tiny holes from numerical precision issues. Tries to seal them.", ur: "Result mein numerical precision issues se tiny holes hon to madad. Seal karne ki koshish." },
      },
    ],
  },
  recipe: {
    heading: { en: "Drilling a hole through a wall", ur: "Wall mein hole drill" },
    steps: [
      { step: { en: "Position a cylinder where the hole should be. Make sure it pokes through both sides of the wall.", ur: "Cylinder hole jahan chahiye wahan position. Wall ke dono sides ke through poke kare." } },
      { step: { en: "Select the wall. Add Modifier → Boolean. Operation: Difference. Object: pick the cylinder.", ur: "Wall select. Modifier → Boolean. Operation: Difference. Object: cylinder pick." } },
      { step: { en: "Hide the cylinder (`H`). The wall now has a clean hole.", ur: "Cylinder hide (`H`). Wall mein clean hole." } },
      { step: { en: "Apply when ready (so the cutter can be deleted without losing the hole).", ur: "Ready hone par Apply (cutter delete kar sako bina hole khoye)." } },
    ],
  },
  pitfalls: [
    { en: "Cutter doesn't fully poke through: result has a closed bottom or weird artifacts. Always extend the cutter past both surfaces.", ur: "Cutter poora cross nahi: result mein closed bottom ya weird artifacts. Cutter ko hamesha dono surfaces se aagay extend karo." },
    { en: "Both objects must be 'manifold' (closed, no holes). Open meshes give garbage results. Run Mesh → Cleanup → Fill Holes if needed.", ur: "Dono objects 'manifold' chahiye (closed, no holes). Open meshes garbage result dete. Mesh → Cleanup → Fill Holes zaroorat par." },
    { en: "Boolean output topology is messy (n-gons, triangles). Plan for retopology if you need to subdivide cleanly afterward.", ur: "Boolean output topology gandi (n-gons, triangles). Cleanly subdivide karna ho to retopology plan." },
    { en: "Forgetting to hide the cutter: it shows on top of the cut object. Press `H` after applying the modifier.", ur: "Cutter hide bhulna: cut object ke upar dikhta. Modifier ke baad `H`." },
  ],
  realWorld: [
    { en: "Hard-surface modelers (mech, weapons, vehicles) live in Boolean. They build a library of 'kit-bash' cutter objects (vents, panels, screws) and stamp them onto base meshes. Hardops/BoxCutter addons accelerate this workflow.", ur: "Hard-surface modelers (mech, weapons, vehicles) Boolean mein rehte. 'Kit-bash' cutter objects ki library (vents, panels, screws) bana ke base meshes par stamp. Hardops/BoxCutter addons isko accelerate karte." },
  ],
  related: [
    { id: "modifier-stack", note: { en: "Boolean usually goes early in the stack.", ur: "Boolean aksar stack mein early." } },
    { id: "vertex-edge-face", note: { en: "Boolean output is often n-gon heavy.", ur: "Boolean output aksar n-gon heavy." } },
  ],
};
