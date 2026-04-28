import type { DeepConcept } from "@/lib/deep-types";

export const cursor3DConcept: DeepConcept = {
  id: "3d-cursor",
  group: "interface",
  title: { en: "The 3D Cursor", ur: "3D Cursor" },
  tagline: {
    en: "A floating crosshair Blender remembers in space. Where new things spawn, where pivots can sit, where snapping starts.",
    ur: "Scene mein ek floating crosshair jo Blender yaad rakhta hai. Nayi cheezein yahan spawn hoti hain, pivot yahan baith sakta hai, snapping yahan se shuru hoti hai.",
  },
  shortcuts: [
    {
      keys: "Shift + Right Click",
      meaning: {
        en: "Drop the cursor wherever you click in the viewport.",
        ur: "Cursor ko us point pe drop karo jahan tum viewport mein click karte ho.",
      },
    },
    {
      keys: "Shift + S",
      meaning: {
        en: "Open the Snap pie menu (cursor and selection snapping options).",
        ur: "Snap pie menu kholo (cursor aur selection snap karne ke options).",
      },
    },
    {
      keys: "Shift + C",
      meaning: {
        en: "Reset cursor to world origin (0, 0, 0) AND frame the scene to fit view.",
        ur: "Cursor ko world origin (0, 0, 0) pe reset karo AUR scene ko view mein fit kar do.",
      },
    },
    {
      keys: ".  (period)",
      meaning: {
        en: "Open the Pivot Point pie menu (where 3D Cursor is one option).",
        ur: "Pivot Point pie menu kholo (jis mein 3D Cursor ek option hai).",
      },
    },
  ],
  whatItIs: [
    {
      en: "The 3D cursor is a single global point in your scene. There's only one of them, and Blender remembers exactly where it is between sessions. You'll see it as a small red and white crosshair with a dashed circle around it. Most of the time it's sitting at world origin, but you can move it anywhere in 3D space.",
      ur: "3D cursor scene mein ek single global point hai. Sirf ek hi hota hai, aur Blender sessions ke darmiyan exactly yaad rakhta hai kahan tha. Choti red-white crosshair, around mein dashed circle. Aksar world origin pe baitha hota hai, lekin tum 3D space mein kahin bhi le ja sakte ho.",
    },
    {
      en: "It does three big jobs. First: when you add anything new (`Shift+A`), it spawns at the cursor's position. Second: it can be selected as the pivot point for rotations and scales. Third: it's a snap target, you can snap selections to it, or snap it to selections. Each of these unlocks a workflow you'd otherwise have to do by hand.",
      ur: "Iske teen bare kaam hain. Pehla: jab tum kuch naya add karte ho (`Shift+A`), woh cursor ki position pe spawn hota hai. Doosra: rotation aur scale ka pivot point ban sakta hai. Teesra: snap target hai. Tum selections ko cursor pe snap kar sakte ho, ya cursor ko selections pe. Inn teeno se workflow shortcuts khulte hain jo warna manually karne padein.",
    },
  ],
  whyItExists: [
    {
      en: "Picture this: you're modeling a building and you want to add a chimney exactly on top of one corner. Without the cursor you'd add a cube somewhere random, then drag it to the corner with imperfect precision. With the cursor you snap it to the corner first, then add the cube. It spawns *exactly* there. The cursor is essentially a 'where-do-I-want-this' marker that decouples picking a location from creating an object.",
      ur: "Imagine karo: tum building model kar rahe ho aur ek corner ke exactly upar chimney add karni hai. Cursor ke baghair tum cube random jagah add karoge, phir uss corner pe drag karoge, perfectly aligned nahi hoga. Cursor ke saath: pehle cursor corner pe snap karo, phir cube add karo. Exactly wahin spawn hoga. Cursor basically ek 'mujhe yahan chahiye' marker hai jo location pick karne ko object create karne se alag kar deta hai.",
    },
  ],
  howItWorks: [
    {
      en: "The cursor lives in *world space* by default, its position is stored as a 3D coordinate (X, Y, Z). You can switch its display rotation in the View tab of the N-panel, but for most work it just stays as a position. Crucially, the cursor is *not* attached to any object. If you delete every object in your scene, the cursor is still there, in the same spot.",
      ur: "Cursor default mein *world space* mein rehta hai. Iski position ek 3D coordinate (X, Y, Z) ke taur pe store hoti hai. N-panel ke View tab mein iski display rotation switch kar sakte ho lekin aam taur pe sirf position kaam aati hai. Important baat: cursor kisi bhi object se attached *nahi* hai. Agar tum saare objects delete kar do, cursor wahin ka wahin reh jayega.",
    },
  ],
  variants: {
    heading: {
      en: "The Snap menu (Shift+S), every option explained",
      ur: "Snap menu (Shift+S), har option ki tafseel",
    },
    items: [
      {
        name: "Cursor to World Origin",
        description: {
          en: "Sends the cursor straight back to (0, 0, 0). The 'reset' button.",
          ur: "Cursor ko seedha (0, 0, 0) pe wapas bhej deta hai. 'Reset' button.",
        },
        when: {
          en: "When you've moved the cursor around for a task and want a clean baseline before the next one.",
          ur: "Jab tum cursor ko kisi kaam ke liye move kar chuke ho aur agle kaam se pehle clean state chahiye.",
        },
      },
      {
        name: "Cursor to Selected",
        description: {
          en: "Snaps the cursor to the median point of whatever you have selected (object, vertex, edge, face, or multiple of them).",
          ur: "Cursor ko us cheez ke median point pe snap kar deta hai jo tumne select ki hui hai (object, vertex, edge, face, ya unka combination).",
        },
        when: {
          en: "Before adding something that needs to align with existing geometry. Pick a face's center, snap cursor there, then add a new plane: it spawns dead-center on that face.",
          ur: "Jab kuch nayi cheez add karni ho jo existing geometry ke saath align ho. Ek face ka center pakdo, cursor wahan snap karo, phir nayi plane add karo: woh exactly face ke beech mein spawn hogi.",
        },
      },
      {
        name: "Cursor to Active",
        description: {
          en: "Like 'Cursor to Selected', but uses only the *active* element (last clicked, highlighted brighter). Ignores the rest of your selection.",
          ur: "'Cursor to Selected' jaisa, lekin sirf *active* element use karta hai (last clicked, jo zyada highlighted hai). Baki selection ignore karta hai.",
        },
        when: {
          en: "When you have multiple things selected but want the cursor on a specific one. Click that one last so it becomes active, then use this option.",
          ur: "Jab tumne kai cheezein select ki hain lekin cursor ek specific pe chahiye. Use cheez ko sab se baad mein click karo (active ban jayegi), phir yeh option.",
        },
      },
      {
        name: "Cursor to Grid",
        description: {
          en: "Snaps the cursor to the nearest grid intersection. Distance depends on your current viewport zoom and grid scale.",
          ur: "Cursor ko sab se qareeb wale grid intersection pe snap karta hai. Distance current viewport zoom aur grid scale pe depend karti hai.",
        },
        when: {
          en: "When working on top-down architectural-style scenes where you want everything aligned to a grid.",
          ur: "Architecture-style top-down scenes mein, jab sab kuch grid pe aligned chahiye.",
        },
      },
      {
        name: "Selection to Cursor",
        description: {
          en: "Inverse direction. Whatever you have selected jumps to the cursor's location. Each selected object's origin lands on the cursor; multiple objects stack on top of each other.",
          ur: "Ulta direction. Jo cheez select hai woh cursor ki location pe jump karti hai. Har selected object ka origin cursor par aata hai; multiple objects ek doosre ke upar stack ho jate hain.",
        },
        when: {
          en: "When you've placed your cursor exactly where an object needs to be and want to relocate the object instantly.",
          ur: "Jab tumne cursor exactly us jagah rakhi hai jahan object chahiye, aur tum object instantly wahan le jana chahte ho.",
        },
      },
      {
        name: "Selection to Cursor (Keep Offset)",
        description: {
          en: "Same as above, but if multiple objects are selected, their relative positions are preserved. Only the *group center* lands on the cursor; objects stay arranged around it the same way.",
          ur: "Upar wala same, lekin agar multiple objects selected hain to unki relative positions preserve hoti hain. Sirf *group center* cursor pe aata hai; objects unhi positions mein around arranged rehte hain.",
        },
        when: {
          en: "Moving a whole arrangement (a chair group, a stack of books) without disturbing how the pieces sit relative to each other.",
          ur: "Ek poori arrangement (chairs ka group, books ka stack) ko move karna jab pieces ki relative positions disturb na ho.",
        },
      },
      {
        name: "Selection to Active",
        description: {
          en: "All selected objects jump to the active object's position. Useful for stacking duplicates onto an anchor object.",
          ur: "Saare selected objects active object ki position pe jump karte hain. Anchor object pe duplicates stack karne ke liye useful.",
        },
      },
      {
        name: "Selection to Grid",
        description: {
          en: "Snaps each selected object's origin to the nearest grid intersection.",
          ur: "Har selected object ka origin sab se qareeb grid intersection pe snap kar deta hai.",
        },
        when: {
          en: "Cleaning up sloppy placements when you started without grid snap on.",
          ur: "Jab tumne grid snap off rakh ke sloppy placements ki thi, unhe tidy karne ke liye.",
        },
      },
    ],
  },
  recipe: {
    heading: {
      en: "Common cursor moves you'll use weekly",
      ur: "Aam cursor moves jo har hafte istemal honge",
    },
    steps: [
      {
        step: {
          en: "**Place at a face center**: enter Edit Mode, switch to Face select (`3`), click a face, then `Shift+S` → 'Cursor to Selected'.",
          ur: "**Face ke center pe rakhna**: Edit Mode jao, Face select (`3`), face click karo, phir `Shift+S` → 'Cursor to Selected'.",
        },
      },
      {
        step: {
          en: "**Reset between tasks**: `Shift+S` → 'Cursor to World Origin'. Or hit `Shift+C` to reset cursor *and* re-frame the view.",
          ur: "**Tasks ke darmiyan reset**: `Shift+S` → 'Cursor to World Origin'. Ya `Shift+C` se cursor reset *aur* view re-frame ek saath.",
        },
      },
      {
        step: {
          en: "**Use as pivot**: open the Pivot Point dropdown in the header (or press `.` for the pie menu), pick '3D Cursor'. Now rotation and scale happen around the cursor.",
          ur: "**Pivot ki tarah use karna**: header mein Pivot Point dropdown kholo (ya `.` se pie menu), '3D Cursor' chuno. Ab rotation aur scale cursor ke around honge.",
        },
      },
      {
        step: {
          en: "**Drop it free-hand**: `Shift + Right Click` anywhere in the viewport. Cursor lands on the surface under your mouse (or in space if there's nothing under it).",
          ur: "**Free-hand drop**: viewport mein kahin `Shift + Right Click`. Cursor mouse ke neeche surface pe land karta hai (ya space mein agar neeche kuch nahi).",
        },
      },
    ],
  },
  pitfalls: [
    {
      en: "Forgetting to reset the pivot after using 3D Cursor as pivot. Next time you `R` or `S`, things rotate around an old cursor location and you wonder why everything moved sideways.",
      ur: "Pivot ko 3D Cursor par use karne ke baad reset karna bhulna. Agli baar `R` ya `S` karoge, cheezein purani cursor location ke around ghoomengi aur tum sochoge sab side mein kyun chala gaya.",
    },
    {
      en: "Adding objects with the cursor far from origin and then complaining 'why is my new cube floating in space?' Cursor position is the spawn position. Always.",
      ur: "Cursor origin se door rakh ke object add karna, phir shikayat: 'naya cube space mein kyun float kar raha?' Cursor ki position hi spawn position hai. Hamesha.",
    },
    {
      en: "Using `Shift+Right Click` to drop the cursor while in Edit Mode. It still works, but the snap behavior depends on what's under your mouse, sometimes you get a weird half-snap. Prefer `Shift+S` menu options for precision.",
      ur: "`Shift+Right Click` se Edit Mode mein cursor drop karna. Kaam to karta hai lekin snap behavior depend karta hai mouse ke neeche kya hai, kabhi weird half-snap hota hai. Precision ke liye `Shift+S` menu options behtar hain.",
    },
  ],
  realWorld: [
    {
      en: "Production teams treat the cursor like a sticky note: 'remember this point, I need to come back to it.' One artist might place it at the character's chest pivot and lock it there, doing all imports/transforms relative to it for hours. Treating the cursor as a deliberate tool (rather than something that just sits there) is one of those quiet markers of moving from beginner to intermediate.",
      ur: "Production teams cursor ko ek sticky note ki tarah treat karte hain: 'yeh point yaad rakho, mujhe wapas aana hai.' Ek artist character ke chest pivot pe rakh ke ghante kaam kar sakta hai, sab imports/transforms us pe relative. Cursor ko ek deliberate tool ke taur pe use karna (bina bina laye-rakhi cheez ke) beginner se intermediate ka ek quiet marker hai.",
    },
    {
      en: "If you've used Figma or Sketch, think of the cursor like the spawn point for new layers, except in 3D, you have to set that point yourself, and it persists across actions. Once you internalize it, you stop fighting Blender's 'why did this thing appear over there?' moments.",
      ur: "Agar tumne Figma ya Sketch use kiya hai, cursor ko nayi layers ke spawn point ki tarah samjho, sirf 3D mein woh point tum khud set karte ho aur woh actions ke darmiyan persist hota hai. Ek baar internalize kar lo, Blender ke 'yeh cheez wahan kyun spawn hui' moments band ho jate hain.",
    },
  ],
  related: [
    {
      id: "pivot-point",
      note: {
        en: "The cursor is one of six pivot point options. Worth knowing all of them.",
        ur: "Cursor pivot point ke 6 options mein se ek hai. Saare jaanna chahiye.",
      },
    },
    {
      id: "origin-point",
      note: {
        en: "Confused with the cursor by beginners. Origin belongs to an object; cursor is global.",
        ur: "Beginners ise origin ke saath confuse karte hain. Origin object ka hota hai; cursor global hai.",
      },
    },
    {
      id: "snap",
      note: {
        en: "Snap during transforms uses similar concepts (vertex/face/grid).",
        ur: "Transforms ke time snap bhi yahi concepts use karta hai (vertex/face/grid).",
      },
    },
  ],
  visual: {
    svg: `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D cursor at world origin and being relocated to a face center">
  <g fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round">
    <text x="20" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.5">at world origin</text>
    <line x1="40" y1="180" x2="200" y2="180" opacity="0.3"/>
    <line x1="40" y1="180" x2="40" y2="60" opacity="0.3"/>
    <g stroke="var(--accent, #1B4D3E)" stroke-width="1.4">
      <circle cx="40" cy="180" r="7"/>
      <line x1="33" y1="180" x2="47" y2="180"/>
      <line x1="40" y1="173" x2="40" y2="187"/>
    </g>
    <text x="50" y="172" font-family="ui-monospace, monospace" font-size="9" fill="var(--accent, #1B4D3E)" stroke="none">cursor</text>
    <rect x="80" y="100" width="100" height="60"/>
    <text x="80" y="190" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">cursor sits at (0,0,0); object is wherever</text>

    <text x="270" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.5">after Shift+S → Cursor to Selected</text>
    <rect x="280" y="80" width="160" height="100"/>
    <line x1="280" y1="180" x2="440" y2="180" stroke-dasharray="2 3" opacity="0.45"/>
    <g stroke="var(--accent, #1B4D3E)" stroke-width="1.4">
      <circle cx="360" cy="130" r="7"/>
      <line x1="353" y1="130" x2="367" y2="130"/>
      <line x1="360" y1="123" x2="360" y2="137"/>
    </g>
    <text x="370" y="125" font-family="ui-monospace, monospace" font-size="9" fill="var(--accent, #1B4D3E)" stroke="none">cursor on face center</text>
    <text x="280" y="200" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">next added object will spawn here</text>
  </g>
</svg>`,
    alt: {
      en: "3D cursor at world origin vs snapped to a face center",
      ur: "3D cursor world origin par vs face center par snapped",
    },
  },
};
