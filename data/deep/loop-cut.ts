import type { DeepConcept } from "@/lib/deep-types";

export const loopCutConcept: DeepConcept = {
  id: "loop-cut",
  group: "geometry",
  title: { en: "Loop Cut (Ctrl+R)", ur: "Loop Cut (Ctrl+R)" },
  tagline: {
    en: "Slice new edge loops into your mesh without breaking topology. The cleanest way to add geometry where you need it.",
    ur: "Bina topology torre apni mesh mein nayi edge loops kaat do. Jahan geometry chahiye wahan add karne ka cleanest tareeqa.",
  },
  shortcuts: [
    { keys: "Ctrl + R", meaning: { en: "Start the loop cut tool. Hover over a face to preview where the loop will land.", ur: "Loop cut tool start. Ek face par hover karo preview dekhne ke liye loop kahan land karega." } },
    { keys: "Mouse wheel during preview", meaning: { en: "Add multiple parallel cuts in one operation (2, 3, 4...).", ur: "Ek operation mein multiple parallel cuts add (2, 3, 4...)." } },
    { keys: "Click then move + click", meaning: { en: "Click confirms cut count, mouse drag slides the cut to a custom position, second click confirms.", ur: "Click cut count confirm, mouse drag se custom position pe slide, doosra click confirm." } },
    { keys: "Right-click during slide", meaning: { en: "Cancel slide and leave the cut at the dead-center default.", ur: "Slide cancel aur cut ko dead-center default par chhod do." } },
  ],
  whatItIs: [
    {
      en: "Loop cut adds a new edge loop perpendicular to the edge you hover over, running all the way around your mesh through whatever connected quads it can find. The cut maintains topology, no triangles, no n-gons, just one new clean loop.",
      ur: "Loop cut tumhari hover ki gayi edge ke perpendicular nayi edge loop add karta, mesh ke around connected quads se chalti. Cut topology maintain karta, koi triangles, koi n-gons, sirf ek nayi clean loop.",
    },
    {
      en: "It's the go-to way to add 'just enough' geometry for a detail. Want to bevel only the bottom half of a cube? Loop cut horizontally, then bevel only the new bottom edge. Want to put a doorway in a wall? Loop cut twice (left and right of the door), then extrude.",
      ur: "Yeh detail ke liye 'utni hi' geometry add karne ka go-to tareeqa hai. Cube ka sirf bottom half bevel karna? Horizontally loop cut, phir sirf nayi bottom edge bevel. Wall mein doorway lagani? Do baar loop cut (door ke left aur right), phir extrude.",
    },
  ],
  whyItExists: [
    {
      en: "Modeling needs more vertices in some areas (corners, details) and fewer in others (flat walls). Loop cut surgically adds vertices exactly where they're needed without polluting the rest of the mesh. Without it, you'd have to subdivide everything (multiplying density everywhere) or manually cut edges with knife (slow and error-prone).",
      ur: "Modeling ko kuch areas mein zyada vertices chahiye (corners, details) aur kuch mein kam (flat walls). Loop cut surgically vertices add karta exactly jahan zaroori, bina rest of mesh ko polluted kiye. Iske baghair tumhe sab subdivide karna parta (density har jagah multiply) ya manually knife se edges cut karna parta (slow aur error-prone)." ,
    },
  ],
  howItWorks: [
    {
      en: "Loop cut walks through connected quad faces in the direction perpendicular to the hovered edge. It stops when it hits a non-quad (triangle, n-gon, or end of geometry). On a cube, a loop cut at the middle creates a perfect 4-edge ring around the equator. On a more complex mesh, the cut might be partial.",
      ur: "Loop cut connected quad faces ke through chalta, hovered edge ke perpendicular direction mein. Yeh ruk jata jab non-quad (triangle, n-gon, ya geometry ka end) milta. Cube par middle pe loop cut ek perfect 4-edge ring banati equator par. Zyada complex mesh par cut partial ho sakti.",
    },
  ],
  recipe: {
    heading: { en: "Loop cut workflow", ur: "Loop cut workflow" },
    steps: [
      { step: { en: "Press `Ctrl + R`. Tool is active. Yellow preview line shows where the loop will go as you hover.", ur: "`Ctrl + R` press. Tool active. Yellow preview line dikhati jahan loop jayega tum hover karte hue." } },
      { step: { en: "Hover over the face direction you want. Vertical face = horizontal loop. Horizontal face = vertical loop.", ur: "Jis face direction chahiye us pe hover. Vertical face = horizontal loop. Horizontal face = vertical loop." } },
      { step: { en: "(Optional) Mouse wheel up to add multiple parallel cuts: 2, 3, 4. Useful for evenly-spaced cuts.", ur: "(Optional) Mouse wheel up se multiple parallel cuts: 2, 3, 4. Evenly-spaced cuts ke liye useful." } },
      { step: { en: "Click once to lock the cut count. Now you're in slide mode, mouse drag moves the cut along the face.", ur: "Click se cut count lock. Ab slide mode mein, mouse drag se cut face ke saath move." } },
      { step: { en: "Click again to confirm position. **Or** right-click to cancel slide and leave the cut at the dead-center default.", ur: "Phir click karo position confirm karne ke liye. **Ya** right-click se slide cancel aur cut dead-center default par." } },
    ],
  },
  pitfalls: [
    { en: "Hovering over an n-gon. Loop cut won't preview because it can't walk through. Convert n-gons to quads first.", ur: "N-gon par hover. Loop cut preview nahi karega kyunki walk through nahi kar sakta. Pehle n-gons ko quads mein convert." },
    { en: "Sliding the cut so far that it overlaps an existing edge. The new edge stacks on the old one and looks fine but breaks subdivision and selection. Don't push past the visual middle by too much.", ur: "Cut ko itna slide karna ke existing edge se overlap ho jaye. Nayi edge purani par stack ho ke theek lagti lekin subdivision aur selection toot jati. Visual middle se bohot zyada na push karo." },
    { en: "Adding many loop cuts in dense areas, then realizing the mesh is now too detailed. Modifier-driven workflows (Subdivision Surface) often replace manual loop cuts.", ur: "Dense areas mein bohot saare loop cuts add karna, phir realize karna ke mesh ab too detailed. Modifier-driven workflows (Subdivision Surface) aksar manual loop cuts replace karte." },
  ],
  realWorld: [
    { en: "Hard-surface modeling lives on loop cuts. To make subdivision surface keep a sharp edge, you add 'supporting loops' near the edge with Ctrl+R. The closer the supporting loops, the sharper the resulting corner. This is one of the core tricks of stylized 3D illustration and product modeling.", ur: "Hard-surface modeling loop cuts par chalti. Subdivision surface ko sharp edge rakhne ke liye, edge ke paas 'supporting loops' add karte ho Ctrl+R se. Supporting loops jitne qareeb, resulting corner utna sharp. Yeh stylized 3D illustration aur product modeling ke core tricks mein se ek hai." },
  ],
  related: [
    { id: "loop", note: { en: "Loop cut creates the loops you select with Alt+Click.", ur: "Loop cut wahi loops banata jo tum Alt+Click se select karte." } },
    { id: "knife", note: { en: "Knife is the freehand version when loop cut won't work.", ur: "Knife freehand version jab loop cut kaam nahi karta." } },
    { id: "subdivision-surface", note: { en: "Loop cuts are how you control sharpness under subdivision.", ur: "Loop cuts subdivision ke under sharpness control karne ka tareeqa." } },
  ],
};
