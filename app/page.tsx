"use client";

import { manual } from "@/data/manual";
import { TopBar } from "@/components/TopBar";
import { Sidebar } from "@/components/Sidebar";
import { ChapterSection } from "@/components/ChapterSection";
import { YouTubePlayer } from "@/components/YouTubePlayer";
import { MobileChapterBar } from "@/components/MobileChapterBar";
import { useLang } from "@/components/LangProvider";

export default function Home() {
  const { lang } = useLang();
  return (
    <>
      <TopBar />
      <MobileChapterBar chapters={manual.chapters} />
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-x-10">
          <aside className="hidden lg:block lg:col-span-3">
            <Sidebar chapters={manual.chapters} />
          </aside>

          <main className="col-span-12 lg:col-span-6 min-w-0 py-8 sm:py-12">
            {/* Inline YouTube on mobile only */}
            <div className="lg:hidden mb-10">
              <YouTubePlayer videoId={manual.videoId} />
              <p className="font-sans text-[11.5px] text-ink-faint mt-2">
                {lang === "en"
                  ? '"Watch from" buttons seek this player.'
                  : '"Watch from" buttons isi player ko seek karte hain.'}
              </p>
            </div>

            <div className="mb-12 sm:mb-16">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint font-sans font-medium mb-5 sm:mb-6">
                Ramen Shop · Blender 5.x · 2026
              </p>
              <h1 className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4.25rem] leading-[0.98] tracking-[-0.025em] text-ink mb-6 sm:mb-8">
                {lang === "en" ? (
                  <>
                    A field manual
                    <br />
                    for the Ramen Shop
                    <br />
                    tutorial.
                  </>
                ) : (
                  <>
                    A field manual
                    <br />
                    for the Ramen Shop
                    <br />
                    tutorial.
                  </>
                )}
              </h1>
              <p className="prose-reader max-w-[58ch] text-ink-muted text-[1rem] sm:text-[1.1rem]">
                {lang === "en" ? (
                  <>
                    The tutorial moves fast and skips the <em>why</em> behind a
                    lot of small steps, the kind of context you need before you
                    can build your own assets. This manual fills that gap. Every
                    concept is written with the reasoning behind it, plus
                    crossovers from product design and game dev where they
                    apply.
                  </>
                ) : (
                  <>
                    Tutorial fast-paced hai. Bohut sari cheezein woh chhoti
                    chhoti karke skip kar deta hai jin ka <em>kyun</em> samjhe
                    bina apne khud ke assets banana mushkil hota hai. Yeh manual
                    us gap ko bharne ke liye hai. Har concept yahan us ke piche
                    ki vajah ke saath likha hai, aur jahan kuch product-design
                    ya game-dev se connect hota hai, woh bhi.
                  </>
                )}
              </p>
              <p className="prose-reader max-w-[58ch] text-ink-muted text-[0.95rem] sm:text-[1.05rem] mt-3">
                {lang === "en" ? (
                  <>
                    The player on the right follows along (top on mobile).
                    Click &quot;Watch from&quot; on any concept and the video
                    seeks to that moment. For the foundations, head to the{" "}
                    <a href="/core" className="text-accent underline underline-offset-4">
                      Core concepts
                    </a>{" "}
                    page. Note: chapter content below is in Roman Urdu only;
                    the bilingual switch covers Core concepts.
                  </>
                ) : (
                  <>
                    Right side player saath chalta hai (mobile pe upar). Kisi
                    bhi concept par &quot;Watch from&quot; click karo, video us
                    pal pe seek ho jayega. Foundation ke liye{" "}
                    <a href="/core" className="text-accent underline underline-offset-4">
                      Core concepts
                    </a>{" "}
                    page bhi hai. Note: neeche chapters Roman Urdu mein hi
                    hain; bilingual switch Core concepts par chalta hai.
                  </>
                )}
              </p>
            </div>

            {manual.chapters.map((c) => (
              <ChapterSection key={c.id} chapter={c} />
            ))}

            <footer className="hairline-t mt-16 pt-10 pb-20">
              <p className="font-sans text-[12px] text-ink-faint leading-relaxed">
                Source video: youtube.com/watch?v={manual.videoId}
                <br />
                Companion built for personal study.
              </p>
            </footer>
          </main>

          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-[88px] py-10">
              <div className="text-[11px] uppercase tracking-[0.16em] text-ink-faint mb-3 font-sans font-medium">
                Source
              </div>
              <YouTubePlayer videoId={manual.videoId} />
              <p className="font-sans text-[11.5px] text-ink-faint mt-3 leading-relaxed">
                {lang === "en"
                  ? '"Watch from" buttons on each concept seek this player.'
                  : 'Concepts ke "Watch from" buttons isi player ko seek karte hain.'}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
