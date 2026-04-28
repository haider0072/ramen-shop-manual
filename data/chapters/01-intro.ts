import type { Chapter } from "@/lib/types";

export const introChapter: Chapter = {
  id: "intro",
  number: 1,
  title: "Intro & Default Scene Setup",
  summary:
    "Default scene clean karna, cube ka origin neeche shift karna takay snapping aasaan ho. Yeh chote tricks aage ki sab modeling ko predictable banate hain.",
  startsAt: 0,
  status: "complete",
  intro:
    "Tutorial fast-paced shuru hota hai. Lekin pehle do minute mein kuch foundational habits demonstrate hoti hain jo baad mein har object par apply hongi. Yahan focus shape banane par nahi hai, scene setup par hai.",
  concepts: [
    {
      title: "Default scene clean karna",
      tagline: "Light delete, cube reuse. Minimal start.",
      timestamp: 100, // ~01:40
      whatItIs:
        "Blender khulta hai with cube, camera, aur ek default light. Tutorial light ko `X` press karke delete kar deta hai (kyunki khud apni lighting design karega), cube ko reuse karta hai building ka base banane ke liye.",
      whyHere:
        "Saaf slate par kaam karna asaan hota hai. Default light interfere kar sakti hai jab tum khud strategic lighting setup kar rahe ho. Camera ko rakhna hai kyunki uska orientation already perspective view ke liye decent hai.",
      pitfalls: [
        "Camera bhi delete mat karna. Aage `0` numpad press karke camera view dekhna hai. Naya camera add karna parega phir.",
      ],
    },
    {
      title: "Cube ka origin neeche shift karna",
      tagline: "Edit mode mein 1 unit upar move karo. Origin nichlay face par aa jayega.",
      timestamp: 110, // ~01:50
      whatItIs:
        "Default cube ka origin uske beech mein hota hai (0,0,0). Tutorial cube ko edit mode mein le ja kar `G+Z+1+Enter` press karta hai. Geometry 1 meter upar shift ho jati hai. Origin world origin par hi reh jata hai, jo ab cube ka bottom face ban jata hai.",
      whyHere:
        "Default cube 2m hota hai. Origin ko bottom par lana matlab cube ko ground par snap karna trivial ho jata hai. Scale karoge to bottom fix rahega aur top oopar grow hoga, ground ke andar nahi jayega. Yeh chhoti chotee ergonomic decision saari modeling smooth banati hai.",
      figmaAnalogy:
        "Figma mein layer ka transform anchor top-left ya custom point set kar sakte ho. Yahan exactly wahi ho raha hai 3D mein. Origin = anchor point. Cube ka bottom-edge = 'bottom-center' anchor.",
      gameDevRelevance:
        "Game props mein har asset ka pivot 'sensible' jagah hona chahiye. Ground-aligned objects (buildings, props, characters) ka origin feet/base par. Engine mein import karte hi snap-to-ground kaam karta hai bina pivot adjust kiye.",
      recipe: [
        "Cube select karo, `Tab` press karke edit mode mein jao.",
        "`A` se sab vertices select karo.",
        "`G` `Z` `1` `Enter`. Geometry 1m upar shift hogi.",
        "`Tab` se wapas object mode mein. Origin (orange dot) ab bottom face par hai.",
      ],
      pitfalls: [
        "Yeh trick edit mode mein hi karni hai. Object mode mein move karoge to origin saath shift ho jayega aur fayda nahi milega.",
        "Default cube ki size badal di to 1 unit move kaafi nahi hoga. Pehle `S` apply karo phir geometry shift karo, ya cube ki actual height ke half ke barabar move karo.",
      ],
    },
  ],
};
