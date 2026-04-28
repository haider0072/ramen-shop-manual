import type { DeepConcept } from "@/lib/deep-types";

export const applyScaleConcept: DeepConcept = {
  id: "apply-scale",
  group: "transforms",
  title: { en: "Apply Transform (Ctrl+A)", ur: "Apply Transform (Ctrl+A)" },
  tagline: {
    en: "Bake an object's current location/rotation/scale into its mesh data, resetting the transform values to zero/one. Vital before exporting or adding modifiers.",
    ur: "Object ki current location/rotation/scale ko mesh data mein bake kar do, transform values zero/one par reset. Export ya modifiers se pehle vital.",
  },
  shortcuts: [
    { keys: "Ctrl + A", meaning: { en: "Apply menu. Choose what to bake.", ur: "Apply menu. Kya bake karna hai chuno." } },
  ],
  whatItIs: [
    {
      en: "When you scale an object with `S`, the visual changes but the underlying mesh data doesn't. The N-panel still shows scale = 2 (because that's the multiplier). Apply Scale takes that 2× and bakes it into the mesh, every vertex gets multiplied by 2, and then sets the scale value back to 1. Visually nothing changes; mathematically the mesh is now 'natively' the new size.",
      ur: "Jab tum object ko `S` se scale karte ho, visual badalta lekin underlying mesh data nahi. N-panel abhi bhi scale = 2 dikhata (kyunki yahi multiplier hai). Apply Scale us 2× ko mesh mein bake karta, har vertex 2 se multiply, aur scale wapas 1. Visually kuch nahi badalta; mathematically mesh ab 'natively' nayi size par.",
    },
    {
      en: "Why does this matter? Modifiers, exporters, and physics all read the scale value separately from the mesh data. A bevel modifier with width=0.1 looks fine on scale-1, but on scale-2 it visually looks like 0.2 (because everything around it is doubled). Apply Scale removes that inconsistency.",
      ur: "Yeh kyun matter karta hai? Modifiers, exporters, aur physics sab scale value ko mesh data se alag read karte. Width=0.1 wala bevel modifier scale-1 par theek lagta, lekin scale-2 par visually 0.2 jaisa lagta (kyunki around ki cheezein doubled hain). Apply Scale yeh inconsistency hata deta.",
    },
  ],
  whyItExists: [
    {
      en: "Without Apply Scale, modifiers misbehave silently. You add a Bevel and it looks too big, or you export to a game engine and the object's collision mesh is wrong size. Most 'why does my modifier look weird' threads online end with 'apply your scale'. It's the single most-recommended Blender tip.",
      ur: "Apply Scale ke baghair, modifiers silently misbehave karte. Bevel add karo aur bara lagta, ya game engine mein export karo aur collision mesh galat size. 'Mera modifier kyun weird lag raha' wali aksar online threads 'apply your scale' pe khatam hoti. Yeh sab se zyada recommend Blender tip hai.",
    },
  ],
  variants: {
    heading: { en: "Ctrl+A menu options", ur: "Ctrl+A menu options" },
    items: [
      {
        name: "Location",
        description: { en: "Bakes location into mesh. Object's origin moves to (0,0,0); the mesh shifts to compensate so visually it stays put.", ur: "Location ko mesh mein bake. Object ka origin (0,0,0) par; mesh shift hoti compensate karne ke liye taakay visually wahin reh." },
        when: { en: "Rare. Sometimes useful when an object's origin is wildly off but you want it at world origin without re-modeling.", ur: "Rare. Kabhi useful jab object ka origin wildly off hai aur tum world origin par chahte ho bina re-model kiye." },
      },
      {
        name: "Rotation",
        description: { en: "Bakes rotation into mesh. Object's rotation values become 0; the vertex coordinates rotate to match.", ur: "Rotation ko mesh mein bake. Object ke rotation values 0 ho jate; vertex coordinates rotate karte match karne ke liye." },
        when: { en: "Before adding mirror modifier on a rotated object, rotation must be applied first or the mirror axis is wrong.", ur: "Rotated object par mirror modifier add karne se pehle, pehle rotation apply karna parta warna mirror axis galat." },
      },
      {
        name: "Scale",
        description: { en: "Bakes scale into mesh. The most-used Apply option. Scale becomes 1; mesh dimensions reflect the actual baked size.", ur: "Scale ko mesh mein bake. Sab se zyada use hone wala Apply option. Scale 1 ho jata; mesh dimensions actual baked size dikhati." },
        when: { en: "Before adding modifiers, before exporting, after any non-uniform scale.", ur: "Modifiers se pehle, export se pehle, kisi bhi non-uniform scale ke baad." },
      },
      {
        name: "Rotation & Scale",
        description: { en: "Both at once. The most common 'cleanup' apply.", ur: "Dono ek saath. Sab se common 'cleanup' apply." },
        when: { en: "After modeling sessions where you may have done multiple rotations and scales. Single-button cleanup.", ur: "Modeling sessions ke baad jab multiple rotations aur scales kiye. Single-button cleanup." },
      },
      {
        name: "All Transforms",
        description: { en: "Location + Rotation + Scale all baked. Object ends up at (0,0,0) with rotation 0 and scale 1, mesh data adjusted.", ur: "Location + Rotation + Scale sab bake. Object (0,0,0) par rotation 0 aur scale 1, mesh data adjusted." },
        when: { en: "Final cleanup before exporting an asset.", ur: "Asset export se pehle final cleanup." },
      },
      {
        name: "Visual Geometry to Mesh",
        description: { en: "Bakes the *modifier-stack output* into the mesh. After this, modifiers are gone but the visible geometry persists.", ur: "*Modifier-stack output* ko mesh mein bake. Iske baad modifiers gone lekin visible geometry persist." },
        when: { en: "Want to keep the result of a modifier but free up the stack. Common before exporting.", ur: "Modifier ka result rakhna hai lekin stack free karna. Aksar export se pehle." },
      },
    ],
  },
  recipe: {
    steps: [
      { step: { en: "After scaling/rotating an object, press `Ctrl + A`.", ur: "Object ko scale/rotate karne ke baad, `Ctrl + A` press." } },
      { step: { en: "Pick 'Scale' (or 'Rotation & Scale' as a habit).", ur: "'Scale' chuno (ya habit ke taur pe 'Rotation & Scale')." } },
      { step: { en: "N-panel verifies: scale is back to 1, dimensions reflect actual size.", ur: "N-panel verify: scale wapas 1, dimensions actual size dikhati." } },
      { step: { en: "Now safe to add modifiers, export, or apply physics.", ur: "Ab safe modifiers add, export, ya physics apply karne ke liye." } },
    ],
  },
  pitfalls: [
    { en: "Applying scale on a linked-duplicate. The apply happens to the *object*'s scale, not the shared mesh. Other linked instances are unaffected. Sometimes that's what you want, sometimes it's not.", ur: "Linked-duplicate par scale apply. Apply *object* ki scale par hota, shared mesh ki nahi. Doosre linked instances unaffected. Kabhi yahi chahiye, kabhi nahi." },
    { en: "Applying location on parented children moves them oddly. Generally don't apply location on rigged or parented setups without thinking.", ur: "Parented children par location apply oddly move karta. Aksar rigged ya parented setups par soche baghair location apply mat karo." },
    { en: "Forgetting to apply before exporting. Game engines respect scale, so unscaled assets ship with weird collision/physics behavior.", ur: "Export se pehle apply karna bhulna. Game engines scale respect karte, isliye unscaled assets weird collision/physics behavior ke saath ship hote." },
  ],
  realWorld: [
    { en: "Apply Scale before bevel modifier is the single biggest 'aha' for new modelers. They struggle for hours wondering why bevel looks chunky on one corner and tiny on another, then someone tells them about apply scale and the whole world makes sense.", ur: "Bevel modifier se pehle Apply Scale naye modelers ke liye sab se bara 'aha' hai. Woh ghanton struggle karte sochte kyun bevel ek corner par chunky aur doosre par tiny lag raha, phir koi apply scale batata aur poori duniya samajh aati." },
  ],
  related: [
    { id: "modifier-stack", note: { en: "Modifiers misbehave on un-applied scale.", ur: "Modifiers un-applied scale par misbehave karte." } },
    { id: "g-r-s", note: { en: "The transforms you accumulate before applying.", ur: "Transforms jo apply se pehle accumulate karte ho." } },
  ],
};
