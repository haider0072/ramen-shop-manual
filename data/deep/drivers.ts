import type { DeepConcept } from "@/lib/deep-types";

export const driversConcept: DeepConcept = {
  id: "drivers",
  group: "animation",
  title: { en: "Drivers", ur: "Drivers" },
  tagline: {
    en: "Make one property automatically follow another. The 'if-then' wiring of Blender. No keyframes needed.",
    ur: "Aik property doosri ko automatically follow karwao. Blender ki 'if-then' wiring. Keyframes ki zaroorat nahi.",
  },
  whatItIs: [
    {
      en: "A driver replaces a property's value with a Python-style expression. 'Set this object's Z scale to (other object's X location * 2)'. The property updates live as its source changes. No keyframes, no animation, just live linkage.",
      ur: "Driver property ki value ko Python-style expression se replace karta. 'Is object ka Z scale = (doosre object ka X location * 2)'. Source change par property live update. No keyframes, no animation, sirf live linkage.",
    },
    {
      en: "Created by right-clicking any property → Add Driver. Then click 'Edit Driver' (or open Drivers Editor) to set up the variable and expression.",
      ur: "Property par right-click → Add Driver. Phir 'Edit Driver' click (ya Drivers Editor kholo) variable aur expression set karne ke liye.",
    },
  ],
  variants: {
    heading: { en: "Driver components", ur: "Driver components" },
    items: [
      {
        name: "Variable (input)",
        description: { en: "Source data: another property, a transform channel, distance between two objects, rotation difference. You can have multiple variables in one driver.", ur: "Source data: doosri property, transform channel, do objects ka distance, rotation difference. Aik driver mein multiple variables." },
      },
      {
        name: "Variable type, Single Property",
        description: { en: "Read any single property (any value in the UI). Pick the data path with the eyedropper.", ur: "Koi single property padho (UI ki koi value). Eyedropper se data path pick." },
      },
      {
        name: "Variable type, Transform Channel",
        description: { en: "Read an object's location/rotation/scale. Common for shape-key sliders driven by bone rotation.", ur: "Object ki location/rotation/scale padho. Bone rotation se shape-key sliders ke liye common." },
      },
      {
        name: "Variable type, Rotational Difference",
        description: { en: "The angle between two bones or objects. Used in rigs to detect when an arm bends past a threshold.", ur: "Do bones ya objects ke darmiyan angle. Rigs mein detect karne ke liye jab arm threshold past bend." },
      },
      {
        name: "Variable type, Distance",
        description: { en: "Distance between two objects/bones. Used for stretch effects (bone scaled by distance to target).", ur: "Do objects/bones ka distance. Stretch effects ke liye (target ke distance se bone scaled)." },
      },
      {
        name: "Driver type, Averaged Value",
        description: { en: "Output is the average of all variables. Simple combiner.", ur: "Output saare variables ka average. Simple combiner." },
      },
      {
        name: "Driver type, Scripted Expression",
        description: { en: "Type a Python expression using variable names. `var * 2`, `sin(var)`, `var if var > 0.5 else 0`. The most powerful mode.", ur: "Variable names use karke Python expression type. `var * 2`, `sin(var)`, `var if var > 0.5 else 0`. Sab se powerful mode." },
      },
      {
        name: "Drivers Editor",
        description: { en: "Like Graph Editor but for drivers. Shows the curve mapping input variable to output. Edit handles to make non-linear relationships.", ur: "Graph Editor jaisa lekin drivers ke liye. Input variable se output ka curve. Handles edit karke non-linear relationships." },
      },
    ],
  },
  recipe: {
    heading: { en: "Door opens when character approaches", ur: "Character approach par door open" },
    steps: [
      { step: { en: "On the door, right-click on Y rotation → Add Driver.", ur: "Door par Y rotation par right-click → Add Driver." } },
      { step: { en: "Open Drivers Editor (Window → New Window or split a panel and switch type).", ur: "Drivers Editor kholo (Window → New Window ya panel split + type switch)." } },
      { step: { en: "Variable type: Distance. Object 1: door. Object 2: character.", ur: "Variable type: Distance. Object 1: door. Object 2: character." } },
      { step: { en: "Expression: `max(0, 2 - var) * 1.5` (open more as character gets closer than 2m).", ur: "Expression: `max(0, 2 - var) * 1.5` (character 2m se zyada qareeb hone par zyada open)." } },
      { step: { en: "Move the character. Door opens automatically based on distance. No keyframes needed.", ur: "Character move. Door distance par automatically open. Keyframes nahi." } },
    ],
  },
  pitfalls: [
    { en: "Driver loops back to itself (A drives B, B drives A): Blender shows yellow warning, value is undefined. Break the cycle.", ur: "Driver apne aap par loop (A drives B, B drives A): Blender yellow warning, value undefined. Cycle break." },
    { en: "Auto Run Python Scripts disabled: scripted expressions silently fail. Enable in Preferences → Save & Load.", ur: "Auto Run Python Scripts disabled: scripted expressions silent fail. Preferences → Save & Load mein enable." },
    { en: "Driven property has both keyframes and a driver: keyframes win in conflicts. Remove keyframes or remove driver.", ur: "Driven property par dono keyframes aur driver: conflicts mein keyframes jeetein. Keyframes ya driver remove." },
  ],
  related: [
    { id: "keyframes", note: { en: "Drivers are an alternative to keyframes for procedural motion.", ur: "Drivers procedural motion ke liye keyframes ka alternative." } },
  ],
};
