"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const estRef = useRef<HTMLParagraphElement>(null);
  const yearRef = useRef<HTMLParagraphElement>(null);
  const headA = useRef<HTMLSpanElement>(null);
  const headB = useRef<HTMLSpanElement>(null);
  const lotusRef = useRef<HTMLSpanElement>(null);
  const byLeeRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    gsap.fromTo(
      video,
      { y: 0 },
      {
        y: 220,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: false,
        },
      },
    );

    const targets: {
      ref: React.RefObject<HTMLElement | null>;
      text: string;
    }[] = [
      { ref: estRef, text: "Est." },
      { ref: yearRef, text: "2019" },
      { ref: headA, text: "Creative Expression" },
      { ref: headB, text: "Innovation" },
      { ref: lotusRef, text: "Project Lotus" },
      { ref: byLeeRef, text: "by Lee" },
    ];

    targets.forEach(({ ref, text }) => {
      if (ref.current) ref.current.textContent = "X".repeat(text.length);
    });

    let tl: gsap.core.Timeline | null = null;
    const startScramble = () => {
      tl = gsap.timeline({ delay: 0.15 });
      targets.forEach(({ ref, text }, i) => {
        if (!ref.current) return;
        tl!.to(
          ref.current,
          {
            duration: 0.7,
            scrambleText: {
              text,
              chars: "upperAndLowerCase",
              speed: 0.7,
              revealDelay: 0.15,
            },
            ease: "none",
          },
          i === 0 ? 0 : "-=0.55",
        );
      });
    };

    if (document.documentElement.classList.contains("preloading")) {
      window.addEventListener("preloader:done", startScramble, { once: true });
    } else {
      startScramble();
    }

    return () => {
      window.removeEventListener("preloader:done", startScramble);
      tl?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="side-texts text-2xl lg:text-3xl xl:text-4xl flex justify-between w-full px-4 md:px-6 lg:px-8 xl:px-12.5 absolute top-6 md:top-auto"
        style={{ fontFamily: "var(--font-editorial-new)" }}
      >
        <p ref={estRef}>Est.</p>
        <p ref={yearRef}>2019</p>
      </div>

      <div className="main-hero flex flex-col items-center gap-10 md:gap-6 lg:gap-10 justify-center">
        <div
          className="top-text text-5xl px-4 text-center"
          style={{ fontFamily: "var(--font-ft-calhern)" }}
        >
          <p>
            <span ref={headA}>Creative Expression</span>{" "}
            <span style={{ fontFamily: "var(--font-editorial-new)" }}>+</span>{" "}
            <span ref={headB}>Innovation</span>
          </p>
        </div>

        <div className="video-canvas w-95 h-100 md:w-80 md:h-56 lg:w-180 lg:h-100 max-w-full flex items-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/fallback.jpg"
            className="h-full object-cover"
          >
            <source src="/Hero/projectlotus_hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className="bottom-text text-xl md:text-3xl lg:text-4xl px-4 text-center"
          style={{ fontFamily: "var(--font-ft-calhern)", fontWeight: "200" }}
        >
          <p>
            <span ref={lotusRef}>Project Lotus</span>{" "}
            <span
              ref={byLeeRef}
              style={{ fontFamily: "var(--font-editorial-new)" }}
            >
              by Lee
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
