import type { Chapter } from "@/lib/types";

export const materialsChapter: Chapter = {
  id: "materials",
  number: 14,
  title: "Materials & Philosophy",
  summary:
    "Limited palette se kaam karna. Wood, metal, accent red, glossy white. Multiple slots ek hi object par. Phir signs ko emissive 'neon' banane ka clever trick.",
  startsAt: 2820,
  status: "complete",
  intro:
    "Modeling khatam, ab color. Tutorial author ek important philosophy share karta hai: 4-5 materials enough hain pori scene ke liye. Limited palette automatically coherent illustration deta hai. Saath mein ek powerful technique demonstrate hoti hai: emission shader ko bhi smart use karna, taakay dimension lose na ho.",
  concepts: [
    {
      title: "Limited palette philosophy",
      tagline: "4-5 materials. Saari scene unhi se. Coherent look automatic.",
      timestamp: 2830,
      whatItIs:
        "Author Material Preview mode mein switch karta hai (`Z` shading menu). Pehla material 'ground' (dark neutral), phir 'wall' (warm neutral), phir 'metal' (metallic 1, low roughness), phir 'wood' (warm tan), phir 'red accent' (saturated, low roughness). Bas. Saari scene in 5 materials se bani.",
      whyHere:
        "Beginners ka common mistake: har object ka apna material. Result yeh hota hai ke scene 'random colored toys' jaisi lagti hai. Limited palette ka faida yeh hai ke colors ek 'family' ke lagte hain, illustration ka cohesion automatic mil jata hai.",
      figmaAnalogy:
        "Design system token ki tarah. Tum 5-6 'color tokens' define karte ho aur saari interface unhi se design hoti hai. Yahan exactly wahi 3D mein.",
      gameDevRelevance:
        "Production mein 'palette discipline' AAA games mein bhi critical hai. Texture artists palette swatches define karte hain pehle, fir saare assets us palette ke aas paas paint karte hain. Stardew Valley ho ya Ori ya Hades, palette tight hoti hai.",
    },
    {
      title: "Multiple material slots ek object par",
      tagline: "Ek object ki alag faces par alag materials. Edit mode + Assign.",
      timestamp: 2920,
      whatItIs:
        "Object ke material panel mein '+' button se naya slot add karo. Naye slot mein new material create karo. Edit mode mein woh faces select karo jin par yeh material chahiye (ya `L` se linked geometry select). 'Assign' button click karo. Selected faces par naya material apply ho jata hai. Original first slot baki faces par rehta hai.",
      whyHere:
        "Chair frame ek hi object hai. Frame metal, seat red. Alag-alag objects banane se outliner clutter hoga. Multiple slots se ek object multiple materials hold kar sakta hai cleanly.",
      recipe: [
        "Object select. Material panel (red sphere icon).",
        "'+' button slots ke list ke saath. Naya slot.",
        "'New' click karke material create karo. Color, roughness set karo.",
        "Edit mode (`Tab`). Face select mode (`3`).",
        "Faces select karo. Hover karke `L` press karne se linked geometry select hoti hai (instead of manual click).",
        "Material slots panel mein 'Assign' button click karo.",
      ],
      pitfalls: [
        "'Assign' button slot list ke neeche hai. Pehli baar dhoondna padta hai.",
      ],
    },
    {
      title: "Emission shader: surface vs volume of glow",
      tagline: "Sirf material emission karoge to dimension lost. Trick: alag flat plane peeche.",
      timestamp: 3110,
      whatItIs:
        "Sign ke text ko aap directly emission shader bana sakte ho, but voh uniform glow karne lagega aur 3D depth/shading khatam ho jayegi. Author ka trick: original sign ko duplicate karo, duplicate ko thoda peeche shift karo (`G Y`), uska bevel/extrusion zero kar do (flat ho jaye), uska material remove karke ek 'neon' material assign karo with Emission shader (strength 10+). Original sign apne wood/metal material ke saath rehne do. Result: text dimensional dikhta hai, peeche se glow effect aata hai. Real neon ka illusion.",
      whyHere:
        "Real neon signs ka asal mein ek 'tube' hota hai jo glow karta hai aur uske around 'sign panel' hota hai. Hard surface + soft glow ka contrast hi visual interest deta hai.",
      gameDevRelevance:
        "Yeh exact technique stylized games mein bohut use hoti hai. Hollow Knight, Cuphead, sab apne 'glow effects' ke liye separate emissive layers use karte hain.",
      recipe: [
        "Sign object select.",
        "`Shift+D` se duplicate, right-click cancel translate.",
        "`G Y` se duplicate ko thoda Y axis pe shift karo (peeche).",
        "Duplicate ka extrusion aur bevel zero kar do (text panel mein).",
        "Material slot mein new material create karo, naam 'neon'.",
        "Surface dropdown 'Principled BSDF' se 'Emission' karo.",
        "Color set karo, Strength 10-30.",
        "Render Engine ko Cycles karo (Render properties).",
        "`Z → Rendered` shading mode se result dekho.",
        "Original sign ko `Shift` se select karke `Ctrl+P` parent se attach (taakay duplicate saath move ho).",
      ],
      pitfalls: [
        "EEVEE mein emission ka glow real light cast nahi karta (without bloom + extra setup). Cycles mein automatically realistic hota hai.",
        "Strength bohut zyada karoge to denoiser fire artifacts dega.",
      ],
    },
    {
      title: "Number signage same trick par alag color",
      tagline: "26 likho, neon material duplicate karo, color change.",
      timestamp: 3260,
      whatItIs:
        "Building par '26' likha hai (plate par). Same neon technique apply hoti hai. Backlit duplicate ka neon material original neon material ko duplicate karke bana lo (slot panel mein number-of-users beside material name pe click), phir color badlo. Two distinct emission colors scene mein different signs par.",
      whyHere:
        "Multiple emissive elements scene mein visual hierarchy aur color variety dete hain. Sirf ek color ka glow boring hai. Two colors ka contrast cyberpunk feel deta hai.",
    },
  ],
};
