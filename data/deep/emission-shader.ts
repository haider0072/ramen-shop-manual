import type { DeepConcept } from "@/lib/deep-types";

export const emissionShaderConcept: DeepConcept = {
  id: "emission-shader",
  group: "shading",
  title: { en: "Emission Shader", ur: "Emission Shader" },
  tagline: {
    en: "Make a material *glow* and act as its own light source. The whole secret of neon, screens, and stylized lights.",
    ur: "Material ko *glow* karwao aur usko apne aap mein light source banao. Neon, screens, aur stylized lights ka raaz.",
  },
  whatItIs: [
    {
      en: "Emission shader makes a surface emit light. The material doesn't just appear bright, it actually casts photons that bounce around and illuminate other objects (in Cycles especially). It's how you bake a 'light source' directly into a model's appearance.",
      ur: "Emission shader surface ko light emit karwata. Material sirf bright nahi dikhta, actually photons cast karta jo bounce karte aur baki objects ko illuminate karte (Cycles mein especially). Yeh 'light source' ko model ki appearance mein bake karne ka tareeqa.",
    },
    {
      en: "Three ways to use emission. (1) As a standalone shader plugged into Material Output → Surface (most direct). (2) As a slider inside Principled BSDF (mixed with regular shading). (3) Mixed with Principled BSDF via Mix Shader for advanced layered effects.",
      ur: "Emission use karne ke teen tareeqe. (1) Standalone shader Material Output → Surface mein plug (most direct). (2) Principled BSDF ke andar slider (regular shading ke saath mixed). (3) Mix Shader se Principled BSDF ke saath mix advanced layered effects ke liye.",
    },
  ],
  whyItExists: [
    {
      en: "Without emission, a TV screen is a dark glass. With emission, it glows convincingly even with no separate point light pointing at it. Lamps, neon signs, screens, fireflies, magma, all rely on emission to look 'lit from within'.",
      ur: "Emission ke baghair, TV screen dark glass hai. Emission ke saath, woh convincingly glow karta even bina separate point light ke. Lamps, neon signs, screens, fireflies, magma, sab emission par depend karte 'andar se lit' lagne ke liye.",
    },
  ],
  howItWorks: [
    {
      en: "In Cycles (path tracer), emission surfaces participate in light bouncing, they actually illuminate other objects in the scene. Strength controls how 'bright' the emission is in lighting calculations. A strong enough emission surface can replace traditional lights entirely.",
      ur: "Cycles (path tracer) mein emission surfaces light bouncing mein participate karti, actually scene ke baki objects ko illuminate karti. Strength control karta emission lighting calculations mein 'bright' kitna. Itni strong emission surface traditional lights ko entirely replace kar sakti.",
    },
    {
      en: "In EEVEE (rasterizer), emission is mostly visual, it makes the surface bright but doesn't illuminate the rest of the scene out of the box. You can enable 'Bloom' in EEVEE settings to fake the light bleed effect, or convert to Cycles for accurate behavior.",
      ur: "EEVEE (rasterizer) mein emission mostly visual hai, surface ko bright banata lekin scene ke rest ko illuminate nahi karta out of the box. EEVEE settings mein 'Bloom' enable karke light bleed fake kar sakte ho, ya accurate behavior ke liye Cycles convert.",
    },
  ],
  variants: {
    heading: { en: "Emission settings", ur: "Emission settings" },
    items: [
      {
        name: "Color",
        description: { en: "Color of the emitted light. Pure white (1,1,1) for neutral, saturated colors for stylized neon looks.", ur: "Emitted light ka color. Pure white (1,1,1) neutral, saturated colors stylized neon looks ke liye." },
      },
      {
        name: "Strength",
        description: { en: "Multiplier on the color. 1 = the color appears at its 'normal' brightness. 10 = visible glow. 100+ = bloom-causing intense bright.", ur: "Color par multiplier. 1 = color 'normal' brightness par. 10 = visible glow. 100+ = bloom-causing intense bright." },
      },
    ],
  },
  recipe: {
    heading: { en: "The Polygon Runway 'neon sign' technique", ur: "Polygon Runway 'neon sign' technique" },
    steps: [
      { step: { en: "Have a 3D sign object with a regular Principled BSDF material (e.g., wood frame with kanji).", ur: "3D sign object regular Principled BSDF material ke saath (e.g., wood frame with kanji)." } },
      { step: { en: "Duplicate the sign (`Shift + D`), right-click cancel translate.", ur: "Sign duplicate (`Shift + D`), right-click cancel translate." } },
      { step: { en: "Move the duplicate slightly behind the original (`G Y` to push back).", ur: "Duplicate ko original ke peeche thoda move (`G Y` peeche)." } },
      { step: { en: "Flatten duplicate: in Edit Mode, set bevel and extrusion on the duplicate to 0. Should be a flat plane.", ur: "Duplicate flatten: Edit Mode mein bevel aur extrusion 0 set. Flat plane hona chahiye." } },
      { step: { en: "Create new material on duplicate. Replace Principled BSDF with Emission shader. Set color to neon hue, Strength to 20-50.", ur: "Duplicate par new material. Principled BSDF ko Emission shader se replace. Color neon hue, Strength 20-50." },},
      { step: { en: "Render in Cycles. Original sign visible with crisp shape, neon glow behind suggesting backlight.", ur: "Cycles mein render. Original sign crisp shape ke saath visible, peeche neon glow backlight suggest karta." } },
      { step: { en: "Parent the original to the duplicate (`Ctrl+P`) so they move together.", ur: "Original ko duplicate ka parent (`Ctrl+P`) taakay saath move." } },
    ],
  },
  pitfalls: [
    { en: "Emission directly on the sign material flattens its shape, the entire surface glows uniformly. The duplicate-behind trick preserves dimensionality.", ur: "Sign material par direct emission shape flatten karta, poori surface uniformly glow karti. Duplicate-behind trick dimensionality preserve karti." },
    { en: "Strength too high causes 'fireflies' (bright noisy speckles) in Cycles renders. Bump samples or denoise to fix.", ur: "Bohot zyada Strength Cycles renders mein 'fireflies' (bright noisy speckles) deta. Samples bump ya denoise karke fix." },
    { en: "Using EEVEE without enabling Bloom: the emission looks bright but doesn't bleed any light into the scene.", ur: "EEVEE bina Bloom enable kiye: emission bright lagta lekin scene mein light bleed nahi karta." },
  ],
  related: [
    { id: "principled-bsdf", note: { en: "Emission is also a slider on Principled BSDF.", ur: "Emission Principled BSDF par bhi slider hai." } },
    { id: "eevee-vs-cycles", note: { en: "Emission behaves very differently in EEVEE vs Cycles.", ur: "Emission EEVEE vs Cycles mein bohot alag behave karta." } },
  ],
};
