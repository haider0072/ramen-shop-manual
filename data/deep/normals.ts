import type { DeepConcept } from "@/lib/deep-types";

export const normalsConcept: DeepConcept = {
  id: "normals",
  group: "geometry",
  title: { en: "Normals", ur: "Normals" },
  tagline: {
    en: "Every face has a 'this is the outside' arrow. Get them wrong and your shading, lights, and modifiers all break.",
    ur: "Har face ka ek 'yeh baahar hai' arrow hota. Galat ho jaye to shading, lights, aur modifiers sab toot jate hain.",
  },
  shortcuts: [
    { keys: "Shift + N", meaning: { en: "Recalculate Normals (Outside), Blender flips faces so they all point outward.", ur: "Recalculate Normals (Outside), Blender faces ko flip karta hai taakay sab outward point karein." } },
    { keys: "Shift + Ctrl + N", meaning: { en: "Recalculate Normals (Inside), flips them all to point inward instead.", ur: "Recalculate Normals (Inside), sab ko inward point karne ke liye flip." } },
    { keys: "Alt + N", meaning: { en: "Normals menu, full set of flip and recalculate options.", ur: "Normals menu, flip aur recalculate ke saare options." } },
    { keys: "Mesh → Normals → Flip", meaning: { en: "Flip selected faces' normals one by one.", ur: "Selected faces ke normals ek-ek karke flip karo." } },
  ],
  whatItIs: [
    {
      en: "A normal is a tiny invisible arrow sticking out perpendicular to a face. It tells Blender 'this is the *outside* side of this face.' Lighting calculations, shading, and modifiers all use this arrow to figure out which way is up.",
      ur: "Normal ek choti invisible arrow hai jo face ke perpendicular nikalti hai. Yeh Blender ko batati hai 'is face ka *baahar* yeh side hai.' Lighting calculations, shading, aur modifiers sab is arrow ko use karte hain decide karne ke liye konsi taraf upar hai.",
    },
    {
      en: "Vertices have normals too, each vertex's normal is the average of the normals of the faces touching it. This is what makes Smooth Shading work: the rendering engine interpolates vertex normals across faces to fake a continuous curved surface from a low-poly mesh.",
      ur: "Vertices ke bhi normals hote hain, har vertex ka normal us se touch karne wali faces ke normals ka average. Yahi Smooth Shading kaam karne ka raaz hai: rendering engine vertex normals ko faces ke across interpolate karta hai taakay low-poly mesh se ek continuous curved surface fake ho.",
    },
    {
      en: "If a normal points the wrong way (inward instead of outward), the face becomes 'invisible' from outside in some renders, lights stop reaching it, and modifiers like Solidify build thickness on the wrong side. The fix is usually one keystroke (`Shift+N`), but you have to *notice* it first.",
      ur: "Agar normal galat direction mein ho (outward ki bajaye inward), face kuch renders mein 'invisible' ho jata hai outside se, lights us tak nahi pohanchti, aur Solidify jaise modifiers galat side par thickness banate hain. Fix aam taur pe ek keystroke (`Shift+N`) hota hai, lekin pehle *notice* karna parta hai.",
    },
  ],
  whyItExists: [
    {
      en: "A face by itself is just a flat region, no inherent 'top' or 'bottom'. Without normals, lighting algorithms wouldn't know which side to brighten when a light hits. Normals are how 3D renderers turn flat polygons into something that responds to light like a real surface.",
      ur: "Face apne aap mein bas ek flat region hai, koi inherent 'top' ya 'bottom' nahi. Normals ke baghair, lighting algorithms ko nahi maloom hota konsi side ko brighten kare jab light hit kare. Normals 3D renderers ko flat polygons ko real surface ki tarah light pe respond karne dene ka tareeqa hain.",
    },
  ],
  howItWorks: [
    {
      en: "Normals are computed from vertex order. A face is defined by a list of vertices, say A→B→C→D. Walk those four in order with your right hand: your thumb points the normal direction. This is the 'right-hand rule', clockwise = pointing one way, counter-clockwise = the other. Flipping a face's normal is literally reversing the vertex order.",
      ur: "Normals vertex order se compute hote hain. Ek face vertices ki list se define hota, maan lo A→B→C→D. Inn 4 ko apne right hand se order mein walk karo: thumb normal ki direction batata hai. Yeh 'right-hand rule' hai, clockwise = ek direction, counter-clockwise = doosri. Face ka normal flip karna literally vertex order reverse karna hai.",
    },
    {
      en: "Extruding inward (negative direction) from a face flips the normal of the new geometry, that's why the tutorial's down-extrude on the base plane caused red Face Orientation. Pulling a face into the mesh creates an inside-out region.",
      ur: "Face se inward (negative direction) extrude karna naye geometry ka normal flip kar deta, yahi reason hai tutorial ke base plane par downward extrude se Face Orientation red dikha. Face ko mesh ke andar pull karna ek inside-out region create karta hai.",
    },
  ],
  variants: {
    heading: { en: "All the things in the Normals menu (Alt+N)", ur: "Normals menu mein saari cheezein (Alt+N)" },
    items: [
      {
        name: "Recalculate Outside",
        keys: "Shift + N",
        description: { en: "Blender inspects connected geometry and flips whatever's needed so all normals point outward (away from the volume's interior).", ur: "Blender connected geometry inspect karta aur jo zaroori ho flip karta taakay saare normals outward point karein (volume ke interior se door)." },
        when: { en: "Default fix when faces look red in Face Orientation overlay. Works on most closed meshes.", ur: "Default fix jab Face Orientation overlay mein faces red dikhein. Aksar closed meshes par kaam karta." },
      },
      {
        name: "Recalculate Inside",
        keys: "Shift + Ctrl + N",
        description: { en: "Inverse, flips so normals all point inward.", ur: "Ulta, sab ko inward point karne ke liye flip." },
        when: { en: "You're modeling something where 'inside out' is intentional, like a room interior viewed from inside.", ur: "Tum kuch aisa model kar rahe ho jahan 'inside out' intentional hai, jaise room interior jo andar se dekhi jaye." },
      },
      {
        name: "Flip",
        description: { en: "Manually flips the selected faces' normals. Doesn't try to be smart, just inverts vertex order.", ur: "Selected faces ke normals ko manually flip karta. Smart hone ki koshish nahi karta, bas vertex order invert." },
        when: { en: "When recalculate gets confused (e.g., complex non-manifold mesh) and you need surgical control.", ur: "Jab recalculate confuse ho jata (e.g., complex non-manifold mesh) aur tumhe surgical control chahiye." },
      },
      {
        name: "Set From Faces",
        description: { en: "Resets vertex normals to match face normals exactly. Used to clear custom split normals.", ur: "Vertex normals ko exactly face normals ke saath match karne ke liye reset. Custom split normals clear karne ke liye." },
        when: { en: "After importing a model where someone set weird custom vertex normals; resets to defaults.", ur: "Jab koi import kiya model hai jisme weird custom vertex normals set the; defaults par reset." },
      },
      {
        name: "Smooth Faces / Flat Faces",
        description: { en: "Toggles whether shading interpolates vertex normals across the face (smooth) or uses the single face normal (flat).", ur: "Decide karta ke shading vertex normals ko face ke across interpolate kare (smooth) ya single face normal use kare (flat)." },
        when: { en: "Per-face shading control. Sharp corner = flat. Curved area = smooth. Mix freely on the same mesh.", ur: "Per-face shading control. Sharp corner = flat. Curved area = smooth. Same mesh par freely mix karo." },
      },
      {
        name: "Average → Custom Normal",
        description: { en: "Averages selected vertex normals into a single custom direction. Advanced, used for hard-surface shading tricks.", ur: "Selected vertex normals ko ek single custom direction mein average karta. Advanced, hard-surface shading tricks ke liye use." },
      },
    ],
  },
  recipe: {
    heading: { en: "Diagnosing and fixing flipped normals", ur: "Flipped normals ko diagnose aur fix karna" },
    steps: [
      { step: { en: "Top-right of viewport, click the Overlays dropdown. Tick 'Face Orientation'.", ur: "Viewport ke top-right, Overlays dropdown click karo. 'Face Orientation' tick karo." } },
      { step: { en: "Faces turn blue (correct) or red (flipped). Spot any red ones.", ur: "Faces blue (sahi) ya red (flipped) ho jate hain. Koi red dhoondo." } },
      { step: { en: "Enter Edit Mode (`Tab`). Press `A` to select all.", ur: "Edit Mode mein jao (`Tab`). `A` se sab select karo." } },
      { step: { en: "Press `Shift + N` to recalculate outside. Most red faces flip blue.", ur: "`Shift + N` se recalculate outside. Aksar red faces blue ho jate hain." } },
      { step: { en: "If some are still red (rare), select just those, press `Alt + N` → Flip.", ur: "Agar kuch abhi bhi red hain (rare), unhe select karo, `Alt + N` → Flip." } },
      { step: { en: "Toggle Face Orientation off when done, it's distracting during normal modeling.", ur: "Done hone par Face Orientation off karo, normal modeling ke time distracting hai." } },
    ],
  },
  pitfalls: [
    { en: "Modeling without ever checking normals. Everything looks fine until you add a Solidify or Bevel modifier and suddenly the geometry flips inside-out. The earlier you catch flipped normals, the easier the fix.", ur: "Normals check kiye baghair modeling. Sab theek lagta jab tak Solidify ya Bevel modifier add nahi karte aur achanak geometry inside-out ho jati. Flipped normals jitni jaldi catch karoge, fix utna asaan." },
    { en: "Recalculating normals on a non-manifold mesh (mesh with holes, dangling edges) gives unpredictable results. Fix the topology first.", ur: "Non-manifold mesh (holes, dangling edges) par normals recalculate karna unpredictable results deta. Pehle topology fix karo." },
    { en: "Mixing flat and smooth shading and forgetting which is which. Use Mark Sharp + Auto Smooth from the Object Data → Normals settings to control crease lines cleanly.", ur: "Flat aur smooth shading mix karna aur bhulna konsi kya hai. Object Data → Normals settings se Mark Sharp + Auto Smooth use karke crease lines cleanly control karo." },
  ],
  realWorld: [
    { en: "Game engines are unforgiving about flipped normals. A wall imported with inverted normals will disappear when the camera enters the room, only the back wall stays visible. Studios run automated 'normal sanity' checks before any asset goes into production.", ur: "Game engines flipped normals ke saath unforgiving hote. Inverted normals wali wall room mein camera enter karte hi gayab ho jati, sirf back wall visible. Studios production se pehle automated 'normal sanity' checks chalate hain har asset par." },
    { en: "Hand-painted normal maps and custom normals are how stylized games (Genshin Impact, BotW) get that flat-shaded-but-still-readable look. The geometry's normals are 'lied to' by the texture so light hits each surface in a deliberately unrealistic way.", ur: "Hand-painted normal maps aur custom normals aise hain stylized games (Genshin Impact, BotW) flat-shaded-lekin-readable look kaise paate hain. Geometry ke normals ko texture 'jhoot' bolta taakay light har surface par deliberately unrealistic tareeqe se padein." },
  ],
  related: [
    { id: "vertex-edge-face", note: { en: "Normals are properties of faces and vertices.", ur: "Normals faces aur vertices ki properties hain." } },
    { id: "modifier-stack", note: { en: "Solidify, Bevel, Subdivision all rely on correct normals.", ur: "Solidify, Bevel, Subdivision sab correct normals par depend karte hain." } },
    { id: "principled-bsdf", note: { en: "Shading interprets normals to decide brightness.", ur: "Shading normals ko interpret karke brightness decide karta hai." } },
  ],
};
