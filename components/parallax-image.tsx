"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export default function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrap = wrapRef.current;
    if (!container || !wrap) return;

    const tween = gsap.fromTo(
      wrap,
      { yPercent: -12, scale: 1.18 },
      {
        yPercent: 12,
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        ref={wrapRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}
