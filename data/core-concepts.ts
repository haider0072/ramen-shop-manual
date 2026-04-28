import type { CoreConcept } from "@/lib/core-types";

// SVG diagrams for the most-needed visuals
const svgNormals = `
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Face normals pointing outward vs flipped inward">
  <g fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round">
    <text x="20" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.5">correct</text>
    <polygon points="60,140 130,80 200,140 130,180" stroke="currentColor"/>
    <line x1="130" y1="125" x2="130" y2="60" stroke="var(--accent, #1B4D3E)" stroke-width="1.5"/>
    <polyline points="125,68 130,58 135,68" stroke="var(--accent, #1B4D3E)" stroke-width="1.5"/>
    <text x="60" y="195" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">normal points outward</text>

    <text x="260" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.5">flipped (red in viewport)</text>
    <polygon points="290,140 360,80 430,140 360,180" stroke="currentColor"/>
    <line x1="360" y1="120" x2="360" y2="160" stroke="var(--accent, #1B4D3E)" stroke-width="1.5"/>
    <polyline points="355,153 360,162 365,153" stroke="var(--accent, #1B4D3E)" stroke-width="1.5"/>
    <text x="290" y="195" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">normal points into the mesh</text>
  </g>
</svg>
`;

const svgPivot = `
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pivot point determines what point an action rotates or scales around">
  <g fill="none" stroke="currentColor" stroke-width="1">
    <text x="20" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.5">pivot: origin</text>
    <rect x="40" y="60" width="120" height="100" stroke-dasharray="3 3" opacity="0.4"/>
    <rect x="50" y="80" width="100" height="80" transform="rotate(-15 100 130)"/>
    <circle cx="100" cy="160" r="3" fill="var(--accent, #1B4D3E)" stroke="none"/>
    <text x="105" y="155" font-family="ui-monospace, monospace" font-size="9" fill="var(--accent, #1B4D3E)" stroke="none">origin</text>

    <text x="240" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.5">pivot: 3D cursor</text>
    <rect x="260" y="60" width="120" height="100" stroke-dasharray="3 3" opacity="0.4"/>
    <rect x="270" y="80" width="100" height="80" transform="rotate(-15 410 70)"/>
    <g stroke="var(--accent, #1B4D3E)" stroke-width="1.2">
      <circle cx="410" cy="70" r="6"/>
      <line x1="404" y1="70" x2="416" y2="70"/>
      <line x1="410" y1="64" x2="410" y2="76"/>
    </g>
    <text x="395" y="58" font-family="ui-monospace, monospace" font-size="9" fill="var(--accent, #1B4D3E)" stroke="none">3D cursor</text>
  </g>
</svg>
`;

const svgModifierStack = `
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Modifier stack flows top to bottom">
  <g fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round">
    <rect x="60" y="30" width="160" height="30" rx="2"/>
    <text x="140" y="50" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="currentColor" stroke="none">Mesh data</text>
    <line x1="140" y1="62" x2="140" y2="78" stroke="var(--accent, #1B4D3E)"/>
    <polyline points="135,72 140,80 145,72" stroke="var(--accent, #1B4D3E)"/>
    <rect x="60" y="80" width="160" height="30" rx="2" stroke="var(--accent, #1B4D3E)"/>
    <text x="140" y="100" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="var(--accent, #1B4D3E)" stroke="none">Bevel</text>
    <line x1="140" y1="112" x2="140" y2="128" stroke="var(--accent, #1B4D3E)"/>
    <polyline points="135,122 140,130 145,122" stroke="var(--accent, #1B4D3E)"/>
    <rect x="60" y="130" width="160" height="30" rx="2" stroke="var(--accent, #1B4D3E)"/>
    <text x="140" y="150" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="var(--accent, #1B4D3E)" stroke="none">Subdivision</text>
    <line x1="220" y1="145" x2="270" y2="145" stroke="currentColor" opacity="0.6"/>
    <polyline points="265,141 273,145 265,149" stroke="currentColor" opacity="0.6"/>
    <rect x="280" y="125" width="160" height="40" rx="2"/>
    <text x="360" y="150" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="currentColor" stroke="none">final visible result</text>
    <text x="60" y="190" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">order matters: bevel before subdiv ≠ subdiv before bevel</text>
  </g>
</svg>
`;

