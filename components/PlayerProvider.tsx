"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

interface PlayerApi {
  seekTo: (s: number) => void;
  getCurrentTime?: () => number;
}

interface PlayerContextValue {
  seek: (seconds: number) => void;
  getCurrentTime: () => number | null;
  registerPlayer: (api: PlayerApi) => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const playerRef = useRef<PlayerApi | null>(null);

  const registerPlayer = useCallback((api: PlayerApi) => {
    playerRef.current = api;
  }, []);

  const seek = useCallback((seconds: number) => {
    playerRef.current?.seekTo(seconds);
  }, []);

  const getCurrentTime = useCallback(() => {
    try {
      return playerRef.current?.getCurrentTime?.() ?? null;
    } catch {
      return null;
    }
  }, []);

  return (
    <PlayerContext.Provider value={{ seek, getCurrentTime, registerPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) {
    return {
      seek: () => {},
      getCurrentTime: () => null as number | null,
      registerPlayer: () => {},
    };
  }
  return ctx;
}

// Format seconds into "MM:SS" or "HH:MM:SS"
export function formatTimestamp(s: number): string {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  const mm = String(m).padStart(2, "0");
  const ss = String(sec).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

// YouTube IFrame API, singleton loader
let ytApiPromise: Promise<void> | null = null;
export function loadYouTubeAPI(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    if ((window as unknown as { YT?: { Player: unknown } }).YT?.Player) {
      resolve();
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    (window as unknown as { onYouTubeIframeAPIReady: () => void }).onYouTubeIframeAPIReady = () => resolve();
  });
  return ytApiPromise;
}

// Hook for the active chapter, auto-updates as user scrolls
export function useActiveChapter(chapterIds: string[]) {
  const [activeId, setActiveId] = useState<string>(chapterIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = chapterIds
      .map((id) => document.getElementById(`chapter-${id}`))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the topmost intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const id = visible[0].target.id.replace(/^chapter-/, "");
          setActiveId(id);
        }
      },
      { rootMargin: "-88px 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [chapterIds]);

  return activeId;
}
