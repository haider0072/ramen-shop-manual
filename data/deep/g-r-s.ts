import type { DeepConcept } from "@/lib/deep-types";

export const grsConcept: DeepConcept = {
  id: "g-r-s",
  group: "transforms",
  title: { en: "G, R, S, Move, Rotate, Scale", ur: "G, R, S, Move, Rotate, Scale" },
  tagline: {
    en: "Three keys, three actions. Every Blender user types them thousands of times. Knowing the modifier chains turns them from buttons into a language.",
    ur: "Teen keys, teen actions. Har Blender user inhe hazaron baar press karta. Modifier chains samajhna inhe button se language banata.",
  },
  shortcuts: [
    { keys: "G", meaning: { en: "Grab (move) the selection.", ur: "Selection grab (move) karo." } },
    { keys: "R", meaning: { en: "Rotate the selection around the active pivot.", ur: "Selection ko active pivot ke around rotate." } },
    { keys: "S", meaning: { en: "Scale the selection from the active pivot.", ur: "Selection ko active pivot se scale." } },
    { keys: "Right-click during transform", meaning: { en: "Cancel the transform (selection snaps back).", ur: "Transform cancel (selection wapas)." } },
    { keys: "Click / Enter", meaning: { en: "Confirm the transform.", ur: "Transform confirm." } },
  ],
  whatItIs: [
    {
      en: "Press `G`, `R`, or `S` and you enter a modal transform mode. Move the mouse and the selection follows in 3D. Click or hit Enter to confirm; right-click or Escape to cancel. The same keys work in Object Mode and Edit Mode (with selection-aware behavior in Edit).",
      ur: "`G`, `R`, ya `S` press karo aur tum modal transform mode mein. Mouse move karo aur selection 3D mein follow. Click ya Enter se confirm; right-click ya Escape se cancel. Same keys Object Mode aur Edit Mode dono mein chalti hain (Edit mein selection-aware behavior).",
    },
    {
      en: "What makes them powerful is the chain of modifier keys you can press *during* the transform. `G X` locks to X axis. `G X 5 Enter` moves exactly 5 meters in X. `G Z Z` uses the local Z axis instead of world Z. `S Shift+Z 0.5` scales by 0.5 in X and Y but leaves Z alone. The keypresses compose into a tiny language.",
      ur: "Inhe powerful banata hai modifier keys ka chain jo tum transform ke *dauran* press kar sakte ho. `G X` X axis pe lock. `G X 5 Enter` exactly 5 meters X mein. `G Z Z` local Z axis use karta world Z ki bajaye. `S Shift+Z 0.5` X aur Y mein 0.5 scale, Z chhod deta. Keypresses ek choti language ban jate hain.",
    },
  ],
  variants: {
    heading: { en: "Modifier keys you can press during a transform", ur: "Transform ke dauran press hone wale modifier keys" },
    items: [
      {
        name: "X / Y / Z",
        description: { en: "Lock to a single axis. World axis by default.", ur: "Single axis pe lock. By default world axis." },
        when: { en: "Predictable, axis-aligned moves. Almost always.", ur: "Predictable, axis-aligned moves. Aksar." },
      },
      {
        name: "X X / Y Y / Z Z (double-tap)",
        description: { en: "Lock to *local* axis instead of world.", ur: "*Local* axis pe lock world ki bajaye." },
        when: { en: "When the object is rotated and 'Z' world doesn't match the object's natural up.", ur: "Jab object rotated hai aur 'Z' world object ka natural up nahi." },
      },
      {
        name: "Shift + X / Y / Z",
        description: { en: "*Exclude* an axis, move freely in the other two but lock this one.", ur: "Ek axis ko *exclude*, baki do mein freely move lekin yeh lock." },
        when: { en: "Sliding things on the ground (exclude Z = stays at same height).", ur: "Cheezein zameen pe slide (Z exclude = same height pe rahe)." },
      },
      {
        name: "Numeric input (during transform)",
        description: { en: "Type a number. The value is applied immediately. Press Enter to confirm.", ur: "Number type karo. Value immediately apply. Enter se confirm." },
        when: { en: "Precise transforms: `R Z 90 Enter`, `S 2 Enter`, `G X -3.5 Enter`.", ur: "Precise transforms: `R Z 90 Enter`, `S 2 Enter`, `G X -3.5 Enter`." },
      },
      {
        name: "Ctrl (held)",
        description: { en: "Snap to grid increments while moving, or 5° increments while rotating, or 0.1 increments while scaling.", ur: "Move karte time grid increments pe snap, rotate mein 5°, scale mein 0.1 increments." },
        when: { en: "Approximate but clean values without typing.", ur: "Approximate lekin clean values bina type kiye." },
      },
      {
        name: "Shift (held)",
        description: { en: "Slow precision mode. Each pixel of mouse movement equals a smaller delta.", ur: "Slow precision mode. Mouse ke har pixel ka smaller delta." },
        when: { en: "Final fine adjustments where regular drag is too coarse.", ur: "Final fine adjustments jab regular drag bohot coarse hai." },
      },
      {
        name: "Mouse-wheel during transform",
        description: { en: "Rare. Adjusts a tool-specific parameter mid-transform (e.g., proportional edit radius).", ur: "Rare. Tool-specific parameter mid-transform adjust (e.g., proportional edit radius)." },
      },
    ],
  },
  recipe: {
    heading: { en: "The transform 'sentences' you'll write daily", ur: "Roz likhne wali transform 'sentences'" },
    steps: [
      { step: { en: "**G Z 1 Enter**, move up 1 meter exactly.", ur: "**G Z 1 Enter** se exactly 1 meter upar move." } },
      { step: { en: "**R Z 90 Enter**, rotate 90° around world Z.", ur: "**R Z 90 Enter** se 90° world Z par rotate." } },
      { step: { en: "**S Shift Z 1.5 Enter**, scale X and Y by 1.5, leave Z alone.", ur: "**S Shift Z 1.5 Enter** X aur Y ko 1.5 scale, Z chhod do." } },
      { step: { en: "**G G** (in Edit Mode), slide selected edge along its loop without crossing topology. Different from regular G.", ur: "**G G** (Edit Mode mein) selected edge ko loop ke saath slide karo bina topology cross kiye. Regular G se different." } },
      { step: { en: "**R R**, trackball rotate (free 3D rotation, no axis lock).", ur: "**R R** trackball rotate (free 3D rotation, koi axis lock nahi)." } },
    ],
  },
  pitfalls: [
    { en: "Forgetting that pivot point matters for R and S but not G. Confused beginners think 'why did my object jump', it didn't, it just rotated around an unexpected pivot.", ur: "Bhulna ke pivot point R aur S ke liye matter karta lekin G ke liye nahi. Confused beginners sochte 'mera object kyun jump kiya', kiya nahi, bas unexpected pivot ke around rotate hua." },
    { en: "Numeric input expects unit *meters by default*. Typing `G Z 100` moves up 100 meters, which probably blasts your object out of view. Use small values or zoom out to verify.", ur: "Numeric input default mein *meters* expect karta. `G Z 100` type karna 100 meters upar, jo aksar object ko view se baahar fenk deta. Choti values use karo ya zoom out karke verify." },
    { en: "Mistakenly pressing `G` then mouse-clicking before moving anywhere. The transform 'completes' with zero offset, looks like nothing happened but you've burned an undo step.", ur: "Galti se `G` press karna phir mouse-click bina kahin move kiye. Transform zero offset se 'complete', lagta kuch nahi hua lekin ek undo step burn ho gaya." },
  ],
  related: [
    { id: "axis-lock-exclude", note: { en: "Detailed coverage of axis modifier keys.", ur: "Axis modifier keys ka detailed coverage." } },
    { id: "pivot-point", note: { en: "What R and S rotate/scale around.", ur: "R aur S kis ke around rotate/scale karte." } },
    { id: "snap", note: { en: "Hold Ctrl during transforms for snap behavior.", ur: "Transforms ke time Ctrl hold se snap behavior." } },
  ],
};
