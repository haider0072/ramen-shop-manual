"use client";

import { deepConcepts } from "@/data/deep";
import { DEEP_GROUPS } from "@/lib/deep-types";
import { TopBar } from "@/components/TopBar";
import { DeepSidebar } from "@/components/DeepSidebar";
import { DeepCard } from "@/components/DeepCard";
import { useLang } from "@/components/LangProvider";

export default function CorePage() {
  const { lang } = useLang();

  return (
    <>
      <TopBar />
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-x-10">
          <aside className="hidden lg:block lg:col-span-3">
            <DeepSidebar concepts={deepConcepts} />
          </aside>

          <main className="col-span-12 lg:col-span-9 min-w-0 py-10 sm:py-14">
            <header className="mb-12 max-w-[62ch]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint font-sans font-medium mb-5">
                {lang === "en" ? "Foundations" : "Foundations"}
              </p>
              <h1 className="font-serif text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] leading-[1] tracking-[-0.025em] text-ink mb-5">
                {lang === "en" ? "Core concepts." : "Core concepts."}
              </h1>
              <p className="prose-reader text-ink-muted text-[1.05rem]">
                {lang === "en"
                  ? "These are the things that come up over and over in every Blender project. Each entry tries to be the only place you'd need to look. What it is, why it exists, every variant and option, the gotchas, and how it fits next to related concepts."
                  : "Yeh wo cheezein hain jo har Blender project mein baar baar aati hain. Har entry ki koshish hai ke yeh akeli jagah ho jahan tumhe dekhna pare. Kya hai, kyun banayi gayi, har variant aur option, dhyan ki cheezein, aur related concepts ke saath kaise fit hoti hai."}
              </p>
            </header>

            <div className="space-y-0">
              {DEEP_GROUPS.map((g) => {
                const items = deepConcepts.filter((c) => c.group === g.id);
                if (items.length === 0) return null;
                return (
                  <section key={g.id} className="border-t border-rule pt-12 mt-12 first:border-t-0 first:mt-0 first:pt-0">
                    <div className="mb-6 max-w-[62ch]">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-ink-faint font-sans font-medium mb-2">
                        {g.label[lang]}
                      </p>
                      <p className="prose-reader text-ink-muted text-[15px]">
                        {g.description[lang]}
                      </p>
                    </div>
                    <div>
                      {items.map((c) => (
                        <DeepCard key={c.id} concept={c} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
