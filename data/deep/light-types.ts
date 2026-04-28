import type { DeepConcept } from "@/lib/deep-types";

export const lightTypesConcept: DeepConcept = {
  id: "light-types",
  group: "lighting",
  title: { en: "Light Types, Point, Spot, Area, Sun", ur: "Light Types, Point, Spot, Area, Sun" },
  tagline: {
    en: "Four kinds of light, each modeling a real-world fixture. Picking the right one and dialing in its parameters is half of cinematic 3D.",
    ur: "Char kinds of light, har ek real-world fixture model karta. Sahi pick karna aur parameters dial karna cinematic 3D ka adha hissa.",
  },
  whatItIs: [
    {
      en: "Blender has four light types you'll add via `Shift+A → Light`. Each has different physical behavior. Lighting setups almost always combine multiple types.",
      ur: "Blender mein 4 light types `Shift+A → Light` se add hote. Har ek alag physical behavior. Lighting setups aksar multiple types combine karte.",
    },
  ],
  variants: {
    heading: { en: "All four types compared", ur: "Saare 4 types compared" },
    items: [
      {
        name: "Point",
        description: { en: "Light radiates equally in all directions from a single point. Real-world analog: bare lightbulb.", ur: "Single point se sab directions mein equally radiate. Real-world analog: bare lightbulb." },
        when: { en: "Indoor general lighting, candle flame, string lights.", ur: "Indoor general lighting, candle flame, string lights." },
      },
      {
        name: "Spot",
        description: { en: "Cone-shaped light. Has direction, cone angle (size), and blend (how soft the cone edge is).", ur: "Cone-shaped light. Direction, cone angle (size), aur blend (cone edge kitna soft) hai." },
        when: { en: "Stage spotlights, focused interior lighting, flashlight beams. Used in the tutorial for the shop interior.", ur: "Stage spotlights, focused interior lighting, flashlight beams. Tutorial mein shop interior ke liye." },
      },
      {
        name: "Area",
        description: { en: "Light radiates from a flat shape (square, rectangle, disk, ellipse). Soft, diffuse output. Real-world analog: studio softbox.", ur: "Flat shape (square, rectangle, disk, ellipse) se light radiate. Soft, diffuse output. Real-world analog: studio softbox." },
        when: { en: "Cinematic key/fill lights. Best for soft shadows and even illumination. Most flexible for 'pretty' lighting.", ur: "Cinematic key/fill lights. Soft shadows aur even illumination ke liye best. 'Pretty' lighting ke liye most flexible." },
      },
      {
        name: "Sun",
        description: { en: "Directional infinite light. Distance to objects doesn't matter, only direction. All rays parallel. Real-world analog: actual sunlight.", ur: "Directional infinite light. Objects se distance matter nahi karti, sirf direction. Saari rays parallel. Real-world analog: actual sunlight." },
        when: { en: "Outdoor scenes, key light for daytime, defining the dominant 'shadow direction'.", ur: "Outdoor scenes, daytime ke liye key light, dominant 'shadow direction' define karne ke liye." },
      },
    ],
  },
  recipe: {
    heading: { en: "Common light setup recipes", ur: "Common light setup recipes" },
    steps: [
      { step: { en: "**Indoor 3-point**: 1 area key (warm, strong) + 1 area fill (cool, half strength) + 1 area rim/back (any color, focused on subject's edge).", ur: "**Indoor 3-point**: 1 area key (warm, strong) + 1 area fill (cool, half strength) + 1 area rim/back (any color, subject edge par focus)." } },
      { step: { en: "**Daytime exterior**: 1 sun (warm yellow, strong) + 1 large area light from opposite direction (cool blue, fill bouncing 'sky' light).", ur: "**Daytime exterior**: 1 sun (warm yellow, strong) + 1 large area light opposite direction se (cool blue, 'sky' light bouncing fill)." } },
      { step: { en: "**Cyberpunk shop (tutorial style)**: spotlights inside (warm), area lights outside (cool) + sun back-rim, plus emission signs.", ur: "**Cyberpunk shop (tutorial style)**: spotlights andar (warm), area lights baahar (cool) + sun back-rim, plus emission signs." } },
      { step: { en: "**Single product shot**: 1 large area light directly overhead, 1 small fill area off-side, dark background.", ur: "**Single product shot**: 1 large area light overhead, 1 small fill area off-side, dark background." } },
    ],
  },
  pitfalls: [
    { en: "Using point lights for everything because they're the simplest. Result: flat shadows, no direction. Try at least one spot or area for visual variety.", ur: "Sirf point lights use karna kyunki simplest hain. Result: flat shadows, koi direction nahi. Variety ke liye kam se kam ek spot ya area try karo." },
    { en: "Forgetting that sun *direction* matters but *position* doesn't. Moving the sun light closer doesn't make it brighter.", ur: "Bhulna ke sun ki *direction* matter karti lekin *position* nahi. Sun light ko qareeb karna brighter nahi banata." },
    { en: "Lights at default 'Watts' (1000W or whatever) blowing out the scene. Most lights need 50-300W in tight indoor scenes.", ur: "Default 'Watts' (1000W ya jo bhi) par lights scene blow out karte. Aksar lights tight indoor scenes mein 50-300W chahiye." },
  ],
  related: [
    { id: "volumetric-fog", note: { en: "Lights interact with fog dramatically.", ur: "Lights fog ke saath dramatically interact karte." } },
    { id: "emission-shader", note: { en: "Emission surfaces also act as lights in Cycles.", ur: "Emission surfaces bhi Cycles mein lights ki tarah behave karti." } },
    { id: "eevee-vs-cycles", note: { en: "Light behavior differs between engines.", ur: "Light behavior engines ke darmiyan alag." } },
  ],
};
