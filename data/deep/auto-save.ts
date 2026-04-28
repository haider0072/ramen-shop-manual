import type { DeepConcept } from "@/lib/deep-types";

export const autoSaveConcept: DeepConcept = {
  id: "auto-save",
  group: "interface",
  title: { en: "Auto-Save & File Recovery", ur: "Auto-Save & File Recovery" },
  tagline: {
    en: "Blender writes a backup every few minutes. The single most important setting for protecting your work from crashes.",
    ur: "Blender har kuch minutes baad backup likhta. Crashes se kaam bachane ki sab se important setting.",
  },
  shortcuts: [
    { keys: "Ctrl + S", meaning: { en: "Save current file.", ur: "Current file save." } },
    { keys: "Ctrl + Shift + S", meaning: { en: "Save As (new path/name).", ur: "Save As (new path/name)." } },
    { keys: "F2", meaning: { en: "Save As shortcut.", ur: "Save As shortcut." } },
  ],
  whatItIs: [
    {
      en: "Blender's auto-save writes a `.blend1` (and `.blend2`, etc.) backup of your file at a configurable interval. It also writes an emergency dump to the temp folder so you can recover after a crash.",
      ur: "Blender ka auto-save tumhari file ka `.blend1` (aur `.blend2`, etc.) backup configurable interval par likhta. Crash ke baad recover karne ke liye temp folder mein emergency dump bhi.",
    },
    {
      en: "Two layers: **versioned save backups** (`.blend1`, `.blend2`, ... rolled on each manual save) and **timed auto-save** (a `.blend` written to temp every X minutes). The timed one is what saves you from a freeze before you hit Ctrl+S.",
      ur: "Do layers: **versioned save backups** (`.blend1`, `.blend2`, ... har manual save par roll) aur **timed auto-save** (har X minute par temp mein `.blend`). Timed wala Ctrl+S se pehle freeze se bachata.",
    },
  ],
  variants: {
    heading: { en: "Settings (Preferences → Save & Load)", ur: "Settings (Preferences → Save & Load)" },
    items: [
      {
        name: "Save Versions",
        description: { en: "How many `.blend1`, `.blend2`, ... backups to keep next to your main file. 1 = one backup. 5 = five most recent saves.", ur: "Kitne `.blend1`, `.blend2` backups main file ke saath rakhne. 1 = aik backup. 5 = paanch most recent saves." },
        when: { en: "3-5 is a good default. Higher uses more disk but more rollback options.", ur: "3-5 achha default. Zyada disk use lekin zyada rollback." },
      },
      {
        name: "Auto Save Temporary Files",
        description: { en: "The big one. Toggle ON. Sets the timed auto-save in motion.", ur: "Bara wala. ON karo. Timed auto-save chalu." },
      },
      {
        name: "Timer (minutes)",
        description: { en: "How often the auto-save fires. Default 2 min. Lower for risky work; higher if auto-save lag annoys you.", ur: "Auto-save kitni baar. Default 2 min. Risky work ke liye kam; lag annoy kare to zyada." },
      },
      {
        name: "Save Preview Images",
        description: { en: "Saves a thumbnail of the viewport in the .blend file. Useful for browsing files later.", ur: "Viewport ka thumbnail .blend file mein save. Baad mein files browse karne ke liye useful." },
      },
      {
        name: "Compress File",
        description: { en: "Saves smaller files but takes a moment longer. Worth it for big scenes.", ur: "Smaller files lekin save thora longer. Bare scenes ke liye worth." },
      },
      {
        name: "File → Recover → Last Session",
        description: { en: "After a crash, this re-opens the file at the most recent auto-save point. Don't open the broken file first; recover instead.", ur: "Crash ke baad yeh file ko most recent auto-save par re-open. Pehle broken file mat kholo; recover karo." },
      },
      {
        name: "File → Recover → Auto Save",
        description: { en: "Browse all auto-save snapshots in temp. Useful when you accidentally saved over good work.", ur: "Saare auto-save snapshots temp mein browse. Accidentally good work par save kiya to useful." },
      },
      {
        name: "Recent Files (File → Open Recent)",
        description: { en: "Quick access to the last ~10 files opened. Customizable count in Preferences → Save & Load.", ur: "Last ~10 files quick access. Preferences → Save & Load mein count customizable." },
      },
    ],
  },
  recipe: {
    heading: { en: "Bulletproof save setup", ur: "Bulletproof save setup" },
    steps: [
      { step: { en: "Edit → Preferences → Save & Load. Tick 'Auto Save Temporary Files'. Timer: 2 minutes.", ur: "Edit → Preferences → Save & Load. 'Auto Save Temporary Files' tick. Timer: 2 minutes." } },
      { step: { en: "Save Versions: 5. Compress File: on. Save Preview Images: on.", ur: "Save Versions: 5. Compress File: on. Save Preview Images: on." } },
      { step: { en: "Save preferences. Now every 2 minutes Blender writes a temp dump.", ur: "Preferences save. Ab har 2 minute Blender temp dump." } },
      { step: { en: "Habit: `Ctrl+S` after every meaningful change. The auto-save is a safety net, not a substitute.", ur: "Adat: har meaningful change ke baad `Ctrl+S`. Auto-save safety net, substitute nahi." } },
    ],
  },
  pitfalls: [
    { en: "Ignoring 'Save Versions' and overwriting good work: rollback impossible. Set Versions to 5 once and never think about it.", ur: "'Save Versions' ignore aur good work par overwrite: rollback nahi. Versions 5 set karo aur bhul jao." },
    { en: "Never used File → Recover after crash: most users don't know it exists and lose hours. Bookmark it mentally.", ur: "Crash ke baad File → Recover kabhi use nahi: aksar log nahi jante aur hours khote. Mentally bookmark." },
    { en: "Auto-save fires while modeling and feels laggy: longer timer (5-10 min) reduces lag.", ur: "Modeling ke dauran auto-save laggy: longer timer (5-10 min) lag kam." },
    { en: "Working from cloud-synced folder (Dropbox/iCloud): saving while syncing can corrupt the file. Save to local disk, sync separately.", ur: "Cloud-synced folder (Dropbox/iCloud) mein kaam: syncing ke dauran save corrupt. Local disk save, sync alag." },
  ],
  related: [],
};
