import type { Chapter } from "@/lib/types";

// Inline SVGs for diagrams. Editorial style, monochrome with one accent.
// Stroke uses currentColor so they adapt to light/dark.

const svgFrameFromCircle = `
<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chair frame built from a single circle vertex">
  <g fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
    <!-- Stage 1: small circle, top-left -->
    <text x="20" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.45">01 · circle, 18 verts</text>
    <circle cx="80" cy="100" r="38" stroke-dasharray="2 3" opacity="0.5"/>
    <g fill="currentColor" stroke="none">
      <circle cx="118" cy="100" r="2.4"/>
      <circle cx="113" cy="115" r="1.6" opacity="0.45"/>
      <circle cx="100" cy="125" r="1.6" opacity="0.45"/>
      <circle cx="80" cy="138" r="1.6" opacity="0.45"/>
      <circle cx="60" cy="125" r="1.6" opacity="0.45"/>
      <circle cx="47" cy="115" r="1.6" opacity="0.45"/>
      <circle cx="42" cy="100" r="1.6" opacity="0.45"/>
      <circle cx="47" cy="85" r="1.6" opacity="0.45"/>
      <circle cx="60" cy="75" r="1.6" opacity="0.45"/>
      <circle cx="80" cy="62" r="1.6" opacity="0.45"/>
      <circle cx="100" cy="75" r="1.6" opacity="0.45"/>
      <circle cx="113" cy="85" r="1.6" opacity="0.45"/>
    </g>
    <text x="118" y="92" font-family="ui-monospace, monospace" font-size="9" fill="currentColor" stroke="none" opacity="0.7">picked vertex</text>

    <!-- Stage 2: vertex moved + extruded -->
    <text x="200" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.45">02 · shift+D, then E…</text>
    <circle cx="260" cy="100" r="32" stroke-dasharray="2 3" opacity="0.25"/>
    <g fill="currentColor" stroke="none" opacity="0.3">
      <circle cx="292" cy="100" r="1.6"/>
      <circle cx="288" cy="115" r="1.6"/>
      <circle cx="278" cy="123" r="1.6"/>
      <circle cx="260" cy="132" r="1.6"/>
      <circle cx="242" cy="123" r="1.6"/>
      <circle cx="232" cy="115" r="1.6"/>
      <circle cx="228" cy="100" r="1.6"/>
      <circle cx="232" cy="85" r="1.6"/>
      <circle cx="242" cy="77" r="1.6"/>
      <circle cx="260" cy="68" r="1.6"/>
      <circle cx="278" cy="77" r="1.6"/>
      <circle cx="288" cy="85" r="1.6"/>
    </g>
    <!-- new path: extrude up then over -->
    <path d="M 295 100 L 280 100 L 280 70 L 295 70 L 320 70" stroke="var(--accent, #1B4D3E)" stroke-width="1.5"/>
    <g fill="var(--accent, #1B4D3E)" stroke="none">
      <circle cx="280" cy="100" r="2.2"/>
      <circle cx="280" cy="70" r="2.2"/>
      <circle cx="295" cy="70" r="2.2"/>
      <circle cx="320" cy="70" r="2.2"/>
    </g>

    <!-- Stage 3: full chair silhouette -->
    <text x="360" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.45">03 · final path</text>
    <!-- right side leg + seat -->
    <path d="M 400 170 L 400 110 L 420 110 L 420 80 L 460 80" stroke="var(--accent, #1B4D3E)" stroke-width="1.5"/>
    <!-- mirror left side -->
    <path d="M 400 170 L 400 110 L 380 110" stroke="currentColor" stroke-width="1" opacity="0.35"/>
    <line x1="380" y1="170" x2="420" y2="170" stroke="currentColor" stroke-width="1" opacity="0.35" stroke-dasharray="2 2"/>
    <text x="376" y="195" font-family="ui-monospace, monospace" font-size="9" fill="currentColor" stroke="none" opacity="0.55">ground</text>
  </g>
</svg>
`;

