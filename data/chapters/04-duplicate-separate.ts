import type { Chapter } from "@/lib/types";

export const duplicateSeparateChapter: Chapter = {
  id: "duplicate-separate",
  number: 4,
  title: "Duplicate-Separate Technique",
  summary:
    "Author ka favorite technique. Existing geometry ko duplicate karo, alag object mein separate karo, naye details build karo. Yahi pattern aage hampar 10 baar use hoga.",
  startsAt: 415,
  status: "complete",
  intro:
    "Yeh chapter ek technique introduce karta hai jo workflow ke center mein hai. Naya object scratch se banane ke bajaye, jo existing geometry hai usse pieces nikalo aur unko alag objects bana lo. Faida yeh hai ke proportions automatically match karte hain (kyunki dono same source se hain) aur saathi geometry exactly aligned rehti hai.",
  concepts: [
    {
      title: "Insert (I) operator",
      tagline: "Selected face ke andar ek chhoti face inset banao.",
      timestamp: 420,
      whatItIs:
        "Face select mode mein `I` press karne se selected face ke andar ek inset face create hoti hai. Mouse drag se inset ki distance control hoti hai. Confirm karne ke baad ek nayi smaller face banti hai jo original ke andar nested hoti hai.",
      whyHere:
        "Window frames, sign borders, decorative panels, sab inset se banti hain. Ek face → ek inner face → extrude inwards = panel detail.",
      pitfalls: [
        "`Shift+I` press karoge to 'individual inset' hota hai (multiple faces ke individual insets, bina merge ke). Aam single inset `I` se hai.",
      ],
    },
    {
      title: "Loop select aur duplicate-separate",
      tagline: "Alt+click loop, Shift+D, P. Naya object ban gaya.",
      timestamp: 545,
      whatItIs:
        "Edit mode mein face loop ya edges select karo (`Alt+click`). `Shift+D` press karke duplicate karo, right-click se release-in-place karo (jagah change na ho). Phir `P` press karke 'Selection' choose karo. Selected duplicate alag object mein separate ho jata hai. Original mesh untouched.",
      whyHere:
        "Shop ke building ke kuch faces se nayi structures nikalni hain (countertop, sidewall, sign frame). Inko original building ke saath connected rakhne ka faida nahi, alag objects mein hone se modifiers individually control kar sakte hain. Lekin geometry copy karne se proportions aur position automatically perfect hain.",
      figmaAnalogy:
        "Figma mein agar tum kisi shape ka kuch hissa duplicate karke alag layer banate ho with same coordinates, exactly wahi yahan ho raha hai. Duplicate + Detach = naya layer at same position.",
      gameDevRelevance:
        "Real production mein levels banane ke time bhi yahi pattern use hota hai. Wall panels jo alag-alag materials honge unko ek bare wall se separate karna, fence ke posts ko fence se alag, sab is technique se.",
      recipe: [
        "Edit mode mein loop ya faces select karo (`Alt+click`).",
        "`Shift+D` press karo, right-click se cancel translate (jagah waisi rahegi).",
        "`P` press karo, 'Selection' chuno.",
        "`Tab` out karo, Outliner mein new object dikhega (default name 'Cube.001' jaisa).",
        "Click karke select karo, alag object hai ab.",
      ],
      pitfalls: [
        "Right-click translate ko cancel karta hai lekin `Shift+D` ko cancel nahi. Dono moves alag hain. Confirm to baat hai duplicate hua, lekin location move nahi hua.",
        "`P` karne par poori selection hi separate hoti hai. Partial geometry chahiye to selection refine karo pehle.",
      ],
    },
    {
      title: "Geometry recycle as a workflow philosophy",
      tagline: "Naya scratch nahi, jo hai usse extend karo.",
      timestamp: 600,
      whatItIs:
        "Tutorial author repeatedly demonstrate karta hai ke nayi shape banane se pehle, dekh lo, kya is scene mein already kuch hai jis ka edge/face nayi shape ke kaam aa sakta hai. Building ki ek edge counter ki front edge ban sakti hai. Building ki ek face curb ka source ban sakti hai. Yeh sirf shortcut nahi, philosophy hai.",
      whyHere:
        "Manually proportions match karna error-prone hai. Reuse se cheezein automatically aligned aur consistent hain. Plus speed bohut barh jati hai, ek scene ko 30 minute mein block out kar sakte ho is approach se.",
      gameDevRelevance:
        "Modular asset design ka core principle yeh hai. Tiles, building components, props, sab ek shared 'kit' se nikalte hain. Final scene yeh kit assemble karke banta hai. Industry standard practice hai.",
    },
  ],
};
