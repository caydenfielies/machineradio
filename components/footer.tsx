"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import styles from "./textcircle.module.css";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const setWordRef = (i: number) => (el: HTMLSpanElement | null) => {
    wordRefs.current[i] = el;
  };

  const words = [
    "Got something on your mind",
    "?",
    "Feel free to reach out.",
    "lee",
    "@",
    "projectlotus.studio",
    "Instagram",
    "2026 Project Lotus™",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Seed each target with placeholder characters
    wordRefs.current.forEach((el, i) => {
      if (el) el.textContent = "X".repeat(words[i].length);
    });

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "none",
        duration: 0.8,
      },
    });

    wordRefs.current.forEach((el, i) => {
      if (!el) return;
      tl.to(
        el,
        {
          scrambleText: {
            text: words[i],
            chars: "upperAndLowerCase",
            speed: 0.7,
            revealDelay: 0.15,
          },
        },
        i === 0 ? 0 : "-=0.65",
      );
    });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => tl.play(),
      onLeaveBack: () => {
        tl.pause(0);
        wordRefs.current.forEach((el, i) => {
          if (el) el.textContent = "X".repeat(words[i].length);
        });
      },
    });

    return () => {
      trigger.kill();
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="footer-container relative flex flex-col h-auto md:h-screen w-screen bg-black text-white mt-10 z-1000 overflow-hidden"
    >
      {/* Main content */}
      <div className="flex-1 flex flex-col-reverse md:flex-row md:items-stretch">
        {/* Spinning circle */}
        <div className="flex items-center justify-center md:w-1/2 px-5 md:px-12.5 py-12 md:py-0 md:border-r md:border-white/10">
          <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] flex items-center justify-center shrink-0">
            <svg
              className="text-circle absolute inset-0 pointer-events-none overflow-visible w-full h-full"
              viewBox="0 0 280 280"
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 140,140 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                />
              </defs>
              <g className={styles.ring}>
                <text
                  xmlSpace="preserve"
                  style={{
                    fontFamily: "var(--font-ft-calhern)",
                    fontSize: "25px",
                    fill: "white",
                    letterSpacing: "3px",
                  }}
                >
                  <textPath
                    href="#circle-path"
                    textLength="691"
                    lengthAdjust="spacing"
                  >
                    {"Let's get in touch ✹ Let's get in touch ✹ "}
                  </textPath>
                </text>
              </g>
            </svg>
            <span className="text-[7rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-none">
              ✷
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center md:w-1/2 px-5 md:px-12.5 pt-20 md:py-0 gap-10 md:gap-14">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]"
            style={{ fontFamily: "var(--font-ft-calhern)", fontWeight: 200 }}
          >
            <span ref={setWordRef(0)}>Got something on your mind</span>
            <span
              ref={setWordRef(1)}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              ?
            </span>{" "}
            <span ref={setWordRef(2)} className="opacity-60">
              Feel free to reach out.
            </span>
          </h2>

          <ul className="flex flex-col">
            <li className="border-t border-white/10">
              <a
                href="mailto:lee@projectlotus.studio"
                className="group flex items-center justify-between py-5 md:py-6 transition-opacity hover:opacity-60"
                style={{ fontFamily: "var(--font-ft-calhern)" }}
              >
                <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  <span ref={setWordRef(3)}>lee</span>
                  <span
                    ref={setWordRef(4)}
                    className="text-sm md:text-lg lg:text-2xl xl:text-3xl"
                  >
                    @
                  </span>
                  <span ref={setWordRef(5)}>projectlotus.studio</span>
                </span>
                <img
                  src="/Images/email.icon.svg"
                  alt=""
                  className="w-5 md:w-6 transition-transform group-hover:translate-x-1"
                />
              </a>
            </li>
            <li className="border-y border-white/10">
              <Link
                href="https://www.instagram.com/yungleexx?igsh=MWw4ZHV2eDkzdnF6eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 md:py-6 transition-opacity hover:opacity-60"
                style={{ fontFamily: "var(--font-ft-calhern)" }}
              >
                <span
                  ref={setWordRef(6)}
                  className="text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                >
                  Instagram
                </span>
                <img
                  src="/Images/instagram-logo.png"
                  alt=""
                  className="w-5 md:w-6 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex justify-center items-center px-5 md:px-12.5 pb-5 md:py-6 text-xs md:text-sm lg:text-base"
        style={{ fontFamily: "var(--font-ft-calhern)" }}
      >
        <span ref={setWordRef(7)}>2026 Project Lotus™</span>
      </div>
    </footer>
  );
}
