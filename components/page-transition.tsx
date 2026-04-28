"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export const TRANSITION_EVENT = "page-transition:start";
export const TRANSITION_FADE_IN_MS = 400;

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  // Listen for transition start events (e.g. from carousel clicks)
  useEffect(() => {
    const onStart = () => setActive(true);
    window.addEventListener(TRANSITION_EVENT, onStart);
    return () => window.removeEventListener(TRANSITION_EVENT, onStart);
  }, []);

  // Fade in when active
  useEffect(() => {
    if (!active) return;
    const overlay = overlayRef.current;
    const star = starRef.current;
    if (!overlay) return;
    gsap.fromTo(
      overlay,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: TRANSITION_FADE_IN_MS / 1000, ease: "power2.out" },
    );
    if (star) {
      gsap.fromTo(
        star,
        { rotate: 0 },
        { rotate: 360, duration: 1.4, ease: "power2.inOut", repeat: -1 },
      );
    }
  }, [active]);

  // Fade out after pathname changes
  useEffect(() => {
    if (!active) return;
    const overlay = overlayRef.current;
    if (!overlay) return;
    // Wait a beat for the new page to mount
    const t = setTimeout(() => {
      gsap.to(overlay, {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => setActive(false),
      });
    }, 200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!active) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9998] bg-neutral-950 text-white flex items-center justify-center pointer-events-none"
      style={{ opacity: 0 }}
    >
      <span ref={starRef} className="text-7xl inline-block">
        ✷
      </span>
    </div>
  );
}
