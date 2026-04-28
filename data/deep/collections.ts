import type { DeepConcept } from "@/lib/deep-types";

export const collectionsConcept: DeepConcept = {
  id: "collections",
  group: "interface",
  title: { en: "Collections", ur: "Collections" },
  tagline: {
    en: "Folders for objects in the Outliner. Toggle visibility, render-on/off, selectability per group. Like layers in Photoshop but smarter.",
    ur: "Outliner mein objects ke folders. Visibility, render on/off, selectability per group toggle. Photoshop ke layers jaisa lekin smarter.",
  },
  shortcuts: [
    { keys: "M", meaning: { en: "Move selected objects to a collection.", ur: "Selected objects ko collection mein move." } },
    { keys: "Shift + M", meaning: { en: "Link selected objects to a collection (in addition, not move).", ur: "Selected objects ko collection se link (move nahi, additional)." } },
    { keys: "Ctrl + G", meaning: { en: "Create a new collection from selection.", ur: "Selection se naya collection." } },
  ],
  whatItIs: [
    {
      en: "Collections are named groupings of objects. They can nest (a 'Chairs' collection inside a 'Restaurant' collection). Each collection gets its own visibility / selectability / render toggles in the Outliner.",
      ur: "Collections objects ke named groupings. Nest ho sakte ('Chairs' collection 'Restaurant' ke andar). Har collection ka apna visibility / selectability / render toggle Outliner mein.",
    },
    {
      en: "Replaced the old 'Layers' system in Blender 2.8. Far more flexible: any number of collections, any nesting, objects can be in multiple collections at once.",
      ur: "Purana 'Layers' system Blender 2.8 mein replace. Far more flexible: koi bhi count, koi nesting, objects multiple collections mein.",
    },
  ],
  variants: {
    heading: { en: "Collection actions", ur: "Collection actions" },
    items: [
      {
        name: "New Collection",
        description: { en: "Outliner → right-click → New, or `Ctrl+G` to wrap selection.", ur: "Outliner → right-click → New, ya `Ctrl+G` selection wrap." },
      },
      {
        name: "Visibility (eye icon)",
        description: { en: "Hide/show in viewport. Doesn't affect render.", ur: "Viewport mein hide/show. Render par effect nahi." },
      },
      {
        name: "Render Visibility (camera icon)",
        description: { en: "Hide/show in renders. Independent of viewport. Use to render variants without deleting.", ur: "Renders mein hide/show. Viewport se independent. Variants render karne ke liye bina delete." },
      },
      {
        name: "Selectability (cursor icon)",
        description: { en: "Toggle whether you can select objects in this collection. Lock background props once placed.", ur: "Is collection mein objects select ho sakte ya nahi. Background props lock karo place karne ke baad." },
      },
      {
        name: "Holdout",
        description: { en: "Right-click the collection → Holdout. Renders as transparent black 'cutout' in compositing. Used to mask objects out of comp.", ur: "Collection par right-click → Holdout. Compositing mein transparent black 'cutout'. Comp se objects mask karne ke liye." },
      },
      {
        name: "Indirect Only (Cycles)",
        description: { en: "Objects contribute to indirect light bounces but don't render directly. Used for invisible 'bounce cards' that brighten a region.", ur: "Objects indirect light bounces mein contribute lekin directly render nahi. Region brighten karne wale invisible 'bounce cards' ke liye." },
      },
      {
        name: "Disable in Viewport / Render (the closed-eye toggle next to outliner row)",
        description: { en: "Stronger than the eye icon. Disables completely from any evaluation, modifiers stop running. Saves performance on heavy collections.", ur: "Eye icon se zyada strong. Saari evaluation se disable, modifiers ruk jate. Heavy collections ke liye performance save." },
      },
      {
        name: "Move to / Link to (M / Shift+M)",
        description: { en: "Move (`M`) shifts the object to the new collection (removes from old). Link (`Shift+M`) adds without removing.", ur: "Move (`M`) object ko naye collection mein shift (purana se remove). Link (`Shift+M`) bina remove add." },
      },
      {
        name: "Drag-and-drop in Outliner",
        description: { en: "Drag an object onto a collection name to move it. Drag a collection into another to nest.", ur: "Object ko collection name par drag karke move. Collection ko doosre par drag karke nest." },
      },
    ],
  },
  recipe: {
    heading: { en: "Organizing a complex scene", ur: "Complex scene organize karna" },
    steps: [
      { step: { en: "Outliner → right-click → New Collection. Name it 'Architecture'.", ur: "Outliner → right-click → New Collection. Name 'Architecture'." } },
      { step: { en: "Select all walls/floor objects. `M` → Architecture.", ur: "Saari walls/floor objects select. `M` → Architecture." } },
      { step: { en: "Repeat for 'Lights', 'Characters', 'Props'.", ur: "Lights, Characters, Props ke liye repeat." } },
      { step: { en: "While modeling characters, hide Architecture collection (eye icon) so the viewport runs faster.", ur: "Character modeling ke dauran Architecture hide (eye) viewport fast." } },
      { step: { en: "Render variant A: hide Props. Render variant B: show Props. Different shots from same file.", ur: "Render variant A: Props hide. Variant B: Props show. Same file se different shots." } },
    ],
  },
  pitfalls: [
    { en: "Eye icon hides in viewport but the camera icon still shows it in render. Both toggles need attention.", ur: "Eye icon viewport hide lekin camera icon render mein dikhata. Dono toggles attention chahiye." },
    { en: "Multiple objects in multiple collections: `Alt+G` deletes from one but the object still exists in the other. Use 'Delete Hierarchy' to fully remove.", ur: "Multiple objects multiple collections mein: `Alt+G` aik se delete lekin doosri mein zinda. 'Delete Hierarchy' fully remove." },
    { en: "Collection toggled 'Disable in Viewport' makes modifiers stop evaluating. If a child rig depends on it, the rig breaks.", ur: "Collection 'Disable in Viewport' to modifiers ruk jate. Child rig dependency to rig toot." },
  ],
  related: [
    { id: "outliner", note: { en: "Collections live in the Outliner.", ur: "Collections Outliner mein rehte." } },
  ],
};
