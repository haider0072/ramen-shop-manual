import type { DeepConcept } from "@/lib/deep-types";

export const outputSettingsConcept: DeepConcept = {
  id: "output-settings",
  group: "render",
  title: { en: "Output Settings", ur: "Output Settings" },
  tagline: {
    en: "Resolution, frame rate, file format, where it saves. The unglamorous panel that decides if your render survives or corrupts.",
    ur: "Resolution, frame rate, file format, kahan save. Unglamorous panel jo decide karta render survive ya corrupt.",
  },
  whatItIs: [
    {
      en: "Properties → Output (printer icon) controls everything that happens *after* the renderer finishes a frame: how big the image is, what file type it's saved as, where on disk, and how multi-frame animations are bundled.",
      ur: "Properties → Output (printer icon) sab control karta jo renderer ke frame khatam karne ke *baad* hota: image kitni bari, kis file type, disk par kahan, aur multi-frame animations kaise bundle.",
    },
  ],
  variants: {
    heading: { en: "Output panel breakdown", ur: "Output panel breakdown" },
    items: [
      {
        name: "Resolution X / Y",
        description: { en: "Pixel dimensions. 1920x1080 = full HD. 3840x2160 = 4K. 1080x1080 for Instagram squares.", ur: "Pixel dimensions. 1920x1080 = full HD. 3840x2160 = 4K. 1080x1080 Instagram squares ke liye." },
      },
      {
        name: "Resolution %",
        description: { en: "Multiplies the resolution. 50% on 1080p = render at 540p. Used for fast preview drafts.", ur: "Resolution multiply. 1080p par 50% = 540p render. Fast preview drafts ke liye." },
      },
      {
        name: "Frame Rate (fps)",
        description: { en: "24 = cinematic. 30 = standard video. 60 = smooth slow-mo or game capture. Set this BEFORE animating; changing later breaks timing.", ur: "24 = cinematic. 30 = standard video. 60 = smooth slow-mo ya game capture. Animation se PEHLE set; baad mein change karna timing toot." },
      },
      {
        name: "Frame Range, Start / End",
        description: { en: "Which frames render in an animation. End frame is inclusive.", ur: "Animation mein kaunse frames render. End frame inclusive." },
      },
      {
        name: "Output Path",
        description: { en: "Folder + filename pattern. `//renders/frame_` saves to './renders/frame_0001.png' etc. Two slashes = relative to .blend file.", ur: "Folder + filename pattern. `//renders/frame_` './renders/frame_0001.png' save. Do slashes = .blend file relative." },
      },
      {
        name: "File Format, PNG",
        description: { en: "Lossless. 8-bit (default) or 16-bit. Standard for stills.", ur: "Lossless. 8-bit (default) ya 16-bit. Stills ka standard." },
      },
      {
        name: "File Format, JPEG",
        description: { en: "Lossy. Smaller file size. Use only when storage matters and you're ok with quality loss.", ur: "Lossy. Smaller file. Sirf jab storage matter aur quality loss ok." },
      },
      {
        name: "File Format, OpenEXR",
        description: { en: "32-bit float per channel, lossless. Holds full HDR data plus passes. Standard for VFX/compositing pipelines.", ur: "32-bit float per channel, lossless. Full HDR data plus passes. VFX/compositing pipelines ka standard." },
      },
      {
        name: "File Format, FFmpeg Video",
        description: { en: "Saves directly to .mp4 / .mov / .mkv. Pick container + codec (H.264 most compatible). Risky for long renders, a crash mid-render can corrupt the whole video.", ur: "Direct .mp4 / .mov / .mkv. Container + codec (H.264 most compatible). Long renders ke liye risky, mid-render crash poora video corrupt." },
      },
      {
        name: "Color, RGB / RGBA",
        description: { en: "RGBA includes an alpha (transparent) channel. Use RGBA when you want transparent backgrounds (combined with Render → Film → Transparent).", ur: "RGBA mein alpha (transparent) channel. Transparent backgrounds chahiye to RGBA (Render → Film → Transparent ke saath)." },
      },
      {
        name: "Color Depth, 8 / 16 / 32-bit",
        description: { en: "Bits per channel. 8-bit = standard web. 16-bit = high-precision images for further editing. 32-bit = HDR float (EXR only).", ur: "Bits per channel. 8-bit = standard web. 16-bit = aage edit ke liye high-precision. 32-bit = HDR float (sirf EXR)." },
      },
      {
        name: "Compression",
        description: { en: "PNG: 0-100 (effort, not quality). JPEG: quality 0-100. EXR: ZIP/PIZ/RLE codecs.", ur: "PNG: 0-100 (effort, quality nahi). JPEG: quality 0-100. EXR: ZIP/PIZ/RLE codecs." },
      },
      {
        name: "Render at frame range vs Render Animation",
        description: { en: "`Ctrl+F12` renders the whole frame range to disk. `F12` renders just the current frame.", ur: "`Ctrl+F12` poora frame range disk par. `F12` sirf current frame." },
      },
    ],
  },
  recipe: {
    heading: { en: "Animation render setup", ur: "Animation render setup" },
    steps: [
      { step: { en: "Resolution: 1920x1080. Resolution % 100. Frame rate 24.", ur: "Resolution: 1920x1080. Resolution % 100. Frame rate 24." } },
      { step: { en: "Frame range 1 to 240 (10 sec at 24fps).", ur: "Frame range 1 se 240 (24fps par 10 sec)." } },
      { step: { en: "Output path: `//renders/anim_`. File format: PNG (image sequence, NOT video).", ur: "Output path: `//renders/anim_`. File format: PNG (image sequence, video NAHI)." } },
      { step: { en: "`Ctrl+F12` to render. Each frame saved as a separate PNG (anim_0001.png to anim_0240.png).", ur: "`Ctrl+F12` render. Har frame alag PNG (anim_0001.png se anim_0240.png)." } },
      { step: { en: "Combine into video later via Video Sequencer (Add → Image Sequence) or external tool like ffmpeg.", ur: "Baad mein video banao Video Sequencer (Add → Image Sequence) ya external ffmpeg." } },
    ],
  },
  pitfalls: [
    { en: "Rendering animation directly to .mp4: if Blender crashes at frame 200 of 500, the file is corrupt and unrecoverable. Always render to image sequence first; combine to video after.", ur: "Animation direct .mp4 mein render: 500 mein se frame 200 par crash to file corrupt. Hamesha image sequence mein render; phir video banao." },
    { en: "Output path forgotten and renders went to /tmp: the system might delete them. Always set output path before hitting render.", ur: "Output path bhula aur renders /tmp mein: system delete kar sakta. Hamesha output path render se pehle set." },
    { en: "Frame range mismatched with timeline. Output Properties is the truth, not the timeline editor's range.", ur: "Frame range timeline se mismatched. Output Properties truth, timeline editor ki range nahi." },
    { en: "Resolution % left at 50% from a draft: final 'full' render is half-size. Always check before final.", ur: "Draft se Resolution % 50% chhora: final 'full' render aadha. Hamesha final se pehle check." },
  ],
  related: [
    { id: "compositor", note: { en: "Compositor runs before output saves.", ur: "Compositor output save se pehle chalti." } },
    { id: "samples-denoising", note: { en: "More samples = longer render at output time.", ur: "Zyada samples = output par longer render." } },
  ],
};
