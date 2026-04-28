import type { DeepConcept } from "@/lib/deep-types";

export const graphEditorConcept: DeepConcept = {
  id: "graph-editor",
  group: "animation",
  title: { en: "Graph Editor & F-Curves", ur: "Graph Editor & F-Curves" },
  tagline: {
    en: "The Graph Editor shows your animation as math. Tweaking the curve = tweaking how things move between keyframes.",
    ur: "Graph Editor animation ko math ke taur par dikhata. Curve tweak karna = keyframes ke darmiyan motion tweak.",
  },
  shortcuts: [
    { keys: "Tab (in Graph Editor)", meaning: { en: "Toggle between Graph Editor and Dope Sheet.", ur: "Graph Editor aur Dope Sheet ke darmiyan toggle." } },
    { keys: "T", meaning: { en: "Set keyframe interpolation type (Constant / Linear / Bezier).", ur: "Keyframe interpolation type set (Constant / Linear / Bezier)." } },
    { keys: "Shift + T", meaning: { en: "Easing type (Ease In / Out / In-Out / Bounce / Elastic / Back).", ur: "Easing type (Ease In / Out / In-Out / Bounce / Elastic / Back)." } },
    { keys: "V", meaning: { en: "Handle type (Free / Aligned / Vector / Auto / Auto Clamped).", ur: "Handle type (Free / Aligned / Vector / Auto / Auto Clamped)." } },
  ],
  whatItIs: [
    {
      en: "Every animated property (location, rotation, modifier value, etc.) becomes an **F-Curve**: a graph with frame number on the X axis and value on the Y axis. Keyframes are dots on this curve. The shape between dots is what you see in the animation.",
      ur: "Har animated property (location, rotation, modifier value, etc.) **F-Curve** banti: graph jis ke X axis par frame number, Y axis par value. Keyframes is curve par dots. Dots ke darmiyan curve ki shape animation mein dikhti.",
    },
    {
      en: "The Graph Editor lets you reshape that curve. Pull a handle to make motion ease in. Drop the curve flat between two keyframes for hold. Add overshoot for cartoony bounce. This is where animation goes from 'mechanical' to 'alive'.",
      ur: "Graph Editor curve reshape karne deta. Handle pull karke motion ease in. Do keyframes ke darmiyan curve flat = hold. Cartoony bounce ke liye overshoot. Yahin animation 'mechanical' se 'alive' banti.",
    },
  ],
  variants: {
    heading: { en: "Interpolation, easing, and handle types", ur: "Interpolation, easing, aur handle types" },
    items: [
      {
        name: "Bezier (default)",
        description: { en: "Smooth curve with handles you can pull. Most flexible.", ur: "Smooth curve handles ke saath jo pull kar sakte. Sab se flexible." },
      },
      {
        name: "Linear",
        description: { en: "Straight line between keyframes. Constant speed. Used for mechanical motion (gears, fans).", ur: "Keyframes ke darmiyan straight line. Constant speed. Mechanical motion (gears, fans) ke liye." },
      },
      {
        name: "Constant",
        description: { en: "Holds the value until the next keyframe, then jumps. Like blocks. Used for on/off states (lights flickering).", ur: "Value next keyframe tak hold, phir jump. Blocks. On/off states (lights flickering) ke liye." },
      },
      {
        name: "Easing: Ease In",
        description: { en: "Starts slow, ends fast. Object accelerating.", ur: "Slow start, fast end. Object accelerate." },
      },
      {
        name: "Easing: Ease Out",
        description: { en: "Starts fast, ends slow. Object decelerating to a stop.", ur: "Fast start, slow end. Object stop tak decelerate." },
      },
      {
        name: "Easing: Ease In-Out",
        description: { en: "Slow at both ends, fast in middle. Most natural human-feeling motion.", ur: "Dono ends par slow, beech mein fast. Sab se natural human-feeling motion." },
      },
      {
        name: "Easing: Bounce / Elastic / Back",
        description: { en: "Cartoony oscillating overshoots. Use sparingly; lovely for stylized intros, awful when overused.", ur: "Cartoony oscillating overshoots. Sparingly; stylized intros ke liye lovely, overuse par ganda." },
      },
      {
        name: "Handle: Auto Clamped",
        description: { en: "Default. Handles auto-adjust but won't overshoot the keyframe values. Prevents weird dips between identical values.", ur: "Default. Handles auto-adjust lekin keyframe values overshoot nahi. Identical values ke darmiyan weird dips prevent." },
      },
      {
        name: "Handle: Aligned",
        description: { en: "Left and right handles stay in a straight line. Smooth motion through the keyframe.", ur: "Left aur right handles straight line mein. Keyframe ke through smooth motion." },
      },
      {
        name: "Handle: Free",
        description: { en: "Each handle independent. Used for sharp direction changes.", ur: "Har handle independent. Sharp direction changes ke liye." },
      },
      {
        name: "Modifiers (in Graph Editor sidebar)",
        description: { en: "Add 'F-Modifier' on top of an F-Curve: Cycles (loop the animation), Noise (add wobble), Generator (add a math curve). Used to layer behaviors without manual keyframing.", ur: "F-Curve ke upar 'F-Modifier' add: Cycles (animation loop), Noise (wobble), Generator (math curve). Manual keyframing ke baghair behaviors layer." },
      },
    ],
  },
  recipe: {
    heading: { en: "Make a bouncing ball feel real", ur: "Bouncing ball ko real feel" },
    steps: [
      { step: { en: "Keyframe the ball's Z location: high at frame 1, ground at frame 15, high again at frame 30.", ur: "Ball ki Z location keyframe: frame 1 par high, frame 15 par ground, frame 30 par dobara high." } },
      { step: { en: "Open Graph Editor. Select all keyframes (`A`).", ur: "Graph Editor kholo. Saari keyframes select (`A`)." } },
      { step: { en: "Press `T` → Bezier (already default). Press `Shift+T` → Ease In-Out.", ur: "`T` → Bezier (default). `Shift+T` → Ease In-Out." } },
      { step: { en: "Click the bottom keyframe (frame 15). Set its handles to Vector so it makes a sharp 'V' at the bottom (real bounce, not a smooth dip).", ur: "Bottom keyframe (frame 15) click. Handles Vector taake bottom par sharp 'V' (real bounce, smooth dip nahi)." } },
      { step: { en: "Add an F-Modifier → Cycles to loop forever.", ur: "F-Modifier → Cycles forever loop." } },
    ],
  },
  pitfalls: [
    { en: "Animation overshoots between two identical keyframes: default Bezier 'Auto' handles add a curve. Switch to 'Auto Clamped' or 'Vector' handles.", ur: "Do identical keyframes ke darmiyan animation overshoot: default Bezier 'Auto' handles curve add. 'Auto Clamped' ya 'Vector' handles." },
    { en: "Graph Editor empty when an object is selected: that object has no keyframes yet. Or you're filtering by 'only visible'.", ur: "Object select lekin Graph Editor empty: us object par keyframes nahi. Ya 'only visible' filter on." },
    { en: "Motion looks robotic: usually default Linear or no easing. Apply Ease In-Out as a baseline.", ur: "Motion robotic lagti: aksar default Linear ya no easing. Baseline ke taur par Ease In-Out apply." },
  ],
  related: [
    { id: "keyframes", note: { en: "Graph Editor visualizes the curves between keyframes.", ur: "Graph Editor keyframes ke darmiyan curves visualize." } },
  ],
};
