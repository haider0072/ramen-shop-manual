import type { DeepConcept } from "@/lib/deep-types";

export const bevelModifierConcept: DeepConcept = {
  id: "bevel-modifier",
  group: "modifiers",
  title: { en: "Bevel Modifier", ur: "Bevel Modifier" },
  tagline: {
    en: "Round off all the sharp edges of an object live, with full control over width, segments, and how corners blend. The 'instant polish' modifier.",
    ur: "Object ki saari sharp edges ko live round karo, width, segments, aur corners kaise blend karein, sab pe full control. 'Instant polish' modifier.",
  },
  whatItIs: [
    {
      en: "Bevel modifier rounds every (or selected) edge of the mesh by a width you specify. Real-life corners are never perfectly sharp, they have a tiny radius. Bevel reproduces that. Visually, it's the single biggest jump from 'this is geometry' to 'this is a real object'.",
      ur: "Bevel modifier mesh ke har (ya selected) edge ko tumhari batayi width se round karta. Real-life corners kabhi perfectly sharp nahi hote, unka thoda radius hota. Bevel woh reproduce karta. Visually, yeh sab se bara jump hai 'yeh geometry hai' se 'yeh real object hai' tak.",
    },
    {
      en: "It's also one of the most-tweaked modifiers because of its options. Width type, segments, miter behavior, harden normals, profile shape, each option changes the look in subtle but important ways. Tutorials often skip these; this concept covers them all.",
      ur: "Yeh sab se zyada tweaked modifiers mein se ek hai uske options ki wajah se. Width type, segments, miter behavior, harden normals, profile shape, har option look ko subtle lekin important ways mein change karta. Tutorials aksar yeh skip karte; yeh concept saare cover karta.",
    },
  ],
  variants: {
    heading: { en: "Every Bevel Modifier setting", ur: "Bevel Modifier ki har setting" },
    items: [
      {
        name: "Width Type, Offset",
        description: { en: "Width is measured along each adjacent face from the edge. Default. Most predictable for uniform thickness.", ur: "Width har adjacent face ke saath edge se measure. Default. Uniform thickness ke liye sab se predictable." },
        when: { en: "Default choice unless something looks off.", ur: "Default choice agar kuch off na lage." },
      },
      {
        name: "Width Type, Width",
        description: { en: "Width is the visual width of the bevel chamfer. The result looks like a 'classic' chamfered edge regardless of face angles.", ur: "Width bevel chamfer ki visual width. Result classic chamfered edge jaisa face angles regardless." },
      },
      {
        name: "Width Type, Depth",
        description: { en: "Distance from the original sharp edge inward to the new bevel surface.", ur: "Original sharp edge se inward naye bevel surface tak distance." },
      },
      {
        name: "Width Type, Percent",
        description: { en: "Width as a percentage of adjacent edge lengths. Good when meshes have varied edge sizes and you want consistent visual feel.", ur: "Width adjacent edge lengths ka percentage. Useful jab mesh mein varied edge sizes hain aur consistent visual feel chahiye." },
      },
      {
        name: "Width Type, Absolute",
        description: { en: "Width in absolute units; ignores adjacent face angles. Most rare, used in technical modeling.", ur: "Width absolute units mein; adjacent face angles ignore. Most rare, technical modeling mein." },
      },
      {
        name: "Width / Amount",
        description: { en: "How wide the bevel is. The single most-tweaked value.", ur: "Bevel kitna wide. Sab se zyada tweaked value." },
      },
      {
        name: "Segments",
        description: { en: "Number of segments in the bevel. 1 = single chamfer. 2-3 = soft round. 5+ = very smooth round.", ur: "Bevel mein segments ki tadaad. 1 = single chamfer. 2-3 = soft round. 5+ = very smooth round." },
        when: { en: "1 segment for stylized look. 2-3 for most renders. Higher only when you need extreme smoothness.", ur: "Stylized look ke liye 1 segment. Aksar renders ke liye 2-3. Zyada sirf jab extreme smoothness chahiye." },
      },
      {
        name: "Limit Method, None",
        description: { en: "Bevels every edge of the mesh, no matter the angle.", ur: "Mesh ka har edge bevel, angle regardless." },
      },
      {
        name: "Limit Method, Angle",
        description: { en: "Only bevel edges where the dihedral angle between adjacent faces is greater than a threshold. Default 30°. Skips flat areas.", ur: "Sirf un edges ko bevel jahan adjacent faces ke darmiyan dihedral angle threshold se zyada. Default 30°. Flat areas skip." },
        when: { en: "Most common. Avoids beveling edges that should stay sharp (flat surfaces' shared edges).", ur: "Sab se common. Un edges ko bevel se bachata jo sharp rehni chahiye (flat surfaces ke shared edges)." },
      },
      {
        name: "Limit Method, Weight",
        description: { en: "Only bevel edges with a weight value > 0 (set in Edit Mode → Properties → Bevel Weight).", ur: "Sirf un edges ko bevel jin ka weight > 0 (Edit Mode → Properties → Bevel Weight set karke)." },
        when: { en: "Surgical control: hand-mark exactly which edges should bevel.", ur: "Surgical control: konsi edges bevel ho yeh hand-mark karo." },
      },
      {
        name: "Limit Method, Vertex Group",
        description: { en: "Bevel only on vertices in a named group.", ur: "Sirf named group ke vertices par bevel." },
      },
      {
        name: "Geometry → Miter Outer (Sharp / Patch / Arc)",
        description: { en: "How outside corners (where two bevels meet on a convex corner) are blended. Sharp = hard intersection (default). Patch = filled patch. Arc = smooth circular arc (the tutorial's choice).", ur: "Outside corners (jahan do bevels convex corner par milte) kaise blend hote. Sharp = hard intersection (default). Patch = filled patch. Arc = smooth circular arc (tutorial ka choice)." },
        when: { en: "Set to **Arc** for clean cube/box geometry where you don't want spikes at corners.", ur: "**Arc** karo clean cube/box geometry ke liye jahan corners par spikes nahi chahiye." },
      },
      {
        name: "Geometry → Miter Inner (Sharp / Arc)",
        description: { en: "Same idea but for inside (concave) corners.", ur: "Wahi idea lekin inside (concave) corners ke liye." },
      },
      {
        name: "Profile",
        description: { en: "Slider 0 to 1. 0.5 = circular round (default). Lower = concave dish. Higher = sharper convex peak. 1 = no bevel (sharp again).", ur: "Slider 0 se 1. 0.5 = circular round (default). Kam = concave dish. Zyada = sharper convex peak. 1 = no bevel (wapas sharp)." },
      },
      {
        name: "Custom Profile",
        description: { en: "Replace the curved profile with a custom shape (you draw it on a small graph). Used for fancy edge profiles like ogees.", ur: "Curved profile ko custom shape se replace (chote graph par draw). Fancy edge profiles jaise ogees ke liye." },
      },
      {
        name: "Shading → Harden Normals",
        description: { en: "Forces edges of the bevel to have crisp normals so shading doesn't soften across them. Vital when combining with Subdivision Surface.", ur: "Bevel ke edges par crisp normals force karta taakay shading unke across soft na ho. Subdivision Surface ke saath combine karne ke liye vital." },
        when: { en: "Always on for hard-surface modeling. The tutorial enables this on every bevel.", ur: "Hard-surface modeling ke liye hamesha on. Tutorial har bevel par enable karta." },
      },
      {
        name: "Shading → Mark Sharp / Seam",
        description: { en: "Auto-mark the bevel edges as sharp or as seams. Useful for downstream tools like UV unwrap or auto-smooth.", ur: "Bevel edges ko auto-mark sharp ya seam. Downstream tools (UV unwrap, auto-smooth) ke liye useful." },
      },
    ],
  },
  recipe: {
    heading: { en: "The 'tutorial-quality' bevel setup", ur: "'Tutorial-quality' bevel setup" },
    steps: [
      { step: { en: "Apply Scale first (`Ctrl+A → Scale`).", ur: "Pehle Apply Scale (`Ctrl+A → Scale`)." } },
      { step: { en: "Add Modifier → Bevel.", ur: "Add Modifier → Bevel." } },
      { step: { en: "Width: small (0.02-0.05 in meters typically).", ur: "Width: small (0.02-0.05 meters typically)." } },
      { step: { en: "Segments: 2.", ur: "Segments: 2." } },
      { step: { en: "Limit Method: Angle, threshold 30° (default).", ur: "Limit Method: Angle, threshold 30° (default)." } },
      { step: { en: "Geometry → Miter Outer: **Arc**.", ur: "Geometry → Miter Outer: **Arc**." } },
      { step: { en: "Shading → **Harden Normals**: on.", ur: "Shading → **Harden Normals**: on." } },
      { step: { en: "Right-click → Shade Smooth on the object.", ur: "Right-click → Shade Smooth object par." } },
      { step: { en: "Done. Sharp corners stay crisp; soft corners gracefully bevel.", ur: "Done. Sharp corners crisp rehte; soft corners gracefully bevel hote." } },
    ],
  },
  pitfalls: [
    { en: "Width too large: corners bleed into each other and look melted. Stay subtle (under 5% of object's smallest dimension).", ur: "Width bohot bara: corners ek doosre mein bleed aur melted lagte. Subtle raho (object ki smallest dimension ka 5% se kam)." },
    { en: "Forgetting Harden Normals when combining with Subdivision Surface. Result: bevel softens too much under subdivision.", ur: "Subdivision Surface ke saath combine karte time Harden Normals bhulna. Result: bevel subdivision ke under bohot soft." },
    { en: "Using default Sharp miter on cube-like geometry. Corners get spiky. Always switch to Arc for boxy shapes.", ur: "Cube-like geometry par default Sharp miter use. Corners spiky. Boxy shapes ke liye hamesha Arc." },
  ],
  related: [
    { id: "modifier-stack", note: { en: "Bevel order matters with subdivision.", ur: "Bevel ka order subdivision ke saath matter karta." } },
    { id: "subdivision-surface", note: { en: "Pair Bevel + Subsurf for the classic stylized look.", ur: "Classic stylized look ke liye Bevel + Subsurf pair." } },
    { id: "apply-scale", note: { en: "Always apply scale before adding bevel.", ur: "Bevel add karne se pehle hamesha scale apply." } },
  ],
};
