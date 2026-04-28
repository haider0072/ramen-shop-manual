import type { DeepConcept } from "@/lib/deep-types";

export const assetBrowserConcept: DeepConcept = {
  id: "asset-browser",
  group: "interface",
  title: { en: "Asset Browser", ur: "Asset Browser" },
  tagline: {
    en: "A visual library of your reusable models, materials, and poses. Drag and drop into any scene. Built-in version of Megascans-style asset workflows.",
    ur: "Tumhare reusable models, materials, aur poses ki visual library. Kisi bhi scene mein drag and drop. Built-in Megascans-style asset workflow.",
  },
  whatItIs: [
    {
      en: "The Asset Browser is an editor (split a panel and switch type → Asset Browser) that shows thumbnails of any .blend file marked as an Asset Library. You drag from there straight into the 3D viewport.",
      ur: "Asset Browser editor (panel split + type switch → Asset Browser) jo Asset Library marked .blend files ki thumbnails dikhata. Wahan se 3D viewport mein direct drag.",
    },
    {
      en: "To add an asset: select an object/material → right-click → 'Mark as Asset'. Save the file in your asset library folder. The thumbnail auto-generates; you can override with a custom one.",
      ur: "Asset add karne ke liye: object/material select → right-click → 'Mark as Asset'. File asset library folder mein save. Thumbnail auto-generate; custom override kar sakte.",
    },
  ],
  variants: {
    heading: { en: "Asset Browser features", ur: "Asset Browser features" },
    items: [
      {
        name: "Mark as Asset",
        description: { en: "Right-click on object/material/pose/world → Mark as Asset. Item now appears in the browser when this file is in a library folder.", ur: "Object/material/pose/world par right-click → Mark as Asset. Item ab browser mein dikhe jab file library folder mein." },
      },
      {
        name: "Asset Library Setup",
        description: { en: "Edit → Preferences → File Paths → Asset Libraries → Add. Point to a folder; every .blend in it scans for assets.", ur: "Edit → Preferences → File Paths → Asset Libraries → Add. Folder point; us mein har .blend assets ke liye scan." },
      },
      {
        name: "Asset Catalogs",
        description: { en: "Tag-style organization within a library. 'Furniture / Chairs' / 'Furniture / Tables'. Manage from the browser's left sidebar.", ur: "Library ke andar tag-style organization. 'Furniture / Chairs' / 'Furniture / Tables'. Browser ka left sidebar manage." },
      },
      {
        name: "Drag & Drop",
        description: { en: "Drag an asset from browser into 3D viewport. Mesh objects spawn at cursor; materials drop onto the object you hover over.", ur: "Asset ko browser se 3D viewport mein drag. Mesh objects cursor par spawn; materials hover wale object par drop." },
      },
      {
        name: "Pose Library (linked to Action)",
        description: { en: "Mark armature poses as assets. Browser shows thumbnails; click to apply pose to the active rig. Modern replacement for the old pose library.", ur: "Armature poses ko assets mark. Browser thumbnails dikhata; click karke pose active rig par apply. Purani pose library ka modern replacement." },
      },
      {
        name: "Custom Preview",
        description: { en: "Right-click → Edit Asset Metadata → set custom thumbnail. Useful when auto-render doesn't capture the asset's silhouette well.", ur: "Right-click → Edit Asset Metadata → custom thumbnail. Auto-render asset ki silhouette achi capture nahi karta to useful." },
      },
      {
        name: "Description / Author / Tags",
        description: { en: "Asset metadata fields. Searchable in the browser. Critical for big libraries (1000+ assets).", ur: "Asset metadata fields. Browser mein searchable. Bare libraries (1000+ assets) ke liye critical." },
      },
      {
        name: "Drag as Append vs Link",
        description: { en: "Top of asset browser has 'Import Type' dropdown: Append (copy in), Link (reference), Append Reuse (copy first time, link after). Set per drag.", ur: "Asset browser ke top par 'Import Type' dropdown: Append (copy), Link (reference), Append Reuse (pehli baar copy, baad mein link). Per drag set." },
      },
    ],
  },
  recipe: {
    heading: { en: "Building a personal asset library", ur: "Personal asset library banao" },
    steps: [
      { step: { en: "Create folder `~/BlenderAssets/`. Inside it: `Props.blend`, `Materials.blend`, `Characters.blend`.", ur: "Folder `~/BlenderAssets/` banao. Andar: `Props.blend`, `Materials.blend`, `Characters.blend`." } },
      { step: { en: "Open `Props.blend`. Add or import the props you want reusable. Right-click each → Mark as Asset. Save.", ur: "`Props.blend` kholo. Reusable props add/import. Har par right-click → Mark as Asset. Save." } },
      { step: { en: "Edit → Preferences → File Paths → Asset Libraries → Add. Point to `~/BlenderAssets/`.", ur: "Edit → Preferences → File Paths → Asset Libraries → Add. `~/BlenderAssets/` point." } },
      { step: { en: "In any new file: split a panel, switch to Asset Browser, pick your library, drag assets in.", ur: "Kisi bhi new file mein: panel split, Asset Browser switch, library pick, assets drag." } },
    ],
  },
  pitfalls: [
    { en: "Forgetting to save the file after marking assets: nothing appears in the library.", ur: "Assets mark karne ke baad file save bhulna: library mein kuch nahi dikhta." },
    { en: "Custom thumbnails reset after re-saving: blender regenerates if 'Generate Preview' wasn't disabled. Lock previews in metadata.", ur: "Re-save par custom thumbnails reset: 'Generate Preview' disable nahi to blender regenerate. Metadata mein previews lock." },
    { en: "Asset library path on a different machine breaks: assets disappear. Use synced folder (Dropbox, iCloud) or relative library paths.", ur: "Doosri machine par library path break: assets gayab. Synced folder (Dropbox, iCloud) ya relative library paths." },
  ],
  related: [
    { id: "append-link", note: { en: "Asset browser is a UI on top of append/link.", ur: "Asset browser append/link ke upar UI." } },
  ],
};
