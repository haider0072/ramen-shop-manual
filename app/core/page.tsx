import { coreConcepts } from "@/data/core-concepts";
import { CORE_GROUPS } from "@/lib/core-types";
import { TopBar } from "@/components/TopBar";
import { CoreSidebar } from "@/components/CoreSidebar";
import { CoreConceptCard } from "@/components/CoreConceptCard";

export const metadata = { title: "Core Concepts. Ramen Shop Manual." };

export default function CorePage() {
  return (
    <>
      <TopBar />
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-12 gap-x-10">
          <aside className="hidden lg:block lg:col-span-3">
            <CoreSidebar concepts={coreConcepts} />
          </aside>

          <main className="col-span-12 lg:col-span-9 min-w-0 py-12">
            <header className="mb-14 max-w-[58ch]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint font-sans font-medium mb-6">
                Foundations
              </p>
              <h1 className="font-serif text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] leading-[1] tracking-[-0.025em] text-ink mb-6">
                Core concepts.
              </h1>
              <p className="prose-reader text-ink-muted text-[1.05rem]">
                Yeh wo cheezein hain jo har chapter ke andar baar baar aati hain. Modeling, transforms, modifiers, materials, lighting, animation. Tutorial yeh assume karta hai ke tum already jaante ho. Agar nahi jaante, ya kuch bhul gaye, isse pehle tour kar lo. Phir har chapter zyada quickly samajh aayega.
              </p>
            </header>

            <div className="space-y-0">
              {CORE_GROUPS.map((g) => {
                const items = coreConcepts.filter((c) => c.group === g.id);
                if (items.length === 0) return null;
                return (
                  <section key={g.id} className="border-t border-rule pt-12 mt-12 first:border-t-0 first:mt-0 first:pt-0">
                    <div className="mb-4">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-ink-faint font-sans font-medium mb-2">
                        {g.label}
                      </p>
                      <p className="prose-reader text-ink-muted text-[15px] max-w-[62ch]">
                        {g.description}
                      </p>
                    </div>
                    <div>
                      {items.map((c) => (
                        <CoreConceptCard key={c.id} concept={c} />
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
