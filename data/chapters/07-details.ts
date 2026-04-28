import type { Chapter } from "@/lib/types";

export const detailsChapter: Chapter = {
  id: "details",
  number: 7,
  title: "Architectural Details",
  summary:
    "Electric box side wall pe, ek vertical 'blade' (cyberpunk-style fin), aur roof par ramen bowl ka block-out. Sab plane ya circle se shuru hote hain.",
  startsAt: 989,
  status: "complete",
  intro:
    "Yeh chapter teen alag-alag chhote details ko cover karta hai. Pattern same hai: simple primitive add karo, edit mode mein modify karo, baad mein modifier. Variety dikhane ke liye author har detail thoda alag tareeqe se attack karta hai.",
  concepts: [
    {
      title: "Electric box plane se",
      tagline: "Plane → rotate → scale → extrude → duplicate-extrude. Boxy detail.",
      timestamp: 1000,
      whatItIs:
        "Side wall ke saath cursor place karo (`Shift+right-click`). `Shift+A` se Plane add karo. Edit mode mein `R Y 90` se vertical karo, `S Z` se up-down stretch karo, `S` overall size set karo. `E` se thoda extrude karke depth do. Phir `Shift+D X` aur `Shift` hold karke choti dose mein move karo, phir wapas `E` se extrude. Layered plate detail ban jata hai.",
      whyHere:
        "Side wall plain dikhti hai. Ek small electric box add karne se scene 'lived-in' lagti hai, like real shop. Chhoti detail bara character impact deti hai.",
      pitfalls: [
        "Cursor sahi jagah snap kar lo pehle. Galat jagah pe spawn hua to manually move karna parega and yeh tedious hai.",
      ],
    },
    {
      title: "Vertical 'blade' fin (cyberpunk style)",
      tagline: "Plane → vertical → vertex bevel for sharp tip.",
      timestamp: 1080,
      whatItIs:
        "Side mein ek tall thin vertical plane add karte hain. Top par jo do vertices hain unko `Ctrl+Shift+B` se bevel karte hain. Result: top par ek sloped/sharp shape jaise spaceship fin. Phir `E` se extrude karke depth do.",
      whyHere:
        "Cyberpunk ya futuristic shop ka classic motif hai (think Akira, Bladerunner). Architectural fin walls par lagi hoti hain branding ya structure ke taur pe. Yeh aesthetic-only hai, function nahi.",
    },
    {
      title: "Ramen bowl base circle se",
      tagline: "Building top edges ka median, cursor wahan, circle add, scale + extrude + bevel.",
      timestamp: 1180,
      whatItIs:
        "Building ke top par ramen bowl decoration chahiye. Pehle building ke top par opposite edges select karo (back aur front), `Shift+S → Cursor to Selected` se cursor median par. Object mode mein `Shift+A` se Circle add karo (24 ya 18 vertices). Edit mode mein `S` se scale, `F` se face fill, `E` se extrude up. `X → Faces` se top face delete. Bottom loop select karke `Ctrl+B` se bevel = bowl ki round bottom shape.",
      whyHere:
        "Ramen shop ka iconic decoration. Kyunki bowl visible hai sign jaisa, isko prominent banana zaroori hai. Position top-center, scale moderate.",
      recipe: [
        "Building edit mode, edge mode (`2`), top opposite edges select karo.",
        "`Shift+S → Cursor to Selected`. Cursor median par.",
        "`Tab` out, `Shift+A → Mesh → Circle`. Vertices 18-24.",
        "Edit mode mein `S` se proper size.",
        "`F` se fill (top face ban gayi).",
        "`E` se up extrude.",
        "Top face select karke `X → Faces`.",
        "Bottom loop `Alt+click`, `Ctrl+B` mouse wheel se cuts barhao for round bottom.",
      ],
      pitfalls: [
        "Bowl shape ke liye baad mein subdivision lagega. Isliye initial circle vertices kam rakho (18 enough), warna subdivision ke baad mesh dense ho jayega.",
      ],
    },
  ],
};
