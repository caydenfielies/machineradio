"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import HeroShader from "@/app/components/hero-shader";
import CDModel from "@/app/components/cd-model";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ── Single R3F canvas: shader bg + 3D CD live in the same scene ── */}
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 3.5], fov: 42 }}
      >
        {/* Full-screen shader plane — drawn behind everything */}
        <HeroShader />

        {/* Lighting for the CD */}
        <ambientLight intensity={1.2} />
        <directionalLight
          position={[1.2, 2, 4]}
          intensity={5}
          color="#c8ff47"
        />
        <directionalLight
          position={[1.2, -2, 4]}
          intensity={4}
          color="#ffffff"
        />
        <directionalLight position={[-2, 0, 3]} intensity={3} color="#4488ff" />

        {/* IBL — soft environment that matches the dark shader */}
        <Environment preset="night" />

        {/* CD model */}
        <Suspense fallback={null}>
          <group position={[0, 0, 0]} scale={0.1}>
            <CDModel />
          </group>
        </Suspense>
      </Canvas>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-end pb-12 px-8 md:px-16 pointer-events-none">
        <p className="text-[10px] font-mono text-white/40 tracking-[0.5em] uppercase mb-3">
          Sound · Production · Creative
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tight leading-none">
          Machine<br />Radio
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
      </div>
    </div>
  );
}
