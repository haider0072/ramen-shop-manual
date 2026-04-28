import type { Chapter } from "@/lib/types";

export const texturingChapter: Chapter = {
  id: "texturing",
  number: 18,
  title: "Procedural Texturing",
  summary:
    "Noise texture + Color Ramp + Mix Color = grungy ground. Phir same noise ko metal ki roughness drive karne ke liye reuse karte hain.",
  startsAt: 4165,
  status: "complete",
  intro:
    "Materials chapter mein flat colors lagaye the. Yeh chapter texture introduce karta hai. Procedural noise se subtle grunge add karna jo har material ko 'real' feel deta hai. Texture ka same node setup ek baar banao, phir har jagah copy karke alag-alag use kar lo.",
  concepts: [
    {
      title: "Noise + Color Ramp + Mix Color setup",
      tagline: "Noise texture → Color Ramp ka contrast → Mix se subtle color blend.",
      timestamp: 4180,
      whatItIs:
        "Shader Editor mein `Shift+A → Texture → Noise Texture` add. Iski 'Color' output Material Output ke Surface se directly connect karo (test ke liye). Default mein blurry blob noise dikhega. Scale ko 5-10 set karo (chhote pattern), Detail 8+, Roughness 0.5. Phir Color Ramp add karo (`Shift+A → Converter → Color Ramp`), noise ke Color output ko ramp ke 'Fac' input se connect karo. Ramp mein do stops aas paas le aao for high contrast (white/black sharp transition). Phir Mix Color (`Shift+A → Color → Mix Color`), Factor input pe ramp ka output, two colors slots mein ground material ka base color aur thoda darker variation. Mix output ko Principled BSDF ke Base Color input se. Phir Principled BSDF ke output ko Material Output ke Surface se. Subtle grunge texture aa gaya.",
      whyHere:
        "Flat color floor unrealistic lagta hai. Real ground mein patches, dirt, color variation hoti hai. Procedural noise se yeh variation generate kar sakte ho bina actual texture image ke.",
      figmaAnalogy:
        "Figma mein 'noise' overlay layer add karne jaisa, sirf node-based 3D shader graph mein.",
      recipe: [
        "Object select. Shading workspace open.",
        "`Shift+A → Texture → Noise Texture`. Connect Color to Material Output Surface (preview).",
        "Scale 5-10, Detail 8, Roughness 0.5.",
        "`Shift+A → Converter → Color Ramp`. Insert between noise and output.",
        "Ramp ke stops ko close karo for sharp contrast.",
        "`Shift+A → Color → Mix Color`. Factor pe Ramp ke Color output.",
        "A slot mein dark color, B slot mein original ground color.",
        "Mix Result ko Principled BSDF ke Base Color se.",
      ],
    },
    {
      title: "Texture Coordinate node aur Object mapping",
      tagline: "Mapping ko object-space mein bind karo, taakay rotation/scale follow kare.",
      timestamp: 4280,
      whatItIs:
        "Default texture 'generated' UV par maps karta hai jo sometimes weird stretch dikhata hai. `Shift+A → Input → Texture Coordinate` add. Node ke 'Object' output ko Noise Texture ke 'Vector' input se connect. Ab texture object-space mein attach hai. Phir `Shift+A → Vector → Mapping` add karna optional hai for further scale/rotate control.",
      whyHere:
        "Object move karoge to texture saath move kare. Generated UV ke saath texture absolute position pe stuck rehta hai jo aksar wrong feel hota hai.",
    },
    {
      title: "Same noise ko metal roughness drive karne ke liye reuse",
      tagline: "Copy karo poora setup, metal material par paste, roughness input se connect.",
      timestamp: 4380,
      whatItIs:
        "Shader Editor mein noise + ramp ka group select karo (`A` then box select), `Ctrl+C` copy. Metal material par switch karo, `Ctrl+V` paste. Lekin ab is grunge ko Base Color mein nahi, **Roughness** input mein connect karo. Color Ramp ka range close rakho (jaise 0.3 se 0.6) so roughness moderate variation deta hai. Result: metal surface mein subtle 'used' look, har spot par perfectly mirror nahi.",
      whyHere:
        "Real metals never uniformly polished hote. Slight roughness variation reflections ko break karta hai aur metal alive lagta hai. Yeh trick photorealism aur stylized art dono mein kaam karti hai.",
      recipe: [
        "Ground material ka noise group select karo, `Ctrl+C`.",
        "Metal material kholo, `Ctrl+V`.",
        "Mix Color hata do (Color Ramp ka output direct use hoga).",
        "Color Ramp ke stops adjust karo (e.g., 0.3 to 0.6).",
        "Ramp output ko Principled BSDF ke 'Roughness' input se connect.",
      ],
      pitfalls: [
        "Roughness ramp stops bohut wide (0 to 1) rakhe to surface kahin shiny kahin matt looks weird. Tight range subtle hai.",
      ],
    },
  ],
};
