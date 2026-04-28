import type { DeepConcept } from "@/lib/deep-types";

export const compositorConcept: DeepConcept = {
  id: "compositor",
  group: "render",
  title: { en: "Compositor", ur: "Compositor" },
  tagline: {
    en: "Post-processing with nodes. Add glow, color grade, blur, lens dirt, all after the render. Like Photoshop layers but procedural.",
    ur: "Nodes se post-processing. Glow, color grade, blur, lens dirt, sab render ke baad. Photoshop layers jaisa lekin procedural.",
  },
  whatItIs: [
    {
      en: "The Compositor is a node graph that runs *after* rendering. It takes the rendered image (and optional render passes like depth, normal, glossy) and processes it before saving. The output is what gets written to disk.",
      ur: "Compositor node graph jo rendering ke *baad* chalta. Rendered image (aur optional render passes jaise depth, normal, glossy) leta aur process karta save se pehle. Output disk par likha jata.",
    },
    {
      en: "Enable it: top header → Compositing tab. Tick 'Use Nodes' if not already on. The default graph is just Render Layers → Composite. You add nodes between them.",
      ur: "Enable: top header → Compositing tab. 'Use Nodes' tick agar pehle se on nahi. Default graph: Render Layers → Composite. Tum nodes beech mein add karte.",
    },
  ],
  variants: {
    heading: { en: "Most-used compositor nodes", ur: "Sab se zyada use hone wale compositor nodes" },
    items: [
      {
        name: "Render Layers (input)",
        description: { en: "Source: your rendered scene. Outputs Image, plus any enabled passes (Depth, Normal, Mist, Crypto, etc.).", ur: "Source: tumhara rendered scene. Image output, plus enabled passes (Depth, Normal, Mist, Crypto, etc.)." },
      },
      {
        name: "Composite (output)",
        description: { en: "What gets written to the final render file. Only one Composite node is used per scene.", ur: "Final render file mein kya likha jata. Per scene sirf aik Composite node." },
      },
      {
        name: "Viewer",
        description: { en: "Preview node. Shift+Ctrl+Click any node to wire it into Viewer and see its output as the backdrop in the compositor.", ur: "Preview node. Kisi node par Shift+Ctrl+Click karke Viewer mein wire aur compositor mein backdrop par output dekho." },
      },
      {
        name: "Glare",
        description: { en: "Adds bloom, streaks, ghosts, fog glow. Glare type 'Fog Glow' is the iconic dreamy bloom. Use sparingly.", ur: "Bloom, streaks, ghosts, fog glow. 'Fog Glow' iconic dreamy bloom. Sparingly." },
      },
      {
        name: "Color Balance / Color Curves",
        description: { en: "Color grade. Lift (shadows), Gamma (mids), Gain (highlights). Like Lumetri in Premiere.", ur: "Color grade. Lift (shadows), Gamma (mids), Gain (highlights). Premiere ke Lumetri jaisa." },
      },
      {
        name: "Lens Distortion",
        description: { en: "Adds barrel/pincushion distortion or chromatic aberration. Subtle CA gives renders a real-camera feel.", ur: "Barrel/pincushion distortion ya chromatic aberration. Subtle CA renders ko real-camera feel deta." },
      },
      {
        name: "Defocus",
        description: { en: "Post-process depth of field using the Depth pass. Faster than camera-real DOF for previews.", ur: "Post-process DOF Depth pass se. Camera-real DOF se previews ke liye faster." },
      },
      {
        name: "Mix",
        description: { en: "Blend two images. Modes: Add, Multiply, Screen, Overlay, etc. Same as Photoshop blend modes.", ur: "Do images blend. Modes: Add, Multiply, Screen, Overlay, etc. Photoshop blend modes jaisa." },
      },
      {
        name: "Denoise",
        description: { en: "Run denoiser as a compositor step instead of inline. Lets you choose passes to combine before denoising.", ur: "Denoiser ko inline ki bajaye compositor step. Denoising se pehle passes combine kar sakte." },
      },
      {
        name: "File Output",
        description: { en: "Save extra outputs (depth pass as EXR, denoised as PNG, etc.) alongside the main render. Used in pipelines that need passes for later edit.", ur: "Extra outputs save (depth pass EXR, denoised PNG, etc.) main render ke saath. Pipelines mein jin ko passes baad ke liye chahiye." },
      },
      {
        name: "Cryptomatte",
        description: { en: "Pixel-perfect object/material masks generated automatically. Pick any object by clicking it in the compositor; isolate for color tweaks without re-rendering.", ur: "Pixel-perfect object/material masks automatically generate. Compositor mein object click karke pick; bina re-render color tweaks ke liye isolate." },
      },
    ],
  },
  recipe: {
    heading: { en: "Subtle cinematic post-process", ur: "Subtle cinematic post-process" },
    steps: [
      { step: { en: "Compositing tab → Use Nodes on.", ur: "Compositing tab → Use Nodes on." } },
      { step: { en: "Add Glare → Fog Glow → Mix factor 0.3. Soft bloom over highlights.", ur: "Glare → Fog Glow → Mix factor 0.3. Highlights par soft bloom." } },
      { step: { en: "Add Lens Distortion → Dispersion 0.005. Subtle chromatic aberration.", ur: "Lens Distortion → Dispersion 0.005. Subtle CA." } },
      { step: { en: "Add Color Balance → tint Lift slightly cyan, Gain slightly orange. Teal-and-orange grade.", ur: "Color Balance → Lift halki cyan, Gain halki orange. Teal-and-orange grade." } },
      { step: { en: "Pipe into Composite. Render. Saved file already has the look baked in.", ur: "Composite mein pipe. Render. Saved file mein look baked." } },
    ],
  },
  pitfalls: [
    { en: "Compositor takes time during render: stack of nodes adds processing per frame. Disable for fast preview renders.", ur: "Compositor render ke dauran time: nodes stack per-frame processing add. Fast preview ke liye disable." },
    { en: "Effects look way too strong on first try: dial down to 20-30% of what you initially set. Restraint > saturation.", ur: "Effects pehli baar bohot strong: 20-30% par dial down. Restraint > saturation." },
    { en: "Wanted to color grade but used Color Curves wrong: set the curve, then check the Viewer. RGB curves edit each channel; Composite curve edits luma.", ur: "Color grade chahiye lekin Color Curves galat: curve set, Viewer check. RGB curves har channel, Composite curve luma." },
  ],
  realWorld: [
    { en: "VFX studios composite EXR multi-passes (beauty + depth + normal + crypto) in Nuke or Fusion, not the in-Blender compositor. The Blender compositor is great for stills and indie animation; not the industry's go-to for big productions.", ur: "VFX studios EXR multi-passes (beauty + depth + normal + crypto) Nuke ya Fusion mein composite, in-Blender nahi. Blender compositor stills aur indie animation ke liye great; bare productions ke liye industry go-to nahi." },
  ],
  related: [
    { id: "samples-denoising", note: { en: "Denoise can run in the compositor.", ur: "Denoise compositor mein bhi chal sakti." } },
    { id: "color-management", note: { en: "Compositor runs before view transform.", ur: "Compositor view transform se pehle chalti." } },
  ],
};
