import type { Chapter } from "@/lib/types";

export const cablesChapter: Chapter = {
  id: "cables",
  number: 10,
  title: "Cables & Pipes",
  summary:
    "Tutorial ka sab se reusable trick. Single vertex se shuru karo, extrude karte jao, mesh ko curve mein convert karo, bevel depth do. Pipe ban gaya. Yahi pattern cables, pipes, frames, har jagah.",
  startsAt: 1500,
  status: "complete",
  intro:
    "Pichle chapter mein Bowl pe solidify+subdivision dekha. Yeh chapter ek aur powerful workflow introduce karta hai: mesh-to-curve. Concept simple hai. Path khinchao, depth do, pipe ban gaya. Kal tum apne game ke har railing, lamp post, ya wire ke liye yahi pattern use karoge. Master karna critical hai.",
  concepts: [
    {
      title: "Single vertex se shuru karna",
      tagline: "Plane add, M se merge at center. Ek hi vertex bach gaya.",
      timestamp: 1520,
      whatItIs:
        "`Shift+A` se Plane add karo. Edit mode mein `A` sab select. `M` press karke 'At Center' chuno. Plane ke 4 vertices merge ho ke ek single vertex ban jate hain at object's origin. Ab tumhare paas ek lone vertex hai jisse extrude karke kuch bhi shape banayi ja sakti hai.",
      whyHere:
        "Curves ka workflow start mein vertex chahiye. Plane add karke usse vertex banane se vertex ka location, origin sab kuch automatically sahi jagah hota hai (jahan tumne plane add kiya, wahan).",
      figmaAnalogy:
        "Pen tool start karne se pehle ek anchor point rakhna jaisa. Yeh pehla anchor hai, baki extrude se add honge.",
    },
    {
      title: "Extrude se path build karna",
      tagline: "E Z, E X, E Y. Kahan jana hai bas press karo.",
      timestamp: 1540,
      whatItIs:
        "Single vertex select. `E` press karne se naya vertex extrude hota hai connected edge ke saath. `E` ke baad axis lock (`X`, `Y`, ya `Z`) se direction control. Multiple times press karke poora path build karte chale jao.",
      whyHere:
        "Cable ya pipe path 3D space mein chalti hai. Side view (`3` numpad) mein dekh ke vertical aur horizontal extrudes karna predictable hai. Path ko visualize karte hue manually shape mein extrude karna critical control deta hai.",
      recipe: [
        "Single vertex select rakho.",
        "`3` numpad se side view jao.",
        "`E` `Z` press karke neeche slide karo, click se confirm.",
        "`E` press karke aage drag, click karke confirm.",
        "Repeat as needed. Path banti rahegi.",
      ],
    },
    {
      title: "Mesh ko Curve mein convert karna",
      tagline: "Right-click → Convert To → Curve. Faces ki tension nahi.",
      timestamp: 1620,
      whatItIs:
        "Object mode mein right-click karo. 'Convert To' submenu mein 'Curve' chuno. Mesh data convert ho jata hai curve data mein. Vertices ab curve points ban jate hain. Properties panel mein curve ka 'Geometry' section khulta hai.",
      whyHere:
        "Mesh-to-curve conversion baad mein bevel depth deta hai jo automatic pipe banata hai. Direct curve drawing (Bezier) handles ke saath fight karne se bachne ka tareeqa hai. Mesh edit mode familiar hai (vertex bevel, etc.), curve mode unfamiliar.",
      pitfalls: [
        "Mesh agar closed loop nahi hai (start aur end vertices alag hain) to curve open path hogi. Closed loop chahiye to manually pehle close karo (`F` to fill, etc.) phir convert.",
      ],
    },
    {
      title: "Bevel Depth se pipe geometry",
      tagline: "Properties → Geometry → Bevel → Round → Depth = 0.02. Pipe.",
      timestamp: 1660,
      whatItIs:
        "Curve select. Properties panel mein curve icon (green). 'Geometry' section. 'Bevel' subsection mein 'Type' ko 'Round' select karo (default 'No Bevel'). 'Depth' field mein value enter karo (e.g., 0.02). Curve path ke around tube generate hota hai. Resolution field tube ki cross-section smoothness control karti hai.",
      whyHere:
        "Yeh actual pipe banane ka step hai. Sirf path enough nahi, depth = thickness. Cables 0.01-0.02, pipes 0.03-0.05, structural rods 0.05+.",
      gameDevRelevance:
        "Real production studios sab ke sab is workflow se cables aur pipes export karte hain. FBX/glTF mein convert se pehle 'Convert to Mesh' karo, optimal mesh export hota hai.",
    },
    {
      title: "Two parallel cables ek hi shape se",
      tagline: "Extrude+thickness, alt-E along normals, dono sides delete. Symmetrical.",
      timestamp: 1740,
      whatItIs:
        "Tutorial author dikhata hai ke do parallel cables banane ke liye sirf duplicate karna best nahi hai (curves match nahi karenge). Better: existing curve ko mesh banao (Convert to Mesh), `A` sab select, `E X` se extrude karke thickness do (do parallel paths ban gaye). Phir `A` sab select aur `Alt+E → Extrude Along Normals` se uniform thickness mein widen karo. Beech ki connecting edges delete karke do parallel paths bach jate hain. Convert back to curve, depth set karo.",
      whyHere:
        "Parallel cables organic feel ke liye chahiye, rigid duplicates nahi. Single source se generate karne se dono cables exactly same curvature follow karte hain.",
      recipe: [
        "Existing curve ko 'Convert to Mesh' karo.",
        "Edit mode, `A` sab select.",
        "`E` `X` se thodi distance par extrude (do parallel paths).",
        "`A` sab select, `Alt+E → Extrude Along Normals → S` (even thickness).",
        "Center ki edges select karo (`Ctrl+Alt+click` ring select use karke), `X → Edges`.",
        "Bach jaate hain do separate parallel paths.",
        "Convert to Curve. Bevel depth set karo.",
      ],
      pitfalls: [
        "Normals galat ho sakti hain extrude operations ke baad. `Shift+N` se recalculate.",
        "Yeh advanced trick hai. Pehle simple single cable master karo, phir parallel try karo.",
      ],
    },
  ],
};