const svgOriginShift = `
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Origin point pushed to one edge of a plane">
  <g fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round">
    <!-- Default: origin centered -->
    <text x="20" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.45">default · origin centered</text>
    <rect x="40" y="60" width="160" height="100"/>
    <line x1="40" y1="160" x2="200" y2="60" opacity="0.15" stroke-dasharray="2 2"/>
    <line x1="40" y1="60" x2="200" y2="160" opacity="0.15" stroke-dasharray="2 2"/>
    <g fill="var(--accent, #1B4D3E)" stroke="none">
      <circle cx="120" cy="110" r="3.5"/>
    </g>
    <text x="125" y="106" font-family="ui-monospace, monospace" font-size="9" fill="var(--accent, #1B4D3E)" stroke="none">origin</text>
    <text x="40" y="180" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">scale grows symmetrically (both sides)</text>

    <!-- After G+Y+1 in edit mode -->
    <text x="270" y="22" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none" opacity="0.45">after G + Y + 1 (edit mode)</text>
    <rect x="320" y="60" width="120" height="100"/>
    <g fill="var(--accent, #1B4D3E)" stroke="none">
      <circle cx="320" cy="110" r="3.5"/>
    </g>
    <text x="285" y="114" font-family="ui-monospace, monospace" font-size="9" fill="var(--accent, #1B4D3E)" stroke="none">origin</text>
    <!-- arrow showing scale grows from origin -->
    <line x1="320" y1="180" x2="440" y2="180" stroke="currentColor" stroke-width="1" opacity="0.55"/>
    <polyline points="435,176 442,180 435,184" stroke="currentColor" stroke-width="1" fill="none" opacity="0.55"/>
    <text x="320" y="195" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" stroke="none" opacity="0.55">scale grows in one direction only</text>
  </g>
</svg>
`;

const svgLinkedDuplicate = `
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Linked duplicate shares mesh data between two objects">
  <g fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round">
    <!-- Mesh data box (shared) -->
    <rect x="170" y="20" width="140" height="40" rx="3"/>
    <text x="240" y="38" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none">mesh data</text>
    <text x="240" y="52" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">shared</text>

    <!-- Lines down to two objects -->
    <line x1="220" y1="62" x2="120" y2="110" stroke="var(--accent, #1B4D3E)" stroke-width="1"/>
    <line x1="260" y1="62" x2="360" y2="110" stroke="var(--accent, #1B4D3E)" stroke-width="1"/>

    <!-- Object A -->
    <rect x="60" y="115" width="120" height="60" rx="3"/>
    <text x="120" y="138" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none">Chair.001</text>
    <text x="120" y="155" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">own location</text>
    <text x="120" y="167" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">own rotation</text>

    <!-- Object B -->
    <rect x="300" y="115" width="120" height="60" rx="3"/>
    <text x="360" y="138" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" fill="currentColor" stroke="none">Chair.002</text>
    <text x="360" y="155" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">own location</text>
    <text x="360" y="167" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" stroke="none" opacity="0.55">own rotation</text>

    <!-- Edit arrow -->
    <text x="240" y="195" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="var(--accent, #1B4D3E)" stroke="none">edit one, both update</text>
  </g>
</svg>
`;

