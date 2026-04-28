import type { Chapter } from "@/lib/types";

export const renderChapter: Chapter = {
  id: "render",
  number: 20,
  title: "Render Output",
  summary:
    "Static image ke liye 1024 samples + denoise. Animation ke liye 128-256 samples per frame. Output File Format MP4 for video, PNG for stills.",
  startsAt: 4540,
  status: "complete",
  intro:
    "Sab kuch tayar hai. Ab final render. Static image vs animation alag settings demand karte hain. Yeh chapter trade-offs explain karta hai.",
  concepts: [
    {
      title: "Render Engine: Cycles + GPU + Denoising",
      tagline: "Render Properties → Cycles, Device GPU, Sampling section mein Denoise on.",
      timestamp: 4560,
      whatItIs:
        "Render Properties (camera icon). Top mein Render Engine dropdown se 'Cycles'. **Device** ko 'GPU Compute' set karo (Mac OS pe MetalRT, NVIDIA pe CUDA/Optix, AMD pe HIP). Sampling section mein **Render Samples** = 1024 (still) ya 128-256 (animation). **Denoise**: Viewport aur Render dono enable. Optix (NVIDIA) ya OpenImageDenoise.",
      whyHere:
        "Cycles photorealism deta hai. GPU compute 5-10x faster than CPU. Denoising AI/algorithm noise saaf karta hai, fewer samples se zyada clean image.",
      pitfalls: [
        "Pehli baar GPU select karte time Blender driver setup zaroori (CUDA/Optix install). Mac M-series par MetalRT default hai modern Blender mein.",
      ],
    },
    {
      title: "Animation render: Output panel + MP4",
      tagline: "Output → Format → FFmpeg Video → MPEG-4. Render Animation.",
      timestamp: 4620,
      whatItIs:
        "Properties → Output panel. **Output Path** select karo (folder + filename pattern). **File Format** dropdown se 'FFmpeg Video' chuno. Encoding section open hota hai. **Container** = MPEG-4. **Video Codec** = H.264. **Output Quality** = High. Phir top bar Render → Render Animation (`Ctrl+F12`). Blender frame-by-frame render karega aur video file write karega.",
      whyHere:
        "MP4 universally compatible hai. PNG sequence alternative hai (better quality, easier to re-encode) but file management overhead.",
      recipe: [
        "Output → Output: folder set karo.",
        "File Format: FFmpeg Video.",
        "Container: MPEG-4, Codec: H.264.",
        "Top bar Render → Render Animation.",
        "Wait. Frames render ho ke video file create ho jayegi.",
      ],
      pitfalls: [
        "Animation render long time leta hai (samples × frames). Pehle ek frame test render karke samples calibrate karo.",
      ],
    },
    {
      title: "Static image render",
      tagline: "Animation ki bajaye sirf F12. Image Editor mein open hota hai.",
      timestamp: 4720,
      whatItIs:
        "Single frame render: Render → Render Image (`F12`). Image Editor window open hota hai. **Image → Save As** se file save karo (PNG default for transparency support). Samples 512-1024 generally enough.",
      whyHere:
        "Portfolio ya social media ke liye single image kafi hai. Animation render time ka 1/100 hi lagta hai.",
    },
  ],
};
