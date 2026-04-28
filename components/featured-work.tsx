"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tracks as allTracks, type Track } from "@/lib/tracks";
import {
  TRANSITION_EVENT,
  TRANSITION_FADE_IN_MS,
} from "@/components/page-transition";

gsap.registerPlugin(ScrollTrigger);

type FeaturedWorkProps = {
  tracks?: Track[];
  title?: string;
  className?: string;
  showTransition?: boolean;
};

export default function FeaturedWork({
  tracks = allTracks,
  title = "FEATURED WORK",
  className = "mt-30 md:mt-20 lg:mt-70",
  showTransition = true,
}: FeaturedWorkProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ x: 0, y: 0, dragged: false });
  const router = useRouter();

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { x: e.clientX, y: e.clientY, dragged: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (
      Math.abs(e.clientX - dragRef.current.x) > 8 ||
      Math.abs(e.clientY - dragRef.current.y) > 8
    ) {
      dragRef.current.dragged = true;
    }
  };
  const onClick = (e: React.MouseEvent, href: string) => {
    if (dragRef.current.dragged) {
      e.preventDefault();
      return;
    }
    if (!showTransition) return;
    e.preventDefault();
    window.dispatchEvent(new Event(TRANSITION_EVENT));
    setTimeout(() => router.push(href), TRANSITION_FADE_IN_MS);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const wraps = section.querySelectorAll<HTMLElement>("[data-parallax]");

    const triggers = Array.from(wraps).map((wrap) =>
      gsap.fromTo(
        wrap,
        { yPercent: -12, scale: 1.18 },
        {
          yPercent: 12,
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      ),
    );

    return () => {
      triggers.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={className}>
      <div className="flex items-end justify-between px-4 md:px-8 lg:px-12.5 mb-6">
        <span
          className="text-2xl md:text-3xl"
          style={{ fontFamily: "var(--font-pp-neue-york)", fontWeight: "800" }}
        >
          {title}
        </span>
        <div className="hidden md:flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-proximity px-4 md:px-8 lg:px-12.5 scroll-pl-4 md:scroll-pl-8 lg:scroll-pl-12.5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tracks.map((track, i) => (
          <Link
            key={i}
            href={`/work/${track.slug}`}
            data-card
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onClick={(e) => onClick(e, `/work/${track.slug}`)}
            className="snap-start shrink-0 w-[75vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw] xl:w-[22vw] group"
          >
            <div className="relative aspect-square overflow-hidden bg-zinc-900">
              <div
                data-parallax
                className="absolute inset-0 w-full h-full will-change-transform"
              >
                <img
                  src={track.image}
                  alt={`${track.song} by ${track.artist}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <h3
                className="text-2xl md:text-3xl leading-tight"
                style={{
                  fontFamily: "var(--font-pp-neue-york)",
                  fontWeight: "500",
                }}
              >
                {track.song}
              </h3>
              <p className="text-sm text-zinc-500 flex items-center justify-between">
                <span>{track.artist}</span>
                <span>{track.date}</span>
              </p>
              <p
                className="text-sm mt-1"
                style={{ fontFamily: "var(--font-pp-neue-york)" }}
              >
                <span className="text-zinc-500">Produced by </span>
                {track.producers}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
