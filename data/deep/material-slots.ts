import type { DeepConcept } from "@/lib/deep-types";

export const materialSlotsConcept: DeepConcept = {
  id: "material-slots",
  group: "shading",
  title: { en: "Material Slots", ur: "Material Slots" },
  tagline: {
    en: "One mesh, multiple materials. Different faces of the same object can have different colors, shaders, anything.",
    ur: "Ek mesh, multiple materials. Same object ke alag faces alag colors, shaders, kuch bhi rakh sakte.",
  },
  whatItIs: [
    {
      en: "An object's material panel has a list of 'slots'. Each slot holds one material. Slot 0 is the default, every face starts assigned to slot 0. You can add more slots, create different materials in them, and then in Edit Mode assign specific faces to specific slots.",
      ur: "Object ke material panel mein 'slots' ki list. Har slot ek material rakhta. Slot 0 default, har face slot 0 par assigned start karta. Tum aur slots add kar sakte ho, unme alag materials banao, phir Edit Mode mein specific faces specific slots ko assign.",
    },
    {
      en: "This is how a chair object can have a wood material on its legs and a fabric material on the seat, all in one mesh. Without slots, you'd need separate objects for each material variation, cluttering the outliner.",
      ur: "Yahi tarika hai jis se chair object ke legs par wood aur seat par fabric ek hi mesh mein. Slots ke baghair, har material variation ke liye separate objects chahiye, outliner clutter ho jata.",
    },
  ],
  variants: {
    heading: { en: "Material slot operations", ur: "Material slot operations" },
    items: [
      {
        name: "+ button",
        description: { en: "Adds a new empty slot. The slot starts with no material; you'll need to either create one or pick an existing one from the dropdown.", ur: "Naya empty slot add. Slot bina material start hota; create karna parta ya dropdown se existing pick." },
      },
      {
        name: "- button",
        description: { en: "Removes the selected slot. Faces previously assigned to it default to slot 0.", ur: "Selected slot remove. Pehle assigned faces slot 0 par default." },
      },
      {
        name: "Assign (Edit Mode)",
        description: { en: "With faces selected and a slot active, click 'Assign'. Selected faces now use that slot's material.", ur: "Faces selected aur slot active hone par 'Assign' click. Selected faces ab us slot ka material use karte." },
      },
      {
        name: "Select / Deselect (Edit Mode)",
        description: { en: "Selects (or removes from selection) all faces currently assigned to the active slot.", ur: "Active slot ko assigned saari faces select (ya selection se remove)." },
      },
      {
        name: "New",
        description: { en: "Creates a new material in the active slot. Default name like 'Material.001'.", ur: "Active slot mein new material. Default name 'Material.001' jaisa." },
      },
      {
        name: "Browse (icon next to material name)",
        description: { en: "Pick an existing material from another object in your file. Materials are sharable across objects.", ur: "Apni file ke kisi aur object ka existing material pick. Materials objects ke across shareable hain." },
      },
      {
        name: "Number of users (small number next to name)",
        description: { en: "Shows how many objects use this material. Click to make this object's reference single-user (independent copy).", ur: "Yeh material kitne objects use karte. Click karke is object ka reference single-user banao (independent copy)." },
      },
    ],
  },
  recipe: {
    heading: { en: "Multi-material chair (legs metal, seat red)", ur: "Multi-material chair (legs metal, seat red)" },
    steps: [
      { step: { en: "Object Mode, chair selected. Material panel.", ur: "Object Mode, chair selected. Material panel." } },
      { step: { en: "+ button to add slot 0. Click 'New'. Set up Principled BSDF as metal.", ur: "+ button slot 0 add. 'New' click. Principled BSDF metal banao." } },
      { step: { en: "+ button again for slot 1. Click 'New'. Set up Principled BSDF as red plastic.", ur: "+ button phir slot 1. 'New' click. Principled BSDF red plastic banao." } },
      { step: { en: "Tab into Edit Mode. Face select (`3`).", ur: "Tab Edit Mode. Face select (`3`)." } },
      { step: { en: "Hover over a leg, press `L` to select all linked geometry. Click slot 0 (metal), 'Assign'.", ur: "Leg par hover, `L` se linked geometry select. Slot 0 (metal), 'Assign'." } },
      { step: { en: "Hover over the seat, `L`, click slot 1 (red), 'Assign'.", ur: "Seat par hover, `L`, slot 1 (red) click, 'Assign'." } },
      { step: { en: "Done. One mesh, two materials. Each visible on its assigned faces.", ur: "Done. Ek mesh, do materials. Har ek apni assigned faces par visible." } },
    ],
  },
  pitfalls: [
    { en: "Forgetting to click 'Assign' after selecting faces. The faces stay on their previous slot.", ur: "Faces select karne ke baad 'Assign' click karna bhulna. Faces apne previous slot par reh jati." },
    { en: "Removing a slot but the slot was the *only* user of its material. The material orphans (still in the file but unused). Use Outliner → Orphan Data to clean up.", ur: "Slot remove karna lekin slot us material ka *only* user tha. Material orphan (file mein lekin unused). Outliner → Orphan Data se cleanup." },
  ],
  related: [
    { id: "principled-bsdf", note: { en: "Most slots will hold a Principled BSDF.", ur: "Aksar slots Principled BSDF rakhenge." } },
    { id: "selection-modes", note: { en: "L (linked) is great for selecting all faces of a part.", ur: "L (linked) ek part ke saare faces select karne ke liye great." } },
  ],
};
