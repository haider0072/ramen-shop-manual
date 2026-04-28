import type { DeepConcept } from "@/lib/deep-types";

export const colorManagementConcept: DeepConcept = {
  id: "color-management",
  group: "shading",
  title: { en: "Color Management", ur: "Color Management" },
  tagline: {
    en: "How Blender turns raw light values into pixels you actually see. Pick the right view transform or your render will look fake.",
    ur: "Blender raw light values ko aap jo pixels dekhte hain mein kaise badalta. Sahi view transform pick karo warna render fake lagega.",
  },
  whatItIs: [
    {
      en: "When light bounces around your scene, the renderer collects raw HDR (high dynamic range) values: a sun might be 10,000 'units' bright while a shadow is 0.05. Your screen can only show 0 to 1. Color management is the conversion from those raw values to displayable pixels, with all the artistic decisions that conversion implies.",
      ur: "Scene mein light bounce karke renderer raw HDR values collect karta: sun 10,000 'units' bright, shadow 0.05. Tumhari screen sirf 0 se 1 dikha sakti. Color management un raw values ko displayable pixels mein convert karta, saare artistic decisions us conversion mein.",
    },
    {
      en: "Live in Properties → Render → Color Management. Three big knobs: **View Transform** (the look of the conversion), **Look** (preset contrast variations), **Exposure / Gamma** (overall brightness tweak).",
      ur: "Properties → Render → Color Management mein. Teen bare knobs: **View Transform** (conversion ka look), **Look** (preset contrast variations), **Exposure / Gamma** (overall brightness tweak).",
    },
  ],
  variants: {
    heading: { en: "View Transform options", ur: "View Transform options" },
    items: [
      {
        name: "AgX (default in 4.x+)",
        description: { en: "Modern, photographic. Compresses bright highlights gracefully (no neon-orange clipping). Best default for realism. Most professional pipelines now use this.", ur: "Modern, photographic. Bright highlights gracefully compress (neon-orange clipping nahi). Realism ke liye best default. Aksar professional pipelines ab yahi." },
      },
      {
        name: "Filmic",
        description: { en: "Older Blender default (pre-4.0). Similar to AgX but slightly different curves. Still common in older tutorials.", ur: "Purana Blender default (pre-4.0). AgX jaisa lekin slightly different curves. Older tutorials mein common." },
      },
      {
        name: "Standard",
        description: { en: "No tone-mapping. Raw HDR clamped at 1. Bright spots blow out to pure white instantly. Used only for stylized/non-photorealistic looks where you want flat colors.", ur: "No tone-mapping. Raw HDR 1 par clamped. Bright spots foran pure white. Sirf stylized/non-photorealistic looks ke liye jahan flat colors chahiye." },
      },
      {
        name: "Raw",
        description: { en: "No conversion at all. Used for technical work (passing data, normal/depth maps to compositing). Never use for final render.", ur: "Koi conversion nahi. Technical work ke liye (data pass, normal/depth maps compositing ko). Final render ke liye kabhi nahi." },
      },
      {
        name: "False Color",
        description: { en: "Diagnostic mode. Maps brightness to a heatmap (purple = dark, green = mid, red = blown out). Used to check exposure.", ur: "Diagnostic mode. Brightness ko heatmap par map (purple = dark, green = mid, red = blown out). Exposure check karne ke liye." },
      },
      {
        name: "Look (None / High Contrast / Low Contrast / Medium / Very Low)",
        description: { en: "Cosmetic preset on top of View Transform. Bumps contrast up or down. Like a photo filter applied at render time.", ur: "View Transform ke upar cosmetic preset. Contrast up/down. Render time par photo filter ki tarah." },
      },
      {
        name: "Exposure",
        description: { en: "Stops of brightness adjustment (positive = brighter, negative = darker). Adjust if scene comes out too dark or too bright before tweaking individual lights.", ur: "Brightness adjustment ke stops (positive = brighter, negative = darker). Scene zyada dark/bright aaye to individual lights tweak karne se pehle yeh adjust." },
      },
      {
        name: "Gamma",
        description: { en: "Affects mid-tones. Rarely changed; 1.0 default is correct for sRGB output.", ur: "Mid-tones par effect. Rarely change; 1.0 default sRGB output ke liye correct." },
      },
      {
        name: "Display Device, sRGB / Display P3 / Rec. 2020",
        description: { en: "Tells Blender what color space your monitor is in. sRGB for normal monitors. Display P3 for Apple wide-gamut. Rec. 2020 for HDR mastering.", ur: "Blender ko bata monitor kaunse color space mein. sRGB normal monitors. Display P3 Apple wide-gamut. Rec. 2020 HDR mastering." },
      },
    ],
  },
  pitfalls: [
    { en: "Final render looks washed out vs. viewport: viewport was probably using Standard while renders use AgX. Match them in Color Management.", ur: "Final render viewport se washed out: viewport Standard tha jab ke renders AgX. Color Management mein match." },
    { en: "Saving an EXR for compositing but using Filmic view transform on the saved file: bake the look into the file when you didn't want to. Use Raw or save as PNG.", ur: "Compositing ke liye EXR save lekin saved file par Filmic view transform: jab tum nahi chahte tab look bake. Raw use ya PNG save." },
    { en: "Texture colors look 'too saturated' under AgX/Filmic: that's correct behavior. AgX desaturates blown highlights. Don't fight it; tune your textures or lighting.", ur: "Texture colors AgX/Filmic ke under 'bohot saturated' lagte: yeh correct behavior. AgX blown highlights desaturate karta. Larai mat karo; textures ya lighting tune karo." },
    { en: "Pure RGB values (255, 0, 0) look dull because they're being tone-mapped. For UI/logo shots use Standard view transform, or set emission strength very high.", ur: "Pure RGB values (255, 0, 0) dull lagti kyunki tone-mapped. UI/logo shots ke liye Standard view transform, ya emission strength bohot zyada." },
  ],
  realWorld: [
    { en: "AgX is now industry standard in Blender 4.x and 5.x because it gracefully handles extreme HDR brightness without color skewing. Modeled after photographic film response. Replaces Filmic for new projects.", ur: "AgX ab Blender 4.x aur 5.x mein industry standard kyunki extreme HDR brightness ko bina color skewing handle karta. Photographic film response ke baad modeled. Naye projects mein Filmic replace karta." },
  ],
  related: [
    { id: "samples-denoising", note: { en: "Color management runs after samples and denoising.", ur: "Color management samples aur denoising ke baad chalti." } },
    { id: "eevee-vs-cycles", note: { en: "Both engines respect color management settings.", ur: "Dono engines color management settings respect karte." } },
  ],
};
