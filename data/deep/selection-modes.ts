import type { DeepConcept } from "@/lib/deep-types";

export const selectionModesConcept: DeepConcept = {
  id: "selection-modes",
  group: "interface",
  title: { en: "Selection, modes and tools", ur: "Selection, modes aur tools" },
  tagline: {
    en: "How you tell Blender 'this thing, please.' From single-click to box, lasso, similar, linked, all of it.",
    ur: "Blender ko kaise batao 'yeh wali cheez chahiye.' Single-click se box, lasso, similar, linked, sab kuch.",
  },
  shortcuts: [
    { keys: "1 / 2 / 3", meaning: { en: "Vertex / Edge / Face select mode (Edit Mode only).", ur: "Vertex / Edge / Face select mode (sirf Edit Mode mein)." } },
    { keys: "A", meaning: { en: "Select all in the current mode.", ur: "Current mode mein sab kuch select karo." } },
    { keys: "Alt + A", meaning: { en: "Deselect all.", ur: "Sab deselect karo." } },
    { keys: "Ctrl + I", meaning: { en: "Invert selection (selected becomes unselected and vice versa).", ur: "Selection invert karo (selected unselected aur ulta)." } },
    { keys: "B", meaning: { en: "Box select, drag a rectangle.", ur: "Box select, rectangle drag karo." } },
    { keys: "C", meaning: { en: "Circle select, paint over what you want.", ur: "Circle select, jo chahiye uske upar paint karo." } },
    { keys: "L (hover)", meaning: { en: "Select Linked, picks all geometry connected to what's under the mouse.", ur: "Select Linked, mouse ke neeche jo cheez hai uske connected geometry sab pick." } },
    { keys: "Shift + Click", meaning: { en: "Add to selection (or remove if already selected).", ur: "Selection mein add karo (ya remove agar already selected)." } },
    { keys: "Alt + Click", meaning: { en: "Loop select, pick the whole edge/face loop in one go.", ur: "Loop select, poora edge/face loop ek click mein." } },
    { keys: "Ctrl + Alt + Click", meaning: { en: "Edge ring (perpendicular to a loop).", ur: "Edge ring (loop ke perpendicular)." } },
  ],
  whatItIs: [
    {
      en: "'Selecting' in Blender means flagging some things as 'I'm working on these next.' The flag affects nothing else, it just narrows what the next operation acts on. Selected things glow orange (the active one is brighter, more white-orange).",
      ur: "Blender mein 'select karna' matlab kuch cheezein flag karna 'main inn par kaam karne wala hun.' Flag aur kuch nahi badalti, sirf yeh narrow karti hai ke next operation kis par hoga. Selected cheezein orange glow karti hain (active one zyada white-orange, brighter).",
    },
    {
      en: "There's a key distinction between **selection** and **active**. You can have ten things selected, but only one is 'active' (the last one clicked). Many operations care about the active one specifically: parenting goes 'all selected become children of active', cursor-to-active uses just the active, and so on.",
      ur: "Ek key farak hai **selection** aur **active** mein. Tumhare paas 10 cheezein selected ho sakti hain, lekin sirf ek 'active' hoti hai (jo last click hui). Bohot operations specifically active wali ko care karte hain: parenting hota hai 'saare selected active ke children ban jate hain', cursor-to-active sirf active use karta hai, etc.",
    },
  ],
  whyItExists: [
    {
      en: "If every operation acted on everything in the scene, modeling would be impossible. Selection is how you scope down. Selection tools are also how you express *intent*, 'I want this loop' is fundamentally different from 'I want everything connected to this face.' Different selection tools serve different intents.",
      ur: "Agar har operation poori scene par chalta, modeling impossible ho jati. Selection scope down karne ka tareeqa hai. Selection tools tumhara *intent* express karne ka bhi tareeqa hain, 'mujhe yeh loop chahiye' aur 'mujhe is face se connected sab kuch chahiye' fundamentally alag hain. Alag selection tools alag intents serve karte hain.",
    },
  ],
  variants: {
    heading: { en: "Edit Mode select submodes (1 / 2 / 3)", ur: "Edit Mode ke select submodes (1 / 2 / 3)" },
    items: [
      {
        name: "Vertex Select",
        keys: "1",
        description: { en: "You can pick individual vertices. Most surgical mode. Same operation behaves differently here than in edge/face mode.", ur: "Individual vertices pick kar sakte ho. Sab se surgical mode. Same operation yahan edge/face mode se alag behave karta hai." },
        when: { en: "Precise tweaks, moving a single corner, merging two stray vertices, vertex bevel.", ur: "Precise tweaks, single corner move karna, do stray vertices merge karna, vertex bevel." },
      },
      {
        name: "Edge Select",
        keys: "2",
        description: { en: "Pick edges. Loop selection (`Alt+Click`) and edge bevel (`Ctrl+B`) live here.", ur: "Edges pick karo. Loop selection (`Alt+Click`) aur edge bevel (`Ctrl+B`) yahin hain." },
        when: { en: "Cleaning up topology, beveling corners of a building, sliding a loop into position.", ur: "Topology cleanup, building ke corners bevel karna, loop ko position mein slide karna." },
      },
      {
        name: "Face Select",
        keys: "3",
        description: { en: "Pick whole faces. Extrude (`E`), inset (`I`), and material assignment all behave 'face-aware' here.", ur: "Poori faces pick karo. Extrude (`E`), inset (`I`), aur material assignment yahan 'face-aware' behave karte hain." },
        when: { en: "Pulling out volumes (extrude), creating recessed panels (inset), assigning materials to specific faces.", ur: "Volumes nikalna (extrude), recessed panels banana (inset), specific faces ko materials assign karna." },
      },
    ],
  },
  recipe: {
    heading: { en: "Selection tools you'll reach for daily", ur: "Roz use hone wale selection tools" },
    steps: [
      { step: { en: "**Box select**: press `B`, drag a rectangle. Anything inside is selected. Hold `Shift` while dragging to add; hold `Ctrl` to subtract.", ur: "**Box select**: `B` press karo, rectangle drag karo. Andar ki har cheez select. `Shift` hold karo to add; `Ctrl` to subtract." } },
      { step: { en: "**Circle select**: press `C`, paint with mouse like a brush. Mouse-wheel scroll resizes the circle. Right-click or `Esc` to exit.", ur: "**Circle select**: `C` press karo, brush ki tarah mouse se paint karo. Mouse wheel circle ka size badalta hai. Right-click ya `Esc` se exit." } },
      { step: { en: "**Lasso**: hold `Ctrl` and right-drag (or use the toolbar lasso tool) to draw a free-form selection shape.", ur: "**Lasso**: `Ctrl` hold karke right-drag (ya toolbar ka lasso tool) free-form selection shape draw karne ke liye." } },
      { step: { en: "**Loop**: `Alt+Click` on an edge in Edge Select mode picks the whole loop around the geometry.", ur: "**Loop**: Edge Select mode mein edge par `Alt+Click` se poora loop pick ho jata hai." } },
      { step: { en: "**Linked**: hover over a piece of mesh and press `L`. Selects everything topologically connected to that point. Useful when several disconnected meshes live in one object.", ur: "**Linked**: ek mesh piece par hover karo aur `L` press karo. Us point se topologically connected sab select. Useful jab ek object mein kai disconnected meshes ho." } },
      { step: { en: "**Similar**: with one thing selected, press `Shift+G` for the Select Similar menu (similar normal, similar material, similar length, etc.). Powerful for bulk operations.", ur: "**Similar**: ek cheez selected ho to `Shift+G` press karo Select Similar menu ke liye (similar normal, similar material, similar length, etc.). Bulk operations ke liye powerful." } },
      { step: { en: "**Invert**: `Ctrl+I` flips selection. Useful when it's easier to pick what you *don't* want and invert.", ur: "**Invert**: `Ctrl+I` selection flip karta hai. Useful jab tum jo *nahi* chahte uski selection asaan ho aur phir invert kar do." } },
    ],
  },
  pitfalls: [
    { en: "X-Ray off + Box select feels wrong: only front-facing geometry gets picked. Toggle X-Ray (`Alt+Z`) before box-selecting through the mesh.", ur: "X-Ray off + Box select galat lagta hai: sirf front-facing geometry pick hoti hai. Mesh ke through box-select karne se pehle X-Ray (`Alt+Z`) toggle karo." },
    { en: "Active vs selected confusion. Last-clicked thing is active (brighter outline). Some tools work on active only, if it's the wrong one, click the right one last.", ur: "Active vs selected confusion. Last-clicked active hota (brighter outline). Kuch tools sirf active par chalte, agar galat hai, sahi wali ko sab se baad mein click karo." },
    { en: "Pressing `A` twice. First press selects all; second press deselects (in some Blender versions/configs). Many users hit it twice by reflex and undo their work.", ur: "`A` do baar press karna. Pehla press sab select; doosra deselect (kuch Blender versions/configs mein). Bohot users reflex se do baar dabate hain aur kaam ulta ho jata." },
  ],
  realWorld: [
    { en: "Selection skills are quietly the biggest speed-up between a beginner and a pro. Pros barely click individual things, they reach for `Alt+click` loop, `L` linked, `Shift+G` similar, box-select with x-ray. Make these reflexive and modeling time drops by half.", ur: "Selection skills quietly beginner aur pro ke darmiyan sab se bara speed-up hai. Pros individual cheezein barely click karte hain, `Alt+click` loop, `L` linked, `Shift+G` similar, x-ray ke saath box-select. Inn reflexes ko muscle memory bana lo, modeling time half ho jata hai." },
  ],
  related: [
    { id: "vertex-edge-face", note: { en: "The three things you're selecting in Edit Mode.", ur: "Edit Mode mein jin teen cheezon ko select kar rahe ho." } },
    { id: "x-ray", note: { en: "Box-select and x-ray together let you grab through the mesh.", ur: "Box-select aur x-ray saath mein mesh ke through pakadne ka tareeqa." } },
    { id: "loop", note: { en: "Loop select is its own deep skill.", ur: "Loop select apni alag deep skill hai." } },
  ],
};
