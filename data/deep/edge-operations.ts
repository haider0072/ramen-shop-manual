import type { DeepConcept } from "@/lib/deep-types";

export const edgeOperationsConcept: DeepConcept = {
  id: "edge-operations",
  group: "geometry",
  title: { en: "Edge Operations (Slide, Spin, Rip, Split)", ur: "Edge Operations (Slide, Spin, Rip, Split)" },
  tagline: {
    en: "Beyond bevel and loop cut: a toolkit of edge-specific moves that handle the awkward modeling cases.",
    ur: "Bevel aur loop cut ke parey: edge-specific moves ka toolkit jo awkward modeling cases handle.",
  },
  shortcuts: [
    { keys: "G G", meaning: { en: "Edge slide along its connected edges.", ur: "Edge ko connected edges ke saath slide." } },
    { keys: "Alt + E", meaning: { en: "Edge menu (extrude options, slide, spin, rip, split, bridge).", ur: "Edge menu (extrude options, slide, spin, rip, split, bridge)." } },
    { keys: "V", meaning: { en: "Rip selected edges/vertices apart.", ur: "Selected edges/vertices ko rip karo." } },
    { keys: "Y", meaning: { en: "Split selection from the rest of the mesh (no rip animation).", ur: "Selection ko mesh se split (rip animation nahi)." } },
  ],
  whatItIs: [
    {
      en: "These are mid-level Edit Mode operations that don't fit cleanly under bevel, loop cut, or knife. Each solves a specific topology problem: slide an edge without changing its shape, fan a face into triangles, tear a seam apart, weld two seams together.",
      ur: "Yeh mid-level Edit Mode operations bevel, loop cut, ya knife ke under cleanly fit nahi. Har specific topology problem solve: edge slide bina shape change, face triangles mein fan, seam tear, do seams weld.",
    },
  ],
  variants: {
    heading: { en: "Edge operations", ur: "Edge operations" },
    items: [
      {
        name: "Edge Slide (G G)",
        description: { en: "Move an edge along its connected geometry without changing the mesh's silhouette. Most common edge tweak.", ur: "Edge ko connected geometry ke saath move bina mesh silhouette change. Sab se common edge tweak." },
        when: { en: "Tweaking a loop cut's position; adjusting where a bevel landed.", ur: "Loop cut ki position tweak; bevel kahan land kiya adjust." },
      },
      {
        name: "Edge Spin",
        description: { en: "Rotate an edge between its two faces, switching which corners it connects. Used to fix triangulation direction.", ur: "Edge ko apne do faces ke darmiyan rotate, kaunse corners connect karta switch. Triangulation direction fix karne ke liye." },
      },
      {
        name: "Bridge Edge Loops",
        description: { en: "Connect two open edge loops with a clean strip of faces. Used to weld two halves of a hole together.", ur: "Do open edge loops ko clean strip of faces se connect. Hole ke do halves weld karne ke liye." },
      },
      {
        name: "Rip (V)",
        description: { en: "Tear selected geometry away from neighbors, leaving an open seam. Used to split a mesh into two while keeping it one object.", ur: "Selected geometry ko neighbors se tear, open seam. Mesh ko do mein split rakhte hue aik object." },
      },
      {
        name: "Rip and Fill (Alt + V)",
        description: { en: "Like Rip but fills the resulting gap with faces. Used to add a 'flap' that breaks open from the surface.", ur: "Rip jaisa lekin gap ko faces se fill. Surface se khulne wala 'flap' add karne ke liye." },
      },
      {
        name: "Split (Y)",
        description: { en: "Detaches selected vertices/edges from the rest. The detached part is no longer connected (unlike Rip which preserves position).", ur: "Selected vertices/edges ko detach. Detached part ab connected nahi (Rip position preserve karta yeh nahi)." },
      },
      {
        name: "Separate (P)",
        description: { en: "Move selection out of the current object into a new object entirely. Different from split: split makes islands, Separate makes a new Object.", ur: "Selection ko current object se nikal kar naya object. Split se alag: split islands, Separate naya Object." },
      },
      {
        name: "Mark Sharp",
        description: { en: "Edge → Mark Sharp. Tags edges as sharp for use with Edge Split modifier or Auto Smooth shading.", ur: "Edge → Mark Sharp. Edges ko sharp tag Edge Split modifier ya Auto Smooth shading ke saath." },
      },
      {
        name: "Mark Seam",
        description: { en: "Edge → Mark Seam. Tags edges as UV seams for unwrapping.", ur: "Edge → Mark Seam. Edges ko UV seams tag unwrapping ke liye." },
      },
      {
        name: "Mark Crease",
        description: { en: "Edge → Mark Crease (`Shift+E`). Increases the 'sharpness' of the edge under Subdivision Surface without adding loop cuts.", ur: "Edge → Mark Crease (`Shift+E`). Subdivision Surface ke under edge sharpness barhata bina loop cuts." },
      },
      {
        name: "Bevel Vertex (Ctrl+Shift+B)",
        description: { en: "Same as edge bevel but only the corner of one vertex. Used to chamfer a sharp point into a tiny face.", ur: "Edge bevel jaisa lekin sirf aik vertex ka corner. Sharp point ko tiny face mein chamfer." },
      },
    ],
  },
  pitfalls: [
    { en: "Edge slide goes wrong way: hold `Alt` mid-slide to flip the direction it slides toward.", ur: "Edge slide galat taraf: slide ke beech `Alt` hold direction flip." },
    { en: "Rip on a single vertex with no surrounding selection: nothing happens. Need a clear adjacency.", ur: "Single vertex par rip bina surrounding selection: kuch nahi hota. Clear adjacency chahiye." },
    { en: "Bridge Edge Loops fails: usually because loops have a different vertex count. Resolve by adding/removing verts to match.", ur: "Bridge Edge Loops fail: aksar loops ke alag vertex counts. Verts add/remove match karke resolve." },
    { en: "Mark Sharp does nothing visually: it only matters when paired with Edge Split modifier or Auto Smooth shading.", ur: "Mark Sharp visually kuch nahi karta: sirf Edge Split modifier ya Auto Smooth shading ke saath matter." },
  ],
  related: [
    { id: "loop-cut", note: { en: "Edge slide is the partner of loop cut.", ur: "Edge slide loop cut ka partner." } },
    { id: "uv-unwrap", note: { en: "Mark Seam is essential for clean UVs.", ur: "Mark Seam clean UVs ke liye essential." } },
    { id: "subdivision-surface", note: { en: "Mark Crease tunes subdivision sharpness.", ur: "Mark Crease subdivision sharpness tune." } },
  ],
};
