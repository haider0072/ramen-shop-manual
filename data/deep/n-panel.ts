import type { DeepConcept } from "@/lib/deep-types";

export const nPanelConcept: DeepConcept = {
  id: "n-panel",
  group: "interface",
  title: { en: "The N-Panel", ur: "N-Panel" },
  tagline: {
    en: "A side drawer that shows numerical info about whatever you're touching: location, rotation, scale, dimensions, view settings, more.",
    ur: "Ek side drawer jo dikhata hai numerical info jo bhi tum touch kar rahe ho: location, rotation, scale, dimensions, view settings, aur zyada.",
  },
  shortcuts: [
    { keys: "N", meaning: { en: "Toggle the N-panel in the active viewport (or any editor that supports it).", ur: "Active viewport mein N-panel toggle (ya jo editor support kare)." } },
  ],
  whatItIs: [
    {
      en: "Press `N` and a vertical panel slides out from the right of the 3D viewport. It has tabs along its right edge, 'Item', 'Tool', 'View', and any add-on tabs you've installed. Each tab shows information relevant to its name.",
      ur: "`N` press karo aur 3D viewport ke right se ek vertical panel slide out hota. Iski tabs right edge par hain, 'Item', 'Tool', 'View', aur jo bhi add-on tabs install hain. Har tab apne naam se related info dikhati.",
    },
    {
      en: "The Item tab is the most-used. With one object selected, it shows that object's location (X, Y, Z), rotation, scale, and dimensions. Click into a field to type exact values; useful for precise placement instead of dragging.",
      ur: "Item tab sab se zyada use hoti. Ek object selected ho to woh dikhati uski location (X, Y, Z), rotation, scale, aur dimensions. Field mein click karke exact values type kar sakte ho; precise placement ke liye useful, drag ki bajaye.",
    },
  ],
  whyItExists: [
    {
      en: "Modeling by feel works for most things, but sometimes you need precision: 'this wall must be 3 meters tall', 'this rotation should be exactly 45°'. The viewport's drag handles can't be that precise. The N-panel gives you a typeable text box for every transform value.",
      ur: "Feel se modeling aksar kaam karti, lekin kabhi precision chahiye: 'yeh wall 3 meters tall ho', 'yeh rotation exactly 45° ho'. Viewport ke drag handles itne precise nahi. N-panel har transform value ke liye typeable text box deti.",
    },
  ],
  variants: {
    heading: { en: "Tabs and what's in them", ur: "Tabs aur unme kya hai" },
    items: [
      {
        name: "Item",
        description: { en: "Selected object's location/rotation/scale/dimensions. In Edit Mode, shows selected vertex/edge/face coordinates.", ur: "Selected object ki location/rotation/scale/dimensions. Edit Mode mein selected vertex/edge/face coordinates dikhati." },
        when: { en: "Always. The fastest precision-input surface in Blender.", ur: "Hamesha. Blender mein sab se fast precision-input surface." },
      },
      {
        name: "Tool",
        description: { en: "Settings for whatever active tool is selected (transform tool, brush, etc.). Different tools show different options here.", ur: "Active tool ki settings (transform tool, brush, etc.). Alag tools alag options dikhate." },
        when: { en: "When you want to tweak the active tool's parameters without leaving the viewport.", ur: "Jab tum active tool ke parameters tweak karna chahte ho viewport chhode baghair." },
      },
      {
        name: "View",
        description: { en: "Camera settings, viewport rotation/grid, focal length, clipping. Also where you'd configure render border.", ur: "Camera settings, viewport rotation/grid, focal length, clipping. Render border bhi yahin configure hota." },
        when: { en: "Setting up the camera shot, adjusting viewport feel.", ur: "Camera shot setup, viewport feel adjust." },
      },
    ],
  },
  pitfalls: [
    { en: "Confusing N (toggle side panel) with `T` (toggle the toolbar on the *left*). Two different panels, two shortcuts.", ur: "N (side panel toggle) ko `T` (left ki toolbar toggle) se confuse karna. Do alag panels, do shortcuts." },
    { en: "Forgetting that scale is a transform value, not a 'real' dimension. If scale is 2 and the cube looks 4m wide, applying scale (Ctrl+A) bakes the dimension into mesh and resets scale to 1.", ur: "Bhulna ke scale ek transform value hai, 'real' dimension nahi. Agar scale 2 hai aur cube 4m wide dikhta, scale apply (Ctrl+A) dimension ko mesh mein bake karta aur scale 1 kar deta." },
  ],
  related: [
    { id: "apply-scale", note: { en: "N-panel exposes the scale value Apply Transform fixes.", ur: "N-panel woh scale value dikhata jo Apply Transform fix karta." } },
    { id: "g-r-s", note: { en: "Move/rotate/scale interact with N-panel values live.", ur: "Move/rotate/scale N-panel values ke saath live interact karte." } },
  ],
};
