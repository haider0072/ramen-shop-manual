import type { Chapter } from "@/lib/types";

export const exteriorLightChapter: Chapter = {
  id: "exterior-light",
  number: 16,
  title: "Exterior Lighting",
  summary:
    "Background plane behind the scene. Sun light back-lighting ke liye. Phir multiple area lights from different angles for fill aur color contrast.",
  startsAt: 3520,
  status: "complete",
  intro:
    "Outdoor lighting hai but stage-lit jaise. Sun ek direction se aa raha, area lights fill kar rahi hain alag colors mein. Final render ka mood yahan baith jata hai.",
  concepts: [
    {
      title: "Background plane aur Render Border (Ctrl+B)",
      tagline: "Bara plane peeche, camera bound mein render karne ke liye Ctrl+B.",
      timestamp: 3530,
      whatItIs:
        "`Shift+A → Mesh → Plane`, `S` se bohut bara karo (50+ units). `G Z` se neeche karo so it's behind everything visible from camera. Camera view se (`0` numpad), `Ctrl+B` press karo aur viewport mein box draw karo. Yeh **Render Border** hai. Sirf yeh region render hoga, GPU bachegi.",
      whyHere:
        "Background plane scene ko 'world' deti hai, infinity tak khali nahi dikhti. Render Border iterate karte time speedup deta hai (sirf composition area test).",
      recipe: [
        "`Shift+A → Mesh → Plane`, `S` 50+ units.",
        "`G Z` peeche niche.",
        "Material assign karo (dark neutral, full roughness).",
        "Camera view (`0` numpad).",
        "`Ctrl+B`, drag karke composition box.",
        "Disable kar ke poori scene render ke liye Render Properties → Output → Render Region uncheck.",
      ],
    },
    {
      title: "Sun light back-light",
      tagline: "Direction-based, distance matter nahi. Angle se direction set.",
      timestamp: 3640,
      whatItIs:
        "`Shift+A → Light → Sun`. Sun ek directional light hai, position mostly cosmetic hai (sirf direction matter karti hai). `R X -30` se neeche tilt karo, `R Z 90` se rotate karo so it shines from back of scene towards camera. Strength 2-3.",
      whyHere:
        "Back-lit subjects mein 'rim light' aati hai jo silhouette outline karti hai. Cinematic feel ka core ingredient.",
      pitfalls: [
        "Sun ka power scale alag hai (3-5 enough). Point/Spot ki tarah 100s nahi.",
      ],
    },
    {
      title: "Area lights from multiple directions",
      tagline: "Ek strong cool key, ek soft warm fill, third subtle accent.",
      timestamp: 3720,
      whatItIs:
        "Area lights softbox jaise large sources hain. Tutorial 3 area lights add karta hai alag positions aur colors mein. Pehli (1500W) cool color from back-side opposite to sun. Doosri (subtle) warm color from another side. Teesri color accent for separation. Har area light ka shape (Disk vs Square vs Rectangle) dimensions ke saath alag soft shadow ka feel deti hai.",
      whyHere:
        "Real cinematography mein hamesha 3-point lighting hoti hai (key, fill, rim). Yeh studio approach hai. Color contrast (cool key vs warm fill) drama deta hai monochromatic light ke compared.",
      recipe: [
        "`Shift+A → Light → Area`. Default Square shape.",
        "`G Z` upar uthao, `R` rotate karo scene towards.",
        "Power 1000-2000W.",
        "Color cool blue tone.",
        "`Alt+D` duplicate, opposite side, color warm.",
        "Power half ya less (fill light).",
        "Third light if needed, accent angle.",
      ],
    },
    {
      title: "World shader background color",
      tagline: "Properties → World tab. Color aur strength se ambient base.",
      timestamp: 3850,
      whatItIs:
        "Properties panel mein World icon (red sphere with stars). Background color edit karo. Strength field bhi hai. Yeh global ambient lighting hai jo har object par har direction se aati hai. Bohut zyada karoge to flat washout, kam karoge to deep shadows.",
      whyHere:
        "World color scene ka 'mood floor' set karta hai. Dark blue sky-like world deep night feel deti hai, light gray studio feel.",
    },
  ],
};
