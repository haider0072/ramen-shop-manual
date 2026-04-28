import type { DeepConcept } from "@/lib/deep-types";

export const principledBSDFConcept: DeepConcept = {
  id: "principled-bsdf",
  group: "shading",
  title: { en: "Principled BSDF", ur: "Principled BSDF" },
  tagline: {
    en: "Blender's all-in-one physically-based shader. Almost every material you'll ever make starts here.",
    ur: "Blender ka all-in-one physically-based shader. Almost har material yahin se start hota.",
  },
  whatItIs: [
    {
      en: "Principled BSDF is a single shader node that combines all the major surface properties, color, metallic, roughness, IOR (index of refraction), specular, sheen, clearcoat, subsurface scattering, transmission, emission, into one slider-driven panel. Used by 95% of all Blender materials.",
      ur: "Principled BSDF ek single shader node hai jo saari major surface properties combine karta, color, metallic, roughness, IOR (index of refraction), specular, sheen, clearcoat, subsurface scattering, transmission, emission, ek slider-driven panel mein. 95% Blender materials yeh use karte.",
    },
    {
      en: "Based on the Disney 'Principled' shader research (originally from Pixar/Disney). The idea: instead of mixing five separate shaders to make a 'metal with paint' material, expose all the physical knobs in one node. Each slider corresponds to a real-world surface property.",
      ur: "Disney 'Principled' shader research (originally Pixar/Disney) par based. Idea: 5 alag shaders mix karne ki bajaye 'metal with paint' material banane ke liye, saare physical knobs ek node mein. Har slider ek real-world surface property correspond karta.",
    },
  ],
  variants: {
    heading: { en: "Every Principled BSDF slider", ur: "Principled BSDF ka har slider" },
    items: [
      {
        name: "Base Color",
        description: { en: "The albedo/diffuse color. Most fundamental.", ur: "Albedo/diffuse color. Most fundamental." },
      },
      {
        name: "Metallic",
        description: { en: "0 = dielectric (plastic, wood, ceramic). 1 = metal. Real materials are basically one or the other; intermediate values are unphysical (and usually wrong).", ur: "0 = dielectric (plastic, wood, ceramic). 1 = metal. Real materials basically ek ya doosra; intermediate values unphysical (aur galat)." },
        when: { en: "0 for everything except actual metals (steel, gold, copper, etc.). Then 1.", ur: "0 har cheez ke liye except actual metals (steel, gold, copper, etc.). Phir 1." },
      },
      {
        name: "Roughness",
        description: { en: "0 = mirror-perfect smooth surface. 1 = fully matte, no reflection. Single most-tuned slider for realism.", ur: "0 = mirror-perfect smooth surface. 1 = fully matte, no reflection. Realism ke liye sab se tuned slider." },
      },
      {
        name: "IOR (Index of Refraction)",
        description: { en: "How light bends through the surface. Glass = 1.45, water = 1.33, diamond = 2.4. For non-transparent materials affects specular reflection strength.", ur: "Light surface se kaise bend hoti. Glass = 1.45, water = 1.33, diamond = 2.4. Non-transparent materials ke liye specular reflection strength ko affect karta." },
      },
      {
        name: "Specular Tint",
        description: { en: "Tints the specular highlight with the base color (default off). Used for stylized non-metallic materials.", ur: "Specular highlight ko base color se tint (default off). Stylized non-metallic materials ke liye." },
      },
      {
        name: "Anisotropic & Anisotropic Rotation",
        description: { en: "Brushed-metal effect: reflections stretched in one direction. Used for hair, brushed steel, vinyl records.", ur: "Brushed-metal effect: reflections ek direction mein stretched. Hair, brushed steel, vinyl records ke liye." },
      },
      {
        name: "Sheen & Sheen Tint",
        description: { en: "Soft fuzzy highlight at grazing angles. Used for cloth (velvet, suede, microfiber).", ur: "Grazing angles par soft fuzzy highlight. Cloth (velvet, suede, microfiber) ke liye." },
      },
      {
        name: "Coat Weight & Coat Roughness",
        description: { en: "Thin clear coat layer on top of the base material. Used for car paint, lacquered wood.", ur: "Base material ke upar thin clear coat layer. Car paint, lacquered wood ke liye." },
      },
      {
        name: "Coat IOR",
        description: { en: "IOR of the coat layer specifically. Default 1.5.", ur: "Coat layer ka IOR specifically. Default 1.5." },
      },
      {
        name: "Coat Tint",
        description: { en: "Color tint applied to the coat layer.", ur: "Coat layer pe color tint." },
      },
      {
        name: "Subsurface Weight",
        description: { en: "0 = no subsurface scattering. 1 = full SSS. Used for skin, wax, marble, jade, anything that lets light penetrate slightly.", ur: "0 = no subsurface scattering. 1 = full SSS. Skin, wax, marble, jade, jo light ko thoda penetrate hone deta uske liye." },
      },
      {
        name: "Subsurface Radius",
        description: { en: "RGB controls how far each color penetrates the surface. Skin uses higher red (because flesh scatters red light most).", ur: "RGB control karta har color kitna surface mein penetrate. Skin red zyada use karti (flesh red light ko most scatter karti)." },
      },
      {
        name: "Subsurface Scale",
        description: { en: "Overall multiplier on the radius. Tweak this to adapt SSS to scene scale.", ur: "Radius par overall multiplier. SSS ko scene scale ke saath adapt karne ke liye tweak." },
      },
      {
        name: "Transmission Weight",
        description: { en: "0 = opaque. 1 = transparent. Used with IOR for glass, water, diamond.", ur: "0 = opaque. 1 = transparent. Glass, water, diamond ke liye IOR ke saath." },
      },
      {
        name: "Emission Color & Strength",
        description: { en: "Makes the material glow. Strength multiplies the color (10+ for visible glow). Used for screens, lights, neon signs.", ur: "Material ko glow karwata. Strength color ko multiply (visible glow ke liye 10+). Screens, lights, neon signs ke liye." },
      },
      {
        name: "Alpha",
        description: { en: "Opacity. 0 = invisible, 1 = fully opaque. Pair with 'Material Settings → Blend Mode → Alpha Blend' for cutouts.", ur: "Opacity. 0 = invisible, 1 = fully opaque. 'Material Settings → Blend Mode → Alpha Blend' ke saath cutouts ke liye." },
      },
    ],
  },
  recipe: {
    heading: { en: "Quick recipes for common materials", ur: "Common materials ke quick recipes" },
    steps: [
      { step: { en: "**Plastic**: Metallic 0, Roughness 0.4, IOR 1.5. Tweak base color.", ur: "**Plastic**: Metallic 0, Roughness 0.4, IOR 1.5. Base color tweak." } },
      { step: { en: "**Polished metal**: Metallic 1, Roughness 0.1. Color is the metal's actual tint (warm for gold/copper, cool for steel).", ur: "**Polished metal**: Metallic 1, Roughness 0.1. Color metal ka actual tint (gold/copper warm, steel cool)." } },
      { step: { en: "**Brushed metal**: Same as polished + Anisotropic 0.5-1.0.", ur: "**Brushed metal**: Polished jaisa + Anisotropic 0.5-1.0." } },
      { step: { en: "**Glass**: Metallic 0, Roughness 0.05, Transmission 1, IOR 1.45.", ur: "**Glass**: Metallic 0, Roughness 0.05, Transmission 1, IOR 1.45." } },
      { step: { en: "**Wood**: Metallic 0, Roughness 0.6, plug a wood texture into Base Color, plug a slightly noisy texture into Roughness for realism.", ur: "**Wood**: Metallic 0, Roughness 0.6, wood texture Base Color mein plug, slightly noisy texture Roughness mein realism ke liye." } },
      { step: { en: "**Skin**: Metallic 0, Roughness 0.4, Subsurface 0.2, Subsurface Radius (1.0, 0.4, 0.25) for fleshy red scatter.", ur: "**Skin**: Metallic 0, Roughness 0.4, Subsurface 0.2, Subsurface Radius (1.0, 0.4, 0.25) fleshy red scatter ke liye." } },
      { step: { en: "**Neon**: Metallic 0, Emission Color saturated, Emission Strength 20-50.", ur: "**Neon**: Metallic 0, Emission Color saturated, Emission Strength 20-50." } },
    ],
  },
  pitfalls: [
    { en: "Metallic at 0.5 'because the metal looks too strong'. Wrong instinct. Real metals are at 1; reduce *roughness* to make them less mirror-like, but stay at metallic = 1.", ur: "Metallic 0.5 'kyunki metal bohot strong lag raha'. Galat instinct. Real metals 1 par; *roughness* kam karke mirror-like na karo, lekin metallic = 1 par raho." },
    { en: "Setting roughness to 0 expecting a perfect mirror. Modern Blender's renderer adds a tiny bit of noise even at roughness 0; for a true mirror, also crank up samples or use the Glass BSDF.", ur: "Roughness 0 set karke perfect mirror expect karna. Modern Blender renderer roughness 0 par bhi thodi noise add karta; true mirror ke liye samples crank up karo ya Glass BSDF use karo." },
    { en: "Emission strength at 1 expecting glow. 1 just means 'this is the diffuse-equivalent'. Real glow needs strength 10+, often 20-100.", ur: "Emission strength 1 par glow expect karna. 1 ka matlab 'yeh diffuse-equivalent hai'. Real glow ke liye strength 10+, aksar 20-100." },
  ],
  related: [
    { id: "emission-shader", note: { en: "Emission is a slider on Principled, but also a standalone shader.", ur: "Emission Principled par slider, lekin standalone shader bhi." } },
    { id: "material-slots", note: { en: "Different parts of one mesh can have different Principled BSDF instances.", ur: "Ek mesh ke alag parts ko alag Principled BSDF instances." } },
  ],
};
