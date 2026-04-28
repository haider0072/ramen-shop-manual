import type { DeepConcept } from "@/lib/deep-types";

export const extrudeConcept: DeepConcept = {
  id: "extrude",
  group: "geometry",
  title: { en: "Extrude (E and friends)", ur: "Extrude (E aur uske saathi)" },
  tagline: {
    en: "Pull new geometry out of what's already there. Five flavors depending on direction logic and whether you want individual or grouped behavior.",
    ur: "Jo geometry pehle se hai usme se nayi geometry baahar nikalo. 5 flavors hain, depend karta hai direction logic aur tum individual ya grouped behavior chahte ho.",
  },
  shortcuts: [
    { keys: "E", meaning: { en: "Standard extrude. Pulls selection along the average normal.", ur: "Standard extrude. Selection ko average normal ke saath kheechta." } },
    { keys: "Alt + E", meaning: { en: "Extrude menu, opens all extrude variants.", ur: "Extrude menu, saare extrude variants kholta." } },
    { keys: "E then X / Y / Z", meaning: { en: "Constrain extrude direction to an axis.", ur: "Extrude direction ko axis pe constrain." } },
  ],
  whatItIs: [
    {
      en: "Extrude takes whatever you have selected (vertices, edges, or faces) and creates a new copy connected to the original. Then it gives you a 'translate' operation so you can drag the new copy somewhere, usually outward, but really any direction.",
      ur: "Extrude jo bhi tumne select kiya hai (vertices, edges, ya faces) uski ek nayi copy banata hai jo original se connected hai. Phir tumhe 'translate' operation deta hai taakay tum nayi copy ko kahin drag kar sako, aksar outward, lekin koi bhi direction ho sakti hai.",
    },
    {
      en: "The behavior depends on what's selected. Extrude a vertex and you get a new edge. Extrude an edge and you get a new face. Extrude a face and you get a small box-like volume (four side faces + the new top face). Same key, three different geometric outcomes.",
      ur: "Behavior depend karta hai kya selected hai. Vertex extrude karoge to nayi edge. Edge extrude to nayi face. Face extrude to ek chhota box-jaisa volume (4 side faces + nayi top face). Same key, 3 alag geometric outcomes.",
    },
  ],
  whyItExists: [
    {
      en: "Modeling is mostly a sequence of 'pull this out, then this out, then this out'. Without extrude you'd have to add new vertices manually, then connect them with edges, then fill faces. Extrude collapses that to one operation. It's the fundamental modeling verb.",
      ur: "Modeling aksar 'isko nikalo, phir isko, phir isko' ka sequence hai. Extrude ke baghair tum manually new vertices add karte, phir edges se connect karte, phir faces fill karte. Extrude inn sab ko ek operation mein collapse karta. Yeh modeling ka fundamental verb hai.",
    },
  ],
  variants: {
    heading: { en: "Every extrude variant", ur: "Saare extrude variants" },
    items: [
      {
        name: "Extrude Region",
        keys: "E",
        description: { en: "Default. The whole selection moves as one piece, even if you selected multiple disconnected faces. Direction follows the average normal.", ur: "Default. Poori selection ek piece ki tarah move, even agar tumne multiple disconnected faces select kiye. Direction average normal follow karti." },
        when: { en: "Most extrudes. Pulling a face out, extending edges along an axis, building solid geometry.", ur: "Aksar extrudes. Face nikalna, edges ko axis ke saath extend, solid geometry banana." },
      },
      {
        name: "Extrude Along Normals",
        keys: "Alt + E → Extrude Faces Along Normals",
        description: { en: "Each selected face moves along *its own* normal. Useful when faces face different directions and you want them all to grow outward (or inward) uniformly.", ur: "Har selected face *apni* normal ke saath move. Useful jab faces alag directions face karti aur tum sab ko uniformly outward (ya inward) grow karwana chahte." },
        when: { en: "Extruding a curved surface 'thicker' without distortion. Walls of a non-rectangular building.", ur: "Curved surface ko 'motta' karna bina distortion ke. Non-rectangular building ki walls." },
      },
      {
        name: "Extrude Individual Faces",
        keys: "Alt + E → Extrude Individual Faces",
        description: { en: "Each selected face extrudes *separately*. The faces don't share their new geometry, you get N independent extrusions instead of one.", ur: "Har selected face *alag* extrude. Faces apni nayi geometry share nahi karti, tumhe N independent extrusions milti hain ek ki bajaye." },
        when: { en: "Spikes coming out of multiple faces. Each tooth of a gear independently extruded.", ur: "Multiple faces se spikes nikalna. Gear ka har tooth independently extruded." },
      },
      {
        name: "Extrude Manifold",
        keys: "Alt + E → Extrude Manifold",
        description: { en: "Smart variant that auto-handles overlapping faces. If your extrude would create a face that overlaps an existing one, manifold cleans it up.", ur: "Smart variant jo overlapping faces auto-handle karta. Agar tumhara extrude ek face banata jo existing face se overlap hoti, manifold use cleanup kar deta." },
        when: { en: "Cutting holes by extruding inward where you'd otherwise get duplicate faces. Hard surface modeling.", ur: "Holes cut karna inward extrude karke jahan warna duplicate faces banti. Hard surface modeling." },
      },
      {
        name: "Extrude to Cursor",
        keys: "Alt + E → Extrude to Cursor",
        description: { en: "Extrudes selected vertex/edge/face to wherever the 3D cursor is. Used in 'connect this to here' workflows.", ur: "Selected vertex/edge/face ko 3D cursor wahan jahan hai extrude. 'Isko yahan se connect karo' workflows ke liye." },
        when: { en: "Building a wireframe model where you click-place vertices via cursor and extrude between.", ur: "Wireframe model banana jahan tum cursor se vertices click-place karte ho aur darmiyan extrude karte." },
      },
      {
        name: "Extrude Repeat",
        keys: "Alt + E → Extrude Repeat",
        description: { en: "Extrudes the same geometry multiple times in a row, each step a fixed offset and rotation. Builds tubes, gear teeth, regular structures.", ur: "Same geometry multiple times row mein extrude, har step fixed offset aur rotation. Tubes, gear teeth, regular structures banata." },
      },
    ],
  },
  recipe: {
    heading: { en: "Most-used extrude moves", ur: "Sab se zyada use hone wale extrude moves" },
    steps: [
      { step: { en: "**Pull a face up**: face select (`3`), pick the top face, `E` `Z` and drag. New volume grows upward.", ur: "**Face upar nikalo**: face select (`3`), top face pick, `E` `Z` aur drag. Nayi volume upward grow." } },
      { step: { en: "**Extrude with even thickness on a curved mesh**: select all faces, `Alt+E → Extrude Faces Along Normals`, then press `S` for 'Even Thickness' option.", ur: "**Curved mesh par even thickness extrude**: saari faces select, `Alt+E → Extrude Faces Along Normals`, phir `S` press karke 'Even Thickness' option." } },
      { step: { en: "**Bird's beak (extrude vertex)**: vertex select (`1`), pick one vertex, `E` and drag. A new edge spawns.", ur: "**Bird's beak (vertex extrude)**: vertex select (`1`), ek vertex pick, `E` aur drag. Nayi edge spawn." } },
      { step: { en: "**Right-click to cancel translate, but extrude still happened**. Confused beginners think it 'didn't work', but the extra geometry is there, just not moved.", ur: "**Right-click se translate cancel, lekin extrude phir bhi hua**. Beginners sochte 'kaam nahi kiya', lekin extra geometry wahan hai, bas move nahi hui." } },
    ],
  },
  pitfalls: [
    { en: "Extruding inward without realizing the new geometry's normals flip. Always check Face Orientation overlay after inward extrudes.", ur: "Inward extrude karna bina realize kiye nayi geometry ke normals flip ho gaye. Inward extrudes ke baad hamesha Face Orientation overlay check karo." },
    { en: "Right-clicking to cancel translation but not realizing extrude already created vertices. You now have stacked duplicate vertices on top of the original. Run Merge by Distance to clean up if you didn't actually want to extrude.", ur: "Right-click se translation cancel karna lekin realize na karna ke extrude pehle hi vertices bana chuka. Original ke upar stacked duplicate vertices ban gaye. Agar actually extrude nahi chahte the to Merge by Distance se cleanup." },
    { en: "Extrude Region vs Extrude Individual confusion. Multiple faces selected, you press `E`, they all stay connected and move as one mass, wasn't what you wanted. Use Alt+E to access Individual.", ur: "Extrude Region vs Extrude Individual confusion. Multiple faces selected, `E` press, sab connected reh ke ek mass ki tarah move, woh nahi chahiye tha. Individual ke liye Alt+E use karo." },
  ],
  related: [
    { id: "vertex-edge-face", note: { en: "Extrude behavior depends on what level you have selected.", ur: "Extrude behavior depend karta hai konsa level selected hai." } },
    { id: "normals", note: { en: "Inward extrude flips normals.", ur: "Inward extrude normals flip karta." } },
    { id: "inset", note: { en: "Inset is often used right before extrude to create a recessed face.", ur: "Inset aksar extrude se pehle use hota recessed face banane ke liye." } },
  ],
};
