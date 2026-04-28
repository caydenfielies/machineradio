"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      normalizeScroll: { allowNestedScroll: true },
      smoothTouch: 0.5,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  useEffect(() => {
    const prev = prevPathnameRef.current;
    const isWorkToWork =
      prev !== pathname &&
      prev.startsWith("/work/") &&
      pathname.startsWith("/work/");

    if (isWorkToWork) {
      gsap.to(window, {
        scrollTo: { y: 0, autoKill: false },
        duration: 1.4,
        ease: "power2.inOut",
        onComplete: () => ScrollTrigger.refresh(),
      });
    } else {
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(0, false);
      } else {
        window.scrollTo(0, 0);
      }
      ScrollTrigger.refresh();
    }

    prevPathnameRef.current = pathname;
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
