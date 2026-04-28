import type { DeepConcept } from "@/lib/deep-types";

export const parentEmptyConcept: DeepConcept = {
  id: "parent-empty",
  group: "animation",
  title: { en: "Parenting + Empty Objects", ur: "Parenting + Empty Objects" },
  tagline: {
    en: "Make one object follow another. With invisible 'helper' empties as anchors, you build flexible rigs without armatures.",
    ur: "Ek object ko doosre se follow karwao. Invisible 'helper' empties anchors ke taur pe, tum bina armatures flexible rigs bana sakte ho.",
  },
  shortcuts: [
    { keys: "Ctrl + P", meaning: { en: "Parent selected to active. Active object becomes parent, selected become children.", ur: "Selected ko active ka parent. Active parent, selected children." } },
    { keys: "Alt + P", meaning: { en: "Clear parent menu (unparent options).", ur: "Parent clear menu (unparent options)." } },
    { keys: "Shift + A → Empty", meaning: { en: "Add an empty (invisible helper object).", ur: "Empty add (invisible helper object)." } },
  ],
  whatItIs: [
    {
      en: "A 'parent' relationship makes the child object inherit the parent's transforms. Move the parent, the child moves with it. Rotate the parent, the child rotates around the parent's origin. Scale the parent, child scales too.",
      ur: "'Parent' relationship child object ko parent ke transforms inherit karwati. Parent move karo, child saath. Parent rotate karo, child parent ke origin ke around rotate. Parent scale karo, child bhi scale.",
    },
    {
      en: "An 'empty' is an invisible-at-render-time helper object. It has a location, rotation, scale, and an origin, but no mesh. Empties exist purely to be transformed and to act as anchors for other things to parent to.",
      ur: "'Empty' invisible-at-render-time helper object hai. Iski location, rotation, scale, aur origin hai, lekin mesh nahi. Empties bas transform hone aur baki cheezon ke parent banne ke liye exist karte.",
    },
    {
      en: "Together: empty as the parent, real objects as children. Move/rotate the empty and everything attached follows. The empty becomes a 'rig handle', a single grip you control to move complex setups.",
      ur: "Saath mein: empty parent, real objects children. Empty move/rotate karo aur saari attached cheezein follow. Empty ek 'rig handle' ban jata, ek single grip jis se complex setups control hote.",
    },
  ],
  whyItExists: [
    {
      en: "Animating a camera directly is a nightmare for orbits, the camera's local rotation conflicts with its position. Instead, parent the camera to an empty at the orbit center; rotate the empty; camera orbits cleanly. Same trick works for groups of props, mechanical assemblies, vehicle wheels, anything with hierarchical motion.",
      ur: "Camera ko directly animate karna orbits ke liye nightmare, camera ki local rotation position ke saath conflict karti. Iske bajaye camera ko orbit center par ek empty ka parent banao; empty rotate karo; camera cleanly orbit. Same trick props ke groups, mechanical assemblies, vehicle wheels, hierarchical motion wali kuch bhi cheezon ke liye chalti.",
    },
  ],
  variants: {
    heading: { en: "Parenting variants and empty types", ur: "Parenting variants aur empty types" },
    items: [
      {
        name: "Parent, Object",
        description: { en: "Standard parenting. Child inherits all transforms.", ur: "Standard parenting. Child saare transforms inherit." },
        when: { en: "Most common. Camera-to-empty, prop-to-anchor, etc.", ur: "Most common. Camera-to-empty, prop-to-anchor, etc." },
      },
      {
        name: "Parent, Object (Without Inverse)",
        description: { en: "Same as Object but without applying the inverse transform that 'snaps back' the child. Child may jump to parent's space.", ur: "Object jaisa lekin inverse transform ke baghair jo child ko 'snap back' karta. Child parent's space mein jump kar sakta." },
      },
      {
        name: "Parent, Vertex",
        description: { en: "Child follows a single specific vertex of the parent mesh. Used for rigs that ride along deforming surfaces.", ur: "Child parent mesh ke ek specific vertex ko follow karta. Deforming surfaces par ride karne wale rigs ke liye." },
      },
      {
        name: "Parent, Vertex (3 Vertices)",
        description: { en: "Same but follows the average of three specific vertices. More stable for large surfaces.", ur: "Same lekin 3 specific vertices ka average follow karta. Bare surfaces ke liye more stable." },
      },
      {
        name: "Empty type, Plain Axes",
        description: { en: "Three colored arrows showing X/Y/Z. Default for most rigs.", ur: "Teen colored arrows X/Y/Z dikhati. Most rigs ke liye default." },
      },
      {
        name: "Empty type, Cube / Sphere / Single Arrow",
        description: { en: "Visual variants for clarity. Behave identically.", ur: "Clarity ke liye visual variants. Identically behave karte." },
      },
      {
        name: "Empty type, Image",
        description: { en: "Empty that displays a reference image in the viewport. Used for reference-image-driven modeling.", ur: "Viewport mein reference image dikhata empty. Reference-image-driven modeling ke liye." },
      },
    ],
  },
  recipe: {
    heading: { en: "Turntable rig (camera around scene)", ur: "Turntable rig (camera scene ke around)" },
    steps: [
      { step: { en: "`Shift + A → Empty → Plain Axes`. Empty spawns at world origin (or wherever cursor is).", ur: "`Shift + A → Empty → Plain Axes`. Empty world origin par (ya jahan cursor)." } },
      { step: { en: "Click camera (selects camera). Then `Shift+click` empty (last clicked = active = parent).", ur: "Camera click (camera select). Phir `Shift+click` empty (last clicked = active = parent)." } },
      { step: { en: "Press `Ctrl + P → Object`. Camera becomes child of empty. Outliner shows the hierarchy.", ur: "`Ctrl + P → Object`. Camera empty ka child. Outliner hierarchy dikhata." } },
      { step: { en: "Now select the empty alone. Rotate it (`R Z 90`), the camera rotates around the empty's location.", ur: "Ab sirf empty select. Rotate karo (`R Z 90`), camera empty ki location ke around rotate." } },
      { step: { en: "Animate by keyframing the empty's Z rotation. Camera follows.", ur: "Empty ki Z rotation keyframe karke animate. Camera follow karta." } },
    ],
  },
  pitfalls: [
    { en: "Parenting in the wrong order. Last-clicked = active = parent. If you click the empty first, then the camera, the empty becomes child, not parent. Annoying first time.", ur: "Galat order mein parenting. Last-clicked = active = parent. Empty pehle click, phir camera, empty child ban jati, parent nahi. Pehli baar annoying." },
    { en: "Parent gets accidentally hidden in Outliner. Children also hide (because parent is the visibility container). Look for the parent's hidden state if children mysteriously disappear.", ur: "Parent galti se Outliner mein hide. Children bhi hide (kyunki parent visibility container hai). Children mysteriously disappear ho to parent ka hidden state check karo." },
    { en: "Applying transforms on a parented child gives weird results. Apply on the parent, not the children. Or unparent first, apply, re-parent.", ur: "Parented child par transforms apply weird results deta. Parent par apply karo, children par nahi. Ya pehle unparent, apply, re-parent." },
  ],
  related: [
    { id: "keyframes", note: { en: "Keyframes on empties = rig animation.", ur: "Empties par keyframes = rig animation." } },
    { id: "mesh-vs-object", note: { en: "Empties don't have mesh data, just object transforms.", ur: "Empties ki mesh data nahi, sirf object transforms." } },
  ],
};
