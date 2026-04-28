import type { DeepConcept } from "@/lib/deep-types";

export const loopConcept: DeepConcept = {
  id: "loop",
  group: "geometry",
  title: { en: "Edge & Face Loops", ur: "Edge aur Face Loops" },
  tagline: {
    en: "A loop is a continuous ring of edges (or faces) running around your mesh. Selecting one with Alt+Click is the single biggest modeling speed-up.",
    ur: "Loop ek continuous ring of edges (ya faces) hai jo mesh ke around chalti hai. Alt+Click se ek loop select karna sab se bara modeling speed-up hai.",
  },
  shortcuts: [
    { keys: "Alt + Click (on an edge)", meaning: { en: "Select edge loop.", ur: "Edge loop select." } },
    { keys: "Alt + Click (on a face)", meaning: { en: "Select face loop.", ur: "Face loop select." } },
    { keys: "Ctrl + Alt + Click", meaning: { en: "Select edge ring (perpendicular loop, 'every other parallel edge').", ur: "Edge ring select (perpendicular loop, 'har doosri parallel edge')." } },
    { keys: "Shift + Alt + Click", meaning: { en: "Add another loop to the existing selection.", ur: "Existing selection mein doosra loop add karo." } },
  ],
  whatItIs: [
    {
      en: "A loop is a path of edges that travels around the mesh and either closes back on itself or runs into a vertex with too many connections to continue. On a cylinder, the top circle of edges is one loop. On a cube, the four edges going around the middle (if you add a loop cut) form another loop.",
      ur: "Loop edges ka ek path hai jo mesh ke around travel karta hai aur ya to apne aap par close ho jata hai ya ek vertex pe pohanchke ruk jata jis ke connections itne zyada hain ke continue nahi ho sakta. Cylinder par top ka edges ka circle ek loop hai. Cube par beech mein chalne wali 4 edges (loop cut ke baad) doosra loop hain.",
    },
    {
      en: "Loops only exist where topology allows them. A clean quad-based mesh has loops everywhere. A messy mesh with triangles and n-gons has 'broken' loops that stop short. This is one of the practical reasons modelers care about clean topology.",
      ur: "Loops sirf wahan exist karte hain jahan topology allow kare. Clean quad-based mesh mein har jagah loops hain. Messy mesh mein (triangles, n-gons) loops 'broken' hote hain, beech mein ruk jate. Yahi practical reason hai modelers clean topology ki parwah karte hain.",
    },
  ],
  whyItExists: [
    {
      en: "Without loop selection, picking 'all the edges around the cube's middle' would be a 4-click manual chore. With Alt+Click, it's one click. Multiply that by every selection you'll do (and you'll do thousands), and it becomes the difference between modeling at five minutes per shape vs five seconds.",
      ur: "Loop selection ke baghair, 'cube ke beech ki saari edges' pick karna 4-click manual kaam hota. Alt+Click se ek click. Yeh multiply karo har selection se (aur tum hazaron karoge), aur farak ban jata hai 5 minute per shape vs 5 second.",
    },
  ],
  variants: {
    heading: { en: "Loop selection variants", ur: "Loop selection ke variants" },
    items: [
      {
        name: "Edge loop (Alt+Click on edge)",
        description: { en: "Picks all edges that follow the same 'flow' as the clicked edge. Goes through quads in a straight line until it hits a vertex with anything other than four edges.", ur: "Click ki gayi edge jaisa 'flow' follow karne wali saari edges pick. Quads ke through seedhi line mein chalti jab tak ek vertex nahi mil jata jis ki 4 se alag edges hain." },
        when: { en: "Beveling all the corner edges of a building. Sliding a horizontal seam. Marking a seam for UV unwrap.", ur: "Building ke saare corner edges bevel. Horizontal seam slide. UV unwrap ke liye seam mark." },
      },
      {
        name: "Face loop (Alt+Click on face)",
        description: { en: "Picks all faces in a continuous strip. Same logic but at face level.", ur: "Continuous strip ki saari faces pick. Same logic, lekin face level pe." },
        when: { en: "Assigning a material to a strip of faces. Insetting a row of windows.", ur: "Faces ki ek strip ko material assign. Windows ki row inset." },
      },
      {
        name: "Edge ring (Ctrl+Alt+Click)",
        description: { en: "Picks every parallel edge perpendicular to the clicked one. Useful for things like all the 'rungs' of a ladder.", ur: "Click ki gayi edge ke perpendicular saari parallel edges pick. Ladder ke saare 'rungs' jaisi cheezon ke liye useful." },
        when: { en: "Scaling 'wide' along a tube, pick the ring of edges, scale them outward to make the tube fatter at that point.", ur: "Tube ke 'wide' direction pe scale, edges ka ring pick karo, baahar scale karo to tube uss point pe motta ho jaye." },
      },
      {
        name: "Add to loop (Shift+Alt+Click)",
        description: { en: "Adds a second loop to your existing selection without losing the first.", ur: "Existing selection mein doosra loop add, pehla nahi khoyega." },
        when: { en: "Selecting two parallel loops to scale them apart symmetrically (e.g., widening a building's base).", ur: "Do parallel loops select karke unhe symmetrically alag scale (e.g., building ki base widen)." },
      },
    ],
  },
  pitfalls: [
    { en: "Loop stops short and you can't figure out why. Reason: a vertex along the path has more or fewer than 4 connections (it's a 'pole'). The loop terminates at poles. Either accept it or fix the topology.", ur: "Loop beech mein ruk jata aur samajh nahi aata kyun. Reason: path mein koi vertex hai jiski 4 se zyada ya kam connections hain (yeh 'pole' hai). Poles pe loop ruk jata. Ya accept karo ya topology fix karo." },
    { en: "Confusing loop with ring. They share Alt+Click but with/without Ctrl gives different results. Try both if the first doesn't pick what you wanted.", ur: "Loop aur ring confuse karna. Dono Alt+Click share karte lekin Ctrl ke saath/baghair alag results. Agar pehla woh nahi picks jo chahiye tha, doosra try karo." },
  ],
  realWorld: [
    { en: "Loop work is the unsung skill behind clean character models. Animators need 'edge loops around the mouth, around the eyes' for proper deformation. Architectural modelers need 'edge loops at every floor level' for clean window cuts. Once loops become a reflex, modeling clicks at a different speed.", ur: "Loop work clean character models ka unsung skill hai. Animators ko 'mouth ke around, eyes ke around edge loops' chahiye proper deformation ke liye. Architectural modelers ko 'har floor level pe edge loops' chahiye clean window cuts ke liye. Loops reflex ban gayi, modeling alag speed pe click karne lagti hai." },
  ],
  related: [
    { id: "selection-modes", note: { en: "Loops work in Edit Mode's edge and face selects.", ur: "Loops Edit Mode ke edge aur face selects mein chalte." } },
    { id: "loop-cut", note: { en: "Loop cut creates new loops on demand.", ur: "Loop cut new loops on demand banata." } },
    { id: "vertex-edge-face", note: { en: "Loops require clean quad topology to flow.", ur: "Loops ko flow ke liye clean quad topology chahiye." } },
  ],
};
