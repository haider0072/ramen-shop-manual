import type { DeepConcept } from "@/lib/deep-types";

export const outlinerConcept: DeepConcept = {
  id: "outliner",
  group: "interface",
  title: { en: "The Outliner", ur: "Outliner" },
  tagline: {
    en: "The hierarchical list of every object, mesh, material, and collection in your scene. Like a file explorer for your Blender file.",
    ur: "Tumhari scene ke har object, mesh, material, aur collection ki hierarchical list. Blender file ka file explorer jaisa.",
  },
  whatItIs: [
    {
      en: "The Outliner is usually in the top-right of the default Blender layout. It's a tree view: every object you've created appears here with a small icon (orange cube for meshes, light for lights, camera for cameras). Click an item to select it; double-click to rename.",
      ur: "Outliner default Blender layout ke top-right mein hota. Yeh tree view hai: har object jo tumne banaya hai yahan icon ke saath (mesh ke liye orange cube, light ke liye light, camera ke liye camera). Item click se select; double-click se rename.",
    },
    {
      en: "Expand any object's tree (small triangle next to its name) to reveal what's inside: its mesh data, its modifiers, its materials, its constraints. This is where the 'object holds a reference to mesh' relationship becomes visible.",
      ur: "Kisi bhi object ka tree expand karo (uske naam ke saath choti triangle) to dikhao kya andar hai: mesh data, modifiers, materials, constraints. Yahin se 'object mesh ka reference rakhta' wala relationship visible hota.",
    },
  ],
  whyItExists: [
    {
      en: "Once a scene has 30+ objects, finding things in the viewport gets hard. The Outliner is a fast text-driven way to locate, select, hide, and organize. It's also the only place where you can see (and edit) parent-child relationships, collection memberships, and visibility states.",
      ur: "Ek baar scene mein 30+ objects ho jayein, viewport mein cheezein dhoondna mushkil ho jata. Outliner fast text-driven tareeqa hai locate, select, hide, organize karne ka. Yeh aksar wahi jagah hai jahan parent-child relationships, collection memberships, aur visibility states dekhe (aur edit kiye) ja sakte hain.",
    },
  ],
  variants: {
    heading: { en: "Outliner controls and toggles", ur: "Outliner controls aur toggles" },
    items: [
      {
        name: "Eye icon",
        description: { en: "Toggles viewport visibility. Hidden objects don't show in the 3D view but still exist.", ur: "Viewport visibility toggle. Hidden objects 3D view mein nahi dikhte lekin exist karte." },
      },
      {
        name: "Camera icon (next to eye)",
        description: { en: "Toggles render visibility. Useful for hiding things from the final render while keeping them visible while working.", ur: "Render visibility toggle. Final render se cheezein hide karne ke liye useful jab working ke time visible chahiye." },
      },
      {
        name: "Selection arrow icon",
        description: { en: "Toggles whether the object can be selected in the viewport. Useful for 'protecting' background props while you work on the foreground.", ur: "Toggle karta ke object viewport mein select ho sakta. 'Protect' karne ke liye useful jab tum foreground par kaam kar rahe ho." },
      },
      {
        name: "Filter icon (top of outliner)",
        description: { en: "Configure what types appear in the tree. Hide modifiers, hide constraints, show only meshes, etc.", ur: "Configure karo tree mein konsi types aati hain. Modifiers hide, constraints hide, sirf meshes show, etc." },
      },
      {
        name: "Drag-and-drop",
        description: { en: "Drag an object onto another to parent it (`Shift` while dragging). Drag onto a collection to move it there.", ur: "Ek object ko doosre par drag se parent karo (`Shift` drag ke saath). Collection par drag karke wahan move." },
      },
      {
        name: "Right-click menu",
        description: { en: "Bulk operations: delete, hierarchy, duplicate, link, unlink, etc.", ur: "Bulk operations: delete, hierarchy, duplicate, link, unlink, etc." },
      },
    ],
  },
  pitfalls: [
    { en: "Hidden objects stay in the file. If you forgot you hid 50 cubes, they're still loaded and consuming memory. Use Outliner search to find hidden things.", ur: "Hidden objects file mein rehte. Agar tum bhul gaye tumne 50 cubes hide kiye, woh still loaded aur memory consume kar rahe. Outliner search se hidden cheezein dhoondo." },
    { en: "Selecting an object in the Outliner doesn't always select it in the viewport unless you click the *name*. Click the icon and you might just expand its tree.", ur: "Outliner mein object select aksar viewport mein bhi select nahi karta unless tum *name* click karo. Icon click se sirf tree expand ho sakta hai." },
  ],
  realWorld: [
    { en: "Pros use Outliner search constantly: type 'chair' and only chair-related items appear. Combined with collection-based organization, even scenes with thousands of objects stay navigable.", ur: "Pros constantly Outliner search use karte: 'chair' type karo aur sirf chair-related items appear. Collection-based organization ke saath, hazaron objects wali scenes bhi navigable rehti." },
  ],
  related: [
    { id: "mesh-vs-object", note: { en: "Outliner makes the object/mesh distinction visible.", ur: "Outliner object/mesh distinction ko visible banata." } },
  ],
};
