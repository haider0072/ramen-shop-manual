import type { DeepConcept } from "@/lib/deep-types";

export const vertexEdgeFaceConcept: DeepConcept = {
  id: "vertex-edge-face",
  group: "geometry",
  title: { en: "Vertex, Edge, Face", ur: "Vertex, Edge, Face" },
  tagline: {
    en: "The three building blocks of every mesh. Knowing how they relate is the difference between fighting a model and shaping it.",
    ur: "Har mesh ki teen building blocks. Yeh kaise aapas mein judi hain, yahi farak hai model ke saath larne aur uske saath shape banane mein.",
  },
  whatItIs: [
    {
      en: "A **vertex** is a single point in 3D space. It's just an (x, y, z) coordinate. The mesh's smallest atom.",
      ur: "**Vertex** 3D space mein ek single point hai. Bas ek (x, y, z) coordinate. Mesh ka sab se chhota atom.",
    },
    {
      en: "An **edge** is a straight line connecting exactly two vertices. Edges have no thickness; they're just the relationship 'these two points are connected'.",
      ur: "**Edge** ek seedhi line hai jo exactly do vertices ko jodti hai. Edges ki thickness nahi hoti; bas ek relationship hai 'yeh do points connected hain'.",
    },
    {
      en: "A **face** is a closed loop of edges (three or more) with a fillable interior. The interior is the actual visible 'surface' that catches light. Three-vertex face = triangle, four = quad, five+ = n-gon.",
      ur: "**Face** edges ka ek closed loop hai (teen ya zyada) jiska andar fill ho sakta hai. Yeh interior hi actual visible 'surface' hai jo light pe respond karta hai. Teen-vertex face = triangle, char = quad, paanch+ = n-gon.",
    },
    {
      en: "These three are layered: vertices form edges, edges form faces, faces form the surface you see. Edit Mode lets you select and manipulate at any of the three layers (`1`/`2`/`3`).",
      ur: "Yeh teeno layered hain: vertices se edges, edges se faces, faces se woh surface jo tum dekhte ho. Edit Mode tumhe teeno layers mein se kisi ko bhi select aur manipulate karne deta hai (`1`/`2`/`3`).",
    },
  ],
  whyItExists: [
    {
      en: "Every 3D engine on earth uses some version of this. It's the universal way to describe a surface in 3D: list of points, list of edges between them, list of polygons that close them off. Blender, Unity, Unreal, Maya, every game's GPU pipeline. The vocabulary is the same; the operations differ.",
      ur: "Duniya ka har 3D engine isi structure ki kuch version use karta hai. 3D mein surface describe karne ka universal tareeqa: points ki list, unke darmiyan edges, aur polygons jo unhe close karte hain. Blender, Unity, Unreal, Maya, har game ka GPU pipeline. Vocabulary same hai; operations alag.",
    },
  ],
  howItWorks: [
    {
      en: "Quads (4-vertex faces) are the gold standard. They subdivide cleanly, deform predictably under armatures, and shade smoothly. Triangles work fine but are harder to control during subdivision (they create pinching). N-gons (5+ vertices) often look fine in render but break when you start editing them, Blender's tools assume a max of 4 sides.",
      ur: "Quads (4-vertex faces) gold standard hain. Cleanly subdivide hote, armatures ke under predictably deform karte, smoothly shade karte. Triangles theek kaam karte lekin subdivision mein control mushkil (pinching banti). N-gons (5+ vertices) aksar render mein theek dikhte lekin edit karte hi toot jate, Blender ke tools max 4 sides assume karte hain.",
    },
  ],
  variants: {
    heading: { en: "Operations specific to each level", ur: "Har level ke specific operations" },
    items: [
      {
        name: "Vertex-level (1)",
        description: { en: "Move single points, merge duplicates, vertex bevel (`Ctrl+Shift+B`), proportional edit a single point and have neighbors follow.", ur: "Single points move, duplicates merge, vertex bevel (`Ctrl+Shift+B`), proportional edit ek point pe aur neighbors follow karein." },
        when: { en: "Surgical detail work. Fixing a single misaligned point. Adjusting topology one node at a time.", ur: "Surgical detail work. Ek misaligned point theek karna. Topology ko ek-ek node se adjust karna." },
      },
      {
        name: "Edge-level (2)",
        description: { en: "Edge bevel (`Ctrl+B`), loop cut (`Ctrl+R`), loop slide (`G G`), bridge edge loops, mark seam, mark sharp.", ur: "Edge bevel (`Ctrl+B`), loop cut (`Ctrl+R`), loop slide (`G G`), bridge edge loops, mark seam, mark sharp." },
        when: { en: "Most modeling cleanup happens here. Sliding loops, beveling corners, marking seams for unwrap, building defined creases.", ur: "Aksar modeling cleanup yahin hota. Loops slide, corners bevel, unwrap ke liye seams mark, defined creases banana." },
      },
      {
        name: "Face-level (3)",
        description: { en: "Extrude (`E`), inset (`I`), poke face (turns a face into a fan of triangles around its center), grid fill, material assign.", ur: "Extrude (`E`), inset (`I`), poke face (face ko center se triangles ke fan mein convert karta), grid fill, material assign." },
        when: { en: "Volume creation (extrude), recessed details (inset), assigning different materials to different parts of one mesh.", ur: "Volume create (extrude), recessed details (inset), ek hi mesh ke alag parts ko alag materials assign karna." },
      },
    ],
  },
  pitfalls: [
    { en: "Leaving n-gons in the mesh and then trying to subdivide. Result: pinches, weird shading. Triangulate first or split n-gons into quads.", ur: "Mesh mein n-gons rakhna aur phir subdivide karne ki koshish. Result: pinches, weird shading. Pehle triangulate karo ya n-gons ko quads mein todo." },
    { en: "Stray vertices (vertices not connected to any edge). They don't render but they cause confusion. Run Mesh → Clean Up → Delete Loose to remove them.", ur: "Stray vertices (kisi edge se connected nahi). Render nahi hote lekin confusion banate. Mesh → Clean Up → Delete Loose se hatao." },
    { en: "Faces sharing edges with mismatched directions. Edge appears 'doubled', looks like one but is two stacked. Fixes via 'Merge by Distance' on edge endpoints.", ur: "Faces jo edges share karte but mismatched directions ke saath. Edge 'doubled' lagti, ek dikh rahi hoti lekin do stacked. 'Merge by Distance' edge endpoints par fix karta." },
  ],
  realWorld: [
    { en: "Game asset standards lean heavily on quad-only meshes for animation, then triangulate at export time (engines render triangles only). Modeling in quads, exporting in tris is the universal pipeline.", ur: "Game asset standards animation ke liye quad-only meshes lean karte, phir export ke time triangulate (engines sirf triangles render karte). Quads mein model, tris mein export universal pipeline hai." },
  ],
  related: [
    { id: "selection-modes", note: { en: "How you pick at each level (1/2/3).", ur: "Har level pe kaise pick karte (1/2/3)." } },
    { id: "loop", note: { en: "Loops connect vertices/edges/faces in continuous rings.", ur: "Loops vertices/edges/faces ko continuous rings mein jodte hain." } },
    { id: "normals", note: { en: "Faces have orientation, that's the normal.", ur: "Faces ki orientation hoti hai, woh normal hai." } },
  ],
};
