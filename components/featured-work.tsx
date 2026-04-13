"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { tracks } from "@/lib/tracks";

export default function FeaturedWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    setCursor({ x: e.clientX, y: e.clientY });
  }

  return (
    <section ref={sectionRef} className=" py-2 mt-30 px-[50px]">
      <span
        className="text-3xl mr-20"
        style={{ fontFamily: "var(--font-pp-neue-york)", fontWeight: "800" }}
      >
        FEATURED WORK
      </span>
      <div className="border-t border-zinc-700">
        {tracks.map((track, i) => (
          <Link
            key={i}
            href={`/work/${track.slug}`}
            className="relative flex items-center justify-stretch border-b border-zinc-700 py-6 transition-colors duration-150 hover:bg-black hover:text-white cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            {/* Song */}
            <span
              className="w-1/2 text-3xl"
              style={{ fontFamily: "var(--font-editorial-new)" }}
            >
              {track.song} by {track.artist}
            </span>

            {/* Date */}
            <span className="w-1/6 text-zinc-500 text-sm">{track.date}</span>

            {/* Producers */}
            <div className="flex items-center gap-2 text-2xl flex-wrap">
              <span className="text-lg" style={{ fontWeight: "300" }}>
                Produced by{" "}
              </span>
              {track.producers}
            </div>
          </Link>
        ))}
      </div>

      {/* Cursor-following image */}
      {hoveredIndex !== null && (
        <div
          className="fixed pointer-events-none z-50 overflow-hidden rounded-sm"
          style={{
            left: cursor.x + 24,
            top: cursor.y - 80,
            width: 220,
            height: 160,
          }}
        >
          <img
            src={tracks[hoveredIndex].image}
            alt={tracks[hoveredIndex].song}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
