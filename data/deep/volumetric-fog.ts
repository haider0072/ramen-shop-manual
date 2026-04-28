import type { DeepConcept } from "@/lib/deep-types";

export const volumetricFogConcept: DeepConcept = {
  id: "volumetric-fog",
  group: "lighting",
  title: { en: "Volumetric Fog", ur: "Volumetric Fog" },
  tagline: {
    en: "Air full of tiny particles. Light beams turn visible. Atmosphere happens. The single biggest 'cinematic' upgrade you can add to a scene.",
    ur: "Hawa choti particles se bhari. Light beams visible. Atmosphere ban gayi. Scene mein add karne wala sab se bara 'cinematic' upgrade.",
  },
  whatItIs: [
    {
      en: "In a normal 3D scene, light travels through 'empty' space without interacting until it hits a surface. Volumetric fog fills that space with a participating medium, small simulated particles (water vapor, dust, smoke) that scatter and absorb light. Suddenly light beams become visible, and depth in the scene reads more dramatically.",
      ur: "Normal 3D scene mein, light 'empty' space ke through travel karti without interacting jab tak surface pe na lage. Volumetric fog us space ko participating medium se bharta, choti simulated particles (water vapor, dust, smoke) jo light ko scatter aur absorb karti hain. Achanak light beams visible ho jate aur scene mein depth zyada dramatically read hoti.",
    },
    {
      en: "Volumes attach to a *bounded shape*, usually a cube big enough to enclose the visible scene. The shape's mesh data isn't visible itself; only the volume effect inside it. The cube becomes an invisible 'bag' of fog.",
      ur: "Volumes ek *bounded shape* se attach hote, aksar ek cube jo visible scene ko enclose kare. Shape ki mesh data khud visible nahi hoti; sirf andar ka volume effect. Cube ek invisible 'bag' of fog ban jata.",
    },
  ],
  whyItExists: [
    {
      en: "Real photography in dusty rooms, foggy mornings, smoke-filled bars looks dramatically different from sterile clean air. The volume scatters light, softens highlights, and creates 'god rays'. Without volumetrics, your 3D render always looks technically clean but feels lifeless.",
      ur: "Real photography dusty rooms, foggy mornings, smoke-filled bars mein sterile clean air se dramatically different lagti. Volume light ko scatter karta, highlights soften karta, aur 'god rays' banata. Volumetrics ke baghair, tumhara 3D render hamesha technically clean lekin lifeless feel karta.",
    },
  ],
  howItWorks: [
    {
      en: "Path tracers (like Cycles) handle volumetrics natively: rays passing through the volume have a probability of scattering. The probability depends on density, the higher the density, the foggier. Color tints the scattered result.",
      ur: "Path tracers (like Cycles) volumetrics natively handle karte: rays jo volume ke through pass karte unke scatter hone ki probability hai. Probability density par depend karti, jitni density utna foggy. Color scattered result ko tint karta.",
    },
    {
      en: "Real-time engines (EEVEE) approximate volumetrics with screen-space tricks. Faster but less accurate; for cinematic-quality fog, use Cycles.",
      ur: "Real-time engines (EEVEE) volumetrics ko screen-space tricks se approximate karte. Faster lekin less accurate; cinematic-quality fog ke liye Cycles use karo.",
    },
  ],
  variants: {
    heading: { en: "Principled Volume settings", ur: "Principled Volume settings" },
    items: [
      {
        name: "Color",
        description: { en: "The base color of the fog. Slightly off-white tints add atmosphere without overwhelming.", ur: "Fog ka base color. Slightly off-white tints atmosphere add karte without overwhelming." },
      },
      {
        name: "Density",
        description: { en: "How thick the fog is. 0.01-0.05 for subtle haze; 0.1+ for heavy fog. Past 1, the scene becomes a fog wall.", ur: "Fog kitna motta. 0.01-0.05 subtle haze ke liye; 0.1+ heavy fog. 1 ke aage, scene fog wall ban jata." },
      },
      {
        name: "Anisotropy",
        description: { en: "Forward-scatter vs back-scatter ratio. 0 = uniform scatter (default). Positive = light scatters forward (sun shafts visible). Negative = backward (rare).", ur: "Forward-scatter vs back-scatter ratio. 0 = uniform scatter (default). Positive = forward scatter (sun shafts visible). Negative = backward (rare)." },
        when: { en: "0.5+ for dramatic god-rays from sunlight or strong area lights.", ur: "0.5+ dramatic god-rays ke liye sunlight ya strong area lights se." },
      },
      {
        name: "Absorption Color",
        description: { en: "Color of light *absorbed* by the volume. Subtle effect; useful for muddy or smoky tints.", ur: "Volume ke through *absorbed* light ka color. Subtle effect; muddy ya smoky tints ke liye useful." },
      },
      {
        name: "Emission Color & Strength",
        description: { en: "The volume itself can emit light (think: glowing fog around a streetlight).", ur: "Volume khud light emit kar sakta (think: streetlight ke around glowing fog)." },
      },
      {
        name: "Blackbody Intensity & Tint",
        description: { en: "Make the volume glow based on temperature. Used for fire/smoke effects with realistic heat coloring.", ur: "Volume ko temperature ke based glow karwao. Fire/smoke effects ke liye realistic heat coloring ke saath." },
      },
    ],
  },
  recipe: {
    heading: { en: "The 'cube of fog' setup", ur: "'Cube of fog' setup" },
    steps: [
      { step: { en: "`Shift+A → Mesh → Cube`. Scale up large enough to contain the entire visible scene.", ur: "`Shift+A → Mesh → Cube`. Scale up itna ke visible scene contain ho." } },
      { step: { en: "Rename it 'fog' in the Outliner for clarity.", ur: "Outliner mein 'fog' rename clarity ke liye." } },
      { step: { en: "Add a new material. Open the Shader Editor.", ur: "New material add. Shader Editor open." } },
      { step: { en: "Disconnect the default Principled BSDF from Material Output's Surface input.", ur: "Default Principled BSDF ko Material Output ke Surface input se disconnect." } },
      { step: { en: "`Shift+A → Shader → Principled Volume`. Connect its output to Material Output → Volume input.", ur: "`Shift+A → Shader → Principled Volume`. Iska output Material Output → Volume se connect." } },
      { step: { en: "Set Density to 0.01 (start subtle).", ur: "Density 0.01 (subtle start)." } },
      { step: { en: "Set Color to a slightly warm or cool tint.", ur: "Color slightly warm ya cool tint." } },
      { step: { en: "Render in Cycles. Adjust density up if too clear, down if too foggy.", ur: "Cycles mein render. Density up agar bohot clear, down agar bohot foggy." } },
    ],
  },
  pitfalls: [
    { en: "Density too high (0.5+) erases your scene. Stay subtle, especially for ground-level shots.", ur: "Density bohot zyada (0.5+) scene erase kar deti. Subtle raho, especially ground-level shots ke liye." },
    { en: "Cube too small to enclose the scene. Visible 'edge' of the fog where the cube ends. Make the cube bigger or move it further out.", ur: "Cube scene enclose karne ke liye chhota. Fog ka visible 'edge' jahan cube khatam. Cube bara karo ya door move." },
    { en: "Using EEVEE without enabling 'Volumetrics' in Render Properties → Volumetrics. EEVEE volume settings are tucked away and easy to miss.", ur: "EEVEE bina Render Properties → Volumetrics enable kiye. EEVEE volume settings hidden hain aur miss karna asaan." },
  ],
  realWorld: [
    { en: "Tarkovsky films. Bladerunner 2049. Almost every dramatic concept-art-feeling render. Volumetrics are how 'still images' feel like 'moments captured in air'.", ur: "Tarkovsky films. Bladerunner 2049. Almost har dramatic concept-art-feeling render. Volumetrics se 'still images' 'hawa mein captured moments' jaisi feel hoti.",  },
  ],
  related: [
    { id: "light-types", note: { en: "Volume + strong directional light = god rays.", ur: "Volume + strong directional light = god rays." } },
    { id: "eevee-vs-cycles", note: { en: "Volume render quality is much better in Cycles.", ur: "Volume render quality Cycles mein much better." } },
  ],
};
