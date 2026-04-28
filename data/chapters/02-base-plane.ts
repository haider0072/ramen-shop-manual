import type { Chapter } from "@/lib/types";

export const basePlaneChapter: Chapter = {
  id: "base-plane",
  number: 2,
  title: "Base Plane",
  summary:
    "Diorama ka floor plane se banta hai. Vertex bevel se rounded corners, downward extrude, normals recalculate, aur scale apply. Saari foundational moves yahin se shuru hoti hain.",
  startsAt: 106,
  status: "complete",
  intro:
    "Yeh chhota plane scene ki bunyad hai. Yahan jo cheezein dikhayi gayin (vertex bevel, normals direction, scale apply) baad mein har object par baar baar use hongi. Pehli baar dekho dhyan se.",
  concepts: [
    {
      title: "Plane add karke scale up karna",
      tagline: "S 4 Enter. Diorama-size mein le aao.",
      timestamp: 110,
      whatItIs:
        "`Shift+A` se Plane add hota hai (default 2m). Edit mode mein `S` press karke 4 type karke `Enter`. Plane 4x bara ho jata hai (8m x 8m). Tutorial author ka favorite scale hai diorama-style scenes ke liye, na bohut bara, na chhota.",
      whyHere:
        "Diorama focused shot hai. 8m square mein ek small shop fit ho jata hai jiske around camera safe zoom kar sake. Bara karoge to detail loose ho sakti hai, chhota karoge to lighting tight feel karegi.",
    },
    {
      title: "Vertex Bevel se rounded corners",
      tagline: "Ctrl+Shift+B. Mouse wheel se cuts barhao.",
      timestamp: 134,
      whatItIs:
        "Edit mode mein vertex select mode (`1`), saare 4 corner vertices select karo, `Ctrl+Shift+B` press karo. Mouse drag se radius decide hoti hai, mouse wheel scroll se segments badhte hain (smoothness).",
      whyHere:
        "Plane ke sharp 90° corners visually harsh lagte hain stylized scene mein. Subtle rounding instantly 'designed' feel deta hai. Yeh purely aesthetic choice hai, structural nahi.",
      whyNotAlt:
        "Edge bevel (`Ctrl+B`) se nahi karna kyunki yeh plane par horizontal edges hai, vertical corners chahiye. Vertex bevel specifically corners ke liye banaya gaya hai.",
      pitfalls: [
        "Mouse wheel scroll bevel command active hone ke time hi cuts barhata hai. Confirm hone ke baad scroll viewport zoom karega.",
        "Bohut zyada cuts mat lo, 4-6 enough hain. Zyada matlab dense geometry baad mein.",
      ],
    },
    {
      title: "Niche extrude aur Face Orientation overlay",
      tagline: "E pe niche jaoge to normals flip ho jate hain. Detect karna seekh lo.",
      timestamp: 175,
      whatItIs:
        "Plane ko `E` se niche extrude karne par jo new faces bante hain unke normals galat direction (andar) point karte hain. Top-right viewport overlays icon mein 'Face Orientation' enable karoge to faces rang badal jaate hain: blue = correct (outward), red = flipped.",
      whyHere:
        "Galat normals ka effect later milega: shading toot jayegi, modifiers galat side build karenge, lights face ko ignore karengi. Issue ko early catch karna asaan hai late catch karne se.",
      recipe: [
        "Plane select, `Tab` edit mode, `A` sab select.",
        "`E` press karo phir `Z` aur niche drag, click karke confirm.",
        "Top-right ke 'Overlays' dropdown mein 'Face Orientation' tick karo.",
        "Agar koi face red dikhe, `A` sab select, `Shift+N` press karo. Recalculate Normals (Outside).",
        "Sab blue ho jaye to overlay off kar do (clutter kam ho).",
      ],
      pitfalls: [
        "Always-on Face Orientation rakho viewport mein, modeling ke time. Modifier add karne se pehle faces blue confirm karne se aage ki problems bachti hain.",
      ],
    },
    {
      title: "Scale Apply (Ctrl+A)",
      tagline: "N panel mein scale 2 dikh raha? Ctrl+A se reset karo bina shape badle.",
      timestamp: 230,
      whatItIs:
        "Object mode mein agar tumne `S` se plane scale kiya hai, N-panel mein scale 2 ya 4 dikhayi dega. Modifiers (especially bevel) is scale ko amount mein multiply karte hain. `Ctrl+A → Scale` press karo, scale 1 ho jayega lekin shape change nahi hogi.",
      whyHere:
        "Aage poori scene mein bevel modifier lagega. Agar unequal scale objects par lagega to bevel inconsistent dikhega (kahin chhota, kahin bara). Scale apply karna hi consistent rendering ki guarantee hai.",
      recipe: [
        "Object mode mein object select karo.",
        "`N` press karke side panel kholo, scale value confirm karo (1 nahi hai to apply zaroori hai).",
        "`Ctrl+A` press karo, menu khulega.",
        "'Scale' chuno. Scale wapas 1 ho jayega, dimensions preserve.",
      ],
      pitfalls: [
        "Curves par scale apply karoge to bevel depth bhi multiply ho jayega. Phir manually depth ko revise karna parega.",
      ],
    },
  ],
};