const svgMeshData = `
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Object holds a reference to mesh data; multiple objects can share one mesh">
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="170" y="20" width="120" height="40" rx="3"/>
    <text x="230" y="38" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="currentColor" stroke="none">Mesh: chair_mesh</text>
    <text x="230" y="52" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">vertices, edges, faces</text>
    <line x1="230" y1="62" x2="100" y2="100" stroke="var(--accent, #1B4D3E)"/>
    <line x1="230" y1="62" x2="230" y2="100" stroke="var(--accent, #1B4D3E)"/>
    <line x1="230" y1="62" x2="360" y2="100" stroke="var(--accent, #1B4D3E)"/>
    <rect x="40" y="100" width="120" height="60" rx="3"/>
    <text x="100" y="125" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="currentColor" stroke="none">Object</text>
    <text x="100" y="142" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">Chair.001 · loc/rot/scale</text>
    <rect x="170" y="100" width="120" height="60" rx="3"/>
    <text x="230" y="125" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="currentColor" stroke="none">Object</text>
    <text x="230" y="142" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">Chair.002 · loc/rot/scale</text>
    <rect x="300" y="100" width="120" height="60" rx="3"/>
    <text x="360" y="125" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" fill="currentColor" stroke="none">Object</text>
    <text x="360" y="142" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">Chair.003 · loc/rot/scale</text>
    <text x="40" y="190" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">alt+D banata hai is structure ko: 3 objects, 1 shared mesh.</text>
  </g>
</svg>
`;

const svgOriginVsCursor = `
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Origin point vs 3D cursor vs origin belongs to an object, cursor is global">
  <g fill="none" stroke="currentColor" stroke-width="1">
    <text x="20" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.5">origin (per object)</text>
    <rect x="40" y="60" width="100" height="80"/>
    <circle cx="90" cy="100" r="3.5" fill="var(--accent, #1B4D3E)" stroke="none"/>
    <text x="98" y="103" font-family="ui-monospace, monospace" font-size="9" fill="var(--accent, #1B4D3E)" stroke="none">object's origin</text>
    <text x="40" y="160" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">moves with the object</text>

    <text x="240" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.5">3D cursor (scene-wide)</text>
    <rect x="260" y="60" width="60" height="60"/>
    <rect x="340" y="80" width="60" height="60"/>
    <g stroke="var(--accent, #1B4D3E)" stroke-width="1.2">
      <circle cx="330" cy="100" r="6"/>
      <line x1="324" y1="100" x2="336" y2="100"/>
      <line x1="330" y1="94" x2="330" y2="106"/>
    </g>
    <text x="260" y="160" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">free in space, used to place new objects</text>
  </g>
</svg>
`;

