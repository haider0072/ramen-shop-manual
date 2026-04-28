import type { DeepConcept } from "@/lib/deep-types";

export const samplesDenoisingConcept: DeepConcept = {
  id: "samples-denoising",
  group: "render",
  title: { en: "Samples & Denoising (Cycles)", ur: "Samples aur Denoising (Cycles)" },
  tagline: {
    en: "Cycles fires rays per pixel; more rays = cleaner image but slower render. Denoising lets you cheat, fewer rays, cleaned up by AI.",
    ur: "Cycles per pixel rays fire karta; zyada rays = cleaner image lekin slower. Denoising tumhe cheat karne deta, kam rays, AI se cleaned up.",
  },
  whatItIs: [
    {
      en: "When Cycles renders, for each pixel it fires N rays into the scene to figure out 'what does this pixel see?' N is your sample count. Each ray bounces, hits surfaces, picks up colors, and contributes a small piece of the final color. Average all N samples and you get the pixel's value.",
      ur: "Jab Cycles render karta, har pixel ke liye N rays scene mein fire karta yeh figure out karne ke liye 'yeh pixel kya dekh raha?'. N sample count hai. Har ray bounce karti, surfaces hit karti, colors pick karti, aur final color ka chhota hissa contribute karti. Saare N samples ko average karo aur pixel ki value milti.",
    },
    {
      en: "Few samples = noisy image (Monte Carlo noise looks like grain or fireflies). Many samples = clean image, but proportionally slower. Doubling samples roughly halves the noise but doubles the time.",
      ur: "Kam samples = noisy image (Monte Carlo noise grain ya fireflies jaisa). Zyada samples = clean image, lekin proportionally slower. Samples double karna noise approximately half lekin time double.",
    },
    {
      en: "Denoising is a post-process AI step. It looks at the noisy image and outputs a cleaned version. Modern denoisers (Optix on NVIDIA, OIDN cross-platform) are excellent, 256 samples + denoise often looks cleaner than 1024 samples raw.",
      ur: "Denoising post-process AI step hai. Noisy image dekhta aur cleaned version output karta. Modern denoisers (NVIDIA par Optix, OIDN cross-platform) excellent, 256 samples + denoise aksar 1024 samples raw se cleaner lagta.",
    },
  ],
  variants: {
    heading: { en: "Cycles sampling settings", ur: "Cycles sampling settings" },
    items: [
      {
        name: "Render Samples",
        description: { en: "Samples per pixel for the final render. 256-1024 typical. Animation can use 128-256 (denoising hides per-frame noise).", ur: "Final render ke liye samples per pixel. 256-1024 typical. Animation 128-256 (denoising per-frame noise hide karta)." },
      },
      {
        name: "Viewport Samples",
        description: { en: "Samples per pixel in the rendered viewport preview. Keep low (4-8) while modeling.", ur: "Rendered viewport preview ke liye samples per pixel. Modeling ke time low (4-8) rakho." },
      },
      {
        name: "Adaptive Sampling",
        description: { en: "Auto-stops sampling pixels that already look 'clean enough' (under a noise threshold). Can speed up renders 2-3×.", ur: "Auto-stops sampling un pixels par jo already 'clean enough' (noise threshold se kam). Renders 2-3× speed up kar sakta." },
        when: { en: "Always on for production renders. Set noise threshold around 0.01.", ur: "Production renders ke liye hamesha on. Noise threshold ~0.01." },
      },
      {
        name: "Time Limit",
        description: { en: "Stop rendering after N seconds regardless of sample count. Useful for time-budgeted batches.", ur: "N seconds ke baad render rok do sample count regardless. Time-budgeted batches ke liye useful." },
      },
      {
        name: "Light Paths → Bounces",
        description: { en: "Max number of times a ray can bounce. More bounces = more accurate global illumination but slower. Defaults are usually fine.", ur: "Ek ray maximum kitni baar bounce kare. Zyada bounces = more accurate global illumination lekin slower. Defaults aksar theek." },
      },
      {
        name: "Denoising, Optix",
        description: { en: "NVIDIA-only. AI-based, fastest, decent quality. Default if you have an NVIDIA GPU.", ur: "Sirf NVIDIA. AI-based, fastest, decent quality. NVIDIA GPU hai to default." },
      },
      {
        name: "Denoising, OpenImageDenoise (OIDN)",
        description: { en: "Cross-platform CPU-based. Slower but works on any hardware. Higher quality than Optix in some scenes.", ur: "Cross-platform CPU-based. Slower lekin har hardware par. Kuch scenes mein Optix se zyada quality." },
      },
    ],
  },
  recipe: {
    heading: { en: "Production-quality Cycles settings", ur: "Production-quality Cycles settings" },
    steps: [
      { step: { en: "Render Properties → Sampling.", ur: "Render Properties → Sampling." } },
      { step: { en: "Render Samples: 512-1024 for stills, 128-256 for animation frames.", ur: "Render Samples: stills ke liye 512-1024, animation frames ke liye 128-256." } },
      { step: { en: "Adaptive Sampling: ON. Threshold 0.01.", ur: "Adaptive Sampling: ON. Threshold 0.01." } },
      { step: { en: "Denoise: ON for both Viewport and Render.", ur: "Denoise: Viewport aur Render dono ON." } },
      { step: { en: "Denoiser: Optix (NVIDIA) or OIDN (anything else).", ur: "Denoiser: Optix (NVIDIA) ya OIDN (baki sab)." } },
      { step: { en: "Device: GPU Compute (massively faster than CPU).", ur: "Device: GPU Compute (CPU se massively faster)." } },
    ],
  },
  pitfalls: [
    { en: "Cranking samples to 4096 'just to be safe'. Wastes hours of render time. Modern denoisers make 256-512 indistinguishable from 4096 in most scenes.", ur: "Samples 4096 'safety' ke liye crank. Render hours waste. Modern denoisers most scenes mein 256-512 ko 4096 se indistinguishable banate." },
    { en: "Denoising on but viewport samples at 1. Result: denoiser washes out detail because there's not enough signal. Use at least 4-8 viewport samples.", ur: "Denoising on lekin viewport samples 1 par. Result: denoiser detail wash out karta kyunki signal kam. Kam se kam 4-8 viewport samples." },
    { en: "Forgetting to switch device to GPU. CPU rendering is 10-50× slower on modern hardware.", ur: "Device GPU karna bhulna. CPU rendering modern hardware par 10-50× slower." },
    { en: "Animation: per-frame denoising sometimes flickers between frames. Use 'Temporal Denoise' (Compositor-based) or render with extra-low noise threshold.", ur: "Animation: per-frame denoising kabhi frames ke darmiyan flicker karta. 'Temporal Denoise' (Compositor-based) use karo ya extra-low noise threshold se render." },
  ],
  related: [
    { id: "eevee-vs-cycles", note: { en: "Samples and denoising are Cycles-specific concerns.", ur: "Samples aur denoising Cycles-specific hain." } },
  ],
};
