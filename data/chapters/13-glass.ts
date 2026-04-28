import type { Chapter } from "@/lib/types";

export const glassChapter: Chapter = {
  id: "glass",
  number: 13,
  title: "Glass Detail",
  summary:
    "Counter pe ek glass ka block-out. Same pattern as bowl: circle, fill, extrude, top face delete, solidify, subdivision.",
  startsAt: 2750,
  status: "complete",
  intro:
    "Yeh chapter intentionally short hai. Tutorial author isko ek 'pattern recognition test' ki tarah present karta hai. Tum bowl banana already seekh chuke ho. Ab same exact pattern slightly different proportions ke saath glass banane ke liye use karo. Reinforcement.",
  concepts: [
    {
      title: "Bowl pattern, alag proportions",
      tagline: "Circle → fill → extrude up → top face delete → bottom bevel → solidify → subdivision.",
      timestamp: 2780,
      whatItIs:
        "Saare exact same steps as ramen bowl chapter. Sirf proportions alag: glass tall aur narrow hota hai. Circle add (12-18 vertices), `S` se chhota karo, `F` se fill, `E Z` se up extrude tall amount, top loop select karke `X → Faces` se delete (open top), bottom loop ko `Ctrl+B` se thoda bevel for round bottom edge. Object mode mein Solidify + Subdivision.",
      whyHere:
        "Author dikhata hai ke 'cooking patterns' kaisey banti hain Blender mein. Ek pattern (cylindrical hollow vessel) seekh lo, glass, vase, mug, sab same way bante hain.",
      gameDevRelevance:
        "Asset library banate waqt repeating patterns ki yeh recognition critical hoti hai. Tum 5-6 'cooking patterns' seekh lo, fir 100 alag-alag props in patterns ki variations se ban sakte hain.",
      recipe: [
        "Counter ke piche space par cursor place karo.",
        "`Shift+A → Mesh → Circle`, vertices 12-18.",
        "`Tab` edit mode, `S` se chhota.",
        "`F` se fill bottom.",
        "`E Z` se tall extrude.",
        "Top loop `Alt+click`, `X → Faces`.",
        "Bottom loop `Alt+click`, `Ctrl+B` thoda round.",
        "`Tab` out, Solidify modifier with thin thickness.",
        "`Ctrl+2` subdivision, right-click → Shade Smooth.",
      ],
    },
  ],
};
