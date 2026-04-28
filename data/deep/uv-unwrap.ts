import type { DeepConcept } from "@/lib/deep-types";

export const uvUnwrapConcept: DeepConcept = {
  id: "uv-unwrap",
  group: "shading",
  title: { en: "UV Unwrapping", ur: "UV Unwrapping" },
  tagline: {
    en: "Flatten a 3D mesh into a 2D map so textures can paint onto it. Like cutting up a paper model and laying it flat.",
    ur: "3D mesh ko 2D map mein flat karna taake textures paint ho sakein. Paper model ko cut karke flat lay karne jaisa.",
  },
  shortcuts: [
    { keys: "U (Edit Mode)", meaning: { en: "Open UV Unwrap menu.", ur: "UV Unwrap menu kholo." } },
    { keys: "Ctrl + E → Mark Seam", meaning: { en: "Mark selected edges as seams (where the unwrap will cut).", ur: "Selected edges ko seams mark (jahan unwrap cut karega)." } },
  ],
  whatItIs: [
    {
      en: "Every 3D mesh has UVs: a parallel 2D coordinate system saying 'this 3D vertex maps to this point on a flat texture'. Without UVs, a texture has no idea how to wrap onto your model.",
      ur: "Har 3D mesh ki UVs: parallel 2D coordinate system jo kehta 'yeh 3D vertex flat texture par is point par map'. UVs ke baghair, texture ko pata nahi tumhare model par kaise wrap ho.",
    },
    {
      en: "Unwrapping is the act of generating those UVs. You mark seams (cut lines), Blender 'unfolds' the mesh along those seams, and lays it flat in the UV Editor. Then you paint or stamp textures onto that flat layout.",
      ur: "Unwrapping woh act jo UVs generate karta. Tum seams (cut lines) mark karte, Blender un seams ke saath mesh 'unfold' karta, aur UV Editor mein flat lay karta. Phir tum us flat layout par textures paint ya stamp.",
    },
  ],
  variants: {
    heading: { en: "Unwrap methods (`U` menu)", ur: "Unwrap methods (`U` menu)" },
    items: [
      {
        name: "Unwrap (Angle Based)",
        description: { en: "Default. Tries to preserve angles. Good general-purpose unwrap. Respects marked seams.", ur: "Default. Angles preserve karne ki koshish. Achha general-purpose unwrap. Marked seams respect." },
      },
      {
        name: "Unwrap (Conformal)",
        description: { en: "Faster, less even. Good for organic shapes where the unwrap doesn't have to be tile-perfect.", ur: "Faster, less even. Organic shapes ke liye achha jahan unwrap tile-perfect na ho." },
      },
      {
        name: "Unwrap (Minimum Stretch)",
        description: { en: "New in 5.x. Optimizes for least texture stretching. Great for character faces and complex curves.", ur: "5.x mein naya. Least texture stretching ke liye optimize. Character faces aur complex curves ke liye great." },
      },
      {
        name: "Smart UV Project",
        description: { en: "Automatic. No seams needed; Blender decides cuts based on face angles. Great for hard-surface props where seams are hidden.", ur: "Automatic. Seams ki zaroorat nahi; Blender face angles se cuts decide. Hard-surface props jahan seams hidden hote." },
      },
      {
        name: "Cube Projection",
        description: { en: "Treats mesh as a cube and projects each face onto the corresponding cube side. Fast for boxy shapes.", ur: "Mesh ko cube treat karke har face ko corresponding cube side par project. Boxy shapes ke liye fast." },
      },
      {
        name: "Cylinder Projection",
        description: { en: "Wraps the UV around as if the mesh were a cylinder. Good for cans, trees, columns.", ur: "UV ko aise wrap kare jaise mesh cylinder ho. Cans, trees, columns ke liye achha." },
      },
      {
        name: "Sphere Projection",
        description: { en: "Wraps as if the mesh were a sphere. Good for planets, eyeballs.", ur: "Aise wrap jaise mesh sphere ho. Planets, eyeballs." },
      },
      {
        name: "Project from View",
        description: { en: "Projects whatever is visible in the current viewport directly onto the UV. Used for face-on detail painting.", ur: "Current viewport mein jo visible directly UV par project. Face-on detail painting ke liye." },
      },
      {
        name: "Pack Islands (UV Editor)",
        description: { en: "Arranges all UV islands efficiently inside the 0-1 UV square so you waste minimal texture space.", ur: "Saare UV islands ko 0-1 UV square mein efficiently arrange taake minimal texture space waste ho." },
      },
    ],
  },
  recipe: {
    heading: { en: "Unwrapping a simple object", ur: "Simple object unwrap" },
    steps: [
      { step: { en: "Edit Mode → switch to Edge select (`2`).", ur: "Edit Mode → Edge select (`2`)." } },
      { step: { en: "Select edges where you'd cut a paper version. For a cube: 7 edges form a cross-pattern unfold.", ur: "Woh edges select jahan paper version cut karte. Cube ke liye: 7 edges cross-pattern unfold." } },
      { step: { en: "`Ctrl + E → Mark Seam`. Seams turn red.", ur: "`Ctrl + E → Mark Seam`. Seams red." } },
      { step: { en: "Select all (`A`). Press `U → Unwrap`.", ur: "Select all (`A`). `U → Unwrap`." } },
      { step: { en: "Open the UV Editor (split your viewport). The flat layout appears. Tweak by selecting and moving in the UV editor.", ur: "UV Editor kholo (viewport split). Flat layout dikhe. Select aur move karke tweak." } },
    ],
  },
  pitfalls: [
    { en: "No seams marked: Blender unwraps with weird automatic cuts. Always plan seams first for predictable results.", ur: "Seams nahi mark: Blender weird automatic cuts. Pehle seams plan predictable results ke liye." },
    { en: "Stretched UVs: textures look smeared. Use 'UV Stretch' display to spot stretched areas, then re-cut seams.", ur: "Stretched UVs: textures smeared lagti. 'UV Stretch' display se stretched areas spot, phir seams re-cut." },
    { en: "Forgetting Pack Islands: UVs scattered all over the 0-1 space, wasting texture pixels.", ur: "Pack Islands bhulna: UVs 0-1 space mein bikhri, texture pixels waste." },
    { en: "Applying scale matters: non-applied scale gives non-uniform UV scale across the mesh.", ur: "Apply scale matter karta: non-applied scale mesh par non-uniform UV scale." },
  ],
  related: [
    { id: "shader-nodes", note: { en: "Texture nodes use UV coordinates by default.", ur: "Texture nodes default UV coordinates use." } },
    { id: "apply-scale", note: { en: "Apply scale before unwrapping.", ur: "Unwrap se pehle apply scale." } },
  ],
};
