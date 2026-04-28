import type { DeepConcept } from "@/lib/deep-types";

export const originPointConcept: DeepConcept = {
  id: "origin-point",
  group: "geometry",
  title: { en: "The Origin Point", ur: "Origin Point" },
  tagline: {
    en: "An object's home base. Everything an object does, rotation, scale, snapping, parenting, pivots around this one little dot.",
    ur: "Object ka home base. Object jo bhi karta hai, rotation, scale, snapping, parenting, sab is ek choti dot ke around hota hai.",
  },
  shortcuts: [
    { keys: "Object → Set Origin", meaning: { en: "Menu with all the origin-relocation options.", ur: "Saare origin-relocation options ka menu." } },
    { keys: "Edit Mode + G then move geometry", meaning: { en: "Geometry shifts, origin stays, the implicit way to push origin to one side of the mesh.", ur: "Geometry shift, origin wahin reh jata, origin ko mesh ke ek taraf rakhne ka implicit tareeqa." } },
  ],
  whatItIs: [
    {
      en: "Every object has one origin: a single 3D coordinate, drawn as a small orange dot when the object is selected. The origin is *part of the object*, when you grab the cube and move it, the origin moves with it. Its position is what 'where the object is' actually means.",
      ur: "Har object ka ek origin hota hai: ek single 3D coordinate, jo object selected hone par choti orange dot ki tarah draw hoti hai. Origin *object ka hissa* hai, jab tum cube ko grab karke move karte ho, origin saath chalta hai. Iski position hi 'object kahan hai' ka asal matlab hai.",
    },
    {
      en: "When you do `R` (rotate) or `S` (scale), Blender uses the origin as the default pivot. So if your origin is at the cube's center, scaling makes the cube grow equally in every direction. If the origin is at the bottom face, scaling makes the cube grow upward only, like a building rising from the ground.",
      ur: "Jab tum `R` (rotate) ya `S` (scale) karte ho, Blender origin ko default pivot use karta hai. Agar tumhara origin cube ke center par hai, scale equal direction mein grow karega. Agar origin bottom face par hai, cube sirf upar grow karega, building zameen se uthti jaisi.",
    },
    {
      en: "The origin doesn't have to coincide with the geometry. You can have an object whose origin is far away from its mesh, like a moon orbiting an off-screen planet. Wherever the origin is, that's the pivot for all transforms.",
      ur: "Origin ka geometry ke saath hona zaroori nahi. Tumhara aisa object ho sakta hai jiska origin uske mesh se door ho, moon ki tarah jo off-screen planet ke around orbit karta hai. Jahan bhi origin hai, wahi pivot hai saare transforms ke liye.",
    },
  ],
  whyItExists: [
    {
      en: "Without per-object origins, every rotation and scale would happen around the world center (0, 0, 0). A cube placed at x=100 would rotate by swinging around the world origin, like a planet around the sun. Useless for normal modeling. Origins fix this by giving every object a local pivot.",
      ur: "Per-object origins ke baghair, har rotation aur scale world center (0, 0, 0) ke around hota. x=100 par rakha cube world origin ke around swing kar ke rotate hota, planet ki tarah sun ke around. Normal modeling ke liye useless. Origins har object ko ek local pivot dete hain isko fix karne ke liye.",
    },
    {
      en: "But Blender goes further: it lets you *move* the origin anywhere relative to the mesh. So you can intentionally place it at a hinge (door swings around its hinge), at the foot (character grows from feet), at a wheel center (car wheel spins on its axle). This is the secret of clean rigs and predictable transforms.",
      ur: "Lekin Blender aur aage jata hai: tumhe origin ko mesh ke relative kahin bhi *move* karne deta hai. Toh tum intentionally rakh sakte ho hinge par (darwaza hinge ke around swing), foot par (character feet se grow), wheel center par (car ka wheel apne axle par spin). Yeh clean rigs aur predictable transforms ka raaz hai.",
    },
  ],
  howItWorks: [
    {
      en: "Internally, the object has a 'local space', a coordinate system whose origin is the orange dot. Mesh vertices are stored as offsets from that local origin. When you move the object in Object Mode, you're shifting the local origin (and the mesh tags along). When you move geometry in Edit Mode, you're shifting the *vertex offsets*, the local origin doesn't move.",
      ur: "Internally, object ka ek 'local space' hota hai, ek coordinate system jiska origin orange dot hai. Mesh vertices us local origin se offsets ke taur pe store hote hain. Jab tum Object Mode mein object move karte ho, tum local origin shift kar rahe ho (mesh saath chalti hai). Jab tum Edit Mode mein geometry move karte ho, tum *vertex offsets* shift kar rahe ho, local origin nahi hilta.",
    },
    {
      en: "This is exactly why the 'push origin to bottom' trick from the tutorial works: enter Edit Mode, select all, move geometry up. Blender shifts the vertex offsets (geometry visually rises) but keeps the origin at the same world coordinate. Result: origin is now at the bottom of the visible mesh.",
      ur: "Yahi reason hai ke tutorial wala 'origin ko bottom par push karo' trick kaam karta hai: Edit Mode mein jao, sab select, geometry upar move karo. Blender vertex offsets shift karta hai (geometry visually upar uthti) lekin origin same world coordinate par rakhta hai. Result: origin ab visible mesh ke bottom par hai.",
    },
  ],
  variants: {
    heading: { en: "Set Origin menu, every option", ur: "Set Origin menu, har option" },
    items: [
      {
        name: "Origin to Geometry",
        description: { en: "Moves the origin to the median of the mesh's vertices (roughly: the geometric center).", ur: "Origin ko mesh ke vertices ke median par move karta hai (roughly: geometric center)." },
        when: { en: "When you've moved geometry around in Edit Mode and now the origin is way off from the actual mesh. Recenters it cleanly.", ur: "Jab tumne Edit Mode mein geometry idhar udhar ki aur ab origin actual mesh se door reh gaya. Cleanly recenters." },
      },
      {
        name: "Origin to 3D Cursor",
        description: { en: "Moves the origin to wherever the 3D cursor is sitting right now.", ur: "Origin ko us jagah move karta hai jahan 3D cursor abhi baitha hai." },
        when: { en: "Most precise option. Place the cursor exactly where you want the origin (a face center, a vertex, world origin), then run this.", ur: "Sab se precise option. Cursor exactly wahan rakho jahan origin chahiye (face center, vertex, world origin), phir yeh run karo." },
      },
      {
        name: "Origin to Center of Mass (Surface)",
        description: { en: "Calculates the geometric center weighted by surface area. Heavier-surface regions pull the origin toward themselves.", ur: "Geometric center calculate karta hai surface area ke weight ke saath. Heavier-surface areas origin ko apni taraf pull karte hain." },
        when: { en: "Irregular objects where 'visual center' matters more than 'vertex average'.", ur: "Irregular objects mein, jab 'visual center' 'vertex average' se zyada matter karta hai." },
      },
      {
        name: "Origin to Center of Mass (Volume)",
        description: { en: "Same idea, but weighted by enclosed volume. Requires the mesh to be closed (no holes).", ur: "Same idea, lekin enclosed volume ke weight se. Mesh ka closed hona zaroori (no holes)." },
        when: { en: "Solid props meant to physically settle (drop a vase, balance a sculpture).", ur: "Solid props jinhe physically settle hona ho (vase drop ho, sculpture balance ho)." },
      },
      {
        name: "Geometry to Origin",
        description: { en: "Inverse direction. Keeps the origin where it is and *moves the geometry* to land on it. Often a quick way to teleport a stray mesh back to its origin.", ur: "Ulta direction. Origin ko jahan hai wahin rakhta hai aur *geometry ko move karta hai* taakay woh origin par aa jaye. Stray mesh ko origin par wapas teleport karne ka quick tareeqa." },
        when: { en: "When you imported a mesh that came in offset and you want it 'centered'.", ur: "Jab tumne mesh import ki jo offset thi aur tum 'centered' chahte ho." },
      },
    ],
  },
  recipe: {
    heading: { en: "The 'origin to bottom of mesh' trick (most-used)", ur: "'Origin ko mesh ke bottom par' trick (sab se zyada use)" },
    steps: [
      { step: { en: "Default cube has its origin at the center. Stays at world origin (0,0,0) by default.", ur: "Default cube ka origin center par. World origin (0,0,0) par baitha by default." } },
      { step: { en: "Press `Tab` to enter Edit Mode.", ur: "`Tab` press karke Edit Mode mein jao." } },
      { step: { en: "`A` to select all vertices.", ur: "`A` se sab vertices select karo." } },
      { step: { en: "`G` `Z` `1` `Enter`. Geometry shifts up by 1 meter.", ur: "`G` `Z` `1` `Enter`. Geometry 1 meter upar shift hoti hai." } },
      { step: { en: "`Tab` back to Object Mode. Origin is still at (0,0,0); the cube's bottom face is now at z=0. Origin is at the bottom face. Done.", ur: "`Tab` se Object Mode mein wapas. Origin abhi bhi (0,0,0) par; cube ka bottom face ab z=0 par. Origin bottom face par. Done." } },
    ],
  },
  pitfalls: [
    { en: "Doing the 'shift geometry' trick in Object Mode by accident. That moves the whole object (origin and all), net effect is the origin doesn't move at all relative to the mesh. Must be Edit Mode.", ur: "'Shift geometry' trick ko galti se Object Mode mein karna. Woh poora object move karta (origin sab kuch), net effect origin mesh ke relative bilkul nahi hilta. Edit Mode hi karna hai." },
    { en: "Importing a model from another app and finding the origin floating somewhere weird. Run 'Origin to Geometry' or 'Origin to 3D Cursor' to fix before you do anything else.", ur: "Doosri app se model import karo aur origin kahin weird jagah floating mile. Kuch aur karne se pehle 'Origin to Geometry' ya 'Origin to 3D Cursor' run karke fix karo." },
    { en: "Confusing origin with the 3D cursor. Origin belongs to the object. Cursor belongs to the scene. Two completely different things that look similar (one's a dot, the other's a crosshair).", ur: "Origin ko 3D cursor ke saath confuse karna. Origin object ka hissa hai. Cursor scene ka hissa hai. Do bilkul alag cheezein jo similar dikhti hain (ek dot, doosra crosshair)." },
  ],
  realWorld: [
    { en: "Game engines (Unity, Unreal, Godot) treat the imported origin as the asset's pivot. Mess up the origin in Blender and every instance in the engine has a wrong rotation point. Doors won't swing right, wheels won't spin clean, characters won't plant their feet. Setting origins correctly *before export* saves hours of cursing the engine.", ur: "Game engines (Unity, Unreal, Godot) imported origin ko asset ka pivot mante hain. Blender mein origin galat ho to engine mein har instance ka rotation point galat hota hai. Doors sahi swing nahi karenge, wheels clean spin nahi karenge, characters feet plant nahi karenge. *Export se pehle* origins sahi set karna engine ko cursing ke ghantay bachata hai." },
    { en: "Pro habit: place origin at the *contact point* whenever possible. Building → ground level. Lamp → base. Wheel → axle center. This way snapping, dropping, and parenting always feel natural.", ur: "Pro habit: jab possible ho origin *contact point* par rakho. Building → ground level. Lamp → base. Wheel → axle center. Is tarah snapping, dropping, aur parenting hamesha natural lagte hain." },
  ],
  related: [
    { id: "3d-cursor", note: { en: "The cursor and origin look similar but mean different things.", ur: "Cursor aur origin similar dikhte hain lekin matlab alag hain." } },
    { id: "pivot-point", note: { en: "Origin is the *default* pivot, but you can override it.", ur: "Origin *default* pivot hai, lekin tum override kar sakte ho." } },
    { id: "object-vs-edit-mode", note: { en: "Origin behavior depends on which mode you're moving things in.", ur: "Origin ka behavior depend karta hai konsa mode mein cheezein move kar rahe ho." } },
  ],
};
