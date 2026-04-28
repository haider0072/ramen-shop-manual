import type { Chapter } from "@/lib/types";

export const signFrameChapter: Chapter = {
  id: "sign-frame",
  number: 5,
  title: "Sign Frame & Countertop",
  summary:
    "Front sign aur counter banane ke do tareeqe. Sign 3D cursor placement se, counter geometry duplicate-separate se. Same end result, alag setup, alag tradeoffs.",
  startsAt: 700,
  status: "complete",
  intro:
    "Yeh chapter dikhata hai ke ek hi cheez (precise placement) ko alag situations mein alag tools se kaise kiya jata hai. 3D cursor add operations ke liye useful hai. Duplicate-separate already-modeled geometry ke liye useful hai. Dono ka apna context hai.",
  concepts: [
    {
      title: "3D cursor ko face center pe snap karna",
      tagline: "Face select karo, Shift+S, Cursor to Selected. Cursor center pe.",
      timestamp: 715,
      whatItIs:
        "Edit mode mein face select karo. `Shift+S` se snap menu khulta hai. 'Cursor to Selected' chuno. 3D cursor selected face ke median point par snap ho jata hai. Yeh exact center hai, eyeballed nahi.",
      whyHere:
        "Sign ko building ke front face ke beech mein chahiye, perfect centered. 3D cursor wahan rakho, phir nayi plane add karoge, woh exact wahin banegi. Manual placement se kabhi exact center hit nahi hota.",
      figmaAnalogy:
        "Figma mein 'Align horizontal center' jaisa hai. Yahan tum manually pivot point ko target par rakhte ho, phir naya layer wahin spawn hota hai.",
      recipe: [
        "Edit mode, face select mode (`3`).",
        "Building ki front face select karo.",
        "`Shift+S` press karo, menu khulega.",
        "'Cursor to Selected' click karo. Cursor face center par.",
        "`Tab` out karo. `Shift+A` se Plane add karo, woh cursor ki position pe spawn hogi.",
      ],
    },
    {
      title: "Plane ko vertical wall sign mein convert karna",
      tagline: "R X 90 se rotate, S X se squeeze, E se extrude.",
      timestamp: 740,
      whatItIs:
        "New plane horizontal banta hai (XY plane). Sign vertical chahiye. `R X 90 Enter` press karke plane ko 90° rotate karo X axis pe. Phir `S X` se X axis pe scale (sign ki width). `S Z` se Z axis pe scale (height). Edge select karke `G Z` se top edge ko thoda neeche laao for proportions.",
      whyHere:
        "Sign ek thin rectangular panel hai jo wall pe lagi hai. Plane ka shape sahi hai (flat rectangle), rotation aur scaling se walls ke saath align hota hai.",
      recipe: [
        "Plane add karne ke baad object mode mein `R` `X` `90` `Enter`.",
        "Edit mode `Tab`. `S` `X` se width adjust karo.",
        "`S` `Z` se height adjust karo.",
        "Top ya bottom edge select karke `G` `Z` se proportion fine-tune karo.",
        "`A` sab select, `E` `Y` se thoda extrude karke 3D depth do.",
      ],
    },
    {
      title: "Counter banana already-existing edge se",
      tagline: "Building ki back wall ki ek edge select, Shift+D Y, P se separate. Counter ban gaya.",
      timestamp: 875,
      whatItIs:
        "Tutorial author ne pehle bhi face ko duplicate-separate kiya tha. Yahan edges se kar raha hai. Building ke andar ki back wall ki ek edge select karta hai (jis ka height aur position counter ke liye exact hai), `Shift+D Y` se Y axis pe move karta hai, phir `P → Selection` se naya object banata hai. Phir us edge se extrude karke counter ka full shape banata hai.",
      whyHere:
        "Counter wall ke saath aligned hona chahiye, wall se thoda aage. Manually height aur Y coordinate match karna mushkil hai. Wall ki edge use karne se 'wall jaisa' position automatically mil jata hai.",
      gameDevRelevance:
        "Game level layouts mein 'snap-to-grid' ya 'snap-to-existing-mesh' bohut common hai. Yeh exactly wahi mindset hai, sirf manual snap. Production mein add-ons (jaise EasyRef ya MeshMachine) iss workflow ko aur fast karte hain.",
      pitfalls: [
        "`Shift+D` ke baad transform cancel mat karna agar tum edge ko thoda aage move karna chahte ho. Cancel karoge to overlap reh jayegi.",
      ],
    },
  ],
};
