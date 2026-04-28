import type { Chapter } from "@/lib/types";

export const buildingShapeChapter: Chapter = {
  id: "building-shape",
  number: 3,
  title: "Building Shape",
  summary:
    "Original cube se shop ka envelope nikalna. Edge bevel se rounded vertical corners, loop cuts se opening, aur extrude inwards se deep entrance.",
  startsAt: 250,
  status: "complete",
  intro:
    "Yahan se actual modeling shuru hoti hai. Building ki primary shape banegi. Critical concepts hain: edge loop selection (Ctrl+Alt+click), edge bevel (Ctrl+B), aur loop cuts (Ctrl+R) jo geometry ko cut karke nayi edges introduce karte hain.",
  concepts: [
    {
      title: "Edge loops aur Ctrl+Alt+click",
      tagline: "Pori vertical loop ek click mein select. Manually edge-by-edge nahi.",
      timestamp: 270,
      whatItIs:
        "Edge select mode (`2`) mein, kisi vertical edge par `Ctrl+Alt+click` karo. Blender us edge se connected pori loop (sab parallel edges jo geometry ke around chalti hain) select kar leta hai.",
      whyHere:
        "Cube ke 4 vertical corners ko ek saath bevel karna hai. Manually 4 edges click karna possible hai lekin loop selection scalable hai (cylinders, complex meshes mein bhi same shortcut).",
      figmaAnalogy:
        "Figma mein agar pen tool se ek shape banayi hai, tum sirf 'loop' (path ka closed circuit) select kar sakte ho ek click mein. Wahi yahan edge loop hai.",
      pitfalls: [
        "Sirf `Alt+click` (without Ctrl) bhi loop select karta hai usually. `Ctrl+Alt+click` 'edge ring' select karta hai (perpendicular loop). Shortcut Blender version ke saath thoda inconsistent hai, dono try karke dekh lo.",
      ],
    },
    {
      title: "Edge Bevel se vertical corners",
      tagline: "Ctrl+B. Mouse wheel se cuts barhao.",
      timestamp: 280,
      whatItIs:
        "Selected edges par `Ctrl+B` press karne se interactive bevel start hota hai. Mouse drag se radius, mouse wheel se segments. Tutorial 3-4 cuts use karta hai for soft round look.",
      whyHere:
        "Buildings ke real-life corners bhi sharp nahi hote, kuch radius hota hai. Especially stylized illustration look mein soft corners professional appearance dete hain.",
    },
    {
      title: "Loop Cut (Ctrl+R) se nayi edges",
      tagline: "Geometry ko cut karke nayi edges add karo bina extrude kiye.",
      timestamp: 305,
      whatItIs:
        "Edit mode mein `Ctrl+R` press karo, mouse hover karo kisi face par. Yellow line dikhegi (preview). Click karne se loop cut yellow line ke saath ban jata hai (default beech mein). Phir mouse move karke position adjust karte ho, click se confirm. Right-click se beech mein hi rakho.",
      whyHere:
        "Building ke front mein opening (door area) banane ke liye nayi vertical edges chahiye thi. Loop cut bina extra extrude kiye geometry mein new structure introduce karta hai. Shop ka 'doorway' carve karne ka cleanest tareeqa.",
      recipe: [
        "`Ctrl+R` press karo, mouse hover face par.",
        "Yellow preview line dikhegi (perpendicular to existing edges).",
        "Click karke confirm, mouse move karke slide.",
        "Right-click karke beech mein hi rakho (default position).",
      ],
      pitfalls: [
        "Mouse position critical hai. Vertical face par hover karoge to vertical loop, horizontal par horizontal. Pehle apna intent clear karo.",
      ],
    },
    {
      title: "Extrude inwards aur normal flip cleanup",
      tagline: "Door ki opening banao, extra faces delete karo, normals fix karo.",
      timestamp: 365,
      whatItIs:
        "Front face select (face mode `3`), `E` press karke andar (negative Y) extrude. Tutorial pehle `/` (numpad) se local view mein jata hai (sirf yeh object dikhega) takay andar ki geometry samajh aaye. Extrude karne ke baad pehli original face aur extruded face dono baki hote hain. Dono ko `X → Faces` se delete kar dete hain. Ab opening completely hollow hai.",
      whyHere:
        "Shop ka entrance hollow hona chahiye. Extruded geometry alone tunnel banata hai, lekin faces delete kar ke 'open hole' banta hai jis se aage interior dikhayi de.",
      recipe: [
        "Face select mode (`3`), front face select karo.",
        "`/` (numpad) se local view enable karo (focus).",
        "`E` press karke `Y` axis pe negative direction mein extrude karo (andar).",
        "Confirm karo. Naye andar wali face select rahti hai.",
        "Original front face (jis se extrude shuru hua) ko bhi select karo (Shift+click).",
        "`X` → Faces se dono delete karo. Hollow opening ban gaya.",
        "`/` se local view exit.",
      ],
      pitfalls: [
        "Extrude ke baad face delete na karo to opening solid wall ke peeche tunnel hai, dikhayi nahi dega.",
        "Extra normals flip ho sakte hain. `Shift+N` se baad mein recalculate kar lo.",
      ],
    },
  ],
};