export const chairChapter: Chapter = {
  id: "chair",
  number: 11,
  title: "Chair Modeling",
  summary:
    "Counter ke saamne stool banana hai. Frame ek single circle se nikalti hai, seat alag plane se. Phir alt+D se dusri kursi banegi, jiska mesh pehli ke saath linked rahega.",
  startsAt: 1941, // 32:21
  status: "complete",
  intro:
    "Yahan tak tumne mostly destructive modeling ki hai. Mesh banao, edit karo, repeat. Is chapter mein do nayi cheezein aati hain. Pehli, **curve workflow**: ek path khinch ke usko pipe banwa lena, manually har section model karne ke bajaye. Doosri, **linked duplicate** (`alt+D`), jo Figma ke component ki tarah kaam karta hai. Kal ko jab tum apni game ki kursiyon ya railings ya lamps banaoge, yahi do tools sab se zyada use honge.",
  concepts: [
    {
      title: "Frame ek hi vertex se",
      tagline: "Circle add karo, ek vertex pakdo, baki frame usi se nikal aayega",
      timestamp: 1941, // 32:21
      visual: { svg: svgFrameFromCircle, alt: "Frame from a single circle vertex" },
      whatItIs:
        "Tutorial yahan ek interesting choice karta hai: poora chair frame banana hai, lekin start primitive cylinder ya curve nahi hai. Ek **mesh circle** add hota hai (18 vertices, kaafi hain), aur uske ek vertex ko `Shift+D` se duplicate karke usi se chair ka silhouette `E` se extrude hota chala jaata hai. End mein jo bachta hai woh ek connected wireframe path hai. Circle ke baki vertices reh jaate hain neeche, baad mein useful hote hain seat ki position ke liye.",
      whyHere:
        "Chair ka frame ek tubular metal pipe hai. Aisi cheez ko proper mesh banane ka matlab hota: cylinder lo, har joint pe rotate karo, har section ka radius match karao, smooth shading fix karo. Bohut kaam, bohut chance galti ka. Yahan strategy alag hai, sirf path banao. Baad mein curve mein convert ho jayega, aur Blender khud is path ko pipe bana dega. 30 minute ka kaam 30 second mein nikal jata hai.",
      whyNotAlt:
        "Aam taur pe log Bezier curve directly draw karna sochenge. Lekin Bezier handles ke saath crisp 90 degree corners banana takleef deh hai, especially jab tumhe specific vertex bevel chahiye. Mesh circle se start karne mein yeh fayda hai ke `Ctrl+Shift+B` ka vertex bevel use ho sakta hai, jo geometry ko round corners deta hai bina handle drama ke. Phir baad mein curve mein convert.",
      figmaAnalogy:
        "Figma mein agar tumne kabhi vector path se shape banayi hai aur usko stroke diya hai, soch lo bas wahi yahan ho raha hai, sirf 3D mein. Path = Blender mein curve. Stroke width = bevel depth.",
      gameDevRelevance:
        "Tumhare game ke jitne bhi tubular props hain (railings, ladders, lamp posts, fence frames, weapon racks), sab is exact pattern se banenge. Path khinch lo, curve mein badlo, depth set karo, done. Engine mein optimal mesh ban ke export hota hai.",
      recipe: [
        "`Shift+A` se Mesh, Circle add karo. Vertices field mein 18 type karo, zyada matlab nahi.",
        "`Tab` edit mode mein jao, `S` se thoda chhota karo aur top view (`7` numpad) se dekho.",
        "`1` press karke vertex select mode. Ek vertex pick karo (jahan se chair ki right leg start hogi).",
        "`Shift+D` phir `Y` press karke duplicate ko Y axis pe slide karao, origin tak.",
        "`E` phir `Z`, leg ko upar tak extrude karo.",
        "`E` phir `Y`, ab seat ki taraf extrude.",
        "Joint waala vertex select karke `Ctrl+Shift+B` (vertex bevel), mouse wheel se cuts barhao smoothness ke liye.",
      ],
      pitfalls: [
        "18 vertices kaafi hain. 32 ya 64 mat lo, baad mein subdivision lagani hogi aur poora mesh dense ho jayega.",
        "`Shift+D` aur `E` ka farak yaad rakho. `Shift+D` se naya disconnected vertex banta hai. `E` connected extrude hai. Pehla vertex move karne ke liye `Shift+D` use hua, aage ka frame `E` se hi connected rakhna hai.",
      ],
    },
    {
      title: "Seat banane ka origin trick",
      tagline: "Plane ki geometry ko shift karke origin ko ek edge pe le aao",
      timestamp: 2009, // 33:29
      visual: { svg: svgOriginShift, alt: "Origin shifted to plane edge by moving geometry" },
      whatItIs:
        "Seat ke liye plane add hota hai. Lekin plane ki geometry edit mode mein `G+Y+1` se 1 unit shift kar di jaati hai. Object mode mein nikalo, scale karo, ya rotate karo, sab kuch ab us shifted edge se hota hai, center se nahi. Origin point apni jagah par hi reh gaya, geometry usse aage badh gayi.",
      whyHere:
        "Seat ko frame ke saath align karna hai aur baad mein chair ko rotate karna hai. Agar pivot center pe ho toh rotate karte waqt seat hawa mein ulti latki nazar aati hai. Origin ko front edge pe rakh do, ab har transformation ka behavior physical lagta hai. Door ka hinge edge pe hota hai, isliye doors realistically khulte hain. Yahan wahi.",
      figmaAnalogy:
        "Figma mein layer ke transform anchor ke 9 points hote hain (top-left, center, etc.), aur tum decide karte ho rotation kahan se hogi. Blender mein origin wahi role play karta hai, sirf 9 points ki binding nahi hai, kahin bhi rakh sakte ho.",
      gameDevRelevance:
        "Yeh sab se important habit hai jo abhi se daal lo. Unity/Unreal mein har asset ka pivot critical hota hai. Door ka pivot hinge pe hona chahiye, sword ka grip pe, wheel ka center pe. Galat origin matlab engine mein har asset ko re-pivot karna padega. Blender mein theek se kar lo, hours bach jate hain.",
      recipe: [
        "`Shift+A` se plane add karo (3D cursor jahan hai, wahan banega).",
        "`Tab` edit mode, `A` se sab vertices select karo.",
        "`G` `Y` `1` `Enter`. Geometry 1 unit Y axis pe move ho gayi, origin point peeche reh gaya.",
        "`Tab` out karo. Ab `S` press karo, scale us peeche waale origin se hogi.",
        "Last step: `Ctrl+A` -> Apply Scale. Object scale 1 pe reset ho jayegi, lekin geometry waisi hi rahegi.",
      ],
      pitfalls: [
        "Origin shift karne ke liye geometry **edit mode mein** move karni hai. Object mode mein move karoge toh poora object hi shift ho jayega, origin saath chala jayega. Yeh galti har beginner karta hai.",
        "Scale apply karna mat bhulna. Agar object ka scale 2 ya 3 reh gaya, jab tum bevel modifier lagaoge to amount us scale se multiply hoga aur visible inconsistency aayegi. Always `Ctrl+A` Apply Scale before adding modifiers.",
      ],
    },
    {
      title: "Mesh ko curve mein convert karna",
      tagline: "Frame aur seat join karo, phir convert. Baki Blender khud kar lega.",
      timestamp: 2064, // 34:24
      whatItIs:
        "Frame aur seat dono select karo, `Ctrl+J` se join. Right click karke 'Convert to Curve'. Convert hote waqt face data discard ho jata hai (Blender warning bhi nahi deta), sirf vertices aur edges bachte hain. Properties mein curve ka geometry section khulta hai, jahan **bevel depth** set karte ho. Bas, poora frame aur seat outline ek tube ban gaye.",
      whyHere:
        "Tubular shape jaise pipe, cable, rail, frame, sab ke liye yeh fastest tareeqa hai. Manually har section ka mesh banane ke bajaye, ek path lo, depth do, done. Aur agar baad mein motai change karni hai, ek field badlo, poora frame update ho jata hai. Non-destructive.",
      whyNotAlt:
        "Skin modifier bhi exist karta hai, jo har vertex pe radius set karne deta hai. Skin ka use case alag hai (organic, branching shapes jaise tree branches). Constant-thickness pipe ke liye curve overkill nahi, balke simpler aur cleaner hai.",
      gameDevRelevance:
        "Production studios literally yahi karte hain. Cables, ropes, fences, even simple plant stems, sab curves se. Final export se pehle 'Apply Modifier' karke mesh bana lo, FBX ya glTF mein clean geometry ja rahi hai.",
      recipe: [
        "Frame select karo, phir `Shift+click` se seat add karo. Last clicked = active object, isi ka data bachega join ke baad.",
        "`Ctrl+J` press karo. Dono ek hi mesh object ban gaye.",
        "Right click karo, **Convert to Curve** chuno. Faces gone, lekin frame ke liye faces chahiye bhi nahi the.",
        "Properties panel (right side) mein green curve icon, **Geometry** section, **Bevel** type ko Round rakho, **Depth** ko ~0.02 pe set karo.",
      ],
      pitfalls: [
        "Modifiers (jaise bevel modifier) reset ho sakte hain conversion ke baad. Isliye conversion modeling khatam hone ke baad karo, beech mein nahi.",
        "Sharp corner pe agar pipe pinch karta dikhe, **Geometry > Resolution** badhao (3 ya 4 enough hai).",
      ],
    },
    {
      title: "Ctrl+1, instant subdivision",
      tagline: "Properties panel kholne ki zaroorat nahi, shortcut yaad kar lo",
      timestamp: 2088, // 34:48
      whatItIs:
        "`Ctrl+1` selected object pe Subdivision Surface modifier add karta hai with viewport level 1. `Ctrl+2`, `Ctrl+3` higher levels deta hai. Bilkul wahi modifier jo Properties panel se add hota hai, bas keystroke se. Iss tutorial mein 20+ jagah lagana parega, har baar panel kholne ka effort waste hai.",
      whyHere:
        "Curve to mesh conversion ke baad pipe thoda angular lagta hai. Subdivision ek level ki bhi smoothness add karta hai jo dramatically better dikhata hai. Iterating mein speed important hai, yeh shortcut har 5 second bachata hai.",
      gameDevRelevance:
        "Game asset workflow mein high-poly aur low-poly dono banate ho. High-poly mein subdivision se smooth surface, baad mein low-poly pe normal map bake karte ho. Subdivision shortcut iss workflow ka entry point hai.",
      pitfalls: [
        "Viewport level 3+ rakhne se laptop ke fans full speed pe chal padenge. Final render time hi badhao, normally 1 ya 2 hi rakho.",
        "Sharp corners bachane hain toh **supporting loops** (`Ctrl+R`) add karo subdivision ke saath. Warna sab kuch round ho jata hai.",
      ],
    },
    {
      title: "Parent karna aur Alt+D ka jadu",
      tagline: "Yeh seedha Figma ka component-instance pattern hai",
      timestamp: 2173, // 36:13
      visual: { svg: svgLinkedDuplicate, alt: "Linked duplicate sharing mesh data" },
      whatItIs:
        "Do alag concepts hain. **Parenting** (`Ctrl+P`): ek object ko doosre se attach karna. Parent move ho toh child saath chalta hai. **Linked duplicate** (`Alt+D`): copy banao lekin mesh data shared rahe. Ek ki shape badlo, doosri mein bhi badal jayegi. Tutorial mein yeh seat aur frame ko parent karte hain ek doosre se, phir poori chair ko `Alt+D` se duplicate karte hain second chair banane ke liye.",
      whyHere:
        "Two chairs hain, dono same shape, alag positions/rotation. Agar regular `Shift+D` se duplicate karte to do bilkul independent objects ban jaate. Future mein bevel depth ya seat ki shape change karni padi to dono pe alag karna padta. `Alt+D` se ek hi source hai, ek edit, dono update.",
      whyNotAlt:
        "Collection Instance bhi exist karti hai (zyada powerful, hierarchical). Lekin do simple chairs ke liye overkill hai. Alt+D simplest level pe wahi kaam karta hai.",
      figmaAnalogy:
        "Yeh exactly Component aur Instance hai. `Alt+D` = Create Instance. `Shift+D` = naya independent layer. Detach instance ki tarah agar tum linked duplicate ka mesh edit mode mein change karte ho, original bhi badlega (matlab edit mode bhi shared hai). Sirf object-level transforms (G/R/S object mode mein) independent rehte hain.",
      gameDevRelevance:
        "Forest mein 200 trees? Linked instances. Building windows, fence posts, lamp posts, sab linked. Memory bachti hai aur global tweaks trivial hote hain. FBX/glTF exporters instances ko detect karte hain aur engine optimization ke saath export karte hain.",
      recipe: [
        "Parenting: child select karo first, phir `Shift+click` parent (parent ko active hona zaroori hai, last clicked = active).",
        "`Ctrl+P` -> 'Object'. Ab parent move/rotate karo, child saath chalega.",
        "Linked dupe: parent select, `Alt+D` press karo, mouse move karke jagah pakdo, click to place.",
        "Test karo: pehli chair ki curve depth 0.03 kar do, doosri bhi update hogi. Yahi confirmation hai linkage ka.",
        "Position adjust: `R` rotate, `G+Shift+Z` se Z axis lock rakh ke X-Y mein move (next concept).",
      ],
      pitfalls: [
        "Parenting mein active object parent banta hai. Order ulta lagta hai pehli baar (last clicked = active = parent). Galti se child ko parent banane ka risk hai, dhyan se select karo.",
        "Linked duplicate ki copy mein agar tum edit mode mein geometry edit karte ho, original bhi badal jayega (yahi to point hai). Independent edit chahiye to `U` -> Object Data se 'Make Single User' karna padega, jo linkage tod deta hai.",
      ],
    },
    {
      title: "G + Shift + Z, ek subtle ergonomic trick",
      tagline: "Axis exclude karna, lock karne ke ulta",
      timestamp: 2210, // 36:50
      whatItIs:
        "Normally `G+X` ka matlab hota X axis pe move karna (lock to X). Lekin `G+Shift+X` matlab X **exclude** karo, baki dono axes (Y aur Z) mein freely move karne do. `Shift` axis lock ko invert kar deta hai.",
      whyHere:
        "Chair ko ground pe fixed height pe rakhna hai (Z lock), lekin X-Y mein arrange karna hai. `G+Z` waste hota (sirf Z hi move hota). `G+Shift+Z` declarative hai: 'Z chhod ke baki mein move karne do'.",
      figmaAnalogy:
        "Figma mein `Shift+drag` axis lock karta hai (ek direction mein). Blender mein `G+axis` wahi kaam karta hai. `Shift+axis` ulta hai, 'isko chhod ke baki sab axes mein freedom'.",
      gameDevRelevance:
        "Level layout mein assets ko ground pe rakhte hue arrange karna har scene mein hota hai, aur Z lock chahiye hi. Yeh shortcut hazaaron baar use hoga.",
    },
  ],
};
