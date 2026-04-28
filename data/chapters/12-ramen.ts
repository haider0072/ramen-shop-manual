import type { Chapter } from "@/lib/types";

export const ramenChapter: Chapter = {
  id: "ramen",
  number: 12,
  title: "Ramen Decoration",
  summary:
    "Bowl ke andar noodles, ek egg (loop tools circle se shaped), aur ek pair chopsticks. Yahan curves trick aur proportional editing pehli baar use hote hain.",
  startsAt: 2247,
  status: "complete",
  intro:
    "Ramen bowl ka actual food banana yeh chapter hai. Tutorial author har ingredient ke liye alag technique demonstrate karta hai. Noodles curves se. Egg circle ko 'shape with proportional edit' karke. Chopsticks plane se. Variety teaching purpose ke liye intentional hai.",
  concepts: [
    {
      title: "Noodles curves se",
      tagline: "Plane → merge to single vertex → curve mein extrude. Pichhla cables technique.",
      timestamp: 2270,
      whatItIs:
        "Pichla 'Cables' chapter wala exact pattern. Plane add, merge to center, single vertex se top view mein noodle shapes extrude. Multiple noodle paths banate hain. Phir convert to curve, bevel depth se thickness do, subdivision se smooth karo.",
      whyHere:
        "Noodles tubular hain (cables ki tarah). Same workflow logically apply hota hai. Tutorial author intentionally repeat kar raha hai pattern ko reinforce karne ke liye.",
      recipe: [
        "Top view (`7` numpad).",
        "`Shift+A` plane, `Tab` edit mode, `M → At Center`.",
        "Vertex select. `E` se extrude karke noodle shape banao.",
        "Multiple noodles ke liye `Shift+D` se aur vertices, alag jagah extrude karo.",
        "`Tab` out, right-click, Convert to Curve.",
        "Geometry → Bevel → Round, Depth ~0.005.",
        "`Tab` in, `Alt+click` har loop end, `F` se fill (caps band karne ke liye, optional).",
        "Convert to Mesh, `Ctrl+2` subdivision.",
      ],
    },
    {
      title: "Egg shape Loop Tools 'To Circle' se",
      tagline: "Insert face ko Loop Tools → Circle se perfect circle banao.",
      timestamp: 2480,
      whatItIs:
        "Egg ke top par loop tools 'To Circle' operation use hota hai. Pehle Edit → Preferences → Extensions/Add-ons mein 'Loop Tools' enable karna parta hai (built-in extension hai). Phir face ya loop select karke right-click → Loop Tools → To Circle. Selected vertices ek perfect circle ke around redistribute ho jate hain.",
      whyHere:
        "Egg ke top par cracked-open look chahiye, lekin underlying shape clean circular hona chahiye. Manually vertices ko circle banana takleef hai, Loop Tools ek click mein perfect karta hai.",
      recipe: [
        "Edit → Preferences → Get Extensions → 'loop' search karke 'Loop Tools' enable karo.",
        "Edit mode mein face/loop select karo.",
        "Right-click → 'LoopTools' submenu → 'Circle'.",
        "Selected vertices perfect circle mein redistribute.",
      ],
      pitfalls: [
        "Add-on enable nahi hai to right-click menu mein 'LoopTools' option dikhayi nahi dega. Pehle preferences se on karna lazmi.",
      ],
    },
    {
      title: "Proportional Editing",
      tagline: "Ek vertex move karo, magnet ki tarah aas paas wale bhi follow karein. Shortcut: O",
      timestamp: 2515,
      whatItIs:
        "Edit mode mein `O` press karke proportional editing on karo. Header mein circle icon highlight ho jata hai. Ab kisi vertex ko `G` se move karoge, ek bara circle dikhega aur us circle ke andar wale vertices bhi follow karenge with falloff. Mouse wheel se circle ka radius adjust hota hai.",
      whyHere:
        "Egg shape banane ke liye (oval), ya organic curves achieve karne ke liye, ek-ek vertex move karna takleef hai. Proportional editing magnet ki tarah neighbor vertices ko bhi pull karta hai, smooth deformations dene ke liye.",
      figmaAnalogy:
        "Photoshop ya Figma ke 'liquify' jaisi feel. Tum ek point pakad ke kheechte ho, area ke saare points usi tension ke saath move karte hain.",
      pitfalls: [
        "Operation khatam karne ke baad `O` se off karna mat bhulna. Warna har transformation magnet effect ke saath hoga, jo aksar chahiye nahi hota.",
      ],
    },
    {
      title: "Chopsticks plane se aur Alt+D linked duplicate",
      tagline: "Plane bana, scale, bevel modifier. Phir Alt+D se doosri stick.",
      timestamp: 2670,
      whatItIs:
        "Bowl ke center se cursor pakad ke (`Shift+S → Cursor to Selected`), naya plane add karte hain. Top view mein scale down, edit mode mein extrude+scale to give it tapered chopstick shape. Object mode mein bevel modifier (small amount, 2 segments) for soft edges. Right-click → Shade Smooth. Phir `Alt+D` se linked duplicate, `R` se rotate, `G` se position adjust. Doosri chopstick.",
      whyHere:
        "Chopsticks pair mein hote hain, generally same shape. Linked duplicate use karne se ek chopstick ki shape change karoge to dono update. Useful jab thickness ya proportions iterate kar rahe ho.",
    },
  ],
};
