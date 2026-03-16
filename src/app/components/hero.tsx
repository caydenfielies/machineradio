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

        {/* CD model — offset to the right half */}
        <Suspense fallback={null}>
          <group position={[0, 0, 0]} scale={0.1}>
            <CDModel />
          </group>
        </Suspense>
      </Canvas>

      <div className="absolute inset-0 flex items-center pointer-events-none"></div>
    </div>
  );
}
