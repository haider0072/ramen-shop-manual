# Ramen Shop Manual

A personal learning companion for Polygon Runway's "2026 Blender 5.0 Beginner Tutorial" (Ramen Shop scene). The video is fast-paced and skips a lot of the *why* behind each step, so this manual breaks each chapter into concepts with reasoning, alternatives, and product-design analogies.

Built in Roman Urdu for personal use. Twenty chapters covering modeling, materials, lighting, fog, procedural texturing, animation, and render output. Each concept links to a timestamp in the source video.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Inline SVG diagrams
- YouTube IFrame API for in-page video seeking

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` main manual page (all chapters stacked, sidebar navigation, sticky video player)
- `app/core/page.tsx` foundational Blender concepts that recur across chapters
- `data/manual.ts` chapter index
- `data/chapters/` one file per chapter
- `data/core-concepts.ts` foundational concepts
- `components/` layout primitives, content blocks, mobile drawer

## Source

Tutorial: [youtube.com/watch?v=K7\_\_BjW4UWE](https://www.youtube.com/watch?v=K7__BjW4UWE)

Author: Polygon Runway

This is a study companion, not affiliated with the tutorial author.
