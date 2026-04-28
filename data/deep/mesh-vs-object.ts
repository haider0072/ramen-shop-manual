import type { DeepConcept } from "@/lib/deep-types";

export const meshVsObjectConcept: DeepConcept = {
  id: "mesh-vs-object",
  group: "geometry",
  title: { en: "Mesh data vs Object", ur: "Mesh data vs Object" },
  tagline: {
    en: "An object is a wrapper that holds a reference to mesh data. Multiple objects can share the same mesh. Understanding this unlocks linked duplicates and clean workflows.",
    ur: "Object ek wrapper hai jo mesh data ka reference rakhta. Multiple objects ek hi mesh share kar sakte. Yeh samajhna linked duplicates aur clean workflows unlock karta hai.",
  },
  whatItIs: [
    {
      en: "When you add a cube, two things actually exist. There's the **object** named 'Cube' (with its location, rotation, scale, modifiers, and material slots) and there's the **mesh** named 'Cube' (the vertex/edge/face data). The object holds a *reference* to the mesh. They have the same name only because Blender names them similarly by default, but they're separate.",
      ur: "Jab tum cube add karte ho, do cheezein actually exist karti hain. Ek **object** hai 'Cube' naam ka (uski location, rotation, scale, modifiers, material slots ke saath) aur ek **mesh** hai 'Cube' naam ki (vertex/edge/face data). Object mesh ka *reference* rakhta. Same naam isliye hai ke Blender by default similarly naam karta, lekin yeh separate hain.",
    },
    {
      en: "The Outliner shows this if you expand the object's tree: a small green triangle icon (the mesh data) sits inside the orange cube icon (the object). Click the mesh icon and you can rename the mesh independently.",
      ur: "Outliner yeh dikhata hai jab tum object ka tree expand karte ho: ek choti green triangle icon (mesh data) orange cube icon (object) ke andar baithi hai. Mesh icon click karo aur tum mesh ko independently rename kar sakte ho.",
    },
    {
      en: "Multiple objects can reference the same mesh. That's exactly what `Alt + D` (linked duplicate) does: creates a new object, but points it to the same mesh data. Edit the mesh in any of them and all the others update, because the mesh data is one shared thing.",
      ur: "Multiple objects same mesh reference kar sakte hain. Yahi `Alt + D` (linked duplicate) karta: ek naya object banata, lekin same mesh data ko point karta. Kisi mein bhi mesh edit karo aur saare update ho jate, kyunki mesh data ek shared cheez hai.",
    },
  ],
  whyItExists: [
    {
      en: "Imagine a forest with 200 identical trees. If each tree had its own copy of the mesh, you'd be storing 200 copies of the same vertex data, wasteful. With shared mesh references, the actual mesh data is stored once; the 200 objects each just remember their location/rotation/scale. Memory savings can be enormous (sometimes 100x+).",
      ur: "Imagine ek forest with 200 identical trees. Agar har tree ki apni mesh ki copy hoti, tum 200 copies of same vertex data store kar rahe hote, wasteful. Shared mesh references ke saath, actual mesh data ek baar store hota; 200 objects bas apni location/rotation/scale yaad rakhte. Memory savings huge hoti hai (kabhi 100x+)." ,
    },
    {
      en: "Beyond memory, this also enables global edits. Tweak the mesh once, every instance updates. Useful for iterative design where you're not sure if the chair seat needs to be wider until you place 10 in a scene.",
      ur: "Memory ke ilawa, yeh global edits bhi enable karta. Mesh ek baar tweak, har instance update. Iterative design mein useful jab tum sure nahi ho ke chair seat wider chahiye jab tak 10 scene mein place na karo.",
    },
  ],
  variants: {
    heading: { en: "Object data operations", ur: "Object data operations" },
    items: [
      {
        name: "Linked Duplicate",
        keys: "Alt + D",
        description: { en: "New object, shared mesh. Edits propagate.", ur: "Naya object, shared mesh. Edits propagate karte." },
        when: { en: "Many copies of the same thing where you want global edits.", ur: "Ek hi cheez ki bohot copies jahan global edits chahiye." },
      },
      {
        name: "Regular Duplicate",
        keys: "Shift + D",
        description: { en: "New object with its own independent copy of the mesh. Edits don't propagate.", ur: "Naya object apni independent mesh copy ke saath. Edits propagate nahi karte." },
        when: { en: "Variant pieces where each can drift from the others.", ur: "Variant pieces jahan har ek doosre se drift kar sake." },
      },
      {
        name: "Make Single User",
        keys: "U → Object Data",
        description: { en: "Breaks a linked instance's connection. The object now owns its own copy of the mesh, free to edit independently.", ur: "Ek linked instance ka connection toot deta. Object ab apni mesh copy own karta, freely edit kar sakta." },
        when: { en: "You had 10 linked chairs and want to make one slightly different without affecting the rest.", ur: "Tumhare 10 linked chairs the aur tum ek ko slightly different banana chahte ho rest ko affect kiye baghair." },
      },
      {
        name: "Link/Transfer Data",
        keys: "Ctrl + L",
        description: { en: "Menu of things you can link from the active object to selected objects: Object Data (mesh), Materials, Modifiers, etc.", ur: "Menu jis se tum active object se selected objects ko link kar sakte ho: Object Data (mesh), Materials, Modifiers, etc." },
        when: { en: "After modeling, copy materials from a 'master' chair to all the others. Or link mesh data retroactively.", ur: "Modeling ke baad, ek 'master' chair se baki sab ko materials copy. Ya retroactively mesh data link." },
      },
      {
        name: "Join (Ctrl + J)",
        description: { en: "Combines multiple objects' meshes into one mesh of the active object. Originals are deleted.", ur: "Multiple objects ki meshes ko active object ki ek mesh mein combine. Originals delete." },
        when: { en: "Treating a group as a single mesh going forward, exporting as one piece, applying single modifier to combined geometry.", ur: "Group ko aage se ek single mesh treat karna, ek piece ki tarah export, combined geometry par single modifier." },
      },
      {
        name: "Separate (P in Edit Mode)",
        description: { en: "Splits a mesh into multiple objects. Options: by selection, by material, by loose parts.", ur: "Mesh ko multiple objects mein split. Options: selection se, material se, loose parts se." },
        when: { en: "Originally modeled as one mesh; now you want different parts to behave as separate objects.", ur: "Originally ek mesh model ki thi; ab alag parts ko alag objects behave karwana." },
      },
    ],
  },
  pitfalls: [
    { en: "Editing a linked-duplicate's mesh and being surprised the other instances changed too. That's the whole point of linked duplicates, but newcomers find it disorienting first time.", ur: "Linked-duplicate ki mesh edit aur surprised hona ke baki instances bhi change ho gaye. Yeh linked duplicates ka whole point hai, lekin newcomers ko pehli baar disorienting lagta." },
    { en: "Renaming the object but not the mesh, then later wondering 'where's chair_mesh? I see chair.001'. Object name and mesh name are separate; rename both for clarity.", ur: "Object rename karna lekin mesh nahi, phir baad mein sochna 'chair_mesh kahan? mai chair.001 dekh raha'. Object name aur mesh name separate hain; clarity ke liye dono rename karo." },
    { en: "Joining objects (Ctrl + J) takes the *active* object's transform/origin and discards the others'. Make sure the active object is the one whose origin you want to keep.", ur: "Objects join (Ctrl + J) *active* object ka transform/origin leta aur baki ka discard. Ensure active object woh hai jiska origin tum rakhna chahte." },
  ],
  realWorld: [
    { en: "Game studios export shared-mesh forests as 'instanced' geometry, Unity and Unreal both detect Blender's linked duplicates and ship them as instances. Your 200 trees become 200 transforms + 1 mesh on the GPU. Massive perf win.", ur: "Game studios shared-mesh forests ko 'instanced' geometry ke taur pe export karte, Unity aur Unreal dono Blender ke linked duplicates detect karte aur instances ki tarah ship karte. Tumhare 200 trees 200 transforms + 1 mesh ban jate GPU par. Massive perf win." },
  ],
  related: [
    { id: "object-vs-edit-mode", note: { en: "Object Mode vs Edit Mode is *the same* distinction at action level.", ur: "Object Mode vs Edit Mode action level pe *yeh wahi* distinction hai." } },
    { id: "vertex-edge-face", note: { en: "Mesh data is the vertices/edges/faces.", ur: "Mesh data vertices/edges/faces hai." } },
    { id: "modifier-stack", note: { en: "Modifiers are at object level, applied on top of mesh data.", ur: "Modifiers object level pe hain, mesh data ke upar apply hote." } },
  ],
};
