import type { DeepConcept } from "@/lib/deep-types";

export const curvesAndBevelDepthConcept: DeepConcept = {
  id: "curves-and-bevel-depth",
  group: "modifiers",
  title: { en: "Curves & Bevel Depth", ur: "Curves aur Bevel Depth" },
  tagline: {
    en: "Take a path; give it thickness; you have a tube. Cables, pipes, ropes, frames, all built this way.",
    ur: "Path lo; thickness do; tube ban gaya. Cables, pipes, ropes, frames, sab is tareeqe se.",
  },
  whatItIs: [
    {
      en: "A curve in Blender is a different object type from a mesh. Where a mesh has vertices/edges/faces, a curve has 'control points' connected by a smooth path. Curves can be Bezier (with handles for tangent control) or NURBS (with weights for refined smoothness).",
      ur: "Curve Blender mein mesh se different object type hai. Mesh mein vertices/edges/faces, curve mein 'control points' jo smooth path se connected. Curves Bezier ho sakti (handles tangent control ke liye) ya NURBS (weights refined smoothness ke liye).",
    },
    {
      en: "Curves don't render directly, they need geometry. The Geometry → Bevel section in curve properties extrudes a circular cross-section along the path, creating a tube. Adjust 'Bevel Depth' for radius and 'Resolution' for smoothness.",
      ur: "Curves directly render nahi hoti, geometry chahiye. Curve properties mein Geometry → Bevel section ek circular cross-section path ke saath extrude karta, tube banata. 'Bevel Depth' radius ke liye aur 'Resolution' smoothness ke liye adjust.",
    },
    {
      en: "Mesh-to-curve conversion (right-click → Convert To → Curve) is the trick most modelers learn after a year. It lets you use mesh edit-mode familiarity to draw a path, then convert to a curve for tube generation. Cleanest pipe-modeling workflow available.",
      ur: "Mesh-to-curve conversion (right-click → Convert To → Curve) woh trick hai jo modelers ek saal baad seekhte. Yeh tumhe mesh edit-mode familiarity se path draw karne deta, phir curve mein convert karke tube generation. Cleanest pipe-modeling workflow.",
    },
  ],
  variants: {
    heading: { en: "Curve geometry options", ur: "Curve geometry options" },
    items: [
      {
        name: "Bevel, Round",
        description: { en: "Generates a round circular tube around the path. Most common.", ur: "Path ke around round circular tube generate. Most common." },
      },
      {
        name: "Bevel, Object",
        description: { en: "Use any mesh object as the cross-section. The 'tube' becomes whatever shape that mesh is.", ur: "Koi bhi mesh object cross-section ke taur pe use. 'Tube' woh shape ban jata jo mesh hai." },
        when: { en: "Custom rail profiles, stylized rope textures, complex extrusions like decorative trims.", ur: "Custom rail profiles, stylized rope textures, complex extrusions jaise decorative trims." },
      },
      {
        name: "Bevel, Profile",
        description: { en: "Use a custom 2D profile drawn in a small graph editor. Halfway between round and full mesh control.", ur: "Custom 2D profile (chote graph editor mein draw). Round aur full mesh control ke beech." },
      },
      {
        name: "Bevel Depth",
        description: { en: "Radius of the round tube. The single most-tweaked value when working with curves.", ur: "Round tube ka radius. Curves ke saath sab se zyada tweaked value." },
      },
      {
        name: "Resolution",
        description: { en: "How many points around the cross-section circle. Higher = smoother. Default 4 (a square tube). Set to 12-16 for round.", ur: "Cross-section circle ke around kitne points. Zyada = smoother. Default 4 (square tube). Round ke liye 12-16 set." },
      },
      {
        name: "Fill Caps",
        description: { en: "Closes the tube at start and end with a cap face. Without this, the tube ends are open.", ur: "Tube ko start aur end par cap face se close karta. Iske baghair tube ke ends open." },
      },
      {
        name: "Twist",
        description: { en: "Allows manual rotation of the cross-section along the path. Used to control how a flat ribbon orients.", ur: "Cross-section ko path ke saath manual rotation deta. Flat ribbon kaise orient ho yeh control karne ke liye." },
      },
    ],
  },
  recipe: {
    heading: { en: "Mesh → Curve → Tube workflow", ur: "Mesh → Curve → Tube workflow" },
    steps: [
      { step: { en: "Add a plane, Edit Mode, `M → At Center`. Single vertex left.", ur: "Plane add, Edit Mode, `M → At Center`. Single vertex bach gaya." } },
      { step: { en: "Extrude (`E`) the vertex in 3D space, building the path you want.", ur: "Vertex ko `E` se 3D space mein extrude, path build karte raho." } },
      { step: { en: "Tab out to Object Mode. Right-click → Convert To → Curve.", ur: "Tab out karke Object Mode. Right-click → Convert To → Curve." } },
      { step: { en: "In Properties → Curve (green icon) → Geometry → Bevel: choose Round, set Depth ~0.02.", ur: "Properties → Curve (green icon) → Geometry → Bevel: Round, Depth ~0.02." } },
      { step: { en: "Adjust Resolution if needed (4 default, 12-16 for smooth).", ur: "Resolution adjust agar zaroori (4 default, smooth ke liye 12-16)." } },
    ],
  },
  pitfalls: [
    { en: "Converting a curve back to mesh permanently locks the depth. If you might want to tweak it, keep it as a curve.", ur: "Curve ko wapas mesh mein convert depth permanently lock kar deta. Agar tweak karna ho to curve hi rakho." },
    { en: "Sharp corners in the path create 'kinks' in the tube. Soften by adjusting handle types in Edit Mode (Vector → Auto), or add subdivision.", ur: "Path mein sharp corners tube mein 'kinks' banate. Soften karne ke liye Edit Mode mein handle types adjust (Vector → Auto), ya subdivision add karo." },
  ],
  related: [
    { id: "extrude", note: { en: "Building the path uses the extrude operator.", ur: "Path build karne mein extrude operator use hota." } },
    { id: "modifier-stack", note: { en: "Curves can have modifiers too.", ur: "Curves par bhi modifiers chal sakte." } },
  ],
};
