import type { DeepConcept } from "@/lib/deep-types";

export const appendLinkConcept: DeepConcept = {
  id: "append-link",
  group: "interface",
  title: { en: "Append vs Link (Library Reuse)", ur: "Append vs Link (Library Reuse)" },
  tagline: {
    en: "Pull assets from another .blend file. Append makes a copy you own; Link keeps the original as the source of truth.",
    ur: "Doosri .blend file se assets lao. Append apni copy banao; Link original ko source of truth rakho.",
  },
  whatItIs: [
    {
      en: "**Append** (`File → Append`) imports an object/material/collection from another .blend file as a *copy*. The new file owns the data; edits don't affect the original.",
      ur: "**Append** (`File → Append`) doosri .blend se object/material/collection ko *copy* import. Naya file data own karta; edits original par effect nahi.",
    },
    {
      en: "**Link** (`File → Link`) imports a *reference* to data in another file. The original is the source of truth. Edits to the original propagate to every file that links it.",
      ur: "**Link** (`File → Link`) doosri file ke data ka *reference*. Original source of truth. Original par edits saari linked files mein propagate.",
    },
  ],
  whyItExists: [
    {
      en: "Big productions reuse assets. A character used in 12 shots shouldn't be duplicated 12 times. Linked from a master file, fix a bug in the master and all 12 shots update. Append is for one-off reuse where the asset becomes part of the new project.",
      ur: "Bare productions assets reuse karte. Aik character 12 shots mein 12 baar duplicate nahi. Master file se linked, master mein bug fix saari 12 shots update. Append one-off reuse ke liye jab asset naye project ka hissa ban jaye.",
    },
  ],
  variants: {
    heading: { en: "What you can append/link", ur: "Kya append/link kar sakte" },
    items: [
      {
        name: "Object",
        description: { en: "Single mesh/light/camera object. Linked objects can't be edited directly; you make a 'library override' to pose/animate them.", ur: "Single mesh/light/camera object. Linked objects directly edit nahi; pose/animate karne ke liye 'library override'." },
      },
      {
        name: "Collection",
        description: { en: "Whole hierarchy. Used to bring in 'Character' or 'Set' as a unit. Often the preferred unit for linked assets.", ur: "Poora hierarchy. 'Character' ya 'Set' ko unit ke taur par. Aksar linked assets ka preferred unit." },
      },
      {
        name: "Material",
        description: { en: "Just the material. Useful for sharing a unified look across many .blend files.", ur: "Sirf material. Aik unified look kai .blend files mein share karne ke liye." },
      },
      {
        name: "World",
        description: { en: "World shader (HDRI setup, sky, color management). Reuse the same lighting environment.", ur: "World shader (HDRI setup, sky, color management). Same lighting environment reuse." },
      },
      {
        name: "Image / Texture / Action / Brush / Node Group",
        description: { en: "Specific data blocks. Useful when you want one asset without dragging its parent object.", ur: "Specific data blocks. Aik asset chahiye lekin parent object nahi to useful." },
      },
      {
        name: "Library Override (linked only)",
        description: { en: "Right-click linked object → Library Override → Make. Lets you locally pose/animate a linked rig without breaking the link to the master.", ur: "Linked object par right-click → Library Override → Make. Master ka link tode baghair linked rig locally pose/animate." },
      },
      {
        name: "Make Local (linked only)",
        description: { en: "Convert a linked data block into a local copy. Severs the link permanently. Like 'unlinking' in Sketch/Figma.", ur: "Linked data block ko local copy. Link permanently break. Sketch/Figma ke 'unlink' jaisa." },
      },
    ],
  },
  recipe: {
    heading: { en: "Reusing a character across shots", ur: "Character ko shots mein reuse" },
    steps: [
      { step: { en: "Make a 'Character.blend' with the character collection set up cleanly.", ur: "'Character.blend' banao character collection cleanly setup." } },
      { step: { en: "In each shot file: File → Link → navigate to Character.blend → Collections → pick the character collection.", ur: "Har shot file mein: File → Link → Character.blend → Collections → character collection pick." } },
      { step: { en: "Right-click the linked character in Outliner → Library Override → Make. Now you can pose/animate it in the shot.", ur: "Outliner mein linked character par right-click → Library Override → Make. Ab shot mein pose/animate." } },
      { step: { en: "Update the master Character.blend (fix a bug, change material). Reopen shots: changes auto-pull.", ur: "Master Character.blend update (bug fix, material change). Shots reopen: changes auto-pull." } },
    ],
  },
  pitfalls: [
    { en: "Linked file moved or renamed: every file that links it shows broken pink/missing data. Use File → External Data → Find Missing Files to relink.", ur: "Linked file move ya rename: linked files mein broken pink/missing data. File → External Data → Find Missing Files relink." },
    { en: "Append-then-edit, then expecting the original to update: append is a one-time copy. Use Link if you need live updates.", ur: "Append-then-edit, original update ki expectation: append one-time copy. Live updates ke liye Link." },
    { en: "Linked rig won't pose: you forgot Library Override. Linked data is read-only by default.", ur: "Linked rig pose nahi: Library Override bhula. Linked data default read-only." },
    { en: "Saving as 'Pack External Data' ON inflates file size: it bundles all linked assets into the file, defeating the purpose of linking.", ur: "Save 'Pack External Data' ON file size barhata: saare linked assets bundle, linking ka purpose khatam." },
  ],
  related: [
    { id: "collections", note: { en: "Linking a collection is the most common workflow.", ur: "Collection link karna sab se common workflow." } },
    { id: "asset-browser", note: { en: "Asset Browser is the modern UI on top of append/link.", ur: "Asset Browser append/link ke upar modern UI." } },
  ],
};
