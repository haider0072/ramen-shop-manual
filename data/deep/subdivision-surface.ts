import type { DeepConcept } from "@/lib/deep-types";

export const subdivisionSurfaceConcept: DeepConcept = {
  id: "subdivision-surface",
  group: "modifiers",
  title: { en: "Subdivision Surface", ur: "Subdivision Surface" },
  tagline: {
    en: "Smooth a low-poly mesh by mathematically inserting more vertices. The single most-used 'make it look nice' modifier in 3D.",
    ur: "Low-poly mesh ko mathematically zyada vertices insert karke smooth karo. 3D mein sab se zyada use hone wala 'achha dikhao' modifier.",
  },
  shortcuts: [
    { keys: "Ctrl + 1 / 2 / 3", meaning: { en: "Add subdivision surface modifier with viewport level 1, 2, or 3.", ur: "Subdivision surface modifier add viewport level 1, 2, ya 3 ke saath." } },
  ],
  whatItIs: [
    {
      en: "Subdivision Surface is a Catmull-Clark algorithm that takes a coarse mesh and outputs a smoother one with more vertices. Each level of subdivision approximately quadruples the vertex count and rounds the geometry further. Level 0 = no subdivision. Level 1 = soft. Level 2 = smooth. Level 3+ = very smooth (and slow).",
      ur: "Subdivision Surface Catmull-Clark algorithm hai jo coarse mesh leta aur smoother version output karta zyada vertices ke saath. Har level approximately vertex count 4× karta aur geometry ko further round karta. Level 0 = no subdivision. Level 1 = soft. Level 2 = smooth. Level 3+ = very smooth (aur slow).",
    },
    {
      en: "Two important fields: **Viewport** level (what you see in 3D viewport) and **Render** level (what gets rendered). Keep viewport low (1) for fast modeling and render high (2-3) for quality output.",
      ur: "Do important fields: **Viewport** level (3D viewport mein kya dikhe) aur **Render** level (render mein kya). Modeling ke time fast experience ke liye viewport low (1) aur quality output ke liye render high (2-3).",
    },
  ],
  whyItExists: [
    {
      en: "You don't want to model with thousands of vertices by hand. Modeling at low poly is faster and more controllable. Subdivision lets you keep that low-poly source while delivering high-poly output. Same source can be exported low-poly to a game engine and high-poly for a cinematic.",
      ur: "Tum hazaron vertices se manually model nahi karna chahte. Low poly modeling fast aur zyada controllable hai. Subdivision tumhe low-poly source rakhne deta high-poly output dete hue. Same source low-poly game engine ko aur high-poly cinematic ko export ho sakta.",
    },
  ],
  howItWorks: [
    {
      en: "Catmull-Clark inserts a vertex at the center of each face, at the midpoint of each edge, and then 'smooths' all vertices toward an average of their neighbors. The result mathematically approximates a smooth surface (a B-spline-like curve) drawn through the original control points.",
      ur: "Catmull-Clark har face ke center par vertex insert karta, har edge ke midpoint par, phir saare vertices ko unke neighbors ke average ki taraf 'smooth' karta. Result mathematically smooth surface approximate karta (B-spline-like curve) original control points ke through.",
    },
    {
      en: "Sharp corners are achieved by adding 'supporting loops' close to the edge you want sharp. The closer the supporting loops, the harder the algorithm pulls the surface to that location, preserving the corner. This is why hard-surface modelers add `Ctrl+R` loop cuts near every edge they want crisp under subdivision.",
      ur: "Sharp corners 'supporting loops' add karke achieve hote, jo sharp edge ke qareeb hain. Jitne qareeb supporting loops, algorithm utna hard surface ko us location par pull karta, corner preserve. Yahi reason hard-surface modelers `Ctrl+R` loop cuts har sharp edge ke paas add karte subdivision ke under.",
    },
  ],
  variants: {
    heading: { en: "Subdivision Surface settings", ur: "Subdivision Surface ki settings" },
    items: [
      {
        name: "Viewport (level)",
        description: { en: "Subdivision used in viewport display. Higher = more detail visible while modeling but slower.", ur: "Viewport display mein subdivision. Zyada = modeling ke time zyada detail lekin slow." },
        when: { en: "Keep at 1-2 for normal modeling. 3+ when checking final smooth shape.", ur: "Normal modeling ke liye 1-2 par rakho. 3+ jab final smooth shape check kar rahe ho." },
      },
      {
        name: "Render (level)",
        description: { en: "Used in final render. Independent of viewport. Higher = smoother result.", ur: "Final render mein use. Viewport se independent. Zyada = smoother result." },
        when: { en: "2-3 typical for stills. 1-2 for animation frames (per-frame render time matters).", ur: "Stills ke liye 2-3 typical. Animation frames ke liye 1-2 (per-frame render time matter karta)." },
      },
      {
        name: "Type, Catmull-Clark (default)",
        description: { en: "Smooths and rounds. Good for organic shapes and most modeling.", ur: "Smooth aur round karta. Organic shapes aur aksar modeling ke liye achha." },
      },
      {
        name: "Type, Simple",
        description: { en: "Subdivides without smoothing, vertices simply insert at midpoints with no rounding. Useful for grid-like meshes that should stay flat.", ur: "Subdivide karta bina smoothing ke, vertices midpoints par insert bina rounding ke. Grid-like meshes jo flat rehne chahiye unke liye useful." },
      },
      {
        name: "Optimal Display",
        description: { en: "Hides the subdivided wireframe in viewport, showing only the original mesh. Cleaner workspace.", ur: "Viewport mein subdivided wireframe hide, sirf original mesh dikhata. Cleaner workspace." },
      },
      {
        name: "Boundary Smooth (Keep Corners / Smooth)",
        description: { en: "How edges of an open mesh (a cup, a half-sphere) are handled. Keep Corners holds them sharp; Smooth rounds them.", ur: "Open mesh ke edges (cup, half-sphere) kaise handle hote. Keep Corners sharp rakhta; Smooth round." },
      },
      {
        name: "UV Smooth",
        description: { en: "How UV islands are smoothed. Has no visual effect on geometry, only UV data.", ur: "UV islands kaise smooth. Geometry par visual effect nahi, sirf UV data par." },
      },
    ],
  },
  recipe: {
    heading: { en: "The Bevel + Subdivision combo (signature look)", ur: "Bevel + Subdivision combo (signature look)" },
    steps: [
      { step: { en: "Add Bevel modifier first (with Harden Normals).", ur: "Pehle Bevel modifier add (Harden Normals ke saath)." } },
      { step: { en: "Then add Subdivision Surface (`Ctrl + 2`).", ur: "Phir Subdivision Surface (`Ctrl + 2`)." } },
      { step: { en: "Right-click → Shade Smooth.", ur: "Right-click → Shade Smooth." } },
      { step: { en: "Result: hard-edged but smoothly-shaded look. The signature 'Polygon Runway / Stylized 3D' aesthetic.", ur: "Result: hard-edged lekin smoothly-shaded look. 'Polygon Runway / Stylized 3D' signature aesthetic." } },
      { step: { en: "Want sharper corners under subdivision? Add `Ctrl+R` loop cuts close to the edges you want crisp.", ur: "Subdivision ke under sharper corners chahiye? Sharp edges ke qareeb `Ctrl+R` loop cuts add." } },
    ],
  },
  pitfalls: [
    { en: "Subdivision before bevel in stack: the bevel can't reach the rounded edges anymore. Wrong order.", ur: "Stack mein subdivision pehle aur bevel baad: bevel rounded edges tak nahi pohanch sakta. Galat order." },
    { en: "Viewport level 4+ on a complex scene = laptop fans full speed. Viewport doesn't need to match render quality.", ur: "Viewport level 4+ complex scene par = laptop fans full speed. Viewport ko render quality match nahi karna." },
    { en: "Open meshes (no closed volume) get weird edge curl with default Boundary Smooth = Smooth. Switch to 'Keep Corners' for cups, planes, and other open shapes.", ur: "Open meshes (no closed volume) default Boundary Smooth = Smooth ke saath weird edge curl karte. Cups, planes, aur baki open shapes ke liye 'Keep Corners' karo." },
  ],
  realWorld: [
    { en: "AAA character pipelines run subdivision at level 6+ for the *high-poly* used to bake normal maps. The actual game-ready mesh is the level-0 source. So one mesh serves two purposes: source for the subdivided high poly, and the actual game asset.", ur: "AAA character pipelines level 6+ subdivision chalate *high-poly* ke liye jo normal maps bake karne mein use hota. Actual game-ready mesh level-0 source. Toh ek mesh do purposes serve karta: subdivided high poly ka source, aur actual game asset." },
  ],
  related: [
    { id: "bevel-modifier", note: { en: "The classic combo partner.", ur: "Classic combo partner." } },
    { id: "modifier-stack", note: { en: "Order matters: bevel before subdivision.", ur: "Order matter: bevel subdivision se pehle." } },
    { id: "loop-cut", note: { en: "Loop cuts add supporting loops to keep corners sharp.", ur: "Loop cuts supporting loops add karte corners sharp rakhne ke liye." } },
  ],
};
