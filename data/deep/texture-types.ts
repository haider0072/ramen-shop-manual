import type { DeepConcept } from "@/lib/deep-types";

export const textureTypesConcept: DeepConcept = {
  id: "texture-types",
  group: "shading",
  title: { en: "Procedural Texture Types", ur: "Procedural Texture Types" },
  tagline: {
    en: "Built-in math patterns Blender can compute on the fly. No image files needed. Infinite resolution, fully tweakable.",
    ur: "Built-in math patterns Blender on the fly compute karta. Image files ki zaroorat nahi. Infinite resolution, fully tweakable.",
  },
  whatItIs: [
    {
      en: "Procedural textures are formulas, not images. Blender evaluates them at every shaded point. Zoom in forever, no pixelation. Tweak any parameter, the whole material updates live.",
      ur: "Procedural textures formulas hain, images nahi. Blender har shaded point par evaluate. Hamesha zoom in, no pixelation. Koi parameter tweak, poora material live update.",
    },
  ],
  variants: {
    heading: { en: "All built-in procedural textures", ur: "Saari built-in procedural textures" },
    items: [
      {
        name: "Noise",
        description: { en: "Smooth random pattern. The most useful procedural texture. Used for variation, dirt masks, terrain heightmaps. Settings: Scale, Detail, Roughness, Distortion. Higher Detail adds finer noise on top of large noise.", ur: "Smooth random pattern. Sab se useful procedural. Variation, dirt masks, terrain heightmaps. Settings: Scale, Detail, Roughness, Distortion. Zyada Detail = larger noise par finer noise." },
      },
      {
        name: "Voronoi",
        description: { en: "Cell-based pattern (Voronoi diagram). Cracked surfaces, scales, organic cells, stylized stone. Outputs Distance, Color, Position. F1/F2/F1+F2 modes give different cell looks.", ur: "Cell-based pattern (Voronoi diagram). Cracked surfaces, scales, organic cells, stylized stone. Distance, Color, Position outputs. F1/F2/F1+F2 modes alag cell looks." },
      },
      {
        name: "Wave",
        description: { en: "Sine-wave bands. Wood grain, ripples, stripes. Settings: Type (Bands/Rings), Direction, Profile (Sine, Saw, Triangle).", ur: "Sine-wave bands. Wood grain, ripples, stripes. Settings: Type (Bands/Rings), Direction, Profile (Sine, Saw, Triangle)." },
      },
      {
        name: "Musgrave",
        description: { en: "Fractal noise (multiple noise layers stacked). Terrain, clouds, organic complexity. Heavier than plain Noise but more natural-looking.", ur: "Fractal noise (multiple noise layers stacked). Terrain, clouds, organic complexity. Plain Noise se heavy lekin zyada natural." },
      },
      {
        name: "Brick",
        description: { en: "Procedural brick pattern. Mortar width, brick color 1/2 (variation), offset between rows. Useful for walls without an image texture.", ur: "Procedural brick pattern. Mortar width, brick color 1/2 (variation), rows ke darmiyan offset. Bina image texture wall ke liye useful." },
      },
      {
        name: "Checker",
        description: { en: "Black/white grid. Used as a UV stretch test (set up unwrap, apply Checker, look for distortion).", ur: "Black/white grid. UV stretch test ke liye (unwrap setup, Checker apply, distortion dekho)." },
      },
      {
        name: "Magic",
        description: { en: "Psychedelic pattern of curves. Niche, used for stylized effects.", ur: "Psychedelic curves ka pattern. Niche, stylized effects ke liye." },
      },
      {
        name: "Gradient",
        description: { en: "Linear, radial, spherical, easing gradients. Often plugged into ColorRamp to make custom gradients.", ur: "Linear, radial, spherical, easing gradients. Aksar ColorRamp mein plug karke custom gradients." },
      },
      {
        name: "Sky Texture",
        description: { en: "Procedural sky for World shaders. Models a real atmosphere (Nishita type) with sun position. Realistic sunset/sunrise without HDRI.", ur: "World shaders ke liye procedural sky. Real atmosphere model (Nishita type) sun position ke saath. Bina HDRI realistic sunset/sunrise." },
      },
      {
        name: "Image Texture",
        description: { en: "Not procedural but lives next to them. Loads an image file and samples it via UVs.", ur: "Procedural nahi lekin saath. Image file load aur UVs se sample." },
      },
      {
        name: "Environment Texture",
        description: { en: "Spherical or equirectangular HDRI. Used in the World shader to light the scene.", ur: "Spherical ya equirectangular HDRI. World shader mein scene light karne ke liye." },
      },
    ],
  },
  recipe: {
    heading: { en: "Procedural noise dirt mask", ur: "Procedural noise dirt mask" },
    steps: [
      { step: { en: "Add Noise Texture. Set Scale to 5, Detail to 8.", ur: "Noise Texture add. Scale 5, Detail 8." } },
      { step: { en: "Pipe Noise → ColorRamp. Drag the white stop close to black to make hard noise.", ur: "Noise → ColorRamp. White stop ko black ke qareeb karo hard noise ke liye." } },
      { step: { en: "Use ColorRamp output as a Mix factor between clean material and dirty material.", ur: "ColorRamp output Mix factor clean aur dirty material ke darmiyan." } },
      { step: { en: "Tweak Scale until dirt distribution matches the object size.", ur: "Scale tweak jab tak dirt distribution object size par jamta." } },
    ],
  },
  pitfalls: [
    { en: "All procedural textures use 3D coordinates by default ('Generated' from Texture Coordinate). If you want them to follow UVs, use the UV output instead.", ur: "Saari procedural textures default 3D coordinates ('Generated' Texture Coordinate). UVs follow karwane ho to UV output." },
    { en: "Procedurals can be slow on Cycles when stacked deep. EEVEE handles them better in real time.", ur: "Procedurals deep stack par Cycles mein slow. EEVEE real time mein behtar handle." },
    { en: "Noise scaled too small looks like static. Scaled too big looks flat. Always tune Scale to object size.", ur: "Noise bohot chhoti scale par static. Bohot bari par flat. Scale ko hamesha object size par tune." },
  ],
  related: [
    { id: "shader-nodes", note: { en: "Procedural textures plug into the shader graph.", ur: "Procedural textures shader graph mein plug." } },
  ],
};
