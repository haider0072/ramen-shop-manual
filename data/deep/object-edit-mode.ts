import type { DeepConcept } from "@/lib/deep-types";

export const objectEditModeConcept: DeepConcept = {
  id: "object-vs-edit-mode",
  group: "interface",
  title: { en: "Object Mode vs Edit Mode (and the rest)", ur: "Object Mode vs Edit Mode (aur baki modes)" },
  tagline: {
    en: "Object Mode = move the whole thing. Edit Mode = change what it's made of. Plus six more modes for sculpting, painting, and weight work.",
    ur: "Object Mode = poori cheez ko move karo. Edit Mode = jis se woh bana hai usko badlo. Aur 6 mode hain sculpt, paint aur weight work ke liye.",
  },
  shortcuts: [
    { keys: "Tab", meaning: { en: "Toggle between Object Mode and Edit Mode (or Sculpt, depending on the active object).", ur: "Object Mode aur Edit Mode ke darmiyan toggle (ya Sculpt, depend karta hai active object par)." } },
    { keys: "Ctrl + Tab", meaning: { en: "Open the mode pie menu, pick any of the eight modes for the current object.", ur: "Mode pie menu kholo, current object ke liye kisi bhi aath modes mein se chuno." } },
    { keys: "1 / 2 / 3", meaning: { en: "In Edit Mode: switch between vertex, edge, and face select.", ur: "Edit Mode mein: vertex, edge, aur face select ke darmiyan switch." } },
  ],
  whatItIs: [
    {
      en: "Every object in Blender lives at two levels at once. There's the **object level**, the thing's name, where it sits in the world (location, rotation, scale), and which collection it belongs to. Then there's the **data level**, the actual mesh (vertices, edges, faces) inside it. The mode you're in decides which of these two you're allowed to touch.",
      ur: "Blender mein har object do levels par live karta hai ek saath. **Object level**, uska naam, world mein kahan baitha hai (location, rotation, scale), kis collection mein hai. Aur **data level**, actual mesh (vertices, edges, faces) jo uske andar hai. Tum jis mode mein ho woh decide karta hai inn dono mein se konsa touch kar sakte ho.",
    },
    {
      en: "**Object Mode** is the default. You can grab the cube and move it, scale the whole thing, duplicate it, parent one object to another. But you cannot push individual vertices around. To do that, you press `Tab` and enter **Edit Mode**, where you're zoomed into the mesh data of whatever was selected.",
      ur: "**Object Mode** default hai. Tum cube ko pakad ke move kar sakte ho, poori cheez scale kar sakte ho, duplicate kar sakte ho, ek object ko doosre ka parent bana sakte ho. Lekin individual vertices push nahi kar sakte. Iske liye `Tab` press karke **Edit Mode** mein jana parta hai, jahan tum jo selected tha uske mesh data mein zoom-in ho jate ho.",
    },
    {
      en: "Beyond these two there are six more modes available to mesh objects: Sculpt Mode (organic shaping with brushes), Vertex Paint, Weight Paint, Texture Paint, Particle Edit, and Pose Mode (for armatures). Each mode is its own toolset; the same `G`/`R`/`S` keys may do entirely different things depending on which mode you're in.",
      ur: "Inn dono ke ilawa 6 aur modes hain mesh objects ke liye: Sculpt Mode (brushes se organic shaping), Vertex Paint, Weight Paint, Texture Paint, Particle Edit, aur Pose Mode (armatures ke liye). Har mode apna alag toolset hai; same `G`/`R`/`S` keys alag mode mein bilkul alag kaam kar sakte hain.",
    },
  ],
  whyItExists: [
    {
      en: "Without modes, every keypress would be ambiguous. Did you mean 'move this object' or 'move this vertex'? Did `S` scale the object or the selected face loop? Modes resolve that ambiguity by giving the same keys different meanings in different contexts. It's how Blender keeps the keyboard small while letting one tool serve many jobs.",
      ur: "Modes ke baghair, har keypress ambiguous hota. Tumne 'object move karo' ka matlab liya tha ya 'is vertex ko move karo'? `S` ne object scale kiya ya selected face loop? Modes is ambiguity ko resolve karte hain, same keys alag context mein alag meaning rakhte hain. Isi tarah Blender keyboard chhota rakhta hai aur ek tool kai kaam kar sakta hai.",
    },
  ],
  variants: {
    heading: { en: "All eight modes, what each does", ur: "Saare aath modes, har ek kya karta hai" },
    items: [
      {
        name: "Object Mode",
        keys: "Tab to exit",
        description: { en: "Move, rotate, scale whole objects. Add/delete objects. Parent/group. Apply transforms. Add modifiers. The 'scene-level' workspace.", ur: "Poore objects ko move, rotate, scale karo. Objects add/delete karo. Parent/group karo. Transforms apply karo. Modifiers add karo. 'Scene-level' workspace." },
        when: { en: "Almost always your starting point and your finishing point. Setting up scenes, arranging things.", ur: "Tumhara starting aur finishing point. Scenes setup karne, cheezein arrange karne ke liye." },
      },
      {
        name: "Edit Mode",
        keys: "Tab",
        description: { en: "Modify the actual mesh, push vertices, slide edges, extrude faces. The shape-modeling workspace.", ur: "Actual mesh modify karo, vertices push, edges slide, faces extrude. Shape-modeling workspace." },
        when: { en: "Whenever you need to change what the object is made of, not just where it sits.", ur: "Jab tumhe object kis cheez se bana hai woh badalna ho, sirf jagah nahi." },
      },
      {
        name: "Sculpt Mode",
        keys: "Ctrl+Tab → Sculpt",
        description: { en: "Brush-based modeling. Push, pull, smooth, crease, draw with strokes, like clay. Uses dynamic topology (Dyntopo) to add detail where the brush touches.", ur: "Brush-based modeling. Strokes se push, pull, smooth, crease, draw, clay jaisa. Dynamic topology (Dyntopo) use karta hai detail add karne ke liye jahan brush touch karta hai." },
        when: { en: "Organic shapes, characters, creatures, terrain, anything you'd otherwise make with thousands of vertex tweaks.", ur: "Organic shapes, characters, creatures, terrain, jo cheezein tum hazaron vertex tweaks se banao gay." },
      },
      {
        name: "Vertex Paint",
        keys: "Ctrl+Tab → Vertex Paint",
        description: { en: "Paint colors directly onto vertices. Each vertex stores an RGBA value. Useful for stylized shading and ambient occlusion baking.", ur: "Direct vertices par colors paint karo. Har vertex ek RGBA value store karta hai. Stylized shading aur ambient occlusion baking ke liye useful." },
        when: { en: "Low-poly stylized art where you don't want full UV-mapped textures.", ur: "Low-poly stylized art mein, jab tum full UV-mapped textures nahi chahte." },
      },
      {
        name: "Weight Paint",
        keys: "Ctrl+Tab → Weight Paint",
        description: { en: "Assign vertex group weights (0-1 values). Used by armatures to control which vertices follow which bone.", ur: "Vertex group weights (0-1 values) assign karo. Armatures use karte hain decide karne ke liye konsa vertex konsi bone follow karega." },
        when: { en: "Rigging characters or any object where parts should deform based on a controller.", ur: "Characters rig karne ya kisi bhi object jahan parts ko controller ke based on deform hona ho." },
      },
      {
        name: "Texture Paint",
        keys: "Ctrl+Tab → Texture Paint",
        description: { en: "Paint directly onto a UV-mapped texture image. Brushes write into the bitmap.", ur: "Direct UV-mapped texture image par paint karo. Brushes bitmap mein write karte hain." },
        when: { en: "Hand-painted textures, fixing seams, adding detail that nodes can't easily generate.", ur: "Hand-painted textures, seams theek karna, woh detail jo nodes easily nahi generate kar sakte." },
      },
      {
        name: "Particle Edit",
        keys: "Ctrl+Tab → Particle Edit",
        description: { en: "Comb, length-adjust, and groom hair particles. Used after a hair particle system has been emitted.", ur: "Hair particles ko comb karo, length adjust karo, groom karo. Hair particle system emit hone ke baad use hota hai." },
        when: { en: "Character hair, fur, grass, any time particles need direction.", ur: "Character hair, fur, grass, kabhi bhi particles ko direction chahiye." },
      },
      {
        name: "Pose Mode",
        keys: "Ctrl+Tab → Pose Mode (only on armatures)",
        description: { en: "Pose individual bones of an armature. Bones rotate at their joints; the mesh deforms via weights.", ur: "Armature ki individual bones ko pose karo. Bones apne joints par rotate hoti hain; mesh weights ke through deform hoti hai." },
        when: { en: "Keyframe animation of rigged characters or rigid mechanical chains.", ur: "Rigged characters ya rigid mechanical chains ki keyframe animation." },
      },
    ],
  },
  recipe: {
    heading: { en: "Day-one fluency drill", ur: "Pehle din ki practice" },
    steps: [
      { step: { en: "Add a default cube. You're in Object Mode by default.", ur: "Default cube add karo. By default Object Mode mein ho." } },
      { step: { en: "Press `Tab`. You're now in Edit Mode. The cube turns orange and individual vertices appear.", ur: "`Tab` press karo. Ab Edit Mode mein ho. Cube orange ho jata hai aur individual vertices nazar aate hain." } },
      { step: { en: "Try moving a single vertex with `G`. Notice you can sculpt the cube into a weird shape.", ur: "Ek vertex ko `G` se move karo. Cube ko ajeeb shape de sakte ho." } },
      { step: { en: "Press `Tab` again. Back to Object Mode. Now `G` moves the whole shape, sculpting frozen in place.", ur: "`Tab` dobara press karo. Wapas Object Mode mein. Ab `G` poori shape ko move karta hai, sculpting jaisa hai woh frozen ho gaya." } },
      { step: { en: "Press `Ctrl+Tab` to see the pie menu. Click 'Sculpt Mode'. Now `G` is gone; you have a brush instead.", ur: "`Ctrl+Tab` press karke pie menu dekho. 'Sculpt Mode' click karo. Ab `G` gone hai; brush mil gaya hai." } },
    ],
  },
  pitfalls: [
    {
      en: "Forgetting which mode you're in. The viewport border color changes (subtle clue) and the header shows the current mode. If a shortcut isn't doing what you expect, glance at the top-left dropdown, chances are you're in the wrong mode.",
      ur: "Konsa mode mein ho yeh bhulna. Viewport border ka color change hota hai (subtle clue) aur header current mode dikhata hai. Agar koi shortcut woh nahi kar raha jo expect tha, top-left dropdown dekho, likely tum galat mode mein ho.",
    },
    {
      en: "Trying to click another object while still in Edit Mode. Nothing happens. You have to press `Tab` first to exit. Beginners get stuck here for minutes.",
      ur: "Edit Mode mein hote hue doosra object click karne ki koshish karna. Kuch nahi hota. Pehle `Tab` se nikalna parta hai. Beginners yahan minutes ke liye atak jate hain.",
    },
    {
      en: "Pressing `X` in the wrong mode. In Object Mode it deletes the entire object. In Edit Mode it shows a small menu (delete vertices/edges/faces/only edges and faces/only faces). Same key, very different consequences.",
      ur: "`X` galat mode mein press karna. Object Mode mein poora object delete karta hai. Edit Mode mein ek chhota menu deta hai (vertices/edges/faces/only edges and faces/only faces delete). Same key, bohot alag consequences.",
    },
    {
      en: "Adding a modifier in Edit Mode. The modifier still attaches to the object, but the modifier list lives in Properties → Object → Modifiers, which doesn't behave the same in Edit Mode preview. Habit: add modifiers in Object Mode for sanity.",
      ur: "Edit Mode mein modifier add karna. Modifier object par attach hota to hai, lekin modifier list Properties → Object → Modifiers mein hai aur Edit Mode preview mein same nahi behave karti. Habit: Object Mode mein modifiers add karo, sanity ke liye.",
    },
  ],
  realWorld: [
    {
      en: "Most veterans live in a Tab-Tab-Tab rhythm: Object Mode to position something, Tab into Edit Mode to refine it, Tab back out to test how it looks in context, Tab in again to keep going. Once it's automatic, you stop noticing the modes, they just become 'where I am right now'.",
      ur: "Aksar veterans Tab-Tab-Tab rhythm mein rehte hain: Object Mode mein cheez position karo, Tab se Edit Mode mein refine karo, Tab se wapas context mein test karo, Tab andar dobara. Ek baar automatic ho jaye to modes notice hi nahi hote, bas 'mai abhi yahan hun' ban jate hain.",
    },
    {
      en: "Sculpt Mode is its own discipline. Many character artists work *exclusively* in Sculpt Mode for the high-poly version of a model, then retopologize (rebuild lower-poly) and bake the detail into normal maps for game use. The same character lives in both Sculpt Mode (high-detail source) and Edit Mode (low-poly target) at different times.",
      ur: "Sculpt Mode apni alag discipline hai. Bohot character artists *sirf* Sculpt Mode mein kaam karte hain ek model ki high-poly version ke liye, phir retopologize (lower-poly rebuild) karke detail ko normal maps mein bake karte hain game use ke liye. Same character Sculpt Mode (high-detail source) aur Edit Mode (low-poly target) dono mein alag times pe live karta hai.",
    },
  ],
  related: [
    { id: "selection-modes", note: { en: "Inside Edit Mode you also pick vertex/edge/face level.", ur: "Edit Mode ke andar tum vertex/edge/face level bhi pick karte ho." } },
    { id: "vertex-edge-face", note: { en: "What Edit Mode actually lets you touch.", ur: "Edit Mode actually kya touch karne deta hai." } },
    { id: "modifier-stack", note: { en: "Modifiers are an Object-level feature; they apply on top of Edit-Mode mesh data.", ur: "Modifiers Object-level feature hain; Edit-Mode mesh data ke upar apply hote hain." } },
  ],
};
