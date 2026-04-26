"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const MIN_DISPLAY_MS = 1500;

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const counter = { v: 0 };

    if (labelRef.current)
      labelRef.current.textContent = "X".repeat("PROJECT LOTUS".length);

    const tl = gsap.timeline();
    tl.to(counter, {
      v: 100,
      duration: MIN_DISPLAY_MS / 1000,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current)
          counterRef.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
      },
    });
    if (labelRef.current) {
      tl.to(
        labelRef.current,
        {
          duration: 1.2,
          scrambleText: {
            text: "PROJECT LOTUS",
            chars: "upperCase",
            speed: 0.7,
            revealDelay: 0.2,
          },
          ease: "none",
        },
        0,
      );
    }

    const ready = Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((res) =>
            window.addEventListener("load", () => res(), { once: true }),
          ),
    ]);

    let cancelled = false;

    ready.then(async () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      await new Promise((r) => setTimeout(r, remaining));
      if (cancelled) return;

      document.documentElement.classList.remove("preloading");
      window.dispatchEvent(new CustomEvent("preloader:done"));
      gsap.to(overlayRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          setHidden(true);
        },
      });
    });

    return () => {
      cancelled = true;
      tl.kill();
      document.documentElement.classList.remove("preloading");
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-neutral-950 text-white flex flex-col items-center justify-center will-change-transform"
    >
      <span className="text-9xl">✷</span>
      <span
        ref={labelRef}
        className="mt-8 text-xl tracking-[0.4em]"
        style={{ fontFamily: "var(--font-ft-calhern)" }}
      >
        PROJECT LOTUS
      </span>
      <span
        ref={counterRef}
        className="absolute bottom-8 right-8 text-sm tabular-nums"
        style={{ fontFamily: "var(--font-pp-neue-york)" }}
      >
        000
      </span>
    </div>
  );
}
