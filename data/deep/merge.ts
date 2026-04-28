import type { DeepConcept } from "@/lib/deep-types";

export const mergeConcept: DeepConcept = {
  id: "merge",
  group: "geometry",
  title: { en: "Merge Vertices (M key)", ur: "Merge Vertices (M key)" },
  tagline: {
    en: "Take many vertices and turn them into one. Seven flavors depending on where you want the merged result to land.",
    ur: "Bohut sare vertices ko ek bana do. 7 flavors hain, depend karta hai merged result kahan land kare.",
  },
  shortcuts: [
    { keys: "M", meaning: { en: "Merge menu in Edit Mode. Pops up the seven options.", ur: "Edit Mode mein Merge menu. Saat options pop up." } },
    { keys: "Mesh → Clean Up → Merge by Distance", meaning: { en: "Same as 'M → By Distance' but accessible via menu.", ur: "'M → By Distance' jaisa, lekin menu se accessible." } },
  ],
  whatItIs: [
    {
      en: "Merge collapses a selection of vertices into a single vertex. The mesh topology around them updates: edges that connected to those vertices now connect to the new merged vertex; faces that depended on them collapse or update. It's the most surgical way to clean up duplicate or redundant geometry.",
      ur: "Merge selected vertices ko ek single vertex mein collapse kar deta. Around ki mesh topology update hoti hai: jo edges un vertices se connected the woh ab naye merged vertex se connect; jo faces unpar depend karte the woh collapse ya update. Yeh duplicate ya redundant geometry clean up karne ka sab se surgical tareeqa hai.",
    },
    {
      en: "The seven options differ only in *where* the merged vertex lands. Center of the selection? On the first selected? At the cursor? The math is the same; you're picking the destination.",
      ur: "Saat options sirf is mein different hain ke merged vertex *kahan* land karta hai. Selection ke center par? First selected par? Cursor par? Math same hai; tum bas destination pick kar rahe ho.",
    },
  ],
  whyItExists: [
    {
      en: "Modeling produces redundant vertices constantly. Two vertices placed visually on top of each other look like one but aren't, so the mesh has a gap that breaks shading. After mirroring, joining objects, or extruding sloppily, you end up with overlapping vertices that need cleaning. Merge fixes this in one keystroke.",
      ur: "Modeling lagatar redundant vertices produce karti hai. Do vertices visually ek ke upar rakhe gaye ek lagti hain lekin hain nahi, mesh mein gap reh jata jo shading torta hai. Mirroring ke baad, objects join karne ke baad, ya sloppy extrude ke baad, overlapping vertices banti hain jinhe cleanup chahiye. Merge ek keystroke mein fix karta hai.",
    },
  ],
  howItWorks: [
    {
      en: "Internally, Blender takes the selected vertices, computes the destination point (based on which option you picked), creates a new vertex there, reconnects every edge that touched any of the selected vertices to this new one, and deletes the originals. Faces with fewer than three remaining vertices are removed; faces with three or more are kept.",
      ur: "Internally, Blender selected vertices leta hai, destination point compute karta hai (jo option chuna hai uske basis par), wahan ek naya vertex banata hai, har edge ko jo selected vertices ko touch karti thi naye se reconnect karta hai, aur originals delete karta. 3 se kam vertices wali faces remove ho jati hain; 3 ya zyada wali rakhi jati hain.",
    },
  ],
  variants: {
    heading: { en: "All seven Merge options", ur: "Saare 7 Merge options" },
    items: [
      {
        name: "At Center",
        description: { en: "Lands the merged vertex at the geometric center (median) of the selected vertices.", ur: "Merged vertex ko selected vertices ke geometric center (median) par land karta hai." },
        when: { en: "Symmetric merges. You want the result balanced between all the points you picked.", ur: "Symmetric merges. Result chahiye saare picked points ke darmiyan balanced." },
      },
      {
        name: "At Cursor",
        description: { en: "Lands the merged vertex at the 3D cursor's position.", ur: "Merged vertex ko 3D cursor ki position par land karta hai." },
        when: { en: "Precise placement. You've snapped the cursor exactly where the merge needs to end up; this honors that.", ur: "Precise placement. Tumne cursor exactly wahan snap kiya jahan merge ko end up karna hai; yeh us position ko respect karta hai." },
      },
      {
        name: "At First",
        description: { en: "Lands at the *first* vertex you selected. Other selected vertices collapse onto it.", ur: "*Pehle* selected vertex par land. Doosre selected vertices uspar collapse." },
        when: { en: "When you have a 'seed' vertex you want everything else to converge on. Click it first, then shift-click the rest.", ur: "Jab tumhare paas ek 'seed' vertex hai jis pe baki sab ko converge karwana hai. Pehle use click karo, phir baki shift-click." },
      },
      {
        name: "At Last",
        description: { en: "Lands at the *active* (last-clicked) vertex. Inverse of 'At First'.", ur: "*Active* (last-clicked) vertex par land. 'At First' ka ulta." },
        when: { en: "Same logic as At First but with selection order reversed. Some users find this more intuitive, pick the destination last.", ur: "At First jaisi logic, lekin selection order ulta. Kuch users isko zyada intuitive paate hain, destination ko last mein pick karo." },
      },
      {
        name: "Collapse",
        description: { en: "Merges *each connected component* of the selection separately. So if you select two distant vertex pairs, you end up with two merged vertices, not one.", ur: "Selection ka *har connected component* alag merge karta. Agar do alag-alag vertex pairs select kiye to do merged vertices banengi, ek nahi." },
        when: { en: "Cleaning up multiple distant duplicates in one operation. Faster than running merge once per duplicate pair.", ur: "Multiple distant duplicates ek operation mein cleanup. Har duplicate pair ke liye merge run karne se fast." },
      },
      {
        name: "By Distance",
        description: { en: "Auto-merges any vertices closer than a threshold (default 0.0001m). Doesn't care which were selected vs not, works on the entire selection. The 'remove doubles' command of old Blender.", ur: "Threshold (default 0.0001m) se qareeb koi bhi vertices ko auto-merge. Kya selected tha kya nahi, parwah nahi, poori selection par chalta. Purane Blender ka 'remove doubles' command." },
        when: { en: "After mirroring, after `Ctrl+J` join, after sloppy modeling. Industry-standard cleanup step before exporting.", ur: "Mirroring ke baad, `Ctrl+J` join ke baad, sloppy modeling ke baad. Industry-standard cleanup step export se pehle." },
      },
      {
        name: "Unweld (or Split)",
        description: { en: "*Reverse* of merge. Splits the selected vertex into multiple vertices, one per connected face. Used to break a smooth surface into separate pieces.", ur: "Merge ka *ulta*. Selected vertex ko multiple vertices mein split karta, har connected face par ek. Smooth surface ko alag pieces mein torne ke liye." },
        when: { en: "Creating sharp seams where the mesh was previously continuous, or detaching a face for separate transformation.", ur: "Wahan sharp seams banane jahan mesh pehle continuous tha, ya ek face ko alag transformation ke liye detach karna." },
      },
    ],
  },
  recipe: {
    heading: { en: "The 'remove doubles' workflow", ur: "'Remove doubles' workflow" },
    steps: [
      { step: { en: "Edit Mode, vertex select (`1`), `A` to select all.", ur: "Edit Mode, vertex select (`1`), `A` se sab select." } },
      { step: { en: "`M` → 'By Distance'. Bottom-left corner shows how many vertices were merged. Should be 0 on a clean mesh.", ur: "`M` → 'By Distance'. Bottom-left corner dikhata hai kitne vertices merge hue. Clean mesh par 0 hona chahiye." } },
      { step: { en: "If non-zero, eyeball the result. Mesh shouldn't look any different, only the duplicates were removed.", ur: "Agar non-zero, result dekho. Mesh different nahi dikhna chahiye, sirf duplicates remove hue." } },
      { step: { en: "Habit: run this before any export, after any mirror modifier apply, after any object-join.", ur: "Habit: kisi bhi export se pehle, mirror modifier apply ke baad, object-join ke baad chalao." } },
    ],
  },
  pitfalls: [
    { en: "Running 'By Distance' with a too-large threshold. Vertices that *should* be separate get merged, ruining the mesh. Default 0.0001m is safe; raise it only if you know there's a specific gap to close.", ur: "'By Distance' ko bohot bara threshold ke saath chalana. Jo vertices *alag* hone chahiye thay woh merge ho jati hain, mesh kharab hota hai. Default 0.0001m safe hai; sirf tab raise karo jab specific gap close karna ho." },
    { en: "Confusing 'At Center' with 'At Cursor'. They look similar in casual modeling but produce different results when the cursor isn't at the selection's center.", ur: "'At Center' aur 'At Cursor' ko confuse karna. Casual modeling mein similar lagte hain lekin different results dete hain jab cursor selection ke center par nahi hota." },
    { en: "Forgetting that 'Collapse' merges *components separately*. People expect it to merge everything into one and get surprised by multiple resulting vertices.", ur: "Bhulna ke 'Collapse' *components ko alag* merge karta hai. Log expect karte hain sab ek mein merge ho jayega aur multiple resulting vertices se surprised hote hain." },
  ],
  realWorld: [
    { en: "'By Distance' is the single most-used cleanup command in production. Every export pipeline runs it. Every mirror-modifier-apply triggers it. It's basically Blender's version of 'tidy up before guests come over'.", ur: "'By Distance' production mein sab se zyada use hone wala cleanup command hai. Har export pipeline yeh chalata. Har mirror-modifier-apply isko trigger karta. Yeh basically Blender ka 'guests aane se pehle ghar tidy karo' jaisa hai." },
    { en: "When porting models from Maya, 3ds Max, or sculpting apps, 'By Distance' is usually the first thing you run after import to clear up duplicate vertices that survived the conversion.", ur: "Jab Maya, 3ds Max, ya sculpting apps se models port karte ho, 'By Distance' aksar import ke baad sab se pehle chalate ho conversion mein bach gaye duplicate vertices clear karne ke liye." },
  ],
  related: [
    { id: "vertex-edge-face", note: { en: "Merge operates on vertices, the smallest mesh element.", ur: "Merge vertices par chalta hai, sab se chhota mesh element." } },
    { id: "3d-cursor", note: { en: "'Merge At Cursor' depends on cursor position.", ur: "'Merge At Cursor' cursor position par depend karta." } },
    { id: "selection-modes", note: { en: "Selection order matters for 'At First' and 'At Last'.", ur: "Selection order matter karta hai 'At First' aur 'At Last' ke liye." } },
  ],
};