export const coreConcepts: CoreConcept[] = [
  // ─────────────────────────── INTERFACE & MODES
  {
    id: "object-vs-edit-mode",
    title: "Object Mode vs Edit Mode",
    tagline: "Object move karna alag hai, mesh ki shape change karna alag.",
    group: "interface",
    shortcuts: [
      { keys: "Tab", meaning: "Object Mode aur Edit Mode ke beech toggle" },
    ],
    body: [
      "Blender mein har scene ka mesh do levels pe rehta hai. **Object level** matlab woh container jiska location, rotation, aur scale hai. Aap is level pe object ko jagah se jagah le ja sakte ho, lekin uski actual shape touch nahi karte. **Edit level** matlab us object ka mesh data, vertices/edges/faces. Yahan tum shape khud badalte ho.",
      "`Tab` press karke beech mein switch hota hai. Tutorial mein bohut jagah dekhoge: cube add hua (object mode), `Tab` press karke edit mode mein gaya, geometry move ki, `Tab` se wapas. Yeh switching muscle memory ban jati hai.",
      "Important: object mode mein move karoge to **origin saath chalega**. Edit mode mein geometry move karoge to **origin apni jagah par reh jayega**, sirf mesh shift hoga. Yeh distinction origin trick ke time critical hota hai.",
    ],
    pitfalls: [
      "Edit mode mein hote hue agar tum doosra object click karoge, hota kuch nahi. Pehle `Tab` se nikalna parta hai.",
      "`X` aur `Delete` ka behavior dono modes mein alag hai. Object mode mein poora object delete hota hai, edit mode mein selected vertices/edges/faces.",
    ],
  },
  {
    id: "selection-modes",
    title: "Vertex / Edge / Face select modes",
    tagline: "Edit mode ke andar teen levels pe selection hoti hai.",
    group: "interface",
    shortcuts: [
      { keys: "1", meaning: "Vertex select mode" },
      { keys: "2", meaning: "Edge select mode" },
      { keys: "3", meaning: "Face select mode" },
    ],
    body: [
      "Edit mode mein top-left mein teen icons hote hain: dot (vertex), line (edge), triangle (face). Keyboard shortcuts `1`, `2`, `3`.",
      "Same operation ka result mode ke hisaab se alag hota hai. `E` extrude vertex pe alag hai (single edge nikalti hai), edge pe alag (face nikalti hai), face pe alag (volume nikalta hai). Yeh tutorial mein bohut dafa use hoga.",
      "Bevel bhi mode-aware hai. Edge mode mein `Ctrl+B` edges ko round karta hai. Vertex mode mein `Ctrl+Shift+B` vertex ko round karta hai. Galat mode mein press karoge to result waise nahi aayega.",
    ],
  },
  {
    id: "3d-cursor",
    title: "3D Cursor",
    tagline: "Scene mein ek floating crosshair jiska kaam jagah yaad rakhna hai.",
    group: "interface",
    shortcuts: [
      { keys: "Shift+Right Click", meaning: "Cursor ko us point pe rakho jahan click kiya" },
      { keys: "Shift+S", meaning: "Snap menu (cursor to selected, selected to cursor, etc.)" },
      { keys: "Shift+S → Cursor to World Origin", meaning: "Cursor wapas (0,0,0) pe" },
    ],
    visual: { svg: svgOriginVsCursor, alt: "Origin vs 3D cursor" },
    body: [
      "3D cursor scene-wide ek single position hai jo Blender yaad rakhta hai. Aam taur pe nayi cheez add karte waqt (`Shift+A`), cheez wahin banti hai jahan cursor hai.",
      "Tutorial mein cursor ko jagah-jagah snap karte hain: kabhi face ke center pe (`Shift+S → Cursor to Selected`), kabhi world origin pe (`Shift+S → Cursor to World Origin`). Reason: jab cursor sahi jagah ho, to nayi added object bhi sahi jagah aa jati hai. Manually move karne se zyada accurate.",
      "Cursor ko **pivot point** ke taur pe bhi use kiya jaata hai. Jab tum 3D cursor ko pivot select karte ho, rotate aur scale us cursor ke around hota hai, object ke origin ke around nahi.",
    ],
  },
  {
    id: "n-panel",
    title: "N-Panel (Side Panel)",
    tagline: "Selected cheez ka location, rotation, scale, aur dimensions ek nazar mein.",
    group: "interface",
    shortcuts: [{ keys: "N", meaning: "Side panel toggle in 3D viewport" }],
    body: [
      "3D viewport mein `N` press karne se right side ek panel khulta hai jo current selection ki numerical info dikhata hai: location, rotation, scale, aur (object mode mein) dimensions.",
      "Tutorial mein scale check karne ke liye yeh panel kholte hain. Agar object ka scale 2 ya 3 dikh raha hai, matlab `Ctrl+A` Apply Scale karna hai pehle modifiers add karne se.",
      "Same panel mein 'Item', 'Tool', aur 'View' tabs hote hain. Alag-alag editors mein iska content alag hota hai.",
    ],
  },
  {
    id: "local-view",
    title: "Local View",
    tagline: "Aik object pe focus, baki sab temporarily hide.",
    group: "interface",
    shortcuts: [{ keys: "/ (numpad)", meaning: "Local view toggle on selection" }],
    body: [
      "Numpad ka `/` selected object ya geometry ko isolate kar deta hai. Baki scene viewport se gayab ho jata hai. Same shortcut dobara press karne par sab wapas aa jata hai.",
      "Tutorial mein bevel modifier ke arc miter setting verify karne ke liye local view mein corner zoom karte hain. Distraction kam, focus zyada.",
      "Yeh sirf viewport ka behavior hai. Render karoge to baki scene render bhi hogi (local view affect nahi karta).",
    ],
  },
  {
    id: "x-ray",
    title: "X-Ray View",
    tagline: "Mesh ke andar ke vertices bhi select honge, peeche ka sab dikhega.",
    group: "interface",
    shortcuts: [{ keys: "Alt+Z", meaning: "X-Ray toggle" }],
    body: [
      "Default mein selection sirf samne wali geometry pakadta hai. X-ray on karoge to box-select se peeche ka mesh bhi pakda jayega. Modeling ke time bohut zaroori, especially top vertices select karne ke liye proportional editing ya bulk-move ke liye.",
      "Tutorial mein noodles aur egg banane ke time X-ray on rakhte hain taakay vertices visible rahein top view mein.",
    ],
  },

  // ─────────────────────────── GEOMETRY
  {
    id: "vertex-edge-face",
    title: "Vertex, Edge, Face",
    tagline: "Mesh ke teen primitive elements.",
    group: "geometry",
    body: [
      "Mesh teen cheezon se banta hai. **Vertex** ek point hai (3D space mein ek coordinate). **Edge** do vertices ko jodne wali line hai. **Face** teen ya zyada edges ka closed loop hai jiske beech mein surface render hoti hai.",
      "Default cube ke 8 vertices, 12 edges, aur 6 faces hote hain. Har modeling operation in teeno mein se kuch karta hai: vertices add karna, edges split karna, faces extrude karna, etc.",
      "Faces 4 vertices wale 'quads' best hote hain. 3 vertices wala triangle bhi chalta hai, 5+ vertices wala 'n-gon' subdivision aur shading ke saath problem deta hai. Tutorial mostly quads pe rehta hai.",
    ],
  },
  {
    id: "loop",
    title: "Loop & Loop Selection",
    tagline: "Edges ya faces ki connected ring jo poori shape ke around chalti hai.",
    group: "geometry",
    shortcuts: [
      { keys: "Alt+Click on edge", meaning: "Edge loop select" },
      { keys: "Alt+Click on face", meaning: "Face loop select" },
      { keys: "Ctrl+Alt+Click on edge", meaning: "Edge ring (parallel edges)" },
    ],
    body: [
      "Loop matlab ek continuous ring of edges jo geometry ke around chalti hai. For example, ek cylinder ke top par jo circle of edges hai woh ek loop hai.",
      "`Alt+Click` powerful hai: bina manually har edge select kiye, poori loop ek click mein aa jati hai. Tutorial mein har baar bevel ya scale ke pehle yahi use hota hai.",
      "Loop ke ulta hota hai 'ring'. Loop topology ke saath jati hai (ek face ke around). Ring perpendicular jati hai (parallel edges). Ring select karne ke liye `Ctrl+Alt+Click`.",
    ],
  },
  {
    id: "mesh-vs-object",
    title: "Mesh data vs Object",
    tagline: "Object container hai, mesh uske andar ka data. Yeh distinction important hai.",
    group: "geometry",
    visual: { svg: svgMeshData, alt: "Object holds mesh data; multiple objects can share one mesh" },
    body: [
      "Blender mein har 'cheez' jo tum scene mein add karte ho, woh ek **object** hai. Object ka apna location, rotation, aur scale hota hai. Lekin object khud mesh nahi hota, woh sirf ek **reference** hold karta hai mesh data ka.",
      "Iska practical fayda yeh hai: ek mesh ko multiple objects share kar sakte hain. `Alt+D` (linked duplicate) yahi karta hai, naya object banata hai with same shared mesh. Mesh edit karoge to dono objects update.",
      "Outliner mein expand karoge to dekhoge: object ke andar ek 'mesh' icon hai (orange triangle). Wahi actual mesh data hai. Object name `Chair.001` ho sakta hai aur mesh name alag, like `chair_frame`.",
    ],
    pitfalls: [
      "Linked duplicate ka mesh edit kiya to original bhi badal jayega. Independent edit ke liye `U → Make Single User → Object Data` se link tod do.",
    ],
  },
  {
    id: "normals",
    title: "Normals",
    tagline: "Har face ki ek 'outward' direction hoti hai. Galat direction = problems.",
    group: "geometry",
    visual: { svg: svgNormals, alt: "Face normal pointing outward vs flipped" },
    shortcuts: [
      { keys: "Shift+N", meaning: "Recalculate normals (outside)" },
      { keys: "Shift+Ctrl+N", meaning: "Recalculate normals inside" },
      { keys: "Alt+N → Flip", meaning: "Flip selected face normals" },
    ],
    body: [
      "Har face ki ek invisible 'normal' vector hoti hai jo perpendicular niklati hai face se. Yeh batati hai surface ka 'baahar' kaunsi taraf hai. Lighting, shading, modifiers, sab is direction par depend karte hain.",
      "Agar normal galti se ulti ho gayi (mesh ka 'andar' baahar samajh raha hai), shading toot jati hai. Light face pe nahi padti, modifier galat side bana deta hai. Tutorial mein **Face Orientation** overlay enable karte hain (top-right ke overlays icon mein), jo correct normals ko neela aur flipped ko laal dikhata hai.",
      "Fix simple hai: edit mode mein `A` se sab select, `Shift+N` se Blender automatic outward fix kar deta hai.",
    ],
    pitfalls: [
      "Extrude inwards karne se normals flip ho jate hain. Tutorial ke base plane wale step pe yeh exactly hota hai.",
    ],
  },
  {
    id: "origin-point",
    title: "Origin Point",
    tagline: "Object ka 'pivot'. Yahan se rotation aur scale calculate hote hain.",
    group: "geometry",
    visual: { svg: svgOriginVsCursor, alt: "Origin attached to object" },
    body: [
      "Har object ka ek origin point hota hai, ek choti orange dot. Yeh object ka 'home base' hai. Rotation, scale, aur snapping default mein origin se hote hain.",
      "Origin shift karne ke do tareeqe hain. **Edit mode** mein geometry ko move karoge to mesh shift hoga, origin apni jagah par rahega. **Object mode** mein 'Set Origin' menu se manually move kar sakte ho (Object → Set Origin → Origin to 3D Cursor / Origin to Center of Mass / etc.).",
      "Game dev ke liye origin sab se important habit hai. Door ka pivot hinge pe, weapon ka grip pe, wheel ka center pe. Galat origin matlab engine mein har asset re-pivot karna parega.",
    ],
  },

  // ─────────────────────────── TRANSFORMS
  {
    id: "g-r-s",
    title: "G / R / S",
    tagline: "Move, rotate, scale. Sab kuch in teen shortcuts par chalta hai.",
    group: "transforms",
    shortcuts: [
      { keys: "G", meaning: "Grab (move)" },
      { keys: "R", meaning: "Rotate" },
      { keys: "S", meaning: "Scale" },
    ],
    body: [
      "Blender mein G/R/S press karke tum operation start karte ho, phir mouse move karte ho, phir click karke confirm karte ho (ya right-click cancel).",
      "Operation ke andar tum further refine kar sakte ho: axis lock (`X`/`Y`/`Z`), numeric input (`G Z 2 Enter`), ya snap (`Ctrl` hold). Yeh layers mein power deta hai.",
      "Same shortcuts edit mode mein bhi kaam karte hain selected vertices/edges/faces pe.",
    ],
  },
  {
    id: "axis-lock-exclude",
    title: "Axis Lock & Exclude",
    tagline: "G+X axis lock, G+Shift+X axis ko exclude.",
    group: "transforms",
    shortcuts: [
      { keys: "G X / G Y / G Z", meaning: "Move locked to that axis" },
      { keys: "G Shift+X", meaning: "Move on Y and Z, X excluded" },
      { keys: "R X X", meaning: "Rotate around local X axis" },
    ],
    body: [
      "`G` ke baad `X` press karoge to movement sirf X axis pe hogi. `Y` ya `Z` bhi same. Yeh Blender ka sab se common shortcut pattern hai.",
      "`Shift+axis` ulta hai. `G+Shift+Z` matlab Z axis ko **exclude** karo, baki dono mein freely move karne do. Useful jab tum height fix rakhna chahte ho aur ground pe arrange kar rahe ho.",
      "Rotation aur scale bhi same pattern follow karte hain. `R Z 90 Enter` matlab Z axis pe 90 degrees rotate.",
      "Double-tap se local axis activate hota hai. `R X X` matlab object ke apne X axis pe rotate, world ke nahi.",
    ],
  },
  {
    id: "pivot-point",
    title: "Pivot Point",
    tagline: "Action kis point ke around hoga, yeh decide karta hai.",
    group: "transforms",
    visual: { svg: svgPivot, alt: "Pivot at origin vs pivot at 3D cursor" },
    body: [
      "Top header mein ek dropdown hota hai pivot point ka: Median Point (default), Individual Origins, 3D Cursor, Active Element, Bounding Box Center.",
      "Default Median Point selected geometry ka beech ka point use karta hai. Lekin tutorial mein camera rotate karne ke liye pivot 3D Cursor pe switch karte hain, taakay camera scene ke center ke around ghoome.",
      "Galat pivot ke saath rotate karoge to object jagah se shift ho jayega. Pivot change karne ke baad task khatam hone par default pe wapas le aana acha habit hai.",
    ],
  },
  {
    id: "snap",
    title: "Snap to Surface / Vertex",
    tagline: "Cheez ko surface pe stick karna.",
    group: "transforms",
    shortcuts: [
      { keys: "Ctrl (held during G)", meaning: "Temporarily snap during a transform" },
    ],
    body: [
      "Top header mein magnet icon hai (snap toggle). Iske bagal mein dropdown se kya snap karna hai chuna jata hai: Vertex, Edge, Face, Volume, etc.",
      "Tutorial mein 'Face Project' snap mode use karte hain. Iska matlab object ko surface pe project karna, jaise sticker chipkana. `G` press karke `Ctrl` hold karo, object surface ke saath stick karta jayega.",
      "Snap toggle pe permanent on rakhne se aam transformations bhi snap karte hain, jo sometimes chahiye nahi hota. Need ke time on, baad mein off.",
    ],
  },
  {
    id: "apply-scale",
    title: "Apply Transform (Ctrl+A)",
    tagline: "Object ka scale aur rotation 'reset' karna without shape badle.",
    group: "transforms",
    shortcuts: [{ keys: "Ctrl+A", meaning: "Apply menu (location, rotation, scale)" }],
    body: [
      "Tumne object ko `S` se scale 2x kiya. N-panel mein scale 2 dikh raha hai. Lekin object ki dimensions toh actually 2x hain. Yeh inconsistency modifiers tod sakti hai.",
      "`Ctrl+A → Scale` press karoge to scale wapas 1 ho jayega, magar shape change nahi hogi. Mesh data updated values ke saath baked ho jata hai.",
      "Bevel modifier amount, solidify thickness, subdivision smoothness, sab object scale ke proportion mein behave karte hain. Apply Scale na karne se yeh sab visually inconsistent dikhte hain.",
    ],
    pitfalls: [
      "Apply Scale curves pe karoge to bevel depth values bhi multiply ho jaengi. Yeh expected hai, lekin recompute kar lo.",
      "Linked duplicate (alt+D) ke saath Scale apply karoge to sirf us object pe apply hota hai. Linked nature break nahi hoti.",
    ],
  },

  // ─────────────────────────── MODIFIERS
  {
    id: "modifier-stack",
    title: "Modifier Stack",
    tagline: "Non-destructive layer system. Top to bottom evaluate hota hai.",
    group: "modifiers",
    visual: { svg: svgModifierStack, alt: "Modifier stack flows top to bottom" },
    body: [
      "Modifier ek 'transformation' hai jo tumhari mesh data ke upar live apply hoti hai bina actual data ko change kiye. Tum kabhi bhi off, on, ya remove kar sakte ho.",
      "Multiple modifiers stack ban jate hain. Order matters. Bevel pehle, phir Subdivision = sharp corners with smooth surface. Subdivision pehle, phir Bevel = totally different look.",
      "Final 'baking' ke liye `Apply` button modifier dropdown mein hai. Apply karoge to modifier disappear ho jayega aur uska effect mesh data mein permanent ho jayega. Aam taur pe export se pehle apply karte hain.",
      "Tutorial mein bevel modifier ka ek copy banake usko 'Copy to Selected' option se baki sab objects pe distribute karte hain. Iska matlab har object pe alag se add nahi karna parta.",
    ],
  },
  {
    id: "bevel-modifier",
    title: "Bevel (modifier vs operation)",
    tagline: "Sharp edges ko round karna. Do roop hain: editable modifier ya one-shot edit.",
    group: "modifiers",
    shortcuts: [
      { keys: "Ctrl+B (edit mode, edge select)", meaning: "Bevel selected edges" },
      { keys: "Ctrl+Shift+B (edit mode, vertex select)", meaning: "Bevel selected vertices" },
    ],
    body: [
      "Bevel matlab sharp edge ko ek chhota slope mein convert karna. Real world mein har object ke edges ekdum sharp nahi hote, kuch radius hota hai. Yeh radius hi visual realism deta hai.",
      "Do tareeqe hain. **Operation (`Ctrl+B`)** edit mode mein selected edges pe one-shot bevel apply karta hai (mesh permanently change). **Modifier** poore object pe live bevel lagata hai jo tum baad mein adjust kar sakte ho.",
      "Tutorial mostly modifier use karta hai because non-destructive hai. Settings mein **Width**, **Segments**, aur **Miter (Outer)** important hain. Miter ko 'Arc' set karne se intersecting bevels smooth blend karte hain (default 'Sharp' kabhi-kabhi spike create karta hai).",
      "**Harden Normals** option (Shading section mein) bevel ke baad shading ko crisp rakhta hai jo subdivision ke saath better dikhta hai.",
    ],
  },
  {
    id: "subdivision-surface",
    title: "Subdivision Surface",
    tagline: "Mesh ko aur smooth banata hai bina manual modeling kiye.",
    group: "modifiers",
    shortcuts: [
      { keys: "Ctrl+1 / Ctrl+2 / Ctrl+3", meaning: "Subdivision modifier viewport level 1/2/3" },
    ],
    body: [
      "Subdivision Surface modifier mesh ka resolution barhata hai by interpolating vertices. Cube par level 1 lagao to ek round-ish blob ban jata hai. Level 2 aur smooth, level 3 aur smooth.",
      "**Viewport** level alag hota hai **Render** level se. Viewport mein 1 rakho (laptop fans bachain), render ke time 2-3.",
      "Sharp corners chahiye to **supporting loops** (`Ctrl+R`) add karo close to the edge. Subdivision us area mein 'cling' karta hai aur sharp rehta hai.",
      "Tutorial bowl, noodles, egg, sab pe subdivision lagata hai. Combination with solidify ya curve thickness common pattern hai.",
    ],
  },
  {
    id: "solidify",
    title: "Solidify",
    tagline: "Flat plane ko thickness deta hai. Volume ban jata hai.",
    group: "modifiers",
    body: [
      "Solidify modifier paper-thin geometry (jaise plane ya open mesh) ko thickness se inflate karta hai. Bowl banane ke liye tutorial mein use hota hai.",
      "**Thickness** value control karta hai kitna. **Offset** decide karta hai thickness kis taraf grow karegi (inside, outside, ya center).",
      "Solidify ke baad subdivision lagao, bowl smooth aur chunky dikhta hai. Yeh combination tutorial mein bowl, glass, aur chopstick base par dikhta hai.",
    ],
  },
  {
    id: "curves-and-bevel-depth",
    title: "Curves & Bevel Depth",
    tagline: "Path lo, depth do, pipe ban jata hai.",
    group: "modifiers",
    body: [
      "Blender mein curve ek alag object type hai. Mesh ki tarah faces nahi hote, sirf path hota hai. Properties panel mein **Geometry** section khulta hai jahan tum **Bevel** type select karte ho (Round, Object, Profile).",
      "**Bevel Depth** field path ke around ek tube create karta hai. Resolution depth ki smoothness control karti hai.",
      "Mesh se curve banane ke liye: edges select karo (face data optional), right-click → Convert to Curve. Faces discard ho jate hain. Curve geometry ke options open ho jate hain.",
      "Pipes, cables, ropes, frames, sab is workflow se. Final export se pehle 'Convert to Mesh' kar sakte ho.",
    ],
  },

  // ─────────────────────────── SHADING
  {
    id: "principled-bsdf",
    title: "Principled BSDF",
    tagline: "Default 'all-in-one' shader. 95% materials yahin se bante hain.",
    group: "shading",
    body: [
      "Principled BSDF Blender ka standard physically-based shader hai. Ek hi node mein **Base Color**, **Metallic**, **Roughness**, **IOR**, **Subsurface**, **Emission**, sab kuch hota hai.",
      "Tutorial mein limited palette use hoti hai: ek wood color, ek metal (metallic=1, roughness kam), ek accent red (low roughness), ek glass white. Saare Principled BSDF ke combinations hain.",
      "**Metallic** value 0 ya 1 hota hai (kuch beech mein nahi). **Roughness** smooth (0) se rough (1). Yeh do values 80% material look define karte hain.",
    ],
  },
  {
    id: "emission-shader",
    title: "Emission Shader (and Strength)",
    tagline: "Material khud roshni nikalta hai. Neon signs ka asal raaz.",
    group: "shading",
    body: [
      "Emission shader material ko ek light source bana deta hai. Surface khud chamakti hai bina kisi external light ke. Strength kitna chamakegi yeh control karta hai.",
      "Tutorial mein neon sign banane ke liye Principled BSDF ko Emission se replace karte hain. Lekin sirf emission lagane se shape ka dimension lost ho jata hai (sab uniform glow). Trick: original sign ke peeche ek flat duplicate rakho with emission, original par rough material rakho. Yeh real neon ka effect deta hai (sign visible, peeche se glow).",
      "Cycles mein emission realistic light cast karta hai (scene actually illuminate hoti hai). EEVEE mein dikhne ka kaam karta hai but light bounce limited hota hai bina extra setup ke.",
    ],
  },
  {
    id: "material-slots",
    title: "Material Slots",
    tagline: "Ek object mein multiple materials. Edit mode se assign karte hain.",
    group: "shading",
    body: [
      "Object ke material panel mein '+' button hai. Press karoge to ek naya material slot add hota hai. Phir tum new material create kar sakte ho us slot mein.",
      "Multiple slots ka faida: ek hi mesh ke alag-alag faces pe alag materials lag sakte hain. Tutorial mein chair frame ek object hai, lekin frame metal hai aur seat red. Edit mode mein face select karke 'Assign' button press karte hain corresponding slot ka.",
      "Alternative: alag-alag objects banao har material ke liye. Lekin yeh outliner clutter karta hai. Slots cleaner approach hai.",
    ],
  },
  {
    id: "color-management",
    title: "Color Management & View Transform",
    tagline: "Render ka final 'feel' aksar yahan se aata hai.",
    group: "shading",
    body: [
      "Render Properties → Color Management section mein **View Transform** dropdown hota hai. Default 'AgX' (Blender 4.0+) ya 'Filmic' is. Ek transform colors ko realistic curve mein map karta hai (highlights compress, shadows reasonable).",
      "**Look** dropdown mein 'High Contrast', 'Medium High', 'Low Contrast' options hain. Yeh post-process feel deta hai. Tutorial mein 'High Contrast' use hota hai foggy scenes ke liye taakay atmosphere zyada dramatic lage.",
      "**Exposure** slider stops mein scene brightness adjust karta hai. Underexposed render ko brighten karne ke liye exposure barhao instead of lights ke values badalne ke.",
    ],
  },

  // ─────────────────────────── LIGHTING
  {
    id: "light-types",
    title: "Light Types",
    tagline: "Point, Spot, Area, Sun. Har ek ka apna purpose.",
    group: "lighting",
    body: [
      "**Point**: ek single point se sab directions mein. Bulb jaisa. Inverse square attenuation se distance par kamzor ho jaata hai.",
      "**Spot**: cone shape mein roshni. Stage spot light jaisa. **Blend** parameter softness deta hai cone ke edge par. Tutorial mein interior shop lighting ke liye use hota hai.",
      "**Area**: ek rectangle (ya disk) se uniform soft light. Studio softbox jaisa. Scene mein 'cinema' feel lana hai to area lights pehla choice hai. Most flexible type.",
      "**Sun**: directional. Distance matter nahi karta, sirf angle. Asal mein parallel rays. Tutorial exterior scene mein sun back-light ke liye use hota hai.",
      "**World** background bhi ek 'global' light source hai (sky color). Iska color aur strength scene ka ambient feel set karta hai.",
    ],
  },
  {
    id: "light-power-blend",
    title: "Light Power, Color, Blend",
    tagline: "Realistic se zyada important hai 'pasand aaye'.",
    group: "lighting",
    body: [
      "**Power** (Watts mein) intensity hai. Spot aur Point ke liye 100-1000W typical, Area lights 1000-5000W. Sun ka different scale (3-5).",
      "**Color** warmth ya coolness deta hai. Interior light typically warm (orange tone), exterior shaded areas cool (blue tone). Tutorial mein interior spots ko warm rakha aur exterior area lights ko cool, jo realistic dual-temperature lighting create karta hai.",
      "**Blend** sirf Spot lights mein hai. Cone ke edge ko soft kitna karna. 0 sharp circle, 1 fully soft fade.",
      "**Size** Area aur Spot ke liye, shadow softness control karta hai. Larger size = softer shadows.",
    ],
  },
  {
    id: "volumetric-fog",
    title: "Volumetric Fog",
    tagline: "Hawa mein particles, light beams visible. Cube + Principled Volume.",
    group: "lighting",
    body: [
      "Volume scattering matlab medium mein hawa-jaise particles jo light ko scatter karte hain. Camera-visible 'haze' aur god-rays produce karta hai.",
      "Tutorial ka method: scene par ek bara cube banao, uska Surface shader remove karo (Material Output ka surface input disconnect), Volume input mein **Principled Volume** add karo. Density ko 0.01 jaisi low value pe rakho.",
      "Density barhane se fog thick, kam karne se thin. Color volume ko warm/cool tint deta hai.",
      "Sirf Cycles mein realistically render hota hai (light bounces volume ke through). EEVEE mein quick approximation milti hai.",
    ],
  },

  // ─────────────────────────── ANIMATION
  {
    id: "keyframes",
    title: "Keyframes",
    tagline: "Specific frame par 'yahan yeh value chahiye' bolna.",
    group: "animation",
    shortcuts: [
      { keys: "I", meaning: "Insert keyframe menu (legacy)" },
      { keys: "Right-click on property → Insert Keyframe", meaning: "Single property keyframe" },
    ],
    body: [
      "Keyframe ek specific frame par specific property ki value ko 'lock' karta hai. Animation Blender frames ke beech values interpolate karta hai.",
      "Tutorial mein turntable ke liye empty ka Z rotation pe 3 keyframes lagte hain: frame 1 par 0°, beech mein 180°, end mein 360°. Blender beech ke frames ke liye smooth interpolation generate karta hai.",
      "Property right-click se 'Insert Keyframe' aam method hai. Timeline mein yellow diamonds keyframes dikhate hain. Drag karke move kar sakte ho.",
    ],
  },
  {
    id: "graph-editor",
    title: "Graph Editor & Easing",
    tagline: "Animation curves manually shape karna. Robotic se human jaise feel.",
    group: "animation",
    body: [
      "Default keyframe interpolation 'Bezier' hoti hai. Beech mein values smooth aate hain but har keyframe par rukti hain (ease-in/ease-out har point pe). Continuous loop ke liye yeh tootana padta hai.",
      "Graph Editor (timeline ke editor switcher se accessible) keyframes ko points ke taur pe dikhata hai with handles. Handles ke angle se curve ki shape change hoti hai.",
      "Tutorial turntable mein first/last keyframes ke handles ko 'pull through' karte hain taakay rotation continuously chalti rahe (har baar ruk-ruk ke restart na ho). Yeh classic looping animation trick hai.",
    ],
  },
  {
    id: "parent-empty",
    title: "Parent + Empty Trick",
    tagline: "Camera ko sabse rakho, empty ko rotate karo. Camera scene ke around ghoomega.",
    group: "animation",
    body: [
      "Empty ek 'invisible helper object' hai. Render mein dikhta nahi, lekin transformations apply kar sakte ho.",
      "Tutorial mein camera empty ka child banta hai (`Ctrl+P → Object`). Ab agar empty rotate karoge, camera saath ghoomega usi center ke around. Direct camera animate karne se zyada predictable hai.",
      "Same technique tum buildings, characters, sab par use kar sakte ho. Empty ek 'rig handle' ban jata hai jiske through tum poore group ko move/rotate karte ho.",
    ],
  },

  // ─────────────────────────── RENDER
  {
    id: "eevee-vs-cycles",
    title: "EEVEE vs Cycles",
    tagline: "Speed vs realism. Choose karne mein clarity zaroori.",
    group: "render",
    body: [
      "**EEVEE** rasterization-based real-time engine hai (game engines jaisa). Fast hai, viewport real-time preview deta hai. Lekin global illumination, accurate reflections, refractions, aur volumetrics mein limitations hain.",
      "**Cycles** path tracer hai. Light rays actually trace karta hai through scene. Slow hai, accurate hai. Realistic glass, fog, mirrors, sab kuch automatically sahi.",
      "Tutorial neon sign ke emission ke liye Cycles use karta hai. Final scene render bhi Cycles mein hota hai with denoising on (Optix or OpenImageDenoise).",
      "EEVEE 5.x mein bohut improvements aaye hain (planar reflections, ray tracing for AMD via HIP-RT). Lekin photoreal scenes ke liye Cycles still preferred.",
    ],
  },
  {
    id: "samples-and-denoising",
    title: "Samples & Denoising",
    tagline: "Cycles ka kahani: zyada samples = zyada clean, zyada slow.",
    group: "render",
    body: [
      "Cycles har pixel ke liye N rays trace karta hai. Yeh N hai 'samples'. Kam samples = noisy. Zyada samples = clean lekin slow.",
      "**Denoising** ek post-process step hai jo noise ko AI/algorithm se filter karta hai. Saath mein use karne se tum 1024 samples lookalike result 256 samples mein le sakte ho.",
      "Tutorial guidance: still image ke liye 512-1024 samples + denoising. Animation ke liye 128-256 samples per frame (warna render time bahut hai), thoda visible noise acceptable hai motion ke saath.",
      "GPU denoising fastest hai. **Optix** (NVIDIA), **HIP** (AMD), **MetalRT** (Apple Silicon).",
    ],
  },
];
