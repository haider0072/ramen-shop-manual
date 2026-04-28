import type { Chapter } from "@/lib/types";

export const bevelChapter: Chapter = {
  id: "bevel",
  number: 9,
  title: "Bevel Modifier & Smooth Shading",
  summary:
    "Building, signs, counter, sab par bevel modifier ek saath apply. Miter type Arc, Harden Normals, aur Copy to Selected. Smoothing ka end-to-end pass.",
  startsAt: 1274,
  status: "complete",
  intro:
    "Yahan tak modeling kafi rough hai. Bevel modifier ek pass mein saari hard edges ko soften kar deta hai aur scene instantly polished lagti hai. Yeh tutorial ka biggest visual jump hai. Steps thode hain lekin har setting ka choice deliberate hai.",
  concepts: [
    {
      title: "Bevel modifier add aur Arc miter",
      tagline: "2 segments, chhota amount, miter Arc, Harden Normals on.",
      timestamp: 1280,
      whatItIs:
        "Walls object pe Properties → Modifiers → Add Modifier → Bevel. Default settings se kuch dikhega lekin tutorial specific values use karta hai. **Segments: 2** (chikna lekin dense nahi). **Amount: 0.02** ke around (small radius). **Geometry → Miter Outer: Arc** (sharp ki jagah arc, intersecting bevels smooth blend karte hain). **Shading → Harden Normals: on** (subdivision ke saath shading crisp rahegi).",
      whyHere:
        "Default 'Sharp' miter pe jab do bevels intersect karte hain (corner pe), spike ya weird artifact ban jata hai. Arc miter wahan smooth blend deta hai. Subtle change but result mein bohut difference.",
      pitfalls: [
        "Amount bohut bara hoga to building ki sharp shape gone. Subtle radius hi works (0.02-0.05).",
      ],
    },
    {
      title: "Copy to Selected. Modifier sab par distribute.",
      tagline: "Saare objects select, active mein bevel, copy to selected.",
      timestamp: 1380,
      whatItIs:
        "Saare objects ek saath select karo (drag-select use karke). Last clicked object active hai (yellow outline). Active object pe bevel modifier already lagi hui hai. Modifier panel mein bevel ke header par dropdown arrow hai. Click karke 'Copy to Selected' chuno. Sab selected objects par identical bevel modifier copy ho jata hai.",
      whyHere:
        "Har object pe alag se bevel add karna 15+ minute ka kaam hai aur values inconsistent hone ka risk hai. Copy to selected guarantees identical settings. Yeh production technique hai jo har scene mein use hoti hai.",
      figmaAnalogy:
        "Figma ke 'paste properties' jaisa hai. Ek layer ki effect/style ko bulk paste kar dena other selected layers par.",
      recipe: [
        "Drag selection se sab objects select karo.",
        "Bowl ko deselect karo (`Ctrl+click`) kyunki bowl ke liye alag treatment.",
        "Bevel-wala object active hona chahiye (yellow outline). Nahi to `Shift+click` karke active banao.",
        "Modifier panel mein bevel ke top-right ka dropdown arrow.",
        "'Copy to Selected' click. Sab par modifier distribute.",
      ],
      pitfalls: [
        "Active object par bevel hi chahiye (warna copy karne ko kuch nahi). Active vs selected ka farak yaad rakho.",
      ],
    },
    {
      title: "Shade Smooth (right-click)",
      tagline: "Bevel ke baad bhi flat lag raha? Right-click se shade smooth.",
      timestamp: 1480,
      whatItIs:
        "Object mode mein object select karke right-click. Menu mein 'Shade Smooth' option. Click karne se Blender vertices ke normals ko interpolate karta hai across faces, harsh face boundaries gayab ho jate hain. Bevel modifier ke saath Harden Normals on hone se sharp corners crisp rehte hain lekin curved areas smooth ho jate hain.",
      whyHere:
        "Default shading 'flat' hoti hai (har face apna distinct shading). Bevel rounded geometry deta hai but flat shading us roundness ko reveal nahi karti. Shade Smooth visual continuity layata hai.",
      recipe: [
        "Saare objects select karo (sab par smooth chahiye).",
        "Right-click karo viewport mein.",
        "'Shade Smooth' click.",
        "Result instant: corners sharp, curves smooth.",
      ],
    },
    {
      title: "Bowl ke liye alag treatment: Solidify + Subdivision",
      tagline: "Bowl par bevel nahi. Solidify thickness, phir Ctrl+2 subdivision.",
      timestamp: 1520,
      whatItIs:
        "Bowl ka geometry abhi ek thin shell hai. **Solidify modifier** thickness deta hai (paper-thin se bowl-thick ho jata hai). Phir **Subdivision Surface** (`Ctrl+2`) smoothness add karta hai. Top par sharp curve chahiye to `Ctrl+R` se ek loop cut add karke 'supporting loop' banao taakay subdivision wahan tight ho.",
      whyHere:
        "Bowl organic shape hai, sharp corners nahi. Bevel iss case mein wrong tool hai. Solidify + subdivision ekdam ceramic bowl jaisi smooth surface deti hai.",
      recipe: [
        "Bowl select. Add Modifier → Solidify. Thickness adjust.",
        "`Ctrl+2` press karo. Subdivision modifier with viewport level 2.",
        "Right-click → Shade Smooth.",
        "Top edge sharp chahiye to Edit mode, `Ctrl+R` se ek loop cut top ke paas add karo.",
      ],
    },
  ],
};
