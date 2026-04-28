"use client";

import { useEffect, useRef, useState } from "react";
import { formatTimestamp, loadYouTubeAPI, usePlayer } from "./PlayerProvider";
import { useLang } from "./LangProvider";

interface Props {
  videoId: string;
  startsAt?: number;
}

interface YTPlayer {
  seekTo: (s: number, allowSeekAhead: boolean) => void;
  playVideo: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
}

interface YTGlobal {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      playerVars?: Record<string, string | number>;
      events?: { onReady?: () => void; onStateChange?: (e: { data: number }) => void };
    },
  ) => YTPlayer;
}

const RESUME_KEY_PREFIX = "yt-resume-v1:";
const RESUME_THRESHOLD = 30; // only suggest resume if past 30s

export function YouTubePlayer({ videoId, startsAt = 0 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const { registerPlayer } = usePlayer();
  const { lang } = useLang();
  const [resumeAt, setResumeAt] = useState<number | null>(null);

  // Load saved time once on mount.
  useEffect(() => {
    if (typeof localStorage === "undefined") return;
    const saved = localStorage.getItem(RESUME_KEY_PREFIX + videoId);
    if (saved) {
      const t = parseFloat(saved);
      if (!isNaN(t) && t > RESUME_THRESHOLD) setResumeAt(t);
    }
  }, [videoId]);

  useEffect(() => {
    let cancelled = false;
    let saveInterval: ReturnType<typeof setInterval> | null = null;

    loadYouTubeAPI().then(() => {
      if (cancelled || !containerRef.current) return;
      const YT = (window as unknown as { YT: YTGlobal }).YT;
      playerRef.current = new YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          start: startsAt,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            registerPlayer({
              seekTo: (s: number) => {
                playerRef.current?.seekTo(s, true);
                playerRef.current?.playVideo();
              },
              getCurrentTime: () => playerRef.current?.getCurrentTime() ?? 0,
            });

            // Save current time every 5s while the player exists.
            saveInterval = setInterval(() => {
              try {
                const p = playerRef.current;
                if (!p) return;
                const t = p.getCurrentTime();
                const d = p.getDuration();
                if (t > 5 && (d === 0 || t < d - 10)) {
                  localStorage.setItem(RESUME_KEY_PREFIX + videoId, String(Math.floor(t)));
                }
              } catch {}
            }, 5000);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (saveInterval) clearInterval(saveInterval);
    };
  }, [videoId, startsAt, registerPlayer]);

  function resume() {
    if (resumeAt == null) return;
    playerRef.current?.seekTo(resumeAt, true);
    playerRef.current?.playVideo();
    setResumeAt(null);
  }

  function dismissResume() {
    setResumeAt(null);
    try {
      localStorage.removeItem(RESUME_KEY_PREFIX + videoId);
    } catch {}
  }

  return (
    <div className="space-y-2">
      <div className="aspect-video w-full bg-[#000] overflow-hidden">
        <div ref={containerRef} className="w-full h-full" />
      </div>
      {resumeAt != null && (
        <div className="flex items-center justify-between gap-3 px-3 py-2 hairline-t hairline-b text-[12px] font-sans">
          <span className="text-ink-muted">
            {lang === "en" ? "Last seen at " : "Last dekha tha "}
            <span className="font-mono text-ink">{formatTimestamp(resumeAt)}</span>
          </span>
          <span className="flex items-center gap-2">
            <button
              onClick={resume}
              className="text-[11px] uppercase tracking-[0.12em] font-medium text-accent hover:underline underline-offset-4"
            >
              {lang === "en" ? "Resume" : "Resume"}
            </button>
            <span className="text-ink-faint">·</span>
            <button
              onClick={dismissResume}
              className="text-[11px] uppercase tracking-[0.12em] font-medium text-ink-muted hover:text-ink"
            >
              {lang === "en" ? "Start over" : "Start over"}
            </button>
          </span>
        </div>
      )}
    </div>
  );
}
