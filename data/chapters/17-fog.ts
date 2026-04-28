import type { Chapter } from "@/lib/types";

export const fogChapter: Chapter = {
  id: "fog",
  number: 17,
  title: "Volumetric Fog",
  summary:
    "Cube banao scene par. Surface shader hatao, Volume slot mein Principled Volume. Density 0.01. Ambient haze tasveer mein aa jata hai.",
  startsAt: 3925,
  status: "complete",
  intro:
    "Yeh chapter chhota hai but scene ka vibe completely badal deta hai. Volumetric fog real photography ke 'bloom' aur 'haze' jaise effects deta hai. Cycles mein realistically render hota hai.",
  concepts: [
    {
      title: "Bara cube scene ke around",
      tagline: "Shift+A cube, S se bara karo jaise saari camera range cover ho.",
      timestamp: 3940,
      whatItIs:
        "`Shift+A → Mesh → Cube`. `S` se bohut bara karo (camera ki visible range cover karne ke liye). Outliner mein iska naam 'fog' rakh do for clarity. Yeh cube actually visible nahi hoga, sirf uska volume use hoga.",
      whyHere:
        "Volumetric scattering ek bounded volume mein hota hai. Cube woh 'bag' hai jiske andar fog particles distribute karte hain.",
    },
    {
      title: "Material setup: Surface remove, Volume add",
      tagline: "Material output ka Surface input disconnect, Volume input pe Principled Volume.",
      timestamp: 3960,
      whatItIs:
        "Cube ko material assign karo (naya material 'fog'). Shader Editor open karo. Default 'Principled BSDF' connected hai 'Material Output' ke 'Surface' input par. Us connection ko break karo (drag se ya BSDF node delete karo). Phir `Shift+A → Shader → Principled Volume` add karo. Iska output 'Material Output' ke **Volume** input par connect karo. **Density** field critical hai. 0.01 jaisa subtle value, 1 thick fog.",
      whyHere:
        "Surface shader cube ko visible solid object banata hai. Volume shader cube ko invisible 'medium' banata hai jiske andar particles hain. Sirf volume input use karne se cube transparent rehta hai but space ke andar light scatter karta hai.",
      gameDevRelevance:
        "Game engines mein bhi yeh exact technique use hoti hai (Unreal ka Volumetric Fog, Unity ka HDRP volumetric). Concept transferable hai.",
      recipe: [
        "Cube par new material 'fog'.",
        "Top bar mein workspace 'Shading' select (ya kisi panel ko Shader Editor banao).",
        "Material output ke Surface se Principled BSDF disconnect.",
        "`Shift+A → Shader → Principled Volume` add.",
        "Volume input se Material Output ke Volume input se connect.",
        "Density slider 0.01 ke aas paas.",
        "Color slightly warm tint.",
      ],
      pitfalls: [
        "EEVEE mein volumetrics approximation hai. Cycles realistic results deta hai but slow. Final render Cycles mein.",
        "Density bohut zyada karoge (>0.1) to scene literally fog mein gum jayegi, sirf white screen.",
      ],
    },
    {
      title: "Color management ke saath High Contrast look",
      tagline: "Render Properties → Color Management → Look: High Contrast.",
      timestamp: 4080,
      whatItIs:
        "Render Properties → Color Management section. **View Transform: AgX** ya Filmic. **Look** dropdown se 'High Contrast' chuno. Final image ka contrast curve compress hota hai, blacks deep, whites bright. **Exposure** bhi adjust kar sakte ho agar scene dim lag rahi hai.",
      whyHere:
        "Foggy scenes default mein washed-out lagti hain (everything mid-gray-ish). High contrast view transform punch wapas la deta hai, atmospheric feel maintain rakhte hue.",
    },
  ],
};
