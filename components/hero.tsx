"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="side-texts text-xl lg:text-3xl xl:text-4xl flex justify-between w-full px-4 md:px-6 lg:px-8 xl:px-12.5 absolute top-6 md:top-6 lg:top-8"
        style={{ fontFamily: "var(--font-editorial-new)" }}
      >
        <p>Since</p>
        <p>2019</p>
      </div>

      <div className="main-hero flex flex-col items-center gap-3 md:gap-6 lg:gap-10 justify-center">
        <div
          className="top-text text-5xl lg:text-5xl px-4 text-center"
          style={{ fontFamily: "var(--font-ft-calhern)" }}
        >
          <p>
            Creative Expression{" "}
            <span style={{ fontFamily: "var(--font-editorial-new)" }}>+</span>{" "}
            Innovation
          </p>
        </div>

        <div className="video-canvas w-80 h-68 md:w-80 md:h-56 lg:w-180 lg:h-100 flex items-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/fallback.jpg"
            className="object-cover"
          >
            <source src="/Hero/projectlotus_hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className="bottom-text text-xl md:text-3xl lg:text-4xl px-4 text-center"
          style={{ fontFamily: "var(--font-ft-calhern)", fontWeight: "200" }}
        >
          <p>
            Project Lotus{" "}
            <span style={{ fontFamily: "var(--font-editorial-new)" }}>
              by Lee
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
