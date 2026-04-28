import type { DeepConcept } from "@/lib/deep-types";

export const pivotPointConcept: DeepConcept = {
  id: "pivot-point",
  group: "transforms",
  title: { en: "Transform Pivot Point", ur: "Transform Pivot Point" },
  tagline: {
    en: "Where rotation and scale calculate from. Six options. Picking the right one for the job is half the trick.",
    ur: "Rotation aur scale kis point se calculate hote hain. 6 options. Sahi option chunna hi adha kaam hai.",
  },
  shortcuts: [
    { keys: ".  (period)", meaning: { en: "Pivot Point pie menu, fastest way to switch.", ur: "Pivot Point pie menu, switch karne ka sab se fast tareeqa." } },
    { keys: "Header dropdown", meaning: { en: "Top of viewport: 'Transform Pivot Point' icon. Click for the same six options as a dropdown.", ur: "Viewport ke top par: 'Transform Pivot Point' icon. Same 6 options dropdown mein." } },
  ],
  whatItIs: [
    {
      en: "When you press `R` (rotate) or `S` (scale), Blender needs to know 'around what point?' That point is the pivot. Move (`G`) doesn't care about the pivot, it shifts everything by the same amount. Rotate and scale do, because they need a center.",
      ur: "Jab tum `R` (rotate) ya `S` (scale) press karte ho, Blender ko maloom hona chahiye 'kis point ke around?' Wahi point pivot hai. Move (`G`) ko pivot ki parwah nahi, woh sab kuch same amount se shift karta hai. Rotate aur scale ko parwah hai, kyunki unhe center chahiye.",
    },
    {
      en: "Blender gives you six choices for the pivot. By default it's 'Median Point' (the middle of whatever is selected). Sometimes you want it elsewhere, at the 3D cursor, at the active object, at each thing's own origin. Each option exists because real workflows need it.",
      ur: "Blender 6 choices deta hai pivot ke liye. Default 'Median Point' hai (jo selected hai uska middle). Kabhi tumhe kahin aur chahiye, 3D cursor par, active object par, har cheez ke apne origin par. Har option real workflows ke liye exist karta hai.",
    },
  ],
  whyItExists: [
    {
      en: "Imagine you've selected ten chairs and pressed `S` to scale them up. With Median Point pivot, they all expand outward from the group's center, they grow apart. With 'Individual Origins', each chair scales around its own origin and stays in place. Both behaviors are useful; the option lets you pick.",
      ur: "Imagine karo tumne 10 chairs select ki hain aur `S` se scale up kiya. Median Point pivot ke saath, sab group ke center se baahar expand hote hain, alag ho jate hain. 'Individual Origins' ke saath, har chair apne origin ke around scale hoti hai aur jagah par rehti hai. Dono behaviors useful hain; option tumhe pick karne deta hai.",
    },
  ],
  variants: {
    heading: { en: "All six pivot options, what each does", ur: "Saare 6 pivot options, har ek kya karta hai" },
    items: [
      {
        name: "Median Point",
        description: { en: "The arithmetic average of all selected items' centers. The default. Most intuitive for single-selection work.", ur: "Saare selected items ke centers ka arithmetic average. Default. Single-selection work ke liye sab se intuitive." },
        when: { en: "Daily default. Rotate one object, pivots on its origin. Rotate three objects, pivots on the average position.", ur: "Roz ka default. Ek object rotate karo, uske origin par pivot. Teen objects rotate karo, average position par pivot." },
      },
      {
        name: "3D Cursor",
        description: { en: "Pivot is wherever the 3D cursor is sitting. Decoupled from the selection itself.", ur: "Pivot wahan hai jahan 3D cursor baitha hai. Selection se decoupled." },
        when: { en: "Camera orbiting around a scene point. Rotating an arrangement around a chosen anchor (a doorway hinge, the center of a table, the world origin).", ur: "Camera ko scene point ke around orbit karna. Arrangement ko chosen anchor ke around rotate karna (darwaze ka hinge, table ka center, world origin)." },
      },
      {
        name: "Individual Origins",
        description: { en: "Each selected object pivots around *its own* origin, all at once. Group of objects scale in place; rotations spin each on its own axis.", ur: "Har selected object *apne* origin ke around pivot karta hai, sab ek saath. Group of objects jagah par scale; rotations har ek apne axis par spin." },
        when: { en: "You have multiple objects and want each to grow/spin in place rather than 'orbit' the group center.", ur: "Tumhare paas multiple objects hain aur tum chahte ho har ek jagah par grow/spin kare, bina group center ko 'orbit' kiye." },
      },
      {
        name: "Median Point of Active",
        description: { en: "Pivots on the active (last-clicked) object's origin only. Other selected objects swing around it.", ur: "Sirf active (last-clicked) object ke origin par pivot. Doosre selected objects iske around swing." },
        when: { en: "When one object is the 'anchor' and you want everything else to revolve around it (planet around sun, satellites around mothership).", ur: "Jab ek object 'anchor' hai aur baki sab uske around revolve kare (planet around sun, satellites around mothership)." },
      },
      {
        name: "Bounding Box Center",
        description: { en: "The geometric center of the bounding box of all selected items. Different from Median when items are unevenly weighted.", ur: "Saare selected items ke bounding box ka geometric center. Median se different jab items unevenly weighted hon." },
        when: { en: "Useful when one selected mesh has 1000 vertices and another has 10, Median would skew toward the heavier mesh; Bounding Box stays centered visually.", ur: "Useful jab ek selected mesh ke 1000 vertices hain aur doosre ke 10, Median heavier mesh ki taraf skew karta; Bounding Box visually centered rehta." },
      },
      {
        name: "Average Point of Selected",
        description: { en: "Used in Edit Mode mostly: averages the position of selected vertices/edges/faces. Slightly different math than Median in some cases.", ur: "Mostly Edit Mode mein use hota: selected vertices/edges/faces ki position ka average. Median se thoda different math kuch cases mein." },
        when: { en: "Edge cases where Median behavior feels off in dense edit-mode selections.", ur: "Edge cases mein jab dense edit-mode selections mein Median ka behavior off lage." },
      },
    ],
  },
  recipe: {
    heading: { en: "Common pivot switches", ur: "Aam pivot switches" },
    steps: [
      { step: { en: "Camera orbit around scene: place 3D cursor at world origin (`Shift+S → Cursor to World Origin`), set pivot to '3D Cursor', then rotate camera with `R Z`. Camera orbits the scene cleanly.", ur: "Camera ko scene ke around orbit: 3D cursor ko world origin par rakho (`Shift+S → Cursor to World Origin`), pivot '3D Cursor' set karo, phir camera `R Z` se rotate. Camera scene ko cleanly orbit karta hai." } },
      { step: { en: "Scaling 10 props 'in place': select all, switch pivot to 'Individual Origins', press `S` and grow. Each prop scales itself, none drift apart.", ur: "10 props ko 'jagah par' scale karna: sab select, pivot 'Individual Origins', `S` press karke grow. Har prop apne aap ko scale karta hai, koi drift nahi karta." } },
      { step: { en: "Rotating chairs around a table center: place cursor on table, set pivot 3D Cursor, select chairs, `R Z`, chairs orbit the table.", ur: "Chairs ko table ke center ke around rotate: cursor table par rakho, pivot 3D Cursor, chairs select, `R Z`, chairs table ko orbit karte hain." } },
      { step: { en: "After: switch pivot back to 'Median Point' so future operations feel normal again.", ur: "Baad mein: pivot wapas 'Median Point' karo taakay future operations normal lagein." } },
    ],
  },
  pitfalls: [
    { en: "Forgetting to switch back. You set pivot to 3D Cursor for one camera move, walk away, come back tomorrow and `S` makes everything fly across the room. Always reset to Median Point after a custom pivot session.", ur: "Wapas switch karna bhulna. Tumne pivot 3D Cursor set kiya ek camera move ke liye, kal wapas aate ho aur `S` har cheez ko room ke paar fenk deta hai. Custom pivot session ke baad hamesha Median Point pe reset karo." },
    { en: "Assuming pivot affects `G` (grab/move). It doesn't. Move shifts by an offset and ignores pivot completely. Only rotate and scale care.", ur: "Yeh sochna ke pivot `G` (grab/move) ko affect karta hai. Nahi karta. Move offset se shift karta hai aur pivot ko bilkul ignore karta hai. Sirf rotate aur scale ko parwah hoti hai." },
    { en: "Setting pivot to '3D Cursor' but the cursor is far off in space. Now your rotate spins the object across the entire scene. If results feel wild, check where your cursor actually is.", ur: "Pivot '3D Cursor' set karna lekin cursor space mein door kahin. Ab tumhara rotate object ko poori scene ke paar spin karta hai. Agar results wild lagein, check karo cursor actually kahan hai." },
  ],
  realWorld: [
    { en: "Pivot point is the unsung hero of clean rigs and good demos. Want a turntable shot? Pivot 3D Cursor at world origin. Want an exploded view? Pivot Individual Origins, scale up. Want a clock-style hand sweep? Pivot Active Element on the clock hub. The choice of pivot tells the story before any keyframe.", ur: "Pivot point clean rigs aur achhe demos ka unsung hero hai. Turntable shot? Pivot 3D Cursor world origin par. Exploded view? Pivot Individual Origins, scale up. Clock-style hand sweep? Pivot Active Element clock hub par. Pivot ka choice keyframe se pehle hi story bata deta hai." },
  ],
  related: [
    { id: "3d-cursor", note: { en: "The cursor is one pivot option, but a deep concept on its own.", ur: "Cursor ek pivot option hai, lekin apni deep concept hai." } },
    { id: "origin-point", note: { en: "The origin is the *default* pivot for most actions.", ur: "Origin aksar actions ke liye *default* pivot hai." } },
    { id: "g-r-s", note: { en: "Pivot only matters for R and S, not G.", ur: "Pivot sirf R aur S ke liye matter karta, G ke liye nahi." } },
  ],
};
