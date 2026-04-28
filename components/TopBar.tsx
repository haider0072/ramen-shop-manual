"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

interface Props {
  title?: string;
}

export function TopBar({ title = "Ramen Shop Manual" }: Props) {
  const pathname = usePathname();
  const onCore = pathname?.startsWith("/core");

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-sm hairline-b">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 h-[64px] flex items-center justify-between gap-4">
        <Link href="/" className="font-serif text-[15px] tracking-[-0.01em] text-ink truncate">
          {title}
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          <Link
            href="/"
            className={`text-[12px] uppercase tracking-[0.14em] font-sans font-medium transition-colors ${
              !onCore ? "text-ink" : "text-ink-muted hover:text-ink"
            }`}
          >
            Manual
          </Link>
          <Link
            href="/core"
            className={`text-[12px] uppercase tracking-[0.14em] font-sans font-medium transition-colors ${
              onCore ? "text-ink" : "text-ink-muted hover:text-ink"
            }`}
          >
            Core
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
