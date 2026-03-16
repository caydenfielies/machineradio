"use client";

import { Canvas } from "@react-three/fiber";
import HeroShader from "@/app/components/hero-shader";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 1] }}
      >
        <HeroShader />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center"></div>
    </div>
  );
}
