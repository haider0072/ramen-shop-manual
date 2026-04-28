import type { Chapter } from "@/lib/types";

export const cameraChapter: Chapter = {
  id: "camera",
  number: 8,
  title: "Camera & Composition",
  summary:
    "Camera ko orthographic mein switch karke isometric look. 3D cursor pivot par rotate. Resolution 1600x1200 portrait-ish framing.",
  startsAt: 1180,
  status: "complete",
  intro:
    "Yeh chapter conceptual hai, modeling se zyada photography. Camera ko perspective se orthographic mein le jana, pivot point use karke camera ko angle karna, aur output resolution decide karna. Saari decisions final scene ki framing ko shape karti hain.",
  concepts: [
    {
      title: "Orthographic projection",
      tagline: "Distance se scale change nahi hota. Diorama look ke liye perfect.",
      timestamp: 1190,
      whatItIs:
        "Camera select karo, properties mein 'Lens' section. Default 'Perspective' hota hai. Dropdown se 'Orthographic' chuno. Camera ab depth-distance ko ignore karta hai, sab cheez parallel lines ke saath project hoti hai. Zoom ke liye `Orthographic Scale` field use hoti hai (camera ko move karne ki bajaye).",
      whyHere:
        "Diorama-style scenes mein orthographic ka classic 'isometric' aesthetic hota hai. Far objects chhote nahi hote, near objects bohut bare nahi hote. Visual proportions clean rehte hain. Architecture aur game design pieces aksar isi style mein render hote hain.",
      figmaAnalogy:
        "Figma mein UI mockups bhi 'flat' hote hain, bina perspective. Yahan exactly wahi feel hai 3D mein. Layers ki strict hierarchy preserved.",
      gameDevRelevance:
        "Isometric 2.5D games (Diablo, Stardew Valley, Hades) is exact projection use karte hain. Sprites bhi orthographic Blender renders se export hote hain.",
    },
    {
      title: "3D cursor ko pivot bana ke camera rotate karna",
      tagline: "Camera scene ke center ke around ghoomega, apne origin ke nahi.",
      timestamp: 1240,
      whatItIs:
        "Default pivot 'Median Point' hota hai. Tutorial header mein pivot dropdown se '3D Cursor' chunta hai. Pehle cursor ko `Shift+S → Cursor to World Origin` se (0,0,0) par reset karta hai. Phir camera select karke `R Z` se Z axis pe rotate, ya `R X X` se local X axis pe rotate. Rotation cursor ke around hoti hai, scene par camera 'orbit' karta hai.",
      whyHere:
        "Camera ko scene ke around angle karna hai, apni jagah par rotate nahi karna. Cursor ko reference point banane se camera predictably move karta hai.",
      recipe: [
        "Header → Transform Pivot Point dropdown → '3D Cursor'.",
        "`Shift+S → Cursor to World Origin` (cursor reset).",
        "Camera select karo.",
        "`R Z 30 Enter` se Z axis pe 30° rotate (Z is up).",
        "`R X X` se local X axis pe rotate (camera ko niche tilt).",
        "Done hone par pivot wapas 'Median Point' kar do.",
      ],
      pitfalls: [
        "Pivot 3D cursor par chhod doge to baad mein ek single object scale ya rotate karne par bhi 3D cursor pe pivot ho jayega, weird behavior. Habit banao kaam ke baad pivot reset karne ki.",
      ],
    },
    {
      title: "Render resolution aur orthographic scale",
      tagline: "1600x1200 ki portrait-ish framing. Scale se 'zoom'.",
      timestamp: 1300,
      whatItIs:
        "Properties → Output → Resolution. Tutorial 1600 x 1200 set karta hai (4:3 aspect, slightly tall). Camera ki 'Orthographic Scale' field control karti hai kitni width frame mein dikhegi. Bara value zyada area, chhota value zoom-in.",
      whyHere:
        "1600x1200 traditional illustration ratio hai, dense composition mein detail visible rehti hai. Orthographic scale ko adjust karke scene ko frame mein fit karte hain bina camera physically move kiye.",
    },
  ],
};
