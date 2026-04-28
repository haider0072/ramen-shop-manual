import type { Chapter } from "@/lib/types";

export const animationChapter: Chapter = {
  id: "animation",
  number: 19,
  title: "Turntable Animation",
  summary:
    "Empty banao, camera ko us ka child banao, empty ke Z rotation par 3 keyframes. Phir Graph Editor mein curves ko 'pull through' karo for smooth loop.",
  startsAt: 4365,
  status: "complete",
  intro:
    "Final touch: scene ko slowly rotate karna. Yeh classic 'turntable' animation hai jo product render aur diorama presentations mein use hoti hai. Setup simple lekin smooth loop banane ke liye Graph Editor ka thoda khayal rakhna parta hai.",
  concepts: [
    {
      title: "Empty + parent for rig",
      tagline: "Empty banao, camera ko empty ka child banao. Empty rotate karo, camera saath ghoomay.",
      timestamp: 4380,
      whatItIs:
        "`Shift+A → Empty → Plain Axes` (ya Cube). Empty world origin par add ho jata hai by default. Camera ko select karo, phir `Shift+click` se empty add karo (empty active). `Ctrl+P → Object` se camera empty ka child banao. Ab empty rotate karne se camera us ke around orbit karega.",
      whyHere:
        "Direct camera animate karna possible hai but predictable nahi. Empty ka rig handle banane se camera scene ke center ke around clean orbit karta hai. Plus future mein camera ka FOV ya position alag se tweak kar sakte ho without animation tod ke.",
      figmaAnalogy:
        "Figma mein 'group' jaisa hai. Group ko move karo, andar ke layers saath chalte hain. Empty = group container, camera = group ka ek member.",
      gameDevRelevance:
        "Game engines mein cinematic cameras aksar 'rig' setup mein hote hain. Empty/Anchor + camera + dolly track. Blender mein yahi pattern.",
      recipe: [
        "`Shift+A → Empty → Plain Axes`.",
        "Empty world origin par dikhega.",
        "Camera select, then `Shift+click` empty (last clicked = active).",
        "`Ctrl+P → Object`.",
        "Empty rotate karke check karo, camera saath ghoomay.",
      ],
    },
    {
      title: "Output settings: 1-120 frames at 30fps",
      tagline: "4 second loop. Output panel mein frame range aur fps.",
      timestamp: 4400,
      whatItIs:
        "Properties → Output panel. **Frame Start: 1**, **End: 120**. **Frame Rate: 30**. Math: 120 frames / 30 fps = 4 seconds. Default 24fps from cinema, 30fps web standard.",
      whyHere:
        "Turntable 4 seconds enough hai. Lambi loop boring, chhoti loop choppy. 4s sweet spot.",
    },
    {
      title: "Three keyframes: 1, 60, 120",
      tagline: "Frame 1 par 0°, frame 60 par 180°, frame 120 par 360°. Loop done.",
      timestamp: 4460,
      whatItIs:
        "Empty select. Properties (`N`) panel mein 'Item' tab, Rotation Z field. Frame 1 par right-click → Insert Keyframe. Timeline mein frame 60 pe jao, Z rotation 180° set karo, right-click → Insert Keyframe. Frame 120 par 360°, keyframe insert. Timeline mein yellow diamonds dikhayi denge keyframes.",
      whyHere:
        "Three keyframes loop ke liye sufficient hain (start, middle, end). Middle keyframe rotation direction confirm karta hai (taakay Blender shortcut na le).",
      pitfalls: [
        "Sirf frame 1 aur 120 keyframes karoge to loop technically work karega lekin Blender shortest path le sakta hai (rotate karne ke bajaye reverse). Middle keyframe disambiguates.",
      ],
    },
    {
      title: "Graph Editor mein curves ko continuous banana",
      tagline: "Keyframe handles ko 'pull through' karo. Loop pe rukna nahi hoga.",
      timestamp: 4540,
      whatItIs:
        "Default keyframe interpolation 'Bezier' hai. Beech mein values smooth aati hain but har keyframe pe rotation rukti hai (ease-in/out). Continuous spinning ke liye yeh galat hai. Workspace ke timeline area mein 'Editor type' switcher se 'Graph Editor' select karo. Keyframes points ke taur pe dikhayi denge with handles. Pehle keyframe ka left handle 'pull' karo upar/aage so curve straight chale through. Last keyframe ka right handle bhi pull. Curve ab continuous wave ki tarah behave karega.",
      whyHere:
        "Bezier ease beautiful hai single action ke liye (jump, slide). Looping motion mein zaroori hai ke curve khud par 'wrap' kare bina rukey. Hand-tweaked handles classic technique hai.",
      figmaAnalogy:
        "Figma Smart Animate ke easing curves ke saath play karne jaisa. Spring vs ease-out vs linear, har ek alag feel deta hai. Yahan tum manually handle se shape banate ho.",
      recipe: [
        "Timeline editor ke header mein 'Editor Type' icon click.",
        "'Graph Editor' chuno.",
        "Empty ka Z Rotation curve dikhe.",
        "Pehla keyframe select. Left handle (curve start hone se pehle) drag karo upar/aage.",
        "Last keyframe select. Right handle bhi same direction mein.",
        "Animation play karo (Spacebar). Smooth continuous spin chahiye.",
      ],
    },
  ],
};
