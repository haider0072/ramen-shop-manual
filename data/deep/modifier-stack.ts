import type { DeepConcept } from "@/lib/deep-types";

export const modifierStackConcept: DeepConcept = {
  id: "modifier-stack",
  group: "modifiers",
  title: { en: "Modifier Stack", ur: "Modifier Stack" },
  tagline: {
    en: "A list of non-destructive transformations that run on your mesh in order. Top to bottom. Reorderable. Toggleable. The backbone of clean modeling.",
    ur: "Non-destructive transformations ki list jo tumhari mesh par order mein chalti. Top to bottom. Reorderable. Toggleable. Clean modeling ki backbone.",
  },
  whatItIs: [
    {
      en: "A modifier is a procedural change applied to your mesh on top of the base data. The mesh itself doesn't change; the modifier *computes* a transformed version live for display and render. This is called 'non-destructive' because you can toggle, edit, reorder, or remove the modifier any time without losing your underlying mesh.",
      ur: "Modifier ek procedural change hai jo base mesh data ke upar apply hota. Actual mesh nahi badalti; modifier display aur render ke liye live ek transformed version *compute* karta. Isko 'non-destructive' kehte kyunki tum modifier ko kabhi bhi toggle, edit, reorder, ya remove kar sakte ho bina underlying mesh khoye.",
    },
    {
      en: "Multiple modifiers stack. The first modifier reads your base mesh and outputs a transformed mesh. The second modifier reads *that* output and transforms further. The order matters enormously: 'Bevel then Subdivision' produces a different result than 'Subdivision then Bevel'.",
      ur: "Multiple modifiers stack hote. Pehla modifier base mesh padhta aur transformed mesh output karta. Doosra *us* output ko padhta aur further transform karta. Order bohot matter karta: 'Bevel phir Subdivision' aur 'Subdivision phir Bevel' alag results dete.",
    },
  ],
  whyItExists: [
    {
      en: "Without modifiers, every change you wanted to undo would require re-modeling. Want to try a chunky bevel? Bevel manually, decide it's wrong, undo a hundred steps. Modifiers turn that into one toggle. Want to compare two versions? Hide the modifier or duplicate the object with the modifier on/off.",
      ur: "Modifiers ke baghair, jo bhi change undo karna ho re-modeling chahiye hota. Chunky bevel try? Manually bevel, decide galat hai, 100 steps undo. Modifiers isko ek toggle bana dete. Do versions compare? Modifier hide karo ya object duplicate karo modifier on/off ke saath.",
    },
    {
      en: "They also enable workflows you couldn't do otherwise: real-time mirroring (Mirror modifier), arrays of objects from one mesh (Array), procedural geometry from a few base shapes. Game asset pipelines almost always use modifiers extensively before applying them at the export stage.",
      ur: "Yeh aise workflows bhi enable karte jo warna possible nahi: real-time mirroring (Mirror modifier), ek mesh se multiple objects (Array), few base shapes se procedural geometry. Game asset pipelines almost always modifiers ko extensively use karte aur export stage par apply karte.",
    },
  ],
  howItWorks: [
    {
      en: "Each modifier exposes a 'panel' in Properties → Modifiers (wrench icon). The panel has parameters specific to that modifier. As you tweak a value, Blender re-evaluates the entire stack from the top down and shows you the new result. Even with 5 modifiers stacked, this updates in real time on a modern GPU.",
      ur: "Har modifier Properties → Modifiers (wrench icon) mein ek 'panel' expose karta. Panel mein us modifier ke specific parameters. Tum value tweak karte ho, Blender top se neeche poora stack re-evaluate karta aur naya result dikhata. 5 modifiers stack ke baad bhi real time mein update modern GPU par.",
    },
    {
      en: "The order matters because modifiers can both add and remove geometry. Subdivision adds vertices smoothly. Decimate removes them. Mirror duplicates across an axis. So 'Mirror then Subdivision' subdivides the mirrored result, while 'Subdivision then Mirror' would mirror the subdivided original, sometimes one is right, sometimes the other.",
      ur: "Order matter karta kyunki modifiers geometry add aur remove dono kar sakte. Subdivision smoothly vertices add. Decimate remove. Mirror axis ke across duplicate. Toh 'Mirror phir Subdivision' mirrored result ko subdivide karta, while 'Subdivision phir Mirror' subdivided original ko mirror karta, kabhi ek sahi, kabhi doosra.",
    },
  ],
  variants: {
    heading: { en: "Operations on a modifier", ur: "Modifier par operations" },
    items: [
      {
        name: "Add Modifier",
        description: { en: "The 'Add Modifier' button at the top of the panel. Categorized list of all available modifiers.", ur: "Panel ke top par 'Add Modifier' button. Saare available modifiers ki categorized list." },
      },
      {
        name: "Reorder",
        description: { en: "Drag a modifier up or down to change its position in the stack. Or use the up/down arrows in the modifier's header.", ur: "Modifier ko up/down drag karke stack mein position badlo. Ya modifier header ke up/down arrows use karo." },
      },
      {
        name: "Toggle viewport / render visibility",
        description: { en: "Each modifier has a viewport eye and render camera icon. Toggle to disable the modifier's effect in those contexts.", ur: "Har modifier mein viewport eye aur render camera icon. Toggle karo us context mein modifier ka effect disable karne ke liye." },
        when: { en: "When the modifier is slowing down your viewport (turn it off there but keep it on for render).", ur: "Jab modifier viewport slow kar raha (wahan off karo lekin render ke liye on)." },
      },
      {
        name: "Apply",
        description: { en: "Bakes the modifier permanently into the mesh and removes it from the stack. The transformed result becomes the new base mesh.", ur: "Modifier ko permanently mesh mein bake karta aur stack se remove. Transformed result naya base mesh ban jata." },
        when: { en: "Before exporting (engines don't read modifier stacks), or to lock in a result you're done iterating on.", ur: "Export se pehle (engines modifier stacks nahi padhte), ya jab tumhe result lock karna hai aur iterate khatam." },
      },
      {
        name: "Copy to Selected",
        description: { en: "Drop-down on a modifier's header. Copies that modifier (with its current settings) onto every other selected object.", ur: "Modifier header ka dropdown. Us modifier ko (current settings ke saath) baki saare selected objects par copy." },
        when: { en: "After tuning a bevel modifier on one object, distribute the same settings to 20 others in one click.", ur: "Ek object par bevel modifier tune karne ke baad, ek click mein 20 doosron par same settings distribute." },
      },
      {
        name: "Duplicate",
        description: { en: "Same modifier added a second time to the stack with same settings. Useful for chained subdivisions or layered effects.", ur: "Same modifier dobara stack mein same settings ke saath. Chained subdivisions ya layered effects ke liye useful." },
      },
      {
        name: "Remove",
        description: { en: "Removes the modifier without applying. Underlying mesh is unaffected.", ur: "Modifier ko apply kiye baghair remove. Underlying mesh unaffected." },
      },
    ],
  },
  pitfalls: [
    { en: "Wrong modifier order. 'Subdivision before Bevel' rounds everything; 'Bevel before Subdivision' keeps corners sharp under subdivision. Most stylized illustration leans on the second order.", ur: "Galat modifier order. 'Subdivision Bevel se pehle' sab kuch round; 'Bevel Subdivision se pehle' subdivision ke under corners sharp rakhta. Aksar stylized illustration doosra order use karti." },
    { en: "Modifier looks weird because Apply Scale wasn't done first. Almost all modifier weirdness comes from scaled-but-not-applied objects.", ur: "Modifier weird lagta kyunki Apply Scale pehle nahi kiya. Aksar saari modifier weirdness scaled-but-not-applied objects se aati." },
    { en: "Forgetting to apply before exporting. The exporter sees the un-modified mesh, the engine renders without your bevels and subdivisions, and you wonder where they went.", ur: "Export se pehle apply karna bhulna. Exporter un-modified mesh dekhta, engine bina bevels aur subdivisions render karta, aur tum sochte kahan gaye." },
  ],
  realWorld: [
    { en: "Production studios maintain 'modifier templates' for common asset types. A character has Subsurf + Armature + Solidify (cloth). A prop has Bevel + Subsurf. A foliage has Array + Curve. Once a template is set, artists just clone it onto new objects.", ur: "Production studios common asset types ke 'modifier templates' rakhte. Character: Subsurf + Armature + Solidify (cloth). Prop: Bevel + Subsurf. Foliage: Array + Curve. Template set hone ke baad, artists naye objects par clone kar dete." },
  ],
  related: [
    { id: "bevel-modifier", note: { en: "Most-used modifier in the tutorial.", ur: "Tutorial mein sab se zyada use hone wala modifier." } },
    { id: "subdivision-surface", note: { en: "Smoothing modifier paired with bevel.", ur: "Smoothing modifier bevel ke saath pair hota." } },
    { id: "apply-scale", note: { en: "Apply scale before adding modifiers.", ur: "Modifiers add karne se pehle apply scale." } },
  ],
};
