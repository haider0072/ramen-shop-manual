import type { DeepConcept } from "@/lib/deep-types";

export const shaderNodesConcept: DeepConcept = {
  id: "shader-nodes",
  group: "shading",
  title: { en: "Shader Editor & Nodes", ur: "Shader Editor & Nodes" },
  tagline: {
    en: "Blender materials are visual programs. You wire boxes together; light enters one side and a final color comes out the other.",
    ur: "Blender materials visual programs. Tum boxes wire karte; aik side se light enter aur doosri taraf final color.",
  },
  whatItIs: [
    {
      en: "The Shader Editor is a node graph. Each node does one operation (sample a texture, mix two colors, compute a math function). The final 'Material Output' node is the result the renderer reads.",
      ur: "Shader Editor node graph. Har node aik operation karta (texture sample, do colors mix, math function compute). Final 'Material Output' node renderer padhta.",
    },
    {
      en: "Sockets are typed: yellow = color, gray = float (single number), purple = vector (xyz), green = shader (a complete material). You can only connect compatible types; Blender draws an error wire otherwise.",
      ur: "Sockets typed: yellow = color, gray = float (single number), purple = vector (xyz), green = shader (complete material). Sirf compatible types connect; warna Blender error wire dikhata.",
    },
  ],
  whyItExists: [
    {
      en: "Slider-only material editors hit a ceiling fast. Want a wood floor whose grain rotates with object scale and only shows up where AO is dark? That's three nodes wired together. Nodes give artists procedural control without writing shader code.",
      ur: "Slider-only material editors jaldi ceiling hit. Wood floor jis ka grain object scale ke saath rotate aur sirf wahan dikhe jahan AO dark? Yeh teen nodes wired. Nodes artists ko procedural control dete bina shader code likhe.",
    },
  ],
  variants: {
    heading: { en: "Most-used node categories", ur: "Sab se zyada use hone wali node categories" },
    items: [
      {
        name: "Shader nodes (BSDFs)",
        description: { en: "The 'material types': Principled BSDF (default workhorse), Emission, Glass, Diffuse, Glossy, Refraction, Subsurface Scattering. Their output (green) goes to Material Output → Surface.", ur: "'Material types': Principled BSDF (default workhorse), Emission, Glass, Diffuse, Glossy, Refraction, SSS. Output (green) Material Output → Surface ko." },
      },
      {
        name: "Mix Shader",
        description: { en: "Blends two shaders by a factor. Used to mix Glossy + Diffuse, or paint + dirt, etc.", ur: "Do shaders ko factor se blend. Glossy + Diffuse, ya paint + dirt mix karne ke liye." },
      },
      {
        name: "Texture nodes",
        description: { en: "Image Texture (load image), Noise, Voronoi, Wave, Brick, Magic, Checker, Musgrave, Gradient. Procedural textures take vector input and output a value/color.", ur: "Image Texture (image load), Noise, Voronoi, Wave, Brick, Magic, Checker, Musgrave, Gradient. Procedural textures vector input lete value/color output." },
      },
      {
        name: "Color nodes",
        description: { en: "ColorRamp (gradient mapping), Mix Color (blend two colors), Bright/Contrast, Hue/Sat, Invert, Gamma. Tune output appearance.", ur: "ColorRamp (gradient mapping), Mix Color, Bright/Contrast, Hue/Sat, Invert, Gamma. Output appearance tune." },
      },
      {
        name: "Vector nodes",
        description: { en: "Mapping (scale/rotate/translate UV), Normal Map (interpret a normal-map image), Bump (fake bumps from a height map), Displacement (true geometry displacement).", ur: "Mapping (UV scale/rotate/translate), Normal Map (normal-map image interpret), Bump (height map se fake bumps), Displacement (true geometry)." },
      },
      {
        name: "Input nodes",
        description: { en: "Texture Coordinate (UV, Generated, Object, Camera), Geometry (position, normal), Object Info (random per-object value), Light Path (is the ray reflective? camera? shadow?).", ur: "Texture Coordinate (UV, Generated, Object, Camera), Geometry (position, normal), Object Info (per-object random), Light Path (ray reflective? camera? shadow?)." },
      },
      {
        name: "Math / Vector Math",
        description: { en: "Add, Multiply, Greater Than, Mod, Sin, Cos. Build any procedural rule by chaining math.", ur: "Add, Multiply, Greater Than, Mod, Sin, Cos. Math chain karke koi bhi procedural rule." },
      },
      {
        name: "Material Output",
        description: { en: "The final node. Three inputs: Surface (the visible shader), Volume (fog inside the mesh), Displacement (real geometry deform).", ur: "Final node. Teen inputs: Surface (visible shader), Volume (mesh ke andar fog), Displacement (real geometry deform)." },
      },
    ],
  },
  recipe: {
    heading: { en: "A textured wood material from scratch", ur: "Scratch se textured wood material" },
    steps: [
      { step: { en: "Add a new material to the object. Open the Shader Editor.", ur: "Object par naya material. Shader Editor kholo." } },
      { step: { en: "`Shift+A → Texture → Image Texture`. Open a wood image.", ur: "`Shift+A → Texture → Image Texture`. Wood image open." } },
      { step: { en: "Wire Image Texture's Color → Principled BSDF's Base Color.", ur: "Image Texture ka Color → Principled BSDF ka Base Color." } },
      { step: { en: "Add `Shift+A → Input → Texture Coordinate` and `Shift+A → Vector → Mapping`.", ur: "`Shift+A → Input → Texture Coordinate` aur `Shift+A → Vector → Mapping`." } },
      { step: { en: "Texture Coordinate UV → Mapping Vector → Image Texture Vector. Now you can scale/rotate the texture in the Mapping node.", ur: "Texture Coordinate UV → Mapping Vector → Image Texture Vector. Ab Mapping node se texture scale/rotate." } },
      { step: { en: "Increase Roughness on the BSDF. Wood is matte, not glossy.", ur: "BSDF par Roughness barhao. Wood matte, glossy nahi." } },
    ],
  },
  pitfalls: [
    { en: "Wiring a color output (yellow) into a vector input (purple): silent type cast, often gives wrong results. Read socket colors.", ur: "Color output (yellow) ko vector input (purple) mein wire: silent type cast, aksar galat result. Socket colors padho." },
    { en: "Forgetting the Material Output node. No output = black material.", ur: "Material Output node bhulna. No output = black material." },
    { en: "Image texture appears wrong color (washed out): set color space to 'Non-Color' for normal/roughness/AO maps; keep 'sRGB' only for color images.", ur: "Image texture galat color (washed out): normal/roughness/AO maps ke liye color space 'Non-Color', sirf color images ke liye 'sRGB'." },
    { en: "Procedural textures look identical across multiple objects: add Object Info → Random into the Mapping node to give each object a unique seed.", ur: "Procedural textures saare objects par identical: Object Info → Random ko Mapping node mein de ke har object ko unique seed." },
  ],
  related: [
    { id: "principled-bsdf", note: { en: "The default shader you'll connect everything into.", ur: "Default shader jis mein sab connect hota." } },
    { id: "texture-types", note: { en: "All the procedural texture nodes available.", ur: "Saare procedural texture nodes." } },
    { id: "uv-unwrap", note: { en: "UVs feed Texture Coordinate → image textures.", ur: "UVs Texture Coordinate ko feed → image textures." } },
  ],
};
