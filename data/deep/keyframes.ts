import type { DeepConcept } from "@/lib/deep-types";

export const keyframesConcept: DeepConcept = {
  id: "keyframes",
  group: "animation",
  title: { en: "Keyframes", ur: "Keyframes" },
  tagline: {
    en: "A pinned-down value at a specific frame. Animation is just Blender interpolating between two keyframes.",
    ur: "Specific frame par pinned-down value. Animation bas Blender ka do keyframes ke darmiyan interpolate karna hai.",
  },
  shortcuts: [
    { keys: "I", meaning: { en: "Insert keyframe menu (Object Mode legacy).", ur: "Insert keyframe menu (Object Mode legacy)." } },
    { keys: "Right-click on a property → Insert Keyframe", meaning: { en: "Modern way: keyframe a single property.", ur: "Modern way: ek property ko keyframe karo." } },
    { keys: "Alt + I", meaning: { en: "Clear keyframes on the active property.", ur: "Active property par keyframes clear." } },
  ],
  whatItIs: [
    {
      en: "A keyframe locks a property's value at a specific frame number. 'At frame 1, this object's Z position is 0. At frame 60, its Z position is 5.' Blender draws the in-between values automatically, at frame 30, it shows Z = 2.5 (linear interpolation, by default Bezier with easing).",
      ur: "Keyframe ek property ki value ko specific frame number par lock karta. 'Frame 1 par is object ki Z position 0. Frame 60 par 5.' Blender automatically beech ki values draw karta, frame 30 par Z = 2.5 (linear interpolation, default Bezier with easing).",
    },
    {
      en: "Almost any property can be keyframed: location, rotation, scale, modifier values, shader values, light power, camera focal length. The Timeline shows yellow diamonds at each keyframe; the Graph Editor shows the curve between them.",
      ur: "Almost koi bhi property keyframe ho sakti: location, rotation, scale, modifier values, shader values, light power, camera focal length. Timeline yellow diamonds dikhati har keyframe par; Graph Editor unke darmiyan curve.",
    },
  ],
  variants: {
    heading: { en: "Different ways to insert keyframes", ur: "Keyframes insert karne ke alag tareeqe" },
    items: [
      {
        name: "I (legacy)",
        description: { en: "In Object Mode, opens a menu of keyframe sets (Location, Rotation, Scale, Loc-Rot-Scale, etc.).", ur: "Object Mode mein keyframe sets ka menu (Location, Rotation, Scale, Loc-Rot-Scale, etc.)." },
      },
      {
        name: "Right-click on a property",
        description: { en: "Most surgical. Right-click any field (location.x, rotation.z, modifier.amount) and pick 'Insert Keyframe'.", ur: "Most surgical. Kisi bhi field par right-click (location.x, rotation.z, modifier.amount) aur 'Insert Keyframe' pick." },
        when: { en: "When you only want one specific property keyframed, not all of them.", ur: "Jab tum sirf ek specific property keyframe karna chahte ho, sab ko nahi." },
      },
      {
        name: "Auto Keyframe (red record button in timeline)",
        description: { en: "Toggle on. Now any change you make to any property auto-creates a keyframe at the current frame.", ur: "Toggle on. Ab koi bhi change current frame par auto-keyframe banata." },
        when: { en: "Animation sessions where you're tweaking constantly. Turn off when modeling or you'll get stray keyframes.", ur: "Animation sessions mein jab tum constantly tweak kar rahe ho. Modeling time off karo warna stray keyframes." },
      },
      {
        name: "Insert Keyframe Set (I → menu)",
        description: { en: "Choose a group of related properties to keyframe at once. Like 'Available' (everything currently animated).", ur: "Related properties ka group ek saath keyframe. Jaise 'Available' (jo abhi animated hai sab)." },
      },
    ],
  },
  recipe: {
    heading: { en: "Turntable rotation animation", ur: "Turntable rotation animation" },
    steps: [
      { step: { en: "Set frame range 1 to 120 in Output Properties. Frame rate 30 fps.", ur: "Output Properties mein frame range 1 se 120. Frame rate 30 fps." } },
      { step: { en: "Add an Empty (`Shift+A → Empty → Plain Axes`).", ur: "Empty add (`Shift+A → Empty → Plain Axes`)." } },
      { step: { en: "Parent the camera to the empty (`Ctrl+P → Object`).", ur: "Camera ko empty ka parent (`Ctrl+P → Object`)." } },
      { step: { en: "Frame 1: select empty, N-panel, right-click on Z Rotation → Insert Keyframe.", ur: "Frame 1: empty select, N-panel, Z Rotation par right-click → Insert Keyframe." } },
      { step: { en: "Go to frame 60. Set Z Rotation to 180. Right-click → Insert Keyframe.", ur: "Frame 60. Z Rotation 180 set. Right-click → Insert Keyframe." } },
      { step: { en: "Go to frame 120. Set Z Rotation to 360. Right-click → Insert Keyframe.", ur: "Frame 120. Z Rotation 360 set. Right-click → Insert Keyframe." } },
      { step: { en: "Spacebar to play. Camera orbits the empty in 4 seconds.", ur: "Spacebar se play. Camera empty ke around 4 second mein orbit." } },
    ],
  },
  pitfalls: [
    { en: "Forgetting Auto Keyframe is on. Every move creates a stray keyframe and the animation breaks.", ur: "Bhulna ke Auto Keyframe on hai. Har move stray keyframe banata aur animation break ho jati." },
    { en: "Keyframing a property in Object Mode that should be in Edit Mode (like a vertex position). Object-level keyframes don't reach into mesh data; use Shape Keys for that.", ur: "Object Mode mein woh property keyframe karna jo Edit Mode mein honi chahiye (jaise vertex position). Object-level keyframes mesh data tak nahi pohanchti; iske liye Shape Keys use karo." },
    { en: "Two keyframes with the same value but Blender adds an unexpected dip between them. Default interpolation is Bezier with auto handles, which can overshoot. Switch to Linear in Graph Editor if you want flat between identical values.", ur: "Do keyframes same value lekin Blender unexpected dip add karta. Default interpolation Bezier with auto handles, jo overshoot kar sakta. Identical values ke darmiyan flat ke liye Graph Editor mein Linear switch." },
  ],
  related: [
    { id: "graph-editor", note: { en: "How to inspect and shape the curves between keyframes.", ur: "Keyframes ke darmiyan curves ko inspect aur shape kaise karte." } },
    { id: "parent-empty", note: { en: "Pairing keyframes with parented empties makes rigs.", ur: "Keyframes + parented empties = rigs." } },
  ],
};
