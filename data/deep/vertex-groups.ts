import type { DeepConcept } from "@/lib/deep-types";

export const vertexGroupsConcept: DeepConcept = {
  id: "vertex-groups",
  group: "geometry",
  title: { en: "Vertex Groups", ur: "Vertex Groups" },
  tagline: {
    en: "Named subsets of vertices with optional weights. The hidden glue between modeling, rigging, modifiers, and physics.",
    ur: "Vertices ke named subsets optional weights ke saath. Modeling, rigging, modifiers, aur physics ke darmiyan hidden glue.",
  },
  whatItIs: [
    {
      en: "A vertex group is a named selection of vertices saved on the mesh. Each vertex can belong to multiple groups, each with a weight from 0 to 1. Weights mean 'how strongly this vertex belongs' to the group.",
      ur: "Vertex group mesh par save kiya hua named selection. Har vertex multiple groups mein ho sakta, har mein 0 se 1 weight. Weight = 'yeh vertex kitni strongly group mein belong karta'.",
    },
    {
      en: "Used everywhere: armature deformation (which vertices the bone moves), modifier influence (mask a Solidify or Subdivide to a region), particle emission, cloth pinning, hair density. Any feature that needs 'apply this only to part of the mesh' uses a vertex group.",
      ur: "Har jagah use: armature deformation (kaunsi vertices bone move kare), modifier influence (Solidify ya Subdivide ko region tak mask), particle emission, cloth pinning, hair density. Koi bhi feature jisko 'mesh ke part par apply' chahiye, vertex group use karta.",
    },
  ],
  variants: {
    heading: { en: "Vertex group operations", ur: "Vertex group operations" },
    items: [
      {
        name: "Properties → Object Data → Vertex Groups",
        description: { en: "Where you create, name, and delete vertex groups. The `+` adds a group, `-` removes the active group.", ur: "Yahan vertex groups create, name, delete. `+` group add, `-` active remove." },
      },
      {
        name: "Assign / Remove",
        description: { en: "In Edit Mode, select vertices, then click 'Assign' to add them to the active group with the current weight (default 1.0). 'Remove' takes them out.", ur: "Edit Mode mein vertices select, 'Assign' click current weight ke saath active group mein (default 1.0). 'Remove' nikalta." },
      },
      {
        name: "Select / Deselect",
        description: { en: "Click 'Select' to select all vertices in the active group. 'Deselect' inverts. Useful for revisiting a region you set up earlier.", ur: "'Select' active group ki saari vertices select. 'Deselect' invert. Pehle set ki gayi region revisit karne ke liye." },
      },
      {
        name: "Weight (slider)",
        description: { en: "The weight assigned when you click Assign. 1.0 = full influence, 0.5 = half, 0.0 = none. For armatures, gradient weights make smooth bending.", ur: "Assign click karne par weight. 1.0 = full influence, 0.5 = half, 0.0 = none. Armatures ke liye gradient weights smooth bending." },
      },
      {
        name: "Weight Paint Mode",
        description: { en: "Switch to Weight Paint to brush weights onto vertices visually. Red = 1.0, blue = 0.0. The standard way to fine-tune armature deformations.", ur: "Weight Paint mein switch karke vertices par visually weights brush. Red = 1.0, blue = 0.0. Armature deformations fine-tune karne ka standard tareeqa." },
      },
      {
        name: "Modifier 'Vertex Group' field",
        description: { en: "Most modifiers (Solidify, Subdivide, Bevel, Displace, etc.) have a 'Vertex Group' input. Drop a group name in: the modifier only applies where weight > 0, scaled by weight.", ur: "Aksar modifiers (Solidify, Subdivide, Bevel, Displace, etc.) mein 'Vertex Group' input. Group name dalo: modifier sirf weight > 0 par apply, weight ke hisab se scale." },
      },
      {
        name: "Lock Group",
        description: { en: "Padlock icon next to the group. Locked groups can't be modified by Weight Paint. Used to protect a finished group while editing others.", ur: "Group ke saath padlock icon. Locked groups Weight Paint se modify nahi. Doosre edit karte hue finished group protect karne ke liye." },
      },
    ],
  },
  recipe: {
    heading: { en: "Mask a modifier to part of the mesh", ur: "Modifier ko mesh ke part par mask" },
    steps: [
      { step: { en: "Edit Mode → select the vertices that should receive the effect.", ur: "Edit Mode → woh vertices select jin par effect chahiye." } },
      { step: { en: "Properties → Object Data (green triangle) → Vertex Groups → click `+`. Name it (e.g., 'Top').", ur: "Properties → Object Data (green triangle) → Vertex Groups → `+` click. Name (jaise 'Top')." } },
      { step: { en: "Click Assign. Vertices are now in 'Top' with weight 1.0.", ur: "Assign click. Vertices ab 'Top' mein weight 1.0 ke saath." } },
      { step: { en: "Add the modifier (e.g., Solidify). Find the Vertex Group field. Type 'Top'.", ur: "Modifier add (jaise Solidify). Vertex Group field. 'Top' type." } },
      { step: { en: "Modifier now only affects the assigned vertices.", ur: "Modifier ab sirf assigned vertices par." } },
    ],
  },
  pitfalls: [
    { en: "Group name typo in the modifier field: silent failure, modifier behaves as if no group is set. Names are case-sensitive.", ur: "Modifier field mein group name typo: silent failure, modifier aise jaise group set nahi. Names case-sensitive." },
    { en: "Forgetting weights when armature deforming: vertices with weight 0 stay still while bones move, leaving torn geometry.", ur: "Armature deform mein weights bhulna: weight 0 vertices stay, bones move, torn geometry." },
    { en: "Assigning to the wrong active group: the dropdown shows which group is active. Check before clicking Assign.", ur: "Galat active group mein assign: dropdown active group dikhata. Assign se pehle check." },
  ],
  related: [
    { id: "modifier-stack", note: { en: "Most modifiers can be masked by a vertex group.", ur: "Aksar modifiers vertex group se mask ho sakte." } },
  ],
};
