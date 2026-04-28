import type { DeepConcept } from "@/lib/deep-types";

export const solidifyConcept: DeepConcept = {
  id: "solidify",
  group: "modifiers",
  title: { en: "Solidify Modifier", ur: "Solidify Modifier" },
  tagline: {
    en: "Add thickness to a paper-thin surface. The fastest way to turn an open mesh into a solid object.",
    ur: "Paper-thin surface mein thickness add karo. Open mesh ko solid object banane ka sab se fast tareeqa.",
  },
  whatItIs: [
    {
      en: "Solidify takes a flat or open mesh, a plane, a half-sphere, anything with a 'paper' feel, and adds thickness to it. The original surface becomes one side; a parallel offset surface becomes the other; side faces are auto-generated to close the volume.",
      ur: "Solidify flat ya open mesh leta, plane, half-sphere, kuch bhi 'paper' feel wala, aur usme thickness add karta. Original surface ek side ban jati; parallel offset surface doosri side; side faces auto-generate hote volume close karne ke liye.",
    },
    {
      en: "The classic use is turning a bowl-like surface into an actual ceramic-thick bowl. Or making a wall (originally a plane) into a 4-inch-thick wall. Cleanest non-destructive thickening tool in Blender.",
      ur: "Classic use bowl-like surface ko actual ceramic-thick bowl banana. Ya wall (originally plane) ko 4-inch-thick wall banana. Blender mein sab se cleanest non-destructive thickening tool.",
    },
  ],
  variants: {
    heading: { en: "Solidify settings", ur: "Solidify ki settings" },
    items: [
      {
        name: "Thickness",
        description: { en: "How thick the offset is. Positive grows outward (along normals); negative grows inward.", ur: "Offset kitna motta. Positive outward (normals ke saath); negative inward." },
      },
      {
        name: "Offset",
        description: { en: "-1 to 1. -1 = thickness grows entirely outward. 0 = grows symmetrically (half each direction). 1 = grows entirely inward. Default: -1.", ur: "-1 se 1. -1 = thickness poori outward. 0 = symmetrically (har taraf half). 1 = poori inward. Default: -1." },
        when: { en: "0 for things that should be 'centered' on the original surface (like wall studs). -1 for things growing outward only (bowl surface, cup walls).", ur: "0 un cheezon ke liye jo original surface par 'centered' rehni (jaise wall studs). -1 un ke liye jo sirf outward grow (bowl surface, cup walls)." },
      },
      {
        name: "Even Thickness",
        description: { en: "Forces uniform thickness across curved surfaces. Without it, sharper curves look thinner. Always on for organic shapes.", ur: "Curved surfaces par uniform thickness force karta. Iske baghair sharper curves thinner lagti. Organic shapes ke liye hamesha on." },
      },
      {
        name: "Rim",
        description: { en: "Generates 'rim' faces that close the volume at boundary edges. Without rim, the open mesh's boundary doesn't close.", ur: "'Rim' faces generate karta jo boundary edges par volume close. Iske baghair, open mesh ki boundary close nahi hoti." },
      },
      {
        name: "Only Rim",
        description: { en: "Only generates the rim (the 'edge ring'), not the offset surface. Used for adding raised borders to an open mesh.", ur: "Sirf rim generate karta ('edge ring'), offset surface nahi. Open mesh par raised borders add karne ke liye." },
      },
      {
        name: "Material Index Offset",
        description: { en: "Different material slots applied to the front, back, and rim of the solidified result. Useful for double-sided shaders.", ur: "Solidified result ki front, back, aur rim ko alag material slots. Double-sided shaders ke liye useful." },
      },
      {
        name: "Crease Inner / Outer / Rim",
        description: { en: "Edge creases applied to the corresponding parts. Used in conjunction with Subdivision to get crisp edges.", ur: "Corresponding parts par edge creases. Subdivision ke saath combine karke crisp edges." },
      },
    ],
  },
  recipe: {
    steps: [
      { step: { en: "Build your shape as an open mesh (e.g., a half-sphere for a bowl).", ur: "Apni shape open mesh ke taur pe banao (e.g., bowl ke liye half-sphere)." } },
      { step: { en: "Add Modifier → Solidify.", ur: "Add Modifier → Solidify." } },
      { step: { en: "Set Thickness positive (~0.05). Bowl thickens outward.", ur: "Thickness positive (~0.05). Bowl outward thicken." } },
      { step: { en: "Enable 'Even Thickness' for uniform wall.", ur: "'Even Thickness' on uniform wall ke liye." } },
      { step: { en: "Add Subdivision Surface (`Ctrl+2`) for ceramic smoothness. Right-click → Shade Smooth.", ur: "Subdivision Surface (`Ctrl+2`) ceramic smoothness ke liye. Right-click → Shade Smooth." } },
    ],
  },
  pitfalls: [
    { en: "Negative thickness on a surface with already-flipped normals: thickness grows inward instead of outward. Recalculate normals first.", ur: "Already-flipped normals wali surface par negative thickness: thickness inward grow karti outward ki bajaye. Pehle normals recalculate." },
    { en: "Without 'Even Thickness', sharp curves look pinched. The default off setting only works on flat or near-flat shapes.", ur: "'Even Thickness' ke baghair sharp curves pinched lagti. Default off setting sirf flat ya near-flat shapes par chalti." },
  ],
  related: [
    { id: "modifier-stack", note: { en: "Solidify + Subdivision is a common combo.", ur: "Solidify + Subdivision common combo hai." } },
    { id: "normals", note: { en: "Solidify uses normals to decide direction.", ur: "Solidify normals use karta direction decide karne ke liye." } },
  ],
};
