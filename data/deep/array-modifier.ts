import type { DeepConcept } from "@/lib/deep-types";

export const arrayModifierConcept: DeepConcept = {
  id: "array-modifier",
  group: "modifiers",
  title: { en: "Array Modifier", ur: "Array Modifier" },
  tagline: {
    en: "Duplicate one mesh in a row, ring, or along a curve. Stairs, fences, chains, gear teeth, all from one base piece.",
    ur: "Aik mesh ko row, ring, ya curve par duplicate. Stairs, fences, chains, gear teeth, sab aik base piece se.",
  },
  whatItIs: [
    {
      en: "Array creates copies of your mesh and offsets each copy by a fixed amount. Edit one, all update. Used everywhere repetitive geometry shows up: a fence is one plank arrayed; a chain is one link arrayed; a staircase is one step arrayed.",
      ur: "Array mesh ki copies banata har copy ko fixed amount offset karke. Aik edit, sab update. Repetitive geometry har jagah: fence = aik plank arrayed; chain = aik link arrayed; staircase = aik step arrayed.",
    },
  ],
  variants: {
    heading: { en: "Array offset modes", ur: "Array offset modes" },
    items: [
      {
        name: "Relative Offset",
        description: { en: "Offsets each copy by a multiple of the mesh's bounding box. (1, 0, 0) means 'one full mesh-length to the right'. Default mode.", ur: "Har copy ko mesh ke bounding box ke multiple se offset. (1, 0, 0) = 'aik full mesh-length right'. Default mode." },
        when: { en: "When you want copies to touch end-to-end regardless of mesh size. Stairs, planks, repeating tiles.", ur: "Jab copies end-to-end touch karein mesh size ki parwah kiye baghair. Stairs, planks, repeating tiles." },
      },
      {
        name: "Constant Offset",
        description: { en: "Offsets by an absolute distance in meters. (2, 0, 0) = always 2m apart no matter the mesh size.", ur: "Absolute distance meters mein offset. (2, 0, 0) = hamesha 2m apart mesh size jo bhi ho." },
        when: { en: "When you need precise spacing (street lamp poles every 5m).", ur: "Precise spacing chahiye (har 5m par street lamp pole)." },
      },
      {
        name: "Object Offset",
        description: { en: "Use another object's transform (usually an Empty) to drive the offset. Rotate that empty: each array copy rotates around it. This is how you make rings, spirals, gears.", ur: "Doosre object (aksar Empty) ki transform offset drive karti. Empty rotate, har array copy uske around rotate. Rings, spirals, gears aise bante." },
        when: { en: "Curved or rotational repetition. Empty rotated 36 degrees with count 10 = full ring.", ur: "Curved ya rotational repetition. Empty 36 degree rotate count 10 = full ring." },
      },
      {
        name: "Fit Type, Fixed Count",
        description: { en: "You set how many copies. Simplest mode.", ur: "Tum count set karte. Simplest mode." },
      },
      {
        name: "Fit Type, Fit Length",
        description: { en: "Blender calculates count to fill the given length. Useful for 'fill this 10m space with steps'.", ur: "Blender count calculate karta given length fill karne ke liye. '10m space ko steps se fill' ke liye useful." },
      },
      {
        name: "Fit Type, Fit Curve",
        description: { en: "Counts copies to fill the length of a curve object. Pair with Curve modifier underneath for chains following a path.", ur: "Curve object ki length tak copies count. Curve modifier neeche ke saath pair karke chains path follow karwao." },
      },
      {
        name: "Merge",
        description: { en: "Vertices within the threshold of adjacent copies merge. Critical for seamless arrays (no visible joints between copies).", ur: "Adjacent copies ke threshold ke andar vertices merge. Seamless arrays ke liye critical (copies ke darmiyan visible joints na hon)." },
      },
      {
        name: "First / Last Cap",
        description: { en: "Different mesh objects placed at the start and end of the array. Like end-caps on a fence or finials on a railing.", ur: "Array ke start aur end par alag mesh objects. Fence ke end-caps ya railing ke finials jaise." },
      },
    ],
  },
  recipe: {
    heading: { en: "Circular array (gear, ring of objects)", ur: "Circular array (gear, ring of objects)" },
    steps: [
      { step: { en: "Place 3D cursor at the center of the future ring. Add an Empty there (`Shift+A → Empty`).", ur: "3D cursor future ring ke center par. Wahan Empty add (`Shift+A → Empty`)." } },
      { step: { en: "Select your base mesh. Add Array modifier.", ur: "Base mesh select. Array modifier add." } },
      { step: { en: "Disable Relative Offset. Enable Object Offset. Pick the Empty.", ur: "Relative Offset disable. Object Offset enable. Empty pick." } },
      { step: { en: "Set Count to 12 (for a 12-spoke gear).", ur: "Count 12 set (12-spoke gear ke liye)." } },
      { step: { en: "Select the Empty. Rotate Z by 30 degrees (360 / 12 = 30). The array forms a perfect ring.", ur: "Empty select. Z 30 degree rotate (360 / 12 = 30). Array perfect ring banata." } },
    ],
  },
  pitfalls: [
    { en: "Array on a non-applied scale: copies get wrong spacing. Apply scale first.", ur: "Non-applied scale par array: copies galat spacing. Pehle apply scale." },
    { en: "Merge threshold too high: copies collapse into each other. Too low: visible seams. Tweak per object.", ur: "Merge threshold zyada: copies aapas mein collapse. Kam: visible seams. Per object tweak." },
    { en: "Object Offset with the empty *parented* to the mesh: infinite loop, Blender freezes. Empty must be free or parented elsewhere.", ur: "Object Offset jis empty ka parent mesh ho: infinite loop, Blender freeze. Empty free ya kahin aur parented." },
  ],
  related: [
    { id: "modifier-stack", note: { en: "Array often combines with Curve and Mirror.", ur: "Array aksar Curve aur Mirror ke saath combine." } },
    { id: "parent-empty", note: { en: "Object Offset uses an empty as the driver.", ur: "Object Offset empty ko driver banata." } },
  ],
};
