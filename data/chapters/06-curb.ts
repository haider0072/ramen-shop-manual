import type { Chapter } from "@/lib/types";

export const curbChapter: Chapter = {
  id: "curb",
  number: 6,
  title: "Sidewalk Curb",
  summary:
    "Ground plane se ek face nikal ke sidewalk curb banta hai. Insert, delete face, extrude. Three steps, done.",
  startsAt: 935,
  status: "complete",
  intro:
    "Chhota chapter hai but ek important pattern dikhata hai. Closed face se 'frame' shape extract karna. Yahi technique baad mein chairs, glass detail, aur kai jagah dohrayi jaayegi.",
  concepts: [
    {
      title: "Insert se inner face, delete original, extrude frame",
      tagline: "Aik trick: insert, delete, extrude. Frame shape ban jayega.",
      timestamp: 945,
      whatItIs:
        "Ground plane ki top face select karo. Use duplicate-separate karke alag object banao. Phir us face mein `I` se insert karo (chhoti face andar). `X → Faces` se delete inner face. Ab tum aik open frame shape ke saath bache ho. `A` sab select karo, `E` se extrude up. Curb ban gaya.",
      whyHere:
        "Curb ek 'border around the ground' hai, beech khali. Solid block extrude karke beech kaat na karna pare, isliye inner face delete karna shortcut hai. Result clean aur fast.",
      recipe: [
        "Ground plane edit mode, top face select.",
        "`Shift+D`, right-click cancel, `P → Selection`. Naya object alag.",
        "Naye object mein edit mode, `A` sab select, `I` se insert (chhota inner face banao).",
        "Inner face select rahti hai by default. `X → Faces`. Inner face gone, outer rim baki.",
        "`A` sab select, `E` se Z axis pe up extrude.",
      ],
      pitfalls: [
        "Insert ka amount kitna ho, yeh visual decision hai. Curb thick chahiye to chhota inset, thin chahiye to bara inset.",
      ],
    },
  ],
};
