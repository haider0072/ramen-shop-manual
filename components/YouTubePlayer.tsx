"use client";

import { useEffect, useRef } from "react";
import { loadYouTubeAPI, usePlayer } from "./PlayerProvider";

interface Props {
  videoId: string;
  startsAt?: number;
}

interface YTPlayer {
  seekTo: (s: number, allowSeekAhead: boolean) => void;
  playVideo: () => void;
}

interface YTGlobal {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      playerVars?: Record<string, string | number>;
      events?: { onReady?: () => void };
    },
  ) => YTPlayer;
}

export function YouTubePlayer({ videoId, startsAt = 0 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const { registerPlayer } = usePlayer();

  useEffect(() => {
    let cancelled = false;
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
            });
          },
        },
      });
    });
    return () => {
      cancelled = true;
    };
  }, [videoId, startsAt, registerPlayer]);

  return (
    <div className="aspect-video w-full bg-[#000] overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
